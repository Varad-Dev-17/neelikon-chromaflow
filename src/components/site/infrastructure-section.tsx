import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  FlaskConical,
  Factory,
  ShieldCheck,
  Warehouse,
  Droplets,
  ArrowUpRight,
  MapPin,
  CheckCircle,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { infrastructureSubsections, type InfrastructureSubsection } from '@/lib/neelikon';
import wave from '@/assets/colour-wave.jpg';

const subsectionIcons: Record<string, typeof Factory> = {
  laboratory: FlaskConical,
  'manufacturing-plant': Factory,
  ehs: ShieldCheck,
  warehouse: Warehouse,
  'waste-water-treatment': Droplets,
};

export function InfrastructureSection() {
  const [activeTab, setActiveTab] = useState<string>('all');
  const reduced = useReducedMotion();

  const displayedSubsections = activeTab === 'all'
    ? infrastructureSubsections
    : infrastructureSubsections.filter(s => s.id === activeTab);

  return (
    <section className="section infrastructure-section" id="infrastructure">
      <div className="container">
        {/* Banner with narrative from Reference Image 2 */}
        <div className="infrastructure-banner" data-reveal>
          <div className="infrastructure-banner-art">
            <img
              src={wave}
              alt="Neelikon chemical manufacturing complex"
              width={1920}
              height={700}
              loading="lazy"
            />
            <div className="infrastructure-banner-overlay" />
          </div>
          <div className="infrastructure-banner-content">
            <span className="eyebrow eyebrow-light">WORLD-CLASS INFRASTRUCTURE</span>
            <h1>Our Infrastructure</h1>
            <p className="banner-subhead">Know more about our capacities and capabilities</p>
          </div>
        </div>

        {/* Narrative Letter / Invitation matching Reference Image 2 */}
        <div className="infrastructure-intro-card" data-reveal>
          <div className="intro-grid">
            <div className="intro-main">
              <span className="eyebrow">THE BACKBONE OF QUALITY</span>
              <h2>Experience the backbone of Neelikon — our infrastructure.</h2>
              <div className="intro-body">
                <p>
                  At Neelikon, we believe that choosing a colour supplier goes beyond polished websites and canned social media feeds.
                </p>
                <p>
                  We warmly invite all our distributors & customers – current, new and prospective – to visit our manufacturing facilities & systems in <strong>Roha, Maharashtra</strong> and <strong>Dahej, Gujarat</strong> and see for themselves what makes Neelikon a trusted name worldwide.
                </p>
                <p>
                  Our doors are open, and while you’re here, enjoy the warmth of real Indian hospitality.
                </p>
                <div className="intro-signature">
                  <strong>Welcome to Neelikon.</strong>
                  <span>Managing Director & The Neelikon Technical Team</span>
                </div>
              </div>
            </div>

            <div className="intro-sidebar">
              <div className="location-box">
                <MapPin size={18} className="text-primary mb-2" />
                <h4>Manufacturing Complexes</h4>
                <ul>
                  <li><strong>Roha Facility:</strong> Raigad, Maharashtra, India</li>
                  <li><strong>Dahej Facility:</strong> Bharuch, Gujarat, India</li>
                  <li><strong>Head Office & Lab:</strong> Mumbai, Maharashtra, India</li>
                </ul>
              </div>

              <div className="invite-box">
                <h4>Schedule a Facility Tour</h4>
                <p>We welcome technical audits and plant visits from global partners and brand owners.</p>
                <Button variant="brand" size="sm" asChild className="w-full mt-3">
                  <a href="#contact">Request Plant Visit <ArrowUpRight size={14} /></a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Sub-section Navigation Filter */}
        <div className="infrastructure-subnav-bar">
          <button
            type="button"
            onClick={() => setActiveTab('all')}
            className={`infra-tab-btn ${activeTab === 'all' ? 'active' : ''}`}
          >
            All Facilities ({infrastructureSubsections.length})
          </button>
          {infrastructureSubsections.map((sub) => {
            const Icon = subsectionIcons[sub.id] || Factory;
            return (
              <button
                key={sub.id}
                type="button"
                onClick={() => setActiveTab(sub.id)}
                className={`infra-tab-btn ${activeTab === sub.id ? 'active' : ''}`}
              >
                <Icon size={14} />
                <span>{sub.name}</span>
              </button>
            );
          })}
        </div>

        {/* Sub-sections Stack: Laboratory, Manufacturing Plant, EHS, Warehouse, Waste Water Treatment */}
        <div className="infrastructure-subsections-stack">
          {displayedSubsections.map((sub, index) => {
            const Icon = subsectionIcons[sub.id] || Factory;
            return (
              <motion.article
                key={sub.id}
                id={sub.id}
                initial={reduced ? false : { opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="infrastructure-subsection-card"
              >
                <div className="subsection-header">
                  <div className="subsection-title-area">
                    <div className="subsection-badge">
                      <Icon size={16} />
                      <span>{sub.name}</span>
                    </div>
                    <h3>{sub.title}</h3>
                    <p className="subsection-description">{sub.description}</p>
                  </div>

                  {/* Stat pills */}
                  <div className="subsection-stats">
                    {sub.stats.map((stat) => (
                      <div key={stat.label} className="stat-pill">
                        <strong>{stat.value}</strong>
                        <span>{stat.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Highlights list */}
                <div className="subsection-highlights">
                  {sub.highlights.map((item) => (
                    <div key={item} className="highlight-item">
                      <CheckCircle size={15} className="text-primary flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* 4-Photo Gallery Grid matching Reference Image 2 */}
                <div className="subsection-gallery-grid">
                  {sub.images.map((img, imgIndex) => (
                    <figure key={imgIndex} className="gallery-figure">
                      <div className="gallery-image-wrap">
                        <img
                          src={img.src}
                          alt={`${sub.name} - ${img.caption}`}
                          width={480}
                          height={320}
                          loading="lazy"
                        />
                        <div className="gallery-caption-overlay">
                          <p>{img.caption}</p>
                        </div>
                      </div>
                      <figcaption>{img.caption}</figcaption>
                    </figure>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default InfrastructureSection;
