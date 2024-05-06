import { useEffect, useRef } from "react";

import { Messages } from ".";
import { MessageListProps } from "../interfaces";

export function MessageList({ messages }: MessageListProps) {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);
  return (
    <section className="p-5 pb-8 flex-grow overflow-auto">
      {messages.map((m) => (
        <div key={m.id}>
          <Messages id={m.id} role={m.role} content={m.content} />
        </div>
      ))}

      <div ref={bottomRef} />
    </section>
  );
}
