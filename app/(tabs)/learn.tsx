import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { images } from "@/constants/images";
import { getLanguage } from "@/data/languages";
import { getLessonsByUnit } from "@/data/lessons";
import { getUnitsByLanguage } from "@/data/units";
import { getLessonArtwork } from "@/lib/lesson-artwork";
import { useLanguageStore } from "@/store/language-store";

const CURRENT_LESSON_ORDER = 2;

type LessonStatus = "completed" | "in-progress" | "locked";

function statusForLesson(order: number): LessonStatus {
  if (order < CURRENT_LESSON_ORDER) {
    return "completed";
  }
  if (order === CURRENT_LESSON_ORDER) {
    return "in-progress";
  }
  return "locked";
}

function LessonCard({
  index,
  title,
  artwork,
  status,
  totalLessons,
  onPress,
}: {
  index: number;
  title: string;
  artwork: string;
  status: LessonStatus;
  totalLessons: number;
  onPress: () => void;
}) {
  const isActive = status === "in-progress";

  return (
    <Pressable
      onPress={onPress}
      className={`flex-row items-center overflow-hidden rounded-2xl border p-3 active:opacity-80 ${
        isActive
          ? "border-[1.5px] border-primary bg-[#F9F8FF]"
          : status === "locked"
            ? "border-border bg-white opacity-60"
            : "border-border bg-white"
      }`}
    >
      <Image
        source={{ uri: artwork }}
        contentFit="cover"
        style={{ width: 56, height: 56, borderRadius: 14 }}
      />

      <View className="ml-3 flex-1">
        <Text
          className={`text-[11px] leading-[13px] ${
            isActive
              ? "font-poppins-semibold text-primary"
              : "font-poppins text-text-secondary"
          }`}
        >
          Lesson {index}
        </Text>
        <Text className="mt-0.5 font-poppins-semibold text-base leading-6 text-text" numberOfLines={1}>
          {title}
        </Text>

        {isActive ? (
          <Text className="font-poppins-medium text-[13px] leading-[18px] text-primary">
            In progress
          </Text>
        ) : null}

        {status === "locked" ? (
          <Text className="font-poppins text-[13px] leading-[18px] text-text-secondary">
            0 / {totalLessons} lessons
          </Text>
        ) : null}
      </View>

      {status === "completed" ? (
        <View className="h-6 w-6 items-center justify-center rounded-full bg-[#21C16B]">
          <Ionicons name="checkmark" size={14} color="#FFFFFF" />
        </View>
      ) : null}

      {status === "in-progress" ? (
        <Image
          source={{ uri: artwork }}
          contentFit="cover"
          style={{ width: 40, height: 40, borderRadius: 12 }}
        />
      ) : null}

      {status === "locked" ? (
        <View className="h-9 w-9 items-center justify-center">
          <Ionicons name="lock-closed" size={18} color="#6B7280" />
        </View>
      ) : null}
    </Pressable>
  );
}

export default function LearnScreen() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"lessons" | "practice">("lessons");

  const selectedLanguageId = useLanguageStore((state) => state.selectedLanguageId);
  const language = getLanguage(selectedLanguageId ?? "");

  const units = getUnitsByLanguage(selectedLanguageId ?? "");
  const unit = units[0];
  const lessons = unit ? getLessonsByUnit(unit.id) : [];
  const completedCount = lessons.filter(
    (lesson) => statusForLesson(lesson.order) === "completed",
  ).length;

  const unitNumber = unit ? unit.order + 1 : 1;

  if (!unit || lessons.length === 0) {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }} edges={["top"]}>
        <View className="flex-1 items-center justify-center px-6">
          <Text className="font-poppins-semibold text-xl leading-7 text-text">
            {language?.name ?? "Learn"}
          </Text>
          <Text className="mt-2 text-center font-poppins text-base leading-6 text-text-secondary">
            Select a language to start learning
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }} edges={["top"]}>
      <View className="flex-1">
        <View className="relative flex-row items-center px-5 pt-4">
          <Pressable onPress={() => router.replace("/")} hitSlop={12} className="active:opacity-60">
            <Ionicons name="chevron-back" size={24} color="#0D132B" />
          </Pressable>

          <View className="absolute left-14 right-14">
            <Text className="text-center font-poppins-semibold text-[20px] leading-[26px] text-text">
              {unit?.title ?? language?.name ?? "Lessons"}
            </Text>
            <Text className="text-center font-poppins text-[13px] leading-[18px] text-text-secondary">
              Unit {unitNumber} • {completedCount} / {lessons.length} lessons
            </Text>
          </View>

          <View className="ml-auto">
            <Ionicons name="bookmark-outline" size={22} color="#FF8A00" />
          </View>
        </View>

        <ScrollView
          className="flex-1"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 24 }}
        >
          <View className="px-4">
            <Image
              source={images.palace}
              contentFit="contain"
              className="w-full rounded-b-[20px]"
              style={{ height: 140 }}
            />

            <View className="mt-4 flex-row rounded-2xl bg-surface p-1">
              <Pressable
                onPress={() => setActiveTab("lessons")}
                className="relative flex-1 items-center rounded-xl bg-white py-3"
                style={{
                  shadowColor: "#0D132B",
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: activeTab === "lessons" ? 0.08 : 0,
                  shadowRadius: 4,
                  elevation: activeTab === "lessons" ? 2 : 0,
                }}
              >
                <Text className="font-poppins-semibold text-[14px] leading-4 text-primary">
                  Lessons
                </Text>
                <View
                  className="absolute bottom-1 h-0.5 w-8 rounded-full bg-primary"
                  style={{ display: activeTab === "lessons" ? "flex" : "none" }}
                />
              </Pressable>

              <Pressable
                onPress={() => setActiveTab("practice")}
                className="flex-1 items-center justify-center py-3"
              >
                <Text className="font-poppins-medium text-[14px] leading-4 text-text-secondary">
                  Practice
                </Text>
              </Pressable>
            </View>

            <View className="mt-4 gap-3">
              {lessons.map((lesson, index) => (
                <LessonCard
                  key={lesson.id}
                  index={index + 1}
                  title={lesson.title}
                  artwork={getLessonArtwork(lesson)}
                  status={statusForLesson(lesson.order)}
                  totalLessons={lessons.length}
                  onPress={() => router.push(`/lesson/${lesson.id}`)}
                />
              ))}
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
