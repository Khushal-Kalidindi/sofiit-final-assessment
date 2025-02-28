import { View, Text, Button } from "react-native";
import { useRouter } from "expo-router";
import { useOnboarding } from "../../contexts/OnboardingProvider";

export default function Stage1Screen2() {
  const router = useRouter();
  const { finishOnboarding } = useOnboarding();

  const completeOnboarding = async () => {
    await finishOnboarding();
    router.replace("/home");
  };
  return (
    <View>
      <Text>Welcome to Stage 1 - Screen 2</Text>
      <Button title="Finish Onboarding" onPress={completeOnboarding} />
    </View>
  );
}
