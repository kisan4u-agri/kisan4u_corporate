# Kisan4U Corporate Web Application — Hosting & Deployment Guide

This document provides a comprehensive, step-by-step deployment and hosting manual for the **Kisan4U** web application. It is tailored specifically for **Hostinger**, covering all available hosting tiers (VPS Hosting, Cloud/Shared Node.js Hosting, and Static Web Hosting).

---

## 🚀 Technical Stack Overview

The Kisan4U platform is built as a modern, high-performance full-stack application:
*   **Frontend**: React 19, Vite 6, and Tailwind CSS v4.
*   **Backend**: Node.js & Express (used for health monitoring, contact form submission handling, and automated SMTP email forwarding).
*   **Compilation & Packaging**: Bundled via `esbuild` into a self-contained production server output (`dist/server.cjs`) that natively manages the serving of compiled SPA static assets and handle REST API endpoints securely.

---

## 🛠️ Environment Variables Configuration

Before deploying, ensure you have the required environment variables. Create a `.env` file in the root directory (or define these directly in your Hostinger panel / server shell environment):

```env
# Server Port (Defaults to 3000)
PORT=3000

# SMTP Configuration (For Contact Form and Inquiry Email Alerts)
SMTP_HOST=smtp.hostinger.com
SMTP_PORT=465
SMTP_USER=support@kisan4u.com
SMTP_PASS=YourSecureEmailPasswordHere
SMTP_FROM="Kisan4U Corporate Support" <support@kisan4u.com>

# Target recipient where customer inquiries will be dispatched
NOTIFICATION_DESTINATION=support@kisan4u.com
```

---

## 📋 Hosting Options on Hostinger

Select **one** of the three deployment options below based on your Hostinger plan:

1.  **Option A (Highly Recommended)**: **VPS Hosting (Virtual Private Server)**. Best for speed, custom SSL, PM2 process management, and high security.
2.  **Option B**: **Cloud/Shared Hosting (via hPanel Node.js App Dashboard)**. Best for ease of use without terminal configuration.
3.  **Option C**: **Static-Only Frontend Deployment (Regular Web Hosting)**. If you only want to serve the frontend pages and do not require server-side form logging/SMTP relays.

---

### 🖥️ Option A: Deployment on Hostinger VPS (Recommended)

This method utilizes a Hostinger VPS (Ubuntu 22.04 LTS or similar with Node.js pre-installed) for the best performance and scalability.

#### Step 1: Connect to your VPS via SSH
Open your terminal and connect using your root credentials provided by Hostinger:
```bash
ssh root@your_vps_ip_address
```

#### Step 2: Install Node.js & Build Utilities
If not already installed, update the packages and install Node.js (v18 or v20), Nginx, and Git:
```bash
# Update Ubuntu Packages
sudo apt update && sudo apt upgrade -y

# Install Node.js LTS via NodeSource
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# Verify Installations
node -v
npm -v
```

#### Step 3: Clone or Transfer the Codebase
Navigate to the web directory and clone or upload your project:
```bash
cd /var/www
# (Assuming Git setup or upload via SFTP/SCP)
# git clone <your-repository-url> kisan4u
cd kisan4u
```

#### Step 4: Install Dependencies and Build the Production Bundle
Install npm dependencies and run the build command to generate the production package inside `/dist`:
```bash
# Install packages
npm install --omit=dev  # installs production packages
npm install --include=dev # temporarily install dev dependencies to build

# Compile client-side and server-side files
npm run build
```

#### Step 5: Configure PM2 (Process Manager)
PM2 ensures the server runs continuously in the background, automatically restarts if the server crashes, and boots on VPS restart.
```bash
# Install PM2 globally
sudo npm install pm2 -g

# Start the application bundle
pm2 start dist/server.cjs --name "kisan4u-app"

# Configure PM2 to start on system boot
pm2 startup
# (Copy and run the command printed by the output of the line above)

# Save the current process list
pm2 save
```

#### Step 6: Configure Nginx as a Reverse Proxy (Port 80/443 to 3000)
To serve the app on standard web ports (`80` for HTTP, `443` for HTTPS) instead of `3000`, configure Nginx:
```bash
# Install Nginx
sudo apt install nginx -y

# Create a server block config file
sudo nano /etc/nginx/sites-available/kisan4u
```

Paste the following configuration (replace `yourdomain.com` with your client's actual domain):
```nginx
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }
}
```

Enable the site configuration and restart Nginx:
```bash
sudo ln -s /etc/nginx/sites-available/kisan4u /etc/nginx/sites-enabled/
sudo nginx -t # test config
sudo systemctl restart nginx
```

#### Step 7: Secure the Site with Free SSL (Let's Encrypt)
Run `certbot` to automatically obtain and configure a secure HTTPS certificate:
```bash
sudo apt install certbot python3-certbot-nginx -y
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
```
Follow the interactive prompts to enable redirection to secure HTTPS.

---

### 🌐 Option B: Deployment on Hostinger hPanel (Cloud & Shared Node.js App)

If your Hostinger plan includes the built-in hPanel graphical interface for **Node.js applications**:

#### Step 1: Build the Files Locally
Since shared hosting servers may have memory constraints during builds, build the application files on your local machine first:
```bash
npm install
npm run build
```
This generates the completed production files inside your local `/dist` directory.

#### Step 2: Upload Files to Hostinger hPanel File Manager
1. Log in to your **Hostinger hPanel**.
2. Open **File Manager** for your domain.
3. Upload the following files and directories from your local workspace to your root or app directory (e.g., `/home/username/domains/yourdomain.com/node-app`):
    *   `dist/` (contains client code and the server engine `server.cjs`)
    *   `package.json`
    *   `package-lock.json`
    *   `.env` (containing SMTP and production ports)
4. *Do not upload the `node_modules` directory.*

#### Step 3: Create the Node.js Application in hPanel
1. In hPanel, navigate to **Websites** ➔ **Node.js**.
2. Click **Create Application**.
3. Set the following fields in the Node.js application form:
    *   **App Name**: `kisan4u`
    *   **Node Version**: Select `20.x` or `18.x`.
    *   **App Directory**: Point to your uploaded folder (e.g., `/node-app`).
    *   **Startup File**: `dist/server.cjs`
    *   **App URL**: Select your domain name.
4. Click **Create**.

#### Step 4: Install Packages and Start the App
1. Inside the hPanel Node.js dashboard, click **NPM Install** to install dependencies from your `package.json` (running in production mode).
2. Once complete, click **Start Application** or **Restart Application** in the control dashboard.
3. Set your SMTP environment variables directly in the **Environment Variables** section of the Hostinger Node.js interface.

---

### 🗄️ Option C: Static-Only Frontend Deployment (Regular Web Hosting)

If you only want to deploy the frontend as a static website (HTML, CSS, JS) and bypass the Express Node.js backend entirely.

> **Note on Feature Limitation**: Using this option means contact form submissions will not save to `submissions.json` or dispatch SMTP emails natively from the backend server. The client must integrate a client-side third-party mailing service (e.g., Web3Forms, Formspree) if they wish to process forms without an Express server.

#### Step 1: Run the Build Locally
On your machine, build the static client bundle:
```bash
npm run build
```
This outputs all static assets to the `/dist` directory.

#### Step 2: Upload Static Files to `public_html`
1. Access Hostinger **hPanel** ➔ **File Manager** ➔ Go to `/public_html`.
2. Upload **only the contents** inside your local `/dist` directory directly into `/public_html` (including `index.html`, the `assets/` folder, etc.).
3. *Do not upload `dist/server.cjs` or `server.ts` or `package.json` here.*

#### Step 3: Configure client-side SPA Routing (Apache `.htaccess`)
Since this is a Single Page Application (SPA) using React Router, you must redirect all paths to `index.html` so users don't get 404 errors on reload:
1. In `/public_html`, create a file named `.htaccess`.
2. Paste the following configuration:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```
3. Save the file. Your app will now routing-resolve perfectly in the browser.

---

## 🖼️ Uploading High-Resolution Original Brand Partner Logos

The application features an advanced **Smart Multi-Location Brand Asset Loader**. It is pre-configured to look for high-resolution original image files of your partners inside either the root `/public/` directory or the `/public/logos/` directory.

### Supported Upload Locations
You can upload your exact, unaltered high-resolution logo files to either of the following locations:
1.  **Direct Root Directory**: `/public/` (loads directly via `/filename`)
2.  **Logos Folder**: `/public/logos/` (loads via `/logos/filename`)

### Supported File Formats & Names
The loader will automatically detect your uploaded files and render them exactly as they are. The files can be named with single extensions (e.g. `.png`, `.jpg`, `.jpeg`, `.webp`) or with the exact upload formats you used:

| Brand Partner Name | Brand Key | Verified Uploaded Filenames |
| :--- | :--- | :--- |
| **Sarvin Agro Chemicals Pvt Ltd** | `sarvin` | `sarvin.png.webp` |
| **Geolife Agritech India Pvt Ltd** | `geolife` | `geolife.png.webp` |
| **HIFIELD ORGANICS INC** | `hifield` | `hifield.png.webp` |
| **TITAN AGRITECH LIMITED** | `titan` | `titan.png.webp` |
| **Aries Agro Limited** | `aries` | `aries.png.jpg` |
| **Shurbans International Pvt Ltd** | `shurbans` | `shurbans.png.png` |
| **Kay Bee Bio-Organics Pvt. Ltd** | `kaybee` | `kaybee.png.webp` |
| **Exylon Crop Care** | `exylon` | `exylon.png.webp` |
| **Katra Fertilizers & Chemicals** | `katra` | `katra.png.png` |

### Step 3: Refresh Your Browser
Once these files are present, refresh your browser! The application will instantly load and render your clients' exact original logos in full resolution with absolute fidelity. No code modifications are required.

---

## 🔍 Verifying the Installation

After executing the steps, navigate to your server's health page to verify SMTP status and live system readiness:
*   **Health Dashboard URL**: `https://yourdomain.com/api/health`

This API endpoint will return a clean JSON payload detailing system uptime and verifying if SMTP email sending credentials are fully operational.

---

## 🛡️ Support & Maintenance

*   **Log Inspection (VPS)**: To check backend console history, run `pm2 logs`.
*   **Process Restarts**: If changes are made to the configuration or `.env`, run `pm2 restart kisan4u-app` (VPS) or toggle the Node.js application in Hostinger hPanel.
