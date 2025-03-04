import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Redirect } from "expo-router";
import { useEffect } from "react";
import { useOnboarding } from "@/contexts/OnboardingProvider";

const Home: React.FC = () => {
  const { completedOnboarding } = useOnboarding();
  useEffect(() => {
    console.log("Back at home page");
    console.log("Completed onboarding:", completedOnboarding);
  }, [completedOnboarding]);

  return (
    <Redirect
      href={
        completedOnboarding
          ? "../(main-app)/my-buddies"
          : "../(onboarding)/stage1"
      }
      // href={"../(main-app)/my-buddies"}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
  },
});

export default Home;
