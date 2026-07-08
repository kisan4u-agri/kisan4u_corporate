import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Youtube, Twitter, Phone, Mail, MapPin, Send, HelpCircle, ArrowUp } from 'lucide-react';
import { useState, FormEvent } from 'react';
import Logo from './Logo';

interface FooterProps {
  setActivePage: (page: string) => void;
  onOpenGetStartedModal: () => void;
}

export default function Footer({ setActivePage, onOpenGetStartedModal }: FooterProps) {
  const [emailInput, setEmailInput] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setNewsletterSubscribed(true);
      setEmailInput('');
      setTimeout(() => setNewsletterSubscribed(false), 5000);
    }
  };

  return (
    <footer id="main-footer" className="relative bg-slate-950 text-slate-300 mt-20 border-t border-brand-primary/10">
      
      {/* Decorative Top Border Wave Gradient */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-brand-accent via-brand-secondary to-brand-primary animate-pulse-subtle" />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        
        {/* 4-Column Footer Link Structure */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-12">
          
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center">
              <Logo className="h-8" lightText={true} />
            </div>
            
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Empowering growers, modernizing resource lines, and standardizing logistics. Powered by Google AI spatial insights to deliver durable, sustainable farm valuations.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3 pt-2">
              <a href="#" className="p-2 bg-white/5 hover:bg-brand-primary hover:text-white rounded-lg transition-all duration-300 group" title="Linkedin">
                <Linkedin className="w-4 h-4 text-slate-400 group-hover:text-white" />
              </a>
              <a href="#" className="p-2 bg-white/5 hover:bg-brand-primary hover:text-white rounded-lg transition-all duration-300 group" title="Twitter">
                <Twitter className="w-4 h-4 text-slate-400 group-hover:text-white" />
              </a>
              <a href="#" className="p-2 bg-white/5 hover:bg-brand-primary hover:text-white rounded-lg transition-all duration-300 group" title="Facebook">
                <Facebook className="w-4 h-4 text-slate-400 group-hover:text-white" />
              </a>
              <a href="https://www.instagram.com/kisan4u_agri?igsh=Zjc0Mm5xeXQ1aDQ3" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 hover:bg-brand-primary hover:text-white rounded-lg transition-all duration-300 group" title="Instagram">
                <Instagram className="w-4 h-4 text-slate-400 group-hover:text-white" />
              </a>
              <a href="#" className="p-2 bg-white/5 hover:bg-brand-secondary hover:text-white rounded-lg transition-all duration-300 group" title="Youtube">
                <Youtube className="w-4 h-4 text-slate-400 group-hover:text-white" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-3 space-y-4">
            <h5 className="font-display font-bold text-xs text-white uppercase tracking-wider">Quick Links</h5>
            <ul className="space-y-2 text-xs">
              {[
                { id: 'about', label: 'About Us' },
                { id: 'business', label: 'Our Business' },
                { id: 'team', label: 'Our Team' },
                { id: 'investors', label: 'Investor Relations' }
              ].map((link) => (
                <li key={link.id}>
                  <Link
                    id={`footer-quick-link-${link.id}`}
                    to={`/${link.id}`}
                    className="hover:text-brand-secondary hover:translate-x-1 transition-all text-slate-400 cursor-pointer block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div className="lg:col-span-2 space-y-4">
            <h5 className="font-display font-bold text-xs text-white uppercase tracking-wider">Resources</h5>
            <ul className="space-y-2 text-xs">
              {[
                { id: 'blogs', label: 'Blogs & Insights' },
                { id: 'testimonials', label: 'Testimonials' },
                { id: 'gallery', label: 'Media Gallery' },
                { id: 'contact', label: 'Contact Us' }
              ].map((link) => (
                <li key={link.id}>
                  <Link
                    id={`footer-resource-link-${link.id}`}
                    to={`/${link.id}`}
                    className="hover:text-brand-secondary hover:translate-x-1 transition-all text-slate-400 cursor-pointer block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Information */}
          <div className="lg:col-span-3 space-y-4">
            <h5 className="font-display font-bold text-xs text-white uppercase tracking-wider">Contact & Headquarters</h5>
            <ul className="space-y-3 text-xs text-slate-400">
              <li className="flex gap-2 items-start">
                <MapPin className="w-4 h-4 text-brand-secondary shrink-0 mt-0.5" />
                <span>
                  1304, Marathon Icon, NextGen Campus,<br />
                  Opp. Peninsula Corporate Park,<br />
                  Lower Parel (West), Mumbai - 400013
                </span>
              </li>
              <li className="flex gap-2 items-center">
                <Mail className="w-4 h-4 text-brand-secondary shrink-0" />
                <a href="mailto:support@kisan4u.com" className="hover:text-brand-secondary transition-colors">support@kisan4u.com</a>
              </li>
              <li className="flex gap-2 items-center">
                <Phone className="w-4 h-4 text-brand-secondary shrink-0" />
                <a href="tel:+919826575663" className="hover:text-brand-secondary transition-colors">+91 9826575663</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer / Bottom Row */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-[11px]">
          <div className="space-y-1 text-center md:text-left">
            <span>© 2026 Kisan4U Marketing Private Limited. All licensing maps reserved.</span>
            <p className="font-mono text-[9px] text-slate-600">CIN: U72900MH2023PTC412496 | SEBI Listed FPO Advisor & Partner Consortium.</p>
          </div>
          <div className="flex flex-col items-center md:items-end gap-2">
            <div className="flex gap-4">
              <a href="#" className="hover:text-brand-secondary">Privacy Security</a>
              <a href="#" className="hover:text-brand-secondary">User Terms</a>
              <a href="#" className="hover:text-brand-secondary">Agronomy Terms</a>
              <button 
                id="back-to-top-btn"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="hover:text-white flex items-center gap-1 font-mono hover:underline cursor-pointer"
              >
                Top <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
            <span className="text-[10px] font-mono tracking-wider text-slate-400">
              CRAFTED WITH <span className="text-emerald-400">💚</span> BY ACCELEOTT AUTOMATIONS
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
