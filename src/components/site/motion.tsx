import { useEffect, useRef } from 'react';
import { useLocation } from '@tanstack/react-router';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function SiteMotion() {
  const cursor = useRef<HTMLDivElement>(null);
  const { pathname } = useLocation();
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    gsap.registerPlugin(ScrollTrigger);
    const lenis = new Lenis({ duration: 1.1, smoothWheel: true, anchors: true });
    lenis.on('scroll', ScrollTrigger.update);
    const tick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    const move = (event: MouseEvent) => {
      if (!cursor.current) return;
      gsap.to(cursor.current, { x: event.clientX, y: event.clientY, duration: 0.25, ease: 'power3.out' });
      cursor.current.classList.add('visible');
      cursor.current.classList.toggle('interactive', Boolean((event.target as HTMLElement).closest('a, button, input, select, textarea')));
    };
    const leave = () => cursor.current?.classList.remove('visible');
    window.addEventListener('mousemove', move);
    document.addEventListener('mouseleave', leave);
    return () => { lenis.destroy(); gsap.ticker.remove(tick); window.removeEventListener('mousemove', move); document.removeEventListener('mouseleave', leave); };
  }, []);
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const context = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach(element => {
        gsap.fromTo(element, { y: 35, opacity: 0 }, { y: 0, opacity: 1, duration: 0.85, ease: 'power2.out', scrollTrigger: { trigger: element, start: 'top 94%', once: true } });
      });
      gsap.to('.hero-art', { yPercent: 8, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 1 } });
    });
    return () => context.revert();
  }, [pathname]);
  return <div ref={cursor} className="colour-cursor" aria-hidden="true"><span /></div>;
}
