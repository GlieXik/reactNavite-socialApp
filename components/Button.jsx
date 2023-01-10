import { Text, StyleSheet, Alert, Pressable } from "react-native";

export const SubmitButton = ({ title, data, onPress }) => {
  const submit = () => {
    console.log(data);
    onPress();
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

    marginTop: 32,
    paddingVertical: 16,
    borderRadius: 100,

    backgroundColor: "#FF6C00",
  },
  text: {
    fontSize: 16,
    color: "#fff",
  },
});
