import { View, Text, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { ThemedText } from "@/components/text/ThemedText";
import Emoji from "@/components/Emoji";
import React from "react";
import { useState } from "react";
import IconButton from "@/components/inputs/buttons/IconButton";
import Button from "@/components/inputs/buttons/Button";
import Carousel from "react-native-reanimated-carousel";
import { withTiming } from "react-native-reanimated";
import {
  mockBuddyShirley,
  mockBuddyJohn,
  mockBuddyJane,
} from "@/constants/BuddyDummyData";
import { Dimensions } from "react-native";
import BuddyMiniSummary from "@/components/samples/BuddyMiniSummary";

export default function BuddyInfo1() {
  const router = useRouter();
  const data = [mockBuddyShirley, mockBuddyJohn, mockBuddyJane];
  const { width, height } = Dimensions.get("window");
  return (
    <>
      <View style={{ paddingHorizontal: 24 }}>
        <ThemedText color="purple" weight="header">
          You're almost in.
        </ThemedText>
        <View style={{ alignItems: "center", marginTop: 16 }}>
          <ThemedText color="dark" weight="regular">
            Complete your profile to meet people on campus with similar
            interests and goals. You'll get your first match today.
          </ThemedText>
        </View>
      </View>
      <View style={{ paddingVertical: 24 }}>
        <Carousel
          data={data}
          width={width}
          height={height * 0.4}
          autoPlay={true}
          snapEnabled={false}
          loop={true}
          renderItem={({ item }) => <BuddyMiniSummary buddyProfile={item} />}
        />
      </View>
      <View style={styles.buttonsContainer}>
        <Button
          onPress={() => {
            router.push("/stage3/buddy-info-2");
          }}
          buttonType="primary"
          buttonVariant="filled"
        >
          <ThemedText color="light" weight="bold">
            Let's go
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
