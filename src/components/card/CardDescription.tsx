import React from "react";
import styles from "./card.module.scss";

interface CardDescriptionProps {
  description: string[];
}

const CardDescription = ({ description }: CardDescriptionProps) => {
  return (
    <>
      {description.map((paragraph, index) =>
        index === description.length - 1 ? (
          <p key={index} className={`${styles.text} ${styles.text__last}`}>
            {paragraph}
          </p>
        ) : (
          <p key={index} className={styles.text}>
            {paragraph}
          </p>
        )
      )}
    </>
  );
};

export default CardDescription;
