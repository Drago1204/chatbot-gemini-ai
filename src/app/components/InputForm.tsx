// InputForm.js
import { InputFormProps } from "../interfaces";

export const InputForm: React.FC<InputFormProps> = ({ input, handleInputChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        className="w-full rounded-lg py-3 px-4 text-black bg-gray-300 mt-3 outline-none"
        value={input}
        placeholder="Escribe algo..."
        onChange={handleInputChange}
      />
    </form>
  );
}
