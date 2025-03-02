import { View, Text, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { ThemedText } from "@/components/text/ThemedText";
import Emoji from "@/components/Emoji";
import React from "react";
import { useState } from "react";
import IconButton from "@/components/inputs/buttons/IconButton";

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
      <IconButton
        buttonStatus="active"
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
