import { useState, useRef } from "react";
import { TextInput, StyleSheet, View, Text } from "react-native";

export const Input = ({
  holder,
  type,
  security,
  value,
  onChangeText,
  changeSecurity,

  setIsShowKeyboard,
}) => {
  const [focus, setFocus] = useState(false);

  const focusHandlerTrue = () => {
    setIsShowKeyboard(true);
    setFocus(true);
  };
  const focusHandlerFalse = () => {
    setIsShowKeyboard(false);
    setFocus(false);
  };
  return (
    <View>
      <TextInput
        style={{
          ...styles.input,
          backgroundColor: focus ? "#fff" : "#f6f6f6",
          borderColor: focus ? "#ff6c00" : "#e8e8e8",
        }}
        placeholder={holder}
        keyboardType={type}
        secureTextEntry={security ? true : false}
        onFocus={focusHandlerTrue}
        onBlur={focusHandlerFalse}
        value={value}
        onChangeText={onChangeText}
      />

      {!type && (
        <Text style={styles.show} onPress={changeSecurity}>
          Показати
        </Text>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    backgroundColor: "#f6f6f6",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#e8e8e8",
    height: 50,
    padding: 16,
    marginBottom: 16,
  },
  show: {
    position: "absolute",
    right: 0,
    padding: 16,
    color: "#1B4371",
  },
});
