import { Stack, useRouter, usePathname, useSegments } from "expo-router";
import { OnboardingProvider } from "../contexts/OnboardingProvider";
import OnboardingHeader from "@/components/OnboardingHeader";
import { useOnboarding } from "../contexts/OnboardingProvider";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import Button from "@/components/inputs/buttons/Button";
import { UserProvider } from "../contexts/UserProvider";

export default function Layout() {
  const { currentStage } = useOnboarding();

  return (
    <UserProvider>
      <OnboardingProvider>
        <BottomSheetModalProvider>
          <Stack
            screenOptions={{
              headerShown: true,
              header: () => <OnboardingHeader style={{ marginBottom: 57 }} />,
            }}
          ></Stack>
        </BottomSheetModalProvider>
      </OnboardingProvider>
    </UserProvider>
  );
}
