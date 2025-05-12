import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Sobre */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-outfit-regular mb-6 text-white">
              Dra. Ana Linhares
            </h3>
            <p className="text-white mb-6">
              Especialista em ortodontia e estética dental, dedicada a transformar sorrisos
              e vidas há mais de 10 anos.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-white/80 transition-colors"
              >
                <FaFacebook className="text-2xl" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-white/80 transition-colors"
              >
                <FaInstagram className="text-2xl" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-white/80 transition-colors"
              >
                <FaLinkedin className="text-2xl" />
              </a>
            </div>
          </motion.div>

          {/* Links Rápidos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-outfit-regular mb-6 text-white">Links Rápidos</h3>
            <ul className="space-y-3">
              {[
                { text: "Início", href: "#" },
                { text: "Sobre", href: "#about" },
                { text: "Serviços", href: "#services" },
                { text: "Galeria", href: "#gallery" },
                { text: "Contato", href: "#contact" },
                { text: "Agendamento", href: "#appointment" }
              ].map((link) => (
                <li key={link.text}>
                  <a
                    href={link.href}
                    className="text-white hover:text-white/80 transition-colors"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Tratamentos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-xl font-outfit-regular mb-6 text-white">Tratamentos</h3>
            <ul className="space-y-3">
              {[
                "Ortodontia",
                "Implantes",
                "Clareamento",
                "Lentes de Contato",
                "Restaurações",
                "Harmonização Facial"
              ].map((treatment) => (
                <li key={treatment}>
                  <a
                    href="#services"
                    className="text-white hover:text-white/80 transition-colors"
                  >
                    {treatment}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contato */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h3 className="text-xl font-outfit-regular mb-6 text-white">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-white mt-1" />
                <span className="text-white">
                  Rua Exemplo, 123 - Bairro, Cidade - UF
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <FaPhone className="text-white" />
                <a
                  href="tel:+5500000000000"
                  className="text-white hover:text-white/80 transition-colors"
                >
                  (00) 0000-0000
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <FaEnvelope className="text-white" />
                <a
                  href="mailto:contato@draanalinhares.com.br"
                  className="text-white hover:text-white/80 transition-colors"
                >
                  contato@draanalinhares.com.br
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Linha divisória */}
        <div className="border-t border-white/10">
          <div className="py-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-white text-center md:text-left">
              © {currentYear} Dra. Ana Linhares. Todos os direitos reservados.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-4 text-white">
              <a href="/privacy" className="hover:text-white/80 transition-colors">
                Política de Privacidade
              </a>
              <span>|</span>
              <a href="/terms" className="hover:text-white/80 transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 