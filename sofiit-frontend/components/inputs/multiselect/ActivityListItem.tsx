import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Emoji from "@/components/Emoji";
import { ThemedText } from "@/components/text/ThemedText";
import { ListOption } from "./ListSelectItem";
import { useState } from "react";

interface ActivityListItemProps {
  option: ListOption;
  fillColor: string;
  borderColor: string;
  isSelected?: boolean;
}

const ActivityListItem: React.FC<ActivityListItemProps> = ({
  option,
  fillColor,
  borderColor,
  isSelected = false,
}) => {
  return (
    <View
      style={[
        styles.itemContainer,
        isSelected
          ? { backgroundColor: fillColor, borderColor: borderColor }
          : undefined,
      ]}
    >
      <ThemedText color="dark" weight="semibold">
        {option.label}
      </ThemedText>
      {option.emoji && <Emoji emoji={option.emoji} size={24} />}
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "row",
    gap: 8,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: "#E2E2E2",
    backgroundColor: "#F8F8F8",
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
});

export default ActivityListItem;
