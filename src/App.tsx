/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Hero } from './sections/Hero';
import { PremiumBenefitsSection } from './sections/PremiumBenefitsSection';
import { About } from './sections/About';
import { VideoSection } from './sections/VideoSection';
import { Location } from './sections/Location';
import { FinalCTA } from './sections/FinalCTA';
import { Footer } from './sections/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden w-full">
      <Navbar />
      
      <main className="flex-grow w-full">
        <Hero />
        <PremiumBenefitsSection />
        <About />
        <VideoSection />
        <Location />
        <FinalCTA />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

