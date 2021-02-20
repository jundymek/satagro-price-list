import React from "react";
import styles from "./hero.module.scss";

const Hero = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Cennik</h1>
      <p className={styles.heroText}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, velit veniam sed nesciunt voluptate commodi nam?
        Est sit officiis aliquam vel provident ad veritatis veniam, maiores velit, repellat, saepe aspernatur!
      </p>
    </div>
  );
};

export default Hero;
