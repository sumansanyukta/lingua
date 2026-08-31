import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter, type Href } from "expo-router";
import type { ComponentProps } from "react";
import { Pressable, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { TABS, type TabConfig, type TabKey } from "@/constants/tab-bar";
import { colors } from "@/theme";

function TabIcon({ tab, active }: { tab: TabConfig; active: boolean }) {
  const color = active ? colors.brand.purple : colors.text.secondary;
  const size = active ? 22 : 24;

  if (tab.family === "material-community") {
    // MaterialCommunityIcons has no `robot-outline`; keep `robot` for both states.
    const name = (active ? tab.filledIcon : tab.filledIcon) as ComponentProps<
      typeof MaterialCommunityIcons
    >["name"];
    return <MaterialCommunityIcons name={name} size={size} color={color} />;
  }

  const name = (active ? tab.filledIcon : `${tab.filledIcon}-outline`) as ComponentProps<
    typeof Ionicons
  >["name"];
  return <Ionicons name={name} size={size} color={color} />;
}

function routeForTab(tab: TabConfig): Href {
  if (tab.routeName === "index") {
    return "/";
  }
  return `/${tab.routeName}` as Href;
}

export function BottomTabBar({ active }: { active: TabKey | string }) {
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
              onPress={() => router.replace(routeForTab(tab))}
              accessibilityRole="tab"
              accessibilityState={{ selected: isActive }}
              accessibilityLabel={tab.label}
              className="flex-1 items-center active:opacity-70"
            >
              <View className="h-10 items-center justify-center" style={{ marginTop: 6 }}>
                <TabIcon tab={tab} active={isActive} />
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
