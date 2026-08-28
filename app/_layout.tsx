import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

import { fontFamily } from "@/theme";

import "../global.css";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    [fontFamily.regular]: require("../assets/fonts/Poppins-Regular.ttf"),
    [fontFamily.medium]: require("../assets/fonts/Poppins-Medium.ttf"),
    [fontFamily.semibold]: require("../assets/fonts/Poppins-SemiBold.ttf"),
    [fontFamily.bold]: require("../assets/fonts/Poppins-Bold.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return <Stack screenOptions={{ contentStyle: { backgroundColor: "#fff" } }} />;
}
