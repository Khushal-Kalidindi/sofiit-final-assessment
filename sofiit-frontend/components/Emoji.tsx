import React from 'react';
import { View, Image, StyleSheet, ImageSourcePropType } from 'react-native';
import emojiDataImport from '../constants/emoji-data.json';
const emojiData = emojiDataImport as EmojiData;

type EmojiData = {
    [key: string]: string;
}

export interface EmojiProps {
    emoji: string;
    style?: object;
    size?: number | string; // Add size prop to control dimensions
}

const Emoji: React.FC<EmojiProps> = ({ emoji, style, size = '100%' }) => {
    return (
        <Image source={{uri: emojiData[emoji]}} style={styles.image} resizeMode="contain" />
    );
};

const styles = StyleSheet.create({
    container: {
        // Remove height and width from here
        aspectRatio: 1,
    },
    image: {
        flexShrink: 1,
        width: '100%',
        height: '100%',
    },
});

export default Emoji;