import { View, Text, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { ThemedText } from "@/components/text/ThemedText";
import Emoji from "@/components/Emoji";
import Button from "@/components/inputs/buttons/Button";
import ListSelectItem from "@/components/inputs/multiselect/ListSelectItem";
import { Image } from "react-native";
import React from "react";
import { useState } from "react";
import ListMultiSelect from "@/components/inputs/multiselect/ListMultiSelect";
import IconButton from "@/components/inputs/buttons/IconButton";

export default function PersonalInfoFinish() {
  const router = useRouter();
  const [selectedRoles, setSelectedRoles] = useState<string[]>([]);

  const roleOptions = [
    { id: "student", label: "I'm a student", emoji: "books" },
    { id: "faculty", label: "I'm faculty or staff", emoji: "briefcase" },
  ];

  // Handle selection changes
  const handleSelectionChange = (newSelection: string[]) => {
    setSelectedRoles(newSelection);
    console.log("Selected roles:", newSelection);
    // Here you can add any additional logic when selection changes
  };
  return (
    <>
      <View style={{ paddingHorizontal: 24, paddingTop: 57 }}>
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
        onPress={() => {}}
        style={{
          position: "absolute",
          bottom: 68,
          right: 24,
        }}
      />
    </>
  );
}
