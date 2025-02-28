import { Text, View } from "react-native";
import React from "react";
import { useState } from "react";
import ActionButton from "../components/inputs/buttons/ActionButton";
import Button from "../components/inputs/buttons/Button";
import { ThemedText } from "@/components/text/ThemedText";
import IconButton from "../components/inputs/buttons/IconButton";
import ListSelectItem from "../components/inputs/multiselect/ListSelectItem";
import ListMultiSelect from "../components/inputs/multiselect/ListMultiSelect";

export default function Index() {
  const [selectedRoles, setSelectedRoles] = useState<string[]>([]);

  const roleOptions = [
    { id: "student", label: "I'm a student", emoji: "books" },
    { id: "faculty", label: "I'm faculty or staff", emoji: "briefcase" },
    { id: "parent", label: "I'm a parent", emoji: "family" },
    { id: "alumni", label: "I'm an alumni", emoji: "graduation-cap" },
  ];

  // Handle selection changes
  const handleSelectionChange = (newSelection: string[]) => {
    setSelectedRoles(newSelection);
    console.log("Selected roles:", newSelection);
    // Here you can add any additional logic when selection changes
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ListMultiSelect
        options={roleOptions}
        selectedOptions={selectedRoles}
        onSelectionChange={handleSelectionChange}
        allowMultiple={false} // Set to true if multiple selections are allowed
      />
      {/* <ActionButton title="Hello World" buttonType="secondary" onPress={() => {}} /> */}
      {/* <ThemedText color="purple" weight="header">
        Which of these applies to you?
      </ThemedText>
      <ListSelectItem label="I'm a student" emoji="grinning-face" />
      <Button buttonType="primary" buttonVariant="filled" onPress={() => {}}>
        <ThemedText color="light" weight="bold">
          Hello World
        </ThemedText>
      </Button>
      <Button buttonType="primary" buttonVariant="outline" onPress={() => {}}>
        <ThemedText color="dark" weight="bold">
          Hello World
        </ThemedText>
      </Button>
      <IconButton
        iconSource={require("../assets/images/chevron.backward.svg")}
        buttonStatus="disabled"
        onPress={() => {}}
      /> */}
    </View>
  );
}
