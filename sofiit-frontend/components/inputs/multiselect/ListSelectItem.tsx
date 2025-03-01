import React, { ReactNode } from "react";
import { View } from "react-native";
import { ThemedText } from "@/components/text/ThemedText";
import Emoji from "../../Emoji";

export interface ListOption {
  label: string;
  value: string;
  emoji?: string;
}

interface ListSelectItemProps {
  option: ListOption;
  children?: ReactNode;
}

const ListSelectItem: React.FC<ListSelectItemProps> = ({
  option,
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
        {option.label}
      </ThemedText>
      {option.emoji && <Emoji emoji={option.emoji} size={24} />}
      {children}
    </View>
  );
};

export default ListSelectItem;
