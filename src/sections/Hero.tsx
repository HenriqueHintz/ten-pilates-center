import { motion } from 'motion/react';
import { Container } from '../components/ui/Container';
import { Button } from '../components/ui/Button';
import { ArrowRight, MapPin } from 'lucide-react';

export function Hero() {
  const whatsappUrl = "https://api.whatsapp.com/send/?phone=5548991605318&text=Ol%C3%A1%21+Gostaria+de+agendar+uma+aula+experimental.&type=phone_number&app_absent=0";

  return (
    <section className="relative min-h-[100dvh] flex items-center pt-20 pb-12 md:pt-24 md:pb-16 overflow-hidden bg-brand-sand w-full">
      {/* Subtle decorative elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-orange/5 rounded-full -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-stone/50 rounded-full translate-y-1/2 -translate-x-1/3"></div>

      <Container className="relative z-10">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col"
          >
            <motion.span 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="inline-flex items-center gap-2 py-2 px-5 rounded-full bg-brand-stone text-brand-navy text-xs sm:text-sm font-medium tracking-wide mb-8 md:mb-10 border border-brand-stone self-start"
            >
              <MapPin className="w-3.5 h-3.5 text-brand-orange" />
              Florianópolis - SC · Santa Mônica
            </motion.span>
            
            <h1 className="text-[2.2rem] sm:text-5xl md:text-[3.2rem] lg:text-7xl font-bold md:font-semibold lg:font-medium tracking-tight leading-[1.15] mb-6 md:mb-8 text-brand-navy">
              Transforme sua <br className="sm:hidden" />
              <span className="text-brand-orange italic underline decoration-brand-orange/30 underline-offset-8">
                postura
              </span>
              <br className="sm:hidden" /> em <br className="hidden sm:block" />
              qualidade de vida.
            </h1>
            

            <p className="text-lg sm:text-lg md:text-xl mb-10 md:mb-14 max-w-xl">
              <span className="text-brand-orange italic underline decoration-brand-orange/30 underline-offset-8 font-semibold">Ten Pilates — seu corpo em sua melhor versão.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto mt-4 sm:mt-0">
              <Button href={whatsappUrl} size="lg" className="group w-full sm:w-auto !text-base !px-8 !py-4 shadow-xl">
                Agendar Aula Experimental
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button href="#sobre" variant="outline" size="lg" className="w-full sm:w-auto !text-base !px-8 !py-4">
                Conheça o Estúdio
              </Button>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
