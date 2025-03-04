import React from "react";
import { View, StyleSheet } from "react-native";
import { ThemedText } from "@/components/text/ThemedText";
import { mockBuddyJane } from "@/constants/BuddyDummyData";
import { Image } from "react-native";

interface BuddyChatProps {
  buddyFirstName: string;
  timeRecieved: string;
  messageText: string;
  buddyProfilePicUrl: string;
  read?: boolean;
}

const BuddyChat: React.FC<BuddyChatProps> = ({
  buddyFirstName,
  timeRecieved,
  messageText,
  buddyProfilePicUrl,
  read = false,
}) => {
  return (
    <View style={styles.chatContainer}>
      <View style={styles.profilePicContainer}>
        <Image source={{ uri: buddyProfilePicUrl }} style={styles.profilePic} />
        {!read && <View style={styles.unreadIndicator} />}
      </View>
      <View style={styles.chatContent}>
        <View style={styles.chatTop}>
          <ThemedText color="dark" weight="bold">
            {buddyFirstName}
          </ThemedText>
          <ThemedText color="grey">{timeRecieved}</ThemedText>
        </View>
        <ThemedText color="grey" style={{ fontSize: 13 }}>
          {messageText}
        </ThemedText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  chatContainer: {
    display: "flex",
    flexDirection: "row",
    height: 56,
    width: "100%",
    padding: 12,
    alignItems: "center",
    gap: 16,
    borderRadius: 16,
  },
  profilePicContainer: {
    position: "relative",
  },
  profilePic: {
    width: 56,
    height: 56,
    flexShrink: 0,
    borderRadius: 56,
  },
  unreadIndicator: {
    position: "absolute",
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#FF6347", // Red dot for unread messages
    right: 2,
    top: 2,
  },
  chatContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 16,
    flex: 1,
  },
  chatTop: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "stretch",
  },
});

export default BuddyChat;
