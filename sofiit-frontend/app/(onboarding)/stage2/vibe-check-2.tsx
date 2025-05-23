import { View, Text, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { ThemedText } from "@/components/text/ThemedText";
import React from "react";
import IconButton from "@/components/inputs/buttons/IconButton";
import { useForm, Controller } from "react-hook-form";
import {
  EmojiSelect,
  EmojiSelectOption,
} from "@/components/inputs/multiselect/EmojiSelect";
import { useUser } from "@/contexts/UserProvider";
import InfoButton from "@/components/inputs/buttons/InfoButton";
import InfoModal from "@/components/modals/InfoModal";
import WebModal from "@/components/modals/WebModal";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function VibeCheckScreen2() {
  const router = useRouter();
  const { user, updateUser } = useUser();
  const [webModalVisible, setWebModalVisible] = React.useState(false);
  const [infoModalVisible, setInfoModalVisible] = React.useState(false);

  const emojiOptions: EmojiSelectOption[] = [
    // label, value, emoji
    { label: "Yes", value: "1", emoji: "weary-face" },
    { label: "Yes", value: "2", emoji: "slightly-frowning-face" },
    { label: "Yes", value: "3", emoji: "neutral-face" },
    { label: "Yes", value: "4", emoji: "slightly-smiling-face" },
    { label: "Yes", value: "5", emoji: "grinning-face" },
  ];

  interface FormData {
    feelingAboutDailyActivities: string;
  }

  const { control, handleSubmit, watch } = useForm<FormData>({
    defaultValues: {
      feelingAboutDailyActivities: "",
    },
    // mode: "onSubmit",
  });

  const isFormComplete = () => {
    return !!watch().feelingAboutDailyActivities;
  };

  const onSubmit = async (data: FormData) => {
    console.log("Form data:", data);
    updateUser({
      ...user,
      profile: {
        ...user.profile,
        feelingAboutDailyActivities: data.feelingAboutDailyActivities[0],
      },
    }).then(() => {
      console.log("User updated");
      console.log(user);
      router.push("/stage2/vibe-check-3");
    });
  };

  return (
    <>
      <View style={{ paddingHorizontal: 24 }}>
        <ThemedText color="purple" weight="header">
          Are you engaged and interested in your daily activities?
        </ThemedText>
      </View>
      <View style={{ paddingHorizontal: 24, marginTop: 12 }}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <ThemedText color="dark" weight="regular">
            Question 1/2{" "}
          </ThemedText>
          <InfoButton onPress={() => setInfoModalVisible(true)} />
        </View>

        <Controller
          control={control}
          name="feelingAboutDailyActivities"
          render={({ field: { onChange, value } }) => (
            <EmojiSelect
              options={emojiOptions}
              onSelectionChange={onChange}
              containerStyle={{ marginTop: 12 }}
            />
          )}
        />
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity onPress={() => setWebModalVisible(true)}>
          <ThemedText color="grey">Discover on-campus resources</ThemedText>
        </TouchableOpacity>
      </View>
      <WebModal
        isVisible={webModalVisible}
        onClose={() => setWebModalVisible(false)}
        title="Discover on-campus resources"
        url="https://sites.usc.edu/counselingandmentalhealth/"
      />
      <InfoModal
        isVisible={infoModalVisible}
        onClose={() => setInfoModalVisible(false)}
        text="At SoFiiT, your overall wellness and social connections are our top priorities. To provide you with the best support and resources, we need to understand your current social and personal wellness. Your responses are confidential and will only be used to improve your experience with SoFiiT."
      />
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
