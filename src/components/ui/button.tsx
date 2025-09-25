import type {ButtonHTMLAttributes, ReactNode} from "react";
import Link from "@docusaurus/Link";
import clsx from "clsx";

import styles from "./button.module.css";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

type BaseProps = {
  children: ReactNode;
  className?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
};

type ButtonAnchorProps = BaseProps & {
  to: string;
  type?: never;
  onClick?: never;
};

type ButtonButtonProps = BaseProps & ButtonHTMLAttributes<HTMLButtonElement> & {
  to?: undefined;
};

export type ButtonProps = ButtonAnchorProps | ButtonButtonProps;

function resolveVariant(variant: ButtonVariant = "primary"): string {
  switch (variant) {
    case "secondary":
      return styles.buttonSecondary;
    case "ghost":
      return styles.buttonGhost;
    default:
      return styles.buttonPrimary;
  }
}

function resolveSize(size: ButtonSize = "md"): string {
  switch (size) {
    case "sm":
      return styles.buttonSm;
    case "lg":
      return styles.buttonLg;
    default:
      return styles.buttonMd;
  }
}

export function Button(props: ButtonProps) {
  const {children, className, variant, size, fullWidth, ...rest} = props as ButtonProps & Record<string, unknown>;
  const classes = clsx(
    styles.button,
    resolveVariant(variant),
    resolveSize(size),
    fullWidth && styles.fullWidth,
    className,
  );

  if ("to" in rest && typeof rest.to === "string") {
    return (
      <Link className={classes} to={rest.to}>
        {children}
      </Link>
    );
  }

  const buttonProps = rest as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
