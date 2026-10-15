import { Link, useLocation } from '@tanstack/react-router';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, Menu, X, ArrowRight, Linkedin, Youtube, Mail, Phone, MapPin } from 'lucide-react';
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
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main-grid">
          <div className="footer-brand-col">
            <Brand />
            <p>One world. One quality.<br />A brighter future, together.</p>
            <div className="footer-socials">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="Neelikon LinkedIn">
                <Linkedin size={16} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="Neelikon YouTube">
                <Youtube size={16} />
              </a>
            </div>
          </div>
          <div className="footer-links-col">
            <h4>Explore</h4>
            <Link to="/about">About Us</Link>
            <Link to="/formulation">Formulation Lab</Link>
            <Link to="/infrastructure">Infrastructure</Link>
            <Link to="/quality">Quality & innovation</Link>
            <Link to="/products">Colour solutions</Link>
          </div>
          <div className="footer-links-col">
            <h4>Products</h4>
            <Link to="/products">Food Colours</Link>
            <Link to="/products">Pharmaceutical Colours</Link>
            <Link to="/products">Cosmetic Pigments</Link>
            <Link to="/products">Dyes & Lakes</Link>
            <Link to="/products">Fluorescent Dyes</Link>
            <Link to="/products">Custom Solutions</Link>
          </div>
          <div className="footer-links-col">
            <h4>Get in touch</h4>
            <a href="mailto:info@neelikon.com" className="footer-contact-row">
              <Mail size={14} /> <span>info@neelikon.com</span>
            </a>
            <a href="tel:+912246221415" className="footer-contact-row">
              <Phone size={14} /> <span>+91 22 4622 1415</span>
            </a>
            <p className="footer-contact-row">
              <MapPin size={14} /> <span>Mumbai, India - Worldwide reach</span>
            </p>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Neelikon Food Dyes & Chemicals Ltd.</span>
          <span>Made for a more colourful world.</span>
        </div>
      </div>
    </footer>
  );
}
export function ContactBand() {
  return <section className="contact-band"><div className="container" data-reveal><div><span className="eyebrow">LET’S CREATE SOMETHING EXTRAORDINARY</span><h2>Your next idea.<br />Our world of colour.</h2></div><Button variant="editorial" size="lg" asChild><Link to="/contact">Talk to our team <ArrowUpRight /></Link></Button></div></section>;
}
export function PageIntro({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return <section className="page-intro container"><Link to="/" className="back-link"><ArrowRight /> Back to home</Link><span className="eyebrow">{eyebrow}</span><h1>{title}</h1><p>{description}</p></section>;
}
