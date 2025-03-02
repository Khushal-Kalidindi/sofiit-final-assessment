import { View, Text, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { ThemedText } from "@/components/text/ThemedText";
import React from "react";
import { useState } from "react";
import ListMultiSelect from "@/components/inputs/multiselect/ListMultiSelect";
import { useUser, User } from "@/contexts/UserProvider";

export default function PersonalInfoScreen1() {
  const router = useRouter();
  const { user, updateUser } = useUser();

  const roleOptions = [
    { label: "I'm a student", emoji: "books", value: "student" },
    { label: "I'm faculty or staff", emoji: "briefcase", value: "faculty" },
  ];

  // Handle selection changes
  const handleSelectionChange = async (newSelection: string[]) => {
    await updateUser({
      ...user,
      profile: {
        ...user.profile,
        role: newSelection[0],
      },
    }).then(() => {
      router.push("/stage1/personal-info-2");
    });
  };
  return (
    <View style={{ paddingHorizontal: 24 }}>
      <ThemedText color="purple" weight="header">
        Which of these{"\n"}applies to you
      </ThemedText>
      <View style={{ alignItems: "center", marginTop: 24 }}>
        <ListMultiSelect
          options={roleOptions}
          onSelectionChange={handleSelectionChange}
          maxSelections={1} // Set to true if multiple selections are allowed
        />
      </View>
    </View>
  );
}
