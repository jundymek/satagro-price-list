import React, { useEffect, useState } from "react";
require("dotenv").config();

export type UserLocation = "PL" | "CZ" | "LT" | "SK";

interface LocationProviderProps {
  children: React.ReactNode;
}
interface LocationState {
  location: UserLocation;
}

interface Dispatch {
  setLocation: React.Dispatch<React.SetStateAction<UserLocation>>;
}

export const LocationStateContext = React.createContext<LocationState>({
  location: "PL",
});

const LocationDispatchContext = React.createContext<Dispatch | undefined>(undefined);

function LocationProvider({ children }: LocationProviderProps) {
  const [location, setLocation] = useState<UserLocation>("PL");

  useEffect(() => {
    async function getData() {
      const acceptedLocations = ["PL", "CZ", "LT", "SK"];
      const location = await getUserLocation();
      console.log(location);
      if (acceptedLocations.includes(location.country_code)) {
        setLocation(location.country_code);
      }
    }
    getData();
  }, []);

  const state = { location };
  const dispatch = { setLocation };

  return (
    <LocationStateContext.Provider value={state}>
      <LocationDispatchContext.Provider value={dispatch}>{children}</LocationDispatchContext.Provider>
    </LocationStateContext.Provider>
  );
}

function useLocationState() {
  const context = React.useContext(LocationStateContext);
  if (context === undefined) {
    throw new Error("useLocationState must be used within a LocationProvider");
  }
  return context;
}
function useLocationDispatch() {
  const context = React.useContext(LocationDispatchContext);
  if (context === undefined) {
    throw new Error("useLocationDispatch must be used within a LocationProvider");
  }
  return context;
}

export { LocationProvider, useLocationState, useLocationDispatch };

async function getUserLocation() {
  const data = await fetch(`https://geolocation-db.com/json`);
  const res = await data.json();
  return res;
}
