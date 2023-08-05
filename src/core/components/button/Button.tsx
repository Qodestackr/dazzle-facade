import React, { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";
import clsx from "clsx";
// import { Button } from "@/components/ui/button";
import { cn } from "../../utils/styles/classnames";

type BaseButtonProps = {
  variant?: "neutral" | "primary" | "secondary" | "accent" | "ghost" | "link";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  active?: boolean;
  as?: React.ElementType;
};

type PolymorphicButtonProps<T extends React.ElementType> = BaseButtonProps &
  Omit<React.ComponentProps<T>, keyof BaseButtonProps>;

function Button<T extends React.ElementType = "button">({
  variant = "primary",
  size = "md",
  fullWidth = false,
  active = false,
  as: Component = "button",
  className,
  ...props
}: PolymorphicButtonProps<T>) {
  const baseStyles = clsx(
    "px-4", // Base padding-x class from daisyui
    "py-2", // Base padding-y class from daisyui
    "rounded", // Base border-radius class from daisyui
    "focus:outline-none", // Apply focus outline removal on focus
    fullWidth && "w-full", // Make the button full width if fullWidth is true
    // Add variant-specific classes based on the 'variant' prop
    `btn${active ? "-active" : ""}`,
    variant === "neutral" ? "" : `btn-${variant}`,
    // Add size-specific classes based on the 'size' prop
    size === "sm" ? "text-sm" : size === "lg" ? "text-lg" : "text-base",
    className // Any custom class passed from props
  );

  // Determine if the component is an anchor ('a') or a button ('button')
  const isAnchor = Component === "a";

  // Render the component accordingly with the appropriate props
  return (
    <Component
      className={baseStyles}
      // Add 'href' attribute for anchors and 'type' attribute for buttons
      {...(isAnchor
        ? { href: (props as AnchorHTMLAttributes<T>).href }
        : { type: (props as ButtonHTMLAttributes<T>).type })}
      {...props}
    />
  );
}

export default Button;
