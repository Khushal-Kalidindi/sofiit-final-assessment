import { View, Text, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { ThemedText } from "@/components/text/ThemedText";
import Emoji from "@/components/Emoji";
import React from "react";
import IconButton from "@/components/inputs/buttons/IconButton";
import { ScrollView } from "react-native-gesture-handler";
import { useUser, User } from "@/contexts/UserProvider";
import { useForm, Controller } from "react-hook-form";
import { genderOptions } from "@/constants/FormConstants";
import { MultiSelectField } from "@/components/inputs/textboxes/MultiSelectField";

export default function BuddyInfo5() {
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
      router.push("/stage3/buddy-info-6");
    });
  };
  return (
    <>
      <ScrollView>
        <View style={{ paddingHorizontal: 24 }}>
          <ThemedText
            color="purple"
            weight="header"
            style={{ marginBottom: 16 }}
          >
            Additional buddy preferences
          </ThemedText>
          <Controller
            control={control}
            name="buddyGenderPreference"
            render={({ field: { onChange, value } }) => (
              <MultiSelectField
                placeholder="Gender preference"
                maxSelections={1}
                options={genderOptions}
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
