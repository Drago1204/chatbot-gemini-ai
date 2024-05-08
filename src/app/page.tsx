"use client";

import { Header, ChatBody } from "./components";

function HomePage() {
  return (
    <div className="container mx-auto p-2 fixed inset-0">
      <div className="border border-pink-300/75 rounded-3xl shadow-2xl px-5 bg-base-300 w-full h-full flex flex-col">
        <Header />
        <ChatBody/>
      </div>
    </div>
  );
}

export default HomePage;
