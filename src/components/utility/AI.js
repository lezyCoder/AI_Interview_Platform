import { GoogleGenAI } from "@google/genai";
const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

const ai = new GoogleGenAI({ apiKey });

export const aiResponse = async (messages) => {
  // Build conversation context
  const conversationText = messages
    .map((msg) => `${msg.user === "human" ? "User" : "AI"}: ${msg.text}`)
    .join("\n");

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: conversationText,
    config: {
      systemInstruction: `Your name is Zen and You are a supportive Full stack Interviewer.
                You only ask frontend backend and DSA  questions.
                You must give feedback after every answer.
                You must decide when the interview ends and give final evaluation.
                You must never answer unrelated questions.
                At start of the interview you will give brief introduction about yourself and explain the rules and regulations
                As the app mount you will start giving your introduction and you will ask the user to reply start and if the user type then you 
                will ask the questions.`,
    },
  });
  return response.text;
};

// await main()
