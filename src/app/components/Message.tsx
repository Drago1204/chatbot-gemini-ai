import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Message } from "ai";
import Image from "next/image";
import copy from "clipboard-copy";
import { useState } from "react";
import rehypeRaw from "rehype-raw";
import rehypeHighlight from "rehype-highlight";

export function Messages({ role, content }: Message) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyClick = async () => {
    try {
      await copy(content);
      setIsCopied(true);

      // Restablecer isCopied a false después de 2 segundos
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    } catch (error) {
      console.error("Failed to copy text to clipboard", error);
    }
  };
  const avatarAI = "/img/gemini.png";
  const avatarUser = "/img/avatar.jpg";

  return (
    <div className={`chat mx-2 ${role === "user" ? "chat-end" : "chat-start"}`}>
      <div className="chat-image avatar">
        <div className="w-10 shadow-2xl rounded-full">
          <Image
            width={500}
            height={500}
            alt="Avatar"
            src={role === "assistant" ? avatarAI : avatarUser}
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
      <div className="chat-bubble overflow-x bg-base-200 shadow-2xl">
        <div className="p-2 whitespace-pre-line overflow-x-auto">
          <Markdown
            remarkPlugins={[remarkGfm,]}
            rehypePlugins={[rehypeRaw, rehypeHighlight]}
          >
            {content}
          </Markdown>
        </div>
      </div>
      <div className="chat-footer mt-2 opacity-50">
        <button onClick={handleCopyClick}>
          {isCopied ? "¡Copiado!" : "Copiar"}
        </button>
      </div>
    </div>
  );
}
