"use client";

import { Header, MessageList, InputForm, WelcomeMessage } from "./components";
import { useChat } from "ai/react";

function HomePage() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  return (
    <div className="container mx-auto p-2 fixed inset-0">
      <div className="border rounded-lg p-5 bg-base-300 w-full h-full flex flex-col">
        <Header />
        {messages.length === 0 && <WelcomeMessage />}
        <MessageList messages={messages} />
        <InputForm
          input={input}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  );
}

export default HomePage;
