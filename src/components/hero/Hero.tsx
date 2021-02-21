import React from "react";
import { useLocationState } from "../../context/locationContext";
import { translation } from "../../helpers/translations";
import styles from "./hero.module.scss";
import HeroPicture from "./HeroPicture";

const Hero = () => {
  const { location } = useLocationState();
  const offerText = translation[location].offer;
  return (
    <div className={styles.wrapper}>
      <HeroPicture />
      <h1 className={styles.title}>{offerText}</h1>
      <p className={styles.heroText}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, velit veniam sed nesciunt voluptate commodi nam?
        Est sit officiis aliquam vel provident ad veritatis veniam, maiores velit, repellat, saepe aspernatur!
      </p>
    </div>
  );
};

export default Hero;
