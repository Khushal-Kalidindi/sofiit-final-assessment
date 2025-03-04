import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

interface OnboardingContextType {
  currentStage: number;
  completedOnboarding: boolean;
  finishOnboarding: () => void;
  nextStage: () => void;
}

const defaultValue: OnboardingContextType = {
  currentStage: 1,
  completedOnboarding: false,
  finishOnboarding: () => {},
  nextStage: () => {},
};

const OnboardingContext = createContext<OnboardingContextType>(defaultValue);

export function OnboardingProvider({ children }: { children: ReactNode }) {
  const [completedOnboarding, setCompletedOnboarding] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);

  // Finish onboarding and update the state
  const finishOnboarding = () => {
    setCompletedOnboarding(true);
    setCurrentStage(0); // Reset the stage
    console.log("Onboarding completed!");
  };

  // Move to the next stage
  const nextStage = () => {
    setCurrentStage((prevStage) => prevStage + 1);
  };

  return (
    <OnboardingContext.Provider
      value={{
        completedOnboarding,
        finishOnboarding,
        currentStage,
        nextStage,
      }}
    >
      {children}
    </OnboardingContext.Provider>
  );
}

export const useOnboarding = () => useContext(OnboardingContext);
