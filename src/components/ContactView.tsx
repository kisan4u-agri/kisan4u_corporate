import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Mail, MapPin, Send, MessageCircle } from 'lucide-react';

export default function ContactView() {
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [formSubject, setFormSubject] = useState('Investor Query');
  const [formMessage, setFormMessage] = useState('');
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [ticketCode, setTicketCode] = useState('K4U-9804X2026');

  const handleContactSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (formName && formEmail && formMessage) {
      setSubmitStatus('submitting');
      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: formName,
            email: formEmail,
            phone: formPhone,
            subject: formSubject,
            message: formMessage,
          }),
        });
        
        const result = await response.json();
        
        if (response.ok && result.success) {
          setTicketCode(result.ticketCode);
          setSubmitStatus('success');
          setFormName('');
          setFormEmail('');
          setFormPhone('');
          setFormMessage('');
        } else {
          alert(result.error || 'Failed to submit inquiry.');
          setSubmitStatus('idle');
        }
      } catch (err) {
        console.error(err);
        alert('Active backend connection error. Please try again.');
        setSubmitStatus('idle');
      }
    }
  };

  return (
    <div id="contact-view-container" className="space-y-24 py-12">
      
      {/* 1. HERO HEADER */}
      <section className="text-center max-w-3xl mx-auto space-y-4 pt-10">
        <span className="text-xs font-mono bg-brand-primary/10 text-brand-primary px-3 py-1 rounded-full uppercase tracking-wider font-semibold">
          Contact Us
        </span>
        <h1 className="text-4xl sm:text-5xl font-display font-black text-slate-900 tracking-tight leading-tight">
          Get in Touch with the <span className="text-gradient-primary">Kisan4U Team</span>
        </h1>
        <p className="text-slate-600 max-w-xl mx-auto text-sm leading-relaxed">
          Have questions about buying crop, partnership opportunities, or investment? Fill out the form below, and we will get back to you quickly!
        </p>
      </section>

      {/* 2. SPLIT LAYOUT SPREAD */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch max-w-6xl mx-auto">
          
          {/* Left panel: Coordinates and offices */}
          <div className="lg:col-span-5 space-y-8 flex flex-col justify-between">
            <div className="space-y-6">
              <h3 className="text-2xl font-display font-black text-slate-900 tracking-tight">Our Main Office</h3>
              <p className="text-xs text-slate-500 leading-relaxed font-semibold">
                Speak directly with our team, helpful coordinators, or support staff.
              </p>

              {/* Coordinates list */}
              <div className="space-y-4 font-semibold text-xs text-slate-700">
                <a href="tel:+919826575663" className="flex gap-4 p-4 bg-white hover:bg-brand-primary/5 rounded-2xl border border-slate-200 transition-all items-center">
                  <div className="p-2.5 bg-brand-primary/10 text-brand-primary rounded-xl shrink-0"><Phone className="w-5 h-5" /></div>
                  <div>
                    <span className="text-[10px] text-slate-450 font-mono block uppercase">Call Us:</span>
                    <span className="hover:text-brand-primary font-mono font-bold">+91 9826575663</span>
                  </div>
                </a>

                <a href="mailto:support@kisan4u.com" className="flex gap-4 p-4 bg-white hover:bg-brand-primary/5 rounded-2xl border border-slate-200 transition-all items-center">
                  <div className="p-2.5 bg-brand-primary/10 text-brand-primary rounded-xl shrink-0"><Mail className="w-5 h-5" /></div>
                  <div>
                    <span className="text-[10px] text-slate-450 font-mono block uppercase">Email Us:</span>
                    <span className="hover:text-brand-primary font-mono font-bold">support@kisan4u.com</span>
                  </div>
                </a>

                <a href="https://wa.me/919826575663" target="_blank" className="flex gap-4 p-4 bg-white hover:bg-green-50 rounded-2xl border border-slate-200 transition-all items-center">
                  <div className="p-2.5 bg-emerald-500/10 text-emerald-600 rounded-xl shrink-0"><MessageCircle className="w-5 h-5 fill-emerald-600/20" /></div>
                  <div>
                    <span className="text-[10px] text-slate-450 font-mono block uppercase">WhatsApp Support:</span>
                    <span className="hover:text-emerald-600 font-mono font-bold">WhatsApp Live Support</span>
                  </div>
                </a>
              </div>
            </div>

            {/* Offices coordinates */}
            <div className="space-y-3">
              <span className="text-[10px] text-slate-400 font-mono tracking-widest uppercase font-bold block">Our Offices</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { city: 'Mumbai', code: 'MH', desc: 'Corporate Office' },
                  { city: 'Indore', code: 'MP', desc: 'Branch Office' }
                ].map((office) => (
                  <div key={office.city} className="bg-brand-cream/60 border border-brand-primary/5 rounded-xl p-3 space-y-1">
                    <span className="text-[11px] font-display font-extrabold text-slate-900 block">{office.city}</span>
                    <span className="text-[9px] font-mono text-slate-450 block uppercase leading-none">{office.code} Office</span>
                    <p className="text-[10px] text-slate-500 leading-tight pt-1">{office.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right panel: Premium Contact form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 lg:p-8 border border-slate-200/80 shadow-md relative overflow-hidden flex flex-col justify-between h-full">
              
              <AnimatePresence mode="wait">
                {submitStatus === 'success' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center py-12 space-y-4 my-auto"
                  >
                    <div className="w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary flex items-center justify-center mx-auto text-3xl">
                      ✓
                    </div>
                    <h3 className="font-display font-black text-xl text-slate-900">Message Sent!</h3>
                    <p className="text-xs text-slate-500 max-w-sm mx-auto leading-relaxed">
                      Thank you for contacting us! We have received your message. One of our team members will review your request and get back to you soon.
                    </p>
                    <div className="bg-brand-cream border border-brand-primary/10 rounded-xl p-3.5 max-w-xs mx-auto font-mono text-[10px] text-slate-600 block">
                      <span className="block font-bold text-slate-800">TICKET CODE: {ticketCode}</span>
                      <span className="text-[9px] opacity-60">Assigned to Support Desk</span>
                    </div>

                    <button
                      id="reset-contact-btn"
                      onClick={() => setSubmitStatus('idle')}
                      className="mt-6 px-5 py-2.5 bg-brand-primary hover:bg-brand-secondary text-white rounded-xl text-xs font-bold shadow-xs transition"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleContactSubmit}
                    className="space-y-4"
                  >
                    <div className="space-y-1">
                      <span className="text-[10px] font-mono text-brand-secondary font-bold uppercase block tracking-wider">Contact Form</span>
                      <h3 className="text-lg font-display font-black text-slate-900 leading-tight">Send Us a Message</h3>
                      <p className="text-[11px] text-slate-400">We usually reply within a few hours. Please fill out your details below.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Name */}
                      <div className="space-y-1">
                        <label className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-bold">Your Name:</label>
                        <input
                          id="contact-name"
                          type="text"
                          required
                          value={formName}
                          onChange={(e) => setFormName(e.target.value)}
                          placeholder="John Doe"
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-900 font-medium focus:outline-none focus:border-brand-primary"
                        />
                      </div>

                      {/* Email */}
                      <div className="space-y-1">
                        <label className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-bold">Email Address:</label>
                        <input
                          id="contact-email"
                          type="email"
                          required
                          value={formEmail}
                          onChange={(e) => setFormEmail(e.target.value)}
                          placeholder="john@example.com"
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-900 font-medium focus:outline-none focus:border-brand-primary"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Phone */}
                      <div className="space-y-1">
                        <label className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-bold font-semibold">Phone Number (Optional):</label>
                        <input
                          id="contact-phone"
                          type="tel"
                          value={formPhone}
                          onChange={(e) => setFormPhone(e.target.value)}
                          placeholder="+91 "
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-900 font-medium focus:outline-none focus:border-brand-primary"
                        />
                      </div>

                      {/* Subject dropdown */}
                      <div className="space-y-1">
                        <label className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-bold">Subject / Topic:</label>
                        <select
                          id="contact-subject"
                          value={formSubject}
                          onChange={(e) => setFormSubject(e.target.value)}
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-900 font-medium focus:outline-none focus:border-brand-primary"
                        >
                          <option value="Investor Query">Investor or Funding Question</option>
                          <option value="Bulk Sourcing">Buying in Bulk (Grapes / Crops)</option>
                          <option value="FPO Partnership">Cooperative / FPO Partnership</option>
                          <option value="Career Apply">Jobs & Careers</option>
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div className="space-y-1">
                      <label className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-bold">Your Message:</label>
                      <textarea
                        id="contact-message"
                        required
                        rows={4}
                        value={formMessage}
                        onChange={(e) => setFormMessage(e.target.value)}
                        placeholder="Write your message or question here..."
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-900 font-medium focus:outline-none focus:border-brand-primary"
                      />
                    </div>

                    <button
                      id="submit-contact-button"
                      type="submit"
                      className="w-full py-3 bg-brand-primary hover:bg-brand-secondary text-white font-extrabold text-xs rounded-xl shadow-md transition-all cursor-pointer flex items-center justify-center gap-2 transform active:scale-95"
                    >
                      {submitStatus === 'submitting' ? 'Sending message...' : <><Send className="w-3.5 h-3.5" /> Send Message</>}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
