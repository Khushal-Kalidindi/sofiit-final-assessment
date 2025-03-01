import { Stack } from "expo-router";
import { OnboardingProvider } from "./contexts/OnboardingProvider";
import OnboardingHeader from "@/components/OnboardingHeader";
import { useOnboarding } from "./contexts/OnboardingProvider";

export default function Layout() {
  const { currentStage } = useOnboarding();
  const CurrentHeader = () => <OnboardingHeader currentStage={currentStage} />;
  return (
    <OnboardingProvider>
      <Stack
        screenOptions={{
          headerShown: true,
          header: CurrentHeader,
          contentStyle: {
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          },
        }}
      />
    </OnboardingProvider>
  );
}
