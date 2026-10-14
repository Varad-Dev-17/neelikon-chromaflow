import { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Download, Sparkles, FileText, CheckCircle2 } from 'lucide-react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { formulationCategories, formulations, type FormulationCategory } from '@/lib/neelikon';

export function FormulationSection() {
  const [selectedCategory, setSelectedCategory] = useState<FormulationCategory>('All Formulations');
  const reduced = useReducedMotion();

  const filteredFormulations = selectedCategory === 'All Formulations'
    ? formulations
    : formulations.filter(f => f.category === selectedCategory);

  const handleDownload = (name: string, code: string) => {
    toast.success(`Formulation Dossier Ready`, {
      description: `Downloading TDS & Recipe Guide for ${name} (${code})`,
      icon: <CheckCircle2 className="text-emerald-500" size={16} />,
    });
  };

  return (
    <section className="section container formulation-section" id="formulation">
      <div className="section-heading" data-reveal>
        <div>
          <span className="eyebrow">FORMULATION & APPLICATION LAB</span>
          <h2>Crafted for real-world formulation success.</h2>
        </div>
        <p>
          Explore tested benchmark formulations developed by our application specialists across cosmetic,
          personal care, and specialty segments.
        </p>
      </div>

      <div className="formulation-layout">
        {/* Category Sidebar matching Reference Image 1 */}
        <aside className="formulation-sidebar" aria-label="Formulation categories">
          <div className="formulation-sidebar-header">
            <span>Formulation Categories</span>
          </div>
          <div className="formulation-category-buttons">
            {formulationCategories.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`formulation-cat-btn ${active ? 'active' : ''}`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          <div className="formulation-support-card">
            <Sparkles size={18} className="text-primary mb-2" />
            <h4>Custom Shade Matching</h4>
            <p>Need a tailored hue or stability trial for your cosmetic base? Our laboratory assists global formulators directly.</p>
            <Button variant="outline" size="sm" asChild className="mt-3 w-full">
              <a href="#contact">Request Formulation Support</a>
            </Button>
          </div>
        </aside>

        {/* Formulation Grid */}
        <div className="formulation-grid-wrapper">
          <div className="formulation-grid">
            <AnimatePresence mode="popLayout">
              {filteredFormulations.map((item) => (
                <motion.article
                  key={item.id}
                  layout
                  initial={reduced ? false : { opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  {...(!reduced ? { exit: { opacity: 0, scale: 0.96 } } : {})}
                  transition={{ duration: 0.3 }}
                  className="formulation-card"
                >
                  <div className="formulation-card-image">
                    <img
                      src={item.image}
                      alt={item.name}
                      width={640}
                      height={420}
                      loading="lazy"
                    />
                    <span className="formulation-badge">{item.category}</span>
                    <span className="formulation-code">{item.code}</span>
                  </div>

                  <div className="formulation-card-body">
                    <button
                      type="button"
                      onClick={() => handleDownload(item.name, item.code)}
                      className="formulation-download-title"
                      title="Download formulation recipe & technical specification"
                    >
                      <Download size={15} />
                      <h3>{item.name}</h3>
                    </button>

                    <p className="formulation-tagline">{item.tagline}</p>

                    <div className="formulation-spec-block">
                      <div className="spec-row">
                        <strong>Key Pigments:</strong>
                        <span>{item.keyPigments}</span>
                      </div>
                      <div className="spec-row">
                        <strong>Texture:</strong>
                        <span>{item.texture}</span>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
export default FormulationSection;
