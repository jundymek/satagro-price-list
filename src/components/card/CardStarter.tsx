import React from "react";
import { useLocationState } from "../../context/locationContext";
import { translation } from "../../helpers/translations";
import Card from "./Card";
import CardDescription from "./CardDescription";

interface CardStarterProps {
  currency: string;
  price: number;
}

const CardStarter = ({ currency, price }: CardStarterProps) => {
  const { location } = useLocationState();
  const description = translation[location].starter.description;
  const buttonText = translation[location].starter.button;
  return (
    <Card type="starter" currency={currency} price={price} buttonText={buttonText}>
      <CardDescription description={description} />
    </Card>
  );
};

export default CardStarter;
