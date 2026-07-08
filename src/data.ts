import { TeamMember, JobOpening, BlogPost, TestimonialItem, AwardItem, GalleryItem } from './types';

export const CORE_STATS = [
  { label: 'Dealers', value: '10,000', suffix: '+', description: '' },
  { label: 'Farmers', value: '1 Million', suffix: '+', description: '' },
  { label: 'Sellers', value: '10', suffix: '+', description: '' },
  { label: 'Products', value: '300', suffix: '+', description: '' }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: '1',
    name: 'Dr. Idris Bohra',
    role: 'Founding Promoter',
    bio: 'From an established business family in Madhya Pradesh dealing in pesticides, seeds, and fertilizers. Holds a Post-Graduate degree in Economics from Indore University. Identified advanced water-soluble fertilizers in UAE, launched a line under private label, and built an in-house FCO/CIB-compliant R&D facility in India under the Katra brand with 100+ registered agrochemicals. Launched Kisan4U as a digital-first platform combining technology with agriculture to enable small farmers, regional dealers, and growing manufacturers.',
    image: '/idris.jpeg',
    linkedin: '#'
  },
  {
    id: '2',
    name: 'Jayant Bhokare',
    role: 'Chief Executive Officer',
    bio: 'Seasoned business leader with over 30 years of experience in general management, revenue growth, and corporate development across media, sports, retail, and technology. Famous for launching India’s first private FM station, managing national brands at TATA, Times Group, Disney Star, and Reliance ADAG, and scaling startups globally across US, Europe, and India. Former Baroda cricketer who blends entrepreneurial agility with corporate discipline.',
    image: '/jayant.png',
    linkedin: '#'
  },
  {
    id: '3',
    name: 'Burhanuddin Bohra',
    role: 'Technology & Product Strategy Lead',
    bio: 'Burhanuddin Bohra is a technology-driven business leader at Kisan4U, bringing together a strong foundation in Cybersecurity, Data Science, Business Analytics, and MBA-level business management from Virginia Tech and NMIMS. After completing his education and joining the business full-time, he is focused on building Kisan4U’s next phase of digital growth through better systems, scalable technology, and data-led decision making. His research experience at Virginia Tech involved advanced AI, OCR, NLP, LLM-based metadata tagging, PyTorch, and Hugging Face Transformers, where he worked on large-scale digital library and historical map discovery projects. This mix of business education, technical research, and practical company involvement helps him guide Kisan4U toward a smarter, more efficient, and future-ready agri-commerce platform.',
    image: '/burhanuddin.png',
    linkedin: '#'
  },
  {
    id: '4',
    name: 'Ramanand Gujar',
    role: 'Operations Manager',
    bio: 'Highly competent operations specialist with extensive experience in direct-to-farm supply chain aggregation, inventory planning, and managing logistics pipelines. Leads physical operations, customer support corridors, and regional warehouse dispatch corridors at Kisan4U to ensure that high-quality inputs reach agricultural dealers and growers exactly when they are needed.',
    image: '/ramanand.jpeg',
    linkedin: '#'
  }
];

export const ADVISOR_MEMBERS: TeamMember[] = [
  {
    id: 'adv-1',
    name: 'Mr. Rajesh Tiwari',
    role: 'Chairman - Advisory Board',
    bio: 'Distinguished leader with 40+ years in management, mentorship, and building billion-dollar companies. Deep experience in government workings with elite service positions in ministries and PSUs. Rewarded with milestone business growth at Reliance Industries under Dhirubhai Ambani. Co-founder and first Joint Managing Director of Tikona Digital Networks, leading its expansion with Goldman Sachs and Oak Investment.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400',
    linkedin: '#',
    isAdvisor: true
  }
];

export const JOB_OPENINGS: JobOpening[] = [
  {
    id: 'job-1',
    title: 'Lead Agronomist & Agri-AI Scientist',
    department: 'Agronomy Research',
    location: 'Bengaluru / Pune (Hybrid)',
    type: 'Full-Time',
    description: 'We are seeking an outstanding agronomy expert to build deep-learning predictive models for crop stress detection, nutrient deficiencies, and customized smart advisory reports.',
    requirements: [
      'M.Sc or Ph.D. in Agronomy, Plant Pathology, or Soil Science with strong quantitative modeling skills',
      'Familiarity with Remote Sensing data, satellite image parsing (Sentinel-2, Landsat), and crop health indexes',
      'Comfort interfacing directly with progressive farming communities and translating results into regional guidance'
    ]
  },
  {
    id: 'job-2',
    title: 'Senior React / Native Frontend Developer',
    department: 'Engineering',
    location: 'Bengaluru, India',
    type: 'Full-Time',
    description: 'Build robust, highly responsive web-portals and offline-capable hybrid applications. You will translate geographic maps, drone dashboards, and marketplace analytics into seamless user experiences.',
    requirements: [
      '4+ years expert experience with React, TypeScript, Tailwind CSS, and state sync models',
      'Knowledge or appreciation of offline data caching, Service Workers, and optimizing bundle sizes for Low-bandwidth regions',
      'Experience with Leaflet, Mapbox, or Google Maps integrations'
    ]
  },
  {
    id: 'job-3',
    title: 'Territory Supply Chain Manager',
    department: 'Operations',
    location: 'Indore, MP (On-Field)',
    type: 'On-Field / Full-Time',
    description: 'Lead warehouse aggregation hubs, regional grade sorting, quality assurance processes, and coordinate with logistics providers for rapid bulk farm pickups.',
    requirements: [
      'Degree in Logistics, Business Administration, or Agri-Business Management',
      'Proven record managing local farmer aggregation centres, cold chain operations, or FPO procurement lines',
      'Native fluency in regional languages with robust team-leadership capability'
    ]
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'blog-1',
    title: 'How to Choose the Right Agri-Input for Your Crop Problem',
    excerpt: 'A systematic, action-backed decision framework for Indian farmers to isolate nutrient deficiencies, balance pesticide dosage, and select optimal certified crop inputs safely.',
    content: `Choosing the correct agricultural input is the first critical step to solving field issues. Many farmers face crop problems due to mistaken diagnoses, such as spraying chemical insecticides for fungal blights, or using nitrogen-heavy salts for iron deficiencies.

    To select the right input, follow this four-step diagnostic protocol:
    
    1. Identify Leaf Indicators: Look carefully at plant margins. Yellowing of outer old leaf edges indicates potassium or magnesium deficiency. Sucking pests like thrips and whiteflies cause dynamic curling of fresh young leaves. Distinct brown or white patches with velvety rings suggest fungal infections.
    
    2. Calibrate Soil Parameters First: Do not purchase fertilizer without analyzing soil pH and active Soil Organic Carbon (SOC) levels. If soil is highly alkaline (pH > 8.0), micronutrients like Iron and Zinc get locked in the soil and cannot be absorbed by root structures. Applying costly fertilizers in this state is entirely wasted.
    
    3. Choose Active Ingredients over Brand Names: Always study the chemical and botanical names. Instead of depending on commercial product wrappers, verify the active composition (e.g., specific N-P-K ratios or specific bacteria strains) and compare prices across certified brands.
    
    4. Buy Exclusively from Verified Dealers: Avoid spurious uncertified supplies from unregulated channels. Look for QR-marked batch indicators, transparent pricing tags, and official company approvals before finalizing any input order on the Kisan4U ecosystem.`,
    category: 'Crop Discovery',
    date: 'June 08, 2026',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80&w=800',
    author: { name: 'Dr. Ananya Murthy', role: 'Chief Scientific Officer' }
  },
  {
    id: 'blog-2',
    title: 'Difference Between Fertilizers, Bio-Fertilizers, Pesticides, and Bio-Pesticides',
    excerpt: 'Demystifying agricultural chemical inputs: Understanding synthetic versus organic nutrient boosters and protective agents for healthy crop growth.',
    content: `Understanding chemical classifications determines input efficiency, food safety, and overall soil preservation. Here is the operational breakdown:

    1. Synthetic Fertilizers: These are inorganic salt-based nutrients like Urea, Di-Ammonium Phosphate (DAP), and Muriate of Potash (MOP). They release nitrogen, phosphorus, and potassium rapidly into the root zone, supporting swift vegetative growth. However, over-application degrades soil sponge metrics, reduces natural carbon elements, and triggers heavy chemical runoff in local biological streams.
    
    2. Bio-Fertilizers: These are live microbial cultures (such as Rhizobium, Azotobacter, and Mycorrhizae). Unlike chemicals, they do not feed the plant directly; instead, they establish symbiotic cultures, fixing atmospheric nitrogen, solubilizing stubborn phosphorus compounds, and restoring soil biology safely.
    
    3. Chemical Pesticides: Synthetic formulations designed to control insects, diseases, or aggressive weeds. While highly effective at halting sudden infestations, they require strict dosage limits and safe dilution tables to prevent residue load on crops and accidental toxicity to beneficial insects.
    
    4. Bio-Pesticides: Biological agents derived from natural materials, microbes, or botanical extracts (e.g., Trichoderma viride, Bacillus thuringiensis, or cold-pressed Neem oil). They target specific pathogens and pests without leaving toxic residues, making them perfect for premium export certifications.`,
    category: 'Agronomy Basics',
    date: 'May 24, 2026',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1589244159943-460088ed5c92?auto=format&fit=crop&q=80&w=800',
    author: { name: 'Dr. Ananya Murthy', role: 'Chief Scientific Officer' }
  },
  {
    id: 'blog-3',
    title: 'Why Soil Health Is the Foundation of Better Crop Yield',
    excerpt: 'Uncover why physical aeration, biological soil organic carbon (SOC) levels, and balanced pH are crucial for crop root uptake and overall pest resilience.',
    content: `A crop is only as good as the soil that sustains it. Soil health dictates water uptake, disease defense capacity, and overall input conversion efficiency.
    
    Key parameters of high-performance soils:
    
    - Soil Organic Carbon (SOC) Levels: Organic carbon is the vital food for soil microbiomes. For efficient growth, agricultural soil should consistently maintain organic carbon levels above 0.8%. High carbon fuels millions of helpful bacteria, converting dry minerals into easily absorbable nutrients.
    
    - Physical Sponge Structures: Well-aerated soil has spacious capillary pathways, allowing moisture to drain safely and roots to obtain oxygen. Heavy tractors and continuous mechanical tilling collapse these pathways, compacting the soil and suffocating target roots.
    
    - Balanced Micro-Nutrients: Healthy farming requires more than just NPK. Trace elements like Boron (for flower setting), Zinc (for growth enzymes), and Iron (for photosynthesis) are crucial. Correcting macro-micro ratios prevents premature plant stress, ensuring maximum seasonal yield and first-rate crop grading.`,
    category: 'Regenerative Agriculture',
    date: 'May 12, 2026',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80&w=800',
    author: { name: 'Dr. Ananya Murthy', role: 'Chief Scientific Officer' }
  },
  {
    id: 'blog-4',
    title: 'Common Mistakes Farmers Make While Selecting Crop Protection Products',
    excerpt: 'Identify and avoid the top four structural selection errors, such as incorrect dosage mixing, mistaking fungal blights for insect attacks, and buying grey-market uncertified products.',
    content: `Even premium inputs fail if selected or applied incorrectly. We have audited chemical usage across 12,000 villages, identifying four pervasive application errors that harm harvests:
    
    1. Treating Symptoms without Diagnosis: Many farmers spray broad insecticides on curling leaves, only to find the problem is a soil-borne nematode attack. This leaves the pathogen active while spraying useless chemicals into the air.
    
    2. Over-mixing Chemicals: Mixing three or four different chemicals (pesticides, fungicides, and micro-nutrients) in a single bucket to save spray labor often ruins product stability. Unregulated mixes trigger leaf burns, drop flower structures, and form inactive thick precipitates inside the tank.
    
    3. Disregarding Weather & Timing: Spraying in dry, scorching afternoon heat means much of the mist evaporates before contact, causing immediate spray loss and dangerous skin exposure. The ideal hours are cool, early morning or late after-hours.
    
    4. Sourcing from Grey Channels: Buying unlabelled chemical bottles to save minor costs exposes farms to substandard, diluted ingredients. This leaves crops fully vulnerable, leading to major seasonal yield losses. Always buy certified, batch-tracked products with verifiable pricing.`,
    category: 'Best Practices',
    date: 'April 28, 2026',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1599599810769-bcde5a160d32?auto=format&fit=crop&q=80&w=800',
    author: { name: 'Radhika Deshmukh', role: 'Head of Operations' }
  },
  {
    id: 'blog-5',
    title: 'How Weather Changes Affect Pest and Disease Attacks in Crops',
    excerpt: 'Examine the direct correlations between unseasonable humidity spikes, extreme high winds, temperature anomalies, and sudden infestations.',
    content: `Climate variables drive insect nesting habits and micro-fungal breeding cycles. A shift in relative humidity or night temperature can create an immediate, widespread pest infestation.
    
    How weather affects crop vulnerability:
    
    - Warm Winters and Pest Survival: Cold winters normally suppress hibernating insect stages. Warm winters allow larvae and cocoons to survive, leading to large, early-season pest explosions that damage young crop shoots.
    
    - Humidity Spikes and Fungal Spores: Warm, muggy rainstorms increase relative humidity past 85%, which are ideal conditions for fungal blights like downy mildew. Fungal spores land on damp leaves, grow root structures, and colonize plant tissue within hours.
    
    - High Winds and Pest Migration: Powerful thermal currents and strong winds carry tiny, light insects (like thrips and aphids) over hundreds of kilometers overnight, introducing pests to previously clean districts.
    
    - Predictive Technology Solutions: By monitoring national weather feeds, satellite heat captures, and local moisture levels, Kisan4U Doctor predicts disease risks before they strike, sending early warnings to help farmers secure their harvests.`,
    category: 'Smart Farming',
    date: 'April 15, 2026',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1508962914676-134849a727f0?auto=format&fit=crop&q=80&w=800',
    author: { name: 'Radhika Deshmukh', role: 'Head of Operations' }
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'dealer-1',
    name: 'M/S Somnath Agro Centre',
    location: 'Kodinar, Gir Somnath, Gujarat',
    crop: 'Agri-Input Dealer Partner',
    quote: "Partnering with Kisan4U has been a very positive experience for our business. Products are consistently available on time, and the payment process is simple and transparent. Even when there are payment discrepancies, they are resolved promptly. Since we started working with Kisan4U, our sales have increased significantly. Their products, especially NPK fertilizers and pesticides, are in high demand among farmers due to their excellent performance. We also receive valuable crop-related guidance, which helps us serve our customers better. Product packaging can be improved further, and if credit facilities are introduced, we would be able to place even larger orders. Overall, we are highly satisfied with Kisan4U and its products.",
    rating: 5,
    category: 'dealer',
    image: 'https://images.unsplash.com/photo-1595246140625-573b715d11dc?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'dealer-2',
    name: 'Maa Fertilizer',
    location: 'Ranaghat, Nadia, West Bengal',
    crop: 'Agri-Input Dealer Retailer',
    quote: "The quality and performance of Kisan4U products are excellent. We receive complete product information and support whenever needed. Since partnering with Kisan4U, our sales have improved considerably. We are very satisfied with both the products and the service, and we look forward to continuing our business relationship with Kisan4U in the future.",
    rating: 5,
    category: 'dealer',
    image: 'https://images.unsplash.com/photo-1589923188900-85dae440342b?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'farmer-1',
    name: 'Sachin Ashok Kadam',
    location: 'Saygaon, Khed, Pune, Maharashtra',
    crop: 'Farmer (Applied Katra Fert Consortia)',
    quote: "I ordered Katra Fert Consortia (10 gm) from Kisan4U and achieved outstanding results in my crop. The plants became greener and healthier, and crop growth improved significantly. I am very happy with the product's performance and would strongly recommend Katra Fert Consortia to fellow farmers. Kisan4U has provided a reliable solution that has helped improve my farming outcomes.",
    rating: 5,
    category: 'farmer',
    image: 'https://images.unsplash.com/photo-1595246140625-573b715d11dc?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'farmer-2',
    name: 'MD Zulkar Alam',
    location: 'Krityanand Nagar, Purnia, Bihar',
    crop: 'Farmer (Applied Katra Itarich Mycorrhiza)',
    quote: "The results of Katra Itarich Mycorrhiza in my chilli crop have been truly remarkable. Within just 8–10 days of soil drenching, there was rapid root development in the plants. Stronger root systems allowed the plants to absorb nutrients and water more efficiently, resulting in healthier, greener plants. The chilli fruits developed better size, improved shine, and overall superior quality. I highly recommend Katra Itarich Mycorrhiza for chilli growers, especially when used through soil drenching. It has delivered excellent results on my farm.",
    rating: 5,
    category: 'farmer',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'seller-1',
    name: 'Hi-Field',
    location: 'Ahmedabad, Gujarat',
    crop: 'Agrochemical Seller Partner',
    quote: "Working with Kisan4U as a seller has been a great experience. Payments are always received on time, and the entire payment process is smooth and hassle-free. Order statuses are updated regularly, making it easy to track every order. Whenever we need assistance, the support team responds quickly and provides helpful solutions. The platform is simple to use, making product management and order processing very convenient. Overall, Kisan4U has become a reliable partner for growing our business.",
    rating: 5,
    category: 'seller',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'seller-2',
    name: 'Sarvin Agrochemical',
    location: 'Mumbai, Maharashtra',
    crop: 'Brand Seller & Supply Partner',
    quote: "Our experience with Kisan4U has been very positive. The platform makes it easy to manage orders, and payment settlements are always completed on time. The seller support team is responsive and always ready to help whenever needed. The website is easy to navigate and simplifies the entire selling process. We are happy to be associated with Kisan4U and look forward to continuing this partnership.",
    rating: 5,
    category: 'seller',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400'
  }
];

export const AWARDS: AwardItem[] = [
  {
    id: 'award-1',
    year: '2025',
    title: 'National Agri-Tech Innovation Champion',
    issuer: 'Ministry of Agriculture & Rural Development',
    description: 'Awarded for demonstrating phenomenal rural digital enablement and substantial greenhouse gas abatement via digital fertilizer optimization algorithms.'
  },
  {
    id: 'award-2',
    year: '2024',
    title: 'Top ESG Agri Impact Pioneer',
    issuer: 'Global Sustainable Growth Network',
    description: 'Recognized for contributing over 40 million liters in cumulative water conservation using smart soil moisture geolocators in drought-prone blocks.'
  },
  {
    id: 'award-3',
    year: '2023',
    title: 'Most Promising Startup Backed by AI',
    issuer: 'Google for Startups Accelerator Cohort VII',
    description: 'Selected for advanced spatial computer vision models detecting and categorizing plant pathogens directly from smart-phone uploads.'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Industrial Advisory Drone Lift-Off',
    category: 'Drone Shots',
    image: '/1.jpg.jpeg',
    description: 'Autonomous multi-spectral crop scan executing early morning survey over high-density commercial orchards.'
  },
  {
    id: 'gal-2',
    title: 'Interactive Soil Testing Workshop',
    category: 'Training Programs',
    image: '/2.jpg.jpeg',
    description: 'Kisan4U agronomy squads holding soil health testing metrics with local farming groups in rural Pune.'
  },
  {
    id: 'gal-3',
    title: 'Kisan4U Leadership Field Visit',
    category: 'Field Visits',
    image: '/3.jpg.jpeg',
    description: 'Co-creating pesticide scheduling metrics with cooperative organic farmers near Sangli.'
  },
  {
    id: 'gal-4',
    title: 'Farmer Training Seminar on Digital App',
    category: 'Farmer Events',
    image: '/4.jpg.jpeg',
    description: 'Onboarding session showcasing smart notifications, marketplace bids, and disease scans to 200+ local regional farmers.'
  },
  {
    id: 'gal-5',
    title: 'Drone Field Demonstration',
    category: 'Drone Shots',
    image: '/5.jpg.jpeg',
    description: 'Demonstrating drone-based ultra-low volume precision spraying techniques to rural cooperative leaders.'
  },
  {
    id: 'gal-6',
    title: 'Agronomists Calibrating IoT Devices',
    category: 'Training Programs',
    image: '/6.jpg.jpeg',
    description: 'Fine-tuning moisture georesolve metrics inside automated smart drip installations.'
  },
  {
    id: 'gal-7',
    title: 'Pathogen Analysis in Wardha',
    category: 'Field Visits',
    image: '/7.jpg.jpeg',
    description: 'Executing localized pathogen risk assessments for organic cotton growers.'
  },
  {
    id: 'gal-8',
    title: 'Precision Spraying Workshop',
    category: 'Training Programs',
    image: '/8.jpg.jpeg',
    description: 'Practical training on fertilizer optimization and eco-safe crop spray calibration.'
  },
  {
    id: 'gal-9',
    title: 'Paddy Field Nitrogen Mapping Run',
    category: 'Drone Shots',
    image: '/9.jpg.jpeg',
    description: 'Assessing canopy nitrogen levels across high-yield paddy blocks for targeted nutrient application.'
  },
  {
    id: 'gal-10',
    title: 'Interactive Wheat Health Diagnostic',
    category: 'Field Visits',
    image: '/10.jpg.jpeg',
    description: 'Sharing real-time rust disease diagnosis indicators with farmers on location.'
  },
  {
    id: 'gal-11',
    title: 'Gram Panchayat Smart Agri Seminar',
    category: 'Farmer Events',
    image: '/11.jpg.jpeg',
    description: 'Engaging village councils to build collaborative smart distribution centers.'
  },
  {
    id: 'gal-12',
    title: 'Sustainable Drip Maintenance',
    category: 'Training Programs',
    image: '/12.jpg.jpeg',
    description: 'Teaching long-term hardware preservation and filter flushing to dryland farmers.'
  },
  {
    id: 'gal-13',
    title: 'Automated Spraying Drone Fleet',
    category: 'Drone Shots',
    image: '/13.jpg.jpeg',
    description: 'Demonstrating drone safety procedures, battery lifecycles, and fleet scheduling.'
  },
  {
    id: 'gal-14',
    title: 'Sowing Success Tracking',
    category: 'Field Visits',
    image: '/14.jpg.jpeg',
    description: 'Validating seed germination rates and emergence counts for regional organic cooperatives.'
  },
  {
    id: 'gal-15',
    title: 'Harvest Festival & Recognition Day',
    category: 'Farmer Events',
    image: '/15.jpg.jpeg',
    description: 'Honoring top-performing regenerative agriculture practices with district certificates.'
  },
  {
    id: 'gal-16',
    title: 'Soil Carbon Sequestration Demo',
    category: 'Training Programs',
    image: '/16.jpg.jpeg',
    description: 'Explaining cover cropping and minimum tillage to enhance underground carbon stores.'
  },
  {
    id: 'gal-17',
    title: 'Thermal Imagery Diagnostic Run',
    category: 'Drone Shots',
    image: '/17.jpg.jpeg',
    description: 'Identifying early-stage water stress and irrigation blocks in sweet orange orchards.'
  },
  {
    id: 'gal-18',
    title: 'Post-Monsoon Moisture Profiling',
    category: 'Field Visits',
    image: '/18.jpg.jpeg',
    description: 'Measuring soil moisture depth to plan optimal winter chickpea sowing dates.'
  },
  {
    id: 'gal-19',
    title: 'Regional Grower and Dealer Summit',
    category: 'Farmer Events',
    image: '/19.jpg.jpeg',
    description: 'Strengthening supply chain ties between inputs providers and certified farming leaders.'
  },
  {
    id: 'gal-20',
    title: 'Advanced Pathogen Identification',
    category: 'Training Programs',
    image: '/20.jpg.jpeg',
    description: 'Training community agri-leads on using the Kisan4U app for multi-disease diagnosis.'
  },
  {
    id: 'gal-21',
    title: 'High-Altitude Watershed Mapping',
    category: 'Drone Shots',
    image: '/21.jpg.jpeg',
    description: 'Creating high-fidelity topological maps to trace surface runoff and design contour bunds.'
  },
  {
    id: 'gal-22',
    title: 'Pesticide Drift Analysis',
    category: 'Field Visits',
    image: '/22.jpg.jpeg',
    description: 'Calibrating nozzle pressure to ensure complete coverage while mitigating chemical drift.'
  },
  {
    id: 'gal-23',
    title: 'Community Seed Exchange Day',
    category: 'Farmer Events',
    image: '/23.jpg.jpeg',
    description: 'Encouraging bio-diversity and traditional millet sowing strategies under expert guidance.'
  },
  {
    id: 'gal-24',
    title: 'Regenerative Farming Techniques',
    category: 'Training Programs',
    image: '/24.jpg.jpeg',
    description: 'Hands-on practice in organic mulching and dynamic soil protection.'
  },
  {
    id: 'gal-25',
    title: 'Pre-Harvest Biomass Estimation',
    category: 'Drone Shots',
    image: '/25.jpg.jpeg',
    description: 'Scanning sorghum crops to predict yield margins and plan post-harvest logistics.'
  },
  {
    id: 'gal-26',
    title: 'Dryland Millet Field Assessment',
    category: 'Field Visits',
    image: '/26.jpg.jpeg',
    description: 'Assessing drought resilience parameters in newly planted finger-millet plots.'
  },
  {
    id: 'gal-27',
    title: 'Cooperative Marketing Roundtable',
    category: 'Farmer Events',
    image: '/27.jpg.jpeg',
    description: 'Assisting smallholders in combining forces to secure premium market pricing.'
  },
  {
    id: 'gal-28',
    title: 'Digital Payments & Ledger Book Basics',
    category: 'Training Programs',
    image: '/28.jpg.jpeg',
    description: 'Teaching digital bookkeeping and transactions management via mobile ledger.'
  },
  {
    id: 'gal-29',
    title: 'Topological Survey for Contour Bunds',
    category: 'Drone Shots',
    image: '/29.jpg.jpeg',
    description: 'Designing soil conservation plans on highly sloped and eroded terrains.'
  },
  {
    id: 'gal-30',
    title: 'Canopy Density Optimization Audits',
    category: 'Field Visits',
    image: '/30.jpg.jpeg',
    description: 'Advising growers on optimal plant spacing for maximum sunlight interception.'
  },
  {
    id: 'gal-31',
    title: 'Womens Cooperative Dairy Alliance',
    category: 'Farmer Events',
    image: '/31.jpg.jpeg',
    description: 'Enabling self-help groups to coordinate fodder logistics and veterinary alerts.'
  },
  {
    id: 'gal-32',
    title: 'Composting & Natural Bio-Stimulants',
    category: 'Training Programs',
    image: '/32.jpg.jpeg',
    description: 'Preparing organic compost tea and microbial inoculants for rapid soil recovery.'
  },
  {
    id: 'gal-33',
    title: 'Multi-Rotor Obstacle Avoidance Demo',
    category: 'Drone Shots',
    image: '/33.jpg.jpeg',
    description: 'Demonstrating autonomous lidar sensing in closely-spaced tree plantations.'
  },
  {
    id: 'gal-34',
    title: 'On-Site Salinity Remediation',
    category: 'Field Visits',
    image: '/34.jpg.jpeg',
    description: 'Recommending gypsum application schedules to restore salt-affected farmland.'
  },
  {
    id: 'gal-35',
    title: 'Sowing Calendar Interactive Event',
    category: 'Farmer Events',
    image: '/35.jpg.jpeg',
    description: 'Co-creating crop calendars based on historic regional rainfall patterns.'
  },
  {
    id: 'gal-36',
    title: 'Agri-tech Entrepreneurship Course',
    category: 'Training Programs',
    image: '/36.jpg.jpeg',
    description: 'Empowering rural youth with technical drone operations and agronomy training.'
  },
  {
    id: 'gal-37',
    title: 'Grower Success Verification',
    category: 'Field Visits',
    image: '/37.jpg.jpeg',
    description: 'Verifying premium yield quality benchmarks with certified local field officers.'
  }
];
