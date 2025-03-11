import React, { useState } from "react";
import Navbar from "../components/Navbar";

const ChatPage = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    // Add User Message to Chat
    const newMessages = [...messages, { text: input, sender: "user" }];
    setMessages(newMessages);
    setInput("");

    // Send Message to Backend (AI API)
    const response = await fetch("http://localhost:5000/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: input }),
    });

    const data = await response.json();

    // Add AI Response to Chat
    setMessages([...newMessages, { text: data.response, sender: "ai" }]);
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      <Navbar />
      <div className="container mx-auto flex flex-col justify-between p-4 h-[85vh]">
        {/* Chat Messages */}
        <div className="flex flex-col gap-3 overflow-y-auto flex-grow p-4 bg-gray-800 rounded-lg shadow-md">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`p-3 rounded-lg w-fit max-w-xs ${
                msg.sender === "user" ? "bg-blue-500 self-end" : "bg-gray-700"
              }`}
            >
              {msg.text}
            </div>
          ))}
        </div>

        {/* Chat Input */}
        <div className="flex mt-4">
          <input
            type="text"
            className="w-full p-3 rounded-l-lg bg-gray-700 text-white focus:outline-none"
            placeholder="Type a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            className="bg-blue-500 px-6 py-3 rounded-r-lg hover:bg-blue-600 transition"
            onClick={handleSendMessage}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
