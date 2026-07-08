import { Target, Eye, Globe, Droplets, Leaf, Shield, Sparkles, BookOpen, Clock, Users, ArrowUpRight } from 'lucide-react';

interface TimelineEvent {
  year: string;
  title: string;
  desc: string;
  metric: string;
}

const TIMELINE: TimelineEvent[] = [
  { 
    year: '2000', 
    title: 'Roots in Agrochemicals', 
    desc: 'Founder Dr. Idris Bohra enters the agrochemical industry, laying the foundation with seeds, crop protection, and nutrition manufacturing experience.', 
    metric: 'Agrochemical Foundations' 
  },
  { 
    year: '2022', 
    title: 'Digital Platform Launch', 
    desc: 'Officially launches kisan4u.com & mobile app under Katra brand. Establishes dedicated Indore call center serving farmers.', 
    metric: 'Indore Call Center Active' 
  },
  { 
    year: '2023', 
    title: '50k+ Fulfillments', 
    desc: 'Delivered 50,000+ farmer orders and 5,000+ dealer orders. Rapid tech and customer service expansions.', 
    metric: '50,000+ App Downloads' 
  },
  { 
    year: '2024', 
    title: 'Next-Gen Multi-Vendor', 
    desc: 'Debuts multi-vendor e-commerce platforms and redesigned Android & iOS mobile applications.', 
    metric: 'Sleek Redesigned Apps' 
  }
];

interface ESGMetric {
  title: string;
  metric: string;
  description: string;
  icon: any;
  bulletPoints: string[];
}

const ESG_METRICS: ESGMetric[] = [
  {
    title: 'Better Product Selection',
    metric: 'Crop-Based Buying Support',
    description: 'Farmers can search products by crop, problem, category or requirement. This helps reduce confusion and supports better product selection before purchase.',
    icon: Droplets,
    bulletPoints: [
      'Crop/problem-based product discovery',
      'Kisan4U Doctor support for farmer queries',
      'Product recommendations reviewed by agronomy support team',
      'App, website, WhatsApp and call centre assistance'
    ]
  },
  {
    title: 'Verified Product Listings',
    metric: 'Approved Before Publishing',
    description: 'Sellers can add products through the Kisan4U seller system, but products are made visible only after internal review and approval. This helps improve trust and listing quality.',
    icon: Leaf,
    bulletPoints: [
      'Seller registration and document verification',
      'Product approval by internal Kisan4U team',
      'Category, price and factory pricing control',
      'Stock, sales, return and payment reporting'
    ]
  },
  {
    title: 'Organized Supply & Support',
    metric: 'Order Tracking & Support Flow',
    description: 'Kisan4U connects farmers, dealers, sellers, business associates, call centre agents and dispatch teams through one operating system. Orders, complaints, returns and repeat purchases can be handled in a more structured way.',
    icon: Shield,
    bulletPoints: [
      'Order assignment to seller, warehouse or dispatch team',
      'Third-party logistics handover and order updates',
      'Complaint, return and reorder support',
      'Dealer and farmer support through internal team'
    ]
  }
];

export default function AboutView() {
  return (
    <div id="about-us-container" className="space-y-24 py-12">
      
      {/* Hero Banner */}
      <section className="text-center max-w-4xl mx-auto space-y-4 px-4 sm:px-6">
        <span className="text-xs font-mono bg-brand-primary/10 text-brand-primary px-3 py-1 rounded-full uppercase tracking-wider font-bold">
          The Kisan4U Journey
        </span>
        <h1 className="text-4xl sm:text-5xl font-display font-medium text-slate-900 tracking-tight">
          From Agricultural Roots to <span className="text-brand-primary font-bold">Digital Transformation</span>
        </h1>
        <p className="text-slate-600 max-w-2xl mx-auto text-base leading-relaxed">
          The story of Kisan4u began long before the launch of its digital platform. Standardizing supply routes, backing smallholder productivity, and implementing absolute farmer trust.
        </p>
      </section>

      {/* History Chapters */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-8 space-y-16">
            
            {/* Chapter 1 */}
            <div className="space-y-4 pb-12 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <span className="text-base font-mono bg-brand-primary/10 text-brand-primary w-8 h-8 rounded-full flex items-center justify-center font-bold">1</span>
                <h3 className="text-xl font-display font-bold text-slate-900">From Agricultural Roots</h3>
              </div>
              <div className="space-y-4 pl-11">
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  The genesis of Kisan4u was established in <strong>2000</strong>, marked by our founder, Dr. Idris Bohra, venturing into the high-barrier agrochemical sector with a singular objective: to systematically uplift India’s rural farming landscape. Over the subsequent two decades, Dr. Bohra cultivated profound, hands-on expertise in the specialized manufacturing, synthesis, and localized distribution of high-yield hybrid seeds, crop protection technologies, bio-nutrients, and essential soil health solutions.
                </p>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Direct, deep-rooted interactions with regional farmers and agricultural micro-distributors across key agrarian corridors provided invaluable, ground-level intelligence. It exposed severe structural vulnerabilities within the traditional supply chain, notably systemic pricing opacity, critical knowledge gaps in crop agronomy, and restricted product availability. This deep industry-focused intelligence and commitment to structural reform became the architectural blueprint that drove the conception of the digital-first Kisan4u platform.
                </p>
              </div>
            </div>

            {/* Chapter 2 */}
            <div className="space-y-4 pb-12 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <span className="text-base font-mono bg-brand-primary/10 text-brand-primary w-8 h-8 rounded-full flex items-center justify-center font-bold">2</span>
                <h3 className="text-xl font-display font-bold text-slate-900">Building a Digital Agriculture Ecosystem</h3>
              </div>
              <div className="space-y-4 pl-11">
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Recognizing that technological infrastructure is the primary catalyst for scaling agricultural efficiency, Kisan4u partnered with elite software architects and domain-specific engineers. Together, we designed and built a highly optimized, enterprise-grade e-commerce engine customized with proprietary logic tailored specifically to the unique transaction workflows of the agricultural value chain.
                </p>
                <p className="text-slate-650 text-sm sm:text-base leading-relaxed">
                  In <strong>April 2022</strong>, the platform was formally deployed via <a href="https://www.kisan4u.com" target="_blank" rel="noopener noreferrer" className="text-brand-primary font-bold hover:underline inline-flex items-center gap-1">www.kisan4u.com <ArrowUpRight className="w-3.5 h-3.5" /></a> along with its companion native mobile application. The initial product strategy prioritized our premium, in-house manufactured crop solutions under the FCO-certified Katra brand, thereby establishing a high baseline of quality control, absolute supply integrity, and industry-leading unit margins.
                </p>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  To ensure uninterrupted, high-touch customer support and precision agronomic advisory services, Kisan4u established an advanced, centralized support hub in Indore in <strong>May 2022</strong>, operating with state-of-the-art telecommunication infrastructure staffed by over 80 trained agricultural and service specialists.
                </p>
              </div>
            </div>

            {/* Chapter 3 */}
            <div className="space-y-4 pb-12 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <span className="text-base font-mono bg-brand-primary/10 text-brand-primary w-8 h-8 rounded-full flex items-center justify-center font-bold">3</span>
                <h3 className="text-xl font-display font-bold text-slate-900">Strengthening Leadership and Expertise</h3>
              </div>
              <div className="space-y-4 pl-11">
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  To guide this rapid scaling phase with structural governance, Kisan4u strategically onboarded a seasoned executive team and a prominent advisory board. Consisting of distinguished leaders from multinational corporations, national agricultural bodies, tier-one technology ventures, financial institutions, and policy makers, this multi-disciplinary leadership framework steers the platform’s strategic expansion, solidifies operational excellence, and maintains institutional compliance.
                </p>
              </div>
            </div>

            {/* Chapter 4 */}
            <div className="space-y-4 pb-12 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <span className="text-base font-mono bg-brand-primary/10 text-brand-primary w-8 h-8 rounded-full flex items-center justify-center font-bold">4</span>
                <h3 className="text-xl font-display font-bold text-slate-900">Achieving Early Milestones</h3>
              </div>
              <div className="space-y-4 pl-11">
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  By <strong>March 2023</strong>, Kisan4u had reached several key high-impact milestones:
                </p>
                <ul className="list-disc pl-9 space-y-2 text-slate-600 text-sm">
                  <li>Delivered more than 50,000 farmer orders successfully</li>
                  <li>Served over 5,000 verified dealer fulfillments</li>
                  <li>Established a high-yield presence across multiple premium agricultural zones</li>
                </ul>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  The enterprise accelerated its investment in technology platforms and consumer touchpoints, propelling organic mobile applications adoption past the 50,000 downloads mark within the same fiscal period.
                </p>
              </div>
            </div>

            {/* Chapter 5 */}
            <div className="space-y-4 pb-12 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <span className="text-base font-mono bg-brand-primary/10 text-brand-primary w-8 h-8 rounded-full flex items-center justify-center font-bold">5</span>
                <h3 className="text-xl font-display font-bold text-slate-900">Driving Innovation Through Technology</h3>
              </div>
              <div className="space-y-4 pl-11">
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Technological superiority remains the cornerstone of Kisan4u's value proposition. By incorporating predictive data models, smart product recommendation engines, and seamless digital checkout workflows, we have successfully optimized product discovery and organic engagement across both web and native applications.
                </p>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  In <strong>2024</strong>, this culminated in the launch of our next-generation, highly scalable multi-vendor e-commerce architecture. Backed by state-of-the-art Android and iOS platforms, this infrastructure delivers stellar performance, flawless responsiveness, and robust security for multi-tier transactions.
                </p>
              </div>
            </div>

            {/* Chapter 6 */}
            <div className="space-y-4 pb-12 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <span className="text-base font-mono bg-brand-primary/10 text-brand-primary w-8 h-8 rounded-full flex items-center justify-center font-bold">6</span>
                <h3 className="text-xl font-display font-bold text-slate-900">Building India’s Largest Digital Agriculture Network</h3>
              </div>
              <div className="space-y-4 pl-11">
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Today, Kisan4u has evolved into one of India’s rapidly growing agritech platforms, connecting farmers, dealers, manufacturers, and agricultural service providers through a unified digital ecosystem. Key achievements include:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-3">
                  <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl">
                    <span className="block text-2xl font-mono font-black text-brand-primary">1 Million+</span>
                    <span className="block text-xs text-slate-500 font-mono font-bold uppercase tracking-wider mt-1">Farmers</span>
                  </div>
                  <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl">
                    <span className="block text-2xl font-mono font-black text-brand-primary">10000+</span>
                    <span className="block text-xs text-slate-500 font-mono font-bold uppercase tracking-wider mt-1">Dealers</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Chapter 7 */}
            <div className="space-y-4 pb-4">
              <div className="flex items-center gap-3">
                <span className="text-base font-mono bg-brand-primary/10 text-brand-primary w-8 h-8 rounded-full flex items-center justify-center font-bold">7</span>
                <h3 className="text-xl font-display font-bold text-slate-900">The Road Ahead</h3>
              </div>
              <div className="space-y-4 pl-11">
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Looking forward, Kisan4u is heavily accelerating its proprietary technology development. Driven by an exceptional core of software architects, data scientists, agronomists, and retail operations experts, our strategic roadmap includes the integration of predictive AI diagnostics, localized pricing analytics, digital-first fintech payment systems, and precision weather-integrated advising. This comprehensive technical evolution is engineered to empower farmers, optimize dealer liquidity, and dramatically de-risk India's agricultural supply chain.
                </p>
              </div>
            </div>
          </div>

          {/* Right rail: Vision & Mission */}
          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
            
            {/* Vision Card */}
            <div className="bg-brand-primary text-white rounded-[2rem] p-6 space-y-4 shadow-md border border-brand-primary/10">
              <div className="flex items-center gap-3">
                <div className="bg-white/10 p-2.5 rounded-xl text-brand-accent">
                  <Eye className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-display font-medium text-white tracking-wide">Our Vision</h3>
              </div>
              <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed font-normal">
                To become India’s most trusted digital agriculture ecosystem, empowering every farmer and dealer through technology, knowledge, and accessibility.
              </p>
            </div>

            {/* Mission Card */}
            <div className="bg-brand-primary text-white rounded-[2rem] p-6 space-y-4 shadow-md border border-brand-primary/10">
              <div className="flex items-center gap-3">
                <div className="bg-white/10 p-2.5 rounded-xl text-brand-accent">
                  <Target className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-display font-medium text-white tracking-wide">Our Mission</h3>
              </div>
              <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed font-normal">
                To bridge the gap between agricultural inputs, technology, and farming communities by providing innovative, reliable, and affordable solutions that enhance productivity and profitability.
              </p>
            </div>



          </div>
        </div>
      </section>

      {/* Chronology of scale section */}
      <section className="bg-slate-50 border-y border-slate-200 py-16 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-xs font-mono bg-brand-primary/10 text-brand-primary px-3 py-1 rounded-full uppercase tracking-wider font-bold">
              Chronology of scale
            </span>
            <h2 className="text-2xl lg:text-3xl font-display font-bold text-slate-900 mt-2">
              The Journey of Kisan4U
            </h2>
            <p className="text-sm text-slate-500 mt-2">
              How we grew from agricultural roots to a unified national agritech digital infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {TIMELINE.map((item, idx) => (
              <div
                key={item.year}
                className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-4 shadow-sm relative overflow-hidden"
              >
                <div className="flex justify-between items-center">
                  <span className="font-mono text-xl font-black text-brand-primary">
                    {item.year}
                  </span>
                  <span className="text-[10px] font-mono font-black text-slate-350 select-none">
                    STAGE 0{idx + 1}
                  </span>
                </div>
                <h4 className="font-display font-medium text-slate-900 text-sm">{item.title}</h4>
                <p className="text-xs leading-relaxed text-slate-600">
                  {item.desc}
                </p>
                <div className="text-[10px] font-mono text-slate-400 pt-2 border-t border-slate-100 flex items-center justify-between">
                  <span>Impact Metrics</span>
                  <span className="text-brand-secondary font-bold">{item.metric}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Responsible Growth Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 animate-fade-in">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-mono bg-brand-primary/10 text-brand-primary px-3 py-1 rounded-full uppercase tracking-wider font-bold">
            ENVIRONMENTAL STEWARDSHIP
          </span>
          <h2 className="text-2xl lg:text-3xl font-display font-medium text-slate-900 mt-2">
            Responsible Growth Through Digital Agri Access
          </h2>
          <p className="text-sm text-slate-500 mt-2 leading-relaxed">
            Kisan4U is building a digital agri-commerce platform focused on verified supply, farmer support, dealer access, seller accountability and structured order fulfilment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ESG_METRICS.map((metric, i) => (
            <div
              key={metric.title}
              className="bg-transparent border-t border-slate-200 pt-6 space-y-4"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-brand-primary/10 text-brand-primary rounded-xl">
                  <metric.icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-slate-900 text-sm">{metric.title}</h4>
                  <p className="text-[10px] font-mono text-brand-secondary font-bold uppercase tracking-wider">{metric.metric}</p>
                </div>
              </div>

              <p className="text-slate-650 text-xs leading-relaxed">
                {metric.description}
              </p>

              <div className="space-y-1.5 pt-2">
                <span className="text-[10px] text-slate-400 font-mono tracking-wider uppercase font-bold block">Key Controls:</span>
                <ul className="space-y-1.5">
                  {metric.bulletPoints.map((bp) => (
                    <li key={bp} className="text-xs text-slate-600 flex gap-2 items-start leading-tight">
                      <span className="w-1.5 h-1.5 bg-brand-primary rounded-full mt-1.5 shrink-0" />
                      <span>{bp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
