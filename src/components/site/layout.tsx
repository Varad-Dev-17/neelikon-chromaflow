import { Link, useLocation } from '@tanstack/react-router';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, Menu, X, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Brand() {
  return <Link to="/" className="brand" aria-label="Neelikon home"><span className="brand-mark"><i /><i /><i /><i /></span><span>neelikon<span className="brand-tag">A WORLD OF COLOUR</span></span></Link>;
}
const navigation = [
  { to: '/about', label: 'About Us' },
  { to: '/formulation', label: 'Formulation' },
  { to: '/infrastructure', label: 'Infrastructure' },
  { to: '/quality', label: 'Quality & innovation' },
  { to: '/products', label: 'Colour solutions' },
] as const;
export function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const reduced = useReducedMotion();
  useEffect(() => { setOpen(false); }, [location.pathname]);
  return <header className="site-header"><div className="container header-inner"><Brand /><nav className="desktop-nav" aria-label="Main navigation">{navigation.map(item => <Link key={item.to} to={item.to} activeProps={{ className: 'active' }}>{item.label}</Link>)}</nav><Button variant="brand" className="header-contact" asChild><Link to="/contact">Contact Us <ArrowUpRight /></Link></Button><Button variant="nav" size="icon" className="mobile-toggle" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</Button></div><AnimatePresence>{open && <motion.nav className="mobile-nav" initial={{ opacity: 0, height: reduced ? 'auto' : 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: reduced ? 'auto' : 0 }} aria-label="Mobile navigation">{navigation.map(item => <Link key={item.to} to={item.to}>{item.label}<ArrowUpRight /></Link>)}<Link to="/contact">Contact Us<ArrowUpRight /></Link></motion.nav>}</AnimatePresence></header>;
}
export function Footer() {
  return <footer className="site-footer"><div className="container"><div className="footer-main"><div><Brand /><p>One world. One quality.<br />A brighter future, together.</p></div><div className="footer-links"><span>EXPLORE</span><Link to="/about">About Us</Link><Link to="/formulation">Formulation Lab</Link><Link to="/infrastructure">Infrastructure</Link><Link to="/quality">Quality & innovation</Link><Link to="/products">Colour solutions</Link></div><div className="footer-links"><span>GET IN TOUCH</span><a href="mailto:info@neelikon.com">info@neelikon.com <ArrowUpRight size={14} /></a><a href="tel:+912246221415">+91 22 4622 1415</a><p>Mumbai, India · Worldwide reach</p></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Neelikon Food Dyes & Chemicals Ltd.</span><span>Made for a more colourful world.</span></div></div></footer>;
}
export function ContactBand() {
  return <section className="contact-band"><div className="container" data-reveal><div><span className="eyebrow">LET’S CREATE SOMETHING EXTRAORDINARY</span><h2>Your next idea.<br />Our world of colour.</h2></div><Button variant="editorial" size="lg" asChild><Link to="/contact">Talk to our team <ArrowUpRight /></Link></Button></div></section>;
}
export function PageIntro({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return <section className="page-intro container"><Link to="/" className="back-link"><ArrowRight /> Back to home</Link><span className="eyebrow">{eyebrow}</span><h1>{title}</h1><p>{description}</p></section>;
}
