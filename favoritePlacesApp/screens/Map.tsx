import { NavigationProp, useNavigation } from "@react-navigation/native";
import React, { FC, useCallback, useLayoutEffect, useState } from "react";
import { Alert, StyleSheet } from "react-native";
import MapView, {
  LatLng,
  MapPressEvent,
  Marker,
  Region,
} from "react-native-maps";
import IconButton from "../components/UI/IconButton";
import { RootStackNavigator } from "../types/Place.types";

interface IMapsProps {}

const Map: FC<IMapsProps> = () => {
  const navigation = useNavigation<NavigationProp<RootStackNavigator>>();
  const [selectedLocation, setSelectedLocation] = useState<LatLng>();

  const region: Region = {
    latitude: 37.38,
    longitude: -122.43,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  const selectLocationHandler = (event: MapPressEvent) => {
    const lat = event.nativeEvent.coordinate.latitude;
    const lng = event.nativeEvent.coordinate.longitude;
    setSelectedLocation({ latitude: lat, longitude: lng });
  };

  const savePickedLocationHandler = useCallback(() => {
    if (!selectedLocation) {
      Alert.alert(
        "No Location Picked",
        "You have to pick a location (By tapping in the map)"
      );
      return;
    }
    navigation.navigate("AddPlace", { pickedLocation: selectedLocation });
  }, [navigation, selectedLocation]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconButton
          icon="save"
          size={24}
          color={"black"}
          onPress={savePickedLocationHandler}
        />
      ),
    });
  }, [navigation, savePickedLocationHandler]);

  return (
    <MapView
      style={styles.map}
      initialRegion={region}
      onPress={selectLocationHandler}
    >
      {selectedLocation && (
        <Marker
          title="Picked Location"
          coordinate={{
            latitude: selectedLocation.latitude,
            longitude: selectedLocation.longitude,
          }}
        />
      )}
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});

export default Map;
