import { Stack } from "expo-router";
import { OnboardingProvider } from "./contexts/OnboardingProvider";
import OnboardingHeader from "@/components/OnboardingHeader";
import { useOnboarding } from "./contexts/OnboardingProvider";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import Button from "@/components/inputs/buttons/Button";

export default function Layout() {
  const { currentStage } = useOnboarding();
  const CurrentHeader = () => <OnboardingHeader currentStage={currentStage} />;
  return (
    <OnboardingProvider>
      <BottomSheetModalProvider>
        <Stack
          screenOptions={{
            headerShown: true,
            header: CurrentHeader,
          }}
        />
      </BottomSheetModalProvider>
    </OnboardingProvider>
  );
}
