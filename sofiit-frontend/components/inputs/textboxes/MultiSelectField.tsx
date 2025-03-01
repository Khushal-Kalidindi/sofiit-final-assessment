import React, { forwardRef, Ref, useImperativeHandle, useRef } from "react";
import { TouchableOpacity, View } from "react-native";
import SingleLineInput, { SingleLineInputProps } from "./SingleLineInput";
import { TextInputProps, Image, StyleSheet } from "react-native";
import ListSelectItem, { ListOption } from "../multiselect/ListSelectItem";

import {
  BottomSheetBackdrop,
  BottomSheetFlatList,
  BottomSheetScrollView,
  BottomSheetFooter,
  BottomSheetModal,
} from "@gorhom/bottom-sheet";

import { useSafeAreaInsets } from "react-native-safe-area-context";

export interface BottomSheetMultiSelectProps {
  value?: string[];
  options: ListOption[];
  selectedOptions: string[];
  onSelectionChange: (selectedOptions: string[]) => void;
  allowMultiple?: boolean;
}

export interface SelectFieldProps
  extends Omit<
    SingleLineInputProps,
    "ref" | "onValueChange" | "onChange" | "value"
  > {
  value?: string[];
  renderValue?: (value: string[]) => string;
  onSelect?: (newValue: string[]) => void;
  multiple?: boolean;
  options: { label: string; value: string }[];
}
export interface SelectFieldRef {
  presentOptions: () => void;
  dismissOptions: () => void;
}

function without<T>(array: T[], value: T) {
  return array.filter((v) => v !== value);
}

export const MultiSelectField = forwardRef(function SelectField(
  props: SelectFieldProps,
  ref: Ref<SelectFieldRef>
) {
  const {
    onSelect,
    renderValue,
    options = [],
    multiple = true,
    value,
    ...SingleLineInputProps
  } = props;
  const sheet = useRef<BottomSheetModal>(null);
  const { bottom } = useSafeAreaInsets();

  const disabled = SingleLineInputProps.editable === false;

  useImperativeHandle(ref, () => ({ presentOptions, dismissOptions }));

  function presentOptions() {
    if (disabled) return;
    sheet.current?.present();
  }

  function dismissOptions() {
    sheet.current?.dismiss();
  }
  // State for tracking selected options
  const [selectedOptions, setSelectedOptions] = React.useState<string[]>(
    value || []
  );

  // // Update selected options when value prop changes
  // React.useEffect(() => {
  //   setSelectedOptions(value);
  // }, [value]);

  function updateValue(optionValue: string) {
    const newValue = selectedOptions.includes(optionValue)
      ? multiple
        ? without(selectedOptions, optionValue)
        : []
      : multiple
        ? [...selectedOptions, optionValue]
        : [optionValue];

    setSelectedOptions(newValue);
    onSelect?.(newValue);

    if (!multiple && !selectedOptions.includes(optionValue)) {
      dismissOptions();
    }
  }

  const valueString = (selectedOptions || [])
    .map((v) => options.find((o) => o.value === v)?.label)
    .filter(Boolean)
    .join(", ");

  return (
    <>
      <TouchableOpacity
        activeOpacity={1}
        onPress={presentOptions}
        style={{ width: "100%" }}
      >
        <View pointerEvents="none">
          <SingleLineInput
            editable={false}
            label={SingleLineInputProps.label}
            placeholder={SingleLineInputProps.placeholder}
            value={valueString}
          >
            <Image
              source={require("../../../assets/images/chevron-down.svg")}
            />
          </SingleLineInput>
        </View>
      </TouchableOpacity>
      <BottomSheetModal
        ref={sheet}
        snapPoints={["50%"]}
        stackBehavior="replace"
        enableDismissOnClose
        enableDynamicSizing={false}
        backdropComponent={(props) => (
          <BottomSheetBackdrop
            {...props}
            appearsOnIndex={0}
            disappearsOnIndex={-1}
          />
        )}
      >
        <BottomSheetFlatList
          data={options}
          keyExtractor={(o) => o.value}
          renderItem={({ item, index }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <View style={{ width: "100%" }}>
                <TouchableOpacity onPress={() => updateValue(item.value)}>
                  <View style={styles.itemContainer}>
                    <ListSelectItem
                      option={item}
                      children={
                        <>
                          {selectedOptions.includes(item.value) && (
                            <Image
                              source={require("../../../assets/images/check.svg")}
                              style={{
                                backgroundColor: "#3F0835",
                                width: 24,
                                height: 24,
                                borderRadius: "50%",
                              }}
                            />
                          )}
                        </>
                      }
                    />
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.separator} />
            </View>
          )}
        />
      </BottomSheetModal>
    </>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
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
    backgroundColor: "#E2E2E2",
    width: "85%",
  },
});
