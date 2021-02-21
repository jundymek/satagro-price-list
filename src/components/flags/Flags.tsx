import React from "react";
import slovakia from "../../assets/slovakia_flag.png";
import poland from "../../assets/poland_flag.png";
import czech from "../../assets/czech_republic_flag.png";
import lithuania from "../../assets/lithuania.png";
import styles from "./flags.module.scss";
import clsx from "clsx";
import { useLocationDispatch, useLocationState, UserLocation } from "../../context/locationContext";

const Flags = () => {
  const { location } = useLocationState();
  const { setLocation } = useLocationDispatch();
  const titleWrapperClass = (flag: UserLocation) =>
    clsx(styles.flag, {
      [styles.flagActive]: flag === location,
    });

  return (
    <div className={styles.flagsWrapper}>
      <button onClick={() => setLocation("PL")} className={styles.button}>
        <img src={poland} alt="" className={titleWrapperClass("PL")} />
      </button>
      <button onClick={() => setLocation("SK")} className={styles.button}>
        <img src={slovakia} alt="" className={titleWrapperClass("SK")} />
      </button>
      <button onClick={() => setLocation("CZ")} className={styles.button}>
        <img src={czech} alt="" className={titleWrapperClass("CZ")} />
      </button>
      <button onClick={() => setLocation("LT")} className={styles.button}>
        <img src={lithuania} alt="" className={titleWrapperClass("LT")} />
      </button>
    </div>
  );
};

export default Flags;
