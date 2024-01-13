import {
  ImagePickerResult,
  PermissionStatus,
  launchCameraAsync,
  useCameraPermissions,
} from "expo-image-picker";
import { FC, useState } from "react";
import { Alert, Image, StyleSheet, Text, View } from "react-native";
import { Colors } from "../../constants/Color";
import { ImagePickerProps } from "../../types/Place.types";
import OutlineButton from "../UI/OutlineButton";

const ImagePicker: FC<ImagePickerProps> = ({ onImagePicker }) => {
  const [cameraPermissionStatus, requestPermission] = useCameraPermissions();
  const [pickedImage, setPickedImage] = useState<ImagePickerResult>();

  async function verifyPermission() {
    if (cameraPermissionStatus?.status === PermissionStatus.UNDETERMINED) {
      const permissionResponse = await requestPermission();

      return permissionResponse.granted;
    }
    if (cameraPermissionStatus?.status === PermissionStatus.DENIED) {
      Alert.alert(
        "Insufficient permission!",
        "You need to grant camera access to use this app"
      );
      return false;
    }
    return true;
  }
  async function takeImageHandler() {
    const hasPermission = await verifyPermission();
    if (!hasPermission) {
      return;
    }
    const image = await launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5,
    });
    if (!image.assets) {
      return;
    }

    setPickedImage(image);
    onImagePicker(image.assets[0].uri);
  }
  let imagePreview = <Text>No image taken yet</Text>;

  if (pickedImage && pickedImage.assets && pickedImage.assets.length > 0) {
    imagePreview = (
      <Image style={styles.image} source={{ uri: pickedImage.assets[0].uri }} />
    );
  }
  return (
    <View>
      <View style={styles.imagePreview}>{imagePreview}</View>
      <OutlineButton onPress={takeImageHandler} icon="camera">
        Take Image
      </OutlineButton>
    </View>
  );
};

const styles = StyleSheet.create({
  imagePreview: {
    width: "100%",
    height: 200,
    marginVertical: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary100,
    borderRadius: 4,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default ImagePicker;
