import React, { ReactNode } from "react";
import { View } from "react-native";
import { ThemedText } from "@/components/text/ThemedText";
import Emoji from "../../Emoji";

interface ListSelectItemProps {
  label: string;
  emoji?: string;
  children?: ReactNode;
}

const ListSelectItem: React.FC<ListSelectItemProps> = ({
  label,
  emoji,
  children,
}) => {
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
      <ThemedText color="dark" weight="semibold">
        {label}
      </ThemedText>
      {emoji && <Emoji emoji={emoji} size={24} />}
      {children}
    </View>
  );
};

export default ListSelectItem;
