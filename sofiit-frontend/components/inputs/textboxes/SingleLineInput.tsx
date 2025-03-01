import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ThemedTextInput from "./ThemedTextInput";
import { ThemedTextInputProps } from "./ThemedTextInput";
import { ThemedText } from "../../text/ThemedText";

export interface SingleLineInputProps extends ThemedTextInputProps {
  label?: string;
  error?: string;
}

const SingleLineInput: React.FC<SingleLineInputProps> = ({
  label,
  error,
  ...props
}) => {
  return (
    <View style={{ width: "100%" }}>
      {label && (
        <ThemedText
          color="dark"
          weight="regular"
          style={{ marginBottom: 4, marginLeft: 8 }}
        >
          {label}
        </ThemedText>
      )}
      <View style={styles.container}>
        <ThemedTextInput {...props} />
        {/* {error && <ThemedText style={styles.error}>{error}</ThemedText>} */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    width: "100%",
    height: 56,
    borderRadius: 30,
    paddingVertical: 20,
    paddingHorizontal: 24,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E2E2E2",
    gap: 8,
  },
});

export default SingleLineInput;
