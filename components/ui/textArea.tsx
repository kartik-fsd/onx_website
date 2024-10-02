import React from "react";
import { FieldError } from "react-hook-form";

type TextAreaFieldProps = {
  label: string;
  register: any;
  name: string;
  placeholder: string;
  rows?: number;
  required?: boolean;
  errors?: FieldError;
};

const TextAreaField: React.FC<TextAreaFieldProps> = ({
  label,
  register,
  name,
  placeholder,
  rows = 4,
  required = false,
  errors,
}) => (
  <div>
    <textarea
      {...register(name, {
        required: required ? `${label} is required` : false,
      })}
      className={`w-full p-4 m-2 border ${
        errors ? "border-red-500" : "border-gray-300"
      } rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition resize-none placeholder-gray-400`}
      placeholder={placeholder}
      rows={rows}
      aria-label={label}
    />
    {errors && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
  </div>
);

export default TextAreaField;
