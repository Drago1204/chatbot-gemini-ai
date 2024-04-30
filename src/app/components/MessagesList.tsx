import { Messages } from ".";
import { MessageListProps } from "../interfaces";

export function MessageList({ messages }: MessageListProps) {
  return (
    <div className="mb-6">
      {messages.map((m) => (
        <div key={m.id}>
          <Messages id={m.id} role={m.role} content={m.content} />
        </div>
      ))}
    </div>
  );
}

