import React, { useState } from "react";
import { View, TouchableOpacity, StyleSheet, ViewStyle } from "react-native";
import ListSelectItem, { ListOption } from "./ListSelectItem";
import { FlatList } from "react-native-gesture-handler";
import ActivityListItem from "./ActivityListItem";

export interface ActivityListOption extends ListOption {
  fillColor: string;
  borderColor: string;
}

export interface ActivitySelectProps {
  options: ActivityListOption[];
  selectedOptions?: string[];
  onSelectionChange: (selectedOptions: string[]) => void;
  maxSelections?: number;
  containerStyle?: ViewStyle;
  itemContainerStyle?: ViewStyle;
}

// The multi-select component that contains all selectable items
const ActivityListSelect: React.FC<ActivitySelectProps> = ({
  options,
  selectedOptions,
  onSelectionChange,
  maxSelections,
  itemContainerStyle,
  containerStyle,
}) => {
  const [selected, setSelected] = useState<string[]>(selectedOptions || []);
  const handleSelect = (option: ActivityListOption): void => {
    let newSelection: string[];

    if (selected.includes(option.value)) {
      newSelection = selected.filter((id) => id !== option.value);
    } else if (!maxSelections || selected.length < maxSelections) {
      newSelection = [...selected, option.value];
    } else {
      return;
    }

    setSelected(newSelection);
    onSelectionChange(newSelection);
  };

  return (
    <View style={[styles.container, containerStyle]}>
      {options.map((option, index) => (
        <TouchableOpacity
          key={option.value}
          onPress={() => handleSelect(option)}
        >
          <ActivityListItem
            key={option.value}
            option={option}
            isSelected={selected.includes(option.value)}
            fillColor={option.fillColor}
            borderColor={option.borderColor}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default ActivityListSelect;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    gap: 16,
    alignSelf: "stretch",
  },
});
