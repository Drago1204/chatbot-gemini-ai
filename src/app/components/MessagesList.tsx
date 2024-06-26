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
    <section className="pb-8 rounded-3xl shadow-2xl bg-neutral flex-grow overflow-auto no-scrollbar">
      {messages.map((m) => (
        <div key={m.id}>
          <Messages id={m.id} role={m.role} content={m.content} />
        </div>
      ))}

      <div ref={bottomRef} />
    </section>
  );
}
