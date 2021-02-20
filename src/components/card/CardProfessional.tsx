import React from "react";
import Card from "./Card";
import styles from "./card.module.scss";

interface CardProfessionalProps {
  price: number;
  currency: string;
}

const CardProfessional = ({ price, currency }: CardProfessionalProps) => {
  return (
    <Card type="professional" price={price} currency={currency}>
      <p className={styles.text}>Satellite monitoring of your farm</p>
      <p className={styles.text}>Prescription maps</p>
      <p className={`${styles.text} ${styles.text__last}`}>
        Guidance for accurate soil sample selection Technical support
      </p>
    </Card>
  );
};

export default CardProfessional;
