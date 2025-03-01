import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import ListSelectItem from "./ListSelectItem";
import { FlatList } from "react-native-gesture-handler";

interface Option {
  id: string;
  label: string;
  emoji: string;
}
export interface MultiSelectProps {
  options: Option[];
  selectedOptions: string[];
  onSelectionChange: (selectedOptions: string[]) => void;
  allowMultiple?: boolean;
}

// The multi-select component that contains all selectable items
const ListMultiSelect: React.FC<MultiSelectProps> = ({
  options,
  selectedOptions,
  onSelectionChange,
  allowMultiple = false,
}) => {
  const handleSelect = (option: Option): void => {
    let newSelection: string[];

    if (allowMultiple) {
      if (selectedOptions.includes(option.id)) {
        newSelection = selectedOptions.filter((id) => id !== option.id);
      } else {
        newSelection = [...selectedOptions, option.id];
      }
    } else {
      newSelection = [option.id];
    }

    onSelectionChange(newSelection);
  };

  return (
    <View style={styles.container}>
      <FlatList
        style={{ width: "100%" }}
        data={options}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <>
            <TouchableOpacity
              style={[
                styles.itemContainer,
                // Add selected style if the item is selected
                selectedOptions.includes(item.id) ? styles.selected : undefined,
              ]}
              onPress={() => handleSelect(item)}
            >
              <ListSelectItem label={item.label} emoji={item.emoji} />
            </TouchableOpacity>
            {index !== options.length - 1 && <View style={styles.separator} />}
          </>
        )}
      />
    </View>
  );
};

export default ListMultiSelect;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#E2E2E2",
    borderRadius: 30,
    width: "100%",
  },
  itemContainer: {
    paddingVertical: 24,
    paddingHorizontal: 28,
  },
  selected: {
    backgroundColor: "#DFE4F7",
  },
  separator: {
    height: 1,
    alignSelf: "center",
    backgroundColor: "#E2E2E2",
    width: "80%",
  },
});
