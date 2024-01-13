import React, { FC, useEffect, useState } from "react";
import PlacesList from "../components/Places/PlacesList";
import { AllPlacesProps } from "../types/Place.types";
import { useIsFocused } from "@react-navigation/native";
import { Place } from "../models/place";

const AllPlaces: FC<AllPlacesProps> = ({ route }) => {
  const [loadedPlaces, SetLoadedPlaces] = useState<Place[]>([]);
  const isFocused = useIsFocused();
  useEffect(() => {
    if (isFocused && route.params) {
      SetLoadedPlaces((curPlaces) => [...curPlaces, route.params.place]);
    }
  }, [isFocused, route]);
  return <PlacesList places={loadedPlaces} />;
};

export default AllPlaces;
