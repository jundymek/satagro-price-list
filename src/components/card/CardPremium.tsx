import React from "react";
import Card from "./Card";
import styles from "./card.module.scss";
import { CardProps } from "./Card";

const CardPremium = ({ price, currency }: Partial<CardProps>) => {
  return (
    <Card type="premium" price={price} currency={currency}>
      <p className={styles.text}>All services included in Professional</p>
      <p className={styles.text}>
        High resolution monitoring with "Planet" Sensor integration (IoT, weather stations, etc)
      </p>
      <p className={`${styles.text} ${styles.text__last}`}>Agronomy advice</p>
    </Card>
  );
};

export default CardPremium;
