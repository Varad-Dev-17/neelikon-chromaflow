import food from '@/assets/food-colours.jpg';
import cosmetic from '@/assets/cosmetic-colours.jpg';
import pharma from '@/assets/pharma-colours.jpg';
import wave from '@/assets/colour-wave.jpg';
import formulationStudy from '@/assets/formulation-study.jpg';

export const applications = [
  { id: 'food', name: 'Food & beverages', tag: 'A taste for vibrant possibilities', image: food, description: 'High-purity synthetic and natural colours for food and beverages, with consistent quality from batch to batch.', products: ['Synthetic food colours', 'Natural food colours', 'Aluminium lakes', 'FD&C certified colours'], uses: 'Beverages, confectionery, bakery, dairy and processed foods' },
  { id: 'cosmetics', name: 'Cosmetics & personal care', tag: 'Beautiful colour. Beautifully made.', image: cosmetic, description: 'A versatile palette of cosmetic pigments, dyes and lakes for expressive beauty and personal care formulations.', products: ['Cosmetic pigments', 'Surface-treated pigments', 'Pearlescent pigments', 'Ready-mix lip care pastes'], uses: 'Lip care, face makeup, eye makeup and personal care' },
  { id: 'pharma', name: 'Pharmaceuticals', tag: 'Precision in every shade', image: pharma, description: 'High-purity colour solutions for pharmaceutical applications, developed with quality and regulatory requirements in mind.', products: ['Water-soluble colours', 'Pharmaceutical lakes', 'Tablet-coating colours'], uses: 'Tablet coatings, capsules, syrups and ointments' },
  { id: 'specialty', name: 'Specialty & industrial', tag: 'Performance beyond the ordinary', image: wave, description: 'Specialty fluorescent and solvent dyes for distinctive industrial colour applications.', products: ['Fluorescent dyes', 'Solvent dyes', 'Inkjet ink colours'], uses: 'Daylight fluorescent pigments, inks and stationery' },
];

export const certifications = ['ISO 9001:2015', 'FSSC 22000', 'GMP', 'Halal', 'Kosher', 'NABL'];

export const formulationCategories = [
  'All Formulations',
  'Lip Care',
  'Eye Care',
  'Face Care',
  'Body Care',
  'Hair Care',
] as const;

export type FormulationCategory = typeof formulationCategories[number];

export interface FormulationItem {
  id: string;
  name: string;
  category: Exclude<FormulationCategory, 'All Formulations'>;
  image: string;
  tagline: string;
  keyPigments: string;
  texture: string;
  benefits: string[];
  code: string;
}

export const formulations: FormulationItem[] = [
  {
    id: 'tinted-face-fluid',
    name: 'Tinted Face Fluid',
    category: 'Face Care',
    image: formulationStudy,
    tagline: 'Weightless skin-perfecting fluid with sheer breathable coverage',
    keyPigments: 'Lavanya Iron Oxides (Red, Yellow, Black) & Titanium Dioxide',
    texture: 'Lightweight fluid emulsion, radiant satin finish',
    benefits: ['Non-comedogenic mineral blend', 'High dispersibility in aqueous bases', 'Uniform shade matching across skintones'],
    code: 'FORM-FC-01',
  },
  {
    id: 'body-scrub',
    name: 'Body Scrub',
    category: 'Body Care',
    image: food,
    tagline: 'Vibrant crystal body polish with encapsulated colour spheres',
    keyPigments: 'Neelicol D&C Violet 2 & FD&C Blue 1 Lake',
    texture: 'Exfoliating botanical sugar-gel matrix',
    benefits: ['Non-staining cosmetic lake particles', 'Clean rinse-off profile', 'Stable in surfactant & oil systems'],
    code: 'FORM-BC-02',
  },
  {
    id: 'lumi-cream',
    name: 'Lumi Cream',
    category: 'Face Care',
    image: cosmetic,
    tagline: 'Multi-dimensional strobing highlighting cream for glass-skin radiance',
    keyPigments: 'Lavanya Pearlescent Gold, Rose & Bronze Pearls',
    texture: 'Velvet whipped mousse with ultra-fine shimmer',
    benefits: ['3D light-scattering interference pearls', 'Silky residue-free absorption', 'Dermatologically evaluated'],
    code: 'FORM-FC-03',
  },
  {
    id: 'silk-matte-lipstick',
    name: 'Silk Matte Lipstick',
    category: 'Lip Care',
    image: cosmetic,
    tagline: 'Full-coverage non-drying velvet matte lipstick with rich pigment load',
    keyPigments: 'D&C Red 7 Calcium Lake, D&C Red 6 Barium Lake & Yellow 5',
    texture: 'Cushion-glide solid matte stick',
    benefits: ['Intense 1-swipe color payoff', 'High wax-oil compatibility', 'Tested under global cosmetic regulations'],
    code: 'FORM-LC-04',
  },
  {
    id: 'hair-conditioner',
    name: 'Hair Conditioner',
    category: 'Hair Care',
    image: wave,
    tagline: 'Gloss-enhancing rinse-out mask with tone-correcting undertones',
    keyPigments: 'Neelikon Acid Violet 43 & Cosmetic D&C Dyes',
    texture: 'Rich conditioning cream emulsion',
    benefits: ['Neutralizes brassiness in color-treated hair', 'Cationic quaternary compatibility', 'Even dye deposition'],
    code: 'FORM-HC-05',
  },
  {
    id: 'face-scrub',
    name: 'Face Scrub',
    category: 'Face Care',
    image: pharma,
    tagline: 'Clarifying micro-exfoliant with soothing mineral pigment beads',
    keyPigments: 'Chromium Oxide Green & FD&C Yellow 5 Aluminium Lake',
    texture: 'Hydrating micro-bead cream paste',
    benefits: ['Ultra-pure insoluble lake colours', 'Gentle non-abrasive carrier beads', 'Antioxidant compatibility'],
    code: 'FORM-FC-06',
  },
  {
    id: 'velvet-eye-shadow',
    name: 'Velvet Eye Shadow',
    category: 'Eye Care',
    image: wave,
    tagline: 'Crease-free pressed pigment shadow with ultra-micronized shimmer',
    keyPigments: 'Ultramarine Blue, Ferric Ferrocyanide & Pearl Mica',
    texture: 'Silky pressed powder with high blendability',
    benefits: ['Eye-area approved purity grade', 'Low binder requirement', 'Longwear crease-resistant bond'],
    code: 'FORM-EC-07',
  },
  {
    id: 'hydrating-lip-tint',
    name: 'Hydrating Lip Tint',
    category: 'Lip Care',
    image: formulationStudy,
    tagline: 'Juicy balm-oil hybrid depositing buildable luminous tint',
    keyPigments: 'D&C Red 27 (pH adaptive), FD&C Yellow 6 & Red 33',
    texture: 'Non-sticky glazed jelly-oil',
    benefits: ['Smart pH stain activation', 'Prolonged hydration cushion', 'High-purity food & cosmetic certified dyes'],
    code: 'FORM-LC-08',
  },
];

export interface InfrastructureSubsection {
  id: string;
  name: string;
  eyebrow: string;
  title: string;
  description: string;
  stats: { value: string; label: string }[];
  highlights: string[];
  images: { src: string; caption: string }[];
}

export const infrastructureSubsections: InfrastructureSubsection[] = [
  {
    id: 'laboratory',
    name: 'Laboratory',
    eyebrow: 'ANALYTICAL PRECISION',
    title: 'NABL Accredited Testing & Research Laboratories',
    description: 'Equipped with High Performance Liquid Chromatography (HPLC), GC-MS, UV-Vis Spectrophotometers, ICP-MS trace elemental detection, and microbial testing cleanrooms ensuring zero-defect batch certification under ISO/IEC 17025.',
    stats: [
      { value: 'ISO 17025', label: 'NABL Accredited' },
      { value: '100%', label: 'Batch Traceability' },
      { value: 'ICP-MS', label: 'Trace Metals Testing' },
    ],
    highlights: [
      'Comprehensive testing for US FDA, EU, JECFA and Indian BIS standards',
      'High-resolution HPLC analysis for pure dye content and intermediate limits',
      'Dedicated microbiological testing suite with HEPA laminar air flow',
      'Advanced spectrophotometric automated color matching',
    ],
    images: [
      { src: pharma, caption: 'Analytical HPLC & Spectrophotometry suite' },
      { src: formulationStudy, caption: 'Colorimetric formulation matching bench' },
      { src: cosmetic, caption: 'Purity validation & raw material quarantine' },
      { src: food, caption: 'ISO/IEC 17025 accredited quality testing' },
    ],
  },
  {
    id: 'manufacturing-plant',
    name: 'Manufacturing Plant',
    eyebrow: 'LARGE-SCALE CAPACITY',
    title: 'Multi-Hectare Synthesis & Crystallization Plants',
    description: 'State-of-the-art production complexes situated in Roha (Maharashtra) and Dahej (Gujarat). Featuring glass-lined and SS-316 synthesis reactors, closed-circuit crystallization, automated continuous filter presses, and fluid bed dryers.',
    stats: [
      { value: '2 Plants', label: 'Roha & Dahej Hubs' },
      { value: 'Multi-000 MT', label: 'Annual Capacity' },
      { value: 'SS-316 / GLR', label: 'High-Purity Reactors' },
    ],
    highlights: [
      'Dedicated reaction vessels preventing cross-contamination',
      'Closed-loop crystallization and micronization facilities',
      'Continuous spin-flash dryers and vacuum filtration units',
      'Automated DCS process monitoring for batch-to-batch consistency',
    ],
    images: [
      { src: wave, caption: 'Synthesis reactor hall & processing columns' },
      { src: food, caption: 'Automated filter press & washing units' },
      { src: pharma, caption: 'Controlled crystallization & purification bay' },
      { src: cosmetic, caption: 'Roha & Dahej multi-hectare production complexes' },
    ],
  },
  {
    id: 'ehs',
    name: 'Environment Health and Safety',
    eyebrow: 'ZERO-HARM COMMITMENT',
    title: 'Certified Safety Culture & Occupational Wellbeing',
    description: 'Adhering to ISO 14001 (Environmental Management) and ISO 45001 (Occupational Health & Safety). Featuring round-the-clock on-site medical center, automated gas detectors, deluge fire suppression systems, and strict PPE protocols.',
    stats: [
      { value: 'ISO 14001', label: 'Environmental Std.' },
      { value: 'ISO 45001', label: 'Health & Safety' },
      { value: '24/7', label: 'On-site Medical Clinic' },
    ],
    highlights: [
      'Automated plant-wide fire hydrant and deluge sprinkler networks',
      'Mandatory certified PPE and continuous worker training programs',
      'Full-time industrial health clinic with emergency care capability',
      'Proactive hazard identification and risk mitigation protocols',
    ],
    images: [
      { src: pharma, caption: 'On-site occupational health & wellness clinic' },
      { src: cosmetic, caption: 'Industrial safety gear & certified worker PPE' },
      { src: wave, caption: 'Plant deluge fire-protection & emergency networks' },
      { src: food, caption: 'Continuous safety audit & emergency drill systems' },
    ],
  },
  {
    id: 'warehouse',
    name: 'Warehouse & Logistics',
    eyebrow: 'GLOBAL SUPPLY CHAIN',
    title: 'Smart Automated Warehousing & Export Hubs',
    description: 'High-bay palletized storage systems with computerized inventory management. Temperature and humidity-regulated storage zones safeguard sensitive cosmetic lakes and pharmaceutical grades before dispatch to 100+ countries.',
    stats: [
      { value: '100+', label: 'Countries Exported' },
      { value: 'Climate Regulated', label: 'Sensitive Pigment Storage' },
      { value: 'Barcode', label: 'Real-time Inventory Tracking' },
    ],
    highlights: [
      'Segregated raw material, quarantine, and finished goods zones',
      'Climate and humidity-controlled storage for moisture-sensitive lakes',
      'Computerized batch tracking with barcode dispatch verification',
      'UN-certified packaging for safe global sea and air transit',
    ],
    images: [
      { src: cosmetic, caption: 'High-bay palletized warehousing & automated aisles' },
      { src: food, caption: 'Climate-controlled cosmetic pigment vault' },
      { src: pharma, caption: 'Segregated quarantine & sampling inspection bay' },
      { src: wave, caption: 'Global export packaging & dispatch dock' },
    ],
  },
  {
    id: 'waste-water-treatment',
    name: 'Waste Water Treatment',
    eyebrow: 'SUSTAINABILITY & WATER STEWARDSHIP',
    title: 'Zero Liquid Discharge (ZLD) & Ecological Harmony',
    description: 'Advanced multi-stage biological Effluent Treatment Plant (ETP), membrane bioreactors (MBR), multi-effect evaporators (MEE), and reverse osmosis (RO) systems recycling up to 90% of process water for green sustainability.',
    stats: [
      { value: 'ZLD', label: 'Zero Liquid Discharge' },
      { value: '90%', label: 'Water Recycled & Reused' },
      { value: 'RO + MEE', label: 'Multi-stage Purification' },
    ],
    highlights: [
      'Multi-stage biological aeration and chemical precipitation',
      'Ultra-filtration and Reverse Osmosis (RO) permeation units',
      'Multi-Effect Evaporators (MEE) converting effluent into clean recycled water',
      '100% compliant with MPCB and GPCB environmental directives',
    ],
    images: [
      { src: wave, caption: 'Biological aeration & primary clarifier basins' },
      { src: pharma, caption: 'Multi-stage RO & ultra-filtration facility' },
      { src: food, caption: 'Zero Liquid Discharge multi-effect evaporators' },
      { src: formulationStudy, caption: 'In-house environmental testing & analysis lab' },
    ],
  },
];

export function pageHead(title: string, description: string) {
  return { meta: [{ title: `${title} | Neelikon` }, { name: 'description', content: description }, { property: 'og:title', content: `${title} | Neelikon` }, { property: 'og:description', content: description }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' }] };
}
