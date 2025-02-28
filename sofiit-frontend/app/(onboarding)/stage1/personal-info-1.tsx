import { View, Text, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { ThemedText } from "@/components/text/ThemedText";
import React from "react";
import { useState } from "react";
import ListMultiSelect from "@/components/inputs/multiselect/ListMultiSelect";

export default function PersonalInfoScreen() {
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
    // Here you can add any additional logic when selection changes
  };
  return (
    <View style={{ paddingHorizontal: 24, paddingTop: 57 }}>
      <ThemedText color="purple" weight="header">
        Which of these{"\n"}applies to you
      </ThemedText>
      <View style={{ alignItems: "center", marginTop: 24 }}>
        <ListMultiSelect
          options={roleOptions}
          selectedOptions={selectedRoles}
          onSelectionChange={handleSelectionChange}
          allowMultiple={false} // Set to true if multiple selections are allowed
        />
      </View>
    </View>
  );
}
