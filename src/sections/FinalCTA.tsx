import { motion } from 'motion/react';
import { Section } from '../components/ui/Section';
import { Container } from '../components/ui/Container';
import { Button } from '../components/ui/Button';
import { ArrowRight, Phone } from 'lucide-react';

export function FinalCTA() {
  const whatsappUrl = "https://api.whatsapp.com/send/?phone=5548991605318&text=Ol%C3%A1%21+Gostaria+de+agendar+uma+aula+experimental.&type=phone_number&app_absent=0";

  return (
    <Section bg="orange" className="!bg-gradient-to-br !from-brand-orange !via-brand-orange-dark !to-brand-navy text-white text-center relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
      
      <Container className="relative z-10 py-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 shadow-sm border border-brand-navy/5">
            <Phone className="w-4 h-4 text-white" />
            <span className="text-sm font-medium text-white">Primeira aula experimental</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 font-serif text-white">
            Pronto para transformar seu corpo?
          </h2>
          <p className="text-lg md:text-xl mb-8 md:mb-10 text-white/80">
            Dê o primeiro passo para uma vida sem dores e com muito mais disposição. Agende sua aula experimental hoje mesmo.
          </p>
          <Button 
            href={whatsappUrl} 
            size="lg" 
            className="!text-sm sm:!text-base !py-3.5 sm:!py-4 !bg-white !text-brand-orange hover:!bg-gray-50 hover:!text-brand-orange-dark shadow-xl hover:shadow-2xl w-[90%] max-w-[320px] sm:w-auto mx-auto group"
          >
            Agendar Minha Aula Experimental
            <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </Container>
    </Section>
  );
}
