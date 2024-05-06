import { InputFormProps } from "../interfaces";

export const InputForm = ({
  input,
  handleInputChange,
  handleSubmit,
}: InputFormProps) => {
  return (
    <form className="form-control m-5 items-center" onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          className="input input-bordered flex-grow"
          value={input}
          placeholder="Escribe algo..."
          onChange={handleInputChange}
          required
        />
      </div>
    </form>
  );
};
