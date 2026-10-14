import { createFileRoute } from '@tanstack/react-router';
import { PageIntro, ContactBand } from '@/components/site/layout';
import { pageHead } from '@/lib/neelikon';
import { InfrastructureSection } from '@/components/site/infrastructure-section';

export const Route = createFileRoute('/infrastructure')({
  head: () =>
    pageHead(
      'Our Infrastructure',
      'Discover Neelikon’s world-class manufacturing plants in Roha and Dahej, NABL accredited laboratories, smart warehousing, and Zero Liquid Discharge environmental stewardship.'
    ),
  component: InfrastructurePage,
});

function InfrastructurePage() {
  return (
    <main>
      <PageIntro
        eyebrow="WORLD-CLASS INFRASTRUCTURE"
        title="Capacities and capabilities built on uncompromising quality."
        description="Experience the backbone of Neelikon: NABL testing laboratories, multi-hectare chemical synthesis plants, certified EHS systems, and sustainable water stewardship."
      />
      <InfrastructureSection />
      <ContactBand />
    </main>
  );
}
