import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Briefcase, MapPin, Compass, CheckCircle2, ChevronRight, X, Sparkles, Send, Upload } from 'lucide-react';
import { JOB_OPENINGS } from '../data';
import { JobOpening } from '../types';

export default function CareerViews() {
  const [activeDeptFilter, setActiveDeptFilter] = useState<string>('All');
  const [selectedJob, setSelectedJob] = useState<JobOpening | null>(null);
  
  // Application form states
  const [applyName, setApplyName] = useState('');
  const [applyEmail, setApplyEmail] = useState('');
  const [applyResume, setApplyResume] = useState<File | null>(null);
  const [applyStatus, setApplyStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const filteredJobs = activeDeptFilter === 'All' 
    ? JOB_OPENINGS 
    : JOB_OPENINGS.filter((job) => job.department === activeDeptFilter);

  const departments = ['All', 'Agronomy Research', 'Engineering', 'Operations'];

  const handleSubmitApplication = (e: FormEvent) => {
    e.preventDefault();
    if (applyName && applyEmail) {
      setApplyStatus('submitting');
      setTimeout(() => {
        setApplyStatus('success');
        setApplyName('');
        setApplyEmail('');
        setApplyResume(null);
      }, 1500);
    }
  };

  return (
    <div id="careers-view-container" className="space-y-24 py-12">
      
      {/* 1. HERO HEADER */}
      <section className="text-center max-w-3xl mx-auto space-y-4 pt-10">
        <span className="text-xs font-mono bg-brand-primary/10 text-brand-primary px-3 py-1 rounded-full uppercase tracking-wider font-semibold">
          Grow With Us
        </span>
        <h1 className="text-4xl sm:text-5xl font-display font-black text-slate-900 tracking-tight leading-tight">
          Grow Your Career While Transforming <span className="text-gradient-primary">Agriculture</span>
        </h1>
        <p className="text-slate-600 max-w-xl mx-auto text-sm leading-relaxed">
          Sow seeds of systemic impact. We assemble builders dedicating intellectual capacity to stabilizing rural food networks.
        </p>
      </section>

      {/* 2. WHY JOIN CARDS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { tag: 'High Sourcing Impact', title: 'Generational Rural Empathy', desc: 'Every line of code you write and crop parameter you calibrate supports up to half-a-million farmer families during drought breakout calendars.', icon: '❤️' },
            { tag: 'Intellectual Freedom', title: 'World-Class Spatial Research', desc: 'Synthesize drone-spectral data and satellite moisture indices directly alongside our team of Cornell agronomy PhD researchers.', icon: '🛰️' },
            { tag: 'Uncompromised Growth', title: 'Fast-Track Career Sowing', desc: 'Enjoy rapid operational scope scaling. Backed by top-tier global impact funds, we reward high ownership and analytical precision.', icon: '📈' }
          ].map((card) => (
            <div key={card.title} className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-brand-primary/20 shadow-xs hover:shadow-md transition-all duration-300">
              <span className="text-3xl block leading-none">{card.icon}</span>
              <span className="text-[10px] text-brand-secondary font-mono tracking-widest block uppercase font-bold mt-3">{card.tag}</span>
              <h4 className="font-display font-black text-slate-900 text-sm mt-1">{card.title}</h4>
              <p className="text-xs text-slate-500 leading-relaxed mt-2">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. OPEN POSITIONS WITH DYNAMIC DEPT FILTER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-xs font-mono bg-brand-primary/10 text-brand-primary px-3 py-1 rounded-full uppercase tracking-wider font-semibold">
            Active Job board
          </span>
          <h2 className="text-2xl lg:text-3xl font-display font-bold text-slate-900 mt-2">
            Active Opportunities
          </h2>
          <p className="text-sm text-slate-500 mt-1">
            Browse our list of open opportunities. Filters are active.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-8 bg-brand-primary/5 p-1.5 rounded-2xl border border-brand-primary/10 max-w-md mx-auto">
          {departments.map((dept) => (
            <button
              id={`dept-filter-${dept.toLowerCase().replace(/\s+/g, '-')}`}
              key={dept}
              onClick={() => setActiveDeptFilter(dept)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold tracking-tight transition-all duration-300 cursor-pointer ${
                activeDeptFilter === dept 
                  ? 'bg-brand-primary text-white shadow-xs' 
                  : 'text-slate-650 hover:bg-white'
              }`}
            >
              {dept}
            </button>
          ))}
        </div>

        {/* Opportunities List */}
        <div className="grid grid-cols-1 gap-4 max-w-3xl mx-auto">
          <AnimatePresence mode="popLayout">
            {filteredJobs.map((job) => (
              <motion.div
                layout
                id={`job-opening-card-${job.id}`}
                key={job.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="bg-white rounded-2xl p-6 border border-slate-200 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 hover:border-brand-primary/20 transition-all duration-300 hover:shadow-xs group"
              >
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[10px] font-mono bg-brand-primary/10 text-brand-primary px-2.5 py-1 rounded-full font-bold uppercase">
                      {job.department}
                    </span>
                    <span className="text-[10px] font-mono bg-slate-100 text-slate-600 px-2.5 py-1 rounded-full font-bold uppercase flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-brand-secondary" /> {job.location}
                    </span>
                  </div>

                  <h3 className="font-display font-black text-slate-900 text-base leading-snug group-hover:text-brand-primary transition-colors">
                    {job.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed max-w-xl">
                    {job.description}
                  </p>
                </div>

                <div className="shrink-0 w-full md:w-auto pt-3 md:pt-0">
                  <button
                    id={`apply-now-btn-${job.id}`}
                    onClick={() => {
                      setSelectedJob(job);
                      setApplyStatus('idle');
                    }}
                    className="w-full text-center px-4 py-2 bg-brand-primary hover:bg-brand-secondary text-white font-bold text-xs rounded-xl shadow-xs hover:shadow-brand-secondary/20 transition-all cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    Apply Now <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* 4. MODAL DETAILED FORM FOR APPLICATIONS */}
      <AnimatePresence>
        {selectedJob && (
          <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center z-55 p-4">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-3xl p-6 lg:p-8 max-w-lg w-full border border-slate-200 shadow-2xl relative overflow-hidden"
            >
              {/* Close Button */}
              <button
                id="close-job-modal-btn"
                onClick={() => setSelectedJob(null)}
                className="absolute top-4 right-4 p-1.5 hover:bg-slate-100 rounded-lg text-slate-400 hover:text-slate-700 transition"
                title="Close Application Modal"
              >
                <X className="w-5 h-5" />
              </button>

              {applyStatus === 'success' ? (
                <div className="text-center py-10 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary flex items-center justify-center mx-auto text-3xl">
                    ✓
                  </div>
                  <h3 className="font-display font-black text-xl text-slate-900">Application Lodged!</h3>
                  <p className="text-xs text-slate-500 max-w-xs mx-auto leading-relaxed">
                    Sovereign submission processed. Our operations team in Bengaluru will update you on next rounds via email soon.
                  </p>
                  <button
                    id="success-job-modal-close"
                    onClick={() => setSelectedJob(null)}
                    className="mt-4 px-5 py-2 bg-brand-primary text-white rounded-xl text-xs font-bold"
                  >
                    Close Window
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmitApplication} className="space-y-5">
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono text-brand-secondary font-bold uppercase block tracking-wider">Lodging Application for</span>
                    <h3 className="text-lg font-display font-black text-slate-900 leading-tight">{selectedJob.title}</h3>
                    <span className="text-[10px] font-mono text-slate-400 block">{selectedJob.department} | {selectedJob.location}</span>
                  </div>

                  {/* Requirements display for transparency */}
                  <div className="bg-brand-cream/80 rounded-xl p-3 border border-brand-primary/5 space-y-2">
                    <h5 className="text-[9px] text-slate-400 font-mono uppercase tracking-widest font-bold">Position Requirements:</h5>
                    <ul className="space-y-1.5 text-[10px] text-slate-650 font-semibold lists">
                      {selectedJob.requirements.map((req, rIdx) => (
                        <li key={rIdx} className="flex gap-1.5 items-start">
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-secondary shrink-0 mt-0.5" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Fields */}
                  <div className="space-y-3 pt-2">
                    <div className="space-y-1">
                      <label className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block font-bold">Your Full Name:</label>
                      <input
                        id="career-apply-name"
                        type="text"
                        required
                        value={applyName}
                        onChange={(e) => setApplyName(e.target.value)}
                        placeholder="John Doe"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-900 font-medium focus:outline-none focus:border-brand-primary"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block font-bold">Professional Email Address:</label>
                      <input
                        id="career-apply-email"
                        type="email"
                        required
                        value={applyEmail}
                        onChange={(e) => setApplyEmail(e.target.value)}
                        placeholder="john@example.com"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-900 font-medium focus:outline-none focus:border-brand-primary"
                      />
                    </div>

                    {/* Resume Upload Drag-And-Drop / Selection */}
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block font-bold">Attach Professional Resume / CV (PDF):</label>
                      <div className="border border-dashed border-brand-secondary/35 bg-brand-cream/40 rounded-xl p-4 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-brand-cream/60 transition-colors">
                        <Upload className="w-6 h-6 text-brand-secondary mb-2" />
                        <span className="text-[11px] font-semibold text-slate-700">Drag & Drop file or select PDF</span>
                        <input
                          id="career-apply-file"
                          type="file"
                          accept=".pdf,.doc,.docx"
                          onChange={(e) => {
                            if (e.target.files && e.target.files[0]) {
                              setApplyResume(e.target.files[0]);
                            }
                          }}
                          className="opacity-0 absolute inset-0 cursor-pointer h-16"
                        />
                        {applyResume && (
                          <span className="text-[10px] text-brand-primary font-bold mt-2 bg-brand-primary/10 px-3 py-1 rounded-full">
                            Attached: {applyResume.name}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <button
                    id="submit-career-application"
                    type="submit"
                    className="w-full py-3 bg-brand-primary hover:bg-brand-secondary text-white font-extrabold text-xs rounded-xl shadow-md cursor-pointer flex items-center justify-center gap-2"
                  >
                    {applyStatus === 'submitting' ? 'Uploading files...' : <><Send className="w-3.5 h-3.5" /> Submit Security Dossier</>}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
