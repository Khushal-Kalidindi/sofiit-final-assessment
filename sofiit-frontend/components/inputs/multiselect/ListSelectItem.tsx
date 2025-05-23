import React, { ReactNode } from "react";
import { View, ViewStyle, StyleSheet } from "react-native";
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
  itemContainerStyle?: ViewStyle;
}

const ListSelectItem: React.FC<ListSelectItemProps> = ({
  option,
  children,
  itemContainerStyle,
}) => {
  return (
    <View style={[styles.container, itemContainerStyle]}>
      <ThemedText color="dark" weight="semibold">
        {option.label}
      </ThemedText>
      {option.emoji && <Emoji emoji={option.emoji} size={24} />}
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    height: 24,
    width: "100%",
  },
});

export default ListSelectItem;
