import {
  PermissionStatus,
  getCurrentPositionAsync,
  useForegroundPermissions,
} from "expo-location";
import { FC } from "react";
import { Alert, StyleSheet, View } from "react-native";
import { Colors } from "../../constants/Color";
import OutlineButton from "../UI/OutlineButton";

interface LocationPickerProps {}

const LocationPicker: FC<LocationPickerProps> = () => {
  const [locationPermissionInfo, requestPermission] =
    useForegroundPermissions();
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
    console.log(location);
  };
  const pickOnMapHandler = () => {};

  return (
    <View>
      <View style={styles.mapPreview}></View>
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
});

export default LocationPicker;
