import React from "react";
import styles from "./error.module.scss";
import ErrorPicture from "./ErrorPicture";

interface ErrorComponentProps {
  error: string;
}

const ErrorComponent = ({ error }: ErrorComponentProps) => {
  return (
    <section className={styles.error}>
      <h3 className={styles.errorTitle}>{error}</h3>
      <ErrorPicture />
    </section>
  );
};

export default ErrorComponent;
