
import type React from 'react';

export interface Project {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
}

export interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
}
