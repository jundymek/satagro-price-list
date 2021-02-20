import React from "react";
import styles from "./card.module.scss";

interface CardPrizeProps {
  type: "starter" | "premium" | "professional";
  price: number;
  currency: string;
}

const CardPrice = ({ type, price, currency }: CardPrizeProps) => {
  if (type === "starter") return <p className={styles.price}>Gratis</p>;
  return (
    <p className={styles.price}>
      {price} <span>{currency}</span>
    </p>
  );
};

export default CardPrice;
