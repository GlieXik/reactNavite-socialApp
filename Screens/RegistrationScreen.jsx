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
import Svg, { Circle, Path } from "react-native-svg";

export const RegistrationScreen = ({ navigation }) => {
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
      <View style={styles.container}>
        <ImageBackground
          style={styles.backImg}
          source={require("../assets/img/back.png")}
        >
          <KeyboardAvoidingView behavior="position">
            <View style={styles.div}>
              <View style={styles.photo}>
                <View style={styles.add}>
                  <Svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <Circle
                      cx="12.5"
                      cy="12.5"
                      r="12"
                      fill="white"
                      stroke="#FF6C00"
                    />
                    <Path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M13 6H12V12H6V13H12V19H13V13H19V12H13V6Z"
                      fill="#FF6C00"
                    />
                  </Svg>
                </View>
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
                onPress={() => navigation.navigate("Home")}
              ></SubmitButton>
              <Text
                style={{
                  ...styles.textDecol,
                  marginBottom: isShowKeyboard ? 32 : 78,
                }}
                onPress={() => navigation.navigate("Login")}
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
  add: {
    position: "absolute",
    right: -10,
    bottom: 14,
  },
});
