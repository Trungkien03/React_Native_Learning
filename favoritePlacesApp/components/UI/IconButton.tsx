import { Ionicons } from "@expo/vector-icons";
import React, { FC } from "react";
import { Pressable, StyleSheet } from "react-native";
import { IconButtonProps } from "../../types/Place.types";

const IconButton: FC<IconButtonProps> = ({ onPress, icon, size, color }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
    >
      <Ionicons name={icon} size={size} color={color} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 8,
    margin: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  pressed: {
    opacity: 0.7,
  },
});

export default IconButton;
