import React, { FC, useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { PlaceFormProps } from "../../types/Place.types";
import { Colors } from "../../constants/Color";
import ImagePicker from "./ImagePicker";

const PlaceForm: FC<PlaceFormProps> = () => {
  const [enteredTitle, setEnteredTitle] = useState("");

  const changeEnteredTitle = (enterTitle: string) => {
    setEnteredTitle(enterTitle);
  };

  return (
    <ScrollView style={styles.form}>
      <View>
        <Text style={styles.label}>Title</Text>
        <TextInput style={styles.input} onChangeText={changeEnteredTitle} />
      </View>
      <ImagePicker />
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
