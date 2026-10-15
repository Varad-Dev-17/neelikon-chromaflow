import { createFileRoute, Link } from '@tanstack/react-router';
import { useState, type FormEvent } from 'react';
import {
  ArrowUpRight,
  ShieldCheck,
  Star,
  Globe2,
  FlaskConical,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Mail,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { pageHead } from '@/lib/neelikon';
import { toast } from 'sonner';

// Pre-configured assets - user can easily swap with their own image files
import foodImg from '@/assets/food-colours.jpg';
import pharmaImg from '@/assets/pharma-colours.jpg';
import cosmeticImg from '@/assets/cosmetic-colours.jpg';

export const Route = createFileRoute('/about')({
  head: () =>
    pageHead(
      'About Us',
      'Discover Neelikon: a global manufacturer of high-purity dyes, lakes and pigments, with a colour legacy beginning in 1983.'
    ),
  component: AboutPage,
});

// 6 Circular Portfolio Applications from reference image
const portfolioSolutions = [
  {
    name: 'Food & Beverages',
    image: foodImg,
    alt: 'Food & beverage colours and applications',
  },
  {
    name: 'Pharmaceuticals',
    image: pharmaImg,
    alt: 'High purity pharmaceutical pigments and capsules',
  },
  {
    name: 'Cosmetics',
    image: cosmeticImg,
    alt: 'Cosmetics pigments and makeup shades',
  },
  {
    name: 'Dyes & Lakes',
    image: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=500&q=80',
    alt: 'High-purity soluble dyes and aluminum lakes',
  },
  {
    name: 'Fluorescent Dyes',
    image: 'https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&w=500&q=80',
    alt: 'Specialty fluorescent dyes and optical solutions',
  },
  {
    name: 'Industrial Applications',
    image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=500&q=80',
    alt: 'Industrial colour solutions, masterbatches and coatings',
  },
];

const testimonials = [
  {
    quote:
      '“Neelikon has been a valued partner for our colour requirements. Their consistent quality and reliable service make them our preferred supplier.”',
    author: 'International Associate',
    location: 'USA',
  },
  {
    quote:
      '“The batch-to-batch consistency and regulatory compliance documentation provided by Neelikon is unmatched in the specialty colour industry.”',
    author: 'Technical Director, Formulation Lab',
    location: 'Germany',
  },
  {
    quote:
      '“Outstanding technical support, reliable colour stability, and swift export logistics across our global operations.”',
    author: 'Procurement Head, Pharma Division',
    location: 'Japan',
  },
  {
    quote:
      '“Neelikon colours elevate our personal care formulations with exceptional shade fidelity and purity.”',
    author: 'Chief Formulator, Cosmetic Brands',
    location: 'United Kingdom',
  },
  {
    quote:
      '“Consistently dependable delivery and prompt response from their regulatory and application laboratory teams.”',
    author: 'Supply Chain Director',
    location: 'Brazil',
  },
];

function AboutPage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [newsletterEmail, setNewsletterEmail] = useState('');

  const handleEnquiry = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = data.get('name') as string;
    toast.success('Enquiry Submitted Successfully', {
      description: `Thank you ${name || ''}. Our application specialists will connect with you promptly.`,
      icon: <CheckCircle2 className="text-emerald-500" size={16} />,
    });
    e.currentTarget.reset();
  };

  const handleNewsletter = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    toast.success('Subscribed to Newsletter', {
      description: 'You are now subscribed to Neelikon product updates and formulation insights.',
      icon: <Mail className="text-emerald-500" size={16} />,
    });
    setNewsletterEmail('');
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const currentTestimonial = testimonials[activeTestimonial] ?? testimonials[0]!;

  return (
    <main className="about-page">
      {/* 1. Hero Section with Pigment Banner Background */}
      <section className="about-hero-section">
        <div className="about-hero-bg">
          <img
            src="/about-us/01-hero-pigment-banner.webp"
            alt="Neelikon vibrant pigment powder explosion banner"
            width={1920}
            height={600}
            loading="eager"
            fetchPriority="high"
          />
        </div>
        <div className="container about-hero-inner" data-reveal>
          <div className="about-hero-content">
            <span className="eyebrow">ONE WORLD. ONE QUALITY.</span>
            <h1 className="about-hero-title">
              A passion for colour.<br />
              A legacy of trust.
            </h1>
            <p className="about-hero-desc">
              We bring scientific expertise and a world of colour together to help our customers create with confidence.
            </p>
            <Button variant="brand" size="lg" className="about-cta-btn" asChild>
              <Link to="/products">
                Explore our colour solutions <ArrowUpRight size={16} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 2. Story Section with Globe Image & Stats */}
      <section className="section container about-story-section">
        <div className="about-story-grid" data-reveal>
          <div className="about-story-content">
            <span className="eyebrow">ABOUT NEELIKON</span>
            <h2>Rooted in India.<br />Connected to the world.</h2>
            <p>
              Founded by Mr. Mukund Turakhia in 1983, Neelikon has grown into a global manufacturer and exporter of
              high-purity colourants for food, pharmaceuticals, cosmetics and industrial applications.
            </p>
            <p>
              Our portfolio encompasses synthetic and natural colours, dyes, lakes, cosmetic pigments and specialty
              fluorescent dyes. We serve customers in more than 100 countries, supported by a commitment to research,
              consistency and international quality standards.
            </p>
            <p>
              “One World One Quality” is our guiding philosophy: the same care, precision and commitment, wherever our
              colours are used.
            </p>

            <div className="about-stats-strip">
              <div className="about-stat-item">
                <strong>1983</strong>
                <span>Year of Establishment</span>
              </div>
              <div className="about-stat-item">
                <strong>100+</strong>
                <span>Countries Served</span>
              </div>
              <div className="about-stat-item">
                <strong>Global</strong>
                <span>Manufacturer & Exporter</span>
              </div>
            </div>
          </div>

          <div className="about-story-media">
            <img
              src="https://images.unsplash.com/photo-1589519160732-57fc498494f8?auto=format&fit=crop&w=1000&q=80"
              alt="Crystal glass globe resting on vibrant mounds of color pigment"
              width={1000}
              height={1000}
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* 3. Product Portfolio with 6 Circular Solutions */}
      <section className="section container about-portfolio-section">
        <div className="portfolio-header-area" data-reveal>
          <span className="eyebrow">A WIDE RANGE OF SOLUTIONS</span>
          <h2>Our product portfolio</h2>
          <p className="portfolio-subtitle">High-purity colourants for diverse industries and applications.</p>
        </div>

        <div className="portfolio-circle-grid" data-reveal>
          {portfolioSolutions.map((sol) => (
            <Link key={sol.name} to="/products" className="portfolio-circle-card">
              <div className="portfolio-circle-thumb">
                <img src={sol.image} alt={sol.alt} width={280} height={280} loading="lazy" />
              </div>
              <h4>{sol.name}</h4>
            </Link>
          ))}
        </div>
      </section>

      {/* 4. Manufacturing Facilities Split with Factory Exterior */}
      <section className="section container about-facilities-section">
        <div className="facilities-grid" data-reveal>
          <div className="facilities-media">
            <img
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80"
              alt="Neelikon modern manufacturing facility complex"
              width={1200}
              height={750}
              loading="lazy"
            />
          </div>
          <div className="facilities-content">
            <span className="eyebrow">INFRASTRUCTURE</span>
            <h2>World-class<br />manufacturing facilities</h2>
            <p>
              Our modern manufacturing facilities are designed for consistent quality, scalability and safety. With
              advanced technology, strict process controls and a skilled team, we ensure reliable supply to customers
              across the world.
            </p>
            <Button variant="brand" size="lg" asChild>
              <Link to="/infrastructure">
                Explore our infrastructure <ArrowUpRight size={16} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 5. Why Choose Neelikon & Enquiry Form */}
      <section className="section container about-trust-contact-section">
        <div className="trust-contact-grid" data-reveal>
          {/* Left Column: Why Choose Neelikon */}
          <div className="trust-left-content">
            <span className="eyebrow">WHY CHOOSE NEELIKON</span>
            <h2>Quality. Consistency.<br />A partner you can trust.</h2>

            <div className="trust-features-grid">
              <div className="trust-feature-item">
                <div className="trust-icon-box">
                  <ShieldCheck size={22} />
                </div>
                <h4>High Purity & Safety</h4>
                <p>Manufactured to international quality and regulatory standards.</p>
              </div>

              <div className="trust-feature-item">
                <div className="trust-icon-box">
                  <Star size={22} />
                </div>
                <h4>Consistent Quality</h4>
                <p>Reliable colour performance across batches.</p>
              </div>

              <div className="trust-feature-item">
                <div className="trust-icon-box">
                  <Globe2 size={22} />
                </div>
                <h4>Global Reach</h4>
                <p>Serving customers in 100+ countries.</p>
              </div>

              <div className="trust-feature-item">
                <div className="trust-icon-box">
                  <FlaskConical size={22} />
                </div>
                <h4>Research & Innovation</h4>
                <p>Continuous development of new and sustainable solutions.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Discuss your requirements Form */}
          <div className="about-enquiry-card">
            <span className="eyebrow">GET IN TOUCH</span>
            <h3>Discuss your requirements</h3>
            <p>Our team is here to help you with product information, samples or custom solutions.</p>

            <form onSubmit={handleEnquiry}>
              <div className="enquiry-row">
                <label>
                  Name *
                  <input type="text" name="name" required placeholder="Full Name" />
                </label>
                <label>
                  Company Name *
                  <input type="text" name="company" required placeholder="Company Name" />
                </label>
              </div>

              <div className="enquiry-row">
                <label>
                  Email *
                  <input type="email" name="email" required placeholder="you@company.com" />
                </label>
                <label>
                  Country *
                  <select name="country" required defaultValue="">
                    <option value="" disabled>Select Country</option>
                    <option value="India">India</option>
                    <option value="USA">United States</option>
                    <option value="UK">United Kingdom</option>
                    <option value="Germany">Germany</option>
                    <option value="Japan">Japan</option>
                    <option value="Other">Other Global</option>
                  </select>
                </label>
              </div>

              <label className="enquiry-full-label">
                Your Message *
                <textarea
                  name="message"
                  required
                  placeholder="Tell us about your colour application or enquiry..."
                />
              </label>

              <Button type="submit" variant="brand" className="submit-btn">
                Send Enquiry <ArrowUpRight size={16} />
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* 6. Message from Managing Director & Global Testimonial */}
      <section className="about-md-section">
        <div className="container md-vision-grid" data-reveal>
          {/* MD Message */}
          <div className="md-profile-card">
            <div>
              <span className="eyebrow">OUR VISION</span>
              <h2>A message from our Managing Director</h2>
            </div>

            <div className="md-content-flex">
              <div>
                <p className="md-quote-text">
                  “At Neelikon, our vision has always been to bring the power of colour to industries around the world
                  with uncompromising quality and integrity. We remain committed to innovation, sustainability and
                  long-term partnerships with our customers.”
                </p>
                <div className="md-sign">
                  <strong>Mr. Mukund Turakhia</strong>
                  <span>Managing Director, Neelikon</span>
                </div>
              </div>

              <div className="md-photo-wrap">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80"
                  alt="Mr. Mukund Turakhia, Managing Director of Neelikon"
                  width={300}
                  height={360}
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Testimonial Box */}
          <div className="testimonial-card">
            <div>
              <span className="eyebrow">OUR GLOBAL PRESENCE</span>
              <p className="testimonial-quote">
                {currentTestimonial.quote}
              </p>
            </div>

            <div>
              <div className="testimonial-author">
                <strong>{currentTestimonial.author}</strong>
                <span>{currentTestimonial.location}</span>
              </div>

              <div className="testimonial-controls">
                <button
                  type="button"
                  onClick={prevTestimonial}
                  className="testimonial-nav-btn"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft size={16} />
                </button>

                <div className="testimonial-dots">
                  {testimonials.map((_, idx) => (
                    <span
                      key={idx}
                      className={`testimonial-dot ${activeTestimonial === idx ? 'active' : ''}`}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  onClick={nextTestimonial}
                  className="testimonial-nav-btn"
                  aria-label="Next testimonial"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Newsletter Band */}
      <section className="about-newsletter-band">
        <div className="container newsletter-inner" data-reveal>
          <div className="newsletter-text">
            <span className="eyebrow">STAY UPDATED</span>
            <h3>Subscribe to our newsletter</h3>
            <p>Get the latest updates on our products, innovations and industry insights.</p>
          </div>

          <form onSubmit={handleNewsletter} className="newsletter-form">
            <input
              type="email"
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              placeholder="Your email address"
              required
            />
            <Button type="submit" variant="brand">
              Subscribe <ArrowUpRight size={15} />
            </Button>
          </form>
        </div>
      </section>
    </main>
  );
}

export default AboutPage;