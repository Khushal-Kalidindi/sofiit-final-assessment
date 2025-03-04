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
import { bestDescribesYouOptions } from "@/constants/FormConstants";

export default function BuddyInfo4() {
  const router = useRouter();
  const { user, updateUser } = useUser();

  interface FormData {
    describesYou: string[];
  }

  const { control, handleSubmit, setValue, watch } = useForm<FormData>({
    defaultValues: {
      describesYou: [],
    },
  });

  const watchedFields = watch();

  const isFormComplete = () => {
    return !!watchedFields.describesYou.length;
  };

  const onSubmit = async (data: FormData) => {
    await updateUser({
      ...user,
      profile: {
        ...user.profile,
        describesYou: data.describesYou,
      },
    }).then(() => {
      router.push("/stage3/buddy-info-5");
    });
  };
  return (
    <>
      <ScrollView>
        <View style={{ paddingHorizontal: 24 }}>
          <ThemedText color="purple" weight="header">
            Which best describes you?
          </ThemedText>
          <View style={{ marginTop: 16, marginBottom: 24 }}>
            <ThemedText color="grey" weight="regular">
              Select up to 3
            </ThemedText>
          </View>
          <Controller
            control={control}
            name="describesYou"
            render={({ field: { onChange, value } }) => (
              <ActivityListSelect
                options={bestDescribesYouOptions.map((option) => ({
                  ...option,
                  borderColor: "#DC7CC8",
                  fillColor: "#F9DCF3",
                }))}
                maxSelections={3}
                onSelectionChange={onChange}
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
