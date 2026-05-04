export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-transparent text-white flex items-center justify-center px-4 pt-20 overflow-hidden"
    >
      {/*Fondo blur + partículas */}
      <div className="absolute inset-0 z-0">
        
        {/* Gradiente base */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800"></div>

        {/* Partículas */}
        <div className="absolute w-72 h-72 bg-green-400/40 rounded-full blur-3xl top-10 left-10 animate-blob"></div>
        <div className="absolute w-72 h-72 bg-emerald-500/40 rounded-full blur-3xl bottom-10 right-10 animate-blob animation-delay-2000"></div>
        <div className="absolute w-72 h-72 bg-green-300/40 rounded-full blur-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-16 relative z-10">
        
        {/* FOTO */}
        <div className="flex-shrink-0 relative group">
          <img
            src={process.env.PUBLIC_URL + "/imgPerfil.jpeg"}
            alt="Gonzalo Pastorino"
            className="w-56 h-56 md:w-80 md:h-80 rounded-full object-cover object-[center_30%] border-4 border-green-400 transition-transform duration-300 group-hover:scale-105"
          />

          {/* Glow */}
          <div className="absolute inset-0 rounded-full bg-green-400 opacity-20 blur-2xl group-hover:opacity-40 transition duration-300 -z-10"></div>
        </div>

        {/* TEXTO */}
        <div className="text-center md:text-left max-w-xl animate-fade-in-up">
          
          {/* Nombre + Línea */}
          <div className="inline-block mx-auto md:mx-0 mb-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Hola, soy{" "}
              <span className="text-green-400">
                Gonzalo Pastorino
              </span>
              <span className="cursor ml-1">|</span>
            </h1>

            <div className="h-1 rounded w-full mt-2 bg-gradient-to-r from-green-400 to-emerald-600"></div>
          </div>

          {/* Subtítulo */}
          <h2 className="text-xl md:text-2xl text-gray-400 mb-6">
            Desarrollador Full Stack
          </h2>

          {/* Descripción */}
          <p className="text-gray-300 mb-8">
            Construyo aplicaciones web modernas con React, Node.js y bases de datos.
            Me enfoco en crear experiencias rápidas, escalables y con buen diseño.
          </p>

          {/* Botones */}
          <div className="flex flex-col sm:flex-row gap-4 md:justify-start justify-center">
            
            <a
              href="#projects"
              className="bg-green-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-green-300 transition transform hover:scale-105 hover:shadow-lg"
            >
              Ver proyectos
            </a>

            <a
              href="#contact"
              className="border border-gray-500 px-6 py-3 rounded-lg hover:bg-gray-800 transition transform hover:scale-105"
            >
              Contacto
            </a>

          </div>
        </div>
      </div>
    </section>
  );
}