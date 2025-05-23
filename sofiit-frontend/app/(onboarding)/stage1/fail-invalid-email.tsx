import { View, Text, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { ThemedText } from "@/components/text/ThemedText";
import Emoji from "@/components/Emoji";
import Button from "@/components/inputs/buttons/Button";
import { Image } from "react-native";
import React, { useState } from "react";
import { MicroSoftIcon, GoogleIcon } from "@/constants/Images";
import { useUser } from "@/contexts/UserProvider";

export default function FailInvalidEmail() {
  const router = useRouter();
  const { user, updateUser } = useUser();
  // Mock email options
  const mockEmails = [
    "student@usc.edu",
    "student@stanford.edu",
    "user@gmail.com",
  ];

  // Use the USC email by default
  const [currentEmailType, setCurrentEmailType] = useState(0);

  const handleEmailSubmit = () => {
    const selectedEmail = mockEmails[currentEmailType];

    if (!selectedEmail.endsWith(".edu")) {
      router.push("/stage1/fail-invalid-email");
    } else if (!selectedEmail.endsWith("usc.edu")) {
      router.push("/stage1/fail-invalid-school");
    } else {
      updateUser({
        ...user,
        account: {
          ...user.account,
          email: selectedEmail,
          emailVerified: true,
        },
      });
      router.push("/stage1/personal-info-1");
    }
  };

  const cycleEmailType = () => {
    setCurrentEmailType((currentEmailType + 1) % mockEmails.length);
  };
  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <View style={{ width: 96, height: 96 }}>
          <Emoji emoji="crying-face" />
        </View>
        <ThemedText
          color="purple"
          weight="header"
          style={{ textAlign: "center" }}
        >
          Please use your{" "}
          <ThemedText color="red" weight="header">
            school email
          </ThemedText>{" "}
          to verify
        </ThemedText>
      </View>
      <View style={styles.buttonsContainer}>
        <ThemedText color="dark" style={{ marginVertical: 10 }}>
          Current email: {mockEmails[currentEmailType]}
        </ThemedText>

        <Button
          onPress={cycleEmailType}
          buttonType="secondary"
          buttonVariant="outline"
        >
          <ThemedText color="dark" weight="bold">
            Change Mock Email
          </ThemedText>
        </Button>
        <ThemedText color="grey">
          Sign in to <ThemedText color="red">username@school.edu</ThemedText>
        </ThemedText>
        <Button
          onPress={() => {
            handleEmailSubmit();
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
            handleEmailSubmit();
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
