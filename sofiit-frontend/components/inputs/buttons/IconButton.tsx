import React, { ReactNode } from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import { StyleProp, TextStyle, ViewStyle, Dimensions} from "react-native";
import { Colors } from "../../../constants/Colors";
import Button from "./Button";
import { Image } from "react-native";
import { ImageSourcePropType } from "react-native";


export type ButtonStatus = 'active' | 'disabled';

interface IconButtonProps {
    iconSource: ImageSourcePropType | undefined;
    buttonStatus?: ButtonStatus;
    onPress: () => void;
}

const IconButton = ({onPress, buttonStatus = 'active', iconSource} : IconButtonProps) => {
    return (
        <Button onPress={onPress} buttonType={buttonStatus === 'active' ? 'primary' : 'secondary'} buttonStyle = {styles.iconButton}>
            <View style={styles.iconContainer}>
                <Image source={iconSource} style={styles.iconImage} />
            </View>
            
        </Button>
    );
}

const styles = StyleSheet.create({
    iconButton: {
        width: 64, 
        height: 64, 
        borderRadius: 32,
        paddingVertical: 0,
        paddingHorizontal: 0,
        justifyContent: "center",
        alignItems: "center",
    },
    iconContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: 32,
        height: 32,
    },
    iconImage: {
        resizeMode: "contain",
    }

});

export default IconButton;