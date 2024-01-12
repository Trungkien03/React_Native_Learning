import React, { FC } from "react";
import { FlatList, Text, View } from "react-native";
import { Place } from "../../models/place";

interface PlacesListProps {
  places: Place[];
}

const PlacesList: FC<PlacesListProps> = ({ places }) => {
  return (
    <FlatList data={places} keyExtractor={(item) => item.id} renderItem={} />
  );
};

export default PlacesList;
