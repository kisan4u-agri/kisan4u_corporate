import { useState } from 'react';
import { Star, Compass, ShieldCheck, UserCheck, Store, MapPin, Handshake } from 'lucide-react';
import { TESTIMONIALS } from '../data';

export default function TestimonialsView() {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'dealer' | 'farmer' | 'seller'>('all');

  const filteredTestimonials = TESTIMONIALS.filter(t => 
    selectedCategory === 'all' ? true : t.category === selectedCategory
  );

  return (
    <div id="testimonials-view-container" className="space-y-16 py-12">
      
      {/* 1. HERO HEADER */}
      <section className="text-center max-w-3xl mx-auto space-y-4 pt-10 px-4">
        <span className="text-xs font-mono bg-brand-primary/10 text-brand-primary px-3 py-1 rounded-full uppercase tracking-wider font-semibold">
          Agrarian voices of success
        </span>
        <h1 className="text-4xl sm:text-5xl font-display font-black text-slate-900 tracking-tight leading-tight">
          Letters of Trust From the <span className="text-gradient-primary">Fields & Markets</span>
        </h1>
        <p className="text-slate-600 max-w-xl mx-auto text-sm leading-relaxed">
          Read genuine feedback from independent retail dealers and crop growers across major Indian agricultural hubs co-building prosperity with Kisan4U.
        </p>
      </section>

      {/* 2. SUGGESTED DISPLAY FORMAT: TRUSTED BY DEALERS AND FARMERS SUMMARY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-cream/40 border border-brand-primary/15 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row gap-6 md:items-center justify-between shadow-xs">
          <div className="space-y-2 max-w-md">
            <div className="flex gap-1 text-amber-500 text-lg">⭐⭐⭐⭐⭐</div>
            <h3 className="text-lg font-display font-bold text-slate-900">
              Trusted by Dealers, Farmers & Sellers Across India
            </h3>
            <p className="text-xs text-slate-500 leading-normal">
              Empowering regional distributors, brand manufacturers, and farming veterans in Gujarat, West Bengal, Maharashtra, and Bihar.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-grow md:max-w-xl font-mono text-[11px] text-slate-700">
            <div className="flex items-center gap-2.5 bg-white border border-slate-105 p-3 rounded-xl shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <div>
                <span className="font-bold font-display text-slate-950 block text-xs">Sachin Ashok Kadam</span>
                <span className="text-slate-500 font-medium">Pune, Maharashtra</span>
              </div>
            </div>
            <div className="flex items-center gap-2.5 bg-white border border-slate-105 p-3 rounded-xl shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <div>
                <span className="font-bold font-display text-slate-950 block text-xs">MD Zulkar Alam</span>
                <span className="text-slate-500 font-medium">Purnia, Bihar</span>
              </div>
            </div>
            <div className="flex items-center gap-2.5 bg-white border border-slate-105 p-3 rounded-xl shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <div>
                <span className="font-bold font-display text-slate-950 block text-xs">M/S Somnath Agro Centre</span>
                <span className="text-slate-500 font-medium">Gir Somnath, Gujarat</span>
              </div>
            </div>
            <div className="flex items-center gap-2.5 bg-white border border-slate-105 p-3 rounded-xl shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <div>
                <span className="font-bold font-display text-slate-950 block text-xs">Maa Fertilizer</span>
                <span className="text-slate-500 font-medium">Nadia, West Bengal</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. TABS SELECTOR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
        <div className="bg-slate-100/90 p-1 rounded-2xl flex gap-1 border border-slate-200">
          {[
            { id: 'all', label: 'All Reviews' },
            { id: 'dealer', label: 'Dealer Testimonials' },
            { id: 'farmer', label: 'Farmer Testimonials' },
            { id: 'seller', label: 'Seller Testimonials' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setSelectedCategory(tab.id as any)}
              className={`px-4 py-2 rounded-xl text-xs font-medium tracking-tight transition-all duration-200 ${
                selectedCategory === tab.id 
                  ? 'bg-brand-primary text-white shadow-sm font-semibold'
                  : 'text-slate-605 hover:text-slate-900 font-medium'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </section>

      {/* 4. DYNAMIC GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredTestimonials.map((t) => (
            <div 
              key={t.id} 
              className="bg-white rounded-3xl p-6 lg:p-8 border border-slate-200/80 shadow-xs flex flex-col justify-between hover:border-slate-300 transition-all duration-200"
            >
              <div className="space-y-5">
                {/* Header info */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl overflow-hidden border border-slate-200 flex-shrink-0">
                      <svg 
                        viewBox="0 0 100 100" 
                        fill="none" 
                        className="w-full h-full bg-[#bcbcbc]" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="50" cy="45" r="19" fill="white" />
                        <path d="M15 100 C 15 73, 85 73, 85 100 Z" fill="white" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-slate-950 text-sm leading-tight flex items-center gap-1.5">
                        {t.name}
                        {t.category === 'dealer' ? (
                          <Store className="w-3.5 h-3.5 text-brand-secondary inline" />
                        ) : t.category === 'seller' ? (
                          <Handshake className="w-3.5 h-3.5 text-amber-600 inline" />
                        ) : (
                          <UserCheck className="w-3.5 h-3.5 text-brand-primary inline" />
                        )}
                      </h4>
                      <p className="text-[11px] text-slate-500 font-mono mt-0.5 flex items-center gap-1">
                        <MapPin className="w-3 h-3 flex-shrink-0 text-slate-400" />
                        {t.location}
                      </p>
                      <p className="text-[11px] text-brand-primary font-bold mt-1 uppercase tracking-wider">
                        {t.crop}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-0.5 bg-amber-500/10 px-2 py-0.5 rounded-lg h-fit">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                </div>

                {/* Quote text */}
                <div className="relative">
                  <span className="absolute -top-4 -left-2 text-4xl font-display font-black text-brand-primary/10 select-none">“</span>
                  <p className="text-slate-650 text-xs sm:text-sm leading-relaxed relative z-10 whitespace-pre-line pl-1 shadow-none">
                    {t.quote}
                  </p>
                </div>
              </div>

              {/* Verified Badge */}
              <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span className="flex items-center gap-1 text-xs text-brand-primary font-semibold font-display">
                  <ShieldCheck className="w-4 h-4 text-brand-primary fill-brand-primary/10" />
                  Verified {t.category === 'dealer' ? 'Dealer Partner' : t.category === 'seller' ? 'Seller Partner' : 'Farmer Voice'}
                </span>
                <span>ID: K4U-{t.id.toUpperCase()}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. PURPOSE & IMPACT CALLOUT */}
      <section className="bg-brand-primary text-white rounded-[3rem] p-8 lg:p-12 max-w-7xl mx-auto shadow-xl overflow-hidden relative">
        <div className="absolute inset-0 bg-radial-gradient from-emerald-700/20 to-transparent pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto text-center space-y-4">
          <span className="text-xs font-mono text-brand-accent uppercase tracking-widest font-extrabold block">
            Our Commitment
          </span>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-medium leading-tight text-white">
            Rooted in Purpose. Growing for a Better Future.
          </h3>
          <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed font-normal max-w-2xl mx-auto">
            At Kisan4U, we believe that true progress is grown together. By cultivating deep trust, fostering strong teamwork, and nurturing lasting relationships, we unite farmers, dealers, and manufacturers. Together, we are building a supportive and sustainable agricultural ecosystem where everyone thrives.
          </p>
        </div>
      </section>

    </div>
  );
}
