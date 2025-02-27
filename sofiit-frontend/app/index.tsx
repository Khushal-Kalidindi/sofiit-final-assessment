import { Text, View } from "react-native";
import React from "react";
import ActionButton from "../components/buttons/ActionButton";
import Button from "../components/buttons/Button";
import { ThemedText } from "@/components/text/ThemedText";
import IconButton from "../components/buttons/IconButton";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* <ActionButton title="Hello World" buttonType="secondary" onPress={() => {}} /> */}
      <Button buttonType="primary" buttonVariant='filled' onPress={() => {}}>
        <ThemedText type="light" weight="bold">Hello World</ThemedText>
      </Button>
      <Button buttonType="primary" buttonVariant='outline' onPress={() => {}}>
        <ThemedText type="dark" weight="bold">Hello World</ThemedText>
      </Button>
      <IconButton iconSource={require('../assets/images/chevron.backward.svg')} buttonStatus='disabled'onPress={() => {}}/>
    </View>
  );
}
