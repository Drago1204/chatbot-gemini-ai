import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Message } from "ai";
import Image from "next/image";

export function Messages({ role, content }: Message) {
  return (
    <div className={`chat ${role === "user" ? "chat-end" : "chat-start"}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <Image
            width={500}
            height={500}
            alt="Avatar"
            src={
              role === "assistant"
                ? "/img/gemini.png"
                : "/img/avatar.jpg"
            }
          />
        </div>
      </div>
      <div className="chat-header">
        <span
          className={`text-xs mb-2 ${
            role === "user" ? "text-right" : "text-left"
          }`}
        >
          {role === "user" ? "Tú" : "Gemini"}
        </span>
      </div>
      <div className="chat-bubble">
        <p>
          <Markdown remarkPlugins={[remarkGfm]}>{content}</Markdown>
        </p>
      </div>
    </div>
  );
}
