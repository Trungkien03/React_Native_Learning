import { useNavigation } from "@react-navigation/native";
import {
  LocationObject,
  PermissionStatus,
  getCurrentPositionAsync,
  useForegroundPermissions,
} from "expo-location";
import { FC, useState } from "react";
import { Alert, Image, StyleSheet, Text, View } from "react-native";
import { Colors } from "../../constants/Color";
import { getMapPreview } from "../../utils/Location";
import OutlineButton from "../UI/OutlineButton";
import { NavigationProp } from "@react-navigation/native";
import { RootStackNavigator } from "../../types/Place.types";

interface LocationPickerProps {}

const LocationPicker: FC<LocationPickerProps> = () => {
  const [locationPermissionInfo, requestPermission] =
    useForegroundPermissions();

  const [pickedLocation, setPickedLocation] = useState<LocationObject>();
  const navigation = useNavigation<NavigationProp<RootStackNavigator>>();
  const verifyPermission = async () => {
    if (locationPermissionInfo?.status === PermissionStatus.UNDETERMINED) {
      const permissionResponse = await requestPermission();
      return permissionResponse.granted;
    }

    if (locationPermissionInfo?.status === PermissionStatus.DENIED) {
      Alert.alert(
        "Insufficient permission!",
        "You need to grant Location access to use this app"
      );
      return false;
    }
    return true;
  };

  const getLocationHandler = async () => {
    const hasPermission = await verifyPermission();
    if (!hasPermission) {
      return;
    }
    const location = await getCurrentPositionAsync();
    setPickedLocation(location);
  };
  const pickOnMapHandler = () => {
    navigation.navigate("Map");
  };

  let locationPreview = <Text>No Location Yet</Text>;

  if (pickedLocation?.coords) {
    locationPreview = (
      <Image
        style={styles.image}
        source={{
          uri: getMapPreview(
            pickedLocation?.coords.latitude,
            pickedLocation?.coords.longitude
          ),
        }}
      />
    );
  }

  return (
    <View>
      <View style={styles.mapPreview}>{locationPreview}</View>
      <View style={styles.actions}>
        <OutlineButton icon="location" onPress={getLocationHandler}>
          Locate User
        </OutlineButton>
        <OutlineButton icon="map" onPress={pickOnMapHandler}>
          Pick On Map
        </OutlineButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mapPreview: {
    width: "100%",
    height: 200,
    marginVertical: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary100,
    borderRadius: 4,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default LocationPicker;
