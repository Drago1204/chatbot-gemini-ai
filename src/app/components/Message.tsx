import { MathJaxContext, MathJax } from "better-react-mathjax";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Message } from "ai";

export function Messages({ role, content }: Message) {
  return (
    <MathJaxContext>
      <div
        className={`rounded-lg p-4 mb-3 ${
          role === "user"
            ? "bg-blue-200 text-blue-700"
            : "bg-green-200 text-green-700"
        }`}
      >
        <p>
          {role === "user" ? "Tú: " : "Gemini AI: "}
          <MathJax>
            <Markdown remarkPlugins={[remarkGfm]}>{content}</Markdown>
          </MathJax>
        </p>
      </div>
    </MathJaxContext>
  );
}
