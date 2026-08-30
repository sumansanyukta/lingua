import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import type { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { useEffect, useState, type ReactNode } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { colors } from "@/theme";

const BAR_HEIGHT = 58;
const CIRCLE_SIZE = 46;
const ICON_SLOT_TOP = 6;
const ICON_SLOT_SIZE = 40;

type TabConfig = {
  label: string;
  outline: ReactNode;
  filled: ReactNode;
};

const TAB_ICONS: Record<string, TabConfig> = {
  index: {
    label: "Home",
    outline: <Ionicons name="home-outline" size={24} color={colors.text.secondary} />,
    filled: <Ionicons name="home" size={22} color="#FFFFFF" />,
  },
  learn: {
    label: "Learn",
    outline: <Ionicons name="book-outline" size={24} color={colors.text.secondary} />,
    filled: <Ionicons name="book" size={22} color="#FFFFFF" />,
  },
  "ai-teacher": {
    label: "AI Teacher",
    outline: <MaterialCommunityIcons name="robot-outline" size={24} color={colors.text.secondary} />,
    filled: <MaterialCommunityIcons name="robot" size={22} color="#FFFFFF" />,
  },
  chat: {
    label: "Chat",
    outline: <Ionicons name="chatbubble-outline" size={24} color={colors.text.secondary} />,
    filled: <Ionicons name="chatbubble" size={22} color="#FFFFFF" />,
  },
  profile: {
    label: "Profile",
    outline: <Ionicons name="person-outline" size={24} color={colors.text.secondary} />,
    filled: <Ionicons name="person" size={22} color="#FFFFFF" />,
  },
};

const CIRCLE_CENTER_Y = ICON_SLOT_TOP + ICON_SLOT_SIZE / 2;

const styles = StyleSheet.create({
  circle: {
    position: "absolute",
    top: CIRCLE_CENTER_Y - CIRCLE_SIZE / 2,
    left: 0,
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    borderRadius: CIRCLE_SIZE / 2,
    backgroundColor: colors.brand.purple,
    shadowColor: "#0D132B",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 4,
  },
});

export function TabBar({ state, navigation }: Pick<BottomTabBarProps, "state" | "navigation">) {
  const insets = useSafeAreaInsets();
  const { width: windowWidth } = useWindowDimensions();
  const [barWidth, setBarWidth] = useState(windowWidth);
  const circleX = useSharedValue(0);

  const tabWidth = barWidth / state.routes.length;

  useEffect(() => {
    circleX.value = withSpring(
      tabWidth * state.index + (tabWidth - CIRCLE_SIZE) / 2,
      { damping: 18, stiffness: 200, mass: 0.7 },
    );
  }, [circleX, state.index, tabWidth]);

  const circleStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: circleX.value }],
  }));

  return (
    <View
      className="border-t border-border bg-white"
      style={{ paddingBottom: insets.bottom }}
    >
      <View
        className="flex-row"
        style={{ height: BAR_HEIGHT }}
        onLayout={(event) => setBarWidth(event.nativeEvent.layout.width)}
      >
        <Animated.View style={[styles.circle, circleStyle]} />

        {state.routes.map((route, index) => {
          const config = TAB_ICONS[route.name];
          const isActive = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });
            if (!isActive && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          return (
            <Pressable
              key={route.key}
              onPress={onPress}
              accessibilityRole="tab"
              accessibilityState={{ selected: isActive }}
              accessibilityLabel={config.label}
              className="flex-1 items-center active:opacity-70"
            >
              <View
                className="items-center justify-center"
                style={{ height: ICON_SLOT_SIZE, marginTop: ICON_SLOT_TOP }}
              >
                {isActive ? config.filled : config.outline}
              </View>

              {isActive ? null : (
                <Text
                  numberOfLines={1}
                  className="absolute bottom-[5px] left-0 right-0 text-center font-poppins-semibold text-[11px] leading-[14px] text-text-secondary"
                >
                  {config.label}
                </Text>
              )}
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}