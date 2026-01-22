import { useContext, useState } from "react";
import Navbar from "./Navbar";
import { nanoid } from "nanoid";
import { aiResponse } from "./utility/AI";
import Markdown from "react-markdown";
import { ChatContext } from '../Context/ChatContext.jsx'

const ChatScreen = () => {
  const [userResponse, setUserResponse] = useState("");
  const [isLoading, setLoading] = useState(false);

  // Get from context
  const { messages, addMessage, createNewChat, currentChatId, allConversations } = useContext(ChatContext);

  const handleSendUserResponse = async (e) => {
    e.preventDefault();

    if (!userResponse.trim()) {
      alert("Type something");
      return;
    }

    // Create new chat if none exists
    if (!currentChatId) {
      createNewChat();
    }

    // User message
    const userMessage = {
      text: userResponse,
      user: "human",
      id: nanoid(),
      timestamp: Date.now()
    };

    addMessage(userMessage);

    const userQuestion = userResponse;
    setUserResponse("");
    setLoading(true);

    const conversationSoFar = [
      ...messages,
      userQuestion
    ];

    // AI Response
    try {
      const AiResponseText = String(await aiResponse(conversationSoFar));
      const aiMessage = {
        text: AiResponseText,
        user: "ai",
        id: nanoid(),
        timestamp: Date.now()
      };
      addMessage(aiMessage);
    } catch (error) {
      const errorMessage = {
        text: "Something went wrong 😢",
        user: "ai",
        id: nanoid(),
        timestamp: Date.now()
      };
      addMessage(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col flex-1">
      {
        allConversations.length > 0 && <Navbar />
      }

      {/* Chat area */}
      {
        allConversations.length === 0 ? <div className=" flex flex-col gap-16 items-center justify-center h-dvh ">
          <h1 className=" lg:text-4xl font-thin md:text-xl">What's up Ready to Start the Interview ?</h1>
          <button className="p-2 outline-none border border-gray-700 rounded hover:bg-base-300 transition cursor-pointe " onClick={createNewChat}>Start Interview </button>
        </div> : <div className="flex-1 overflow-y-auto">
          <div className="chat-screen bg-zinc-900 min-h-full w-full p-2">
            <div className="chat-container p-2">
              <div className="chat-bubbles flex flex-col gap-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex w-full ${message.user === "human" ? "justify-end" : "justify-start"
                      }`}>
                    {message.user === "ai" ? (
                      <div className="p-2 rounded border border-gray-700">
                        <Markdown>{message.text}</Markdown>
                      </div>
                    ) : (
                      <p className="p-2 rounded border border-gray-700">
                        {message.text}
                      </p>
                    )}
                  </div>
                ))}

                {isLoading && (
                  <div className="flex justify-start w-full">
                    <p className="p-2 rounded border border-gray-700 italic text-gray-400 animate-pulse">
                      AI is thinking...
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      }

      {/* Input bar */}
      {
        allConversations.length > 0 && <div className="p-4 bg-zinc-900">
          <div className="flex justify-center">
            <form
              className="flex items-center gap-2 w-full max-w-2xl"
              onSubmit={handleSendUserResponse}>
              <textarea
                className="flex-1 resize-none outline-none border rounded-full px-4 py-2 overflow-hidden"
                rows={1}
                placeholder="Ask Anything"
                value={userResponse}
                onChange={(e) => setUserResponse(e.target.value)}
              />
              <button
                className="px-4 py-2 border rounded-full"
                disabled={isLoading}>
                Send
              </button>
            </form>
          </div>
        </div>
      }
    </div>
  );
};

export default ChatScreen;