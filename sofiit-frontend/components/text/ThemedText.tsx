import { Text, type TextProps, StyleSheet, StyleProp, TextStyle } from 'react-native';

export type TextColor = 'dark' | 'light' | 'grey' | 'purple';
export type TextWeight = 'regular' | 'semibold' | 'bold' | 'header';

export type ThemedTextProps = TextProps & {
  color?: TextColor;
  weight?: TextWeight;
  style?: StyleProp<TextStyle>;
};

export function ThemedText({
  style,
  color: type = 'dark',
  weight = 'regular',
  ...rest
}: ThemedTextProps) {
  const color = fontColors[type];
  return (
    <Text
      style={[
        { color },
        styles.default,
        weight === 'regular' ? styles.regular : undefined,
        weight === 'semibold' ? styles.semiBold : undefined,
        weight === 'bold' ? styles.bold : undefined,
        weight === 'header' ? styles.header : undefined,
        style,
      ]}
      {...rest}
    />
  );
}

const fontColors : Record<TextColor, string> = {
  'dark': '#000',
  'light': '#fff',
  'grey': '#7C7C7C',
  'purple': '#3F0835',
}

const styles = StyleSheet.create({
  default: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
  },
  regular: {
    fontSize: 16,
    lineHeight: 21.6,
    fontWeight: '400',
  },
  semiBold: {
    fontSize: 18,
    lineHeight: 24.3,
    fontWeight: '600',
  },
  bold: {
    fontSize: 18,
    lineHeight: 21.6,
    fontWeight: '700',
  },
  header: {
    fontSize: 32,
    lineHeight: 43.2,
    fontWeight: '600',
  },

});
