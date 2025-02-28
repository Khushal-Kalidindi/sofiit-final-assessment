import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { StyleProp, TextStyle, ViewStyle, Dimensions} from "react-native";
import { Colors } from "../../../constants/Colors";

export type ButtonType = 'primary' | 'secondary';

const { width } = Dimensions.get('window');

interface ActionButtonProps {
    title: string;
    buttonType?: ButtonType;
    textStyle?: StyleProp<TextStyle>;
    onPress: () => void;
}

const ActionButton = ({ title, onPress, buttonType = 'primary', textStyle} : ActionButtonProps) => {
  return (
    <TouchableOpacity style={[styles.button, outerStyles[buttonType]] } onPress={onPress} activeOpacity={0.8}>
      <Text style={[styles.buttonText, innerStyles[buttonType]]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ActionButton;

const styles = StyleSheet.create({
  button: {
    width: width - 96,
    height: 56,
    borderRadius: 30,
    paddingVertical: 20,
    paddingHorizontal: 51,
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
  primaryButton: {
    backgroundColor: "#F1301B",
  },
  secondaryButton: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E2E2E2",
  },
  buttonText: {
    fontSize: 18,
  },
  primaryText: {
    color: "#fff",
  },
  secondaryText: {
    color: "#000",
  },
});

const outerStyles : Record<ButtonType, ViewStyle>= {
  'primary': styles.primaryButton,
  'secondary': styles.secondaryButton,
}
const innerStyles : Record<ButtonType, TextStyle>= {
  'primary': styles.primaryText,
  'secondary': styles.secondaryText
}