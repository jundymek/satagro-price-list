import React, { useEffect, useState } from "react";
import styles from "./plans.module.scss";
import CardStarter from "../card/CardStarter";
import CardPremium from "../card/CardPremium";
import CardProfessional from "../card/CardProfessional";
import Flags from "../flags/Flags";
import { useLocationState } from "../../context/locationContext";
import { translation } from "../../helpers/translations";
import ErrorComponent from "../error/ErrorComponent";
import LoadingSpinner from "../loadingSpinner/LoadingSpinner";
import { getPlans } from "./utils/getPlans";

interface PlanProps {
  price: number;
  currency: string;
  language: string;
}

const Plans = () => {
  const [starter, setStarter] = useState<PlanProps | undefined>();
  const [premium, setPremium] = useState<PlanProps | undefined>();
  const [professional, setProfessional] = useState<PlanProps | undefined>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | undefined>(undefined);
  const { location } = useLocationState();

  useEffect(() => {
    async function getData() {
      setIsLoading(true);
      try {
        const data = await fetch(`https://app.satagro.pl/api/plans/?region=${location}&units=metric`);
        const res = await data.json();
        if (!res.length) {
          throw new Error("Brak danych");
        }
        const { starter, premium, professional } = getPlans(res);
        setStarter(starter);
        setPremium(premium);
        setProfessional(professional);
        setIsLoading(false);
        if (!starter && !premium && !professional) {
          throw new Error("Brak danych");
        }
      } catch (err) {
        console.log(err);
        setError(translation[location].fetchError);
        setIsLoading(false);
      }
    }
    getData();
  }, [location]);

  if (isLoading) {
    return (
      <div className={styles.loading}>
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <ErrorComponent error={error} />;
  } else {
    return (
      <div className={styles.wrapper}>
        {starter && <CardStarter currency={starter.currency} price={starter.price} />}
        {premium && <CardPremium price={premium.price} currency={premium.currency} />}
        {professional && <CardProfessional price={professional.price} currency={professional.currency} />}
        <Flags />
      </div>
    );
  }
};

export default Plans;
