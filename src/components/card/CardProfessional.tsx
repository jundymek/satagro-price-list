import React from "react";
import { translation } from "../../helpers/translations";
import Card from "./Card";
import CardDescription from "./CardDescription";

interface CardProfessionalProps {
  price: number;
  currency: string;
  location: "PL" | "CZ" | "LT" | "SK";
}

const CardProfessional = ({ price, currency, location }: CardProfessionalProps) => {
  const description = translation[location].professional.description;
  const buttonText = translation[location].professional.button;
  return (
    <Card type="professional" price={price} currency={currency} buttonText={buttonText} location={location}>
      <CardDescription description={description} />
    </Card>
  );
};

export default CardProfessional;
