import { motion } from 'motion/react';
import { Section } from '../components/ui/Section';
import { Container } from '../components/ui/Container';
import { MapPin, Clock, Phone, Instagram } from 'lucide-react';

const contactItems = [
  {
    icon: MapPin,
    title: "Endereço",
    content: (
      <p className="text-sm md:text-base text-gray-600 leading-relaxed">
        Av. Me. Benvenuta, 883<br />
        Trindade, Florianópolis - SC<br />
        88035-000
      </p>
    )
  },
  {
    icon: Clock,
    title: "Horário de Funcionamento",
    content: (
      <ul className="text-sm md:text-base text-gray-600 space-y-1">
        <li><span className="font-medium">Segunda a Sexta:</span> 07:00 – 21:00</li>
        <li><span className="font-medium">Sábado:</span> 09:00 – 13:00</li>
        <li><span className="font-medium">Domingo:</span> Fechado</li>
      </ul>
    )
  },
  {
    icon: Phone,
    title: "Contato",
    content: (
      <p className="text-sm md:text-base text-gray-600">
        <a href="tel:+5548991605318" className="hover:text-brand-orange transition-colors">(48) 99160-5318</a>
      </p>
    )
  },
  {
    icon: Instagram,
    title: "Redes Sociais",
    content: (
      <p className="text-sm md:text-base text-gray-600">
        <a href="https://www.instagram.com/tenpilatescenter/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-orange transition-colors">@tenpilatescenter</a>
      </p>
    )
  },
];

export function Location() {
  return (
    <Section id="localizacao" bg="white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block text-brand-orange text-sm font-semibold tracking-widest uppercase mb-4">Localização</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8">Venha nos visitar</h2>
            
            <div className="space-y-6 md:space-y-8">
              {contactItems.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-brand-sand rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-brand-orange/10 transition-colors duration-300">
                    <item.icon className="w-5 h-5 md:w-6 md:h-6 text-brand-orange" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2">{item.title}</h3>
                    {item.content}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-[300px] md:h-[500px] rounded-3xl overflow-hidden shadow-lg w-full"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3535.89426998939!2d-48.5154756236968!3d-27.59676837624647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x952739147404e369%3A0xb8320b167867992d!2sTen%20Pilates%20Center!5e0!3m2!1sen!2sbr!4v1715000000000!5m2!1sen!2sbr" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa de localização do Ten Pilates Center"
              className="w-full h-full"
            ></iframe>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
