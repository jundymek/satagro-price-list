import React from "react";
import { useLocationState } from "../../context/locationContext";
import { translation } from "../../helpers/translations";
import Card from "./Card";
import CardDescription from "./CardDescription";

interface CardProfessionalProps {
  price: number;
  currency: string;
}

const CardProfessional = ({ price, currency }: CardProfessionalProps) => {
  const { location } = useLocationState();
  const description = translation[location].professional.description;
  const buttonText = translation[location].professional.button;
  return (
    <Card type="professional" price={price} currency={currency} buttonText={buttonText}>
      <CardDescription description={description} />
    </Card>
  );
};

export default CardProfessional;
