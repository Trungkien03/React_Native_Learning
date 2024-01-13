import React, { FC } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { IPlaceItemProps } from "../../types/Place.types";

const PlaceItem: FC<IPlaceItemProps> = ({ place, onSelect }) => {
  return (
    <Pressable onPress={onSelect}>
      <Image source={{ uri: place.imageUri }} />
      <View>
        <Text>{place.title}</Text>
        <Text>{place.address}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({});

export default PlaceItem;
