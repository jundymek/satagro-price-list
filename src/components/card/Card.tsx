import React from "react";
import "./Card.scss";

const Card = () => {
  return (
    <section className="card">
      <div className="card__title-wrapper">
        <h2 className="card__title">PREMIUM</h2>
        <p className="card__price">
          15 <span>PLN</span>
        </p>
      </div>
      <div className="card__text-wrapper">
        <p className="card__text">All services included in Professional</p>
        <p className="card__text">
          High resolution monitoring with "Planet" Sensor integration (IoT, weather stations, etc)
        </p>
        <p className="card__text card__text--last">Agronomy advice</p>
        <button className="card__button">Buy this plan</button>
      </div>
    </section>
  );
};

export default Card;
