
import React from 'react';
import type { Project, Service } from './types';

export const NAV_LINKS = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#contacto', label: 'Contacto' },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Residencia del Valle',
    category: 'Residencial',
    imageUrl: 'https://picsum.photos/seed/project1/800/600',
    description: 'Una villa moderna que combina lujo y naturaleza, con vistas panorámicas y diseño sostenible.',
  },
  {
    id: 2,
    title: 'Torre Corporativa Nexus',
    category: 'Comercial',
    imageUrl: 'https://picsum.photos/seed/project2/800/600',
    description: 'Un hito arquitectónico en el corazón del distrito financiero, diseñado para la colaboración y la innovación.',
  },
  {
    id: 3,
    title: 'Centro Cultural Armonía',
    category: 'Público',
    imageUrl: 'https://picsum.photos/seed/project3/800/600',
    description: 'Espacio multifuncional que fusiona arte, cultura y comunidad bajo un techo de diseño vanguardista.',
  },
  {
    id: 4,
    title: 'Lofts Urbanos "El Refugio"',
    category: 'Residencial',
    imageUrl: 'https://picsum.photos/seed/project4/800/600',
    description: 'Viviendas de estilo industrial que maximizan el espacio y la luz natural en un entorno urbano.',
  },
  {
    id: 5,
    title: 'Hotel Boutique "La Calma"',
    category: 'Hotelería',
    imageUrl: 'https://picsum.photos/seed/project5/800/600',
    description: 'Un oasis de tranquilidad con diseño minimalista, materiales orgánicos y una experiencia de huésped inigualable.',
  },
  {
    id: 6,
    title: 'Plaza del Sol',
    category: 'Urbanismo',
    imageUrl: 'https://picsum.photos/seed/project6/800/600',
    description: 'Revitalización de un espacio público para crear un punto de encuentro dinámico y verde para la ciudad.',
  },
];

const IconBuilding = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-brand-accent mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m-1 4h1m5-8h1m-1 4h1m-1 4h1M9 3v18m6-18v18" />
    </svg>
);
const IconRuler = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-brand-accent mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.828 4.828a1 1 0 011.414 0L8 6.586a1 1 0 010 1.414L6.586 9.414a1 1 0 01-1.414-1.414L4.828 6.586a1 1 0 010-1.414zM16.586 16.586a1 1 0 011.414 0L19.414 18a1 1 0 010 1.414l-1.414 1.414a1 1 0 01-1.414-1.414l1.414-1.414zM18 10.586l-1.414-1.414a1 1 0 01-1.414 0L12 12.586a1 1 0 01-1.414 0L8 10.586a1 1 0 010-1.414L9.414 7.758a1 1 0 011.414 0L12 9.172a1 1 0 011.414 0l1.414-1.414a1 1 0 011.414 0l1.414 1.414a1 1 0 010 1.414L18 10.586z" />
    </svg>
);
const IconLightBulb = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-brand-accent mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
);
const IconCube = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-brand-accent mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
    </svg>
);


export const SERVICES: Service[] = [
    {
        title: 'Diseño Arquitectónico',
        description: 'Creamos proyectos integrales desde la concepción hasta la ejecución, fusionando estética y funcionalidad.',
        icon: <IconBuilding />,
    },
    {
        title: 'Planificación Urbana',
        description: 'Desarrollamos master plans y proyectos urbanísticos que transforman ciudades y mejoran la calidad de vida.',
        icon: <IconRuler />,
    },
    {
        title: 'Diseño de Interiores',
        description: 'Diseñamos espacios interiores que reflejan la identidad de nuestros clientes, cuidando cada detalle.',
        icon: <IconLightBulb />,
    },
    {
        title: 'Visualización y Renders 3D',
        description: 'Transformamos ideas en imágenes fotorrealistas que permiten visualizar el proyecto antes de su construcción.',
        icon: <IconCube />,
    },
];
