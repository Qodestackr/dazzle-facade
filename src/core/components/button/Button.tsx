import React, { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";
import clsx from "clsx";
import { cn } from "@core/utils/styles/classnames";

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
    "px-4",
    "py-2",
    "rounded",
    "focus:outline-none",
    fullWidth && "w-full",

    `btn${active ? "-active" : ""}`,
    variant === "neutral" ? "" : `btn-${variant}`,
    size === "sm" ? "text-sm" : size === "lg" ? "text-lg" : "text-base",
    className
  );

  // Determine if the component is an anchor ('a') or a button ('button')
  const isAnchor = Component === "a";

  return (
    <Component
      className={baseStyles}
      {...(isAnchor
        ? { href: (props as AnchorHTMLAttributes<T>).href }
        : { type: (props as ButtonHTMLAttributes<T>).type })}
      {...props}
    />
  );
}

export default Button;
