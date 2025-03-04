import React, {
  forwardRef,
  Ref,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { TouchableOpacity, View } from "react-native";
import SingleLineInput, { SingleLineInputProps } from "./SingleLineInput";
import { TextInputProps, Image, StyleSheet } from "react-native";
import ListSelectItem, { ListOption } from "../multiselect/ListSelectItem";
import { MultiSelectProps } from "../multiselect/ListMultiSelect";

import { useSafeAreaInsets } from "react-native-safe-area-context";
import ChevronDown from "../../../assets/images/chevron-down.svg";
import BottomSheelModal from "@/components/modals/BottomSheetModal";
import { FlatList } from "react-native-gesture-handler";
import { set } from "date-fns";
import { Dimensions } from "react-native";
import Check from "../../../assets/images/check.svg";

const { width, height } = Dimensions.get("window");

export interface BottomSheetMultiSelectProps extends MultiSelectProps {
  label?: string;
  placeholder: string;
}

export const MultiSelectField: React.FC<BottomSheetMultiSelectProps> = ({
  options,
  selectedOptions = [],
  onSelectionChange,
  maxSelections,
  label = "",
  placeholder,
}) => {
  const [selected, setSelected] = useState<string[]>(selectedOptions);
  const [showOptions, setShowOptions] = useState(false);
  function without<T>(array: T[], value: T) {
    return array.filter((v) => v !== value);
  }
  const handleSelect = (option: ListOption): void => {
    let newSelection: string[];

    if (maxSelections === 1) {
      newSelection = [option.value];
      setSelected(newSelection);
      onSelectionChange(newSelection);
      setShowOptions(false);
      return;
    }

    if (selected.includes(option.value)) {
      newSelection = selected.filter((id) => id !== option.value);
    } else if (!maxSelections || selected.length < maxSelections) {
      newSelection = [...selected, option.value];
    } else {
      return;
    }
    console.log(newSelection);

    setSelected(newSelection);
    onSelectionChange(newSelection);
  };

  const getSelectedLabels = () => {
    return options
      .filter((option) => selected.includes(option.value))
      .map((option) => option.label);
  };

  return (
    <>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => {
          setShowOptions(true);
        }}
        style={{ width: "100%" }}
      >
        <View style={{ width: "100%" }}>
          <SingleLineInput
            editable={false}
            label={label}
            placeholder={placeholder}
            value={selected.length ? getSelectedLabels().join(", ") : ""}
          >
            <ChevronDown
              width={24}
              height={24}
              style={{
                position: "absolute",
                top: 6,
                right: 8,
              }}
            />
          </SingleLineInput>
        </View>
      </TouchableOpacity>
      <BottomSheelModal
        isVisible={showOptions}
        onClose={() => {
          setShowOptions(false);
        }}
        heightPercent={50}
      >
        <FlatList
          style={{
            width: "100%",
            padding: 16,
          }}
          scrollEnabled={true}
          data={options}
          contentContainerStyle={{ backgroundColor: "white" }}
          keyExtractor={(item) => item.value}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              style={{
                paddingHorizontal: 16,
                paddingVertical: 36,
                borderBottomWidth: 1,
                borderBottomColor: "#E2E2E2",
              }}
              onPress={() => {
                handleSelect(item);
              }}
            >
              <ListSelectItem
                option={item}
                children={
                  <>
                    {selected.includes(item.value) && (
                      <Check
                        style={{
                          backgroundColor: "#3F0835",
                          width: 24,
                          height: 24,
                          borderRadius: 12,
                        }}
                      />
                    )}
                  </>
                }
              />
            </TouchableOpacity>
          )}
        />
      </BottomSheelModal>
    </>
  );
};
