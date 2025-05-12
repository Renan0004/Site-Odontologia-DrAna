import { motion } from "framer-motion";
import { useState } from "react";
import { FaCalendarAlt, FaUser, FaPhone, FaEnvelope, FaComments } from "react-icons/fa";

const treatments = [
  "Ortodontia",
  "Implantes",
  "Clareamento",
  "Lentes de Contato",
  "Restaurações",
  "Outros"
];

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    treatment: "",
    message: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar o formulário
    console.log("Dados do formulário:", formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section id="appointment" className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl font-outfit-regular text-gray-800 mb-2">
            Agende sua Consulta
          </h2>
          <p className="text-gray-600 text-sm max-w-2xl mx-auto">
            Preencha o formulário abaixo e entraremos em contato para confirmar seu agendamento
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="bg-white rounded-xl shadow-lg p-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="flex items-center text-gray-700 text-sm font-outfit-regular">
                  <FaUser className="mr-2 text-primary text-sm" />
                  Nome completo
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 text-sm rounded-lg border border-gray-300 focus:border-primary 
                  focus:ring-2 focus:ring-primary/20 outline-none transition-colors"
                  placeholder="Digite seu nome"
                />
              </div>

              <div className="space-y-1">
                <label className="flex items-center text-gray-700 text-sm font-outfit-regular">
                  <FaPhone className="mr-2 text-primary text-sm" />
                  Telefone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 text-sm rounded-lg border border-gray-300 focus:border-primary 
                  focus:ring-2 focus:ring-primary/20 outline-none transition-colors"
                  placeholder="(00) 00000-0000"
                />
              </div>

              <div className="space-y-1">
                <label className="flex items-center text-gray-700 text-sm font-outfit-regular">
                  <FaEnvelope className="mr-2 text-primary text-sm" />
                  E-mail
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 text-sm rounded-lg border border-gray-300 focus:border-primary 
                  focus:ring-2 focus:ring-primary/20 outline-none transition-colors"
                  placeholder="seu@email.com"
                />
              </div>

              <div className="space-y-1">
                <label className="flex items-center text-gray-700 text-sm font-outfit-regular">
                  <FaCalendarAlt className="mr-2 text-primary text-sm" />
                  Tratamento de interesse
                </label>
                <select
                  name="treatment"
                  value={formData.treatment}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 text-sm rounded-lg border border-gray-300 focus:border-primary 
                  focus:ring-2 focus:ring-primary/20 outline-none transition-colors"
                >
                  <option value="">Selecione um tratamento</option>
                  {treatments.map(treatment => (
                    <option key={treatment} value={treatment}>
                      {treatment}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-1 md:col-span-2">
                <label className="flex items-center text-gray-700 text-sm font-outfit-regular">
                  <FaComments className="mr-2 text-primary text-sm" />
                  Mensagem (opcional)
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-sm rounded-lg border border-gray-300 focus:border-primary 
                  focus:ring-2 focus:ring-primary/20 outline-none transition-colors h-24 resize-none"
                  placeholder="Digite sua mensagem aqui..."
                />
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="mt-6 w-full bg-primary text-white px-6 py-3 rounded-lg text-sm font-outfit-regular 
              hover:bg-primary/90 transition-colors duration-300 shadow-lg flex items-center justify-center"
            >
              <FaCalendarAlt className="mr-2" />
              Solicitar Agendamento
            </motion.button>

            <p className="text-xs text-gray-500 mt-3 text-center">
              Ao enviar este formulário, você concorda com nossa{" "}
              <a href="/privacy" className="text-primary hover:underline">
                Política de Privacidade
              </a>
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default AppointmentForm; 