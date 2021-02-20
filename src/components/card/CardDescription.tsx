import React from "react";
import styles from "./card.module.scss";

interface CardDescriptionProps {
  description: string[];
}

const CardDescription = ({ description }: CardDescriptionProps) => {
  return (
    <ul className={styles.textList}>
      {description.map((paragraph, index) =>
        index === description.length - 1 ? (
          <li key={index} className={`${styles.text} ${styles.text__last}`}>
            {paragraph}
          </li>
        ) : (
          <li key={index} className={styles.text}>
            {paragraph}
          </li>
        )
      )}
    </ul>
  );
};

export default CardDescription;
