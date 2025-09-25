import type {HTMLAttributes, ReactNode} from "react";
import clsx from "clsx";

import styles from "./badge.module.css";

type BadgeVariant = "accent" | "outline";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
  variant?: BadgeVariant;
}

const variantMap: Record<BadgeVariant, string> = {
  accent: styles.badgeAccent,
  outline: styles.badgeOutline,
};

export function Badge({children, className, variant = "accent", ...props}: BadgeProps) {
  return (
    <span className={clsx(styles.badge, variantMap[variant], className)} {...props}>
      {children}
    </span>
  );
}
