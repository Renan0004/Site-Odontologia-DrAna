import { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaTooth, FaSmile, FaRegHospital } from "react-icons/fa";

const services = [
  {
    id: 1,
    icon: <FaTooth className="text-4xl text-primary" />,
    title: "Ortodontia",
    description: "Tratamentos ortodônticos personalizados para um sorriso alinhado e saudável",
    benefits: [
      "Correção do alinhamento dentário",
      "Melhora na função mastigatória",
      "Aparelhos modernos e discretos",
      "Planejamento digital do tratamento"
    ]
  },
  {
    id: 2,
    icon: <FaSmile className="text-4xl text-primary" />,
    title: "Estética Dental",
    description: "Procedimentos estéticos para transformar seu sorriso",
    benefits: [
      "Clareamento dental",
      "Facetas e lentes de contato",
      "Restaurações estéticas",
      "Design de sorriso digital"
    ]
  },
  {
    id: 3,
    icon: <FaRegHospital className="text-4xl text-primary" />,
    title: "Implantes",
    description: "Reposição de dentes perdidos com tecnologia avançada",
    benefits: [
      "Implantes de alta qualidade",
      "Planejamento 3D",
      "Procedimento minimamente invasivo",
      "Recuperação rápida"
    ]
  }
];

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-outfit-regular text-gray-800 mb-4">
            Nossos Serviços
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Oferecemos tratamentos modernos e personalizados para transformar seu sorriso
            com conforto e segurança.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-2xl shadow-lg p-8 cursor-pointer"
              onClick={() => setSelectedService(selectedService === service.id ? null : service.id)}
            >
              <div className="flex items-center justify-between mb-6">
                {service.icon}
                <motion.div
                  animate={{ rotate: selectedService === service.id ? 90 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaArrowRight className="text-primary" />
                </motion.div>
              </div>
              <h3 className="text-2xl font-outfit-regular text-gray-800 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              
              {selectedService === service.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ul className="space-y-2 mt-4">
                    {service.benefits.map((benefit, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-center text-gray-600"
                      >
                        <span className="w-2 h-2 bg-primary rounded-full mr-2" />
                        {benefit}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <button
            className="bg-primary text-white px-8 py-3 rounded-full font-outfit-regular 
            hover:bg-primary/90 transition-colors duration-300 shadow-lg"
          >
            Agende sua Consulta
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services; 