import React, { FC } from "react";
import PlaceForm from "../components/Places/PlaceForm";
import { AddPlaceProps } from "../types/Place.types";

const AddPlace: FC<AddPlaceProps> = ({}) => {
  return <PlaceForm />;
};

export default AddPlace;
