import React, { Children, useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Dimensions,
} from "react-native";
import Modal from "react-native-modal";
import { WebView } from "react-native-webview";
import { ThemedText } from "../text/ThemedText";

interface ContentModalProps {
  isVisible: boolean;
  onClose?: () => void;
  title?: string;
  // either a number or a string with a percentage
  heightPercent?: number;
  children: React.ReactNode;
}

const WebModal: React.FC<ContentModalProps> = ({
  isVisible,
  onClose,
  title = "",
  heightPercent = 85,
  children,
}) => {
  return (
    <Modal
      backdropColor="#000"
      backdropOpacity={0}
      onSwipeComplete={onClose}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}
      swipeDirection={["down"]}
      style={styles.view}
      isVisible={isVisible}
      hideModalContentWhileAnimating={true}
    >
      <View
        style={{
          height: height * 0.5,
          backgroundColor: "white",
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
          borderColor: "#E2E2E2",
          borderWidth: 1,
        }}
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

export default WebModal;
