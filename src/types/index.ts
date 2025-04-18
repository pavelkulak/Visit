export interface Project {
  id: number;
  title: string;
  description: string;
  stack: string[];
  link?: string;
  web?: string;
}

export interface Experience {
  id: number;
  company: string;
  position: string;
  period: string;
  description: string;
  stack: string[];
}

export interface Education {
  id: number;
  institution: string;
  degree: string;
  period: string;
  description?: string;
}

export interface Skill {
  id: number;
  name: string;
  icon: string;
  level: number;
}

export type Theme = 'dark' | 'light';