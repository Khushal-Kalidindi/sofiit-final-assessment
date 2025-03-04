import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { ThemedText } from "@/components/text/ThemedText";
import ActivityListItem from "../inputs/multiselect/ActivityListItem";
import { BuddyProfile } from "@/components/BuddyProfileSummary";
import {
  currentGoalsOptions,
  bestDescribesYouOptions,
  goToActivitiesOptions,
} from "@/constants/FormConstants";

const buddyProfile: BuddyProfile = {
  firstName: "Shirley",
  lastName: "Doe",
  profilePicUrl:
    "https://static3.depositphotos.com/1000951/138/i/450/depositphotos_1380772-stock-photo-profile-of-beautiful-smiling-girl.jpg",
  pronouns: "she/her",
  school: "University of Toronto",
  commonGoals: ["build_strength", "make_new_friends"],
  commonActivities: ["running", "swimming"],
  commonSelfDescribes: ["online_learner", "Creative"],
};

export default function BuddyProfileSample({ style }: { style?: any }) {
  const commonGoal = currentGoalsOptions.find(
    (option) => option.value === buddyProfile.commonGoals[0]
  );
  const commonActivity = goToActivitiesOptions.find(
    (option) => option.value === buddyProfile.commonActivities[0]
  );
  const commonSelfDescribe = bestDescribesYouOptions.find(
    (option) => option.value === buddyProfile.commonSelfDescribes[0]
  );
  return (
    <View style={[styles.buddyInfoContainer, style]}>
      <Image
        source={{ uri: buddyProfile.profilePicUrl }}
        style={styles.profilePic}
      ></Image>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <ThemedText color="dark" weight="header" style={{ fontSize: 28 }}>
          {buddyProfile.firstName}
        </ThemedText>
        <ThemedText color="dark">{buddyProfile.pronouns}</ThemedText>
      </View>
      <ThemedText color="dark">Your common ground</ThemedText>
      <View style={styles.commonTagsContainer}>
        <View style={[styles.itemContainer, { backgroundColor: "#DFE4F7" }]}>
          <ThemedText>Cycling 🚴</ThemedText>
        </View>
        <View style={[styles.itemContainer, { backgroundColor: "#DFE4F7" }]}>
          <ThemedText>Climbing 🧗</ThemedText>
        </View>
        <View style={[styles.itemContainer, { backgroundColor: "#F9E9F6" }]}>
          <ThemedText>Practice self-care 📝</ThemedText>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buddyInfoContainer: {
    backgroundColor: "#FFF",
    borderRadius: 16,
    padding: 40,
    boxShadow: "1px 3px 12px 0px rgba(60, 60, 60, 0.10)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: 370,
    gap: 12,
    marginTop: 24,
  },
  profilePic: {
    width: 74,
    height: 74,
    borderRadius: 48,
    borderWidth: 0,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  commonTagsContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 16,
    alignSelf: "stretch",
  },
  buttonsContainer: {
    position: "absolute",
    alignSelf: "center",
    bottom: 72,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 12,
  },
  itemContainer: {
    display: "flex",
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
});
