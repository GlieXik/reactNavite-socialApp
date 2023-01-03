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
import { Input } from "../components/Input";
import { SubmitButton } from "../components/Button";
import { useState } from "react";
import { SvgUri } from "react-native-svg";
import add from "../assets/img/add.svg";

export const RegistrationScreen = ({ onLayout }) => {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(true);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  const loginHandler = (text) => setLogin(text);
  const emailHandler = (text) => setEmail(text);
  const passwordHandler = (pass) => setPassword(pass);
  const showPassHandler = () => setShowPass((prev) => !prev);
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container} onLayout={onLayout}>
        <ImageBackground
          style={styles.backImg}
          source={require("../assets/img/back.png")}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
          >
            <View style={styles.div}>
              <View style={styles.photo}>
                <SvgUri width="100%" height="100%" svgXmlData={add}></SvgUri>
              </View>
              <Text style={styles.title}>Реєстрація</Text>
              <Input
                holder="Логін"
                type="email-address"
                security={false}
                value={login}
                onChangeText={loginHandler}
                setIsShowKeyboard={setIsShowKeyboard}
              ></Input>
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
                title="Зареєструватися"
                data={{ login, email, password }}
              ></SubmitButton>
              <Text
                style={{
                  ...styles.textDecol,
                  marginBottom: isShowKeyboard ? 32 : 78,
                }}
              >
                Є акаунт акаунту? Увійти
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
    marginTop: 92,
    marginBottom: 32,
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    fontFamily: "Roboto-Regular",
  },
  textDecol: {
    textAlign: "center",
    marginTop: 16,

    color: "#1B4371",
  },
  photo: {
    position: "absolute",
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
    top: -60,

    alignSelf: "center",
  },
});
