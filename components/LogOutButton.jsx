import { Image, StyleSheet, TouchableHighlight } from "react-native";

export const LogOutButton = ({ navigation }) => {
  return (
    <TouchableHighlight
      activeOpacity={0.6}
      underlayColor="#DDDDDD"
      onPress={() => {
        navigation.navigate("Login");
      }}
      style={styles.logout}
    >
      <Image source={require("../assets/img/logout.png")} />
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  logout: {
    marginRight: 16,
  },
});
