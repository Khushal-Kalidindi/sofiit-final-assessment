import React, { ReactElement, ReactNode } from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { StyleProp, TextStyle, ViewStyle, Dimensions} from "react-native";
import { Colors } from "../../../constants/Colors";

export type ButtonType = 'primary' | 'secondary';
export type ButtonVariant = 'filled' | 'outline';

const { width } = Dimensions.get('window');

const buttonColors : Record<ButtonType, string> = {
    'primary': "#F1301B",
    'secondary': "#E2E2E2",
}

export interface ButtonProps {
    children: ReactNode | ReactElement;
    buttonType?: ButtonType;
    buttonVariant?: ButtonVariant;
    buttonStyle?: StyleProp<ViewStyle>;
    onPress: () => void;
}

const Button = ({ children, onPress, buttonType = 'primary', buttonVariant = 'filled', buttonStyle} : ButtonProps) => {
  return (
    <TouchableOpacity style={[
        styles.button, 
        buttonVariant === 'filled' ? filledStyle(buttonColors[buttonType]) : undefined,
        buttonVariant === 'outline' ? outlinedStyle(buttonColors[buttonType]) : undefined, 
        buttonStyle] } onPress={onPress} activeOpacity={0.8}>
        {children}
    </TouchableOpacity>
  );
};

export default Button;

 const filledStyle = (color:string) => ({
    backgroundColor: color
  });

const outlinedStyle = (color:string) => ({
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: color,
  });

const styles = StyleSheet.create({
  button: {
    display: "flex",
    width: width - 96,
    height: 56,
    borderRadius: 30,
    paddingVertical: 20,
    paddingHorizontal: 51,
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
});