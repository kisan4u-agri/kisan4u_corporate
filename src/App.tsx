import { useState, useEffect, FormEvent } from 'react';
import { Routes, Route, useLocation, useNavigate, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, X, Send, Landmark, Sprout, ArrowRight, UserCheck, ShieldCheck } from 'lucide-react';

// Import Modular Page Views
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomeView from './components/HomeView';
import AboutView from './components/AboutView';
import BusinessView from './components/BusinessView';
import TeamView from './components/TeamView';
import InvestorView from './components/InvestorView';
import CareerViews from './components/CareerViews';
import BlogView from './components/BlogView';
import TestimonialsView from './components/TestimonialsView';
import GalleryView from './components/GalleryView';
import ContactView from './components/ContactView';

export default function App() {
  const location = useLocation();
  const navigate = useNavigate();

  // Map route to active page
  const getActivePageFromPath = (pathname: string) => {
    const p = pathname.replace(/^\//, ''); // remove leading slash
    if (!p || p === 'home') return 'home';
    return p;
  };

  const activePage = getActivePageFromPath(location.pathname);

  const setActivePage = (page: string) => {
    if (page === 'home') {
      navigate('/');
    } else {
      navigate(`/${page}`);
    }
  };

  // Scroll to top on path changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  
  // Custom global modal states
  const [partnerModalOpen, setPartnerModalOpen] = useState(false);
  const [getStartedModalOpen, setGetStartedModalOpen] = useState(false);

  // Form states inside Partner Modal
  const [partnerName, setPartnerName] = useState('');
  const [partnerCompany, setPartnerCompany] = useState('');
  const [partnerPhone, setPartnerPhone] = useState('');
  const [partnerScope, setPartnerScope] = useState('Bulk Procurement');
  const [partnerStatus, setPartnerStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  // Interactive step inside Get Started
  const [getStartedRole, setGetStartedRole] = useState<'Farmer' | 'Buyer' | 'Investor' | 'FPO'>('Farmer');
  const [getStartedSubmitted, setGetStartedSubmitted] = useState(false);
  const [getStartedEmail, setGetStartedEmail] = useState('');

  const handlePartnerSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (partnerName && partnerCompany) {
      setPartnerStatus('submitting');
      try {
        const response = await fetch('/api/partner', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: partnerName,
            company: partnerCompany,
            phone: partnerPhone,
            scope: partnerScope,
          }),
        });
        const result = await response.json();
        if (response.ok && result.success) {
          setPartnerStatus('success');
          setPartnerName('');
          setPartnerCompany('');
          setPartnerPhone('');
        } else {
          alert(result.error || 'Failed to submit partner proposal.');
          setPartnerStatus('idle');
        }
      } catch (err) {
        console.error(err);
        alert('Global core server connectivity error.');
        setPartnerStatus('idle');
      }
    }
  };

  const handleGetStartedSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (getStartedEmail) {
      try {
        const response = await fetch('/api/get-started', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            role: getStartedRole,
            email: getStartedEmail,
          }),
        });
        const result = await response.json();
        if (response.ok && result.success) {
          setGetStartedSubmitted(true);
        } else {
          alert(result.error || 'Failed to initialize onboarding.');
        }
      } catch (err) {
        console.error(err);
        alert('Global core server connectivity error.');
      }
    }
  };

  return (
    <div id="kisan4u-root" className="min-h-screen bg-brand-cream relative flex flex-col justify-between">
      
      {/* 1. STICKY GLASSMOPHIC NAVBAR */}
      <Navbar 
        activePage={activePage} 
        setActivePage={setActivePage}
        onOpenPartnerModal={() => { setPartnerModalOpen(true); setPartnerStatus('idle'); }}
        onOpenGetStartedModal={() => { setGetStartedModalOpen(true); setGetStartedSubmitted(false); }}
      />

      {/* 2. DYNAMIC MAIN PORTAL WINDOW */}
      <main className="flex-grow pt-24 sm:pt-28">
        <div className="mx-auto w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
            >
              <Routes location={location}>
                <Route path="/" element={
                  <HomeView 
                    setActivePage={setActivePage}
                    onOpenPartnerModal={() => { setPartnerModalOpen(true); setPartnerStatus('idle'); }}
                    onOpenGetStartedModal={() => { setGetStartedModalOpen(true); setGetStartedSubmitted(false); }}
                  />
                } />
                <Route path="/home" element={<Navigate to="/" replace />} />
                <Route path="/about" element={<AboutView />} />
                <Route path="/business" element={<BusinessView />} />
                <Route path="/team" element={<TeamView />} />
                <Route path="/investors" element={<InvestorView setActivePage={setActivePage} />} />
                <Route path="/careers" element={<CareerViews />} />
                <Route path="/blogs" element={<BlogView />} />
                <Route path="/testimonials" element={<TestimonialsView />} />
                <Route path="/gallery" element={<GalleryView />} />
                <Route path="/contact" element={<ContactView />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      {/* 3. COOPERATIVE FOOTER COMPONENT */}
      <Footer 
        setActivePage={setActivePage} 
        onOpenGetStartedModal={() => { setGetStartedModalOpen(true); setGetStartedSubmitted(false); }}
      />

      {/* 4. MODAL DRAWER: BECOME A PARTNER */}
      <AnimatePresence>
        {partnerModalOpen && (
          <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center z-55 p-4">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-3xl p-6 lg:p-8 max-w-md w-full border border-slate-200 shadow-2xl relative overflow-hidden"
            >
              <button
                id="close-partner-modal-btn"
                onClick={() => setPartnerModalOpen(false)}
                className="absolute top-4 right-4 p-1.5 hover:bg-slate-100 rounded-lg text-slate-400 hover:text-slate-700 transition"
                title="Close Partner Modal"
              >
                <X className="w-5 h-5" />
              </button>

              {partnerStatus === 'success' ? (
                <div className="text-center py-10 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary flex items-center justify-center mx-auto text-3xl">
                    ✓
                  </div>
                  <h3 className="font-display font-black text-xl text-slate-900">Proposal Received!</h3>
                  <p className="text-xs text-slate-500 max-w-xs mx-auto leading-relaxed">
                    Our team has received your partnership details. A representative will contact you soon to talk about how we can work together.
                  </p>
                  <button
                    id="partner-success-close-btn"
                    onClick={() => setPartnerModalOpen(false)}
                    className="mt-4 px-5 py-2.5 bg-brand-primary text-white rounded-xl text-xs font-bold shadow-xs cursor-pointer"
                  >
                    Close Window
                  </button>
                </div>
              ) : (
                <form onSubmit={handlePartnerSubmit} className="space-y-4">
                  <div className="space-y-1 text-center lg:text-left">
                    <span className="text-[10px] font-mono text-brand-secondary font-bold uppercase block tracking-wider">Partnership</span>
                    <h3 className="text-lg font-display font-black text-slate-900">Become a Partner</h3>
                    <p className="text-xs text-slate-500 leading-normal">Work with us directly to buy or supply crops with simple and reliable service.</p>
                  </div>

                  <div className="space-y-3 pt-2">
                    <div className="space-y-1">
                      <label className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-bold">Your Name:</label>
                      <input
                        id="partner-name-field"
                        type="text"
                        required
                        value={partnerName}
                        onChange={(e) => setPartnerName(e.target.value)}
                        placeholder="e.g. John Smith"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-900 font-medium focus:outline-none focus:border-brand-primary"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-bold">Company Name:</label>
                      <input
                        id="partner-company-field"
                        type="text"
                        required
                        value={partnerCompany}
                        onChange={(e) => setPartnerCompany(e.target.value)}
                        placeholder="e.g. Acme Corp"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-900 font-medium focus:outline-none focus:border-brand-primary"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-bold">How do you want to collaborate?</label>
                      <select
                        id="partner-scope-dropdown"
                        value={partnerScope}
                        onChange={(e) => setPartnerScope(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-900 font-medium focus:outline-none focus:border-brand-primary"
                      >
                        <option value="Bulk Procurement">Bulk Buyer</option>
                        <option value="Input supply">Seed / Input Supplier</option>
                        <option value="Financial Partner">Financial / Credit Provider</option>
                        <option value="Logistics Envoy">Logistics & Transportation</option>
                      </select>
                    </div>
                  </div>

                  <button
                    id="submit-partner-proposal-btn"
                    type="submit"
                    className="w-full py-3 bg-brand-primary hover:bg-brand-secondary text-white font-extrabold text-xs rounded-xl shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    {partnerStatus === 'submitting' ? 'Sending...' : <><Send className="w-3.5 h-3.5" /> Submit Proposal</>}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* 5. MODAL DRAWER: GET STARTED */}
      <AnimatePresence>
        {getStartedModalOpen && (
          <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center z-55 p-4">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-3xl p-6 lg:p-8 max-w-lg w-full border border-slate-200 shadow-2xl relative overflow-hidden"
            >
              <button
                id="close-getstarted-modal-btn"
                onClick={() => setGetStartedModalOpen(false)}
                className="absolute top-4 right-4 p-1.5 hover:bg-slate-100 rounded-lg text-slate-400 hover:text-slate-700 transition"
                title="Close Get Started modal"
              >
                <X className="w-5 h-5" />
              </button>

              {getStartedSubmitted ? (
                <div className="text-center py-10 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary flex items-center justify-center mx-auto text-3xl">
                    ✓
                  </div>
                  <h3 className="font-display font-black text-xl text-slate-900">Onboarding Started!</h3>
                  <p className="text-xs text-slate-500 max-w-xs mx-auto leading-relaxed">
                    We sent an email with your next steps to {getStartedEmail}. A coordinator from our team will contact you soon.
                  </p>
                  <button
                    id="getstarted-success-close-btn"
                    onClick={() => setGetStartedModalOpen(false)}
                    className="mt-4 px-5 py-2 bg-brand-primary text-white rounded-xl text-xs font-bold shadow-xs"
                  >
                    Close Window
                  </button>
                </div>
              ) : (
                <form onSubmit={handleGetStartedSubmit} className="space-y-6">
                  <div className="space-y-1 text-center lg:text-left">
                    <span className="text-[10px] font-mono text-brand-secondary font-bold uppercase block tracking-wider">Onboarding</span>
                    <h3 className="text-lg font-display font-black text-slate-900">Start with Kisan4U</h3>
                    <p className="text-xs text-slate-500">Select your role to get the right guides.</p>
                  </div>

                  {/* Role picker grids */}
                  <div className="grid grid-cols-2 gap-3.5">
                    {[
                      { id: 'Farmer', label: 'I am a Farmer', icon: '🌾' },
                      { id: 'Buyer', label: 'I am a Retail Buyer', icon: '🧺' },
                      { id: 'Investor', label: 'I am an Investor', icon: '📊' },
                      { id: 'FPO', label: 'FPO Representative', icon: '👥' }
                    ].map((role) => (
                      <button
                        id={`role-picker-${role.id.toLowerCase()}`}
                        key={role.id}
                        type="button"
                        onClick={() => setGetStartedRole(role.id as any)}
                        className={`p-3.5 rounded-xl border text-left transition-all ${
                          getStartedRole === role.id 
                            ? 'bg-slate-900 border-slate-900 text-white shadow-md font-bold' 
                            : 'bg-slate-50 border-slate-205 text-slate-700 hover:bg-slate-100'
                        }`}
                      >
                        <span className="text-xl block mb-1.5">{role.icon}</span>
                        <span className="text-xs font-display leading-none block font-extrabold">{role.label}</span>
                      </button>
                    ))}
                  </div>

                  {/* Targeted Dynamic details */}
                  <div className="bg-brand-cream/80 border border-brand-primary/5 rounded-2xl p-4 space-y-2">
                    <span className="text-[10px] font-mono text-brand-secondary uppercase font-bold flex items-center gap-1.5">
                      <Sprout className="w-3.5 h-3.5 animate-bounce-subtle" /> Your Next Steps
                    </span>

                    <h4 className="text-xs font-display font-semibold text-slate-900 leading-tight">
                      {getStartedRole === 'Farmer' ? 'Registering Soil & Farm Details' :
                       getStartedRole === 'Buyer' ? 'Product Selection & Buying Details' :
                       getStartedRole === 'Investor' ? 'Investor Documents & Project Details' :
                       'Partner Group Guide & Farm Support'}
                    </h4>

                    <p className="text-[11px] text-slate-500 leading-relaxed font-semibold">
                      {getStartedRole === 'Farmer' ? 'We will help you map your farm with satellites and give you advice on the best fertilizer and cropping schedule.' :
                       getStartedRole === 'Buyer' ? 'Browse our active produce hubs, order high-quality grapes or basmati rice, and track where your food was grown.' :
                       getStartedRole === 'Investor' ? 'Get our financial deck, look at our scale, and speak with our leadership team.' :
                       'Connect your grower group with our tools. Get training on crop health and fertilizer support.'}
                    </p>
                  </div>

                  {/* Submission field */}
                  <div className="space-y-1 h-fit">
                    <label className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block font-bold">Your Email Address:</label>
                    <div className="flex gap-2">
                      <input
                        id="getstarted-email-field"
                        type="email"
                        required
                        value={getStartedEmail}
                        onChange={(e) => setGetStartedEmail(e.target.value)}
                        placeholder="e.g. grower@example.com"
                        className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-900 font-medium focus:outline-none focus:border-brand-primary"
                      />
                      <button
                        id="getstarted-onboard-submit"
                        type="submit"
                        className="bg-brand-primary hover:bg-brand-secondary text-white font-extrabold text-xs px-5 py-2.5 rounded-xl transition flex items-center gap-1 cursor-pointer"
                      >
                        Start <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
