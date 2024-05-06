import React from 'react';
import { ChatRequestOptions } from "ai";


export interface InputFormProps {
  input: string;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>, chatRequestOptions?: ChatRequestOptions) => void;
}