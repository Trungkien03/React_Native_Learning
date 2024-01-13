import React, { FC } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { PlacesListProps } from "../../types/Place.types";
import PlaceItem from "./PlaceItem";
import { Colors } from "../../constants/Color";

const PlacesList: FC<PlacesListProps> = ({ places }) => {
  if (!places || places.length === 0) {
    return (
      <View style={styles.fallbackContainer}>
        <Text style={styles.fallbackText}>No Places </Text>
      </View>
    );
  }

  const onSelectItem = () => {};

  return (
    <FlatList
      data={places}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <PlaceItem place={item} onSelect={onSelectItem} key={item.id} />
      )}
    />
  );
};

const styles = StyleSheet.create({
  fallbackContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  fallbackText: {
    fontSize: 15,
    color: Colors.primary200,
  },
});

export default PlacesList;
