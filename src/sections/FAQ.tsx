import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Section } from '../components/ui/Section';
import { Container } from '../components/ui/Container';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "Nunca fiz Pilates antes. Posso começar?",
    answer: "Com certeza! O Pilates é para todos, independentemente da idade ou nível de condicionamento físico. Nossos instrutores farão uma avaliação inicial para adaptar os exercícios às suas necessidades."
  },
  {
    question: "Quantas vezes por semana devo praticar?",
    answer: "Recomendamos de 2 a 3 vezes por semana para resultados mais rápidos e consistentes. No entanto, mesmo praticando 1 vez por semana, você já sentirá os benefícios na sua postura e bem-estar."
  },
  {
    question: "O Pilates ajuda a emagrecer?",
    answer: "Embora o foco principal seja o fortalecimento muscular, melhora da postura e flexibilidade, o Pilates também auxilia no processo de emagrecimento ao aumentar o metabolismo e tonificar o corpo."
  },
  {
    question: "Tenho hérnia de disco. Posso fazer Pilates?",
    answer: "Sim, o Pilates é altamente recomendado para quem tem hérnia de disco. Os exercícios focam no fortalecimento do core e na estabilização da coluna, ajudando a aliviar as dores e prevenir novas crises. Nossos instrutores são capacitados para lidar com essas condições."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section id="faq" bg="sand">
      <Container>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-brand-navy">Dúvidas Frequentes</h2>
            <p className="text-base md:text-lg text-gray-600">
              Tudo o que você precisa saber antes de começar sua jornada conosco.
            </p>
          </div>

          <div className="space-y-3 md:space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100"
              >
                <button
                  className="w-full px-5 py-4 md:px-6 md:py-5 text-left flex items-center justify-between focus:outline-none"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className="font-bold text-base md:text-lg text-brand-navy pr-4">{faq.question}</span>
                  <ChevronDown 
                    className={`w-5 h-5 text-brand-orange transition-transform duration-300 flex-shrink-0 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-5 pb-4 md:px-6 md:pb-5 text-sm md:text-base text-gray-600 leading-relaxed pt-2 md:pt-0">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
