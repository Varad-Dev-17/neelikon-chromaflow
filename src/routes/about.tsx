import { createFileRoute } from '@tanstack/react-router';
import { PageIntro, ContactBand } from '@/components/site/layout';
import { pageHead } from '@/lib/neelikon';
import wave from '@/assets/colour-wave.jpg';

export const Route = createFileRoute('/about')({ head: () => pageHead('Our company', 'Discover Neelikon: a global manufacturer of high-purity dyes, lakes and pigments, with a colour legacy beginning in 1983.'), component: About });
function About() {
 return <main><PageIntro eyebrow="OUR COMPANY" title="A passion for colour. A legacy of trust." description="We bring scientific expertise and a world of colour together to help our customers create with confidence." /><div className="container"><img src={wave} width={1920} height={1024} className="about-cover" alt="Neelikon’s spectrum of vibrant colour pigments" /><div className="story-grid" data-reveal><h2>Rooted in India.<br />Connected to the world.</h2><div><p>Founded by Mr. Mukund Turakhia in 1983, Neelikon has grown into a global manufacturer and exporter of high-purity colourants for food, pharmaceuticals, cosmetics and industrial applications.</p><p>Our portfolio encompasses synthetic and natural colours, dyes, lakes, cosmetic pigments and specialty fluorescent dyes. We serve customers in more than 100 countries, supported by a commitment to research, consistency and international quality standards.</p><p>“One World One Quality” is our guiding philosophy: the same care, precision and commitment, wherever our colours are used.</p></div></div></div><ContactBand /></main>;
}