import { Stack } from "expo-router";
import { OnboardingProvider } from "./contexts/OnboardingProvider";

export default function Layout() {
  return (
    <OnboardingProvider>
      <Stack screenOptions={{ headerShown: false }} />
    </OnboardingProvider>
  );
}
