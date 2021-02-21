import React from "react";
import Plans from "./components/plans/Plans";
import styles from "./app.module.scss";
import Hero from "./components/hero/Hero";
import { LocationProvider } from "./context/locationContext";

function App() {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className={styles.curved}>
          <path
            fillOpacity="1"
            d="M0,224L288,64L576,160L864,288L1152,224L1440,160L1440,320L1152,320L864,320L576,320L288,320L0,320Z"
          ></path>
        </svg>
      </div>
      <div className={styles.main}>
        <LocationProvider>
          <Hero />
          <Plans />
        </LocationProvider>
      </div>

      <div className={styles.bottom}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className={styles.curvedBottom}>
          <path
            fillOpacity="1"
            d="M0,224L288,64L576,160L864,288L1152,224L1440,160L1440,320L1152,320L864,320L576,320L288,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
}

export default App;
