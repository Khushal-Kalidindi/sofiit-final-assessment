import { View, Text, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { ThemedText } from "@/components/text/ThemedText";
import React from "react";
import { useState } from "react";
import ListMultiSelect from "@/components/inputs/multiselect/ListMultiSelect";
import ThemedImagePicker from "@/components/inputs/ThemedImagePicker";
import SingleLineInput from "@/components/inputs/textboxes/SingleLineInput";
import { MultiSelectField } from "@/components/inputs/textboxes/MultiSelectField";
import IconButton from "@/components/inputs/buttons/IconButton";
import {
  uscSchoolOptions,
  studentTypeOptions,
  degreeTypeOptions,
  hearAboutOptions,
} from "@/constants/FormConstants";

export default function UserFormScreen1() {
  const router = useRouter();

  //Gender options
  return (
    <>
      <View style={styles.container}>
        <MultiSelectField
          label="College or school"
          placeholder="Click to select"
          options={uscSchoolOptions}
          multiple={false}
        />
        <MultiSelectField
          label="Student type"
          placeholder="Click to select"
          options={studentTypeOptions}
          multiple={false}
        />
        <MultiSelectField
          label="Degree"
          placeholder="Click to select"
          options={degreeTypeOptions}
          multiple={false}
        />
        <SingleLineInput
          label="Expected graduation"
          placeholder="MM/YYYY"
          onChangeText={(text) => {
            // Handle birthday change
          }}
        />
      </View>
      <IconButton
        buttonStatus="active"
        onPress={() => {
          // router.push("/stage1/personal-info-4");
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    alignSelf: "center",
    alignItems: "center",
    width: "90%",
    gap: 24,
  },
});
