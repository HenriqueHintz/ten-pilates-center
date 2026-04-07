import { motion } from 'motion/react';
import { Section } from '../components/ui/Section';
import { Container } from '../components/ui/Container';


export function About() {
  return (
    <Section id="sobre" bg="stone" className="py-24 md:py-32">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{ scale: 1.02 }}
            className="relative order-2 lg:order-1 w-full max-w-md mx-auto rounded-2xl overflow-hidden shadow-lg ring-1 ring-gray-200 hover:shadow-2xl transition-shadow duration-500 cursor-pointer"
          >
            <div className="aspect-square">
              <img 
                src="/images/foto 02.png"
                alt="Aula de Pilates no reformer no Ten Pilates Center" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl p-3 shadow-lg">
              <p className="text-sm font-semibold text-brand-navy">Equipamentos MetaLife</p>
              <p className="text-xs text-gray-500">Reformer de última geração para resultado máximo</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-1 lg:order-2 max-w-xl"
          >
            <span className="inline-block text-brand-orange text-sm font-semibold tracking-widest uppercase mb-4">Sobre nós</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-brand-navy mb-8 tracking-tight leading-tight">
              O seu novo espaço de <br className="hidden sm:block" />
              <span className="text-brand-orange italic font-light underline decoration-brand-orange/30 underline-offset-8">bem-estar</span> em Florianópolis.
            </h2>
            
            <p className="text-base sm:text-xl text-gray-600 leading-relaxed font-light mb-3">
              Localizado na Trindade, o <strong>Ten Pilates Center</strong> foi criado para oferecer uma experiência premium, onde cada detalhe importa.
            </p>
            <p className="text-base sm:text-xl text-gray-600 leading-relaxed font-light mb-6">
              Acreditamos que o movimento transforma, por isso, entregamos um atendimento humanizado,{' '}
              <span className="text-brand-orange italic underline decoration-brand-orange/30 underline-offset-8 font-semibold">
                focado no que realmente importa: Sua Saúde.
              </span>
            </p>

            <div className="flex gap-6 sm:gap-8 mt-8">
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-brand-orange">10+</p>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">Anos de experiência</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-brand-orange">500+</p>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">Alunos transformados</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-brand-orange">5★</p>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">Avaliação no Google</p>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
