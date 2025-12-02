import { GoogleGenerativeAI } from "@google/generative-ai";

// ------------------------------------------------------------------
// 1. DATOS DEL PORTAFOLIO (Contexto para la IA)
// NOTA: Si ya tienes estos datos en otro archivo (ej: constants.ts),
// impórtalos aquí y borra estas constantes de ejemplo.
// ------------------------------------------------------------------
const RESUME_DATA = {
  name: "Andrés",
  title: "Data Scientist & Economista",
  summary: "Especialista en análisis estadístico, economía y desarrollo territorial.",
  contact: { email: "leonardorubio1998@gmail.com", linkedin: "https://www.linkedin.com/in/andres-lema-r-b21425219/" },
  education: ["Economista", "Master en Data Science"],
  skills: ["Python", "R", "SQL", "React", "Econometría", "Machine Learning"]
};

// Puedes agregar más detalles aquí si tienes variables para EXPERIENCIA o PROYECTOS
const EXPERIENCE = "Experiencia en análisis de datos públicos y modelos económicos.";
const PROJECTS = "Tableros de control en PowerBI, Modelos predictivos en Python.";

// ------------------------------------------------------------------
// 2. CONFIGURACIÓN DEL PROMPT DEL SISTEMA
// ------------------------------------------------------------------
const SYSTEM_PROMPT = `
You are the AI Assistant for ${RESUME_DATA.name}'s portfolio.
Role: Professional, concise, and highlight his skills in Data Science, Economics, and Territorial Development.
If the user asks about something not in the resume, politely say you don't have that information but suggest contacting him directly.

CONTEXT:
Name: ${RESUME_DATA.name}
Title: ${RESUME_DATA.title}
Summary: ${RESUME_DATA.summary}
Contact: ${JSON.stringify(RESUME_DATA.contact)}
Education: ${JSON.stringify(RESUME_DATA.education)}
Experience: ${JSON.stringify(EXPERIENCE)}
Projects: ${JSON.stringify(PROJECTS)}
Skills: ${JSON.stringify(RESUME_DATA.skills)}

Tone: Professional, intelligent, helpful.
Language: Respond in the same language as the user (default to Spanish if unsure).
Keep responses under 100 words.
`;

// ------------------------------------------------------------------
// 3. FUNCIÓN DE ENVÍO
// ------------------------------------------------------------------
export const sendMessageToGemini = async (message: string): Promise<string> => {
  // CORRECCIÓN 1: En Vite usamos import.meta.env
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

  if (!apiKey) {
    console.error("API Key no encontrada. Revisa tu archivo .env.local");
    return "Error de configuración: Falta la API Key.";
  }

  try {
    // Inicializar la librería oficial
    const genAI = new GoogleGenerativeAI(apiKey);
    
    // CORRECCIÓN 2: Usamos el modelo estándar actual "gemini-1.5-flash"
    // y pasamos las instrucciones del sistema en la configuración del modelo
    const model = genAI.getGenerativeModel({ 
      model: "gemini-1.5-flash",
      systemInstruction: SYSTEM_PROMPT
    });

    const result = await model.generateContent(message);
    const response = await result.response;
    const text = response.text();

    return text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Hubo un error al conectar con el asistente de IA. Por favor intenta más tarde.";
  }
};