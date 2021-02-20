import React, { useEffect } from "react";
import styles from "./plans.module.scss";
import CardStarter from "../card/CardStarter";
import CardPremium from "../card/CardPremium";
import CardProfessional from "../card/CardProfessional";
import { useGetUserLocation } from "../../helpers/getUserLocation";

type PlanType = "starter" | "premium" | "professional";

interface ApiResponse {
  id: number;
  plan: { id: number; name: string };
  currency: string;
  currency_symbol: string;
  yearly_rate: number;
  region: string;
  units_system: number;
}

const Plans = () => {
  const { location } = useGetUserLocation();

  useEffect(() => {
    async function getPlans() {
      const data = await fetch(`https://app.satagro.pl/api/plans/?region=${location}&units=metric`);
      const res = await data.json();
      console.log(res);
      filterPlans(res);
    }
    getPlans();
  }, [location]);

  return (
    <div className={styles.wrapper}>
      <CardStarter />
      <CardPremium />
      <CardProfessional />
    </div>
  );
};

export default Plans;

function filterPlans(plans: ApiResponse[]) {
  const acceptedPlans = ["starter", "premium", "professional"];
  const filteredPlans = plans.filter((plan) => acceptedPlans.includes(plan.plan.name.toLowerCase()));
  console.log(filteredPlans);
}
