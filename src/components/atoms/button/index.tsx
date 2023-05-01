import { ButtonProps } from "@/types/button.type";
import Link from "next/link";

import styles from "./button.module.scss";

const Button = ({
  primary = false,
  size = "medium",
  label,
  url = "#",
}: ButtonProps) => {
  return (
    <Link
      role="link"
      href={url}
      title={`Go to ${url} page`}
      aria-label={`Link to go to ${label} page`}
      rel="nofollow"
      className={[
        styles["c-button"],
        styles["c-button--" + size],
        primary ? styles["c-button--primary"] : styles["c-button--secondary"],
      ].join(" ")}
    >
      {label}
    </Link>
  );
};

export default Button;
