import { View, Text, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { ThemedText } from "@/components/text/ThemedText";
import React from "react";
import IconButton from "@/components/inputs/buttons/IconButton";
import { ScrollView } from "react-native-gesture-handler";
import { useUser } from "@/contexts/UserProvider";
import { useForm, Controller } from "react-hook-form";
import { buddyQuestionOptions } from "@/constants/FormConstants";
import { MultiSelectField } from "@/components/inputs/textboxes/MultiSelectField";
import MultiLineInput from "@/components/inputs/textboxes/MultiLineInput";

export default function BuddyInfo6() {
  const router = useRouter();
  const { user, updateUser } = useUser();

  interface FormData {
    bio: string;
    questionForBuddy: string;
  }

  const { control, handleSubmit, setValue, watch } = useForm<FormData>({
    defaultValues: {
      bio: "",
      questionForBuddy: "",
    },
  });

  const watchedFields = watch();

  const isFormComplete = () => {
    return !!watchedFields.bio && !!watchedFields.questionForBuddy;
  };

  const onSubmit = async (data: FormData) => {
    await updateUser({
      ...user,
      profile: {
        ...user.profile,
        bio: data.bio,
        questionForBuddy: data.questionForBuddy,
      },
    }).then(() => {
      router.push("/stage3/buddy-info-7");
    });
  };
  return (
    <>
      <ScrollView>
        <View style={{ paddingHorizontal: 24 }}>
          <ThemedText color="purple" weight="header">
            Tell your future buddy about yourself
          </ThemedText>
          <View style={{ marginTop: 16 }}>
            <ThemedText color="grey" weight="regular">
              Share something unique to help start a conversation.
            </ThemedText>
          </View>
          <View style={styles.mainContent}>
            <Controller
              control={control}
              name="bio"
              render={({ field: { onChange, value } }) => (
                <MultiLineInput
                  placeholder="I'm a..."
                  value={value}
                  maxLength={150}
                  showCounter={true}
                  onChangeText={onChange}
                />
              )}
            />
            <Controller
              control={control}
              name="questionForBuddy"
              render={({ field: { onChange, value } }) => (
                <MultiSelectField
                  label="Ask your buddy a question"
                  placeholder="Click to select"
                  maxSelections={1}
                  options={buddyQuestionOptions}
                  onSelectionChange={onChange}
                />
              )}
            />
            <ThemedText
              color="grey"
              weight="regular"
              style={{
                fontSize: 13,
                fontStyle: "italic",
                paddingHorizontal: 4,
              }}
            >
              Example: “Hey! I'm John originally from Columbus, Ohio. I'm
              studying finance and you can usually find me playing tennis at the
              rec center on Sundays. What do you like to do for fun?”
            </ThemedText>
          </View>
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
  mainContent: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    marginTop: 16,
    gap: 24,
  },
});
