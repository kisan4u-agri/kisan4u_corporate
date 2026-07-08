import { Sprout, TrendingUp, Cpu, Award, Zap, ChevronRight, Activity, ShieldCheck, Sparkles } from 'lucide-react';
import EcosystemDiagram from './EcosystemDiagram';
import { CORE_STATS } from '../data';

interface HomeViewProps {
  setActivePage: (page: string) => void;
  onOpenPartnerModal: () => void;
  onOpenGetStartedModal: () => void;
}

export default function HomeView({
  setActivePage,
  onOpenPartnerModal,
  onOpenGetStartedModal
}: HomeViewProps) {
  
  return (
    <div id="home-view-container" className="space-y-24 py-6">
      
      {/* 1. HERO SECTION (Simple, elegant split page layout, zero bouncing animations) */}
      <section className="relative pt-12 pb-16 overflow-hidden bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column Content */}
            <div className="lg:col-span-6 space-y-6 text-center lg:text-left">

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-medium text-slate-900 leading-tight tracking-tight">
                Empowering Farmers.<br />
                <span className="text-brand-primary font-bold">Transforming Agriculture.</span>
              </h1>
              
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium">
                Our Mission: To empower farmers and agri-dealers with easy access to trusted agricultural products, better prices, expert crop advice, and reliable doorstep delivery through one digital platform.
              </p>

              {/* Removed buttons and security indicators per PDF request */}

            </div>

            {/* Right Column: High Quality Static Farmer Field Image */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <div className="relative w-full max-w-[480px] rounded-2xl overflow-hidden mx-auto">
                <img 
                  src="https://images.unsplash.com/photo-1560493676-04071c5f467b?auto=format&fit=crop&q=80&w=800" 
                  alt="Kisan4U Agricultural Empowerment" 
                  referrerPolicy="no-referrer"
                  className="w-full h-[360px] object-cover rounded-2xl border border-slate-200"
                />
              </div>
              <div className="mt-4 text-center">
                <p className="text-xs font-mono font-bold text-brand-primary tracking-widest uppercase">LUSH GREEN FIELDS & EXPERT ADVISOR SYSTEMS</p>
                <p className="text-[11px] text-slate-500 mt-1">Empowering Indian growers with digital-first supply connectivity & verified input materials.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. REAL-TIME IMPACT COUNTERS & STATS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="bg-brand-primary text-white rounded-[2.5rem] lg:rounded-[3rem] p-8 lg:p-12 shadow-xl relative overflow-hidden text-center">
          
          <div className="text-center max-w-xl mx-auto">
            <span className="text-xs font-mono text-brand-accent tracking-widest uppercase font-bold block mb-2">
              Consolidated Reach
            </span>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-display font-medium text-white tracking-wide">
              Audited Operational Statistics (FY 2026)
            </h3>
          </div>

          <hr className="border-t border-white/10 my-8 max-w-5xl mx-auto" />

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6 max-w-5xl mx-auto text-center">
            {CORE_STATS.map((stat) => (
              <div key={stat.label} className="space-y-3">
                <div className="text-3xl lg:text-4xl font-mono font-black text-brand-accent">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-[11px] lg:text-xs font-mono font-bold text-white uppercase tracking-wider flex items-center justify-center">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. DIGITAL ECOSYSTEM FLOWCHART NETWORK */}
      <section id="ecosystem-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <EcosystemDiagram />
      </section>

      {/* 5. AGRI-COMMERCE OPERATING PRINCIPLES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-mono bg-brand-primary/10 text-brand-primary px-3 py-1 rounded-full uppercase tracking-wider font-bold">
            AGRI-COMMERCE OPERATING PRINCIPLES
          </span>
          <h2 className="text-2.5xl lg:text-3xl font-display font-bold text-slate-900 mt-3">
            Built To Make Agri Buying More Transparent
          </h2>
          <p className="text-sm text-slate-500 mt-2 leading-relaxed">
            Kisan4U connects farmers, dealers, sellers, business associates and agri experts through one digital platform to improve product discovery, verified supply, order support and repeat purchase confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
          {[
            {
              title: "1. Product Discovery & Crop Support",
              desc: "Farmers can search products by crop, problem or category through the Kisan4U app and website. Kisan4U Doctor support helps farmers share crop details and images so agronomists can recommend suitable solutions.",
              icon: "🌱",
              stat: "Crop-Based Product Guidance"
            },
            {
              title: "2. Transparent Pricing",
              desc: "Kisan4U shows separate pricing for farmer and dealer customers. Dealers can access factory pricing and bulk quantity options after verification by the Kisan4U team.",
              icon: "💸",
              stat: "Farmer & Factory Price Flow"
            },
            {
              title: "3. Verified Seller Network",
              desc: "Sellers are registered or added after document verification. Products become visible on the platform only after technical team approval, helping Kisan4U control listing quality and supply reliability.",
              icon: "🌾",
              stat: "Seller & Product Approval"
            },
            {
              title: "4. Bulk & Dealer Supply",
              desc: "Dealer customers can order state-wise available products, request unavailable products, select transport options and place repeat orders through the platform.",
              icon: "🛍️",
              stat: "Dealer Bulk Ordering"
            },
            {
              title: "5. Lead, Call Centre & BA Growth",
              desc: "Kisan4U receives customer interest through Facebook ads, WhatsApp and call centre channels. Leads can be assigned to agents, while Business Associates can bring customers through delegation codes and track commission.",
              icon: "🗺️",
              stat: "Sales Channel Network"
            },
            {
              title: "6. Order, Support & Repeat Purchase",
              desc: "After an order is placed, the dispatch team manages packing, logistics handover, order updates, complaints, returns and repeat purchase support through the internal Kisan4U system.",
              icon: "💧",
              stat: "Dispatch & Support Flow"
            }
          ].map((card) => (
            <div 
              key={card.title}
              className="flex flex-col justify-between space-y-3 bg-transparent p-1 border-b border-slate-200 pb-5"
            >
              <div className="space-y-2">
                <span className="text-3xl block leading-none">{card.icon}</span>
                <h4 className="text-neutral-900 font-display font-bold text-sm pt-1">{card.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">{card.desc}</p>
              </div>
              
              <div className="pt-2 flex items-center justify-between text-[11px] font-mono text-brand-primary font-bold">
                <span>{card.stat}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
