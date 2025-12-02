import { Experience, Project, Skill } from './types';
import profileImg from './assets/perfil.jpeg'; 
export const PROFILE_IMAGE_URL = profileImg; 
export const RESUME_DATA = {

  name: "Andrés Leonardo Lema Rubio",
  title: "Economista | Data Science & Desarrollo Territorial",
  contact: {
    email: "leonardorubio1998@gmail.com",
    phone: "(+593) 986357872",
    location: "Quito, Ecuador",
    github: "https://github.com/Andres9824"
  },
  summary: "Economista especializado en Ciencia de Datos y Desarrollo Territorial. Experto en manejo de grandes volumenes de información mediante Python (Pandas, Scikit-learn) y SQL.",
  education: [
    {
      degree: "Maestría en Economía del Desarrollo",
      institution: "FLACSO Sede Ecuador",
      period: "Oct 2024 – Actualidad"
    },
    {
      degree: "Economista",
      institution: "Universidad Técnica del Norte, Ibarra",
      period: "2019 - 2023"
    }
  ]
};

export const EXPERIENCE: Experience[] = [
  {
    id: "meval",
    role: "Analista de Datos",
    company: "MEVAL Consultores",
    location: "Ecuador",
    period: "Ago 2024 – Oct 2024 / Sep 2025 - Nov 2025",
    description: [
      "Estructuré y validé el levantamiento de bases de datos sobre patologías estructurales para proyectos de renovación patrimonial en Quito y Rumiñahui.",
      "Automaticé la generación de reportes técnicos a través de fichas técnicas para cada ambiente de los inmuebles."
    ]
  },
  {
    id: "cotacachi",
    role: "Analista de Datos y Cartografía",
    company: "5 SENTIDOSCOM S.A. (GAD Municipal Cotacachi)",
    location: "Cotacachi, Ecuador",
    period: "Septiembre 2024 - Enero 2025",
    description: [
      "Desarrollé e implementé un dashboard en PowerBI para acceder sencillamente a información del PUGS.",
      "Audité y depuré la base de datos IPRUS para la delimitación de polígonos de intervención territorial.",
      "Sistematicé la generación de fichas técnicas para polígonos de intervención territorial."
    ]
  },
  {
    id: "antonio-ante",
    role: "Analista de Datos y Cartografía",
    company: "MPC Consultores (GAD Municipal Antonio Ante)",
    location: "Antonio Ante, Ecuador",
    period: "Mayo 2024 - Agosto 2024",
    description: [
      "Diseñé e implementé dashboards en Power BI para el análisis del sector textil y actualización del PUGS.",
      "Procesé datos geoespaciales catastrales utilizando Python (Geopandas) y software GIS.",
      "Estandaricé la clasificación de usos de suelo aplicando la normativa CIIU 4.0."
    ]
  },
  {
    id: "ruminahui",
    role: "Analista Estadístico",
    company: "5 SENTIDOSCOM S.A. (GAD Municipal Rumiñahui)",
    location: "Rumiñahui, Ecuador",
    period: "Enero 2024 - Agosto 2024",
    description: [
      "Ejecuté análisis estadístico y cartográfico integrando variables demográficas y territoriales.",
      "Recopilé datos del IPRUS para generar fichas de polígonos de intervención."
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "poverty-ml",
    title: "Análisis de Pobreza mediante Machine Learning",
    category: "Data Science / Research",
    description: "Ganador de la Convocatoria FLACSO (Mayo 2024). Entrené modelos de ML para identificar determinantes multidimensionales de la pobreza en Imbabura, integrando datos socioeconómicos.",
    tech: ["Python", "Scikit-learn", "Pandas", "Research"],
    links: [
      { label: "Ver Proyecto", url: "#" }
    ]
  },
  {
    id: "sercop-risk",
    title: "Detección de Riesgos en Compras Públicas",
    category: "Data Engineering / ETL",
    description: "Desarrollo de algoritmo de Clusterización para detectar colusión en subastas inversas. Pipeline ETL en Databricks ingesta masiva de JSON desde SERCOP.",
    tech: ["Databricks", "Python", "ETL", "Clustering", "JSON"],
    links: [
      { label: "Ver Repositorio", url: "https://github.com/Andres9824" }
    ]
  }
];

export const SKILLS: Skill[] = [
  {
    category: "Procesamiento de Datos",
    items: ["Python", "Pandas", "NumPy", "Scikit-learn", "RStudio", "SQL (PostgreSQL, MySQL)", "Stata", "Databricks"]
  },
  {
    category: "Visualización & GIS",
    items: ["Power BI", "Microsoft Excel", "Geopandas", "Software GIS"]
  },
  {
    category: "Herramientas & Sistemas",
    items: ["Linux", "Powershell", "Git", "GitHub"]
  }
];

export const CERTIFICATIONS = [
  "IBM Data Science (Ago 2023)",
  "Programa de Capacitación en Estado Abierto (Feb 2024)",
  "Gobernanza de Datos (Ene 2024)",
  "Introducción a la Inteligencia Artificial Aplicada a Ciencias Sociales (Jun 2025)"
];