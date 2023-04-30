import { HeadingProps } from "@/types/heading.type";
import style from "./heading.module.scss";

const Heading = ({ as = "h1", title, label }: HeadingProps) => {
  const Tag = as;

  return (
    <Tag aria-label={label} className={style["c-heading--" + as]}>
      {title}
    </Tag>
  );
};

export default Heading;
