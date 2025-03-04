import { Stack, useRouter, usePathname, useSegments } from "expo-router";
import { OnboardingProvider } from "../contexts/OnboardingProvider";
import OnboardingHeader from "@/components/OnboardingHeader";
import { useOnboarding } from "../contexts/OnboardingProvider";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import Button from "@/components/inputs/buttons/Button";
import { UserProvider } from "../contexts/UserProvider";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Easing } from "react-native";
import { View } from "react-native";

export default function Layout() {
  const { currentStage } = useOnboarding();

  return (
    <UserProvider>
      <OnboardingProvider>
        <BottomSheetModalProvider>
          <GestureHandlerRootView style={{ flex: 1 }}>
            <OnboardingHeader />
            <Stack
              screenOptions={{
                headerShown: true,
                header: () => <View style={{ height: 100 }}></View>,
                animation: "slide_from_right", // Default for all screens
                animationDuration: 900, // Smooth transition
                statusBarAnimation: "fade",
              }}
            />
          </GestureHandlerRootView>
        </BottomSheetModalProvider>
      </OnboardingProvider>
    </UserProvider>
  );
}
