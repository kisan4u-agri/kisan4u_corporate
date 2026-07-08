import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Linkedin, Sparkles, Heart, ChevronLeft, ChevronRight, MessageSquare } from 'lucide-react';
import { TEAM_MEMBERS } from '../data';

const CULTURE_PHOTOS = [
  {
    title: 'Collaborative Soil Scanning',
    desc: 'Kisan4U agronomy squads holding soil health testing metrics with local farming groups in rural Pune.',
    img: 'https://images.unsplash.com/photo-1595246140625-573b715d11dc?auto=format&fit=crop&q=80&w=600'
  },
  {
    title: 'Co-creating pesticide schedules',
    desc: 'Kisan4U leadership co-creating pesticide scheduling metrics with cooperative organic farmers near Sangli.',
    img: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80&w=600'
  },
  {
    title: 'Empowerment onboarding',
    desc: 'Demonstrating drone-based ultra-low volume precision spraying techniques to rural cooperative leaders in Nashik.',
    img: 'https://images.unsplash.com/photo-1527847263472-aa5338d178b8?auto=format&fit=crop&q=80&w=600'
  }
];

export default function TeamView() {
  const [activeCultureIdx, setActiveCultureIdx] = useState(0);
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const handleImageError = (id: string) => {
    setImageErrors(prev => ({ ...prev, [id]: true }));
  };

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .substring(0, 2)
      .toUpperCase();
  };

  const handleNextCulture = () => {
    setActiveCultureIdx(prev => (prev + 1) % CULTURE_PHOTOS.length);
  };

  const handlePrevCulture = () => {
    setActiveCultureIdx(prev => (prev - 1 + CULTURE_PHOTOS.length) % CULTURE_PHOTOS.length);
  };

  return (
    <div id="team-view-container" className="space-y-24 py-12">
      
      {/* 1. HERO BANNER WITH SUBTLE ANIMATED BACKGROUND */}
      <section className="text-center max-w-3xl mx-auto space-y-4 pt-10 relative">
        <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none -z-10">
          <div className="w-48 h-48 bg-brand-primary/10 rounded-full blur-2xl animate-pulse-subtle" />
        </div>
        
        <span className="text-xs font-mono bg-brand-primary/10 text-brand-primary px-3 py-1 rounded-full uppercase tracking-wider font-semibold">
          Innovators & Agronomists
        </span>
        <h1 className="text-4xl sm:text-5xl font-display font-black text-slate-900 tracking-tight">
          Meet the Minds Behind <span className="text-gradient-primary">Kisan4U</span>
        </h1>
        <p className="text-slate-600 max-w-xl mx-auto text-sm leading-relaxed">
          We are a strategic assembly of Cornell agronomists, software architects, and cold chain managers co-engineering durable agricultural systems.
        </p>
      </section>

      {/* 2. LEADERSHIP TEAM GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-xs font-mono bg-brand-primary/10 text-brand-primary px-3 py-1 rounded-full uppercase tracking-wider font-semibold">
            Executive Board
          </span>
          <h2 className="text-2xl lg:text-3xl font-display font-bold text-slate-900 mt-2">
            Founder & Executive Officers
          </h2>
          <p className="text-sm text-slate-500 mt-1">
            Our leaders carry decade-long records scaling agricultural networks and financial frameworks.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {TEAM_MEMBERS.map((member) => (
            <div
              id={`team-member-card-${member.id}`}
              key={member.id}
              className="bg-transparent group flex flex-col justify-between"
            >
              <div>
                {/* Photo frame */}
                <div className="relative aspect-square w-full rounded-2xl bg-slate-100 overflow-hidden border border-slate-200 flex items-center justify-center">
                  {imageErrors[member.id] || !member.image ? (
                    <div className="w-full h-full bg-gradient-to-br from-brand-primary/10 to-brand-secondary/20 flex flex-col items-center justify-center space-y-2 p-4">
                      <div className="w-16 h-16 rounded-full bg-white border border-slate-200/80 shadow-xs flex items-center justify-center text-brand-primary font-display font-black text-xl select-none">
                        {getInitials(member.name)}
                      </div>
                      <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest text-center">Photo Pending Upload</span>
                    </div>
                  ) : (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                      referrerPolicy="no-referrer"
                      onError={() => handleImageError(member.id)}
                    />
                  )}
                </div>

                <div className="pt-4 pb-2 space-y-1">
                  <span className="text-[10px] font-mono font-bold text-brand-secondary block uppercase tracking-wider">{member.role}</span>
                  <h4 className="font-display font-bold text-slate-900 text-sm">{member.name}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed pt-1 select-none">
                    {member.bio}
                  </p>
                </div>
              </div>

              {/* LinkedIn icon action panel */}
              <div className="pb-4 pt-2 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[9px] text-slate-400 font-mono uppercase">Verified Profile</span>
                <a
                  id={`team-member-linkedin-${member.id}`}
                  href={member.linkedin}
                  className="p-1 hover:text-brand-primary text-slate-400 transition-colors"
                  title={`LinkedIn profile of ${member.name}`}
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. TEAM CULTURE STATIC SHOWCASE */}
      <section className="bg-slate-50 rounded-[3rem] p-8 lg:p-12 max-w-7xl mx-auto">
        <div className="space-y-8">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-mono bg-brand-primary/10 text-brand-primary px-3 py-1 rounded-full uppercase tracking-wider font-semibold">
              Life at Kisan4U
            </span>
            <h3 className="text-2xl lg:text-3xl font-display font-black text-slate-900 tracking-tight leading-tight">
              Growing Together at Kisan4U
            </h3>
            <p className="text-slate-600 text-xs md:text-sm leading-relaxed font-medium">
              A workplace built on teamwork, learning, field understanding and technology-led agricultural growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CULTURE_PHOTOS.map((photo) => (
              <div
                key={photo.title}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-xs flex flex-col justify-between"
              >
                <div className="aspect-[16/9] w-full bg-slate-100 overflow-hidden relative">
                  <img
                    src={photo.img}
                    alt={photo.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-md px-3 py-1 rounded-lg border border-white/10 text-[9px] font-mono text-brand-accent uppercase font-bold tracking-widest leading-none">
                    Field Study
                  </div>
                </div>

                <div className="p-6 space-y-2 flex-1 flex flex-col justify-center">
                  <h4 className="font-display font-bold text-slate-900 text-sm">
                    {photo.title}
                  </h4>
                  <p className="text-xs text-slate-505 leading-relaxed font-semibold">
                    {photo.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
