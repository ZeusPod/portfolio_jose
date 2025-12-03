import React, { useState } from 'react';

const Topbar = () => {
  // Estado para controlar el menú en móviles (opcional, pero recomendado)
  const [isOpen, setIsOpen] = useState(false);

  return (
    // 'sticky top-0 z-50': Mantiene la barra fija arriba al hacer scroll
    <header className="sticky top-0 z-50 w-full bg-indigo-950 shadow-md">

      {/* Contenedor principal centrado y con límites */}
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center">

        {/* --- LOGO --- */}
        <div className="text-2xl font-bold text-blue-600 cursor-pointer hover:text-blue-700 transition">
         
        </div>

        {/* --- MENÚ DE ESCRITORIO (Hidden en móvil) --- */}
        <div className="hidden md:flex space-x-8 items-center">
          <a href="#hero" className="text-gray-600 hover:text-blue-600 font-medium transition duration-300">
            Inicio
          </a>
          <a href="#stack" className="text-gray-600 hover:text-blue-600 font-medium transition duration-300">
            Stack
          </a>
          <a href="#experience" className="text-gray-600 hover:text-blue-600 font-medium transition duration-300">
            Experience
          </a>
        </div>

        {/* --- BOTÓN HAMBURGUESA (Solo visible en móvil) --- */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-600 focus:outline-none"
          >
            {/* Ícono simple de menú (SVG) */}
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* --- MENÚ MÓVIL DESPLEGABLE --- */}
      {/* Se muestra solo si isOpen es true y estamos en móvil */}
      {isOpen && (
        <div className="md:hidden bg-gray-50 border-t p-4 flex flex-col space-y-3 shadow-inner">
          <a href="#hero" className="block text-gray-600 hover:text-blue-600 font-medium">Inicio</a>
          <a href="#stack" className="block text-gray-600 hover:text-blue-600 font-medium">Stack</a>
          <a href="#experience" className="block text-gray-600 hover:text-blue-600 font-medium">Experiencia</a>
        </div>
      )}
    </header>
  );
};

export default Topbar;
