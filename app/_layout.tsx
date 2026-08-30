import { ClerkProvider } from "@clerk/expo";
import { tokenCache } from "@clerk/expo/token-cache";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

import { fontFamily } from "@/theme";

import "../global.css";

SplashScreen.preventAutoHideAsync();

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!;

if (!publishableKey) {
  throw new Error("Add your Clerk Publishable Key to the .env file");
}

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

  return (
    <ClerkProvider publishableKey={publishableKey} tokenCache={tokenCache}>
      {fontsLoaded ? (
        <Stack screenOptions={{ contentStyle: { backgroundColor: "#fff" } }} />
      ) : null}
    </ClerkProvider>
  );
}
