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
import { parse, isValid, isAfter, isBefore } from "date-fns";
import { useOnboarding } from "@/contexts/OnboardingProvider";

export default function PersonalInfoScreen4() {
  const router = useRouter();
  const { user, updateUser } = useUser();
  const { currentStage, nextStage } = useOnboarding();
  interface FormData {
    school: string;
    studentType: string;
    degree: string;
    graduation: string;
  }

  const { control, handleSubmit, setValue, watch } = useForm<FormData>({
    defaultValues: {
      school: "",
      studentType: "",
      degree: "",
      graduation: "",
    },
  });

  // Watch all form fields to check their values
  const watchedFields = watch();

  // Check if all required fields are filled
  const isFormComplete = () => {
    return (
      !!watchedFields.school &&
      !!watchedFields.studentType &&
      !!watchedFields.degree &&
      !!watchedFields.graduation
    );
  };

  const isValidDate = (dateStr: string): boolean => {
    const parsedDate = parse(dateStr, "MM/yyyy", new Date());

    // Check if date is valid
    if (!isValid(parsedDate)) return false;

    // Ensure the date is not in the past
    if (isBefore(parsedDate, new Date())) return false;

    return true;
  };

  const normalizeGraduation = (value: string, previousValue: string) => {
    if (!value) return value;

    // Remove non-digit characters
    const currentValue = value.replace(/[^\d]/g, "");
    const cvLength = currentValue.length;

    // If user is adding characters
    if (!previousValue || value.length > previousValue.length) {
      if (cvLength < 3) return currentValue;
      if (cvLength <= 4)
        return `${currentValue.slice(0, 2)}/${currentValue.slice(2)}`;
      return `${currentValue.slice(0, 2)}/${currentValue.slice(2, 6)}`;
    }

    return value;
  };

  const onSubmit = (data: FormData) => {
    console.log("Form data:", data);
    updateUser({
      ...user,
      profile: {
        ...user.profile,
        ...data,
      },
    }).then(() => {
      nextStage().then(() => {
        router.push("/stage2/vibe-check-1");
      });
    });
  };

  const onError = (errors: any) => {
    console.error("Form errors:", errors);
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
          rules={{
            validate: (value) => {
              if (!isValidDate(value)) {
                return "Invalid date format. Example: MM/DD/YYYY";
              }
              return true; // Pass validation
            },
          }}
          render={({ field: { onChange, value } }) => (
            <SingleLineInput
              label="Gruaduation year"
              placeholder="MM/YYYY"
              value={value}
              onChangeText={(text: string) => {
                const formattedText = normalizeGraduation(text, value);
                onChange(formattedText); // Update form state
              }}
            />
          )}
        />
      </View>
      <IconButton
        disabled={!isFormComplete()}
        onPress={handleSubmit(onSubmit, onError)}
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
