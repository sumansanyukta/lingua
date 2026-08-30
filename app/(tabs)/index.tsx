import { Ionicons } from "@expo/vector-icons";
import { useUser } from "@clerk/expo";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { images } from "@/constants/images";
import { getLanguage } from "@/data/languages";
import { getLessonsByLanguage } from "@/data/lessons";
import { getUnitsByLanguage } from "@/data/units";
import { useLanguageStore } from "@/store/language-store";

const DAILY_GOAL_XP = 20;
const EARNED_XP = 15;

function Header() {
  const { user } = useUser();
  const selectedLanguageId = useLanguageStore(
    (state) => state.selectedLanguageId,
  );
  const language = getLanguage(selectedLanguageId ?? "");

  const firstName = user?.firstName || "learner";
  const flag = language ? { uri: language.flag } : images.earth;

  return (
    <View className="flex-row items-center justify-between">
      <View className="flex-row items-center gap-3">
        <Image source={flag} style={styles.flag} contentFit="cover" />
        <Text className="font-poppins-semibold text-lg leading-6 text-text">
          Hola, {firstName}!{" "}
          <Text className="font-poppins-regular">👋</Text>
        </Text>
      </View>

      <View className="flex-row items-center gap-4">
        <View className="flex-row items-center gap-1.5">
          <Image source={images.streakFire} style={styles.streakFire} contentFit="contain" />
          <Text className="font-poppins-semibold text-base leading-5 text-text">12</Text>
        </View>
        <Ionicons name="notifications-outline" size={24} color="#0D132B" />
      </View>
    </View>
  );
}

function DailyGoalCard() {
  const progress = Math.round((EARNED_XP / DAILY_GOAL_XP) * 100);

  return (
    <View className="flex-row items-center rounded-[20px] bg-[#FFFDF7] p-4">
      <View className="flex-1">
        <Text className="font-poppins text-sm text-text-secondary">Daily goal</Text>
        <View className="mt-1 flex-row items-baseline">
          <Text className="font-poppins-bold text-2xl leading-7 text-text">{EARNED_XP}</Text>
          <Text className="font-poppins-medium text-base text-text-secondary">
            {" "}/ {DAILY_GOAL_XP} XP
          </Text>
        </View>

        <View className="mt-3 h-2 w-full overflow-hidden rounded-[4px] bg-[#FFEEDD]">
          <View
            className="h-full rounded-[4px] bg-streak"
            style={{ width: `${progress}%` }}
          />
        </View>
      </View>

      <Image source={images.treasure} contentFit="contain" style={styles.treasure} />
    </View>
  );
}

function CourseBanner() {
  const selectedLanguageId = useLanguageStore(
    (state) => state.selectedLanguageId,
  );
  const language = getLanguage(selectedLanguageId ?? "");

  const units = getUnitsByLanguage(selectedLanguageId ?? "");
  const unitNumber = units.length ? units[0].order + 1 : 1;

  return (
    <View className="overflow-hidden rounded-[20px]">
      <LinearGradient
        colors={["#6C4EF5", "#5B3BF6"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        className="relative flex-row items-center"
        style={{ minHeight: 168 }}
      >
        <Image
          source={images.palace}
          contentFit="cover"
          style={styles.palaceArtwork}
        />

        <View className="relative flex-1 px-5 py-5">
          <Text className="font-poppins text-[14px] leading-5 text-white/60">
            Continue learning
          </Text>
          <Text className="mt-0.5 font-poppins-semibold text-2xl leading-8 text-white">
            {language?.name ?? "Spanish"}
          </Text>
          <Text className="mt-1 font-poppins text-[14px] leading-5 text-white/90">
            A1 • Unit {unitNumber}
          </Text>

          <View className="mt-4 items-start">
            <View className="rounded-xl bg-white px-5 py-2">
              <Text className="font-poppins-semibold text-[14px] leading-5 text-primary">
                Continue
              </Text>
            </View>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
}

type PlanItem = {
  id: string;
  icon: keyof typeof Ionicons.glyphMap;
  tint: string;
  title: string;
  subtitle: string;
  completed: boolean;
};

type TodaysPlanProps = {
  items: PlanItem[];
};

function TodaysPlan({ items }: TodaysPlanProps) {
  return (
    <View className="gap-4">
      <View className="flex-row items-center justify-between">
        <Text className="font-poppins-semibold text-lg leading-6 text-text">
          Today&apos;s plan
        </Text>
        <Text className="font-poppins-semibold text-[14px] leading-5 text-primary">
          View all
        </Text>
      </View>

      {items.map((item) => (
        <View key={item.id} className="flex-row items-center gap-4">
          <View
            className="h-12 w-12 items-center justify-center rounded-2xl"
            style={{ backgroundColor: item.tint }}
          >
            <Ionicons name={item.icon} size={22} color="#FFFFFF" />
          </View>

          <View className="flex-1">
            <Text className="font-poppins-semibold text-base leading-6 text-text">
              {item.title}
            </Text>
            <Text className="font-poppins text-[13px] leading-[18px] text-text-secondary">
              {item.subtitle}
            </Text>
          </View>

          {item.completed ? (
            <View className="flex h-6 w-6 items-center justify-center rounded-full bg-blue">
              <Ionicons name="checkmark" size={14} color="#FFFFFF" />
            </View>
          ) : (
            <View className="h-6 w-6 rounded-full border-2 border-[#C4C8D0]" />
          )}
        </View>
      ))}
    </View>
  );
}

function NextUpCard() {
  return (
    <View className="flex-row items-center justify-between rounded-[20px] bg-[#F2FBF5] p-5">
      <View className="flex-1 pr-2">
        <Text className="font-poppins text-[13px] leading-[18px] text-text-secondary">
          Next up
        </Text>
        <Text className="mt-0.5 font-poppins-bold text-lg leading-6 text-text">
          AI Video Call
        </Text>
        <Text className="mt-0.5 font-poppins text-[14px] leading-5 text-text-secondary">
          Practice speaking
        </Text>
      </View>

      <View className="items-center justify-center">
        <Image source={images.tutorAvatar} className="h-12 w-12 rounded-full" contentFit="cover" />
        <View className="absolute -bottom-1 -right-1 h-7 w-7 items-center justify-center rounded-full bg-green">
          <Ionicons name="videocam" size={14} color="#FFFFFF" />
        </View>
      </View>
    </View>
  );
}

export default function HomeScreen() {
  const selectedLanguageId = useLanguageStore(
    (state) => state.selectedLanguageId,
  );
  const lessons = getLessonsByLanguage(selectedLanguageId ?? "");
  const currentLesson = lessons[0];

  const planItems: PlanItem[] = [
    {
      id: "lesson",
      icon: "book-outline",
      tint: "#6C4EF5",
      title: "Lesson",
      subtitle: currentLesson?.title ?? "At the café",
      completed: true,
    },
    {
      id: "ai-conversation",
      icon: "headset-outline",
      tint: "#6C4EF5",
      title: "AI Conversation",
      subtitle: "Talk about your day",
      completed: false,
    },
    {
      id: "new-words",
      icon: "bookmark-outline",
      tint: "#FF6B6B",
      title: "New words",
      subtitle: "10 words",
      completed: false,
    },
  ];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }} edges={["top"]}>
      <ScrollView
        className="flex-1"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 24 }}
      >
        <View className="gap-6 px-5">
          <Header />
          <DailyGoalCard />
          <CourseBanner />
          <TodaysPlan items={planItems} />
          <NextUpCard />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  palaceArtwork: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    width: 180,
  },
  treasure: {
    width: 80,
    height: 80,
    marginLeft: 16,
  },
  flag: {
    width: 28,
    height: 28,
    borderRadius: 14,
  },
  streakFire: {
    width: 24,
    height: 24,
  },
});
