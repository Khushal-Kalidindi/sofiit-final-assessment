import React, { ReactNode } from "react";
import { StyleSheet, TextInput, TextInputProps, View } from "react-native";
import {
  ThemedText,
  styles as ThemeTextStyles,
  fontColors,
} from "@/components/text/ThemedText";

export interface ThemedTextInputProps extends TextInputProps {
  children?: ReactNode;
}

const ThemedTextInput: React.FC<ThemedTextInputProps> = ({
  style,
  children,
  ...props
}) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={[
          styles.input,
          ThemeTextStyles.semiBold,
          { color: fontColors["dark"], outline: "none" },
          style,
        ]}
        placeholderTextColor={fontColors["grey"]}
        {...props}
      />
      {children ? children : null}
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    display: "flex",
    flexDirection: "row",
    padding: 0,
    margin: 0,
    width: "100%",
  },
  input: {
    flex: 1,
    height: 24,
    width: "100%",
    backgroundColor: "transparent",
    padding: 0,
    borderWidth: 0,
    marginVertical: 5,
  },
});

export default ThemedTextInput;
