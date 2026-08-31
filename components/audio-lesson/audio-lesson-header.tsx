import { Ionicons } from "@expo/vector-icons";
import { Pressable, Text, View } from "react-native";

type Props = {
  onBack: () => void;
};

export function AudioLessonHeader({ onBack }: Props) {
  return (
    <View className="flex-row items-center justify-between px-4 py-3">
      <View className="flex-row items-center">
        <Pressable onPress={onBack} hitSlop={12} className="active:opacity-60">
          <Ionicons name="chevron-back" size={24} color="#0D132B" />
        </Pressable>

        <View className="ml-3">
          <Text className="font-poppins-semibold text-lg leading-6 text-text">
            AI Teacher
          </Text>
          <View className="flex-row items-center gap-1.5">
            <View className="h-2 w-2 rounded-full bg-success" />
            <Text className="font-poppins text-[13px] leading-[18px] text-text-secondary">
              Online
            </Text>
          </View>
        </View>
      </View>

      <View className="flex-row items-center gap-3">
        <Pressable
          className="h-10 w-10 items-center justify-center rounded-full bg-surface active:opacity-60"
        >
          <Ionicons name="videocam-outline" size={20} color="#0D132B" />
        </Pressable>

        <Pressable
          className="h-10 w-10 items-center justify-center rounded-full bg-surface active:opacity-60"
        >
          <Ionicons name="flame-outline" size={20} color="#FF8A00" />
          <Text className="absolute -top-0.5 right-0 font-poppins-bold text-[10px] text-streak">
            12
          </Text>
        </Pressable>

        <Pressable
          className="h-10 w-10 items-center justify-center rounded-full bg-surface active:opacity-60"
        >
          <Ionicons name="options-outline" size={20} color="#0D132B" />
        </Pressable>
      </View>
    </View>
  );
}
