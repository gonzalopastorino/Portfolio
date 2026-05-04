import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white fixed w-full top-0 left-0 z-50 shadow-md">
      
      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center relative z-50">
        
        {/* Logo */}
        <h1 className="text-xl font-bold font-mono">
          <span className="text-gray-400">&lt;</span>
          <span className="text-green-400">Gonzalo Pastorino</span>
          <span className="text-gray-400">/&gt;</span>
        </h1>

        {/* Links desktop */}
        <ul className="hidden md:flex gap-6">
          <li><a href="#home" className="hover:text-gray-400 transition">Inicio</a></li>
          <li><a href="#about" className="hover:text-gray-400 transition">Sobre mí</a></li>
          <li><a href="#projects" className="hover:text-gray-400 transition">Proyectos</a></li>
          <li><a href="#contact" className="hover:text-gray-400 transition">Contacto</a></li>
        </ul>

        {/* Botón hamburguesa */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Menú mobile */}
      <div
        className={`md:hidden bg-gray-800 transition-all duration-300 relative z-50 ${
          open ? "max-h-60 py-4" : "max-h-0 overflow-hidden"
        }`}
      >
        <ul className="flex flex-col items-center gap-4">
          <li><a href="#home" onClick={() => setOpen(false)}>Inicio</a></li>
          <li><a href="#about" onClick={() => setOpen(false)}>Sobre mí</a></li>
          <li><a href="#projects" onClick={() => setOpen(false)}>Proyectos</a></li>
          <li><a href="#contact" onClick={() => setOpen(false)}>Contacto</a></li>
        </ul>
      </div>
    </nav>
  );
}