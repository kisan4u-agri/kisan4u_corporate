import { User, Store, ShoppingBag, ShieldAlert, Layers } from 'lucide-react';

interface EcosystemNode {
  id: string;
  label: string;
  category: string;
  status: string;
  description: string;
  metric1Label: string;
  metric1Value: string;
  metric2Label: string;
  metric2Value: string;
  icon: any;
  stepNumber: number;
}

const NODES: EcosystemNode[] = [
  {
    id: 'f-1',
    label: 'Crop Problem & Product Demand Collection',
    category: 'FARMER NEEDS',
    status: 'App, Website, WhatsApp & Call Centre',
    description: 'Kisan4U collects farmer demand through the mobile app, website, WhatsApp, Facebook leads and call centre support. Farmers can search by crop, problem or product category, while the internal team understands their requirement and helps them place the right order.',
    metric1Label: 'Customer Types',
    metric1Value: 'Farmer + Dealer',
    metric2Label: 'Demand Channels',
    metric2Value: 'App, Website, WhatsApp, Call Centre',
    icon: User,
    stepNumber: 1
  },
  {
    id: 'i-2',
    label: 'Product Approval, Stock & Order Fulfilment',
    category: 'SUPPLY',
    status: 'Seller, Warehouse & Dispatch Network',
    description: 'Products are listed only after verification of valid state wise licenses in accordance with the CIB and FCO e-commerce applicable laws. Every product listing, including its price and discount is reviewed and approved by the Kisan4u Admin Team to ensure competitive and reasonable pricing before it becomes visible on the website and mobile application. Once an order is placed, it automatically assigns through seller panel to the respective seller and logistics partner for order fulfillment.',
    metric1Label: 'Supply Sources',
    metric1Value: 'Seller + Warehouse',
    metric2Label: 'Order Flow',
    metric2Value: 'Verified Dispatch',
    icon: Store,
    stepNumber: 2
  },
  {
    id: 'm-3',
    label: 'Factory Pricing & Dealer Profit Support',
    category: 'BUSINESS GROWTH',
    status: 'Dealer & Bulk Buyer Network',
    description: 'Kisan4U supports registered dealers with state-wise product sales based on valid Principal Certificates and O-Forms, as per applicable Agriculture Department laws. Dealers get access to a wide range of products at highly competitive factory prices, attractive loyalty reward schemes, and reliable delivery through transport and courier partners with COD options wherever applicable. Orders are fulfilled from the seller’s nearest state-wise stock point, subject to valid sales authorization, stock availability, and local inventory in the destination state, ensuring safer, faster, and more cost-effective delivery. This helps dealers earn healthy profit margins while offering better pricing and value to their farmer customers.',
    metric1Label: 'Business Channels',
    metric1Value: 'Dealer + Bulk Buyer',
    metric2Label: 'Future Focus',
    metric2Value: 'FPO & Corporate Supply',
    icon: ShoppingBag,
    stepNumber: 3
  }
];

export default function EcosystemDiagram() {
  return (
    <div id="ecosystem-view-container" className="space-y-12">
      <div className="text-center max-w-xl mx-auto mb-10">
        <span className="text-xs font-mono bg-brand-primary/10 text-brand-primary px-3 py-1 rounded-full uppercase tracking-wider font-semibold">
          Platform Architecture
        </span>
        <h3 className="text-2xl lg:text-3xl font-display font-medium text-slate-900 mt-2">
          Kisan4U Digital Agri Supply Network
        </h3>
        <p className="text-sm text-slate-500 mt-2">
          A highly coordinated, zero-waste farm-to-buyer system connecting growers directly with enterprise partners.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {NODES.map((node) => {
          const IconComp = node.icon;
          return (
            <div
              key={node.id}
              className="bg-transparent border-b md:border-b-0 md:border-r border-slate-200 md:pr-8 last:border-0 last:pr-0 pb-8 md:pb-0 space-y-5"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-brand-primary/10 text-brand-primary rounded-2xl">
                  <IconComp className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-slate-400 font-bold uppercase tracking-wider block">
                    Step 0{node.stepNumber} • {node.category}
                  </span>
                  <h4 className="font-display font-bold text-slate-900 text-sm leading-tight">
                    {node.label}
                  </h4>
                  <span className="text-[10px] font-mono text-brand-secondary font-bold block mt-0.5">
                    {node.status}
                  </span>
                </div>
              </div>

              <p className="text-slate-650 text-xs leading-relaxed">
                {node.description}
              </p>

              <div className="pt-4 border-t border-slate-100 grid grid-cols-2 gap-2 text-[10px] font-mono leading-tight">
                <div>
                  <span className="text-slate-400 block uppercase font-bold mb-1">{node.metric1Label}:</span>
                  <span className="font-extrabold text-brand-primary text-xs block">{node.metric1Value}</span>
                </div>
                <div>
                  <span className="text-slate-400 block uppercase font-bold mb-1">{node.metric2Label}:</span>
                  <span className="font-bold text-slate-700 text-xs block">{node.metric2Value}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
