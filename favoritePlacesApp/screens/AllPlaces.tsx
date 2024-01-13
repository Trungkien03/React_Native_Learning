import React, { FC } from "react";
import PlacesList from "../components/Places/PlacesList";
import { AllPlacesProps } from "../types/Place.types";

const AllPlaces: FC<AllPlacesProps> = () => {
  return <PlacesList places={[]} />;
};

export default AllPlaces;
