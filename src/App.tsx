import React from "react";
import Plans from "./components/plans/Plans";
import styles from "./app.module.scss";
function App() {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className={styles.curved}>
          <path
            fill-opacity="1"
            d="M0,224L288,64L576,160L864,288L1152,224L1440,160L1440,320L1152,320L864,320L576,320L288,320L0,320Z"
          ></path>
        </svg>
      </div>
      <Plans />

      <div className={styles.bottom}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className={styles.curvedBottom}>
          <path d="M0,224L48,197.3C96,171,192,117,288,106.7C384,96,480,128,576,165.3C672,203,768,245,864,256C960,267,1056,245,1152,224C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </div>
  );
}

export default App;
