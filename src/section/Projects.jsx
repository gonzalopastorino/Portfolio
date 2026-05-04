import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      title: "Sistema de Historiales Médicos",
      description:
        "Aplicación web orientada a médicos que facilita la gestión de historias clínicas, permitiendo registrar pacientes, almacenar sus datos y acceder a un panorama claro y eficiente de la atención diaria. Este proyecto fue desarrollado como trabajo final de una diplomatura Full Stack.",
      image: process.env.PUBLIC_URL + "/projects/HistoriasMedicas.jpg",
      tech: ["React", "Node", "MongoDB", "Bootstrap"],
      github: "https://github.com/gonzalopastorino/HistorialMedico",
    },
    {
      title: "Portfolio Web",
      description:
        "Portfolio moderno con animaciones, diseño responsive y buenas prácticas de desarrollo.",
      image: process.env.PUBLIC_URL + "/projects/portfolio.jpg",
      tech: ["React", "Tailwind"],
      github: "https://github.com/",
    },
  ];

  return (
    <section
      id="projects"
      className="bg-white dark:bg-gray-900 text-black dark:text-white py-20 px-4 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto">

        {/* TITULO */}
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold">
            Proyectos
          </h2>
          <div className="w-16 h-1 bg-green-400 mt-2 mx-auto md:mx-0 rounded"></div>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden shadow-lg"
            >

              {/* IMAGEN */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover transition duration-500 group-hover:scale-110"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-end p-6">

                {/* INFO */}
                <h3 className="text-xl font-semibold text-green-400 mb-2">
                  {project.title}
                </h3>

                <p className="text-gray-300 text-sm mb-3">
                  {project.description}
                </p>

                {/* TECH */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-green-400/20 text-green-400 px-2 py-1 text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* LINKS */}
                <div className="flex gap-4 text-lg">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-green-400 transition"
                  >
                    <FaGithub />
                  </a>

                  {/* (Opcional) Demo */}
                  {/* 
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-green-400 transition"
                  >
                    <FaExternalLinkAlt />
                  </a>
                  */}
                </div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}