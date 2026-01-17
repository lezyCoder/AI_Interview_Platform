import { useState } from "react";
import Navbar from "./Navbar";
import { GoogleGenAI } from "@google/genai";
import { useEffect } from "react";

const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_KEY;

const ChatScreen = () => {
  const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

  const [userResponse, setUserResponse] = useState("");

  // Handling the user response
  const handleSendUserResponse = (e) => {
    e.preventDefault();
    console.log(userResponse);
    
    // Reset
    setUserResponse("");
  };

  async function main() {
    try {
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: "What is pagination in react",
      });
      console.log(response.text);
    } catch (err) {
      console.log(err);
    }
  }

  // main();
  return (
    <div className="flex flex-col flex-1 ">
      <Navbar />

      {/* Chat area */}
      <div className="flex-1 overflow-y-auto  ">
        <div className="chat-screen bg-gray-800 min-h-full w-full p-2">
          <div className="chat-container p-2">
            <div className="chat-bubbles flex flex-col gap-y-4">
              <div className="ai flex justify-start w-full border border-gray-700 rounded   ">
                <p className="p-2">Hello</p>
              </div>
              <div className="user flex justify-end border border-gray-700 rounded   ">
                <p className="p-2 ">Hello</p>{" "}
              </div>
              <div className="ai flex justify-start w-full">
                <p className="p-2 w-fit  rounded  ">How are you ?</p>
              </div>
              <div className="user flex justify-end w-full">
                <p>I am good </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Input bar */}

      <div className="bg-base-500 p-2">
        <div className="flex justify-center">
          <form
            className="flex items-center gap-2 w-full max-w-2xl"
            onSubmit={(e) => handleSendUserResponse(e)}>
            <textarea
              className="flex-1 resize-none outline-none border rounded-full px-4 py-2 overflow-hidden"
              rows={1}
              placeholder="Ask Anything"
              value={userResponse}
              onChange={(e) => setUserResponse(e.target.value)}
            />
            <button className="px-4 py-2 border rounded-full">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChatScreen;
