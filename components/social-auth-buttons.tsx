import { FontAwesome5 } from "@expo/vector-icons";
import { Pressable, Text, View } from "react-native";

type SocialOption = {
  icon: "google" | "facebook" | "apple";
  label: string;
  color?: string;
};

const SOCIAL_OPTIONS: SocialOption[] = [
  { icon: "google", label: "Continue with Google" },
  { icon: "facebook", label: "Continue with Facebook", color: "#1877F2" },
  { icon: "apple", label: "Continue with Apple", color: "#0D132B" },
];

export function SocialAuthButtons() {
  return (
    <View className="gap-4">
      {SOCIAL_OPTIONS.map(({ icon, label, color }) => (
        <Pressable
          key={icon}
          className="h-[52px] flex-row items-center justify-center gap-3 rounded-2xl border border-border bg-white active:bg-surface"
        >
          <FontAwesome5 name={icon} size={22} color={color ?? "#4285F4"} solid />
          <Text className="font-poppins-semibold text-[16px] text-text">
            {label}
          </Text>
        </Pressable>
      ))}
    </View>
  );
}