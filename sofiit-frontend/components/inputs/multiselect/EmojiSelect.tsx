import React, { useState } from "react";
import { View, Text, StyleSheet, ViewStyle } from "react-native";
import Emoji from "@/components/Emoji";
import { ThemedText } from "@/components/text/ThemedText";
import { TouchableOpacity } from "react-native";
import { set } from "date-fns";

export interface EmojiSelectOption {
  label: string;
  value: string;
  emoji: string;
}

interface EmojiSelectProps {
  options: EmojiSelectOption[];
  selectedOptions?: string[];
  onSelectionChange: (selectedOptions: string[]) => void;
  multiple?: boolean;
  containerStyle?: ViewStyle;
}

export const EmojiSelect: React.FC<EmojiSelectProps> = ({
  options,
  containerStyle,
  selectedOptions,
  onSelectionChange,
  multiple = false,
}) => {
  const [selected, setSelected] = useState<string[]>(selectedOptions || []);
  const handleSelect = (option: EmojiSelectOption): void => {
    let newSelection: string[];

    if (multiple) {
      if (selected.includes(option.value)) {
        newSelection = selected.filter((id) => id !== option.value);
      } else {
        newSelection = [...selected, option.value];
      }
    } else {
      newSelection = [option.value];
    }
    setSelected(newSelection);

    onSelectionChange(newSelection);
  };

  return (
    <View style={[styles.container, containerStyle]}>
      {options.map((option, index) => (
        <TouchableOpacity
          key={option.value}
          style={[
            styles.itemContainer,
            selected.includes(option.value) ? styles.selected : undefined,
          ]}
          onPress={() => handleSelect(option)}
        >
          <Emoji emoji={option.emoji} size={32} />
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  itemContainer: {
    display: "flex",
    borderWidth: 1,
    borderColor: "#E2E2E2",
    justifyContent: "center",
    alignItems: "center",
    height: 64,
    width: 64,
    borderRadius: 16,
  },
  selected: {
    borderColor: "#656BFF",
    backgroundColor: "#EFF1FC",
  },
});
