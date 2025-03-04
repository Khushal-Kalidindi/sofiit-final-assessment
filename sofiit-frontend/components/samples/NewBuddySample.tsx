import React from "react";
import { ThemedText } from "@/components/text/ThemedText";
import Emoji from "@/components/Emoji";
import { View, StyleSheet } from "react-native";

type NewBuddySampleProps = {
  style?: React.ComponentProps<typeof View>["style"];
};

export default function NewBuddySample({ style }: NewBuddySampleProps) {
  return (
    <View style={[styles.container, style]}>
      <View style={{ width: 28, height: 28 }}>
        <Emoji emoji="star-struck" />
      </View>
      <ThemedText
        color="purple"
        weight="header"
        style={{ textAlign: "center" }}
      >
        You have a new buddy!
      </ThemedText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    padding: 20,
    borderRadius: 16,
    backgroundColor: "#FFF",
    boxShadow: "1px 3px 12px 0px rgba(60, 60, 60, 0.10)",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
  },
});
