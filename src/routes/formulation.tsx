import { createFileRoute } from '@tanstack/react-router';
import { PageIntro, ContactBand } from '@/components/site/layout';
import { pageHead } from '@/lib/neelikon';
import { FormulationSection } from '@/components/site/formulation-section';

export const Route = createFileRoute('/formulation')({
  head: () =>
    pageHead(
      'Formulation & Application Lab',
      'Explore benchmark formulations and technical colour recipes for lip, eye, face, body and hair care developed by Neelikon specialists.'
    ),
  component: FormulationPage,
});

function FormulationPage() {
  return (
    <main>
      <PageIntro
        eyebrow="FORMULATION LAB & TECHNICAL GUIDE"
        title="Formulations crafted for real-world cosmetic success."
        description="Browse tested formulations featuring high-purity Neelikon pigments and lakes, complete with downloadable technical dossiers and ingredient specifications."
      />
      <FormulationSection />
      <ContactBand />
    </main>
  );
}
