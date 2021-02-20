import { useEffect, useState } from "react";

type UserLocation = "PL" | "CZ" | "LT" | "SK";

export function useGetUserLocation() {
  const [location, setLocation] = useState<UserLocation>("PL");

  useEffect(() => {
    async function getData() {
      const acceptedLocations = ["PL", "CZ", "LT", "SK"];
      const location = await getUserLocation();
      if (acceptedLocations.includes(location)) {
        setLocation(location.countryCode);
      }
    }
    getData();
  }, []);

  return { location };
}

async function getUserLocation() {
  const data = await fetch("http://ip-api.com/json");
  const res = await data.json();
  return res;
}
