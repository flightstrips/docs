import type {HTMLAttributes} from "react";
import clsx from "clsx";

import styles from "./card.module.css";

export function Card({className, ...props}: HTMLAttributes<HTMLDivElement>) {
  return <div className={clsx(styles.card, className)} {...props} />;
}

export function CardHeader({className, ...props}: HTMLAttributes<HTMLDivElement>) {
  return <div className={clsx(styles.header, className)} {...props} />;
}

export function CardTitle({className, ...props}: HTMLAttributes<HTMLHeadingElement>) {
  return <h3 className={clsx(styles.title, className)} {...props} />;
}

export function CardDescription({className, ...props}: HTMLAttributes<HTMLParagraphElement>) {
  return <p className={clsx(styles.description, className)} {...props} />;
}

export function CardContent({className, ...props}: HTMLAttributes<HTMLDivElement>) {
  return <div className={clsx(styles.content, className)} {...props} />;
}
