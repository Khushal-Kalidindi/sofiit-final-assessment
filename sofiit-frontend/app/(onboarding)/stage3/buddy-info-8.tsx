import { View, Text, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { ThemedText } from "@/components/text/ThemedText";
import Emoji from "@/components/Emoji";
import Button from "@/components/inputs/buttons/Button";
import React, { useState, useEffect } from "react";
import { useOnboarding } from "@/contexts/OnboardingProvider";

// Simulating a successful API response
const mockBuddyMatchData = {
  status: 200,
  data: {
    matchUserId: "12345", // Only returning the user ID of the match
  },
};

export default function BuddyInfo8() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { finishOnboarding } = useOnboarding();
  // Simulate API call
  const fetchBuddyMatch = () => {
    setLoading(true);
    setError(false);
    setTimeout(() => {
      if (mockBuddyMatchData.status !== 200) {
        setError(true);
      }
      setLoading(false);
    }, 2000);
  };

  useEffect(() => {
    fetchBuddyMatch(); // Fetch buddy match on mount
  }, []);

  return (
    <>
      <View style={styles.mainContainer}>
        <View style={{ width: 96, height: 96 }}>
          {loading || error ? (
            <Emoji emoji="rocket" />
          ) : (
            <Emoji emoji="sparkles" />
          )}
        </View>
        {loading ? (
          <ThemedText
            color="purple"
            weight="header"
            style={{ textAlign: "center" }}
          >
            Buddy match in progress
          </ThemedText>
        ) : error ? (
          <ThemedText
            color="purple"
            weight="header"
            style={{ textAlign: "center" }}
          >
            We ran into an issue when trying to find a buddy for you
          </ThemedText>
        ) : (
          <ThemedText
            color="purple"
            weight="header"
            style={{ textAlign: "center" }}
          >
            Buddy found!
          </ThemedText>
        )}

        {loading || error ? (
          <ThemedText
            color="grey"
            style={{ marginTop: 24, textAlign: "center" }}
          >
            Expect a buddy in{" "}
            <ThemedText color="grey" style={{ fontWeight: "bold" }}>
              24 hours
            </ThemedText>{" "}
            and new matches every Wednesday.
          </ThemedText>
        ) : (
          <ThemedText
            color="grey"
            style={{ marginTop: 24, textAlign: "center" }}
          >
            Connect now{"\n"}New matches every Wednesday.
          </ThemedText>
        )}
      </View>
      {/* <View style={styles.buttonsContainer}>
        <Button
          onPress={() => {
            router.push("/stage3/buddy-info-2");
          }}
          buttonType="primary"
          buttonVariant="filled"
        >
          <ThemedText color="light" weight="bold">
            View
          </ThemedText>
        </Button>
        <ThemedText
          color="grey"
          style={{ textAlign: "center", paddingHorizontal: 59 }}
        >
          We foster a supportive community.{"\n"}Read our community guidelines.
        </ThemedText>
      </View> */}
      {!loading && !error && (
        <View style={styles.buttonsContainer}>
          <Button
            onPress={() => {
              finishOnboarding();
              router.push("/");
            }}
            // onPress={() => {
            //   console.log("finishOnboarding");
            // }}
            buttonType="primary"
            buttonVariant="filled"
          >
            <ThemedText color="light" weight="bold">
              View
            </ThemedText>
          </Button>
          <ThemedText
            color="grey"
            style={{ textAlign: "center", paddingHorizontal: 59 }}
          >
            We foster a supportive community.{"\n"}Read our community
            guidelines.
          </ThemedText>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  mainContainer: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    paddingTop: 160,
    alignItems: "center",
    paddingHorizontal: 16,
  },
  buttonImage: {
    flexShrink: 1,
    width: "100%",
    height: "100%",
  },
  buttonItemContainer: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    height: 24,
    width: "100%",
    gap: 8,
  },
  buttonsContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 72,
    gap: 8,
  },
});
