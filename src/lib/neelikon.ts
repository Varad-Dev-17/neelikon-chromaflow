import food from '@/assets/food-colours.jpg';
import cosmetic from '@/assets/cosmetic-colours.jpg';
import pharma from '@/assets/pharma-colours.jpg';
import wave from '@/assets/colour-wave.jpg';

export const applications = [
  { id: 'food', name: 'Food & beverages', tag: 'A taste for vibrant possibilities', image: food, description: 'High-purity synthetic and natural colours for food and beverages, with consistent quality from batch to batch.', products: ['Synthetic food colours', 'Natural food colours', 'Aluminium lakes', 'FD&C certified colours'], uses: 'Beverages, confectionery, bakery, dairy and processed foods' },
  { id: 'cosmetics', name: 'Cosmetics & personal care', tag: 'Beautiful colour. Beautifully made.', image: cosmetic, description: 'A versatile palette of cosmetic pigments, dyes and lakes for expressive beauty and personal care formulations.', products: ['Cosmetic pigments', 'Surface-treated pigments', 'Pearlescent pigments', 'Ready-mix lip care pastes'], uses: 'Lip care, face makeup, eye makeup and personal care' },
  { id: 'pharma', name: 'Pharmaceuticals', tag: 'Precision in every shade', image: pharma, description: 'High-purity colour solutions for pharmaceutical applications, developed with quality and regulatory requirements in mind.', products: ['Water-soluble colours', 'Pharmaceutical lakes', 'Tablet-coating colours'], uses: 'Tablet coatings, capsules, syrups and ointments' },
  { id: 'specialty', name: 'Specialty & industrial', tag: 'Performance beyond the ordinary', image: wave, description: 'Specialty fluorescent and solvent dyes for distinctive industrial colour applications.', products: ['Fluorescent dyes', 'Solvent dyes', 'Inkjet ink colours'], uses: 'Daylight fluorescent pigments, inks and stationery' },
];
export const certifications = ['ISO 9001:2015', 'FSSC 22000', 'GMP', 'Halal', 'Kosher', 'NABL'];
export function pageHead(title: string, description: string) {
  return { meta: [{ title: `${title} | Neelikon` }, { name: 'description', content: description }, { property: 'og:title', content: `${title} | Neelikon` }, { property: 'og:description', content: description }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' }] };
}
