import { View, Text, StyleSheet, Animated, Easing } from "react-native";
import { useRouter } from "expo-router";
import { ThemedText } from "@/components/text/ThemedText";
import Emoji from "@/components/Emoji";
import React, { useEffect, useRef } from "react";
import IconButton from "@/components/inputs/buttons/IconButton";
import NewBuddySample from "@/components/samples/NewBuddySample";
import CalendarSample from "@/components/samples/CalendarSample";
import BuddyProfileSample from "@/components/samples/BuddyProfileSample";

export default function PersonalInfoScreen2() {
  const router = useRouter();

  // Create animated values for each sample component
  const buddyProfileAnim = useRef(new Animated.Value(-350)).current;
  const calendarSampleAnim = useRef(new Animated.Value(350)).current;
  const newBuddySampleAnim = useRef(new Animated.Value(-350)).current;

  // Add opacity animations for a fade-in effect
  const buddyProfileOpacity = useRef(new Animated.Value(0)).current;
  const calendarSampleOpacity = useRef(new Animated.Value(0)).current;
  const newBuddySampleOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const initialDelay = 500;

    Animated.parallel([
      // BuddyProfile animations
      Animated.sequence([
        Animated.delay(initialDelay),
        Animated.parallel([
          Animated.timing(buddyProfileAnim, {
            toValue: 0,
            duration: 800,
            easing: Easing.bezier(0.25, 1, 0.5, 1),
            useNativeDriver: true,
          }),
          Animated.timing(buddyProfileOpacity, {
            toValue: 1,
            duration: 600,
            easing: Easing.out(Easing.quad),
            useNativeDriver: true,
          }),
        ]),
      ]),

      // CalendarSample animations
      Animated.sequence([
        Animated.delay(initialDelay + 50),
        Animated.parallel([
          Animated.timing(calendarSampleAnim, {
            toValue: 0,
            duration: 800,
            easing: Easing.bezier(0.25, 1, 0.5, 1),
            useNativeDriver: true,
          }),
          Animated.timing(calendarSampleOpacity, {
            toValue: 1,
            duration: 600,
            easing: Easing.out(Easing.quad),
            useNativeDriver: true,
          }),
        ]),
      ]),

      // NewBuddySample animations
      Animated.sequence([
        Animated.delay(initialDelay + 100),
        Animated.parallel([
          Animated.timing(newBuddySampleAnim, {
            toValue: 0,
            duration: 800,
            easing: Easing.bezier(0.25, 1, 0.5, 1),
            useNativeDriver: true,
          }),
          Animated.timing(newBuddySampleOpacity, {
            toValue: 1,
            duration: 600,
            easing: Easing.out(Easing.quad),
            useNativeDriver: true,
          }),
        ]),
      ]),
    ]).start();
  }, []);

  return (
    <>
      <View style={{ paddingHorizontal: 24 }}>
        <ThemedText color="purple" weight="header">
          Ruby,{"\n"}we care about all of you{" "}
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
        <Animated.View
          style={{
            position: "absolute",
            top: 250,
            opacity: buddyProfileOpacity,
            transform: [{ translateX: buddyProfileAnim }],
          }}
        >
          <BuddyProfileSample />
        </Animated.View>

        <Animated.View
          style={{
            position: "absolute",
            top: 150,
            right: -84,
            opacity: calendarSampleOpacity,
            transform: [{ translateX: calendarSampleAnim }],
          }}
        >
          <CalendarSample />
        </Animated.View>
        <Animated.View
          style={{
            position: "absolute",
            top: 70,
            opacity: newBuddySampleOpacity,
            transform: [{ translateX: newBuddySampleAnim }],
          }}
        >
          <NewBuddySample />
        </Animated.View>
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
