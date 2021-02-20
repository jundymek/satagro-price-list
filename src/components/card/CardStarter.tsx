import React from "react";
import Card from "./Card";
import styles from "./card.module.scss";

interface CardStarterProps {
  currency: string;
  price: number;
}

const CardStarter = ({ currency, price }: CardStarterProps) => {
  return (
    <Card type="starter" currency={currency} price={price}>
      <p className={`${styles.text} ${styles.text__last}`}>1 field up to 50 ha</p>
    </Card>
  );
};

export default CardStarter;
