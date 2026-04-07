import { motion } from 'motion/react';
import { Section } from '../components/ui/Section';
import { Container } from '../components/ui/Container';

// Custom Animated SVGs
function IconSpine({ className }: { className?: string }) {
  return (
    <motion.svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className={className}>
       <motion.path 
         d="M12 4 C 17 8, 7 16, 12 20"
         initial={{ pathLength: 0 }}
         whileInView={{ pathLength: 1 }}
         transition={{ duration: 1.2, ease: "easeInOut" }}
       />
       <motion.circle cx="12" cy="4" r="1.5" fill="currentColor" initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 0.2 }} />
       <motion.circle cx="12" cy="12" r="2" fill="currentColor" initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 0.6 }} />
       <motion.circle cx="12" cy="20" r="1.5" fill="currentColor" initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 1 }} />
    </motion.svg>
  );
}

function IconAlign({ className }: { className?: string }) {
  return (
    <motion.svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className={className}>
       <motion.path 
         d="M12 3v18"
         initial={{ pathLength: 0 }}
         whileInView={{ pathLength: 1 }}
         transition={{ duration: 1 }}
       />
       <motion.path d="M12 21 l -2 -2 m 4 0 l -2 2" />
       <motion.line x1="7" y1="8" x2="17" y2="8" initial={{ x: -15, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ delay: 0.4, type: 'spring' }} />
       <motion.line x1="9" y1="14" x2="15" y2="14" initial={{ x: 15, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ delay: 0.6, type: 'spring' }} />
    </motion.svg>
  );
}

function IconSpark({ className }: { className?: string }) {
  return (
    <motion.svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <motion.path 
        d="M12 3v3m0 12v3m9-9h-3M6 12H3m13.364-6.364l-2.121 2.12M7.757 16.243l-2.121 2.121m12.728 0l-2.121-2.121M7.757 7.757L5.636 5.636"
        initial={{ pathLength: 0, rotate: -45, scale: 0.8 }}
        whileInView={{ pathLength: 1, rotate: 0, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />
      <motion.circle cx="12" cy="12" r="3" initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 0.5, type: 'spring' }} />
    </motion.svg>
  );
}

function IconLotus({ className }: { className?: string }) {
  return (
    <motion.svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <motion.path 
         d="M12 22s-8-4.5-8-11.8A5.2 5.2 0 0 1 9.2 5c2 .2 2.8 1.8 2.8 1.8s.8-1.6 2.8-1.8A5.2 5.2 0 0 1 20 10.2C20 17.5 12 22 12 22z"
         initial={{ pathLength: 0 }}
         whileInView={{ pathLength: 1 }}
         transition={{ duration: 1.5, ease: "easeInOut" }}
      />
      <motion.path d="M12 22v-8" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ delay: 0.5 }} />
      <motion.path d="M12 14c-2-2-4-2-4-2" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ delay: 0.8 }} />
      <motion.path d="M12 14c2-2 4-2 4-2" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ delay: 1.0 }} />
    </motion.svg>
  );
}

const benefits = [
  {
    icon: IconSpine,
    title: "Alívio de Dores",
    description: "Fortaleça a musculatura profunda e elimine dores na coluna e articulações."
  },
  {
    icon: IconAlign,
    title: "Postura Correta",
    description: "Ajuste seu corpo com consciência e movimentos precisos."
  },
  {
    icon: IconSpark,
    title: "Mais Energia",
    description: "Ative seu corpo e aumente sua disposição no dia a dia."
  },
  {
    icon: IconLotus,
    title: "Bem-estar",
    description: "Equilibre mente e corpo com leveza e controle."
  },
];

export function PremiumBenefitsSection() {
  return (
    <Section id="beneficios" bg="white" className="py-24 md:py-32">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Side: Text & Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-xl"
          >
            <span className="inline-block text-brand-orange text-sm font-semibold tracking-widest uppercase mb-4">Benefícios</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-brand-navy mb-6 tracking-tight leading-tight">
              Seu corpo alinhado, <br className="hidden sm:block" />
              <span className="text-brand-orange italic font-light underline decoration-brand-orange/30 underline-offset-8">sua rotina mais leve.</span>
            </h2>

            <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-semibold mb-1">
              Pilates é reeducação do movimento.
            </p>
            <p className="text-base sm:text-lg text-gray-500 leading-relaxed font-light mb-10">
              Com precisão e foco na biomecânica, você constrói uma base forte para um corpo equilibrado e sem dores.
            </p>

            <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.12 }}
                  className="flex gap-4 items-start group cursor-default"
                >
                  <motion.div
                    className="w-11 h-11 rounded-xl bg-brand-orange/10 flex items-center justify-center flex-shrink-0"
                    whileHover={{ scale: 1.18, rotate: 8, backgroundColor: 'rgba(196,90,45,0.22)' }}
                    whileTap={{ scale: 0.92 }}
                    transition={{ type: 'spring', stiffness: 320, damping: 18 }}
                  >
                    <motion.div
                      initial={{ rotate: -10, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      transition={{ duration: 0.5, ease: 'easeOut' }}
                    >
                      <benefit.icon className="w-6 h-6 text-brand-orange" />
                    </motion.div>
                  </motion.div>
                  <div>
                    <motion.h3
                      className="font-bold text-brand-navy text-sm mb-1"
                      whileHover={{ x: 3 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      {benefit.title}
                    </motion.h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side: Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            whileHover={{ scale: 1.02 }}
            className="relative order-last lg:order-last w-full max-w-md mx-auto rounded-2xl overflow-hidden bg-brand-sand shadow-lg ring-1 ring-gray-200 hover:shadow-2xl transition-shadow duration-500 cursor-pointer mt-8 sm:mt-0"
          >
            <div className="aspect-square">
              <img 
                src="/images/foto 03.png"
                alt="Interior do Ten Pilates Center — recepção e ambiente premium" 
                className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
