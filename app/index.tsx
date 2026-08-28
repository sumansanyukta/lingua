import { router } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="font-poppins-bold text-3xl text-text">Lingua</Text>
      <Text className="font-poppins-medium text-base text-text-secondary">
        Design system ready
      </Text>
      <Pressable
        className="mt-8 rounded-2xl bg-primary px-6 py-3"
        onPress={() => router.push("/onboarding")}
      >
        <Text className="font-poppins-semibold text-base text-white">
          Open onboarding
        </Text>
      </Pressable>
    </View>
  );
}
