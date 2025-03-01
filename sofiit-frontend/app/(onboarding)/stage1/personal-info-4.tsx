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
import { useForm, Controller } from "react-hook-form";
import { useUser } from "@/contexts/UserProvider";

export default function UserFormScreen1() {
  const router = useRouter();
  const { user, updateUser } = useUser();
  interface FormData {
    school: string;
    studentType: string;
    degree: string;
    graduation: string;
  }

  const { control, handleSubmit, setValue } = useForm<FormData>({
    defaultValues: {
      school: "",
      studentType: "",
      degree: "",
      graduation: "",
    },
  });

  const onSubmit = (data: FormData) => {
    console.log("Form data:", data);
    updateUser({
      ...user,
      profile: {
        ...user.profile,
        ...data,
      },
    }).then(() => {
      router.push("/stage1/personal-info-4");
    });
  };
  //Gender options
  return (
    <>
      <View style={styles.container}>
        <Controller
          control={control}
          name="school"
          render={({ field: { onChange, value } }) => (
            <MultiSelectField
              label="College or school"
              placeholder="Click to select"
              options={uscSchoolOptions}
              multiple={false}
              onSelect={onChange}
            />
          )}
        />
        <Controller
          control={control}
          name="studentType"
          render={({ field: { onChange, value } }) => (
            <MultiSelectField
              label="Student type"
              placeholder="Click to select"
              options={studentTypeOptions}
              multiple={false}
              onSelect={onChange}
            />
          )}
        />
        <Controller
          control={control}
          name="degree"
          render={({ field: { onChange, value } }) => (
            <MultiSelectField
              label="Degree"
              placeholder="Click to select"
              options={degreeTypeOptions}
              multiple={false}
              onSelect={onChange}
            />
          )}
        />
        <Controller
          control={control}
          name="graduation"
          render={({ field: { onChange, value } }) => (
            <SingleLineInput
              label="Expected graduation"
              placeholder="MM/YYYY"
              value={value}
              onChangeText={onChange}
            />
          )}
        />
      </View>
      <IconButton
        buttonStatus="active"
        onPress={handleSubmit(onSubmit)}
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
