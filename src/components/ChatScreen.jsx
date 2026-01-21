import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { nanoid } from "nanoid";
import { aiResponse } from "./utility/AI";
import Markdown from 'react-markdown'

const ChatScreen = () => {
    const [userResponse, setuserResponse] = useState("");
    const [isLoading, setLoading] = useState(false)
    // ============= Stores all current message ==============
    const [messages, setMessages] = useState(
        () => {
            const saved = localStorage.getItem("currentChat")
            return saved ? JSON.parse(saved) : []
        }
    );
    useEffect(() => {
        localStorage.setItem("currentChat", JSON.stringify(messages))
    }, [messages])
    
    const handleSendUserResponse = async (e) => {
        e.preventDefault();

        if (!userResponse.trim()) {
            alert("Type something")
            return
        } setMessages(prev => [...prev, { text: userResponse, user: "human", id: nanoid() }])

        // Reset
        setuserResponse("");
        setLoading(true);
        //    ================= AI Response ==================
        try {
            //================= Conversion to string because we are using Markdown and its render only String ================
            const AiResponseText = String(await aiResponse(userResponse));
            setMessages(prev => [
                ...prev,
                { text: AiResponseText, user: "ai", id: nanoid() }
            ]);
        } catch (error) {

            setMessages(prev => [
                ...prev,
                { text: "Something went wrong 😢", user: "ai", id: nanoid() }
            ]);
        } finally {
            setLoading(false);
        }
    };


    return (

        <div className="flex flex-col flex-1 ">
            <Navbar />

            {/* Chat area */}
            <div className="flex-1 overflow-y-auto ">
                <div className="chat-screen bg-zinc-900 min-h-full w-full p-2">
                    <div className="chat-container p-2">
                        <div className="chat-bubbles flex flex-col gap-y-4">

                            {
                                messages && messages.map((message) => {
                                    return (
                                        < div key={message.id} className={`flex  w-full ${message.user === "human" ? "justify-end" : "justify-start"} `
                                        }>

                                            {

                                                message.user === "ai" ? (
                                                    <div className=" p-2 rounded border border-gray-700">      <Markdown
                                                    >{message.text}
                                                    </Markdown></div>)
                                                    : (<p className="p-2 rounded border border-gray-700">{message.text}</p>)
                                            }
                                        </div>
                                    )
                                })
                            }

                            {

                                isLoading && (
                                    <div className="flex justify-start w-full">
                                        <p className="p-2 rounded border border-gray-700 italic text-gray-400 animate-pulse">
                                            AI is thinking...
                                        </p>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>

            {/* Input bar */}

            <div className="p-4 bg-zinc-900">
                <div className="flex justify-center">
                    <form
                        className="flex items-center gap-2 w-full max-w-2xl"
                        onSubmit={(e) => handleSendUserResponse(e)} onKeyDown={(e) => {
                            if (e.key === "Enter")
                                handleSendUserResponse(e);
                        }}>
                        <textarea
                            className="flex-1 resize-none outline-none border rounded-full px-4 py-2 overflow-hidden"
                            rows={1}
                            placeholder="Ask Anything"
                            value={userResponse}
                            onChange={(e) => setuserResponse(e.target.value)}
                        />
                        <button className="px-4 py-2 border rounded-full" disabled={isLoading}>Send</button>
                    </form>
                </div>
            </div>
        </div >

    );
};

export default ChatScreen;
