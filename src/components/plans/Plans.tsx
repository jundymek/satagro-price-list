import React, { useEffect } from "react";
import styles from "./plans.module.scss";
import CardStarter from "../card/CardStarter";
import CardPremium from "../card/CardPremium";
import CardProfessional from "../card/CardProfessional";

const Plans = () => {
  async function getPlans() {
    const data = await fetch("https://app.satagro.pl/api/plans/?region=CZ&units=metric");
    const res = await data.json();
    console.log(res);
  }

  useEffect(() => {
    getPlans();
  }, []);
  return (
    <div className={styles.wrapper}>
      <CardStarter />
      <CardPremium />
      <CardProfessional />
    </div>
  );
};

export default Plans;
