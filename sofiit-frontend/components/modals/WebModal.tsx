import React, { useState } from "react";
import {
  Modal,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  Dimensions,
  Linking,
} from "react-native";
import { WebView } from "react-native-webview";
import BottomSheetModal from "./BottomSheetModal";
import { ThemedText } from "../text/ThemedText";
import XIcon from "@/assets/images/x-icon.svg";
import LinkIcon from "@/assets/images/link-icon.svg";

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
    <BottomSheetModal
      isVisible={isVisible}
      onClose={onClose}
      title={title}
      heightPercent={75}
    >
      <View style={styles.modalHeader}>
        <TouchableOpacity onPress={onClose}>
          <XIcon scale={24} />
        </TouchableOpacity>

        <ThemedText color="purple" weight="bold">
          {title}
        </ThemedText>
        <TouchableOpacity
          onPress={() => {
            Linking.openURL(url);
          }}
        >
          <LinkIcon scale={24} />
        </TouchableOpacity>
      </View>
      <View style={styles.webViewContainer}>
        <WebView
          style={styles.webView}
          source={{ uri: url }}
          javaScriptEnabled={true}
          domStorageEnabled={true}
        />
      </View>
    </BottomSheetModal>
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

  modalTitle: {
    fontWeight: "bold",
    fontSize: 18,
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#e1e1e1",
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
