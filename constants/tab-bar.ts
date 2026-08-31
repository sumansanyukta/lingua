import type { ComponentProps } from "react";

type IoniconName = ComponentProps<typeof import("@expo/vector-icons").Ionicons>["name"];
type MotorcycleIconName = ComponentProps<
  typeof import("@expo/vector-icons").MaterialCommunityIcons
>["name"];

export type TabKey = "home" | "learn" | "ai-teacher" | "chat" | "profile";

export type TabConfig = {
  key: TabKey;
  label: string;
  /** Tab navigator route name (used by the animated TabBar). */
  routeName: string;
  /** Logo-filled icon name, rendered in the brand color. */
  filledIcon: IoniconName | MotorcycleIconName;
  /** Icon set for `filledIcon` ("ionicons" | "material-community"). */
  family: "ionicons" | "material-community";
};

export const TABS: TabConfig[] = [
  { key: "home", label: "Home", routeName: "index", filledIcon: "home", family: "ionicons" },
  { key: "learn", label: "Learn", routeName: "learn", filledIcon: "book", family: "ionicons" },
  {
    key: "ai-teacher",
    label: "AI Teacher",
    routeName: "ai-teacher",
    filledIcon: "robot",
    family: "material-community",
  },
  {
    key: "chat",
    label: "Chat",
    routeName: "chat",
    filledIcon: "chatbubble",
    family: "ionicons",
  },
  {
    key: "profile",
    label: "Profile",
    routeName: "profile",
    filledIcon: "person",
    family: "ionicons",
  },
];

/** Look up a tab by its navigator route name. */
export function tabByRouteName(routeName: string): TabConfig | undefined {
  return TABS.find((tab) => tab.routeName === routeName);
}
