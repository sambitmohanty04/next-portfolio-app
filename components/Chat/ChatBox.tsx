'use client';

import { useEffect, useState } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:3001");

export default function ChatBox() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<string[]>([]);

  useEffect(() => {
    socket.on("receiveMessage", (msg: string) => {
      setMessages((prev) => [...prev, msg]);
    });

    return () => {
      socket.off("receiveMessage");
    };
  }, []);

  const sendMessage = () => {
    if (!message.trim()) return;

    socket.emit("sendMessage", message);
    setMessage("");
  };

  return (
    <div className="flex flex-col h-full">
      
      {/* Messages */}
      <div className="flex-1 overflow-y-auto space-y-2 mb-2">
        {messages.map((msg, i) => (
          <div key={i} className="bg-white/5 p-2 rounded text-sm">
            {msg}
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="flex gap-2">
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="flex-1 border p-2 rounded text-sm"
          placeholder="Type message..."
        />
        <button
          onClick={sendMessage}
          className="bg-blue-500 text-white px-3 rounded"
        >
          Send
        </button>
      </div>
    </div>
  );
}