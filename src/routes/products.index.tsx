import { createFileRoute, Link } from '@tanstack/react-router';
import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { PageIntro, ContactBand } from '@/components/site/layout';
import { Button } from '@/components/ui/button';
import { applications, pageHead } from '@/lib/neelikon';

export const Route = createFileRoute('/products/')({ head: () => pageHead('Colour solutions', 'Explore Neelikon’s food colours, cosmetic pigments, pharmaceutical colours and specialty dyes.'), component: Products });
function Products() {
 const [filter,setFilter] = useState('all');
 const reduced = useReducedMotion();
 const items = applications.filter(item => filter === 'all' || item.id === filter);
 return <main><PageIntro eyebrow="COLOUR SOLUTIONS" title="Your application. Our expertise." description="Explore high-purity colour solutions crafted for the distinctive demands of your industry." /><div className="container"><div className="filter-bar" aria-label="Filter colour solutions"><Button variant={filter === 'all' ? 'brand' : 'outline'} onClick={() => setFilter('all')} aria-pressed={filter === 'all'}>All solutions</Button>{applications.map(item => <Button key={item.id} variant={filter === item.id ? 'brand' : 'outline'} onClick={() => setFilter(item.id)} aria-pressed={filter === item.id}>{item.name}</Button>)}</div><motion.div layout={!reduced} className="product-grid">{items.map(item => <motion.div key={item.id} layout={!reduced} initial={reduced ? false : { opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }}><Link to="/products/$category" params={{category:item.id}} className="application-card"><div className="application-image"><img src={item.image} alt={item.name} width={1024} height={1024} loading="lazy" /></div><div className="application-title"><h3>{item.name}</h3><span className="round-arrow"><ArrowUpRight size={17}/></span></div><p>{item.description}</p></Link></motion.div>)}</motion.div></div><ContactBand /></main>;
}