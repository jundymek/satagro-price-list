import React, { useEffect } from "react";
import "./Plans.scss";
import Card from "../card/Card";

const Plans = () => {
  async function getPlans() {
    const data = await fetch("https://app.satagro.pl/api/plans/?region=CZ&units=metric");
    const res = await data.json();
    console.log(res);
  }

  useEffect(() => {
    getPlans();
  }, []);
  return (
    <div className="wrapper">
      <Card />
    </div>
  );
};

export default Plans;
