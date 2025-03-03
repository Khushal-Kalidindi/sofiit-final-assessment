import React, { Children, useState } from "react";
import {
  Modal,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Dimensions,
} from "react-native";
import { WebView } from "react-native-webview";
import { ThemedText } from "../text/ThemedText";

interface ContentModalProps {
  isVisible: boolean;
  onClose?: () => void;
  title?: string;
  children?: React.ReactNode;
}

const WebModal: React.FC<ContentModalProps> = ({
  isVisible,
  onClose,
  title = "",
  children,
}) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={isVisible}
          onRequestClose={onClose}
        >
          <View style={styles.modalView}>
            <View style={styles.header}>
              <ThemedText color="dark" weight="bold">
                {title}
              </ThemedText>
              <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                <ThemedText color="grey" style={styles.closeButtonText}>
                  ✕
                </ThemedText>
              </TouchableOpacity>
            </View>

            <View style={styles.contentViewContainer}>{children}</View>
          </View>
        </Modal>
      </View>
    </Modal>
  );
};

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  modalBackdrop: {
    flex: 1,
    width: width,
    height: height,
    visibility: "hidden",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalView: {
    position: "absolute",
    bottom: 0,
    width: width,
    height: "85%",
    backgroundColor: "white",
    borderRadius: 30,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 0,
    borderBottomColor: "#e1e1e1",
  },
  modalTitle: {
    fontWeight: "bold",
    fontSize: 18,
  },
  closeButton: {
    padding: 5,
  },
  closeButtonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  contentViewContainer: {
    flex: 1,
  },
  webView: {
    flex: 1,
  },
});

export default WebModal;
