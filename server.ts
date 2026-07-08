import 'dotenv/config';
import express from 'express';
import path from 'path';
import fs from 'fs/promises';
import { createServer as createViteServer } from 'vite';
import nodemailer from 'nodemailer';

const app = express();
const PORT = 3000;
const SUBMISSIONS_FILE = path.join(process.cwd(), 'submissions.json');

// Middleware to parse JSON bodies
app.use(express.json());

// Helper function to read submissions from disk safely
async function readSubmissions() {
  try {
    const data = await fs.readFile(SUBMISSIONS_FILE, 'utf-8');
    return JSON.parse(data);
  } catch (err: any) {
    if (err.code === 'ENOENT') {
      // File doesn't exist yet, return empty list
      return [];
    }
    console.error('Error reading submissions file:', err);
    return [];
  }
}

// Helper function to write submissions to disk
async function writeSubmissions(submissions: any[]) {
  try {
    await fs.writeFile(SUBMISSIONS_FILE, JSON.stringify(submissions, null, 2), 'utf-8');
  } catch (err) {
    console.error('Error saving submissions to file:', err);
  }
}

// ------------------- MAIL SENDER HELPER -------------------

let lastSmtpError: string | null = null;
let smtpConnectionChecked = false;
let smtpConnectionWorking = false;

function getMailTransporter() {
  const host = process.env.SMTP_HOST;
  const port = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT, 10) : 587;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    return null;
  }

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: {
      user,
      pass,
    },
  });
}

async function verifySmtpConnection() {
  const transporter = getMailTransporter();
  if (!transporter) {
    smtpConnectionChecked = true;
    smtpConnectionWorking = false;
    lastSmtpError = 'SMTP credentials not configured in environment variables.';
    return false;
  }

  try {
    // 5 seconds connection verification timeout
    await Promise.race([
      transporter.verify(),
      new Promise((_, reject) => setTimeout(() => reject(new Error('SMTP connection verification timed out (5 seconds)')), 5000))
    ]);
    smtpConnectionChecked = true;
    smtpConnectionWorking = true;
    lastSmtpError = null;
    return true;
  } catch (err: any) {
    smtpConnectionChecked = true;
    smtpConnectionWorking = false;
    lastSmtpError = err.message || String(err);
    return false;
  }
}

// Background startup connection verification
setTimeout(() => {
  verifySmtpConnection().catch(err => console.error('SMTP Startup verification error:', err));
}, 1000);

async function dispatchEmailNotification(subject: string, htmlContent: string, recipientOverride?: string) {
  try {
    const transporter = getMailTransporter();
    if (!transporter) {
      console.log('📬 [SMTP Status] Mail not configured. Skipping active SMTP delivery.');
      return { sent: false, reason: 'SMTP keys are not defined in environment variables.' };
    }

    const fromAddress = process.env.SMTP_FROM || `"Kisan4U Corporate Support" <support@kisan4u.com>`;
    const toAddress = recipientOverride || process.env.NOTIFICATION_DESTINATION || 'support@kisan4u.com';

    if (!toAddress) {
      console.log('📬 [SMTP Status] No endpoint destination email specified.');
      return { sent: false, reason: 'No destination recipient email defined.' };
    }

    const info = await transporter.sendMail({
      from: fromAddress,
      to: toAddress,
      subject: subject,
      html: htmlContent,
    });

    console.log('📬 [SMTP Status] Mail sent successfully:', info.messageId);
    smtpConnectionWorking = true;
    lastSmtpError = null;
    return { sent: true, messageId: info.messageId };
  } catch (error: any) {
    console.error('📬 [SMTP Status] Failed to deliver SMTP cargo:', error);
    lastSmtpError = error.message || 'SMTP server rejected message.';
    smtpConnectionWorking = false;
    return { sent: false, reason: error.message || 'SMTP server rejected message.' };
  }
}

// ------------------- API ENDPOINTS -------------------

// 1. Live Health Check
app.get('/api/health', (req, res) => {
  const hasHost = !!process.env.SMTP_HOST;
  const hasUser = !!process.env.SMTP_USER;
  const hasPass = !!process.env.SMTP_PASS;

  res.json({
    status: 'ok',
    uptime: process.uptime(),
    smtp: {
      configured: hasHost && hasUser && hasPass,
      host: process.env.SMTP_HOST || 'Not Set',
      destination: process.env.NOTIFICATION_DESTINATION || 'support@kisan4u.com',
      lastError: lastSmtpError,
      connectionChecked: smtpConnectionChecked,
      connectionWorking: smtpConnectionWorking,
      checks: {
        hasHost,
        hasUser,
        hasPass: hasPass ? 'PRESENT (PROTECTED)' : 'MISSING',
      }
    }
  });
});

// 1b. Test SMTP Route dynamically
app.post('/api/smtp-test', async (req, res) => {
  const success = await verifySmtpConnection();
  res.json({
    success,
    smtp: {
      configured: !!process.env.SMTP_HOST && !!process.env.SMTP_USER && !!process.env.SMTP_PASS,
      working: smtpConnectionWorking,
      lastError: lastSmtpError,
    }
  });
});

// 2. Contact form submission
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing required fields: name, email, message are required.' });
    }

    const ticketCode = `TKT-${Math.floor(1000 + Math.random() * 9000)}-${new Date().getFullYear()}`;
    const newSubmission = {
      id: `contact_${Date.now()}_${Math.random().toString(36).substr(2, 5)}`,
      type: 'contact',
      name,
      email,
      phone: phone || '',
      subject: subject || 'General Query',
      message,
      ticketCode,
      timestamp: new Date().toISOString(),
    };

    const submissions = await readSubmissions();
    submissions.push(newSubmission);
    await writeSubmissions(submissions);

    // --- DISPATCH SMTP EMAILS ---
    // Email 1: Alert the Corporate Desk
    const companyHtml = `
      <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #f8fafc; padding: 24px; color: #1e293b;">
        <div style="max-width: 600px; margin: 0 auto; bg-color: #ffffff; background: #ffffff; border-radius: 16px; border: 1px solid #e2e8f0; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);">
          <!-- Header -->
          <div style="background-color: #059669; padding: 32px 24px; text-align: center;">
            <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: bold; letter-spacing: -0.5px;">Kisan4U Enterprise System</h1>
            <p style="color: #d1fae5; margin: 8px 0 0 0; font-size: 14px; font-family: monospace;">🚨 NEW CONTACT INQUIRY RECEIVED</p>
          </div>
          <!-- Body -->
          <div style="padding: 32px 24px;">
            <h2 style="font-size: 18px; color: #0f172a; margin-top: 0; margin-bottom: 20px;">Customer Desk Summary</h2>
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px; font-size: 14px;">
              <tr>
                <td style="padding: 8px 0; color: #64748b; width: 140px; font-weight: 500;">Ticket Code:</td>
                <td style="padding: 8px 0; color: #0f172a; font-family: monospace; font-weight: bold;">${ticketCode}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #64748b; font-weight: 500;">Client Name:</td>
                <td style="padding: 8px 0; color: #0f172a; font-weight: bold;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #64748b; font-weight: 500;">Client Email:</td>
                <td style="padding: 8px 0; color: #2563eb;"><a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #64748b; font-weight: 500;">Phone Number:</td>
                <td style="padding: 8px 0; color: #0f172a;">${phone || 'Not Supplied'}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #64748b; font-weight: 500;">Subject Topic:</td>
                <td style="padding: 8px 0; color: #0f172a; font-weight: 600;">${subject}</td>
              </tr>
            </table>

            <div style="background-color: #f1f5f9; border-left: 4px solid #059669; padding: 16px; border-radius: 4px; font-style: italic; margin-bottom: 24px;">
              <span style="font-size: 12px; font-weight: bold; color: #475569; display: block; margin-bottom: 8px; font-style: normal; font-family: monospace;">CLIENT MESSAGE:</span>
              <p style="margin: 0; font-size: 13px; color: #334155; line-height: 1.6;">"${message}"</p>
            </div>

            <div style="text-align: center; margin-top: 32px;">
              <a href="${process.env.APP_URL || 'http://localhost:3000'}" style="background-color: #0f172a; color: #ffffff; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-size: 13px; font-weight: 600; font-family: sans-serif;">Go to Admin Ledger Desk</a>
            </div>
          </div>
          <!-- Footer -->
          <div style="background-color: #f8fafc; border-t: 1px solid #f1f5f9; padding: 16px; text-align: center; font-size: 11px; color: #94a3b8;">
            Sent automatically by Kisan4U Gateway. This message contains live server credentials.
          </div>
        </div>
      </div>
    `;
    await dispatchEmailNotification(`[New Contact Inquiry] ${subject} - ${ticketCode}`, companyHtml);

    // Email 2: Send receipt back to the Customer
    const customerHtml = `
      <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #f8fafc; padding: 24px; color: #1e293b;">
        <div style="max-width: 600px; margin: 0 auto; bg-color: #ffffff; background: #ffffff; border-radius: 16px; border: 1px solid #e2e8f0; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);">
          <!-- Header Accent Banner -->
          <div style="background-color: #059669; padding: 32px 24px; text-align: center;">
            <p style="color: #ffffff; margin: 0; font-size: 28px; font-weight: bold; letter-spacing: -0.5px;">Kisan4U</p>
            <p style="color: #d1fae5; margin: 4px 0 0 0; font-size: 13px; font-weight: bold; text-transform: uppercase; letter-spacing: 1px;">We have received your message</p>
          </div>
          <!-- Body -->
          <div style="padding: 32px 24px;">
            <p style="font-size: 15px; line-height: 1.6; color: #334155; margin-top: 0;">Dear <strong>${name}</strong>,</p>
            
            <p style="font-size: 14px; line-height: 1.6; color: #334155;">
              Thank you for reaching out to Kisan4U. We have successfully logged your inquiry regarding <strong>"${subject}"</strong>, and we appreciate your interest in our sustainable agriculture ecosystem.
            </p>

            <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px; margin: 24px 0; text-align: center;">
              <span style="font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: #64748b; font-weight: bold; display: block;">Your Active Ticket Code</span>
              <span style="font-size: 22px; font-weight: bold; color: #059669; display: block; margin: 8px 0; font-family: monospace;">${ticketCode}</span>
              <span style="font-size: 12px; color: #94a3b8; display: block;">An agriculture coordinator will review your ticket and follow up in within 4 business hours.</span>
            </div>

            <p style="font-size: 14px; line-height: 1.6; color: #334155;">
              If you have any immediate documentation or land coordinates to share beforehand, please keep this ticket code ready during our coordinator's scheduled call.
            </p>

            <div style="border-top: 1px solid #f1f5f9; padding-top: 24px; margin-top: 32px;">
              <p style="font-size: 13px; color: #64748b; margin: 0;">Sincerely,</p>
              <p style="font-size: 14px; font-weight: bold; color: #0f172a; margin: 4px 0 0 0;">The Kisan4U Support Desk</p>
              <p style="font-size: 11px; color: #94a3b8; margin: 2px 0 0 0;">Empowering Agriculture Communities Collectively</p>
            </div>
          </div>
          <!-- Footer -->
          <div style="background-color: #f8fafc; border-t: 1px solid #f1f5f9; padding: 16px; text-align: center; font-size: 11px; color: #94a3b8;">
            You received this automated message because you submitted a contact inquiry form at Kisan4U.
          </div>
        </div>
      </div>
    `;
    await dispatchEmailNotification(`We received your message! Reference ID: ${ticketCode}`, customerHtml, email);

    res.status(201).json({
      success: true,
      ticketCode,
      message: 'Your inquiry has been logged successfully inside our secure database and a confirmation email has been dispatched.',
    });
  } catch (error) {
    console.error('Error in /api/contact:', error);
    res.status(500).json({ error: 'Internal server error processing contact form.' });
  }
});

// 3. Get Started onboarding form submission
app.post('/api/get-started', async (req, res) => {
  try {
    const { role, email } = req.body;

    if (!email) {
      return res.status(400).json({ error: 'Missing required email address.' });
    }

    const newGetStarted = {
      id: `started_${Date.now()}_${Math.random().toString(36).substr(2, 5)}`,
      type: 'get-started',
      role: role || 'Farmer',
      email,
      timestamp: new Date().toISOString(),
    };

    const submissions = await readSubmissions();
    submissions.push(newGetStarted);
    await writeSubmissions(submissions);

    // Dynamic role-based information blocks to render in the onboarding email
    let roleTitle = 'Farmer Partner Onboarding';
    let roleActionText = 'Registering Soil Indices & Land boundaries';
    let roleDesc = 'Our spatial GIS teams will calibrate your boundary coordinates, drafting historical Nitrogen-Phosphorus-Potassium fertilizer schedules.';
    let dynamicChecklist = `
      <li style="margin-bottom: 10px;">📐 <strong>Step 1: Calibrate boundaries</strong> - Submit physical/GPS mapping documents for soil evaluation.</li>
      <li style="margin-bottom: 10px;">🌱 <strong>Step 2: NPK Audit</strong> - Obtain historical nutrient depletion reports from regional agronomists.</li>
      <li style="margin-bottom: 10px;">🚜 <strong>Step 3: Training Schedule</strong> - Register for dynamic irrigation and weed command micro-seminars.</li>
    `;

    if (role === 'Buyer') {
      roleTitle = 'Enterprise Buyer Catalog Registration';
      roleActionText = 'Bulk sifting parameters & QR certificates';
      roleDesc = 'Access the live collection hubs catalog, lock contracts on high-grade Table grapes, Basmati rice, and view spatial soil charts.';
      dynamicChecklist = `
        <li style="margin-bottom: 10px;">🍇 <strong>Step 1: Selection parameters</strong> - Specify grape, rice, or potato sorting profiles and sizing parameters.</li>
        <li style="margin-bottom: 10px;">🏷️ <strong>Step 2: QR Certificates</strong> - Download the blockchain batch origin tracking setup documentation.</li>
        <li style="margin-bottom: 10px;">📑 <strong>Step 3: Escrow Terms</strong> - File verified bank guarantees to begin high-bulk spot market bidding.</li>
      `;
    } else if (role === 'Investor') {
      roleTitle = 'Investor & Series-A Prospectus Hub';
      roleActionText = 'Securing Series-A Prospectus and ESG Audits';
      roleDesc = 'Speak direct with our executive board, auditing Series-A legal milestones and national-scale micro-credit systems.';
      dynamicChecklist = `
        <li style="margin-bottom: 10px;">💼 <strong>Step 1: Download Prospectus</strong> - Acquire the compiled legal financial profile and multi-scale capital schedules.</li>
        <li style="margin-bottom: 10px;">🌍 <strong>Step 2: Carbon / ESG Metrics</strong> - Review independent carbon offset benchmarks and sustainable agro-growth tracking.</li>
        <li style="margin-bottom: 10px;">📞 <strong>Step 3: CEO Liaison</strong> - Book a direct conference line slot with our management board.</li>
      `;
    } else if (role === 'FPO') {
      roleTitle = 'Farmer Producer Organization Consolidation Program';
      roleActionText = 'Pooling Harvest Capacity & Aggregated Cold Chains';
      roleDesc = 'Consolidate smallholder harvests, access institutional credit programs, and synchronize cold-chain logistics hubs.';
      dynamicChecklist = `
        <li style="margin-bottom: 10px;">🌾 <strong>Step 1: Crop Pool List</strong> - Compile smallholder harvest profiles and volumetric estimates.</li>
        <li style="margin-bottom: 10px;">❄️ <strong>Step 2: Cold-Chain Scheduling</strong> - Map harvest points to Kisan4U cold-storage hubs to secure premium pricing.</li>
        <li style="margin-bottom: 10px;">💳 <strong>Step 3: Credit Registry</strong> - Input FPO registration certificates for low-interest seasonal agro-credits.</li>
      `;
    }

    // --- DISPATCH SMTP EMAILS ---
    // Email 1: Notify company of signup
    const notifyHtml = `
      <div style="font-family: sans-serif; background-color: #f8fafc; padding: 24px; color: #1e293b;">
        <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; padding: 32px 24px;">
          <h2 style="color: #059669; font-size: 18px; margin-top: 0;">🌾 Live Onboarding Alert</h2>
          <p style="font-size: 14px;">An onboarding registration has been initiated on the Kisan4U ecosystem portal.</p>
          <div style="background-color: #f1f5f9; padding: 16px; border-radius: 8px; font-family: monospace; font-size: 12px;">
            <span style="display: block; margin-bottom: 4px;"><strong>Target Role:</strong> ${role}</span>
            <span style="display: block; margin-bottom: 4px;"><strong>Target Email:</strong> ${email}</span>
            <span style="display: block;"><strong>Action Parameter:</strong> ${roleActionText}</span>
          </div>
        </div>
      </div>
    `;
    await dispatchEmailNotification(`[Onboarding Alert] New ${role} Sign up!`, notifyHtml);

    // Email 2: Send Welcome Onboarding Guide to the registrant
    const onboardingHtml = `
      <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #f8fafc; padding: 24px; color: #1e293b;">
        <div style="max-width: 600px; margin: 0 auto; bg-color: #ffffff; background: #ffffff; border-radius: 16px; border: 1px solid #e2e8f0; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);">
          <!-- Header Accent Banner -->
          <div style="background-color: #059669; padding: 32px 24px; text-align: center;">
            <p style="color: #ffffff; margin: 0; font-size: 28px; font-weight: bold; letter-spacing: -0.5px;">Kisan4U</p>
            <p style="color: #d1fae5; margin: 4px 0 0 0; font-size: 13px; font-weight: bold; text-transform: uppercase; letter-spacing: 1px;">Onboarding Welcoming Kit</p>
          </div>
          <!-- Body -->
          <div style="padding: 31px 24px;">
            <h2 style="font-size: 20px; color: #0f172a; margin-top: 0; margin-bottom: 12px;">Welcome to the Ecosystem</h2>
            <p style="font-size: 14px; color: #64748b; line-height: 1.5; margin-bottom: 24px;">
              You initiated registration on the Kisan4U digital platform as a <strong>${role} Partner</strong>. We are committed to modernizing agriculture through robust, transparent crop collection pipelines and sovereign technologies.
            </p>

            <!-- Role Summary Card -->
            <div style="background-color: #f8fafc; border: 1px dashed #cbd5e1; border-radius: 12px; padding: 20px; margin-bottom: 24px;">
              <span style="font-size: 10px; font-family: monospace; text-transform: uppercase; letter-spacing: 1.5px; color: #059669; font-weight: bold; display: block; margin-bottom: 4px;">MODULE SPEC:</span>
              <strong style="font-size: 15px; color: #0f172a; display: block; margin-bottom: 8px;">${roleTitle}</strong>
              <p style="margin: 0; font-size: 13px; color: #475569; line-height: 1.5;">${roleDesc}</p>
            </div>

            <!-- Onboarding Checklist -->
            <h3 style="font-size: 14px; text-transform: uppercase; letter-spacing: 1px; color: #0f172a; margin-top: 28px; margin-bottom: 16px; border-bottom: 1px solid #f1f5f9; padding-bottom: 8px;">🚀 Your Onboarding Checklist</h3>
            <ul style="padding-left: 0; list-style-type: none; font-size: 13px; color: #334155; line-height: 1.6;">
              ${dynamicChecklist}
            </ul>

            <div style="background-color: #ecfdf5; border: 1px solid #d1fae5; border-radius: 8px; padding: 14px; margin-top: 28px; text-align: center;">
              <p style="margin: 0; font-size: 12px; color: #047857;">An onboarding specialist located near your sector of interest will coordinate an operations call shortly.</p>
            </div>

            <div style="border-top: 1px solid #f1f5f9; padding-top: 24px; margin-top: 32px;">
              <p style="font-size: 13px; color: #64748b; margin: 0;">Sincerely,</p>
              <p style="font-size: 14px; font-weight: bold; color: #0f172a; margin: 4px 0 0 0;">Team Kisan4U</p>
              <p style="font-size: 11px; color: #94a3b8; margin: 2px 0 0 0;">Kisan4U Agriculture Labs</p>
            </div>
          </div>
          <!-- Footer -->
          <div style="background-color: #f8fafc; border-t: 1px solid #f1f5f9; padding: 16px; text-align: center; font-size: 11px; color: #94a3b8;">
            Sent automatically to ${email} as requested on Kisan4U Portal.
          </div>
        </div>
      </div>
    `;
    await dispatchEmailNotification(`Welcome to Kisan4U Onboarding Guide! [Role: ${role}]`, onboardingHtml, email);

    res.status(201).json({
      success: true,
      message: `Onboarding initiated for ${role || 'Farmer'}. Checklists sent to ${email}.`,
    });
  } catch (error) {
    console.error('Error in /api/get-started:', error);
    res.status(500).json({ error: 'Internal server error processing onboarding request.' });
  }
});

// 4. Partner proposal submission
app.post('/api/partner', async (req, res) => {
  try {
    const { name, company, phone, scope } = req.body;

    if (!name || !company) {
      return res.status(400).json({ error: 'Missing required partner fields: name and company are required.' });
    }

    const newPartner = {
      id: `partner_${Date.now()}_${Math.random().toString(36).substr(2, 5)}`,
      type: 'partner',
      name,
      company,
      phone: phone || '',
      scope: scope || 'Bulk Procurement',
      timestamp: new Date().toISOString(),
    };

    const submissions = await readSubmissions();
    submissions.push(newPartner);
    await writeSubmissions(submissions);

    // --- DISPATCH SMTP E-MAILS ---
    // Email 1: Notify B2B Desk
    const partnerHtml = `
      <div style="font-family: sans-serif; background-color: #f8fafc; padding: 24px; color: #1e293b;">
        <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; padding: 32px 24px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);">
          <!-- Green Header Accent -->
          <div style="border-bottom: 2px solid #059669; padding-bottom: 16px; margin-bottom: 24px;">
            <h2 style="color: #0f172a; margin: 0; font-size: 20px;">🤝 New B2B Enterprise Partnership Proposed</h2>
            <span style="font-size: 11px; font-family: monospace; color: #059669; font-weight: bold;">KISAN4U ROUTING DESK</span>
          </div>
          
          <table style="width: 100%; border-collapse: collapse; font-size: 14px; margin-bottom: 24px;">
            <tr>
              <td style="padding: 6px 0; color: #64748b; font-weight: 500; width: 140px;">Representative:</td>
              <td style="padding: 6px 0; color: #0f172a; font-weight: bold;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; color: #64748b; font-weight: 500;">Enterprise Org:</td>
              <td style="padding: 6px 0; color: #0f172a; font-weight: bold;">${company}</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; color: #64748b; font-weight: 500;">Contact Phone:</td>
              <td style="padding: 6px 0; color: #0f172a; font-family: monospace;">${phone || 'Not Provided'}</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; color: #64748b; font-weight: 500;">Procurement Scope:</td>
              <td style="padding: 6px 0; color: #059669; font-weight: bold;">${scope}</td>
            </tr>
          </table>

          <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; padding: 16px; border-radius: 8px;">
            <p style="margin: 0; font-size: 12px; line-height: 1.5; color: #475569;">
              The regional procurement manager has been alerted to review the company coordinates for <strong>${company}</strong>, mapping cold chains and transport nodes for high-bulk logistics contracts on basmati rice and other grain indices.
            </p>
          </div>
        </div>
      </div>
    `;
    await dispatchEmailNotification(`[B2B Partnership] Org: ${company} - Scope: ${scope}`, partnerHtml);

    res.status(201).json({
      success: true,
      message: 'Partner proposal logged. Regional procurement desk notified.',
    });
  } catch (error) {
    console.error('Error in /api/partner:', error);
    res.status(500).json({ error: 'Internal server error processing partner proposal.' });
  }
});

// 5. Get all submissions (Admin / Viewer)
app.get('/api/submissions', async (req, res) => {
  try {
    const submissions = await readSubmissions();
    // Sort youngest first
    submissions.sort((a: any, b: any) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
    res.json({ submissions });
  } catch (error) {
    console.error('Error in /api/submissions:', error);
    res.status(500).json({ error: 'Failed to retrieve submission records.' });
  }
});

// 6. Delete a submission (for admin cleanups)
app.delete('/api/submissions/:id', async (req, res) => {
  try {
    const { id } = req.params;
    let submissions = await readSubmissions();
    submissions = submissions.filter((item: any) => item.id !== id);
    await writeSubmissions(submissions);
    res.json({ success: true, message: 'Record deleted from disk ledger.' });
  } catch (error) {
    console.error('Error deleting submission:', error);
    res.status(500).json({ error: 'Failed to remove entry.' });
  }
});

// ------------------- VITE ASSET SERVER INTEGRATION -------------------

async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);

    // Development SPA router fallback
    app.get('*', async (req, res, next) => {
      if (req.path.startsWith('/api/')) {
        return next();
      }
      try {
        const url = req.originalUrl;
        let template = await fs.readFile(path.join(process.cwd(), 'index.html'), 'utf-8');
        template = await vite.transformIndexHtml(url, template);
        res.status(200).set({ 'Content-Type': 'text/html' }).end(template);
      } catch (e) {
        vite.ssrFixStacktrace(e as Error);
        next(e);
      }
    });
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`[Kisan4U System] Server successfully running at http://0.0.0.0:${PORT}`);
  });
}

startServer();
