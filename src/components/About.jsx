import React from 'react';
import { motion } from 'framer-motion';
import { FaUserMd, FaHospital, FaGraduationCap, FaHeart } from 'react-icons/fa';

const About = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  const staggerContainer = {
    initial: {},
    whileInView: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section id="about" className="py-14 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Imagem */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative max-w-md mx-auto lg:max-w-lg"
          >
            <div className="absolute -inset-4 bg-primary/10 rounded-full blur-2xl" />
            <img
              src="/imagem/DrAnaLinhares.png"
              alt="Dra. Ana Linhares"
              className="relative z-10 w-full h-auto rounded-xl shadow-lg object-cover object-center max-h-[520px]"
            />
          </motion.div>

          {/* Conteúdo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-3xl font-outfit-regular text-gray-800 mb-3">
                Sobre a <span className="text-primary">Dra. Ana Linhares</span>
              </h2>
              <p className="text-gray-600 leading-relaxed text-base">
                Com mais de 10 anos de experiência em odontologia, a Dra. Ana Linhares 
                é especialista em tratamentos estéticos e restauradores. Sua abordagem 
                combina técnicas modernas com um atendimento humanizado, garantindo 
                resultados excepcionais e a satisfação total dos pacientes.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-5">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-xl p-5 shadow-md"
              >
                <FaUserMd className="text-2xl text-primary mb-3" />
                <h3 className="text-lg font-outfit-regular text-gray-800 mb-2">
                  Experiência
                </h3>
                <p className="text-gray-600 text-sm">
                  Mais de uma década transformando sorrisos
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-xl p-5 shadow-md"
              >
                <FaHospital className="text-2xl text-primary mb-3" />
                <h3 className="text-lg font-outfit-regular text-gray-800 mb-2">
                  Infraestrutura
                </h3>
                <p className="text-gray-600 text-sm">
                  Equipamentos modernos e ambiente acolhedor
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-xl p-5 shadow-md"
              >
                <FaGraduationCap className="text-2xl text-primary mb-3" />
                <h3 className="text-lg font-outfit-regular text-gray-800 mb-2">
                  Especialização
                </h3>
                <p className="text-gray-600 text-sm">
                  Constante atualização em técnicas avançadas
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-xl p-5 shadow-md"
              >
                <FaHeart className="text-2xl text-primary mb-3" />
                <h3 className="text-lg font-outfit-regular text-gray-800 mb-2">
                  Cuidado
                </h3>
                <p className="text-gray-600 text-sm">
                  Atendimento humanizado e personalizado
                </p>
              </motion.div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              className="bg-primary text-white px-7 py-2.5 rounded-lg text-base font-outfit-regular 
              hover:bg-primary/90 transition-colors duration-300 shadow-md"
            >
              Conheça Nossos Tratamentos
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 