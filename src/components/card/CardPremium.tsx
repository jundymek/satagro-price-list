import React from "react";
import { useLocationState } from "../../context/locationContext";
import { translation } from "../../helpers/translations";
import Card from "./Card";
import CardDescription from "./CardDescription";

interface CardPremiumProps {
  price: number;
  currency: string;
}

const CardPremium = ({ price, currency }: CardPremiumProps) => {
  const { location } = useLocationState();
  const description = translation[location].premium.description;
  const buttonText = translation[location].premium.button;
  return (
    <Card type="premium" price={price} currency={currency} buttonText={buttonText}>
      <CardDescription description={description} />
    </Card>
  );
};

export default CardPremium;
