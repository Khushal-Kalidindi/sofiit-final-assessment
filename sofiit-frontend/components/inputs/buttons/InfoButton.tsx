import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";

export interface InfoButtonProps {
  onPress: () => void;
}

const InfoButton: React.FC<InfoButtonProps> = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>?</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 12,
    fontStyle: "normal",
    lineHeight: 18,
    fontWeight: 400,
    color: "#FFF",
  },
  container: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E2E2E2",
    borderRadius: "50%",
    width: 16,
    height: 16,
    textAlign: "center",
  },
});

export default InfoButton;
