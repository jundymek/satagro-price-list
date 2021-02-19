import React from "react";
import styles from "./card.module.scss";
import clsx from "clsx";

interface CardProps {
  type: "starter" | "premium" | "professional";
  children: React.ReactNode;
}

const Card = ({ type, children }: CardProps) => {
  const titleWrapperClass = clsx(styles.titleWrapper, {
    red: type === "premium",
    blue: type === "professional",
  });

  const buttonClass = clsx(styles.button, {
    red: type === "premium",
    blue: type === "professional",
  });

  return (
    <section className={styles.container}>
      <div className={titleWrapperClass}>
        <h2 className={styles.title}>{type.toUpperCase()}</h2>
        <p className={styles.price}>
          15 <span>PLN</span>
        </p>
      </div>
      <div className={styles.textWrapper}>
        {children}
        <button className={buttonClass}>Buy this plan</button>
      </div>
    </section>
  );
};

export default Card;
