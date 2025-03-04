import { View, Text, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { ThemedText } from "@/components/text/ThemedText";
import Emoji from "@/components/Emoji";
import React from "react";
import { useState, useEffect } from "react";
import IconButton from "@/components/inputs/buttons/IconButton";
import Button from "@/components/inputs/buttons/Button";
import BuddyMatchNotification from "@/components/samples/BuddyMatchNotification";

export default function BuddyInfo7() {
  const router = useRouter();

  return (
    <>
      <View
        style={{
          paddingHorizontal: 24,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ThemedText color="purple" weight="header">
          Never miss an update <Emoji emoji="loudspeaker" size={24} />
        </ThemedText>
        <View style={{ alignItems: "center", marginTop: 16 }}>
          <ThemedText color="dark" weight="regular">
            90% use notifications to stay connected.
          </ThemedText>
        </View>
      </View>
      <View style={{ alignItems: "center" }}>
        <BuddyMatchNotification
          style={{ position: "absolute", top: 150 }}
          title="You got a new match!"
          text="She shares common ground with you!"
        />
        <BuddyMatchNotification
          style={{ position: "absolute", top: 277 }}
          title="You got a new match!"
          text="She shares common ground with you!"
        />
      </View>

      <View style={styles.buttonsContainer}>
        <Button
          onPress={() => {
            router.push("/stage3/buddy-info-8");
          }}
          buttonType="primary"
          buttonVariant="filled"
        >
          <ThemedText color="light" weight="bold">
            Allow notifications
          </ThemedText>
        </Button>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  buttonsContainer: {
    position: "absolute",
    bottom: 24,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 72,
    gap: 8,
  },
});
