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
    [styles.premium]: type === "premium",
    [styles.professional]: type === "professional",
  });

  const buttonClass = clsx(styles.button, {
    [styles.btnPremium]: type === "premium",
    [styles.btnProfessional]: type === "professional",
  });

  const containerClass = clsx(styles.container, {
    [styles.premiumContainer]: type === "premium",
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
