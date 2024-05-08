import { InputFormProps } from "../interfaces";

export const InputForm = ({
  input,
  handleInputChange,
  handleSubmit,
}: InputFormProps) => {
  return (
    <form className="form-control my-5 items-center" onSubmit={handleSubmit}>
      <div className="w-full mx-auto">
        <input
          type="text"
          className="input input-primary input-bordered rounded-3xl w-full shadow-2xl flex-grow"
          value={input}
          placeholder="Escribe algo..."
          onChange={handleInputChange}
          required
        />
      </div>
    </form>
  );
};
