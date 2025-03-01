import { View, Text, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { ThemedText } from "@/components/text/ThemedText";
import React from "react";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import IconButton from "@/components/inputs/buttons/IconButton";
import PhoneNumberInput from "@/components/inputs/textboxes/PhoneNumberInput";

export default function VerifyPhoneNumberScreen() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      phoneNumber: phoneNumber,
    },
    // mode: "onSubmit",
  });

  const onSubmit = async (data: { phoneNumber: string }) => {
    console.log("Doing something:", data.phoneNumber);
    setLoading(true);
    try {
      console.log("Submitting phone number:", data.phoneNumber);
    } catch (error) {
      console.error("Error verifying phone number:", error);
      setPhoneNumber("");
    } finally {
      setLoading(false);
    }
  };
  const normalizeInput = (value: string, previousValue: string) => {
    if (!value) return value;
    const currentValue = value.replace(/[^\d]/g, "");
    const cvLength = currentValue.length;

    if (!previousValue || value.length > previousValue.length) {
      if (cvLength < 4) return currentValue;
      if (cvLength < 7)
        return `(${currentValue.slice(0, 3)}) ${currentValue.slice(3)}`;
      return `(${currentValue.slice(0, 3)}) ${currentValue.slice(3, 6)}-${currentValue.slice(6, 10)}`;
    }
    return value;
  };

  return (
    <>
      <View style={{ paddingHorizontal: 24, marginTop: 57 }}>
        <ThemedText color="purple" weight="header">
          Let’s verify your{"\n"}phone number
        </ThemedText>
      </View>
      <View style={{ paddingHorizontal: 24, marginTop: 24 }}>
        <Controller
          control={control}
          rules={{
            required: "Phone number is required",
            validate: (value) => {
              if (value.length !== 14) {
                return "Invalid phone format. Example: (555) 555-5555";
              }
              return true; // Pass validation
            },
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <PhoneNumberInput
              placeholder="(xxx) xxx-xxxx"
              secureTextEntry={false}
              keyboardType="phone-pad"
              onBlur={onBlur}
              onChangeText={(text: string) => {
                const formattedText = normalizeInput(text, phoneNumber);
                setPhoneNumber(formattedText); // Update local state
                onChange(formattedText); // Update form state
              }}
              value={value}
            />
          )}
          name="phoneNumber"
        />
        <ThemedText color="grey" style={{ marginTop: 8 }}>
          By entering your number, you agree to receive updates and personalized
          text messages. Reply STOP to opt out. Msg & data rates may apply.
        </ThemedText>
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
