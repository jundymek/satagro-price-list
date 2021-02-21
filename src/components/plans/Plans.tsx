import React, { useEffect, useState } from "react";
import styles from "./plans.module.scss";
import CardStarter from "../card/CardStarter";
import CardPremium from "../card/CardPremium";
import CardProfessional from "../card/CardProfessional";
import Flags from "../flags/Flags";
import { useLocationState } from "../../context/locationContext";
import { translation } from "../../helpers/translations";

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
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | undefined>(undefined);
  const { location } = useLocationState();

  useEffect(() => {
    async function getPlans() {
      setIsLoading(true);
      try {
        const data = await fetch(`https://app.satagro.pl/api/plans/?region=${location}&units=metric`);
        const res = await data.json();
        if (!res.length) {
          throw new Error("Brak danych");
        }
        setStarter(filterPlans(res).starter);
        setPremium(filterPlans(res).premium);
        setProfessional(filterPlans(res).professional);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
        setError(translation[location].fetchError);
        setIsLoading(false);
      }
    }
    getPlans();
  }, [location]);

  if (isLoading) {
    return <div className={styles.loading}>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  } else {
    return (
      <div className={styles.container}>
        <div className={styles.wrapper}>
          {starter && <CardStarter currency={starter.currency} price={starter.price} />}
          {premium && <CardPremium price={premium.price} currency={premium.currency} />}
          {professional && <CardProfessional price={professional.price} currency={professional.currency} />}
          <Flags />
        </div>
      </div>
    );
  }
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
