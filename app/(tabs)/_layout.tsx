import { useAuth } from "@clerk/expo";
import { Tabs } from "expo-router";
import { ActivityIndicator, View } from "react-native";

import { TabBar } from "@/components/tab-bar";
import { useAuthRedirect } from "@/hooks/use-auth-redirect";
import { useRequireLanguage } from "@/hooks/use-language-redirect";
import {
  useLanguageHydrated,
  useLanguageStore,
} from "@/store/language-store";

export default function TabsLayout() {
  useAuthRedirect({ whenSignedOut: "/onboarding" });
  useRequireLanguage();

  const { isLoaded, isSignedIn } = useAuth({ treatPendingAsSignedOut: false });
  const hasHydrated = useLanguageHydrated();
  const selectedLanguageId = useLanguageStore(
    (state) => state.selectedLanguageId,
  );

  if (!isLoaded || !isSignedIn || !hasHydrated || !selectedLanguageId) {
    return (
      <View className="flex-1 items-center justify-center bg-background">
        <ActivityIndicator size="large" color="#6C4EF5" />
      </View>
    );
  }

  return (
    <Tabs
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <TabBar {...props} />}
    >
      <Tabs.Screen name="index" options={{ title: "Home" }} />
      <Tabs.Screen name="learn" options={{ title: "Learn" }} />
      <Tabs.Screen name="ai-teacher" options={{ title: "AI Teacher" }} />
      <Tabs.Screen name="chat" options={{ title: "Chat" }} />
      <Tabs.Screen name="profile" options={{ title: "Profile" }} />
    </Tabs>
  );
}