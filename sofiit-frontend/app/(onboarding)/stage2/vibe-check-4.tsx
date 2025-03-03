import { View, Text, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { ThemedText } from "@/components/text/ThemedText";
import Emoji from "@/components/Emoji";
import Button from "@/components/inputs/buttons/Button";
import { Image } from "react-native";
import React from "react";
import IconButton from "@/components/inputs/buttons/IconButton";
import { useForm, Controller } from "react-hook-form";
import ListMultiSelect from "@/components/inputs/multiselect/ListMultiSelect";
import ListSelectItem, {
  ListOption,
} from "@/components/inputs/multiselect/ListSelectItem";
import { useUser } from "@/contexts/UserProvider";

export default function VibeCheckScreen2() {
  const router = useRouter();
  const { user, updateUser } = useUser();

  const workoutsPerWeekGoal: ListOption[] = [
    { label: "1 day", value: "1" },
    { label: "2 days", value: "2" },
    { label: "3 days", value: "3" },
    { label: "4 days", value: "4" },
    { label: "5 days", value: "5" },
    { label: "6 days", value: "6" },
    { label: "7 days", value: "7" },
  ];

  interface FormData {
    workoutsPerWeekGoal: string;
  }

  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormData>({
    defaultValues: {
      workoutsPerWeekGoal: "",
    },
    // mode: "onSubmit",
  });

  const isFormComplete = () => {
    return !!watch().workoutsPerWeekGoal;
  };

  const onSubmit = async (data: FormData) => {
    console.log("Form data:", data);
    updateUser({
      ...user,
      profile: {
        ...user.profile,
        workoutsPerWeekGoal: data.workoutsPerWeekGoal[0],
      },
    }).then(() => {
      console.log("User updated");
      console.log(user);
      router.push("/stage3/buddy-info-1");
    });
  };

  return (
    <>
      <View style={{ paddingHorizontal: 24 }}>
        <ThemedText color="purple" weight="header">
          Weekly workout goal
        </ThemedText>
      </View>
      <View style={{ paddingHorizontal: 24, marginTop: 12 }}>
        <ThemedText color="dark" weight="regular">
          The CDC suggests staying active at least 3 days a week for 50 minutes
          each time, for better health and vibes.
        </ThemedText>
        <Controller
          control={control}
          name="workoutsPerWeekGoal"
          render={({ field: { onChange, value } }) => (
            <ListMultiSelect
              options={workoutsPerWeekGoal}
              onSelectionChange={onChange}
              containerStyle={{ marginTop: 12 }}
              maxSelections={1}
              itemContainerStyle={{
                justifyContent: "center",
                alignItems: "center",
              }}
            />
          )}
        />
      </View>
      <IconButton
        onPress={handleSubmit(onSubmit)}
        disabled={!isFormComplete()}
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
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  mainContainer: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 24,
  },
  buttonImage: {
    flexShrink: 1,
    width: "100%",
    height: "100%",
  },
  buttonItemContainer: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    height: 24,
    width: "100%",
    gap: 8,
  },
  buttonsContainer: {
    display: "flex",
    position: "absolute",
    bottom: 0,
    right: 64,
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 72,
    gap: 8,
  },
});
