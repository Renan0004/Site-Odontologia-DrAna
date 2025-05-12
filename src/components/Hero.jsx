import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowDown } from 'react-icons/fa';

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center"
      style={{
        backgroundImage: 'url("/imagem/background.jpeg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay gradiente */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />

      <div className="container mx-auto px-4 pt-32 pb-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-6xl font-outfit-regular text-white mb-6"
          >
            Transforme seu <br />
            <span className="text-primary">Sorriso</span> com <br />
            Excelência
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-gray-200 mb-8 max-w-lg"
          >
            Especialista em ortodontia e estética dental, dedicada a criar 
            sorrisos perfeitos com tecnologia avançada e cuidado personalizado.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#appointment"
              className="bg-primary text-white px-8 py-4 rounded-full text-lg font-outfit-regular 
              hover:bg-primary/90 transition-colors duration-300 text-center shadow-lg 
              hover:shadow-primary/20 hover:scale-105 transform"
            >
              Agende sua Consulta
            </a>
            <a
              href="#services"
              className="bg-white/10 text-white px-8 py-4 rounded-full text-lg font-outfit-regular 
              hover:bg-white/20 transition-colors duration-300 text-center backdrop-blur-sm 
              hover:scale-105 transform"
            >
              Conheça os Tratamentos
            </a>
          </motion.div>

          {/* Estatísticas */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-12"
          >
            {[
              { number: "10+", text: "Anos de Experiência" },
              { number: "5000+", text: "Pacientes Atendidos" },
              { number: "98%", text: "Satisfação" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center"
              >
                <h3 className="text-3xl font-outfit-regular text-primary mb-2">
                  {stat.number}
                </h3>
                <p className="text-white text-sm">{stat.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          delay: 1,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
      >
        <FaArrowDown className="text-2xl animate-bounce" />
      </motion.div>
    </section>
  );
};

export default Hero; 