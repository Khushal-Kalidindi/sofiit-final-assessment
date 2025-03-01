import { View, Text, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { ThemedText } from "@/components/text/ThemedText";
import React from "react";
import { useState } from "react";
import ListMultiSelect from "@/components/inputs/multiselect/ListMultiSelect";
import ThemedImagePicker from "@/components/inputs/ThemedImagePicker";

export default function UserFormScreen1() {
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
    router.push("/stage1/personal-info-2");
  };
  return (
    <View style={styles.container}>
      <ThemedImagePicker />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 24,
    paddingHorizontal: 24,
    paddingTop: 57,
  },
});
