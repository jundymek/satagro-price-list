import React from "react";
import styles from "./card.module.scss";
import { Icon } from "@iconify/react";
import currencyKroneCzech from "@iconify/icons-tabler/currency-krone-czech";
import currencyEuro from "@iconify/icons-carbon/currency-euro";
import { translation } from "../../helpers/translations";
import clsx from "clsx";

interface CardPrizeProps {
  type: "starter" | "premium" | "professional";
  location: "PL" | "CZ" | "LT" | "SK";
  price: number;
  currency: string;
}

const CardPrice = ({ type, price, currency, location }: CardPrizeProps) => {
  const yearText = translation[location].year;
  const gratis = translation[location].starter.price;
  const getCurrencyIcon = (currency: string) => {
    switch (currency) {
      case "CZK":
        return currencyKroneCzech;
      case "EUR":
        return currencyEuro;
      default:
        return currencyEuro;
    }
  };

  const yearClass = clsx(styles.priceYear, {
    [styles.priceYearPln]: location === "PL",
  });

  if (type === "starter") return <p className={styles.price}>{gratis}</p>;
  return (
    <p className={styles.price}>
      {price}{" "}
      <span className={styles.priceCurrency}>
        {currency !== "PLN" ? <Icon icon={getCurrencyIcon(currency)} className={styles.priceCurrencyIcon} /> : "PLN"}
      </span>
      <span className={yearClass}>ha / {yearText}</span>
    </p>
  );
};

export default CardPrice;
