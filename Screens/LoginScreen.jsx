import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  TouchableWithoutFeedback, // імпорт компонента обгортки
  Keyboard,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useState, useCallback, useRef } from "react";

import { Input } from "../components/Input";
import { SubmitButton } from "../components/Button";

export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(true);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  const emailHandler = (text) => setEmail(text);
  const passwordHandler = (pass) => setPassword(pass);
  const showPassHandler = () => setShowPass((prev) => !prev);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.backImg}
          source={require("../assets/img/back.png")}
        >
          <KeyboardAvoidingView behavior="position">
            <View style={styles.div}>
              <Text style={styles.title}>Увійти</Text>
              <Input
                holder="Адрес елекроної пошти"
                type="email-address"
                security={false}
                value={email}
                onChangeText={emailHandler}
                setIsShowKeyboard={setIsShowKeyboard}
              ></Input>
              <Input
                holder="Пароль"
                security={showPass}
                changeSecurity={showPassHandler}
                value={password}
                onChangeText={passwordHandler}
                setIsShowKeyboard={setIsShowKeyboard}
              ></Input>
              <SubmitButton
                title="Увійти"
                data={{ email, password }}
                onPress={() => navigation.navigate("Home")}
              ></SubmitButton>
              <Text
                style={{
                  ...styles.textDecol,
                  marginBottom: isShowKeyboard ? 32 : 144,
                }}
                onPress={() => navigation.navigate("Registration")}
              >
                Нема акаунту? Зареєструватися
              </Text>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backImg: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  div: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,

    paddingHorizontal: 16,
  },
  title: {
    marginTop: 32,
    marginBottom: 32,
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
  },
  textDecol: {
    textAlign: "center",
    marginTop: 16,

    color: "#1B4371",
  },
});
