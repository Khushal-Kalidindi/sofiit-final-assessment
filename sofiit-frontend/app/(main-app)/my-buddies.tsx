import {
  View,
  Text,
  StyleSheet,
  Touchable,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";
import { ThemedText } from "@/components/text/ThemedText";
import Emoji from "@/components/Emoji";
import Button from "@/components/inputs/buttons/Button";
import React from "react";
import BottomSheetModal from "@/components/modals/BottomSheetModal";
import BuddyProfileSummary from "@/components/buddy/BuddyProfileSummary";
import { BuddyProfile } from "@/models/BuddyProfile";
import { mockBuddyShirley } from "@/constants/BuddyDummyData";
import BuddyChat from "@/components/buddy/BuddyChat";
import {
  BuddyIconActive,
  ProgressIcon,
  HouseIcon,
  ProfileIcon,
} from "@/constants/Images";

// Mock user data
const mockBuddyData: BuddyProfile = mockBuddyShirley;

export default function MyBuddies() {
  const router = useRouter();
  const [isBuddyModalVisible, setIsBuddyModalVisible] = React.useState(true);

  return (
    <>
      <View style={styles.headerContainer}>
        <ThemedText color="dark" weight="header">
          My Buddies
        </ThemedText>
        <Button
          buttonType="secondary"
          buttonVariant="outline"
          buttonStyle={{
            height: 33,
            width: undefined,
            paddingHorizontal: 16,
            paddingVertical: 4,
          }}
          onPress={() => {}}
        >
          <ThemedText weight="bold" style={{ fontSize: 16 }}>
            Allow notifications
          </ThemedText>
        </Button>
      </View>
      <View style={styles.mainContainer}>
        <BuddyChat
          messageText="Hey, how are you doing today?"
          buddyFirstName={mockBuddyShirley.firstName}
          buddyProfilePicUrl={mockBuddyShirley.profilePicUrl}
          timeRecieved="12:00 PM"
        />
      </View>
      <View style={styles.tabsContainer}>
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={() => {}}>
            <HouseIcon width={32} height={32} />
            <ThemedText style={{ fontSize: 10 }}>Home</ThemedText>
          </TouchableOpacity>
        </View>
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={() => {}}>
            <BuddyIconActive width={32} height={32} />
            <ThemedText color="red" style={{ fontSize: 10, width: "100%" }}>
              Buddies
            </ThemedText>
          </TouchableOpacity>
        </View>
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={() => {}}>
            <ProgressIcon width={32} height={32} />
            <ThemedText style={{ fontSize: 10, width: "100%" }}>
              Progress
            </ThemedText>
          </TouchableOpacity>
        </View>
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={() => {}}>
            <ProfileIcon width={32} height={32} />
            <ThemedText style={{ fontSize: 10, width: "100%" }}>
              {"  "}You
            </ThemedText>
          </TouchableOpacity>
        </View>
      </View>
      <BottomSheetModal
        isVisible={isBuddyModalVisible}
        onClose={() => setIsBuddyModalVisible(false)}
        backdropOpacity={0.5}
        heightPercent={75}
        children={
          <>
            <View
              style={{
                paddingTop: 16,
                paddingRight: 16,
                marginBottom: -4,
              }}
            >
              <ThemedText color="grey" style={{ alignSelf: "flex-end" }}>
                ✕
              </ThemedText>
            </View>
            <BuddyProfileSummary buddyProfile={mockBuddyData} />
          </>
        }
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
    alignItems: "center",
    paddingHorizontal: 16,
  },
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    alignSelf: "stretch",
    width: "100%",
    borderBottomWidth: 1,
    marginBottom: 20,
    borderColor: "#E2E2E2",
    paddingVertical: 24,
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
  tabsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 30,
    alignItems: "center",
    alignSelf: "stretch",
    borderTopWidth: 1,
    borderColor: "#E2E2E2",
  },
  iconContainer: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
});
