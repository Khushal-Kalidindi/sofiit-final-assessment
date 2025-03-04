import { Redirect } from "expo-router";
import { useState } from "react";
import { useEffect } from "react";
import { useOnboarding } from "@/contexts/OnboardingProvider";

export default function Index() {
  const { completedOnboarding } = useOnboarding();
  const [onboarding, setOnboarding] = useState(completedOnboarding);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    console.log("Back at index page");
    console.log("Completed onboarding:", completedOnboarding);
    setOnboarding(completedOnboarding);
    setLoading(false);
  }, [completedOnboarding]);

  return (
    console.log("Redirecting to:", onboarding),
    !loading && (
      <Redirect
        href={
          onboarding
            ? "../(main-app)/my-buddies"
            : "../(onboarding)/stage1/verify-email"
        }
      />
    )
  );
}
