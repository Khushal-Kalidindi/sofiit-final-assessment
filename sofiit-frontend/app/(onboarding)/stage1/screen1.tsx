import { View, Text, Button } from "react-native";
import { useRouter } from "expo-router";

export default function Stage1Screen1() {
  const router = useRouter();

  return (
    <View>
      <Text>Welcome to Stage 1 - Screen 1</Text>
      <Button
        title="Next"
        onPress={() => router.push("/(onboarding)/stage1/screen2")}
      />
    </View>
  );
}
