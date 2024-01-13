import React, { FC, useCallback, useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { PlaceFormProps } from "../../types/Place.types";
import { Colors } from "../../constants/Color";
import ImagePicker from "./ImagePicker";
import LocationPicker from "./LocationPicker";
import Button from "../UI/Button";
import { LocationObject } from "expo-location";

const PlaceForm: FC<PlaceFormProps> = () => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [pickedLocation, setPickedLocation] = useState<LocationObject>();
  const [selectedImage, setSelectedImage] = useState("");

  const changeEnteredTitle = useCallback((enterTitle: string) => {
    setEnteredTitle(enterTitle);
  }, []);

  const imageTakenHandler = useCallback((imageUri: string) => {
    setSelectedImage(imageUri);
  }, []);
  const pickedLocationHandler = useCallback((location: LocationObject) => {
    setPickedLocation(location);
  }, []);
  const savePlaceHandler = () => {
    console.log("enteredTitle", enteredTitle);
    console.log("pickedLocation", pickedLocation);
    console.log("selectedImage", selectedImage);
  };

  return (
    <ScrollView style={styles.form}>
      <View>
        <Text style={styles.label}>Title</Text>
        <TextInput style={styles.input} onChangeText={changeEnteredTitle} />
      </View>
      <ImagePicker onImagePicker={imageTakenHandler} />
      <LocationPicker onPickLocation={pickedLocationHandler} />
      <Button onPress={savePlaceHandler}>Add Place</Button>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  form: {
    flex: 1,
    padding: 24,
  },
  label: {
    fontWeight: "bold",
    marginBottom: 4,
    color: Colors.primary500,
  },
  input: {
    marginVertical: 8,
    paddingHorizontal: 4,
    paddingVertical: 8,
    fontSize: 16,
    borderBottomColor: Colors.primary700,
    borderBottomWidth: 2,
    backgroundColor: Colors.primary100,
  },
});

export default PlaceForm;
