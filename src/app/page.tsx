"use client";

import { useEffect, useRef } from "react";
import { Header, MessageList } from "./components";
import { useChat } from "ai/react";

function HomePage() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <div className="bg-slate-900 min-h-screen pb-3 px-2 md:px-0 flex items-center justify-center">
      <div className="bg-slate-700 text-white max-w-full sm:max-w-md md:max-w-xl mx-auto p-4 sm:p-8 md:p-16 my-10 rounded-lg shadow-2xl">
        <Header />
        <section className="mt-3 rounded-lg max-h-96 h-full overflow-y-auto no-scrollbar">
          <MessageList messages={messages} />
          <div ref={bottomRef} />
        </section>
        <form onSubmit={handleSubmit}>
          <input
            className="w-full rounded-lg py-3 px-4 text-black bg-gray-300 mt-3 outline-none"
            value={input}
            placeholder="Escribe algo..."
            onChange={handleInputChange}
          />
        </form>
      </div>
    </div>
  );
}

export default HomePage;
