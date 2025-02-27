import { Text, type TextProps, StyleSheet, StyleProp, TextStyle } from 'react-native';

export type ThemedTextProps = TextProps & {
  type?: 'dark' | 'light' | 'grey';
  weight?: 'regular' | 'semibold' | 'bold';
  style?: StyleProp<TextStyle>;
};

export function ThemedText({
  style,
  type = 'dark',
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
        style,
      ]}
      {...rest}
    />
  );
}

const fontColors : Record<'dark' | 'light' | 'grey', string> = {
  'dark': '#000',
  'light': '#fff',
  'grey': '#7C7C7C',
}

const styles = StyleSheet.create({
  default: {
    fontFamily: 'Roboto',
    lineHeight: 135,
    fontStyle: 'normal',
  },
  regular: {
    fontSize: 16,
    fontWeight: '400',
  },
  semiBold: {
    fontSize: 18,
    fontWeight: '600',
  },
  bold: {
    fontSize: 18,
    fontWeight: '700',
  }

});
