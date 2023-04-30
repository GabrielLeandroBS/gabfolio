import { ButtonProps } from "../../../../types/button.type";
import Link from "next/link";
import React from "react";
import styles from "./button.module.scss";

const Button = ({ primary = false, size = "medium", label, url = "#" }: ButtonProps) => {
  const hasPrimary = primary
    ? styles["c-button--primary"]
    : styles["c-button--secondary"];

  return (
    <Link
      href={url}
      className={[styles['c-button'], styles["c-button--" + size], hasPrimary].join(" ")}
    >
      {label}
    </Link>
  );
};

export default Button;