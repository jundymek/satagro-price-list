import React from "react";
import Card from "./Card";
import styles from "./card.module.scss";
import { CardProps } from "./Card";

const CardStarter = ({ currency }: Partial<CardProps>) => {
  return (
    <Card type="starter" currency={currency}>
      <p className={`${styles.text} ${styles.text__last}`}>1 field up to 50 ha</p>
    </Card>
  );
};

export default CardStarter;
