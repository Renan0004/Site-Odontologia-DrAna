import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const pulseAnimation = {
    scale: [1, 1.1, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <motion.a
      href="https://wa.me/5500000000000"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={[{ scale: 1, opacity: 1 }, pulseAnimation]}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 1
      }}
      className="fixed bottom-8 right-8 z-50 bg-[#25D366] w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
    >
      <FaWhatsapp className="text-white text-3xl" />
      <span className="sr-only">Abrir WhatsApp</span>
      
      {/* Tooltip */}
      <div className="absolute right-full mr-4 bg-white px-4 py-2 rounded-lg shadow-lg invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-opacity whitespace-nowrap">
        <p className="text-sm text-gray-800">Fale conosco no WhatsApp</p>
      </div>
    </motion.a>
  );
};

export default WhatsAppButton; 