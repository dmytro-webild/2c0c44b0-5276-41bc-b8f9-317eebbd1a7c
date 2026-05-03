"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeatureBento from '@/components/sections/feature/FeatureBento';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import HeroOverlayTestimonial from '@/components/sections/hero/HeroOverlayTestimonial';
import MetricCardEleven from '@/components/sections/metrics/MetricCardEleven';
import MetricSplitMediaAbout from '@/components/sections/about/MetricSplitMediaAbout';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import TestimonialCardThirteen from '@/components/sections/testimonial/TestimonialCardThirteen';
import { Headphones, Laptop, Smartphone } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="elastic-effect"
        defaultTextAnimation="reveal-blur"
        borderRadius="soft"
        contentWidth="mediumSmall"
        sizing="mediumLargeSizeLargeTitles"
        background="floatingGradient"
        cardStyle="soft-shadow"
        primaryButtonStyle="shadow"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="normal"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        {
          name: "Home",          id: "home"},
        {
          name: "Services",          id: "services"},
        {
          name: "Reviews",          id: "testimonials"},
        {
          name: "Contact",          id: "contact"},
      ]}
      brandName="Tech Tronex"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroOverlayTestimonial
      title="Your devices, restored to perfection"
      description="Northampton's premier destination for luxury electronics repair. 12-month warranty, 30-minute express service, and 3rd-generation expertise."
      testimonials={[
        {
          name: "James Fallon",          handle: "@jamesf",          testimonial: "30 mins for an iPhone charging fix. Incredible price and reliable warranty.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/body-scrub-dried-shell-essential-oil-soap-bar-napkin-smartphone-black-background_23-2147971434.jpg",          imageAlt: "smartphone repair professional gold light"},
        {
          name: "Ali Idris",          handle: "@aliidris",          testimonial: "Sorted my phone virus in a flash. The best in town.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/smartphone-icon-right-side-with-white-background_187299-39979.jpg",          imageAlt: "smartphone repair professional gold light"},
        {
          name: "Salman Ahmed",          handle: "@salmana",          testimonial: "MacBook Air logic board repair under an hour. Truly top-tier service.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-vector/creative-linear-flat-laptop-logo-template_23-2149008089.jpg",          imageAlt: "smartphone repair professional gold light"},
        {
          name: "Anna Napalasi",          handle: "@annanap",          testimonial: "Customer service beyond the charts. Amazing experience.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/cyber-monday-neon-sale_23-2152027235.jpg",          imageAlt: "smartphone repair professional gold light"},
        {
          name: "Sami Circeie",          handle: "@samic",          testimonial: "Best tech shop in Northampton for 5 years running.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/serious-businessman-headset-using-laptop_74855-3069.jpg",          imageAlt: "smartphone repair professional gold light"},
      ]}
      buttons={[
        {
          text: "Book Repair",          href: "#contact"},
        {
          text: "Our Services",          href: "#services"},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/body-scrub-dried-shell-essential-oil-soap-bar-napkin-smartphone-black-background_23-2147971434.jpg"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/confident-model-with-pink-bob-hairstyle-flaunts-bold-attitude-fashion-forward-shoot-with_482257-133950.jpg",          alt: "Confident model with pink bob hairstyle flaunts bold attitude"},
        {
          src: "http://img.b2bpic.net/free-photo/high-angle-unknown-woman-posing_23-2149417557.jpg",          alt: "High angle unknown woman posing"},
        {
          src: "http://img.b2bpic.net/free-photo/woman-portrait-with-bright-blue-lips_23-2151096450.jpg",          alt: "Woman portrait with bright blue lips"},
        {
          src: "http://img.b2bpic.net/free-photo/spotlight-portrait-golden-hour_23-2151915123.jpg",          alt: "Spotlight portrait during golden hour"},
        {
          src: "http://img.b2bpic.net/free-photo/outdoor-shot-pensive-curly-haired-woman-student-returns-from-lecures-wears-headband-casual-neat-clothes-strolls-outdoors-poses-against-blurred-urban-background-people-lifestyle-concept_273609-62304.jpg",          alt: "Outdoor shot of pensive curly haired woman"},
      ]}
      avatarText="Join 12k+ satisfied customers"
    />
  </div>

  <div id="services" data-section="services">
      <FeatureBento
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={true}
      features={[
        {
          title: "iPhone & Android",          description: "Screen, battery, and port repairs in 30 minutes.",          bentoComponent: "reveal-icon",          icon: Smartphone,
        },
        {
          title: "Laptop & MacBook",          description: "Expert motherboard, liquid damage, and SSD services.",          bentoComponent: "reveal-icon",          icon: Laptop,
        },
        {
          title: "Premium Accessories",          description: "Tested, durable cases and high-speed chargers.",          bentoComponent: "reveal-icon",          icon: Headphones,
        },
        {
          title: "Certified Pre-owned",          description: "Reliable devices with 12-month warranties.",          bentoComponent: "reveal-icon",          icon: Smartphone,
        },
      ]}
      title="Premium Services"
      description="Precision repairs and sales with quality assurance."
    />
  </div>

  <div id="about" data-section="about">
      <MetricSplitMediaAbout
      useInvertedBackground={false}
      title="The Tronex Difference"
      description="Built on 8 years of trust in Northampton. We combine old-school repair craftsmanship with modern diagnostic technology, ensuring every repair is fully backed by our signature 12-month guarantee."
      metrics={[
        {
          value: "12k+",          title: "Devices Repaired"},
        {
          value: "4.8",          title: "Google Rating"},
        {
          value: "30min",          title: "Express Turnaround"},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/serious-businessman-headset-using-laptop_74855-3069.jpg"
      mediaAnimation="slide-up"
      metricsAnimation="slide-up"
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardEleven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      metrics={[
        {
          id: "m1",          value: "8+",          title: "Years Experience",          description: "Three generations of expertise.",          imageSrc: "http://img.b2bpic.net/free-photo/happy-young-adult-male-using-smartphone-night-cityscape_53876-14743.jpg"},
        {
          id: "m2",          value: "12.5k+",          title: "Happy Clients",          description: "Reliably served Northampton since day one.",          imageSrc: "http://img.b2bpic.net/free-photo/modern-office-equipment-blue-desk-generated-by-ai_188544-27062.jpg"},
        {
          id: "m3",          value: "100%",          title: "Quality Parts",          description: "No cheap knockoffs used here.",          imageSrc: "http://img.b2bpic.net/free-photo/close-up-hands-making-shoes_23-2149007460.jpg"},
      ]}
      title="Our Impact"
      description="Reliable figures based on thousands of satisfied local clients."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardThirteen
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "t1",          name: "James Fallon",          handle: "@jamesf",          testimonial: "30 mins fix, brilliant service.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-beautiful-young-model-black-leather-jacket-posing-near-lamps_114579-66705.jpg"},
        {
          id: "t2",          name: "Ali Idris",          handle: "@aliidris",          testimonial: "Virus fixed, best shop in town.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/woman-holds-paper-cup-coffee-spends-leisure-time-outdoors-wears-jacket-carries-bag-enjoys-recreation-dreams-about-something_273609-55660.jpg"},
        {
          id: "t3",          name: "Salman Ahmed",          handle: "@salmana",          testimonial: "MacBook Air M1 repair was exceptional.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/closeup-senior-businessman-with-arms-crossed_1262-1751.jpg"},
        {
          id: "t4",          name: "Anna Napalasi",          handle: "@annanap",          testimonial: "Customer service beyond the charts.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/indian-businessman-with-his-white-car_496169-2889.jpg"},
        {
          id: "t5",          name: "Sami Circeie",          handle: "@samic",          testimonial: "Trusted them for years, never failed.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/confident-person-with-beard-curly-hair-posing-studio_482257-121553.jpg"},
      ]}
      showRating={true}
      title="Client Stories"
      description="See why our Northampton community trusts us."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitMedia
      textboxLayout="split"
      useInvertedBackground={true}
      faqs={[
        {
          id: "f1",          title: "How fast is your repair service?",          content: "Most screen and battery replacements are completed in under 30 minutes while you wait."},
        {
          id: "f2",          title: "Do you provide warranties?",          content: "Yes, all our repairs and pre-owned device sales include a 12-month quality guarantee."},
        {
          id: "f3",          title: "What devices do you fix?",          content: "We handle most iPhone and Android smartphones, as well as MacBook and Windows laptops."},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/close-up-woman-working-research_23-2148925542.jpg"
      title="Common Questions"
      description="Answers to keep your tech running smoothly."
      faqsAnimation="slide-up"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={false}
      background={{
        variant: "sparkles-gradient"}}
      tag="Book Your Repair"
      title="Ready for a flawless fix?"
      description="Visit our store on 123 Abington Street or call us for a free, instant diagnostic quote today."
      buttons={[
        {
          text: "Call Now",          href: "tel:+441604000000"},
        {
          text: "WhatsApp",          href: "#"},
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoEmphasis
      columns={[
        {
          items: [
            {
              label: "Services",              href: "#services"},
            {
              label: "Reviews",              href: "#testimonials"},
            {
              label: "Contact",              href: "#contact"},
          ],
        },
        {
          items: [
            {
              label: "Privacy Policy",              href: "#"},
            {
              label: "Warranty Info",              href: "#"},
            {
              label: "Terms of Use",              href: "#"},
          ],
        },
      ]}
      logoText="Tech Tronex"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
