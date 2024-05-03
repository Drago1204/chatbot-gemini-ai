import React, { FormEvent } from 'react';


export interface InputFormProps {
  input: string;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: FormEvent) => void;
}