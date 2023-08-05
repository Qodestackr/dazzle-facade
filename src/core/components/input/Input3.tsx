import * as React from "react";
import { cn } from "@core/utils/styles/classnames";
import { z } from "zod";

// Define a validation schema using Zod
const inputSchema = z.object({
  label: z.string(),
  type: z.string(),
  value: z.string(),
  //   onChange: z.function(z.string()), // Assuming the value will always be a string
  placeholder: z.string().optional(),
  disabled: z.boolean().optional(),
  required: z.boolean().optional(),
  errorMessage: z.string().optional(),
  id: z.string().optional(),
  className: z.string().optional(),
});

// Extract the type from the Zod schema
type InputProps = z.infer<typeof inputSchema>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, errorMessage, ...props }, ref) => {
    // Validate the props using the Zod schema
    inputSchema.parse(props);

    const containerClasses = cn(
      "relative",
      "mb-4", // Base margin-bottom class from daisyui
      className // Any custom class passed from props
    );

    const inputClasses = cn(
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

    const errorClasses = cn(
      "text-red-500", // Apply error text color from daisyui
      "text-sm", // Apply small font size from daisyui
      "mt-1" // Apply margin-top from daisyui
    );

    return (
      <div className={containerClasses}>
        <label htmlFor={props.id || label}>{label}</label>
        <input
          ref={ref}
          {...props}
          className={inputClasses}
          aria-invalid={!!errorMessage}
          aria-describedby={`${props.id || label}-error`}
        />
        {errorMessage && (
          <div
            id={`${props.id || label}-error`}
            role="alert"
            aria-live="polite"
            className={errorClasses}
          >
            {errorMessage}
          </div>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
