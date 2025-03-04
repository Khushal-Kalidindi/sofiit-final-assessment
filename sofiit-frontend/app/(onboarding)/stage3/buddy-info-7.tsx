import { View, Text, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { ThemedText } from "@/components/text/ThemedText";
import Emoji from "@/components/Emoji";
import React from "react";
import Button from "@/components/inputs/buttons/Button";
import BuddyMatchNotification from "@/components/samples/BuddyMatchNotification";
import { Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function BuddyInfo7() {
  const router = useRouter();
  const { width, height } = Dimensions.get("window");

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
      <View
        style={{
          alignItems: "center",
        }}
      >
        <LinearGradient
          style={styles.gradientOverlay}
          colors={["rgba(226, 226, 226, 0)", "rgba(226,226,226,1)"]}
          locations={[0, 1]}
        >
          <View style={styles.phoneFrame}>
            <View style={styles.phoneTop}></View>
          </View>
        </LinearGradient>

        <BuddyMatchNotification
          style={{ position: "absolute", top: 150 }}
          title="You got a new match!"
          text="She shares common ground with you!"
        />
        <BuddyMatchNotification
          style={{ position: "absolute", top: 277 }}
          title="Message from Erica"
          text="Are you available to work out together tmr?"
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
  phoneFrame: {
    width: 300,
    height: 527,
    flexShrink: 0,
    borderRadius: 48,
    borderWidth: 4,

    borderColor: "#E2E2E2",
    // overflow: "hidden",
  },
  phoneTop: {
    width: 100,
    height: 28,
    flexShrink: 0,
    borderRadius: 100,
    backgroundColor: "#D9D9D9",
    alignSelf: "center",
    marginTop: 16,
  },
  gradientOverlay: {
    marginTop: 76,
  },
});
