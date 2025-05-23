import {
  Text,
  type TextProps,
  StyleSheet,
  StyleProp,
  TextStyle,
} from "react-native";

export type TextColor = "dark" | "light" | "grey" | "purple" | "red";
export type TextWeight = "regular" | "semibold" | "bold" | "header" | "link";

export type ThemedTextProps = TextProps & {
  color?: TextColor;
  weight?: TextWeight;
  style?: StyleProp<TextStyle>;
};

export function ThemedText({
  style,
  color: type = "dark",
  weight = "regular",
  ...rest
}: ThemedTextProps) {
  const color = fontColors[type];
  return (
    <Text
      style={[
        { color },
        styles.default,
        weight === "regular" ? styles.regular : undefined,
        weight === "semibold" ? styles.semiBold : undefined,
        weight === "bold" ? styles.bold : undefined,
        weight === "header" ? styles.header : undefined,
        weight === "link"
          ? [styles.regular, { textDecorationLine: "underline" }]
          : undefined,
        style,
      ]}
      {...rest}
    />
  );
}

export const fontColors: Record<TextColor, string> = {
  dark: "#000",
  light: "#fff",
  grey: "#7C7C7C",
  purple: "#3F0835",
  red: "#F1301B",
};

export const styles = StyleSheet.create({
  default: {
    fontFamily: "Roboto",
    fontStyle: "normal",
  },
  regular: {
    fontSize: 16,
    lineHeight: 21.6,
    fontWeight: "400",
  },
  semiBold: {
    fontSize: 18,
    lineHeight: 24.3,
    fontWeight: "700",
  },
  bold: {
    fontSize: 18,
    lineHeight: 21.6,
    fontWeight: "700",
  },
  header: {
    fontSize: 32,
    lineHeight: 43.2,
    fontWeight: "700",
  },
});
