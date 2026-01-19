import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { nanoid } from "nanoid";
import { aiResponse } from "./utility/AI";

const ChatScreen = () => {
    const [userResponse, setuserResponse] = useState("");

    const [messages, setMessages] = useState([]);

    const handleSendUserResponse = async (e) => {
        e.preventDefault();

        if (userResponse.trim()) {
            setMessages(prev => [...prev, { text: userResponse, user: "human", id: nanoid() }])
        }
        else {
            alert("Type something")
        }
        // Reset
        setuserResponse("");
        //    ================= AI Response ==================
        const AiResponseText = await aiResponse(userResponse)
        console.log("response", AiResponseText)
        setMessages(prev => [...prev, { text: AiResponseText, user: "ai", id: nanoid() }])
    };


    return (
        <div className="flex flex-col flex-1 ">
            <Navbar />

            {/* Chat area */}
            <div className="flex-1 overflow-y-auto  ">
                <div className="chat-screen bg-gray-800 min-h-full w-full p-2">
                    <div className="chat-container p-2">
                        <div className="chat-bubbles flex flex-col gap-y-4">

                            {
                                messages && messages.map((message) => (
                                    <div key={message.id} className={`flex  w-full ${message.user === "human" ? "justify-end" : "justify-start"} `}>
                                        <p className="p-2 rounded border border-gray-700">{message.text}</p>
                                    </div>
                                ))
                            }
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
                            onChange={(e) => setuserResponse(e.target.value)}
                        />
                        <button className="px-4 py-2 border rounded-full">Send</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ChatScreen;
