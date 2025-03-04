import React from "react";
import { View, StyleSheet } from "react-native";
import { ThemedText } from "@/components/text/ThemedText";
import { SofiitIcon } from "@/constants/Images";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    height: 80,
    padding: 16,
    paddingHorizontal: 12,
    alignItems: "center",
    gap: 12,
    borderRadius: 24,
    backgroundColor: "#FFF",
    shadowColor: "#3C3C3C",
    shadowOffset: { width: 1, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 4, // for Android shadow
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: 4,
  },
});

const BuddyMatchNotification: React.FC<{ style?: object }> = ({ style }) => {
  return (
    <View style={[styles.container, style]}>
      <SofiitIcon />
      <View style={styles.textContainer}>
        <ThemedText weight="semibold" color="purple">
          You got a new match!
        </ThemedText>
        <ThemedText color="grey">She shares common ground with you!</ThemedText>
      </View>
    </View>
  );
};

export default BuddyMatchNotification;
