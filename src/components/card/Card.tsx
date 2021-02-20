import React from "react";
import styles from "./card.module.scss";
import clsx from "clsx";

export interface CardProps {
  type: "starter" | "premium" | "professional";
  price?: number;
  currency?: string;
  children: React.ReactNode;
}

const Card = ({ type, price = 0, currency, children }: CardProps) => {
  const titleWrapperClass = clsx(styles.titleWrapper, {
    [styles.red]: type === "premium",
    [styles.blue]: type === "professional",
  });

  const buttonClass = clsx(styles.button, {
    [styles.red]: type === "premium",
    [styles.blue]: type === "professional",
  });

  console.log(titleWrapperClass);

  return (
    <section className={styles.container}>
      <div className={titleWrapperClass}>
        <h2 className={styles.title}>{type.toUpperCase()}</h2>
        <p className={styles.price}>
          {price} <span>{currency}</span>
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
