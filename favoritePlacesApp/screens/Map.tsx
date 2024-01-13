import React, { FC, useState } from "react";
import { StyleSheet, View } from "react-native";
import MapView, {
  LatLng,
  MapPressEvent,
  Marker,
  Region,
} from "react-native-maps";

interface IMapsProps {}

const Map: FC<IMapsProps> = () => {
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
