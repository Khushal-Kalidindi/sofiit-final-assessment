import React from "react";
import { StyleSheet, TextInput, TextInputProps } from "react-native";
import {
  ThemedText,
  styles as ThemeTextStyles,
  fontColors,
} from "@/components/text/ThemedText";

export interface ThemedTextInputProps extends TextInputProps {}

const ThemedTextInput: React.FC<ThemedTextInputProps> = ({
  style,
  ...props
}) => {
  return (
    <TextInput
      style={[
        styles.input,
        ThemeTextStyles.semiBold,
        { color: fontColors["dark"], outline: "none" },
        style, // Allows custom styles to be passed
      ]}
      placeholderTextColor={fontColors["grey"]}
      {...props} // Spread all TextInputProps
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 24,
    width: "100%",
    backgroundColor: "transparent",
    padding: 0,
    borderWidth: 0,
    marginVertical: 5,
  },
});

export default ThemedTextInput;
