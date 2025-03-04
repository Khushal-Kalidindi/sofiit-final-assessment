import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { ThemedText } from "@/components/text/ThemedText";
import Emoji from "@/components/Emoji";
import { ScrollView } from "react-native-gesture-handler";
import ActivityListItem from "../inputs/multiselect/ActivityListItem";
import {
  currentGoalsOptions,
  bestDescribesYouOptions,
  goToActivitiesOptions,
} from "@/constants/FormConstants";
import Button from "@/components/inputs/buttons/Button";
import { BuddyProfile } from "@/models/BuddyProfile";

export interface BuddyProfileProps {
  buddyProfile: BuddyProfile;
}
const BuddyProfileSummary: React.FC<BuddyProfileProps> = ({ buddyProfile }) => {
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
    <>
      <ScrollView>
        <View style={styles.container}>
          <Emoji emoji="star-struck" size={32} />
          <ThemedText color="purple" weight="header">
            Start chatting with
          </ThemedText>
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 12,
              marginTop: 24,
            }}
          >
            <Image
              source={{ uri: buddyProfile.profilePicUrl }}
              style={styles.profilePic}
            ></Image>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <ThemedText color="dark" weight="header">
                {buddyProfile.firstName}
              </ThemedText>
              <ThemedText color="dark">{buddyProfile.pronouns}</ThemedText>
            </View>
            <ActivityListItem
              option={{
                label: buddyProfile.school,
                value: buddyProfile.school,
                emoji: "school",
              }}
              fillColor="#DFE4F7"
              borderColor="#DFE4F7"
              isSelected={false}
            />
            <ThemedText color="dark">Your common ground</ThemedText>
            <View style={styles.commonTagsContainer}>
              {commonGoal && (
                <ActivityListItem
                  option={commonGoal}
                  fillColor="#DFE4F7"
                  borderColor="#DFE4F7"
                  isSelected={true}
                />
              )}
              {commonActivity && (
                <ActivityListItem
                  option={commonActivity}
                  fillColor="#FEE7D3"
                  borderColor="#FEE7D3"
                  isSelected={true}
                />
              )}
              {commonSelfDescribe && (
                <ActivityListItem
                  option={commonSelfDescribe}
                  fillColor="#F9DCF3"
                  borderColor="#F9DCF3"
                  isSelected={true}
                />
              )}
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.buttonsContainer}>
        <Button onPress={() => {}} buttonType="primary" buttonVariant="filled">
          <ThemedText color="light" weight="bold">
            Start Chatting
          </ThemedText>
        </Button>
        <Button
          onPress={() => {}}
          buttonType="secondary"
          buttonVariant="outline"
        >
          <ThemedText color="dark" weight="bold">
            View Profile
          </ThemedText>
        </Button>
      </View>
    </>
  );
};

export default BuddyProfileSummary;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingBottom: 16,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  profilePic: {
    width: 96,
    height: 96,
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
});
