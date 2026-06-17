import { Service, Testimony, BlogPost, FreeResource } from './types';

// Let's use the local paths of the high-quality assets we generated
export const ASSET_PATHS = {
  hero: "src/assets/images/hero_background_1780527244689.png",
  merienda: "src/assets/images/merienda_ritual_1780527258682.png",
  symbol: "src/assets/images/wayra_symbol_1780527272633.png"
};

export const SERVICES: Service[] = [
  {
    id: "mentoria-grupal",
    title: "Mentoría Grupal: Círculo Sagrado",
    description: "Un viaje colectivo donde compartimos procesos de autodescubrimiento y sanación bajo una atmósfera de contención absoluta.",
    details: [
      "Encuentros virtuales semanales en vivo",
      "Dinámicas corporales, meditación grupal y respiración consciente",
      "Material teórico-práctico de regalo para journaling personal",
      "Comunidad privada de soporte permanente en Telegram",
      "Integración de saberes de psicología transpersonalista"
    ],
    price: "Consultar arancel de preventa",
    modality: "grupal",
    duration: "6 semanas de programa"
  },
  {
    id: "acompanamiento-individual",
    title: "Acompañamiento Individual: Tu Camino de Regreso",
    description: "Espacio terapéutico íntimo y personalizado de exploración emocional profunda para reprogramar patrones y sanar de raíz.",
    details: [
      "Consultas uno a uno via Zoom, adaptadas a tu ritmo",
      "Uso de técnicas integrales (Gestalt, bioneuroemoción, rituales psicomágicos)",
      "Tareas reflexivas personalizadas entre sesiones",
      "Guías de meditación grabadas exclusivamente para tu proceso",
      "Canal de consulta abierto para contención emocional diaria"
    ],
    price: "$25.000 ARS / USD $45 por sesión",
    modality: "individual",
    duration: "60-75 min por sesión"
  },
  {
    id: "merienda-ritual",
    title: "Merienda Ritual Wayra Presencial",
    description: "Una experiencia multisensorial y ritualística presencial que celebra el encuentro físico, el tejer afectos y el pausar la prisa diaria.",
    details: [
      "Encuentro en nuestro jardín zen en Buenos Aires",
      "Ceremonia de hierbas aromáticas y selección de blends botánicos sagrados",
      "Merienda gourmet consciente (pastelería vegana y orgánica)",
      "Dinámicas grupales de descarga emocional, tarot terapéutico y oráculo",
      "Regalo souvenir: blend botánico artesanal y talismán herbal"
    ],
    price: "$18.000 ARS (Cupos muy limitados)",
    modality: "presencial",
    duration: "Sábado por la tarde - 3 horas"
  }
];

export const TESTIMONIALS: Testimony[] = [
  {
    id: "test-1",
    name: "María Clara Benítez",
    role: "Participante de Acompañamiento Individual",
    text: "El espacio que crea Camino Wayra es de una ternura que nunca antes había vivido en terapia. Sentí que por fin podía bajar mis defensas, ser guiada con una delicadeza increíble y comprender mis heridas sin juzgarlas. El oráculo diario cambió mi rutina.",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop"
  },
  {
    id: "test-2",
    name: "Estanislao Ferrero",
    role: "Miembro de la Mentoría Grupal",
    text: "Al principio tenía dudas de compartir en grupo online, pero la calidez orgánica que transmite Camino Wayra te abraza desde el minuto uno. Ver que otros comparten tus mismos dolores te alivia el pecho. Nos convertimos en una verdadera red de luz.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop"
  },
  {
    id: "test-3",
    name: "Valeria Roth",
    role: "Asistente a las Meriendas Rituales",
    text: "La Merienda Ritual fue un punto de inflexión. El sabor del blend casero, las cartas terapéuticas que sacamos con el oráculo y el llanto liberador compartiendo comida rica crearon una medicina inexplicable. Volvería mil veces.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop"
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "el-fluir-de-las-emociones",
    title: "El arte de permitir el viento emocional: Claves para no estancarnos",
    excerpt: "Las emociones son agua en movimiento y viento constante. Descubre cómo darles lugar sin vernos ahogados por su intensidad.",
    category: "Bienestar Emocional",
    date: "Junio 2, 2026",
    readingTime: "4 min lectura",
    content: "En la filosofía de Camino Wayra, entendemos que las emociones son corrientes vitales que necesitan soplar a través de nuestro cuerpo. Cuando reprimimos la tristeza, la ira o incluso la alegría desbordada, creamos diques energéticos que devienen en angustias corporales o dolores mudos.\n\nPara que la emoción sople y fluya libremente, te proponemos tres claves sencillas de autocompasión:\n\n1. **Nombra lo que sientes sin juzgarlo**: Di, en voz alta o baja: 'Siento miedo en mi vientre hoy', en lugar de criticarte por sentir desamparo.\n2. **Habita la sensación física**: Cierra los ojos y localiza dónde reposa esa emoción. ¿Es calor, opresión o un nudo? Deja que esté allí por dos minutos completos mientras respiras profundo.\n3. **Crea una válvula de salida**: Ya sea vertiendo tu emoción en un papel (journaling), bailando libremente o permitiendo que las lágrimas se derramen."
  },
  {
    id: "rituales-de-enraizamiento",
    title: "Cinco minutos para volver a ti: Rituales de enraizamiento y pausa activa",
    excerpt: "Cuando la mente corre a mil por hora, necesitamos anclas físicas para volver al presente. Aquí te enseño tres rituales veloces.",
    category: "Autoconocimiento",
    date: "Mayo 24, 2026",
    readingTime: "5 min lectura",
    content: "La sociedad nos entrena para vivir desconectados del cuello para abajo, proyectados siempre en el futuro. Los rituales de enraizamiento (o grounding) nos ayudan a recuperar el centro y a sintonizar con la calma orgánica.\n\nPrueba estos minutos sagrados en tu rutina:\n\n*   **El Ritual de la Planta**: Toca las hojas de una planta con plena atención. Observa su textura, sus nervaduras y la humedad de la tierra. Agradece mentalmente su respiración silenciosa.\n*   **El Ritual del Agua**: Moja tus muñecas y la nuca con agua fresca cuando sientas saturación mental. Visualiza que el agua arrastra los pensamientos que te pesan.\n*   **La Respiración Wayra**: Haz tres exhalaciones sonoras por la boca abierta, imitando una brisa suave que se lleva el cansancio."
  },
  {
    id: "nuestro-nino-interior",
    title: "Conversaciones pendientes con nuestro niño interno: Un ejercicio escrito",
    excerpt: "Aprende a dialogar con tu pequeña infancia y a sanar el miedo al abandono desde la versión adulta de ti misma.",
    category: "Terapia Transpersonal",
    date: "Mayo 12, 2026",
    readingTime: "6 min lectura",
    content: "Casi todas nuestras respuestas automáticas de defensa actuales (el perfeccionismo, la huida, la complacencia) nacen de heridas infantiles sin cerrar. Cuando de adultos experimentamos rechazo, no es la parte adulta la que reacciona, sino nuestro niño interior asustado.\n\nTe proponemos hacer este pequeño diario de re-conexión emocional:\n\n1.  **Busca una foto de tu infancia**: Mírala con amor durante unos minutos. Nota su postura y sus ojos.\n2.  **Escríbele una carta de puño y letra**: Dile lo que más necesitaba escuchar en sus momentos difíciles (ej. 'Yo estoy contigo hoy', 'No tienes que ser perfecta para que yo te quiera', 'Está bien sentir miedo o timidez').\n3.  **Permítele responder**: Toma el bolígrafo con tu mano no dominante (esto ayuda a que acceda el hemisferio intuitivo y emocional) y deja que ese niño o niña escriba libremente qué necesita de ti hoy."
  }
];

export const FREE_RESOURCES: FreeResource[] = [
  {
    id: "guia-diario-emocional",
    title: "Bitácora Wayra: Cuaderno Imprimible de Sentires Mundanos",
    description: "Un PDF interactivo de 15 páginas diseñado con ejercicios, disparadores de escritura terapéutica, planificador de hábitos reflexivos y meditaciones sugeridas.",
    type: "pdf"
  },
  {
    id: "audio-respiracion-solar",
    title: "Meditación de Alivio Inmediato (Audio Guiado de Respiración)",
    description: "Una práctica auditiva relajante de 10 minutos con música de cuencos y flauta de viento para regular el sistema nervioso y desbloquear la respiración pectoral.",
    type: "audio",
    duration: "10:15 min"
  },
  {
    id: "ejercicio-ritual-soltar",
    title: "Guía Práctica: Ritual de Luna Nueva para Sembrar Intenciones",
    description: "Un compendio de pasos claros, sahumerios sugeridos, cristales afines y fórmulas habladas para sintonizar tus metas con los ritmos de la naturaleza.",
    type: "ejercicio"
  }
];
