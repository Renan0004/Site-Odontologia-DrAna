import { motion } from "framer-motion";
import { useState } from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Maria Silva",
    image: "/images/testimonial1.jpg",
    role: "Paciente Ortodontia",
    stars: 5,
    text: "Minha experiência com a Dra. Ana foi incrível! O tratamento ortodôntico transformou meu sorriso e minha autoestima. A equipe é muito atenciosa e profissional."
  },
  {
    id: 2,
    name: "João Santos",
    image: "/images/testimonial2.jpg",
    role: "Paciente Implantes",
    stars: 5,
    text: "Excelente profissional! Realizei implantes dentários e o resultado superou minhas expectativas. Ambiente acolhedor e tratamento humanizado."
  },
  {
    id: 3,
    name: "Ana Oliveira",
    image: "/images/testimonial3.jpg",
    role: "Paciente Estética",
    stars: 5,
    text: "As lentes de contato dental mudaram completamente meu sorriso. A Dra. Ana é muito dedicada e perfeccionista. Recomendo a todos!"
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-outfit-regular text-gray-800 mb-4">
            O que nossos pacientes dizem
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Confira os depoimentos de quem já transformou seu sorriso conosco
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -5 }}
                className={`bg-white rounded-2xl p-8 shadow-lg relative ${
                  activeIndex === index ? "border-2 border-primary" : ""
                }`}
                onClick={() => setActiveIndex(index)}
              >
                <div className="absolute -top-4 left-8">
                  <FaQuoteLeft className="text-4xl text-primary/20" />
                </div>

                <div className="flex items-center mb-6 mt-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-xl font-outfit-regular text-gray-800">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>

                <div className="flex mb-4">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400" />
                  ))}
                </div>

                <p className="text-gray-600 leading-relaxed">{testimonial.text}</p>

                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: activeIndex === index ? 1 : 0 }}
                  className="absolute -bottom-3 right-8 bg-primary text-white p-2 rounded-full"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="https://g.page/your-clinic"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-primary px-8 py-3 rounded-full font-outfit-regular 
            border-2 border-primary hover:bg-primary hover:text-white transition-colors duration-300"
          >
            Ver mais avaliações no Google
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials; 