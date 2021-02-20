import React, { useEffect, useState } from "react";

type UserLocation = "PL" | "CZ" | "LT" | "SK";

export function useGetUserLocation() {
  const [location, setLocation] = useState<UserLocation>("PL");

  useEffect(() => {
    const dupa = getUserLocation();
    console.log(dupa);
  }, []);

  return { location };
}

function getUserLocation() {
  fetch("http://ip-api.com/json")
    .then((res) => res.json())
    .then((response) => {
      console.log(response);
      return response.countryCode;
    });
}
