import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LearnScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }} edges={["top"]}>
      <View className="flex-1 items-center justify-center px-6">
        <Text className="font-poppins-bold text-[32px] leading-[38px] text-text">
          Learn
        </Text>
        <Text className="mt-2 text-center font-poppins-medium text-base leading-[22px] text-text-secondary">
          Coming soon
        </Text>
      </View>
    </SafeAreaView>
  );
}