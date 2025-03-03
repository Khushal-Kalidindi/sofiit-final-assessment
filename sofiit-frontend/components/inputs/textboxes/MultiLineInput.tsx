import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import ThemedTextInput from "./ThemedTextInput";
import { ThemedTextInputProps } from "./ThemedTextInput";
import { ThemedText } from "../../text/ThemedText";
import { TextInput } from "react-native";
import {
  styles as ThemeTextStyles,
  fontColors,
} from "@/components/text/ThemedText";

export interface MultiLineInputProps extends ThemedTextInputProps {
  label?: string;
  error?: string;
  maxLength?: number;
  containerStyle?: any;
  showCounter?: boolean;
}

const MultiLineInput: React.FC<MultiLineInputProps> = ({
  label,
  error,
  maxLength,
  containerStyle,
  multiline = true,
  showCounter = true,
  style,
  onChangeText,
  value,
  ...props
}) => {
  // Use the value prop to initialize the text length state
  const [textLength, setTextLength] = useState(value ? value.length : 0);

  // Create a new handler that updates the counter and calls the original onChangeText
  const handleChangeText = (text: string) => {
    setTextLength(text.length);

    // Call the original onChangeText if provided
    if (onChangeText) {
      onChangeText(text);
    }
  };

  // Get container height from style if provided
  const getContainerStyles = () => {
    let baseStyles = [styles.container] as any;

    if (containerStyle) {
      if (containerStyle.height) {
        baseStyles.push({ height: containerStyle.height });
      }
      if (containerStyle.borderRadius) {
        baseStyles.push({ borderRadius: containerStyle.borderRadius });
      }
    } else {
      // Default multiline height is 180
      baseStyles.push({ height: 180, borderRadius: 24 });
    }

    return baseStyles;
  };

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
      <View style={getContainerStyles()}>
        <TextInput
          style={[
            styles.textInput,
            ThemeTextStyles.semiBold,
            style,
            { outline: "none" },
          ]}
          placeholderTextColor={fontColors["grey"]}
          multiline={true}
          maxLength={maxLength}
          onChangeText={handleChangeText}
          value={value}
          //   textAlignVertical="top"
          numberOfLines={10}
          {...props}
        />
        {showCounter && (
          <View style={styles.counterContainer}>
            <ThemedText color="grey" weight="regular">
              {textLength}
              {maxLength ? `/${maxLength}` : ""}
            </ThemedText>
          </View>
        )}
      </View>
      {error && <ThemedText style={styles.error}>{error}</ThemedText>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    width: "100%",
    height: 180, // Default height for multiline
    borderRadius: 24, // Updated border radius
    paddingTop: 20,
    paddingBottom: 32, // Extra bottom padding for counter
    paddingHorizontal: 24,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E2E2E2",
    position: "relative",
  },
  textInput: {
    flex: 1,
    width: "100%",
    paddingTop: 0,
    paddingBottom: 0,
    paddingHorizontal: 0,
    outline: "none",
    borderWidth: 0,
    backgroundColor: "transparent",
    // textAlignVertical: "bottom", // Align text to top for multiline
  },
  counterContainer: {
    position: "absolute",
    bottom: 8,
    left: 24,
  },
  error: {
    color: "red",
    marginTop: 4,
    marginLeft: 8,
  },
});

export default MultiLineInput;
