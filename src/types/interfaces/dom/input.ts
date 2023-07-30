// Interface for the Input component props

/**
 * InputType represents the supported input types for the Input component.
 */
export type InputType = "text" | "password" | "email" | "number";

/**
 * InputProps is an interface for the Input component props.
 */
export interface InputProps {
  /**
   * The label for the input element.
   */
  label: string;
  /**
   * The type of the input element.
   */
  type: InputType;
  /**
   * The current value of the input element.
   */
  value: string;
  /**
   * A callback function to handle input value changes.
   * @param value - The new value of the input element.
   */
  onChange: (value: string) => void;
  /**
   * Placeholder text to display in the input element when it's empty.
   */
  placeholder?: string;
  /**
   * Specifies whether the input element is disabled.
   */
  disabled?: boolean;
  /**
   * Specifies whether the input element is required.
   */
  required?: boolean;
  /**
   * An optional error message to display below the input element.
   */
  errorMessage?: string;
  /**
   * An optional ID to associate with the input element and label.
   */
  id?: string;
  /**
   * An optional class name to apply to the input container.
   */
  className?: string;
}
