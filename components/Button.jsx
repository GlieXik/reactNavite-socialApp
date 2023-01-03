import { Text, StyleSheet, Alert, Pressable } from "react-native";

export const SubmitButton = ({ title, data }) => {
  const submit = () => {
    console.log(data);
  };
  return (
    <Pressable style={styles.button} onPress={submit}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 16,

    marginTop: 43 - 16,
    paddingVertical: 16,
    borderRadius: 100,
    elevation: 3,
    backgroundColor: "#FF6C00",
  },
  text: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    color: "#fff",
  },
});
