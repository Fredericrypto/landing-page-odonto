
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { Testimonials } from '@/components/Testimonials';
import { BeforeAfter } from '@/components/BeforeAfter';
import { ContactForm } from '@/components/ContactForm';
import { Footer } from '@/components/Footer';
import { AiAssistant } from '@/components/AiAssistant';
import { Toaster } from '@/components/ui/toaster';

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <Navbar />
      <Hero />
      <Services />
      <BeforeAfter />
      <Testimonials />
      <ContactForm />
      <Footer />
      <AiAssistant />
      <Toaster />
    </main>
  );
}
