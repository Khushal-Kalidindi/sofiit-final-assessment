import { View, Text, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { ThemedText } from "@/components/text/ThemedText";
import Emoji from "@/components/Emoji";
import React from "react";
import { useState } from "react";
import IconButton from "@/components/inputs/buttons/IconButton";
import NewBuddySample from "@/components/samples/NewBuddySample";
import CalendarSample from "@/components/samples/CalendarSample";
import BuddyProfileSample from "@/components/samples/BuddyProfileSample";

export default function PersonalInfoScreen2() {
  const router = useRouter();
  return (
    <>
      <View style={{ paddingHorizontal: 24 }}>
        <ThemedText color="purple" weight="header">
          Ruby,{"\n"}we care about all of you
          <Emoji emoji="seedling" size={32} />
        </ThemedText>
        <View style={{ alignItems: "center", marginTop: 16 }}>
          <ThemedText color="dark" weight="regular">
            Finish setting up your account to: take care of your mind, move your
            body, and find people who get you.
          </ThemedText>
        </View>
      </View>
      <View>
        <BuddyProfileSample style={{ position: "absolute", top: 250 }} />
        <CalendarSample
          style={{ position: "absolute", top: 150, right: -84 }}
        />
        <NewBuddySample style={{ position: "absolute", top: 70 }} />
      </View>
      <IconButton
        onPress={() => {
          router.push("/stage1/verify-phone-number");
        }}
        style={{
          position: "absolute",
          bottom: 68,
          right: 24,
        }}
      />
    </>
  );
}
