import dynamic from 'next/dynamic';

// Critical components for initial load
import Header from '@/components/Header';
import Hero from '@/components/Hero';

// Dynamically imported components
const Projects = dynamic(() => import('@/components/Projects'));
const Services = dynamic(() => import('@/components/Services'));
const Tech = dynamic(() => import('@/components/Tech'));
const DigitalMarketing = dynamic(() => import('@/components/DigitalMarketing'));
const Teams = dynamic(() => import('@/components/Teams'));
const Testimonials = dynamic(() => import('@/components/Testimonials'));
const Blogs = dynamic(() => import('@/components/Blogs'));
const ContactUs = dynamic(() => import('@/components/ContactUs'));
const Footer = dynamic(() => import('@/components/Footer'));

export default function Home() {
  return (
    <>
      <div className="bg-gray-100 pt-10 pb-16">
        <Header />
        <Hero />
      </div>
      <Services />
      <Tech />
      <Projects />
      <DigitalMarketing />
      <Teams />
      <Testimonials />
      <Blogs />
      <ContactUs />
      <Footer />
    </>
  );
}
