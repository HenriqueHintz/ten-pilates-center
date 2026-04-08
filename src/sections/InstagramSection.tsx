import { motion } from 'motion/react';
import { Instagram } from 'lucide-react';
import { Button } from '../components/ui/Button';

export function InstagramSection() {
  return (
    <section id="instagram" className="py-24 bg-brand-sand overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl"
          >
            <span className="inline-block text-brand-orange text-sm font-semibold tracking-widest uppercase mb-4">Instagram</span>
            <h2 className="text-4xl md:text-5xl font-bold text-brand-navy tracking-tight mb-4">
              Acompanhe nosso dia a dia
            </h2>
            <p className="text-xl text-gray-600 font-light">
              Movimento que transforma. Evolução que você sente. <br className="hidden sm:block"/>
              Bem-estar que fica <span className="underline decoration-brand-orange/40 underline-offset-4">no seu feed</span>.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <Button 
              href="https://www.instagram.com/tenpilatescenter/" 
              variant="primary" 
              className="gap-2 w-full sm:w-auto"
            >
              <Instagram className="w-5 h-5" />
              Siga @tenpilatescenter
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
