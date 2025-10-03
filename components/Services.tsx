
import React from 'react';
import { SERVICES } from '../constants';
import ServiceCard from './ServiceCard';

const Services: React.FC = () => {
  return (
    <section id="servicios" className="py-20 lg:py-32 bg-brand-gray">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Nuestros Servicios</h2>
          <p className="text-lg text-brand-light/70 max-w-2xl mx-auto">
            Ofrecemos un abanico completo de servicios para llevar su proyecto del concepto a la realidad.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
