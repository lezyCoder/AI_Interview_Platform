import { createContext, useState, useEffect } from "react";
import { nanoid } from "nanoid";

export const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  // All conversations
  const [allConversations, setAllConversations] = useState(() => {
    const saved = localStorage.getItem("conversations");
    return saved ? JSON.parse(saved) : [];
  });

  // Current active chat ID
  const [currentChatId, setCurrentChatId] = useState(() => {
    return localStorage.getItem("currentChatId") || null;
  });

  // Get current chat
  const currentChat = allConversations.find(
    (chat) => chat.id === currentChatId,
  );

  // Current chat's messages
  const messages = currentChat ? currentChat.messages : [];

  // Current chat's title
  const currentTitle = currentChat ? currentChat.title : "New Chat";

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("conversations", JSON.stringify(allConversations));
  }, [allConversations]);

  useEffect(() => {
    if (currentChatId) {
      localStorage.setItem("currentChatId", currentChatId);
    }
  }, [currentChatId]);

  // Create new chat
  const createNewChat = () => {
    const newChatId = nanoid();
    const newChat = {
      id: newChatId,
      title: "New Chat",
      timestamp: Date.now(),
      messages: [],
    };

    setAllConversations((prev) => [newChat, ...prev]);
    setCurrentChatId(newChatId);
  };

  // Add message to current chat
  const addMessage = (message) => {
    // If no current chat, create one
    if (!currentChatId) {
      createNewChat();
      return;
    }

    setAllConversations((prev) =>
      prev.map((chat) =>
        chat.id === currentChatId
          ? { ...chat, messages: [...chat.messages, message] }
          : chat,
      ),
    );
  };

  // Update chat title
  const updateChatTitle = (newTitle) => {
    setAllConversations((prev) =>
      prev.map((chat) =>
        chat.id === currentChatId ? { ...chat, title: newTitle } : chat,
      ),
    );
  };

  // Switch to different chat
  const switchChat = (chatId) => {
    setCurrentChatId(chatId);
  };

  const value = {
    allConversations,
    currentChatId,
    messages,
    currentTitle,
    createNewChat,
    addMessage,
    updateChatTitle,
    switchChat,
  };

  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>;
};
