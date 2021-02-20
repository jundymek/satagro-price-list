import React from "react";
import styles from "./card.module.scss";
import { Icon } from "@iconify/react";
import currencyKroneCzech from "@iconify/icons-tabler/currency-krone-czech";
import currencyEuro from "@iconify/icons-carbon/currency-euro";

interface CardPrizeProps {
  type: "starter" | "premium" | "professional";
  price: number;
  currency: string;
}

const CardPrice = ({ type, price, currency }: CardPrizeProps) => {
  console.log(currency);
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
  if (type === "starter") return <p className={styles.price}>Gratis</p>;
  return (
    <p className={styles.price}>
      {price}{" "}
      <span className={styles.priceCurrency}>
        {currency !== "PLN" ? <Icon icon={getCurrencyIcon(currency)} className={styles.priceCurrencyIcon} /> : "PLN"}
      </span>
    </p>
  );
};

export default CardPrice;
