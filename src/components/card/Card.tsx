import React from "react";
import styles from  "./card.module.scss";

const Card = () => {
  return (
    <section className={styles.container}>
      <div className={styles.titleWrapper}>
        <h2 className={styles.title}>PREMIUM</h2>
        <p className={styles.price}>
          15 <span>PLN</span>
        </p>
      </div>
      <div className={styles.textWrapper}>
        <p className={styles.text}>All services included in Professional</p>
        <p className={styles.text}>
          High resolution monitoring with "Planet" Sensor integration (IoT, weather stations, etc)
        </p>
        <p className={`${styles.text} ${styles.text__last}`}>Agronomy advice</p>
        <button className={styles.button}>Buy this plan</button>
      </div>
    </section>
  );
};

export default Card;
