import { View, Text, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { ThemedText } from "@/components/text/ThemedText";
import Emoji from "@/components/Emoji";
import React from "react";
import { useState } from "react";
import IconButton from "@/components/inputs/buttons/IconButton";
import Button from "@/components/inputs/buttons/Button";
import ListMultiSelect from "@/components/inputs/multiselect/ListMultiSelect";
import ListSelectItem, {
  ListOption,
} from "@/components/inputs/multiselect/ListSelectItem";
import { ScrollView } from "react-native-gesture-handler";
import { useUser, User } from "@/contexts/UserProvider";
import { useForm, Controller } from "react-hook-form";
import ActivityListSelect, {
  ActivityListOption,
} from "@/components/inputs/multiselect/ActivityListSelect";
import { genderOptions } from "@/constants/FormConstants";
import { MultiSelectField } from "@/components/inputs/textboxes/MultiSelectField";

export default function BuddyInfo1() {
  const router = useRouter();
  const { user, updateUser } = useUser();

  interface FormData {
    buddyGenderPreference: string;
  }

  const { control, handleSubmit, setValue, watch } = useForm<FormData>({
    defaultValues: {
      buddyGenderPreference: "",
    },
  });

  const watchedFields = watch();

  const isFormComplete = () => {
    return !!watchedFields.buddyGenderPreference;
  };

  const onSubmit = async (data: FormData) => {
    await updateUser({
      ...user,
      profile: {
        ...user.profile,
        buddyGenderPreference: data.buddyGenderPreference,
      },
    }).then(() => {
      router.push("/stage1/personal-info-2");
    });
  };
  return (
    <>
      <ScrollView>
        <View style={{ paddingHorizontal: 24 }}>
          <ThemedText color="purple" weight="header">
            Additional buddy preferences
          </ThemedText>
          <Controller
            control={control}
            name="buddyGenderPreference"
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
        </View>
      </ScrollView>
      <IconButton
        disabled={!isFormComplete()}
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
  listContainer: {
    flex: 1,
    display: "flex",
    paddingHorizontal: 24,
    marginTop: 16,
  },
});
