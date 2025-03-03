import { useState } from "react";
import {
  Button,
  Image,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import ImageIcon from "../../assets/images/image-icon.svg";
import PlusIcon from "../../assets/images/plus-icon.svg";
import RedoIcon from "../../assets/images/redo-icon.svg";

export default function ThemedImagePicker({
  onImagePick,
}: {
  onImagePick?: (uri: string) => void;
}) {
  const [image, setImage] = useState<string | null>(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      const selectedImageUri = result.assets[0].uri;
      setImage(selectedImageUri);
      // Call the onImagePick callback if provided
      if (onImagePick) {
        onImagePick(selectedImageUri);
      }
    }
  };

  return (
    <TouchableOpacity onPress={pickImage}>
      <View style={styles.container}>
        {!image ? (
          <>
            <ImageIcon width={32} height={32} />
          </>
        ) : (
          <>
            <Image
              source={{ uri: image }}
              style={styles.image}
              width={32}
              height={32}
            />
          </>
        )}
      </View>
      {!image ? (
        <View style={[styles.imagePickerIconContainer]}>
          <PlusIcon width={24} height={24} />
        </View>
      ) : (
        <View
          style={[
            styles.imagePickerIconContainer,
            { backgroundColor: "#3F0835" },
          ]}
        >
          <RedoIcon width={24} height={24} />
        </View>
      )}

      {/* <Button title="Pick an image from camera roll" onPress={pickImage} />
      {image && <Image source={{ uri: image }} style={styles.image} />} */}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 150,
    borderRadius: "50%",
    borderWidth: 1,
    borderColor: "#E2E2E2",
    backgroundColor: "#F8F8F8",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  imagePickerIconContainer: {
    width: 32,
    height: 32,
    borderRadius: "50%",
    backgroundColor: "#F1301B",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 5,
    right: 5,
  },
  image: {
    width: 150,
    height: 150,
  },
});
