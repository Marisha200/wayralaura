import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, Type } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Lazy-initialize Gemini SDK
  let aiClient: GoogleGenAI | null = null;
  function getGeminiClient(): GoogleGenAI | null {
    if (!aiClient) {
      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        console.warn("WARNING: GEMINI_API_KEY is not defined. The wellness companion feature will use lovely offline guidance fallback.");
        return null;
      }
      aiClient = new GoogleGenAI({
        apiKey,
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build',
          }
        }
      });
    }
    return aiClient;
  }

  // --- API Routes ---
  
  // API route for Camino Wayra's wellness guide (Oráculo de Autoconocimiento)
  app.post("/api/wayra/consult", async (req, res) => {
    try {
      const { mood, context } = req.body;
      if (!mood) {
        return res.status(400).json({ error: "El estado de ánimo (mood) es requerido." });
      }

      const client = getGeminiClient();
      if (!client) {
        // Fallback response with beautiful, handcrafted guides if API KEY is missing
        const offlineFallbacks: Record<string, { message: string, ritual: string, journalPrompt: string }> = {
          ansiedad: {
            message: "Respira hondo. Camino Wayra te recuerda que la ansiedad es solo viento fuerte en la superficie. En tu centro, la calma permanece intacta. Permítete pausar un momento sin exigirte resolver todo hoy.",
            ritual: "Enciende una vela, coloca tus manos sobre el pecho y siente el latido de tu corazón. Inhala en 4 tiempos, sostén en 4 y exhala bajando los hombros en 6.",
            journalPrompt: "¿Qué control estás queriendo sostener hoy que podrías soltar, entregándoselo a tu propia sabiduría interna?"
          },
          cansancio: {
            message: "Descansar no es un premio por haber sido productiva, el descanso es un derecho sagrado de tu cuerpo y de tu alma. Wayra te abraza en tu vulnerabilidad.",
            ritual: "Prepara una infusión tibia. Bebe sintiendo cada trago, acariciando la taza con ambas manos y dando gracias a tu cuerpo por todo su esfuerzo de hoy.",
            journalPrompt: "¿De qué estás cansada realmente hoy? ¿De hacer demasiado, o de sostener emociones que no expresas?"
          },
          transicion: {
            message: "Los cambios a veces se sienten desordenados o temerosos, pero estás mudando de piel de forma orgánica. Confía en el viento (Wayra) que despeja el cielo.",
            ritual: "Escribe en un papel aquello que sientes que ya cumplió su ciclo. Quémalo de manera segura, o entiérralo bajo una planta para transformarlo en abono.",
            journalPrompt: "Si el miedo a equivocarte no existiera hoy, ¿cuál sería el siguiente paso amoroso que darías en esta transición?"
          },
          busqueda: {
            message: "La búsqueda de tu propósito o bienestar no es una carrera. Las respuestas que necesitas ya se están gestando lentamente en tu silencio.",
            ritual: "Siéntate con los pies descalzos sobre la tierra o el suelo, visualizando raíces doradas que te sostienen mientras dejas ir tus dudas al viento.",
            journalPrompt: "¿Qué parte de ti ha estado esperando a ser escuchada detrás de todo el ruido exterior?"
          }
        };

        const normalMood = mood.toLowerCase().trim();
        const fallback = offlineFallbacks[normalMood] || offlineFallbacks.ansiedad;
        return res.json({
          message: fallback.message,
          ritual: fallback.ritual,
          journalPrompt: fallback.journalPrompt,
          isOfflineFallback: true
        });
      }

      // If Gemini API is active, call gemini-3.5-flash with JSON mode schema
      const prompt = `Un consultante se acerca a "Camino Wayra" (nuestro espacio terapéutico integral de bienestar emocional y autoconocimiento).
Siente: "${mood}".
Contexto o comentario adicional: "${context || 'No especificado'}".

Genera una respuesta en español que transmita una calma inmensa, cobijo estético orgánico y mucha calidez y profesionalismo.
La respuesta debe estar estructurada exactamente bajo el esquema JSON solicitado:
1. "message": Un mensaje terapéutico y poético de 2-3 oraciones que valide lo que siente y le recuerde sus propios recursos internos.
2. "ritual": Un ritual físico o mindfulness sencillo, dulce y concreto que pueda hacer en casa hoy mismo para equilibrar esa energía.
3. "journalPrompt": Una pregunta reflexiva profunda e introspectiva de autoconocimiento para escribir en su diario.`;

      const response = await client.models.generateContent({
        model: "gemini-3.5-flash",
        contents: prompt,
        config: {
          systemInstruction: "Eres la terapeuta fundadora de Camino Wayra, un espacio de sanación integral, bienestar emocional y autoconocimiento. Hablas de forma muy empática, dulce, clara, minimalista, transmitiendo calma profunda y sabiduría orgánica.",
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              message: {
                type: Type.STRING,
                description: "Mensaje terapéutico de calma y validación del estado emocional."
              },
              ritual: {
                type: Type.STRING,
                description: "Ritual práctico o meditación simple y reconfortante para el hogar."
              },
              journalPrompt: {
                type: Type.STRING,
                description: "Pregunta profunda de journaling para auto-indagación."
              }
            },
            required: ["message", "ritual", "journalPrompt"]
          }
        }
      });

      const responseText = response.text ? response.text.trim() : "{}";
      const data = JSON.parse(responseText);
      return res.json(data);

    } catch (error: any) {
      console.error("Error in Camino Wayra consult route:", error);
      return res.status(500).json({ error: "Ocurrió un error al procesar tu consulta con el oráculo." });
    }
  });

  // --- Serve Frontend Application ---
  
  if (process.env.NODE_ENV !== "production") {
    // Vite middleware for development
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // Static assets for production
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[Camino Wayra] Server running on http://localhost:${PORT} in ${process.env.NODE_ENV || 'development'} mode`);
  });
}

startServer();
