import React from "react";
import { View } from "react-native";
import { ThemedText } from "@/components/text/ThemedText";
import Emoji from "../../Emoji";

interface ListSelectItemProps {
  label: string;
  emoji: string;
}

const ListSelectItem: React.FC<ListSelectItemProps> = ({ label, emoji }) => {
  return (
    <View
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
        height: 24,
        width: "100%",
      }}
    >
      <View style={{ flexShrink: 0, width: "90%" }}>
        <ThemedText color="dark" weight="semibold">
          {label}
        </ThemedText>
      </View>
      <Emoji emoji={emoji} />
    </View>
  );
};

export default ListSelectItem;
