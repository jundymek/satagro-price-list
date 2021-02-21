import { useEffect, useState } from "react";

export type UserLocation = "PL" | "CZ" | "LT" | "SK";

export function useGetUserLocation() {
  const [location, setLocation] = useState<UserLocation>("PL");

  useEffect(() => {
    async function getData() {
      const acceptedLocations = ["PL", "CZ", "LT", "SK"];
      const location = await getUserLocation();
      if (acceptedLocations.includes(location.countryCode)) {
        setLocation(location.countryCode);
      }
    }
    getData();
  }, []);

  return { location, setLocation };
}

async function getUserLocation() {
  const data = await fetch("http://ip-api.com/json");
  const res = await data.json();
  return res;
}
