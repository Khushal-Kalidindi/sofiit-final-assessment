import { View, Text, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { ThemedText } from "@/components/text/ThemedText";
import React from "react";
import { useState } from "react";
import ListMultiSelect from "@/components/inputs/multiselect/ListMultiSelect";
import ThemedImagePicker from "@/components/inputs/ThemedImagePicker";
import SingleLineInput from "@/components/inputs/textboxes/SingleLineInput";
import { MultiSelectField } from "@/components/inputs/textboxes/MultiSelectField";

export default function UserFormScreen1() {
  const router = useRouter();

  //Gender options
  const genderOptions = [
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
    { label: "Non-binary", value: "non_binary" },
    { label: "Prefer not to say", value: "prefer_not_to_say" },
    { label: "Other", value: "other" },
  ];

  return (
    <View style={styles.container}>
      <ThemedImagePicker />
      <SingleLineInput
        label="First Name"
        placeholder="Enter your first name"
        onChangeText={(text) => {
          // Handle first name change
        }}
      />
      <SingleLineInput
        label="Last Name"
        placeholder="Enter your last name"
        onChangeText={(text) => {
          // Handle last name change
        }}
      />
      <MultiSelectField
        label="Select an option"
        placeholder="Click to select"
        options={genderOptions}
      />
      <SingleLineInput
        label="Birthday"
        placeholder="MM/DD/YYYY"
        onChangeText={(text) => {
          // Handle birthday change
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    gap: 24,
  },
});
