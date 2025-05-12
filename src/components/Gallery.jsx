import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaCamera } from 'react-icons/fa';

const Gallery = () => {
  const [isImageOpen, setIsImageOpen] = useState(null);

  const galleryItems = [
    {
      id: 1,
      image: '/imagem/RecepcaoModerna.png',
      title: 'Recepção moderna e acolhedora',
      description: 'Ambiente planejado para seu conforto'
    },
    {
      id: 2,
      image: '/imagem/ConsultorioEquipado.png',
      title: 'Consultório equipado',
      description: 'Tecnologia de ponta para seu tratamento'
    },
    {
      id: 3,
      image: '/imagem/SalaProcedimentos.png',
      title: 'Sala de procedimentos',
      description: 'Ambiente estéril e seguro'
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Cabeçalho */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <FaCamera className="text-primary text-3xl" />
            <h2 className="text-4xl font-outfit-regular text-gray-800">
              Nossa <span className="text-primary">Galeria</span>
            </h2>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Conheça nossa estrutura e alguns casos de sucesso
          </p>
        </motion.div>

        {/* Grid de Imagens */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {galleryItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                whileHover={{ scale: 1.02 }}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg cursor-pointer"
                onClick={() => setIsImageOpen(item)}
              >
                <div className="aspect-w-16 aspect-h-12 relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-outfit-regular mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-200">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Modal de Imagem */}
        <AnimatePresence>
          {isImageOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
              onClick={() => setIsImageOpen(null)}
            >
              <motion.div
                initial={{ scale: 0.5 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.5 }}
                className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={isImageOpen.image}
                  alt={isImageOpen.title}
                  className="w-full h-auto"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-2xl font-outfit-regular text-white mb-2">
                    {isImageOpen.title}
                  </h3>
                  <p className="text-gray-200">{isImageOpen.description}</p>
                </div>
                <button
                  onClick={() => setIsImageOpen(null)}
                  className="absolute top-4 right-4 text-white bg-black/50 p-2 rounded-full hover:bg-black/70 transition-colors"
                >
                  <FaTimes className="w-6 h-6" />
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Gallery; 