import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter, type Href } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { colors } from "@/theme";

type TabItem = {
  key: string;
  route: Href;
  label: string;
  outline: React.ReactNode;
  filled: React.ReactNode;
};

const TABS: TabItem[] = [
  {
    key: "home",
    route: "/",
    label: "Home",
    outline: <Ionicons name="home-outline" size={24} color={colors.text.secondary} />,
    filled: <Ionicons name="home" size={22} color="#6C4EF5" />,
  },
  {
    key: "learn",
    route: "/learn",
    label: "Learn",
    outline: <Ionicons name="book-outline" size={24} color={colors.text.secondary} />,
    filled: <Ionicons name="book" size={22} color="#6C4EF5" />,
  },
  {
    key: "ai-teacher",
    route: "/ai-teacher",
    label: "AI Teacher",
    outline: <MaterialCommunityIcons name="robot-outline" size={24} color={colors.text.secondary} />,
    filled: <MaterialCommunityIcons name="robot" size={22} color="#6C4EF5" />,
  },
  {
    key: "chat",
    route: "/chat",
    label: "Chat",
    outline: <Ionicons name="chatbubble-outline" size={24} color={colors.text.secondary} />,
    filled: <Ionicons name="chatbubble" size={22} color="#6C4EF5" />,
  },
  {
    key: "profile",
    route: "/profile",
    label: "Profile",
    outline: <Ionicons name="person-outline" size={24} color={colors.text.secondary} />,
    filled: <Ionicons name="person" size={22} color="#6C4EF5" />,
  },
];

export function BottomTabBar({ active }: { active: string }) {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  return (
    <View className="border-t border-border bg-white" style={{ paddingBottom: insets.bottom }}>
      <View className="flex-row" style={{ height: 58 }}>
        {TABS.map((tab) => {
          const isActive = tab.key === active;
          return (
            <Pressable
              key={tab.key}
              onPress={() => router.replace(tab.route)}
              accessibilityRole="tab"
              accessibilityState={{ selected: isActive }}
              accessibilityLabel={tab.label}
              className="flex-1 items-center active:opacity-70"
            >
              <View className="h-10 items-center justify-center" style={{ marginTop: 6 }}>
                {isActive ? tab.filled : tab.outline}
              </View>
              {!isActive ? (
                <Text
                  numberOfLines={1}
                  className="absolute bottom-[5px] left-0 right-0 text-center font-poppins-semibold text-[11px] leading-[14px] text-text-secondary"
                >
                  {tab.label}
                </Text>
              ) : null}
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}
