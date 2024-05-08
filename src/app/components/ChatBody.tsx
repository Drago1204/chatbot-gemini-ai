import { useChat } from "ai/react";
import { MessageList, InputForm, WelcomeMessage } from ".";


export function ChatBody() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <>
      {messages.length === 0 ? (
        <WelcomeMessage />
      ) : (
        <MessageList messages={messages} />
      )}
      <InputForm
        input={input}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />
    </>
  );
}
