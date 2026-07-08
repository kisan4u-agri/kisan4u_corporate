import { Link } from 'react-router-dom';
import { Zap } from 'lucide-react';
import {
  SarvinLogo,
  GeolifeLogo,
  HifieldLogo,
  TitanLogo,
  AriesLogo,
  ShurbansLogo,
  KayBeeLogo,
  ExylonLogo,
  KatraLogo,
  BrandLogoImage
} from './BrandLogos';

export default function InvestorView({ setActivePage }: { setActivePage?: (page: string) => void }) {
  return (
    <div id="investor-view-container" className="space-y-24 py-12">
      
      {/* 1. HERO HEADER */}
      <section className="text-center max-w-3xl mx-auto space-y-4 pt-10">
        <span className="text-xs font-mono bg-brand-primary/10 text-brand-primary px-3 py-1 rounded-full uppercase tracking-wider font-semibold">
          Capital Allocation & ESG Sourcing
        </span>
        <h1 className="text-4xl sm:text-5xl font-display font-black text-slate-900 tracking-tight leading-tight">
          Backing National Scale Rural <span className="text-gradient-primary">Infrastructure</span>
        </h1>
        <p className="text-slate-600 max-w-2xl mx-auto text-sm leading-relaxed">
          Kisan4U transforms Indian farming through capital efficiency, digital risk mitigation, and direct-to-manufacturer supply-lines.
        </p>
      </section>

      {/* 2. INVESTMENT IN KISAN4U (MILESTONES, EXPANSION ROADMAP & MISSION) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-xl mx-auto">
          <span className="text-xs font-mono bg-brand-primary/10 text-brand-primary px-3 py-1 rounded-full uppercase tracking-wider font-semibold">
            Investment in Kisan4U
          </span>
          <h2 className="text-2xl lg:text-3xl font-display font-bold text-slate-900 mt-2">
            Our Investment Journey & Vision
          </h2>
          <p className="text-sm text-slate-500 mt-1">
            From profitable manufacturing roots to secure international backing and rapid digital expansion.
          </p>
        </div>

        {/* Part A: Strategic Progression Milestones */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-slate-50 border-l-4 border-brand-primary p-6 rounded-r-2xl space-y-3 shadow-xs">
            <span className="text-[10px] font-mono text-slate-400 font-bold uppercase block tracking-wider">
              Phase 1: Promoter-Led Roots
            </span>
            <h3 className="font-display font-bold text-sm text-slate-900 leading-snug">
              In-House Foundation & Early Profitability
            </h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              Kisan4u was founded with the promoters’ own investment and a strong foundation of in-house manufactured agricultural products. This unique advantage enabled the company to generate healthy revenue and achieve profitability from its early stages of operation.
            </p>
          </div>

          <div className="bg-slate-50 border-l-4 border-brand-secondary p-6 rounded-r-2xl space-y-3 shadow-xs">
            <span className="text-[10px] font-mono text-slate-400 font-bold uppercase block tracking-wider">
              Phase 2: Foreign Direct Investment
            </span>
            <h3 className="font-display font-bold text-sm text-slate-900 leading-snug">
              USD 11.2 Million Milestone Valuation
            </h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              Following the successful launch of the Kisan4u multi-vendor e-commerce platform and mobile application, Kisan4u secured its first Foreign Direct Investment (FDI) at a valuation of <strong>USD 11.2 million</strong>. This milestone reflects the confidence and trust placed in Kisan4u’s vision, business model, and growth potential by international investors.
            </p>
          </div>

          <div className="bg-slate-50 border-l-4 border-amber-500 p-6 rounded-r-2xl space-y-3 shadow-xs">
            <span className="text-[10px] font-mono text-slate-400 font-bold uppercase block tracking-wider">
              Phase 3: Scaling & Future Horizons
            </span>
            <h3 className="font-display font-bold text-sm text-slate-900 leading-snug">
              Strategic & Private Partner Expansion
            </h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              Building on this momentum, Kisan4u is currently engaged in discussions with several strategic and private investors from both India and overseas to support its next phase of expansion and nationwide supply capabilities.
            </p>
          </div>
        </div>

        {/* Part B: Capital Allocation & Proposed Investment Utility */}
        <div className="bg-white border border-slate-200 rounded-3xl p-8 lg:p-10 shadow-sm space-y-8">
          <div>
            <h3 className="font-display font-bold text-lg text-slate-900">
              Future Capital Allocation Channels
            </h3>
            <p className="text-xs text-slate-505 mt-1 leading-relaxed">
              How the proposed investments will be strategically utilized to scale India's agrarian efficiency and market-leading operations:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-xs">
            {[
              {
                title: "In-House Technology Team-Building",
                desc: "Strengthen and expand Kisan4u’s in-house technology team to build world-class, fluid digital solutions for farmers and agri-businesses."
              },
              {
                title: "Professional Marketing Infrastructure",
                desc: "Develop a highly professional in-house marketing team to accelerate national brand awareness and high-conversion farmer acquisition."
              },
              {
                title: "Decentralized Stock Points",
                desc: "Establish state-wise and district-wise stock points to ensure faster, more efficient, and premium, timely delivery of products across India."
              },
              {
                title: "Mass Farmer Digital Outreach",
                desc: "Expand Kisan4u’s reach to over 10 million farmers through technology-driven field engagement, localized Crop Doctor features, and regional outreach programs."
              },
              {
                title: "Comprehensive Retailer Network",
                desc: "Grow the network to more than 100,000 registered, digitally-enabled dealers and retailers nationwide."
              },
              {
                title: "Extending Eco-System Offerings",
                desc: "Introduce innovative product categories, bio-solutions, and value-added advisory services for the entire agricultural ecosystem."
              }
            ].map((item, index) => (
              <div key={index} className="flex gap-4 items-start p-4 hover:bg-slate-50 rounded-2xl border border-transparent hover:border-slate-100 transition-all duration-200">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-primary/10 text-brand-primary flex items-center justify-center font-mono text-[11px] font-bold">
                  {index + 1}
                </span>
                <div className="space-y-1">
                  <h4 className="font-display font-bold text-slate-900 text-xs">{item.title}</h4>
                  <p className="text-slate-550 leading-relaxed text-[11.5px]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Part C: Growth Target & Deep Sovereign Mission Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch pt-4">
          <div className="lg:col-span-5 bg-gradient-to-br from-brand-primary to-brand-secondary text-white rounded-3xl p-6 flex flex-col justify-between shadow-md">
            <div className="space-y-2">
              <span className="text-[9px] font-mono bg-white/10 text-brand-accent px-2.5 py-1 rounded uppercase tracking-wider font-bold">2-Year Horizon</span>
              <h3 className="font-display font-medium text-lg">Sustainable Scale & Revenue Goal</h3>
            </div>
            <div className="py-6">
              <div className="text-3xl font-mono font-black text-brand-accent">USD 10 Million</div>
              <p className="text-xs text-slate-100 leading-normal mt-1.5">
                Kisan4u aims to achieve revenue of USD 10 million within the next two years while continuing to create a sustainable, technology-driven agricultural marketplace that benefits farmers, dealers, manufacturers, and other stakeholders across the value chain.
              </p>
            </div>
            <div className="text-[10px] font-mono text-brand-accent/90 border-t border-white/10 pt-2 font-bold">
              🔒 High velocity digital-physical fulfillment pipelines.
            </div>
          </div>

          <div className="lg:col-span-7 bg-brand-cream/60 border border-brand-primary/10 rounded-3xl p-6 lg:p-8 flex flex-col justify-center space-y-4">
            <span className="text-2xl">🌍</span>
            <div className="space-y-2">
              <h3 className="text-xs font-mono text-brand-primary tracking-widest uppercase font-extrabold">Our Anchor Mission</h3>
              <p className="font-display font-medium text-base sm:text-lg text-slate-800 leading-relaxed italic">
                "To become India’s most trusted digital agriculture ecosystem, empowering every farmer and dealer through technology, knowledge, and accessibility."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Brands with Us Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-xl mx-auto">
          <span className="text-xs font-mono bg-brand-primary/10 text-brand-primary px-3 py-1 rounded-full uppercase tracking-wider font-semibold">
            Partner Ecosystem
          </span>
          <h2 className="text-2xl lg:text-3xl font-display font-bold text-slate-900 mt-2">
            Brands Partnering with Us
          </h2>
          <p className="text-sm text-slate-500 mt-1">
            Collaborating with global input manufacturers and leading corporate agri-buyers.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { key: "sarvin", fallback: <SarvinLogo />, name: "Sarvin Agro Chemicals Private Limited", desc: "Agrochemicals & Integrated Solutions" },
            { key: "geolife", fallback: <GeolifeLogo />, name: "Geolife Agritech India Private Limited", desc: "Organic Inputs & Bio-stimulants" },
            { key: "hifield", fallback: <HifieldLogo />, name: "HIFIELD ORGANICS INC", desc: "Organic Cultivation & Plant Nutrition" },
            { key: "titan", fallback: <TitanLogo />, name: "TITAN AGRITECH LIMITED", desc: "Sustainably Engineered Crop Protections" },
            { key: "aries", fallback: <AriesLogo />, name: "Aries Agro Limited", desc: "Chelated Micronutrients & Fertilizer Tech" },
            { key: "shurbans", fallback: <ShurbansLogo />, name: "Shurbans International Pvt Ltd", desc: "Export-grade High-yield Aggregators" },
            { key: "kaybee", fallback: <KayBeeLogo />, name: "Kay Bee Bio-Organics Pvt. Ltd", desc: "Botanical Formulations & Bio-pesticides" },
            { key: "exylon", fallback: <ExylonLogo />, name: "Exylon Crop Care", desc: "Advanced Eco-friendly Growth Promoters" },
            { key: "katra", fallback: <KatraLogo />, name: "Katra Fertilizers & Chemicals Pvt. Ltd", desc: "FCO/CIB-compliant High-efficiency Nutrients" }
          ].map((brand, i) => (
            <div key={i} className="bg-white border border-slate-200/60 rounded-[2rem] p-6 shadow-xs hover:border-brand-primary/30 hover:shadow-md transition-all duration-300 flex flex-col items-center justify-between text-center min-h-[170px] group">
              <div className="w-full flex items-center justify-center grow">
                <BrandLogoImage brandKey={brand.key} fallback={brand.fallback} alt={brand.name} />
              </div>
              <div className="space-y-1 mt-4">
                <h4 className="font-display font-bold text-xs text-slate-800 leading-tight">
                  {brand.name}
                </h4>
                <p className="text-[10px] text-slate-500 font-semibold tracking-wide">
                  {brand.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Supply Network Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-primary text-white rounded-[2rem] lg:rounded-[2.5rem] p-8 lg:p-12 flex flex-col lg:flex-row justify-between items-center gap-8 relative overflow-hidden shadow-xl">
          <div className="space-y-3 max-w-2xl text-center lg:text-left">
            <span className="text-xs font-mono text-brand-accent uppercase tracking-widest font-extrabold flex items-center gap-1.5 justify-center lg:justify-start">
              <Zap className="w-3.5 h-3.5 fill-brand-accent text-brand-accent" /> INSTITUTIONAL BUYERS & SUPPLY PARTNERS
            </span>
            <h3 className="text-2xl sm:text-3xl font-display font-medium leading-tight text-white">
              Build A Reliable Agri Supply Network With Kisan4U
            </h3>
            <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed font-normal">
              Kisan4U is building a connected agri-commerce platform for farmers, dealers, sellers and bulk buyers. Our system supports verified seller onboarding, product approval, factory pricing, order tracking and future-ready bulk supply planning.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full sm:w-auto">
            <Link
              id="cta-corporate-partner-btn"
              to="/contact"
              className="bg-brand-accent hover:bg-amber-500 text-slate-950 font-black text-xs px-6 py-3.5 rounded-xl shadow-md transition-all cursor-pointer whitespace-nowrap text-center text-slate-900 flex items-center justify-center"
            >
              Explore Partnership
            </Link>
            <Link
              id="cta-contact-us-btn"
              to="/contact"
              className="bg-transparent hover:bg-white/10 text-white font-bold text-xs px-6 py-3.5 rounded-xl border border-white/30 transition-all cursor-pointer whitespace-nowrap text-center flex items-center justify-center"
            >
              Talk To Kisan4U Team
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
