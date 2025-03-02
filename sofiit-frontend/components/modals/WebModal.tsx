import React, { useState } from "react";
import {
  Modal,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Dimensions,
} from "react-native";
import { WebView } from "react-native-webview";

interface WebModalProps {
  isVisible: boolean;
  onClose?: () => void;
  url: string;
  title?: string;
}

const WebModal: React.FC<WebModalProps> = ({
  isVisible,
  onClose,
  url,
  title = "Information",
}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.header}>
            <Text style={styles.modalTitle}>{title}</Text>
            <TouchableOpacity onPress={onClose} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>✕</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.webViewContainer}>
            <WebView
              source={{ uri: url }}
              style={styles.webView}
              startInLoadingState={true}
              javaScriptEnabled={true}
              domStorageEnabled={true}
            />
          </View>
        </View>
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
    borderRadius: 10,
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
    padding: 15,
    borderBottomWidth: 1,
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
    fontSize: 18,
    fontWeight: "bold",
  },
  webViewContainer: {
    flex: 1,
  },
  webView: {
    flex: 1,
  },
});

export default WebModal;
