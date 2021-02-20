import React from "react";
import styles from "./card.module.scss";
import clsx from "clsx";
import CardPrice from "./CardPrice";

export interface CardProps {
  type: "starter" | "premium" | "professional";
  price: number;
  currency: string;
  children?: React.ReactNode;
}

const Card = ({ type, price, currency, children }: CardProps) => {
  const titleWrapperClass = clsx(styles.titleWrapper, {
    [styles.red]: type === "premium",
    [styles.blue]: type === "professional",
  });

  const buttonClass = clsx(styles.button, {
    [styles.red]: type === "premium",
    [styles.blue]: type === "professional",
  });

  return (
    <section className={styles.container}>
      <div className={titleWrapperClass}>
        <h2 className={styles.title}>{type.toUpperCase()}</h2>
        <CardPrice type={type} price={price} currency={currency} />
      </div>
      <div className={styles.textWrapper}>
        {children}
        <button className={buttonClass}>Buy this plan</button>
      </div>
    </section>
  );
};

export default Card;
