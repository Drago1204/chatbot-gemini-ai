import { MathJaxContext, MathJax } from "better-react-mathjax";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Message } from "ai";

export function Messages({ role, content }: Message) {
  return (
    <MathJaxContext>
      <div
        className={`rounded-lg flex flex-col p-4 mb-2 ${
          role === "user"
            ? "bg-blue-200 text-black self-start text-right"
            : "bg-cyan-800 text-white self-end text-left"
        }`}
      >
        <span
          className={`text-xs mb-2 ${
            role === "user"
              ? "text-right"
              : "text-left"
          }`}
        >
          {role === "user" ? "Tú" : "Gemini"}
        </span>
        <p>
          <MathJax>
            <Markdown remarkPlugins={[remarkGfm]}>{content}</Markdown>
          </MathJax>
        </p>
      </div>
    </MathJaxContext>
  );
}
