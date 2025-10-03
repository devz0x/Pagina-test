
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contacto" className="py-20 lg:py-32 bg-brand-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Hablemos</h2>
          <p className="text-lg text-brand-light/70 max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente? Nos encantaría escucharlo. Ponte en contacto con nosotros.
          </p>
        </div>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-brand-gray p-8">
                <h3 className="text-2xl font-semibold mb-6 text-brand-light">Información de Contacto</h3>
                <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-accent mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                        <div>
                            <h4 className="font-semibold">Dirección</h4>
                            <p className="text-brand-light/70">Av. Principal 123, Valencia, España</p>
                        </div>
                    </div>
                     <div className="flex items-start space-x-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-accent mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                        <div>
                            <h4 className="font-semibold">Email</h4>
                            <p className="text-brand-light/70">contacto@arquitecturasanchiz.com</p>
                        </div>
                    </div>
                     <div className="flex items-start space-x-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-accent mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                        <div>
                            <h4 className="font-semibold">Teléfono</h4>
                            <p className="text-brand-light/70">+34 123 456 789</p>
                        </div>
                    </div>
                </div>
            </div>
            <form className="bg-brand-gray p-8">
                <div className="space-y-4">
                    <input type="text" placeholder="Tu Nombre" className="w-full bg-brand-dark p-3 text-white placeholder-brand-light/50 focus:outline-none focus:ring-2 focus:ring-brand-accent"/>
                    <input type="email" placeholder="Tu Email" className="w-full bg-brand-dark p-3 text-white placeholder-brand-light/50 focus:outline-none focus:ring-2 focus:ring-brand-accent"/>
                    <textarea placeholder="Tu Mensaje" rows={5} className="w-full bg-brand-dark p-3 text-white placeholder-brand-light/50 focus:outline-none focus:ring-2 focus:ring-brand-accent"></textarea>
                    <button type="submit" className="w-full bg-brand-accent text-brand-dark font-bold py-3 px-8 text-sm uppercase tracking-widest hover:bg-white hover:text-brand-dark transition-all duration-300">
                        Enviar Mensaje
                    </button>
                </div>
            </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
