import React, { createContext, useContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ReactNode } from "react";

interface OnboardingContextType {
  currentStage: number;
  completedOnboarding: boolean;
  finishOnboarding: () => Promise<void>;
  nextStage: () => Promise<void>;
}

const defaultValue: OnboardingContextType = {
  currentStage: 1,
  completedOnboarding: false,
  finishOnboarding: async () => {},
  nextStage: async () => {},
};

const OnboardingContext = createContext<OnboardingContextType>(defaultValue);

export function OnboardingProvider({ children }: { children: ReactNode }) {
  const [completedOnboarding, setCompletedOnboarding] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);
  const [loading, setLoading] = useState(true); // Prevent flicker on load

  // Load onboarding state on app start
  useEffect(() => {
    const loadOnboardingStatus = async () => {
      try {
        const storedStatus = await AsyncStorage.getItem("completedOnboarding");
        setCompletedOnboarding(storedStatus === "true"); // Convert to boolean
      } catch (error) {
        console.error("Error loading onboarding status:", error);
      }
      setLoading(false);
    };

    loadOnboardingStatus();
  }, []);

  // Mark onboarding as complete (with AsyncStorage)
  const finishOnboarding = async () => {
    try {
      await AsyncStorage.setItem("completedOnboarding", "true");
      setCompletedOnboarding(true);
    } catch (error) {
      console.error("Error saving onboarding status:", error);
    }
  };

  // Move to the next stage
  const nextStage = async () => {
    try {
      const next = currentStage + 1;
      await AsyncStorage.setItem("currentStage", next.toString());
      setCurrentStage(next);
    } catch (error) {
      console.error("Error saving current stage:", error);
    }
  };

  if (loading) return null; // Avoid flickering while loading state

  return (
    <OnboardingContext.Provider
      value={{ completedOnboarding, finishOnboarding, currentStage, nextStage }}
    >
      {children}
    </OnboardingContext.Provider>
  );
}

export const useOnboarding = () => useContext(OnboardingContext);
