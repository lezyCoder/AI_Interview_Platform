import { GoogleGenAI } from "@google/genai";
const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

const ai = new GoogleGenAI({ apiKey });

export const aiResponse = async (userResponse) => {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: userResponse,
  });
  return response.text;
};

// await main()
