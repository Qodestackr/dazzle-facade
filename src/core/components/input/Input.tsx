import React from "react";
import clsx from "clsx";
import { InputProps } from "../../../types/interfaces/dom/input";
import { cn } from "@core/utils/styles/classnames";

const Input: React.FC<InputProps> = ({
  label,
  type,
  value,
  onChange,
  placeholder,
  disabled,
  required,
  errorMessage,
  id,
  className,
}) => {
  const containerClasses = clsx(
    "relative",
    "mb-4", // Base margin-bottom class from daisyui
    className // Any custom class passed from props
  );

  const inputClasses = clsx(
    "block",
    "w-full",
    "px-4", // Base padding-x class from daisyui
    "py-2", // Base padding-y class from daisyui
    "border",
    "border-gray-300", // Base border class from daisyui
    "rounded", // Base border-radius class from daisyui
    "focus:outline-none", // Apply focus outline removal on focus
    "focus:border-blue-500", // Apply custom focus border color from daisyui
    "disabled:opacity-50", // Apply custom opacity for disabled state from daisyui
    errorMessage ? "border-red-500" : "border-gray-300" // Apply error border color if errorMessage is present
  );

  const errorClasses = clsx(
    "text-red-500", // Apply error text color from daisyui
    "text-sm", // Apply small font size from daisyui
    "mt-1" // Apply margin-top from daisyui
  );

  return (
    <div className={containerClasses}>
      <label htmlFor={id || label}>{label}</label>
      <input
        id={id || label}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        aria-invalid={!!errorMessage}
        aria-describedby={`${id || label}-error`}
        className={inputClasses}
      />
      {errorMessage && (
        <div
          id={`${id || label}-error`}
          role="alert"
          aria-live="polite"
          className={errorClasses}
        >
          {errorMessage}
        </div>
      )}
    </div>
  );
};

export default Input;
