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
import { genderOptions } from "@/constants/FormConstants";
import { useForm, Controller } from "react-hook-form";
import { useUser } from "@/contexts/UserProvider";

export default function UserFormScreen1() {
  const router = useRouter();
  const { user, updateUser } = useUser();
  interface FormData {
    firstName: string;
    lastName: string;
    gender: string;
    birthday: string;
    profileImage: string;
  }

  const { control, handleSubmit, setValue } = useForm<FormData>({
    defaultValues: {
      firstName: "",
      lastName: "",
      gender: "",
      birthday: "",
      profileImage: "",
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

  const handleImageSelected = (uri: string) => {
    setValue("profileImage", uri);
  };
  return (
    <>
      <View style={styles.container}>
        <ThemedImagePicker onImagePick={handleImageSelected} />

        <Controller
          control={control}
          name="firstName"
          render={({ field: { onChange, value } }) => (
            <SingleLineInput
              label="First Name"
              placeholder="Enter your first name"
              value={value}
              onChangeText={onChange}
            />
          )}
        />

        <Controller
          control={control}
          name="lastName"
          render={({ field: { onChange, value } }) => (
            <SingleLineInput
              label="Last Name"
              placeholder="Enter your last name"
              value={value}
              onChangeText={onChange}
            />
          )}
        />

        <Controller
          control={control}
          name="gender"
          render={({ field: { onChange, value } }) => (
            <MultiSelectField
              label="Gender"
              placeholder="Click to select"
              multiple={false}
              options={genderOptions}
              onSelect={onChange}
            />
          )}
        />

        <Controller
          control={control}
          name="birthday"
          render={({ field: { onChange, value } }) => (
            <SingleLineInput
              label="Birthday"
              placeholder="MM/DD/YYYY"
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
