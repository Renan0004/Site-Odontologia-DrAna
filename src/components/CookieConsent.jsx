import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCookieBite } from "react-icons/fa";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Verifica se o usuário já aceitou os cookies
    const hasConsent = localStorage.getItem("cookieConsent");
    
    // Se não houver consentimento, mostra o banner após 2 segundos
    if (!hasConsent) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "true");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "false");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="fixed bottom-4 left-4 right-4 md:max-w-lg md:left-8 bg-white rounded-2xl shadow-xl p-6 z-50"
        >
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <FaCookieBite className="text-3xl text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-outfit-regular text-gray-800 mb-2">
                Nós usamos cookies
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Utilizamos cookies e tecnologias semelhantes para melhorar sua experiência em nosso site.
                Ao clicar em "Aceitar", você concorda com o uso de TODOS os cookies.
                Para mais informações, leia nossa{" "}
                <a
                  href="/privacy"
                  className="text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Política de Privacidade
                </a>
                .
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleAccept}
                  className="px-6 py-2 bg-primary text-white rounded-lg font-outfit-regular 
                  hover:bg-primary/90 transition-colors duration-300"
                >
                  Aceitar todos
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleDecline}
                  className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg font-outfit-regular 
                  hover:bg-gray-300 transition-colors duration-300"
                >
                  Recusar
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent; 