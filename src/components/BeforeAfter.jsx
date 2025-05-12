import { motion } from 'framer-motion';
import { FaTeeth, FaRegSmile } from 'react-icons/fa';

const BeforeAfter = () => {
  return (
    <section id="beforeafter" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <FaTeeth className="text-primary text-3xl" />
            <h2 className="text-4xl font-outfit-regular text-gray-800">
              Transformação do <span className="text-primary">Sorriso</span>
            </h2>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Veja como podemos transformar seu sorriso, eliminando manchas e amarelamento dos dentes
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Lado Esquerdo - Textos */}
            <div className="space-y-8">
              {/* Cards de benefícios */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-primary/5 rounded-xl p-4">
                  <FaTeeth className="text-primary text-2xl mb-2" />
                  <h3 className="font-outfit-regular text-gray-800 text-lg mb-1">Dentes Amarelados?</h3>
                  <p className="text-gray-600 text-sm">Eliminamos manchas e amarelamento</p>
                </div>
                <div className="bg-primary/5 rounded-xl p-4">
                  <FaRegSmile className="text-primary text-2xl mb-2" />
                  <h3 className="font-outfit-regular text-gray-800 text-lg mb-1">Resultado</h3>
                  <p className="text-gray-600 text-sm">Dentes brancos e naturais</p>
                </div>
              </div>

              {/* Texto explicativo */}
              <div className="text-left">
                <p className="text-gray-600 mb-6">
                  Através de técnicas modernas de clareamento, eliminamos o amarelamento 
                  e as manchas dos seus dentes, devolvendo o brilho natural do seu sorriso. 
                  O tratamento é seguro, eficaz e personalizado para cada paciente.
                </p>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  className="bg-primary text-white px-8 py-3 rounded-full font-outfit-regular 
                  hover:bg-primary/90 transition-colors duration-300 shadow-lg flex items-center 
                  gap-2"
                >
                  <FaRegSmile className="text-xl" />
                  Agende seu Clareamento
                </motion.button>
              </div>

              {/* Destaques */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  { number: "98%", text: "Satisfação" },
                  { number: "1000+", text: "Sorrisos Transformados" },
                  { number: "10+", text: "Anos de Experiência" }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white rounded-xl p-4 shadow-lg text-center"
                  >
                    <h3 className="text-2xl font-outfit-regular text-primary mb-1">
                      {stat.number}
                    </h3>
                    <p className="text-gray-600 text-sm">{stat.text}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Lado Direito - Imagem */}
            <div className="relative rounded-xl overflow-hidden shadow-lg">
              <img
                src="/imagem/Antesdepois.png"
                alt="Transformação do sorriso - Antes e Depois"
                className="w-full h-auto"
              />
              
              {/* Labels com ícones */}
              <div className="absolute bottom-4 left-4 bg-black/50 text-white px-4 py-2 rounded-full text-sm backdrop-blur-sm flex items-center gap-2">
                <FaTeeth className="text-lg" />
                Dentes Amarelados
              </div>
              <div className="absolute bottom-4 right-4 bg-primary/80 text-white px-4 py-2 rounded-full text-sm backdrop-blur-sm flex items-center gap-2">
                Dentes Brancos
                <FaRegSmile className="text-lg" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BeforeAfter; 