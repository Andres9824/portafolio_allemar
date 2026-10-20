import { Certification, Education, Experience, Project, Skill } from './types';
import profileImg from './assets/perfil.jpeg';

export const PROFILE_IMAGE_URL = profileImg;

export const RESUME_DATA = {
  name: "Andrés Leonardo Lema Rubio",
  shortName: "Andrés Lema",
  title: "Economista",
  tagline: "Datos para decidir sobre el territorio.",
  contact: {
    email: "leonardorubio1998@gmail.com",
    phone: "+593 98 635 7872",
    whatsapp: "https://wa.me/593986357872",
    location: "Quito, Ecuador",
    github: "https://github.com/Andres9824",
    githubUser: "Andres9824"
  },
  summary: "Economista especializado en Ciencia de Datos y Desarrollo Territorial, con experiencia en herramientas de planificación. Transformo grandes volúmenes de información socioeconómica y espacial en decisiones estratégicas mediante Python, SQL y herramientas avanzadas de visualización como Power BI.",
  highlights: [
    { value: "1.er lugar", label: "Ensayo «Big Data e IA», FLACSO 2024" },
    { value: "Becario", label: "de excelencia, Maestría FLACSO" },
    { value: "Desde 2024", label: "en consultorías para GAD municipales" }
  ],
  languages: [
    { name: "Español", level: "Nativo" },
    { name: "Inglés", level: "Intermedio" }
  ]
};

export const EXPERIENCE: Experience[] = [
  {
    id: "mpc-riesgos",
    role: "Analista de Datos Espaciales",
    company: "MPC Consultores",
    client: "GAD Municipal de Antonio Ante",
    location: "Antonio Ante, Ecuador",
    periods: ["Mar – May 2026"],
    type: "Consultoría",
    description: [
      "Elaboré el análisis de exposición y vulnerabilidad territorial para el Plan Integral de Gestión de Riesgos del cantón Antonio Ante.",
      "Calculé los niveles de riesgo ante movimientos en masa, inundaciones, sequía y peligro volcánico a escala cantonal.",
      "Estimé los daños y pérdidas económicas potenciales frente a movimientos en masa e inundaciones.",
      "Estructuré y validé las bases de datos viales, catastrales, de equipamientos y servicios básicos, y su cruce con los riesgos."
    ]
  },
  {
    id: "meval-vilageliu",
    role: "Analista de Datos",
    company: "MEVAL Consultores",
    location: "Antonio Ante, Ecuador",
    periods: ["Mar – Abr 2026"],
    type: "Por proyecto",
    description: [
      "Estructuré y validé la base de datos de patologías estructurales para la renovación patrimonial de la casa Vilageliu.",
      "Automaticé con Python la generación de reportes técnicos y fichas para cada ambiente del inmueble, optimizando los tiempos de entrega del diagnóstico."
    ]
  },
  {
    id: "meval",
    role: "Analista de Datos",
    company: "MEVAL Consultores",
    location: "Quito y Rumiñahui, Ecuador",
    periods: ["Sep – Nov 2025", "Ago – Oct 2024"],
    type: "Por proyecto",
    description: [
      "Estructuré y validé el levantamiento de bases de datos sobre patologías estructurales para proyectos de renovación patrimonial.",
      "Desarrollé scripts en Python para automatizar la generación de fichas técnicas por cada ambiente de los inmuebles."
    ]
  },
  {
    id: "cotacachi",
    role: "Analista de Datos y Cartografía",
    company: "5 SENTIDOSCOM S.A.",
    client: "GAD Municipal de Cotacachi",
    location: "Cotacachi, Ecuador",
    periods: ["Sep 2024 – Ene 2025"],
    type: "Consultoría",
    description: [
      "Desarrollé e implementé un dashboard en Power BI para consultar la información del Plan de Uso y Gestión del Suelo (PUGS) del cantón.",
      "Audité y depuré la base de datos IPRUS para la delimitación de polígonos de intervención territorial.",
      "Sistematicé la generación de fichas técnicas para cada polígono según los requerimientos del municipio."
    ]
  },
  {
    id: "antonio-ante",
    role: "Analista de Datos y Cartografía",
    company: "MPC Consultores",
    client: "GAD Municipal de Antonio Ante",
    location: "Antonio Ante, Ecuador",
    periods: ["May – Ago 2024"],
    type: "Consultoría",
    description: [
      "Diseñé dashboards en Power BI para el análisis del sector textil y la actualización del PUGS.",
      "Procesé datos geoespaciales catastrales con Python (GeoPandas) y software GIS, mejorando la precisión de la cartografía cantonal.",
      "Elaboré las fichas técnicas de cada polígono de intervención territorial.",
      "Estandaricé la clasificación de usos de suelo aplicando la normativa CIIU 4.0."
    ]
  },
  {
    id: "ruminahui",
    role: "Analista Estadístico",
    company: "5 SENTIDOSCOM S.A.",
    client: "GAD Municipal de Rumiñahui",
    location: "Rumiñahui, Ecuador",
    periods: ["Ene – Ago 2024"],
    type: "Consultoría",
    description: [
      "Ejecuté el análisis estadístico y cartográfico de la consultoría del PUGS, integrando variables demográficas, socioeconómicas y territoriales.",
      "Recopilé y depuré los datos del IPRUS para generar las fichas de cada polígono de intervención territorial.",
      "Estandaricé la clasificación de usos de suelo aplicando la normativa CIIU 4.0."
    ]
  },
  {
    id: "ieps",
    role: "Analista Financiero y Asesoría en Planes de Negocio",
    company: "Instituto Nacional de Economía Popular y Solidaria",
    location: "Zona 1, Ecuador",
    periods: ["Mar – Jun 2022"],
    type: "Pasantía",
    description: [
      "Realicé el diagnóstico financiero de las organizaciones de la economía popular y solidaria (OEPS) de la zona 1.",
      "Elaboré planes de negocio para postular a fondos no reembolsables a favor de las OEPS.",
      "Dicté capacitaciones en educación financiera y proyectos para actores de la EPS."
    ]
  },
  {
    id: "san-francisco",
    role: "Encuestador",
    company: "Corporación San Francisco",
    location: "Imbabura, Ecuador",
    periods: ["Mar – Abr 2022"],
    type: "Levantamiento de campo",
    description: [
      "Levanté información socioeconómica de habitantes rurales de Imbabura para el plan de fomento de la red de productores y recolectores de guarango y la restauración del bosque seco andino."
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "sercop",
    title: "Detección de colusión en compras públicas",
    context: "Proyecto de investigación y tesis · SERCOP",
    date: "En desarrollo",
    description: [
      "Algoritmo de clusterización no supervisada para detectar patrones de colusión y manipulación de ofertas en subastas inversas electrónicas del Ecuador.",
      "Pipeline ETL en Databricks con Python (Pandas, NumPy) para la ingesta y transformación masiva de datos abiertos en JSON desde SERCOP.",
      "Modelo de IA entrenado con documentación de SERCOP y Contraloría para detectar irregularidades en la calificación de oferentes.",
      "Resultado: una metodología automatizada para auditar y alertar sobre anomalías en la contratación pública."
    ],
    tech: ["Databricks", "Python", "ETL", "Clustering", "NLP"],
    links: [{ label: "GitHub", url: "https://github.com/Andres9824" }]
  },
  {
    id: "poverty-ml",
    title: "Análisis de pobreza mediante Machine Learning",
    context: "Especialización en Política, Análisis de Redes y Big Data · FLACSO Ecuador",
    date: "Mayo 2024",
    award: "Primer lugar · Concurso de ensayos «Big Data e IA en la sociedad contemporánea»",
    description: [
      "Entrené modelos de Machine Learning para identificar los determinantes multidimensionales de la pobreza en la provincia de Imbabura, integrando fuentes de datos socioeconómicos.",
      "Investigación reconocida por su enfoque innovador en el uso de IA aplicada a las ciencias sociales."
    ],
    tech: ["Python", "Scikit-learn", "Pandas", "Investigación"]
  }
];

export const SKILLS: Skill[] = [
  {
    category: "Procesamiento de datos",
    items: ["Python (Pandas, NumPy, Scikit-learn)", "R / RStudio", "SQL (PostgreSQL, MySQL)", "Stata", "Databricks", "Google Colab", "IA aplicada a texto"]
  },
  {
    category: "Análisis espacial",
    items: ["GeoPandas", "Software GIS", "Cartografía cantonal", "Gestión de riesgos", "PUGS e IPRUS", "CIIU 4.0"]
  },
  {
    category: "Visualización",
    items: ["Power BI", "Tableau", "Microsoft Excel"]
  },
  {
    category: "Herramientas",
    items: ["Linux", "PowerShell", "Visual Studio Code", "Spyder", "Git"]
  }
];

export const EDUCATION: Education[] = [
  {
    degree: "Maestría en Economía del Desarrollo",
    institution: "FLACSO Sede Ecuador",
    period: "Oct 2024 – actualidad",
    note: "Becario de excelencia"
  },
  {
    degree: "Economista",
    institution: "Universidad Técnica del Norte, Ibarra",
    period: "2019 – 2023"
  }
];

export const CERTIFICATIONS: Certification[] = [
  { name: "Datos Abiertos para contar Historias", issuer: "Fundación Datalat", date: "Abr 2026" },
  { name: "Introducción a la IA aplicada a las Ciencias Sociales", issuer: "FLACSO Ecuador", date: "Jun 2025" },
  { name: "Introducción a la Programación usando Python", issuer: "FLACSO Ecuador", date: "Jun 2025" },
  { name: "Programa de Capacitación en Estado Abierto", issuer: "Fundación Ciudadanía y Desarrollo", date: "Feb 2024" },
  { name: "Gobernanza de Datos", date: "Ene 2024" },
  { name: "IBM Data Science", issuer: "IBM", date: "Ago 2023" },
  { name: "AWS Data Visualization", issuer: "Amazon" }
];
