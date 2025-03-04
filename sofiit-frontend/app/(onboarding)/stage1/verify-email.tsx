import { View, Text, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { ThemedText } from "@/components/text/ThemedText";
import Emoji from "@/components/Emoji";
import Button from "@/components/inputs/buttons/Button";
import { Image } from "react-native";
import React from "react";
import { MicroSoftIcon, GoogleIcon } from "@/constants/Images";

export default function VerifyEmailScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <View style={{ width: 96, height: 96 }}>
          <Emoji emoji="graduation-cap" />
        </View>
        <ThemedText
          color="purple"
          weight="header"
          style={{ textAlign: "center" }}
        >
          Get started by verifying your school email
        </ThemedText>
      </View>
      <View style={styles.buttonsContainer}>
        <ThemedText color="grey">
          Sign in to <ThemedText color="purple">username@school.edu</ThemedText>
        </ThemedText>
        <Button
          onPress={() => {
            router.push("/stage1/personal-info-1");
          }}
          buttonType="secondary"
          buttonVariant="outline"
        >
          <View style={styles.buttonItemContainer}>
            <GoogleIcon style={[styles.buttonImage]} />
            <ThemedText color="dark" weight="bold">
              Verify with Google
            </ThemedText>
          </View>
        </Button>
        <Button
          onPress={() => {
            router.push("/stage1/fail-invalid-school");
          }}
          buttonType="secondary"
          buttonVariant="outline"
        >
          <View style={styles.buttonItemContainer}>
            <MicroSoftIcon style={[styles.buttonImage]} />
            <ThemedText color="dark" weight="bold">
              Verify with Microsoft
            </ThemedText>
          </View>
        </Button>
      </View>
    </View>
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
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 16,
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
