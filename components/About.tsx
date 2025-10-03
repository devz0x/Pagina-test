
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="nosotros" className="py-20 lg:py-32 bg-brand-gray">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Nuestra <span className="text-brand-accent">Filosofía</span>
            </h2>
            <p className="mb-4 text-brand-light/80">
              Arquitectura Sanchiz es un estudio creativo dedicado a la excelencia en el diseño. Creemos que la arquitectura tiene el poder de mejorar vidas, conectar comunidades y respetar el entorno. Cada proyecto es una oportunidad única para innovar y crear espacios significativos.
            </p>
            <p className="text-brand-light/80">
              Nuestro enfoque se basa en una colaboración estrecha con nuestros clientes, entendiendo sus visiones y necesidades para traducirlas en soluciones arquitectónicas que son a la vez bellas, funcionales y sostenibles.
            </p>
          </div>
          <div className="order-1 lg:order-2">
            <img 
              src="https://picsum.photos/seed/about/800/700" 
              alt="Equipo de Arquitectura Sanchiz" 
              className="w-full h-auto object-cover" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
