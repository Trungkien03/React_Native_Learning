import { Ionicons } from "@expo/vector-icons";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Place } from "../models/place";
import { OpaqueColorValue } from "react-native";

export interface AddPlaceProps {}

export interface AllPlacesProps {}

export interface PlaceFormProps {}

export interface PlacesListProps {
  places: Place[];
}

export interface ImagePickerProps {}

export type IconButtonProps = {
  icon: keyof typeof Ionicons.glyphMap;
  color: OpaqueColorValue | string;
  size: number;
  onPress: () => void;
};

export type OptionsProps = {
  navigation: NativeStackNavigationProp<RootStackNavigator>;
};

export interface IPlaceItemProps {
  place: Place;
  onSelect: () => void;
}

export type RootStackNavigator = {
  AllPlaces: undefined;
  AddPlace: undefined;
  Map: undefined;
};
