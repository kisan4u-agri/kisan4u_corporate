import { Sprout, ShoppingBag, Users, Globe, Layers, ArrowRight, ShieldCheck, Cog, CheckCircle, Sparkles, MessageSquare, PhoneCall, HelpCircle, Truck, RefreshCcw, Handshake } from 'lucide-react';

export default function BusinessView() {
  return (
    <div id="business-view-container" className="space-y-24 py-12">
      
      {/* 1. HERO SECTION */}
      <section className="text-center max-w-4xl mx-auto space-y-4 px-4 sm:px-6">
        <span className="text-xs font-mono bg-brand-primary/10 text-brand-primary px-3 py-1 rounded-full uppercase tracking-wider font-bold">
          Value Chain & Scale
        </span>
        <h1 className="text-4xl sm:text-5xl font-display font-medium text-slate-900 tracking-tight leading-tight">
          Our Business: Building India’s <span className="text-brand-primary font-bold">Digital Agri-Commerce Network</span>
        </h1>
        <p className="text-slate-600 max-w-2xl mx-auto text-base leading-relaxed">
          Kisan4U is building a connected agri-commerce platform for farmers, dealers, sellers and bulk buyers. Our system supports verified seller onboarding, product approval, factory pricing, order tracking and future-ready bulk supply planning.
        </p>
      </section>

      {/* 2. BUSINESS MODEL OVERVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-xs font-mono bg-brand-primary/10 text-brand-primary px-3 py-1 rounded-full uppercase tracking-wider font-bold">
            KISAN4U BUSINESS MODEL
          </span>
          <h2 className="text-2xl lg:text-3xl font-display font-bold text-slate-900 mt-2">
            One Platform For Farmers, Dealers, Sellers & Agri Support
          </h2>
          <p className="text-sm text-slate-500 mt-2">
            Kisan4U brings together the major participants of the agri-input ecosystem through a structured digital platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Farmer Commerce */}
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-4 shadow-sm relative overflow-hidden flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center text-brand-primary">
                <Sprout className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-slate-900 text-lg">Farmer Commerce</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Farmers can browse products by crop, problem or category, compare suitable products and place orders through the app or website.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-[10px] font-mono text-brand-secondary font-bold uppercase">
              <span>Primary focus</span>
              <span>Crop-based product discovery</span>
            </div>
          </div>

          {/* Card 2: Dealer Commerce */}
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-4 shadow-sm relative overflow-hidden flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center text-brand-primary">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-slate-900 text-lg">Dealer Commerce</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Verified dealers get access to factory pricing, bulk quantity options, state-wise product availability and transport selection.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-[10px] font-mono text-brand-secondary font-bold uppercase">
              <span>Dealer benefits</span>
              <span>Factory pricing & bulk ordering</span>
            </div>
          </div>

          {/* Card 3: Seller Network */}
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-4 shadow-sm relative overflow-hidden flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center text-brand-primary">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-slate-900 text-lg">Seller Network</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Sellers can list products after verification and internal approval, while Kisan4U manages product visibility, stock flow and dispatch coordination.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-[10px] font-mono text-brand-secondary font-bold uppercase">
              <span>Supply side</span>
              <span>Verified seller supply</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE BUSINESS PILLARS */}
      <section className="bg-slate-50 border-y border-slate-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-xs font-mono bg-brand-primary/10 text-brand-primary px-3 py-1 rounded-full uppercase tracking-wider font-bold">
              CORE BUSINESS PILLARS
            </span>
            <h2 className="text-2xl lg:text-3xl font-display font-bold text-slate-900 mt-2">
              The Main Engines Of Kisan4U
            </h2>
            <p className="text-sm text-slate-500 mt-2">
              Kisan4U is built around practical agri-commerce operations that improve product access, supply control and customer support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Pillar 1: Agri-Input Marketplace */}
            <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-5 shadow-sm flex flex-col justify-between">
              <div className="space-y-3">
                <div className="p-2.5 bg-brand-primary/10 text-brand-primary rounded-xl w-fit">
                  <ShoppingBag className="w-5 h-5" />
                </div>
                <h3 className="font-display font-medium text-slate-900 text-base">Agri-Input Marketplace</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Kisan4U offers seeds, crop protection, crop nutrition, agri tools and other farming inputs through a digital marketplace.
                </p>
              </div>

              <div className="space-y-2 pt-4 border-t border-slate-100">
                <span className="text-[10px] text-slate-400 font-mono tracking-wider uppercase font-bold block">Quality Controls:</span>
                <ul className="space-y-1.5">
                  {['Product category management', 'Farmer and factory pricing control', 'Product approval before listing', 'State-wise product availability'].map((ctrl) => (
                    <li key={ctrl} className="text-xs text-slate-600 flex gap-2 items-start leading-tight font-medium">
                      <span className="w-1.5 h-1.5 bg-brand-primary rounded-full mt-1.5 shrink-0" />
                      <span>{ctrl}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Pillar 2: Dealer & Bulk Supply */}
            <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-5 shadow-sm flex flex-col justify-between">
              <div className="space-y-3">
                <div className="p-2.5 bg-brand-primary/10 text-brand-primary rounded-xl w-fit">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="font-display font-medium text-slate-900 text-base">Dealer & Bulk Supply</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Kisan4U supports dealers with bulk order flow, factory pricing, transport options and repeat order support.
                </p>
              </div>

              <div className="space-y-2 pt-4 border-t border-slate-100">
                <span className="text-[10px] text-slate-400 font-mono tracking-wider uppercase font-bold block">Quality Controls:</span>
                <ul className="space-y-1.5">
                  {['Dealer document verification', 'Dealer account approval', 'Bulk quantity access', 'Request option for unavailable products'].map((ctrl) => (
                    <li key={ctrl} className="text-xs text-slate-600 flex gap-2 items-start leading-tight font-medium">
                      <span className="w-1.5 h-1.5 bg-brand-primary rounded-full mt-1.5 shrink-0" />
                      <span>{ctrl}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Pillar 3: Kisan4U Doctor & Crop Support */}
            <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-5 shadow-sm flex flex-col justify-between">
              <div className="space-y-3">
                <div className="p-2.5 bg-brand-primary/10 text-brand-primary rounded-xl w-fit">
                  <Sprout className="w-5 h-5" />
                </div>
                <h3 className="font-display font-medium text-slate-900 text-base">Kisan4U Doctor & Crop Support</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Farmers can share crop details, problems and images. Kisan4U Doctor support helps recommend suitable solutions and products.
                </p>
              </div>

              <div className="space-y-2 pt-4 border-t border-slate-100">
                <span className="text-[10px] text-slate-400 font-mono tracking-wider uppercase font-bold block">Quality Controls:</span>
                <ul className="space-y-1.5">
                  {['Crop/problem-based support', 'Image-based crop query flow', 'Agronomist review', 'Product recommendation support'].map((ctrl) => (
                    <li key={ctrl} className="text-xs text-slate-600 flex gap-2 items-start leading-tight font-medium">
                      <span className="w-1.5 h-1.5 bg-brand-primary rounded-full mt-1.5 shrink-0" />
                      <span>{ctrl}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Pillar 4: Business Associate Delegation */}
            <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-5 shadow-sm flex flex-col justify-between">
              <div className="space-y-3">
                <div className="p-2.5 bg-brand-primary/10 text-brand-primary rounded-xl w-fit">
                  <Handshake className="w-5 h-5" />
                </div>
                <h3 className="font-display font-medium text-slate-900 text-base">Business Associate Delegation</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Kisan4U supports Business Associates with customer delegation, sales tracking, wallet visibility and commission-based earning support.
                </p>
              </div>

              <div className="space-y-2 pt-4 border-t border-slate-100">
                <span className="text-[10px] text-slate-400 font-mono tracking-wider uppercase font-bold block">Quality Controls:</span>
                <ul className="space-y-1.5">
                  {['BA account verification', 'Unique delegation code', 'Commission and wallet tracking', 'Sales activity monitoring', 'Due payout management'].map((ctrl) => (
                    <li key={ctrl} className="text-xs text-slate-600 flex gap-2 items-start leading-tight font-medium">
                      <span className="w-1.5 h-1.5 bg-brand-primary rounded-full mt-1.5 shrink-0" />
                      <span>{ctrl}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SALES & GROWTH CHANNELS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-xs font-mono bg-brand-primary/10 text-brand-primary px-3 py-1 rounded-full uppercase tracking-wider font-bold">
            CUSTOMER ACQUISITION NETWORK
          </span>
          <h2 className="text-2xl lg:text-3xl font-display font-bold text-slate-900 mt-2">
            How Kisan4U Reaches Farmers & Dealers
          </h2>
          <p className="text-sm text-slate-500 mt-2">
            Kisan4U uses digital and assisted channels to bring customers into the platform and convert interest into orders.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6">
          {/* Card 1: App & Website */}
          <div className="border-l-2 border-brand-primary/35 pl-5 pr-2 py-2 space-y-3">
            <span className="text-3xl block leading-none">📱</span>
            <div>
              <span className="text-[10px] text-slate-400 font-mono tracking-widest block uppercase font-bold text-brand-secondary">App & Website</span>
              <h4 className="font-display font-bold text-brand-primary text-sm mt-0.5">Direct digital ordering</h4>
            </div>
            <p className="text-xs text-slate-650 leading-relaxed font-medium">
              Customers can directly browse, search, add to cart and place orders through the Kisan4U app or website.
            </p>
          </div>

          {/* Card 2: WhatsApp, Facebook & Call Centre */}
          <div className="border-l-2 border-brand-primary/35 pl-5 pr-2 py-2 space-y-3">
            <span className="text-3xl block leading-none">📞</span>
            <div>
              <span className="text-[10px] text-slate-400 font-mono tracking-widest block uppercase font-bold text-brand-secondary">Social & Assisted</span>
              <h4 className="font-display font-bold text-brand-primary text-sm mt-0.5">Assisted sales conversion</h4>
            </div>
            <p className="text-xs text-slate-650 leading-relaxed font-medium">
              Leads from Facebook, WhatsApp and call centre are handled by agents who understand the customer requirement and help them place orders.
            </p>
          </div>

          {/* Card 3: Business Associate Network */}
          <div className="border-l-2 border-brand-primary/35 pl-5 pr-2 py-2 space-y-3">
            <span className="text-3xl block leading-none">🤝</span>
            <div>
              <span className="text-[10px] text-slate-400 font-mono tracking-widest block uppercase font-bold text-brand-secondary">BA Network</span>
              <h4 className="font-display font-bold text-brand-primary text-sm mt-0.5">Delegation-based growth</h4>
            </div>
            <p className="text-xs text-slate-650 leading-relaxed font-medium">
              Business Associates help connect new customers through delegation codes and can track their commission through the BA wallet.
            </p>
          </div>
        </div>
      </section>

      {/* 5. SUPPLY & ORDER FULFILMENT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-200 pt-16">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-xs font-mono bg-brand-primary/10 text-brand-primary px-3 py-1 rounded-full uppercase tracking-wider font-bold">
            ORDER OPERATIONS
          </span>
          <h2 className="text-2xl lg:text-3xl font-display font-bold text-slate-900 mt-2">
            From Product Listing To Customer Delivery
          </h2>
          <p className="text-sm text-slate-500 mt-2">
            Kisan4U manages the order journey from approved product listings to dispatch, logistics updates, returns and repeat orders.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {[
            { step: '01', title: 'Product Listing', desc: 'Seller or Kisan4U team adds the product.', metric: 'Internal approval required', icon: Globe },
            { step: '02', title: 'Customer Order', desc: 'Farmer or dealer places an order through the app or website.', metric: 'Farmer/dealer order flow', icon: ShoppingBag },
            { step: '03', title: 'Dispatch Assignment', desc: 'Order goes to the Kisan4U dispatch team and is assigned to seller, warehouse or logistics flow.', metric: 'Dispatch coordination', icon: Layers },
            { step: '04', title: 'Logistics Update', desc: 'Product is packed and handed over to third-party logistics. Customer receives delivery updates.', metric: 'Logistics tracking', icon: Truck },
            { step: '05', title: 'Support & Repeat Order', desc: 'Customer can raise complaints, request return or place repeat orders.', metric: 'Support and retention', icon: RefreshCcw }
          ].map((item, idx) => {
            const StepIcon = item.icon;
            return (
              <div
                key={item.step}
                className="border-t border-slate-200 pt-5 space-y-3 relative flex flex-col justify-between h-full"
              >
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-mono text-xl font-bold text-brand-primary">{item.step}</span>
                    <StepIcon className="w-5 h-5 text-brand-secondary" />
                  </div>
                  <h4 className="font-display font-bold text-slate-900 text-xs tracking-tight">{item.title}</h4>
                  <p className="text-[11px] leading-relaxed text-slate-650 font-medium">
                    {item.desc}
                  </p>
                </div>
                <div className="text-[10px] font-mono text-brand-secondary font-bold pt-4 mt-auto">
                  {item.metric}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 6. BULK BUYER & INSTITUTIONAL SUPPORT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-200 pt-16">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-xs font-mono bg-brand-primary/10 text-brand-primary px-3 py-1 rounded-full uppercase tracking-wider font-bold">
            BULK SUPPLY SUPPORT
          </span>
          <h2 className="text-2xl lg:text-3xl font-display font-bold text-slate-900 mt-2">
            Supporting Dealers, Bulk Buyers & Future FPO Supply
          </h2>
          <p className="text-sm text-slate-500 mt-2">
            Kisan4U is building the operational base to support larger agri-input demand from dealers, farmer groups, FPOs and institutional buyers.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start bg-transparent">
          {/* Support for Bulk Buyers */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
              <span className="text-3xl">💼</span>
              <div>
                <h3 className="font-display font-medium text-xl text-slate-900">Support For Bulk Buyers</h3>
                <span className="text-[10px] text-slate-400 font-mono block uppercase">Operational Assistance</span>
              </div>
            </div>

            <div className="space-y-6">
              {[
                {
                  title: "1. Dealer Bulk Orders",
                  desc: "Verified dealers can access factory pricing, bulk quantity options and transport selection."
                },
                {
                  title: "2. Product Availability Support",
                  desc: "Dealers can view products available in their state and request products that are currently unavailable."
                },
                {
                  title: "3. Custom Requirement Handling",
                  desc: "Bulk buyers can discuss product quantity, location, pricing and dispatch needs with the Kisan4U team."
                },
                {
                  title: "4. Loyalty Points on Every Purchase",
                  desc: "Dealers earn valuable loyalty points when they place orders through the Kisan4U platform, redeemable for future transactions and benefits."
                },
                {
                  title: "5. Relationship-Based Support",
                  desc: "Large buyers and dealers can receive support through internal Kisan4U teams for repeat purchases and issue resolution."
                }
              ].map((item) => (
                <div key={item.title} className="flex gap-4 items-start pb-4 border-b border-slate-100 last:border-0">
                  <div className="space-y-1">
                    <h4 className="font-display font-bold text-sm text-slate-900">{item.title}</h4>
                    <p className="text-xs text-slate-650 leading-relaxed font-medium">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Operating Controls */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
              <span className="text-3xl">🛡️</span>
              <div>
                <h3 className="font-display font-medium text-xl text-slate-900">Operating Controls</h3>
                <span className="text-[10px] text-slate-400 font-mono block uppercase">Compliance & Audits</span>
              </div>
            </div>

            <div className="space-y-6">
              {[
                {
                  title: "1. Dealer Verification",
                  desc: "Dealer accounts are approved only after document verification."
                },
                {
                  title: "2. Seller Verification",
                  desc: "Sellers are added or approved after business and document checks."
                },
                {
                  title: "3. Product Approval",
                  desc: "Products become visible only after internal Kisan4U approval."
                },
                {
                  title: "4. Stock & Availability Check",
                  desc: "Orders should be processed only when product availability is confirmed."
                },
                {
                  title: "5. Complaint & Return Support",
                  desc: "Returns, complaints and customer issues are tracked through the support flow."
                }
              ].map((item) => (
                <div key={item.title} className="flex gap-4 items-start pb-4 border-b border-slate-100 last:border-0">
                  <div className="space-y-1">
                    <h4 className="font-display font-bold text-sm text-slate-900">{item.title}</h4>
                    <p className="text-xs text-slate-650 leading-relaxed font-medium">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. DIGITAL OPERATING SYSTEM */}
      <section className="bg-slate-50 border-y border-slate-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-xs font-mono bg-brand-primary/10 text-brand-primary px-3 py-1 rounded-full uppercase tracking-wider font-bold">
              DIGITAL INFRASTRUCTURE
            </span>
            <h2 className="text-2xl lg:text-3xl font-display font-bold text-slate-900 mt-2">
              The Internal System Behind Kisan4U
            </h2>
            <p className="text-sm text-slate-500 mt-2">
              Kisan4U is not only an e-commerce website. It is a connected operating system for users, products, pricing, orders, dispatch, support and reporting.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'User & Role Management',
                desc: 'Manages farmers, dealers, sellers, staff, BA network and Kisan4U Doctor access.',
                icon: Users
              },
              {
                title: 'Product & Catalog Management',
                desc: 'Controls categories, listings, crop mapping, product visibility and approvals.',
                icon: Sprout
              },
              {
                title: 'Pricing & Promotion Management',
                desc: 'Manages farmer pricing, factory pricing, discounts, banners and marketing promotions.',
                icon: ShoppingBag
              },
              {
                title: 'Inventory & Availability',
                desc: 'Tracks stock, state-wise availability, low-stock alerts and product requests.',
                icon: Layers
              },
              {
                title: 'Order & Dispatch Management',
                desc: 'Handles order confirmation, assignment, packing and logistics handover.',
                icon: Truck
              },
              {
                title: 'Support & Complaint Management',
                desc: 'Handles customer issues, returns, reorders and support questions.',
                icon: RefreshCcw
              }
            ].map((module) => {
              const ModuleIcon = module.icon;
              return (
                <div
                  key={module.title}
                  className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-4 shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-brand-primary/10 text-brand-primary rounded-xl">
                      <ModuleIcon className="w-5 h-5" />
                    </div>
                    <h4 className="font-display font-bold text-slate-900 text-sm leading-tight">{module.title}</h4>
                  </div>
                  <p className="text-slate-650 text-xs leading-relaxed font-medium">
                    {module.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. BUSINESS PERFORMANCE GOALS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-mono bg-brand-primary/10 text-brand-primary px-3 py-1 rounded-full uppercase tracking-wider font-bold">
              BUSINESS PERFORMANCE GOALS
            </span>
            <h3 className="text-2xl lg:text-3xl font-display font-bold text-slate-900 tracking-tight">
              What Kisan4U Is Working To Improve
            </h3>
            <p className="text-slate-650 text-sm leading-relaxed font-medium">
              Our focus is to improve agri-input access, dealer engagement, seller accountability, customer support and repeat purchase growth.
            </p>

            <div className="pt-2 border-t border-slate-100 flex items-center gap-2 text-[10px] font-mono text-slate-400">
              <ShieldCheck className="w-4 h-4 text-brand-secondary" /> Operating metrics audited recursively
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[
              { title: 'More Verified Sellers', desc: 'Build a stronger supplier network with approved sellers and quality-controlled product listings.', metric: 'Number of active verified sellers' },
              { title: 'More Active Dealers', desc: 'Increase repeat purchases from registered dealers through pricing, bulk supply and support.', metric: 'Monthly active dealers' },
              { title: 'Better Farmer Support', desc: 'Improve farmer confidence through crop-based search, Kisan4U Doctor and assisted ordering.', metric: 'Farmer queries resolved' },
              { title: 'Faster Order Fulfilment', desc: 'Improve dispatch coordination, stock accuracy and logistics updates.', metric: 'Orders dispatched on time' },
              { title: 'Higher Repeat Purchase', desc: 'Bring farmers and dealers back through better service, product availability and WhatsApp/app engagement.', metric: 'Repeat order rate' },
            ].map((goal) => (
              <div key={goal.title} className="space-y-1.5 border-l border-slate-200 pl-4">
                <span className="text-[10px] font-mono font-bold text-brand-secondary uppercase block">{goal.metric}</span>
                <h5 className="font-display font-bold text-sm text-slate-900 leading-tight">{goal.title}</h5>
                <p className="text-[11.5px] text-slate-500 leading-normal font-medium">{goal.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
