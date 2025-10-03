
import React from 'react';
import type { Service } from '../types';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="bg-brand-dark p-8 text-center flex flex-col items-center transition-all duration-300 hover:bg-brand-gray hover:-translate-y-2">
      {service.icon}
      <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
      <p className="text-brand-light/70 text-sm leading-relaxed">
        {service.description}
      </p>
    </div>
  );
};

export default ServiceCard;
