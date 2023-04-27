"use client";
import * as Avatar from "@radix-ui/react-avatar";
import styles from "../../styles/components/avatar.module.scss";

const AvatarComponent = () => (
  <Avatar.Root className={styles.avatar}>
    <Avatar.Image
      className={styles.avatar__image}
      src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
      alt="Colm Tuite"
    />
    <Avatar.Fallback className={styles.avatar__fallback} delayMs={600}>
      CT
    </Avatar.Fallback>
  </Avatar.Root>
);

export default AvatarComponent;
