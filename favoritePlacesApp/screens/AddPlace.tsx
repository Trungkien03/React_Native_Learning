import React, { FC } from "react";
import PlaceForm from "../components/Places/PlaceForm";
import { AddPlaceProps } from "../types/Place.types";
import { Place } from "../models/place";

const AddPlace: FC<AddPlaceProps> = ({ navigation }) => {
  const createPlaceHandler = (place: Place) => {
    navigation.navigate("AllPlaces", { place: place });
  };
  return <PlaceForm onCreatePlace={createPlaceHandler} />;
};

export default AddPlace;
