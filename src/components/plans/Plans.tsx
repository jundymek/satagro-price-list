import React, { useEffect, useState } from "react";
import styles from "./plans.module.scss";
import CardStarter from "../card/CardStarter";
import CardPremium from "../card/CardPremium";
import CardProfessional from "../card/CardProfessional";
import { useGetUserLocation } from "../../helpers/useGetUserLocation";
import Flags from "../flags/Flags";

interface ApiResponse {
  id: number;
  plan: { id: number; name: string };
  currency: string;
  currency_symbol: string;
  yearly_rate: number;
  region: string;
  units_system: number;
}

interface PlanProps {
  price: number;
  currency: string;
  language: string;
}

const Plans = () => {
  const [starter, setStarter] = useState<PlanProps | null>();
  const [premium, setPremium] = useState<PlanProps | null>();
  const [professional, setProfessional] = useState<PlanProps | null>();
  const { location, setLocation } = useGetUserLocation();

  useEffect(() => {
    async function getPlans() {
      const data = await fetch(`https://app.satagro.pl/api/plans/?region=${location}&units=metric`);
      console.log(data);
      const res = await data.json();
      setStarter(filterPlans(res).starter);
      setPremium(filterPlans(res).premium);
      setProfessional(filterPlans(res).professional);
    }
    getPlans();
  }, [location]);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {starter && <CardStarter currency={starter.currency} price={starter.price} location={location} />}
        {premium && <CardPremium price={premium.price} currency={premium.currency} location={location} />}
        {professional && (
          <CardProfessional price={professional.price} currency={professional.currency} location={location} />
        )}
        <Flags location={location} setLocation={setLocation} />
      </div>
    </div>
  );
};

export default Plans;

function filterPlans(plans: ApiResponse[]) {
  const acceptedPlans = ["starter", "premium", "professional"];
  const filteredPlans = plans.filter((plan) => acceptedPlans.includes(plan.plan.name.toLowerCase()));
  const starterData = filteredPlans.find((plan) => plan.plan.name.toLowerCase() === "starter");
  const premiumData = filteredPlans.find((plan) => plan.plan.name.toLowerCase() === "premium");
  const professionalData = filteredPlans.find((plan) => plan.plan.name.toLowerCase() === "professional");
  const starter = pricesForPlans(starterData);
  const premium = pricesForPlans(premiumData);
  const professional = pricesForPlans(professionalData);
  return { starter, premium, professional };
}

function pricesForPlans(plan: ApiResponse | undefined) {
  if (plan) {
    return { price: plan.yearly_rate, currency: plan.currency, language: plan.region };
  }
  return null;
}
