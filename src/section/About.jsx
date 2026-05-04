import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiJavascript, SiExpress, SiMysql, SiTailwindcss } from "react-icons/si";

export default function About() {
  const techs = [
    { name: "React", icon: <FaReact /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Express", icon: <SiExpress /> },
    { name: "SQL", icon: <SiMysql /> },
    { name: "Tailwind", icon: <SiTailwindcss /> },
  ];

  return (
    <section
      id="about"
      className="bg-gray-900 text-white py-20 px-4"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Título */}
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold">
            Sobre mí
          </h2>
          <div className="w-16 h-1 bg-green-400 mt-2 mx-auto md:mx-0 rounded"></div>
        </div>

        {/* Contenido */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          
          {/* Texto */}
          <div>
            <p className="text-gray-300 mb-6">
              Soy Gonzalo Pastorino, estudiantes de Lic. Informática en la UNLP y desarrollador Full Stack enfocado en crear
              aplicaciones web modernas, rápidas y escalables. Me apasiona
              transformar ideas en productos reales con buen diseño y
              rendimiento.
            </p>

            <p className="text-gray-400 mb-6">
              Trabajo principalmente con tecnologías del ecosistema JavaScript,
              construyendo interfaces dinámicas y APIs robustas. Siempre busco
              mejorar mis habilidades y mantenerme actualizado.
            </p>

            <p className="text-gray-400">
              Actualmente estoy buscando oportunidades donde pueda aportar valor,
              seguir aprendiendo y crecer como desarrollador.
            </p>
          </div>

          {/* Tecnologías PRO */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {techs.map((tech) => (
              <div
                key={tech.name}
                className="group bg-gray-800 p-4 rounded-lg flex flex-col items-center gap-2 hover:bg-gray-700 transition transform hover:scale-105"
              >
                <div className="text-3xl text-green-400 group-hover:rotate-12 transition">
                  {tech.icon}
                </div>
                <span className="text-sm text-gray-300">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}