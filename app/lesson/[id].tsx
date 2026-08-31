import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter, Stack } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { getLessonById } from "@/data/lessons";

export default function LessonScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id: string }>();
  const lesson = getLessonById(id ?? "");

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }} edges={["top"]}>
      <Stack.Screen options={{ headerShown: false }} />
      <View className="flex-1 px-5">
        <View className="relative flex-row items-center pt-4">
          <Pressable onPress={() => router.back()} hitSlop={12} className="active:opacity-60">
            <Ionicons name="chevron-back" size={24} color="#0D132B" />
          </Pressable>
          <Text className="absolute left-0 right-0 text-center font-poppins-semibold text-base text-text">
            Lesson
          </Text>
          <View className="h-6 w-6" />
        </View>

        <View className="flex-1 items-center justify-center">
          <View className="h-20 w-20 items-center justify-center rounded-[24px] bg-[#F0ECFE]">
            <Ionicons name="book-outline" size={36} color="#6C4EF5" />
          </View>
          <Text className="mt-6 text-center font-poppins-semibold text-2xl leading-8 text-text">
            {lesson?.title ?? "Lesson"}
          </Text>
          <Text className="mt-2 max-w-[280px] text-center font-poppins text-base leading-6 text-text-secondary">
            {lesson?.subtitle ?? "This lesson is coming soon."}
          </Text>
          <Text className="mt-1 font-poppins text-sm text-text-secondary">
            {lesson?.xp ? `${lesson.xp} XP` : ""}
          </Text>

          <View className="mt-8 rounded-2xl bg-surface px-5 py-4">
            <Text className="font-poppins-medium text-sm leading-5 text-text-secondary">
              Lesson player coming soon
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
