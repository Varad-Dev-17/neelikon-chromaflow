import { createFileRoute } from '@tanstack/react-router';
import { useState, type FormEvent } from 'react';
import { Mail, Phone, MapPin, ArrowUpRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PageIntro } from '@/components/site/layout';
import { pageHead, applications } from '@/lib/neelikon';

export const Route = createFileRoute('/contact')({ head: () => pageHead('Let’s talk colour', 'Contact Neelikon in Mumbai to discuss colour solutions, product specifications and global enquiries.'), component: Contact });
function Contact() {
 const [draft,setDraft] = useState<string | null>(null);
 function prepare(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const subject = `Colour enquiry: ${data.get('industry')}`;
  const body = `Name: ${data.get('name')}\nEmail: ${data.get('email')}\nCompany: ${data.get('company')}\nIndustry: ${data.get('industry')}\n\n${data.get('message')}`;
  setDraft(`mailto:info@neelikon.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
 }
 return <main><PageIntro eyebrow="LET’S TALK COLOUR" title="Great possibilities begin with a conversation." description="Tell us what you have in mind. Our team can help you find the right colour solution for your application." /><div className="container contact-grid"><div className="contact-details"><h2>Connect with Neelikon</h2><div><Mail /><section><h3>General enquiries</h3><a href="mailto:info@neelikon.com">info@neelikon.com</a></section></div><div><Phone /><section><h3>Call our team</h3><a href="tel:+912246221415">+91 22 4622 1415</a><p>Export sales: <a href="tel:+912266626874">+91 22 6662 6874</a></p></section></div><div><MapPin /><section><h3>Head office</h3><p>D-08, Everest Building, 5th Floor,<br />Pt. Madan Mohan Malaviya Marg,<br />Tardeo Circle, Mumbai 400034,<br />Maharashtra, India.</p></section></div></div>{draft ? <div className="email-ready" role="status"><Check className="text-primary mb-4" /><h3>Your enquiry is ready.</h3><p>Open your email app to review and send your enquiry to info@neelikon.com. Nothing has been sent yet.</p><Button variant="brand" asChild><a href={draft}>Open email app <ArrowUpRight /></a></Button><Button variant="link" className="ml-3" onClick={() => setDraft(null)}>New enquiry</Button></div> : <form onSubmit={prepare} className="enquiry-form"><div className="field-row"><label>Your name<input name="name" autoComplete="name" required placeholder="Full name" /></label><label>Work email<input name="email" type="email" autoComplete="email" required placeholder="you@company.com" /></label></div><label>Company<input name="company" autoComplete="organization" required placeholder="Company name" /></label><label>Your industry<select name="industry" defaultValue="" required><option value="" disabled>Select an industry</option>{applications.map(item => <option key={item.id}>{item.name}</option>)}<option>Other enquiry</option></select></label><label>How can we help?<textarea name="message" required placeholder="Tell us about your application or colour requirements…" /></label><Button variant="brand" type="submit">Prepare email enquiry <ArrowUpRight /></Button><p className="form-note">Your enquiry will open in your email app for you to review and send.</p></form>}</div></main>;
}