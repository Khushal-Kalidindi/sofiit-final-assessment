import React, { ReactElement, ReactNode } from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { StyleProp, TextStyle, ViewStyle, Dimensions } from "react-native";

export type ButtonType = "primary" | "secondary";
export type ButtonVariant = "filled" | "outline";

const { width } = Dimensions.get("window");

const buttonColors: Record<ButtonType, string> = {
  primary: "#F1301B",
  secondary: "#E2E2E2",
};

export interface ButtonProps {
  disabled?: boolean;
  children: ReactNode | ReactElement;
  buttonType?: ButtonType;
  buttonVariant?: ButtonVariant;
  buttonStyle?: StyleProp<ViewStyle>;
  onPress: () => void;
}

const Button = ({
  disabled,
  children,
  onPress,
  buttonType = "primary",
  buttonVariant = "filled",
  buttonStyle,
}: ButtonProps) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        buttonVariant === "filled"
          ? filledStyle(buttonColors[buttonType])
          : undefined,
        buttonVariant === "outline"
          ? outlinedStyle(buttonColors[buttonType])
          : undefined,
        buttonStyle,
        { overflow: "visible" },
      ]}
      disabled={disabled}
      onPress={onPress}
      activeOpacity={0.8}
    >
      {children}
    </TouchableOpacity>
  );
};

export default Button;

const filledStyle = (color: string) => ({
  backgroundColor: color,
});

const outlinedStyle = (color: string) => ({
  backgroundColor: "#FFFFFF",
  borderWidth: 1,
  borderColor: color,
});

const styles = StyleSheet.create({
  button: {
    display: "flex",
    width: width - 96,
    height: 56,
    overflow: "visible",
    borderRadius: 30,
    paddingHorizontal: 51,
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
});
