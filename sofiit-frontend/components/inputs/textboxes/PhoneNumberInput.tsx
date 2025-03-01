import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ThemedTextInput from "./ThemedTextInput";
import { ThemedTextInputProps } from "./ThemedTextInput";
import { ThemedText } from "../../text/ThemedText";
import Emoji from "@/components/Emoji";

interface PhoneNumberInputProps extends ThemedTextInputProps {
  label?: string;
  error?: string;
}

const PhoneNumberInput: React.FC<PhoneNumberInputProps> = ({
  label,
  error,
  ...props
}) => {
  return (
    <View style={styles.container}>
      {label && (
        <ThemedText color="dark" weight="regular">
          {label}
        </ThemedText>
      )}
      <Emoji emoji="flag-united-states" size={24} />
      <View style={styles.separator} />
      <ThemedTextInput {...props} />
      {/* {error && <ThemedText style={styles.error}>{error}</ThemedText>} */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    width: "100%",
    height: 56,
    borderRadius: 30,
    paddingVertical: 20,
    paddingHorizontal: 24,
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E2E2E2",
    gap: 8,
  },
  separator: {
    width: 1,
    height: "80%",
    backgroundColor: "#E2E2E2",
  },
});

export default PhoneNumberInput;
