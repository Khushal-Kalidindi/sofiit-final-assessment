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
import { parse, isValid, isAfter, set } from "date-fns";
import { KeyboardAvoidingView } from "react-native";
import InfoModal from "@/components/modals/InfoModal";

export default function PersonalInfoScreen3() {
  const router = useRouter();
  const { user, updateUser } = useUser();
  // const [errors, setErrors] = useState<string[]>(["An error occurred."]);
  const [errorModalVisible, setErrorModalVisible] = useState<boolean>(false);
  interface FormData {
    firstName: string;
    lastName: string;
    gender: string;
    birthday: string;
    profileImage: string;
  }

  const {
    control,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      firstName: "",
      lastName: "",
      gender: "",
      birthday: "",
      profileImage: "",
    },
  });

  const watchedFields = watch();

  const isFormComplete = () => {
    return (
      !!watchedFields.firstName &&
      !!watchedFields.lastName &&
      !!watchedFields.gender &&
      !!watchedFields.birthday &&
      !!watchedFields.profileImage
    );
  };

  const isValidDate = (dateStr: string): boolean => {
    const parsedDate = parse(dateStr, "MM/dd/yyyy", new Date());

    if (!isValid(parsedDate)) return false;
    if (isAfter(parsedDate, new Date())) return false;

    return true;
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
      router.push("/stage1/personal-info-4");
    });
  };

  const onError = (errors: any) => {
    // errors && setErrors(errors);
    // setErrors(["An error occurred."]);
    setErrorModalVisible(true);
  };

  const handleImageSelected = (uri: string) => {
    setValue("profileImage", uri);
  };

  const errorString = Object.values(errors)
    .map((error) => error?.message)
    .filter(Boolean) // Removes undefined values
    .join(", ");

  const normalizeBirthday = (value: string, previousValue: string) => {
    if (!value) return value;

    // Remove non-digit characters
    const currentValue = value.replace(/[^\d]/g, "");
    const cvLength = currentValue.length;

    // If user is adding characters
    if (!previousValue || value.length > previousValue.length) {
      if (cvLength < 3) return currentValue;
      if (cvLength < 5)
        return `${currentValue.slice(0, 2)}/${currentValue.slice(2)}`;
      if (cvLength <= 8)
        return `${currentValue.slice(0, 2)}/${currentValue.slice(2, 4)}/${currentValue.slice(4)}`;
      return `${currentValue.slice(0, 2)}/${currentValue.slice(2, 4)}/${currentValue.slice(4, 8)}`;
    }
    return value;
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
              onChangeText={(text: string) => {
                const formattedText = text.replace(/[^A-Za-z]/g, "");
                onChange(formattedText); // Update form state
              }}
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
              onChangeText={(text: string) => {
                const formattedText = text.replace(/[^A-Za-z]/g, "");
                onChange(formattedText); // Update form state
              }}
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
              maxSelections={1}
              options={genderOptions}
              onSelectionChange={onChange}
            />
          )}
        />

        <Controller
          control={control}
          name="birthday"
          rules={{
            validate: (value) => {
              if (!isValidDate(value)) {
                return "Invalid date format.\nExample: MM/DD/YYYY";
              }
              return true; // Pass validation
            },
          }}
          render={({ field: { onChange, value } }) => (
            <SingleLineInput
              label="Birthday"
              placeholder="MM/DD/YYYY"
              value={value}
              onChangeText={(text: string) => {
                const formattedText = normalizeBirthday(text, value);
                onChange(formattedText); // Update form state
              }}
            />
          )}
        />
      </View>
      <InfoModal
        isVisible={errorModalVisible}
        title="Error"
        onClose={() => setErrorModalVisible(false)}
        text={errorString}
      />

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
