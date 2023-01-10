import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { useState, useEffect, useRef } from "react";
import { SubmitButton } from "../components/Button";
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";

export const CreatePostsScreen = () => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");

  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [photo, setPhoto] = useState("");
  const [type, setType] = useState(Camera.Constants.Type.back);
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      await MediaLibrary.requestPermissionsAsync();

      setHasPermission(status === "granted");
    })();
  }, []);
  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView behavior="position" style={styles.container}>
        <Camera style={styles.cameraContainer} type={type} ref={setCameraRef}>
          <View style={styles.donePhoto}>
            <Image
              source={{ uri: photo }}
              style={{ height: "100%", width: "100%" }}
            />
          </View>
          <TouchableOpacity
            style={styles.cameraCircle}
            onPress={async () => {
              const photo = await cameraRef.takePictureAsync();

              setPhoto(photo.uri);
            }}
          >
            <Ionicons name="camera" size={24} color="#BDBDBD" />
          </TouchableOpacity>
        </Camera>

        <Text style={styles.cameraText}>Загрузити фото</Text>

        <TextInput
          placeholder="Назва"
          style={styles.inputName}
          value={name}
          onChangeText={(text) => setName(text)}
        ></TextInput>
        <TextInput
          placeholder="Локіція"
          style={styles.inputLocation}
          value={location}
          onChangeText={(text) => setLocation(text)}
        ></TextInput>
        <SubmitButton
          title="Опублікувати"
          data={{ name, location }}
          onPress={() => {}}
        ></SubmitButton>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
  },
  cameraContainer: {
    width: "100%",
    height: 240,
    backgroundColor: "#f6f6f6",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 32,
  },
  donePhoto: {
    position: "absolute",

    width: "100%",
    height: "100%",
    borderRadius: 8,
  },
  cameraCircle: {
    backgroundColor: "#fff",
    borderRadius: 100,
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
  },
  cameraText: {
    marginTop: 8,
    color: "#BDBDBD",
    fontSize: 16,
    marginBottom: 32,
  },
  inputName: {
    borderBottomColor: "#BDBDBD",
    borderBottomWidth: 1,
    paddingVertical: 15,
    marginBottom: 16,
  },
  inputLocation: {
    borderBottomColor: "#BDBDBD",
    borderBottomWidth: 1,
    paddingVertical: 15,
  },
});
