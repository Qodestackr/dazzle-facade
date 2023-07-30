import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; // for custom jest-dom matchers

import Input from "./Input";

describe("Input component", () => {
  const defaultProps = {
    label: "Username",
    type: "text",
    value: "",
    onChange: jest.fn(),
  };

  it("renders correctly with default props", () => {
    const { getByLabelText, getByRole } = render(<Input {...defaultProps} />);

    const inputElement = getByLabelText("Username");
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute("type", "text");
    expect(inputElement).toHaveAttribute("value", "");

    const errorElement = getByRole("alert");
    expect(errorElement).not.toBeInTheDocument();
  });

  it("displays error message correctly when errorMessage prop is provided", () => {
    const { getByRole } = render(
      <Input {...defaultProps} errorMessage="Invalid username" />
    );

    const errorElement = getByRole("alert");
    expect(errorElement).toBeInTheDocument();
    expect(errorElement).toHaveTextContent("Invalid username");
  });

  it("calls onChange callback correctly when input value changes", () => {
    const { getByLabelText } = render(<Input {...defaultProps} />);

    const inputElement = getByLabelText("Username");
    fireEvent.change(inputElement, { target: { value: "testuser" } });

    expect(defaultProps.onChange).toHaveBeenCalledTimes(1);
    expect(defaultProps.onChange).toHaveBeenCalledWith("testuser");
  });

  // Add more test cases as needed
});
