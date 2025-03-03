import { View, Text, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { ThemedText } from "@/components/text/ThemedText";
import Emoji from "@/components/Emoji";
import Button from "@/components/inputs/buttons/Button";
import React from "react";
import BottomSheetModal from "@/components/modals/BottomSheetModal";
import BuddyProfile from "@/components/BuddyProfile";

export default function FailInvalidSchool() {
  const router = useRouter();
  const [isBuddyModalVisible, setIsBuddyModalVisible] = React.useState(true);

  return (
    <>
      <View style={styles.mainContainer}>
        <View style={{ width: 96, height: 96 }}>
          <Emoji emoji="rocket" />
        </View>
        <ThemedText
          color="purple"
          weight="header"
          style={{ textAlign: "center" }}
        >
          MyBuddies
        </ThemedText>
      </View>
      <BottomSheetModal
        isVisible={isBuddyModalVisible}
        onClose={() => setIsBuddyModalVisible(false)}
        heightPercent={85}
        children={
          <BuddyProfile
            buddyProfile={{
              firstName: "John",
              lastName: "Doe",
              profilePicUrl:
                "https://static3.depositphotos.com/1000951/138/i/450/depositphotos_1380772-stock-photo-profile-of-beautiful-smiling-girl.jpg",
              pronouns: "he/him",
              school: "University of Toronto",
              commonGoals: ["build_strength", "make_new_friends"],
              commonActivities: ["running", "swimming"],
              commonSelfDescribes: ["online_learner", "Creative"],
            }}
          />
        }
        onClose={() => setIsBuddyModalVisible(false)}
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
    paddingTop: 160,
    alignItems: "center",
    paddingHorizontal: 16,
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
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 72,
    gap: 8,
  },
});
