import React from "react";
import styles from "./error.module.scss";
import ErrorPicture from "./ErrorPicture";

interface ErrorComponentProps {
  error: string;
}

const ErrorComponent = ({ error }: ErrorComponentProps) => {
  return (
    <div className={styles.error}>
      <h2 className={styles.errorTitle}>{error}</h2>
      <ErrorPicture />
    </div>
  );
};

export default ErrorComponent;
