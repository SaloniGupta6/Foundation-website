import React, { useState, useEffect, useRef } from "react";
import { MessageCircle, X, Loader2 } from "lucide-react";

const faqs = {
  "donate": "You can donate via our donation page. We accept UPI, credit/debit cards, and netbanking.",
  "volunteer": "We love volunteers! Please fill out the form on our Volunteer page to get started.",
  "about": "Muskurahat Foundation is an NGO focused on child development, education, and emotional well-being.",
  "events": "We host regular events and drives. Check our Events page or follow us on Instagram for updates.",
};

export default function AdvancedChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([{ from: "bot", text: "Hi there! 👋 How can I help you today?" }]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);

  useEffect(() => {
    if (isOpen) chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isOpen]);

  const handleSend = () => {
    if (!input.trim()) return;
    const userMessage = { from: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const key = Object.keys(faqs).find((k) => input.toLowerCase().includes(k));
      const reply = key ? faqs[key] : "Sorry, I didn't get that. Try asking about donations, volunteering, or events.";
      setMessages((prev) => [...prev, { from: "bot", text: reply }]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[1000]">
      {isOpen ? (
        <div className="w-80 h-[28rem] bg-white dark:bg-gray-800 rounded-xl shadow-2xl flex flex-col">
          <div className="bg-indigo-600 text-white flex justify-between items-center px-4 py-3 rounded-t-xl">
            <span className="font-bold">Ask Muskurahat</span>
            <button onClick={() => setIsOpen(false)}><X /></button>
          </div>
          <div className="flex-1 px-4 py-2 overflow-y-auto space-y-2">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[70%] px-3 py-2 rounded-lg text-sm ${msg.from === "user" ? "bg-indigo-100 dark:bg-indigo-700 text-gray-900 dark:text-white" : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white"}`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="text-gray-400 text-sm flex items-center gap-2">
                <Loader2 className="animate-spin w-4 h-4" /> Typing...
              </div>
            )}
            <div ref={chatEndRef}></div>
          </div>
          <div className="p-2 flex gap-2 border-t border-gray-200 dark:border-gray-700">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Ask me anything..."
              className="flex-1 p-2 text-sm rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-800 dark:text-white focus:outline-none"
            />
            <button
              onClick={handleSend}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-2 rounded text-sm"
            >
              Send
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full p-3 shadow-xl animate-bounce"
        >
          <MessageCircle size={24} />
        </button>
      )}
    </div>
  );
}
