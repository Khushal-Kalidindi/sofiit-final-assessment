import React, { useState } from "react";
import { View, TouchableOpacity, StyleSheet, ViewStyle } from "react-native";
import ListSelectItem, { ListOption } from "./ListSelectItem";
import { FlatList } from "react-native-gesture-handler";

export interface MultiSelectProps {
  options: ListOption[];
  selectedOptions?: string[];
  onSelectionChange: (selectedOptions: string[]) => void;
  multiple?: boolean;
  containerStyle?: ViewStyle;
  itemContainerStyle?: ViewStyle;
}

// The multi-select component that contains all selectable items
const ListMultiSelect: React.FC<MultiSelectProps> = ({
  options,
  selectedOptions,
  onSelectionChange,
  multiple: allowMultiple = false,
  itemContainerStyle,
  containerStyle,
}) => {
  const [selected, setSelected] = useState<string[]>(selectedOptions || []);
  const handleSelect = (option: ListOption): void => {
    let newSelection: string[];

    if (allowMultiple) {
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
      <FlatList
        style={{ width: "100%" }}
        data={options}
        keyExtractor={(item) => item.value}
        renderItem={({ item, index }) => (
          <>
            <TouchableOpacity
              style={[
                styles.itemContainer,
                selected.includes(item.value) ? styles.selected : undefined,
              ]}
              onPress={() => handleSelect(item)}
            >
              <ListSelectItem
                option={item}
                itemContainerStyle={itemContainerStyle}
              />
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
