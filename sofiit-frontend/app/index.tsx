import { Redirect } from "expo-router";
import { useState } from "react";

export default function Index() {
  const [completedOnboarding, setCompletedOnboarding] = useState(false);

  return (
    <Redirect
      href={completedOnboarding ? "../home" : "../(onboarding)/stage1"}
    />
  );
}
