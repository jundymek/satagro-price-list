import React from "react";
import Card from "./Card";
import styles from "./card.module.scss";

const CardStarter = () => {
  return (
    <Card type="starter">
      <p className={`${styles.text} ${styles.text__last}`}>1 field up to 50 ha</p>
    </Card>
  );
};

export default CardStarter;
