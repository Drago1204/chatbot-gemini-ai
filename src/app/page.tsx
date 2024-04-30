"use client";

import { Header, MessageList } from "./components";
import { useChat } from "ai/react";
function HomePage() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  return (
    <div className="bg-gray-200 min-h-screen pb-6 px-2 md:px-0 flex items-center justify-center">
      <div className="bg-white mx-auto p-8 md:p-16 my-10 rounded-lg shadow-2xl">
        <Header />
        <section className="mt-10">
          <MessageList messages={messages} />
          <form onSubmit={handleSubmit}>
            <input
              className="w-full rounded-lg py-3 px-4 bg-gray-100 outline-none"
              value={input}
              placeholder="Escribe algo..."
              onChange={handleInputChange}
            />
          </form>
        </section>
      </div>
    </div>
  );
}

export default HomePage;
