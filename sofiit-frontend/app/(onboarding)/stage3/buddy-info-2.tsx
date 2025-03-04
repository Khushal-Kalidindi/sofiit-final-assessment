import { View, Text, StyleSheet, LogBox } from "react-native";
import { useRouter } from "expo-router";
import { ThemedText } from "@/components/text/ThemedText";
import Emoji from "@/components/Emoji";
import React, { useEffect } from "react";
import { useState } from "react";
import IconButton from "@/components/inputs/buttons/IconButton";
import Button from "@/components/inputs/buttons/Button";
import ListMultiSelect from "@/components/inputs/multiselect/ListMultiSelect";
import ListSelectItem, {
  ListOption,
} from "@/components/inputs/multiselect/ListSelectItem";
import { ScrollView } from "react-native-gesture-handler";
import { useUser } from "@/contexts/UserProvider";
import { useForm, Controller } from "react-hook-form";
import { currentGoalsOptions } from "@/constants/FormConstants";

export default function BuddyInfo2() {
  const router = useRouter();
  const { user, updateUser } = useUser();

  interface FormData {
    goals: string[];
  }

  useEffect(() => {
    //For demo purposes, will fix in production
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
  }, []);

  const { control, handleSubmit, setValue, watch } = useForm<FormData>({
    defaultValues: {
      goals: [],
    },
  });

  const watchedFields = watch();

  const isFormComplete = () => {
    return !!watchedFields.goals.length && watchedFields.goals.length;
  };

  const onSubmit = async (data: FormData) => {
    await updateUser({
      ...user,
      profile: {
        ...user.profile,
        currentGoals: data.goals,
      },
    }).then(() => {
      router.push("/stage3/buddy-info-3");
    });
  };
  return (
    <>
      <ScrollView style={{ flexGrow: 1 }}>
        <View style={{ paddingHorizontal: 24 }}>
          <ThemedText color="purple" weight="header">
            What are your current goals?
          </ThemedText>
          <View style={{ marginTop: 16 }}>
            <ThemedText color="grey" weight="regular">
              Select up to 3
            </ThemedText>
          </View>
        </View>
        <View style={styles.listContainer}>
          <Controller
            control={control}
            name="goals"
            render={({ field: { onChange, value } }) => (
              <ListMultiSelect
                options={currentGoalsOptions}
                maxSelections={3}
                onSelectionChange={(newSelection) => {
                  onChange(newSelection);
                }}
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
