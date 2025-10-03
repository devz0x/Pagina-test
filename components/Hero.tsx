
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="h-screen w-full flex items-center justify-center relative">
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: 'url(https://picsum.photos/seed/hero/1920/1080)' }}
      ></div>
      <div className="absolute top-0 left-0 w-full h-full bg-black/60"></div>
      <div className="relative z-10 text-center text-white p-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 leading-tight">
          Diseñando el Futuro, <br /> Construyendo Realidades
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 font-light text-brand-light/90">
          En Arquitectura Sanchiz, transformamos ideas en espacios icónicos que inspiran y perduran.
        </p>
        <a
          href="#proyectos"
          className="bg-brand-accent text-brand-dark font-bold py-3 px-8 text-sm uppercase tracking-widest hover:bg-white hover:text-brand-dark transition-all duration-300"
        >
          Ver Proyectos
        </a>
      </div>
    </section>
  );
};

export default Hero;
