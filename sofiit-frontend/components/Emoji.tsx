import React from "react";
import { View, Image, StyleSheet, ImageSourcePropType } from "react-native";
import emojiDataImport from "../constants/emoji-data.json";
const emojiData = emojiDataImport as EmojiData;

type EmojiData = {
  [key: string]: string;
};

export interface EmojiProps {
  emoji: string;
  style?: object;
  size?: number; // Add size prop to control dimensions
}

const Emoji: React.FC<EmojiProps> = ({ emoji, style, size }) => {
  return (
    <Image
      source={{ uri: emojiData[emoji] }}
      style={[imageStyle(size), style]}
      resizeMode="contain"
    />
  );
};

const imageStyle = (size: number | undefined) => {
  return size
    ? { width: size, height: size }
    : { flexShrink: 1, width: "100%", height: "100%", aspectRatio: 1 };
};

const styles = StyleSheet.create({
  container: {
    // Remove height and width from here
    aspectRatio: 1,
  },
});

export default Emoji;
