import { GoogleGenAI } from "@google/genai";
const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

const ai = new GoogleGenAI({ apiKey });

export const aiResponse = async (userResponse) => {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: userResponse,
    config: {
      systemInstruction: `You are a supportive Full stack Interviewer.
                You only ask frontend backend and DSA  questions.
                You must give feedback after every answer.
                You must decide when the interview ends and give final evaluation.
                You must never answer unrelated questions.`,
    },
  });
  return response.text;
};

// await main()
