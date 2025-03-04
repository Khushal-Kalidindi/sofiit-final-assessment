import { Redirect } from "expo-router";
import { useOnboarding } from "@/contexts/OnboardingProvider";

export default function Index() {
  const { completedOnboarding } = useOnboarding();

  return <Redirect href={"/(onboarding)/stage1/verify-email"} />;
}
