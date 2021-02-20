import React from "react";
import styles from "./card.module.scss";
import clsx from "clsx";
import CardPrice from "./CardPrice";

export interface CardProps {
  type: "starter" | "premium" | "professional";
  price: number;
  currency: string;
  buttonText: string;
  children?: React.ReactNode;
}

const Card = ({ type, price, currency, buttonText, children }: CardProps) => {
  const titleWrapperClass = clsx(styles.titleWrapper, {
    [styles.red]: type === "premium",
    [styles.blue]: type === "professional",
  });

  const buttonClass = clsx(styles.button, {
    [styles.red]: type === "premium",
    [styles.blue]: type === "professional",
  });

  const containerClass = clsx(styles.container, {
    [styles.premium]: type === "premium",
  });

  return (
    <section className={containerClass}>
      <div className={titleWrapperClass}>
        <h2 className={styles.title}>{type.toUpperCase()}</h2>
        <CardPrice type={type} price={price} currency={currency} />
      </div>
      <div className={styles.textWrapper}>
        {children}
        <button className={buttonClass}>{buttonText.toUpperCase()}</button>
      </div>
    </section>
  );
};

export default Card;
