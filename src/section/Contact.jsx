import { useState } from "react";
import emailjs from "@emailjs/browser";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);
    setSuccess(false);

    emailjs
      .send(
        "service_gl6bcmo",
        "template_7o0510n",
        {
          name: form.name,
          message: form.message,
          time: new Date().toLocaleString(),
        },
        "ngoHBqLkw24rqAQVN"
      )
      .then(() => {
        setLoading(false);
        setSuccess(true);
        setForm({ name: "", email: "", message: "" });
      })
      .catch(() => {
        setLoading(false);
      });
  };

  return (
    <section id="contact" className="bg-gray-900 text-white py-20 px-4">
      <div className="max-w-6xl mx-auto">

        <div className="mb-12 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold">Contacto</h2>
          <div className="w-16 h-1 bg-green-400 mt-2 mx-auto md:mx-0 rounded"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-10">

          {/* FORMULARIO */}
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-green-400">
              Enviame un mensaje
            </h3>

            <form onSubmit={sendEmail} className="flex flex-col gap-4">

              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                type="text"
                placeholder="Tu nombre"
                className="bg-gray-900 text-white p-3 rounded-lg outline-none focus:ring-2 focus:ring-green-400"
                required
              />

              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                type="email"
                placeholder="Tu email"
                className="bg-gray-900 text-white p-3 rounded-lg outline-none focus:ring-2 focus:ring-green-400"
                required
              />

              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows="5"
                placeholder="Tu mensaje..."
                className="bg-gray-900 text-white p-3 rounded-lg outline-none focus:ring-2 focus:ring-green-400 resize-none"
                required
              />

              <button
                type="submit"
                disabled={loading}
                className="bg-green-500 hover:bg-green-600 transition py-3 rounded-lg font-semibold disabled:opacity-50"
              >
                {loading ? "Enviando..." : "Enviar mensaje"}
              </button>

              {success && (
                <p className="text-green-400 text-sm">
                  ✔ Mensaje enviado correctamente
                </p>
              )}
            </form>
          </div>

          {/* INFO */}
          <div className="flex flex-col justify-center gap-6">

            <div className="bg-gray-800 p-6 rounded-xl flex flex-col gap-3">

              <div className="flex items-center gap-3 text-gray-300">
                <FaEnvelope className="text-green-400" />
                <span>Disponible para oportunidades laborales</span>
              </div>

              <a
                href={process.env.PUBLIC_URL + "/cv-gonzalo-pastorino.pdf"}
                download
                className="bg-green-500 hover:bg-green-600 transition px-4 py-2 rounded-lg font-semibold text-white w-fit"
              >
                📄 Descargar CV
              </a>

            </div>

            <div className="bg-gray-800 p-6 rounded-xl flex gap-4 text-2xl">
              <a
                href="https://github.com/gonzalopastorino"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-400"
              >
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com/in/gonzalopastorino"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-400"
              >
                <FaLinkedin />
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}