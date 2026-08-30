import { FontAwesome5 } from "@expo/vector-icons";
import { useSSO } from "@clerk/expo";
import { useState } from "react";
import { ActivityIndicator, Pressable, Text, View } from "react-native";

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
  const { startSSOFlow } = useSSO();
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);

  const handleGoogle = async () => {
    setIsGoogleLoading(true);
    try {
      const { createdSessionId, setActive } = await startSSOFlow({
        strategy: "oauth_google",
      });
      if (createdSessionId && setActive) {
        await setActive({ session: createdSessionId });
      }
    } catch {
      // User cancelled the flow or it failed - nothing to show.
    } finally {
      setIsGoogleLoading(false);
    }
  };

  return (
    <View className="gap-4">
      {SOCIAL_OPTIONS.map(({ icon, label, color }) => {
        const isGoogle = icon === "google";
        const isDisabled = !isGoogle || isGoogleLoading;
        return (
          <Pressable
            key={icon}
            onPress={isGoogle ? () => void handleGoogle() : undefined}
            disabled={isDisabled}
            className={`h-[52px] flex-row items-center justify-center gap-3 rounded-2xl border border-border bg-white active:bg-surface ${
              isDisabled ? "opacity-40" : ""
            }`}
          >
            {isGoogle && isGoogleLoading ? (
              <ActivityIndicator size="small" color="#4285F4" />
            ) : (
              <FontAwesome5
                name={icon}
                size={22}
                color={color ?? "#4285F4"}
                solid
              />
            )}
            <Text className="font-poppins-semibold text-[16px] text-text">
              {label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}