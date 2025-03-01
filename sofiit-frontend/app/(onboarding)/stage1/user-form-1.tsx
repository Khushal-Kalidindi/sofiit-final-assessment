import { View, Text, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { ThemedText } from "@/components/text/ThemedText";
import React from "react";
import { useState } from "react";
import ListMultiSelect from "@/components/inputs/multiselect/ListMultiSelect";
import ThemedImagePicker from "@/components/inputs/ThemedImagePicker";
import SingleLineInput from "@/components/inputs/textboxes/SingleLineInput";

export default function UserFormScreen1() {
  const router = useRouter();
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
    paddingTop: 57,
  },
});
