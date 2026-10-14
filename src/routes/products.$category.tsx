import { createFileRoute, Link, notFound } from '@tanstack/react-router';
import { Check, ArrowUpRight } from 'lucide-react';
import { PageIntro, ContactBand } from '@/components/site/layout';
import { Button } from '@/components/ui/button';
import { applications, pageHead } from '@/lib/neelikon';

export const Route = createFileRoute('/products/$category')({
 loader: ({ params }) => { const item = applications.find(a => a.id === params.category); if (!item) throw notFound(); return item; },
 head: ({ loaderData }) => pageHead(loaderData?.name ?? 'Colour solutions', loaderData?.description ?? 'Explore Neelikon’s high-purity colours.'),
 component: Product,
});
function Product() {
 const item = Route.useLoaderData();
 return <main><PageIntro eyebrow="COLOUR SOLUTIONS" title={item.name} description={item.description} /><section className="container product-detail"><img src={item.image} alt={item.name + ' colour application'} width={1024} height={1024} /><div><span className="eyebrow">{item.tag}</span><h2>Our colour portfolio</h2><ul>{item.products.map(product => <li key={product}><Check />{product}</li>)}</ul><h2>Made for your application</h2><p>{item.uses}.</p><p className="mt-5 mb-7">Speak to our team about product specifications, regulatory requirements and the right colour for your formulation.</p><Button variant="brand" size="lg" asChild><Link to="/contact">Enquire about these colours <ArrowUpRight /></Link></Button></div></section><ContactBand /></main>;
}