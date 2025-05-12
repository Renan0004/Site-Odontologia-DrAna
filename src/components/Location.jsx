import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhone, FaWhatsapp, FaClock, FaEnvelope } from "react-icons/fa";

const Location = () => {
  return (
    <section id="location" className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl font-outfit-regular text-gray-800 mb-2">
            Nossa <span className="text-primary">Localização</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Venha nos visitar! Estamos em uma localização privilegiada e de fácil acesso
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Mapa */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden shadow-xl h-[350px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.356219020248!2d-43.18159708503453!3d-22.906449785015005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDU0JzIzLjIiUyA0M8KwMTAnNDQuMiJX!5e0!3m2!1spt-BR!2sbr!4v1629299007745!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>

          {/* Informações de Contato */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {/* Endereço e Horário */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white rounded-xl p-4 shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-primary/10 rounded-full">
                    <FaMapMarkerAlt className="text-xl text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-outfit-regular text-gray-800">Endereço</h3>
                    <p className="text-sm text-gray-600">Rua Exemplo, 123 - Bairro<br />Cidade - Estado</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-4 shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-primary/10 rounded-full">
                    <FaClock className="text-xl text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-outfit-regular text-gray-800">Horário</h3>
                    <p className="text-sm text-gray-600">Seg-Sex: 8h às 18h<br />Sáb: 8h às 12h</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contatos */}
            <div className="grid grid-cols-2 gap-4">
              <motion.a
                href="tel:+5511999999999"
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-xl p-4 shadow-lg flex items-center space-x-3"
              >
                <div className="p-2 bg-primary/10 rounded-full">
                  <FaPhone className="text-lg text-primary" />
                </div>
                <div>
                  <h3 className="text-base font-outfit-regular text-gray-800">Telefone</h3>
                  <p className="text-sm text-gray-600">(11) 99999-9999</p>
                </div>
              </motion.a>

              <motion.a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-xl p-4 shadow-lg flex items-center space-x-3"
              >
                <div className="p-2 bg-primary/10 rounded-full">
                  <FaWhatsapp className="text-lg text-primary" />
                </div>
                <div>
                  <h3 className="text-base font-outfit-regular text-gray-800">WhatsApp</h3>
                  <p className="text-sm text-gray-600">(11) 99999-9999</p>
                </div>
              </motion.a>
            </div>

            {/* Email */}
            <motion.a
              href="mailto:contato@draanalinhares.com.br"
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-xl p-4 shadow-lg flex items-center space-x-3"
            >
              <div className="p-2 bg-primary/10 rounded-full">
                <FaEnvelope className="text-lg text-primary" />
              </div>
              <div>
                <h3 className="text-base font-outfit-regular text-gray-800">E-mail</h3>
                <p className="text-sm text-gray-600">contato@draanalinhares.com.br</p>
              </div>
            </motion.a>

            {/* Botão Como Chegar */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              className="w-full bg-primary text-white py-3 rounded-full font-outfit-regular 
              hover:bg-primary/90 transition-colors duration-300 shadow-lg flex items-center justify-center space-x-2"
            >
              <FaMapMarkerAlt className="text-lg" />
              <span>Como Chegar</span>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Location; 