import React from "react";
import { translation } from "../../helpers/translations";
import Card from "./Card";
import CardDescription from "./CardDescription";

interface CardStarterProps {
  currency: string;
  price: number;
  location: "PL" | "CZ" | "LT" | "SK";
}

const CardStarter = ({ currency, price, location }: CardStarterProps) => {
  const description = translation[location].starter.description;
  const buttonText = translation[location].starter.button;
  return (
    <Card type="starter" currency={currency} price={price} buttonText={buttonText} location={location}>
      <CardDescription description={description} />
    </Card>
  );
};

export default CardStarter;
