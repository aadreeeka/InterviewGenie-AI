// chatSession.ts
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: import.meta.env.VITE_GEMINI_API_KEY!, // make sure you set this in .env
});

const model = "gemini-2.0-flash";

export async function chatSession(prompt: string) {
  const response = await ai.models.generateContent({
    model,
    contents: [
      {
        role: "user",
        parts: [{ text: prompt }],
      },
    ],
  });

  const text = response.candidates?.[0]?.content?.parts?.[0]?.text ?? "";
    return text;
}


 
  