import { Ionicons } from "@expo/vector-icons";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Place } from "../models/place";
import { OpaqueColorValue } from "react-native";
import { LatLng } from "react-native-maps";
import { LocationObject } from "expo-location";

export interface AddPlaceProps {}

export interface AllPlacesProps {}

export interface PlaceFormProps {}

export interface PlacesListProps {
  places: Place[];
}

export interface ImagePickerProps {
  onImagePicker: (image: string) => void;
}

export interface LocationPickerProps {
  onPickLocation: (location: LocationObject) => void;
}

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
  AddPlace?: { pickedLocation?: LatLng };
  Map: undefined;
};
