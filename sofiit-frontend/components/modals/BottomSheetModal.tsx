import React, { Children, useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Dimensions,
  ViewStyle,
} from "react-native";
import Modal, { ModalProps } from "react-native-modal";
import { WebView } from "react-native-webview";
import { ThemedText } from "../text/ThemedText";

interface BottomSheetModalProps {
  isVisible: boolean;
  onClose?: () => void;
  title?: string;
  // either a number or a string with a percentage
  heightPercent: number;
  children: React.ReactNode;
  contentContainerStyle?: ViewStyle;
  backdropOpacity?: number;
}

const BottomSheetModal: React.FC<BottomSheetModalProps> = ({
  isVisible,
  onClose,
  title = "",
  heightPercent,
  children,
  contentContainerStyle,
  backdropOpacity = 0,
}) => {
  return (
    <Modal
      backdropColor="#000"
      backdropOpacity={backdropOpacity}
      onSwipeComplete={onClose}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}
      swipeDirection={["down"]}
      style={styles.view}
      isVisible={isVisible}
      hideModalContentWhileAnimating={true}
    >
      <View
        style={[
          {
            height: height * (heightPercent / 100),
            backgroundColor: "white",
            borderTopLeftRadius: 24,
            borderTopRightRadius: 24,
            borderColor: "#E2E2E2",
            borderWidth: 1,
          },
          contentContainerStyle,
        ]}
      >
        {children}
      </View>
    </Modal>
  );
};

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  view: {
    justifyContent: "flex-end",
    height: height * 0.5,
    margin: 0,
  },
});

export default BottomSheetModal;
