import Image from "next/image";

export function WelcomeMessage() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="card w-96 glass">
        <div className="card-body">
          <h2 className="card-title">¡Bienvenido a ChatUI!</h2>
          <p>
            ¡Hola! Soy tu asistente virtual, estoy aquí para ayudarte con tus
            necesidades. ¿Cómo puedo asistirte hoy?
          </p>

          <div className="flex items-center justify-center mt-3">
            <span className="px-2">Powered By Gemini AI</span>
            <Image src="/gemini.svg" alt="Gemini Logo" width={50} height={50} />
          </div>
        </div>
      </div>
    </div>
  );
}
