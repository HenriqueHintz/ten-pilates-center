import { motion } from 'motion/react';
import { Container } from '../components/ui/Container';
import { Button } from '../components/ui/Button';
import { ArrowRight, MapPin } from 'lucide-react';

export function Hero() {
  const whatsappUrl = "https://api.whatsapp.com/send/?phone=5548991605318&text=Ol%C3%A1%21+Gostaria+de+agendar+uma+aula+experimental.&type=phone_number&app_absent=0";

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-brand-sand w-full">
      {/* Subtle decorative elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-orange/5 rounded-full -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-stone/50 rounded-full translate-y-1/2 -translate-x-1/3"></div>

      <Container className="relative z-10">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.span 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-brand-stone text-brand-navy text-xs sm:text-sm font-medium tracking-wide mb-6 border border-brand-stone"
            >
              <MapPin className="w-3.5 h-3.5 text-brand-orange" />
              Florianópolis - SC · Trindade
            </motion.span>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold md:font-semibold lg:font-medium tracking-tight leading-[1.1] mb-6 text-brand-navy">
              Transforme sua{' '}
              <span className="text-brand-orange italic underline decoration-brand-orange/30 underline-offset-8">
                postura
              </span>
              {' '}e<br className="hidden sm:block" />
              qualidade de vida.
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-4 leading-relaxed max-w-xl">
              Descubra o poder do Pilates, reduza dores, ganhe flexibilidade e reconecte-se com seu corpo.
            </p>
            <p className="text-base sm:text-lg md:text-xl mb-10 max-w-xl">
              <span className="text-brand-orange italic underline decoration-brand-orange/30 underline-offset-8 font-semibold">Ten Pilates — seu corpo em sua melhor versão.</span>
            </p>
            
            <div className="flex flex-col items-center sm:items-start sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
              <Button href={whatsappUrl} size="lg" className="group w-full sm:w-auto !text-sm sm:!text-base !px-5 sm:!px-10 !py-3 sm:!py-4">
                Agendar Aula Experimental
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button href="#sobre" variant="outline" size="lg" className="w-full sm:w-auto !text-sm sm:!text-base !px-5 sm:!px-10 !py-3 sm:!py-4">
                Conheça o Estúdio
              </Button>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
