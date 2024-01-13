import { Ionicons } from "@expo/vector-icons";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Place } from "../models/place";
import { OpaqueColorValue } from "react-native";
import { LatLng } from "react-native-maps";
import { LocationObject } from "expo-location";
import { NavigationProp, RouteProp } from "@react-navigation/native";

export interface AddPlaceProps {
  navigation: NavigationProp<RootStackNavigator>;
  route: RouteProp<RootStackNavigator, "AddPlace">;
}

export interface AllPlacesProps {
  navigation: NavigationProp<RootStackNavigator>;
  route: RouteProp<RootStackNavigator, "AllPlaces">;
}
export interface PlaceFormProps {
  onCreatePlace: (item: Place) => void;
}

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
  AllPlaces: { place: Place };
  AddPlace?: { pickedLocation?: LatLng };
  Map: undefined;
};
