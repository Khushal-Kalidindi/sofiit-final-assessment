import { View, Text, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { ThemedText } from "@/components/text/ThemedText";
import React from "react";
import { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import IconButton from "@/components/inputs/buttons/IconButton";
import { OtpInput } from "react-native-otp-entry";
import { Pressable } from "react-native";

export default function OTPVerificationScreen() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [otp, setOTP] = useState("");
  const [otpResendCooldown, setOtpResendCooldown] = useState(60);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (otpResendCooldown > 0) {
      timer = setInterval(() => {
        setOtpResendCooldown((prevCooldown) => {
          if (prevCooldown <= 1) {
            clearInterval(timer);
            return 0;
          }
          return prevCooldown - 1;
        });
      }, 1000);
    }

    // Cleanup function to clear the interval when component unmounts
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [otpResendCooldown]);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      otp: otp,
    },
    // mode: "onSubmit",
  });

  const onSubmit = async (data: { otp: string }) => {
    console.log("Doing something:", data.otp);
    setLoading(true);
    try {
      console.log("Submitting OTP:", data.otp);
    } catch (error) {
      console.error("Error verifying OTP:", error);
      setOTP(""); // Clear the OTP field
    } finally {
      setLoading(false);
    }
    console.log("Success");
    router.push("/stage1/personal-info-3");
  };

  const normalizeInput = (value: string, previousValue: string) => {
    const currentValue = value.replace(/[^\d]/g, "");
    const cvLength = currentValue.length;
    // Don't allow more than 6 digits
    if (cvLength < 4) return currentValue;
    return value;
  };

  return (
    <>
      <View style={{ paddingHorizontal: 24 }}>
        <ThemedText color="purple" weight="header">
          Enter your{"\n"}verification code
        </ThemedText>
      </View>
      <View style={{ paddingHorizontal: 24, marginTop: 24 }}>
        <Controller
          control={control}
          rules={{
            required: "OTP is required",
            validate: (value) => {
              if (value.length !== 6) {
                return "Invalid OTP code"; // Fail validation
              }
              return true; // Pass validation
            },
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <OtpInput
              secureTextEntry={false}
              type="numeric"
              onBlur={onBlur}
              focusColor={"#F1301B"}
              focusStickBlinkingDuration={500}
              onTextChange={(text) => {
                const formattedText = normalizeInput(text, otp);
                console.log("Formatted text:", formattedText);
                setOTP(formattedText); // Update local state
                onChange(formattedText); // Update form state
              }}
              textInputProps={{
                value: value,
              }}
              theme={{
                pinCodeContainerStyle: { width: 56, height: 56 },
              }}
            />
          )}
          name="otp"
        />
        <View style={{ alignItems: "flex-end" }}>
          {otpResendCooldown > 0 ? (
            <ThemedText color="grey" style={{ marginTop: 8 }}>
              Resend in{" "}
              <ThemedText color="red">{otpResendCooldown}s</ThemedText>
            </ThemedText>
          ) : (
            <Pressable onPress={() => setOtpResendCooldown(60)}>
              <ThemedText color="grey" style={{ marginTop: 8 }}>
                Resend OTP
              </ThemedText>
            </Pressable>
          )}
        </View>
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
