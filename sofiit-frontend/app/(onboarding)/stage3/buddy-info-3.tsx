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

export default function BuddyInfo1() {
  const router = useRouter();
  const { user, updateUser } = useUser();

  const currentGoalsOptions: ListOption[] = [
    //label, value and emoji
    { label: "Lose weight", value: "1", emoji: "brain" },
    { label: "Build muscle", value: "2", emoji: "brain" },
    { label: "Improve endurance", value: "3", emoji: "brain" },
    { label: "Improve flexibility", value: "4", emoji: "brain" },
    { label: "Improve balance", value: "5", emoji: "brain" },
    { label: "Improve mental health", value: "6", emoji: "brain" },
    { label: "Improve sleep", value: "7", emoji: "brain" },
    { label: "Improve nutrition", value: "8", emoji: "brain" },
    { label: "Improve overall health", value: "9", emoji: "brain" },
    { label: "Improve strength", value: "10", emoji: "brain" },
    { label: "Improve mobility", value: "11", emoji: "brain" },
  ];

  interface FormData {
    goals: string[];
  }

  const { control, handleSubmit, setValue, watch } = useForm<FormData>({
    defaultValues: {
      goals: [],
    },
  });

  const watchedFields = watch();

  const isFormComplete = () => {
    return !!watchedFields.goals.length;
  };

  const onSubmit = async (data: FormData) => {
    await updateUser({
      ...user,
      profile: {
        ...user.profile,
        currentGoals: data.goals,
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
            Pick your go-to activities
          </ThemedText>
          <View style={{ marginTop: 16 }}>
            <ThemedText color="grey" weight="regular">
              Select all that apply
            </ThemedText>
          </View>
        </View>
        <Controller
          control={control}
          name="goals"
          render={({ field: { onChange, value } }) => (
            <ActivityListSelect
              options={currentGoalsOptions.map((option) => ({
                ...option,
                borderColor: "#E49375",
                fillColor: "#FEE7D3",
              }))}
              onSelectionChange={onChange}
            />
          )}
        />
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
