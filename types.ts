export interface Experience {
  id: string;
  role: string;
  company: string;
  client?: string;
  location: string;
  periods: string[];
  type: string;
  description: string[];
}

export interface Project {
  id: string;
  title: string;
  context: string;
  date: string;
  award?: string;
  description: string[];
  tech: string[];
  links?: {
    label: string;
    url: string;
  }[];
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  note?: string;
}

export interface Certification {
  name: string;
  issuer?: string;
  date?: string;
}
