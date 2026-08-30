import { Ionicons } from "@expo/vector-icons";
import { Image as ExpoImage } from "expo-image";
import { router, Stack } from "expo-router";
import { useMemo, useState } from "react";
import { FlatList, Image, Pressable, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { images } from "@/constants/images";
import { languages } from "@/data/languages";
import type { Language } from "@/types/learning";

type LanguageRowProps = {
  language: Language;
  selected: boolean;
  onPress: () => void;
};

function LanguageRow({ language, selected, onPress }: LanguageRowProps) {
  return (
    <Pressable
      onPress={onPress}
      className={`flex-row items-center rounded-2xl px-4 py-3 ${
        selected
          ? "border-[2px] border-primary bg-[#F0ECFE]"
          : "border border-border bg-white active:bg-surface"
      }`}
    >
      <ExpoImage
        source={{ uri: language.flag }}
        contentFit="cover"
        style={{ width: 44, height: 44, borderRadius: 22 }}
      />

      <View className="ml-4 flex-1">
        <Text className="font-poppins-semibold text-base leading-6 text-text">
          {language.name}
        </Text>
        <Text className="mt-0.5 font-poppins text-[13px] leading-[18px] text-text-secondary">
          {language.learners} learners
        </Text>
      </View>

      {selected ? (
        <View className="h-6 w-6 items-center justify-center rounded-full bg-primary">
          <Ionicons name="checkmark" size={14} color="#FFFFFF" />
        </View>
      ) : (
        <Ionicons name="chevron-forward" size={20} color="#6B7280" />
      )}
    </Pressable>
  );
}

export default function LanguageSelection() {
  const [selectedId, setSelectedId] = useState<string | null>(languages[0]?.id ?? null);
  const [query, setQuery] = useState("");

  const filteredLanguages = useMemo(() => {
    const search = query.trim().toLowerCase();
    if (!search) {
      return languages;
    }
    return languages.filter(
      (language) =>
        language.name.toLowerCase().includes(search) ||
        language.nativeName.toLowerCase().includes(search),
    );
  }, [query]);

  const handleConfirm = () => {
    if (!selectedId) {
      return;
    }
    router.back();
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }} edges={["top", "bottom"]}>
      <Stack.Screen options={{ headerShown: false }} />

      <View className="flex-1">
        <View className="relative flex-row items-center justify-between px-6 pt-4">
          <Pressable
            onPress={() => router.back()}
            hitSlop={12}
            className="active:opacity-60"
          >
            <Ionicons name="chevron-back" size={24} color="#0D132B" />
          </Pressable>
          <Text className="absolute left-0 right-0 text-center font-poppins-semibold text-[20px] leading-[24px] text-text">
            Choose a language
          </Text>
          <View className="h-6 w-6" />
        </View>

        <View className="mt-6 flex-row h-12 items-center rounded-full border border-border bg-white px-5">
          <Ionicons name="search" size={20} color="#6B7280" />
          <TextInput
            value={query}
            onChangeText={setQuery}
            placeholder="Search languages"
            placeholderTextColor="#6B7280"
            selectionColor="#6C4EF5"
            autoCorrect={false}
            className="ml-3 flex-1 font-poppins text-sm text-text"
          />
        </View>

        <Text className="mt-6 mb-3 px-6 font-poppins-semibold text-base text-text">
          Popular
        </Text>

        <FlatList
          data={filteredLanguages}
          keyExtractor={(language) => language.id}
          renderItem={({ item }) => (
            <LanguageRow
              language={item}
              selected={item.id === selectedId}
              onPress={() => setSelectedId(item.id)}
            />
          )}
          contentContainerStyle={{
            paddingHorizontal: 24,
            paddingBottom: 16,
            gap: 12,
          }}
          style={{ flex: 1 }}
          keyboardShouldPersistTaps="handled"
        />

        <View className="px-6 pb-2">
          <Pressable
            onPress={handleConfirm}
            disabled={!selectedId}
            className={`h-[56px] items-center justify-center rounded-[20px] active:opacity-80 ${
              selectedId ? "bg-primary" : "bg-border"
            }`}
          >
            <Text
              className={`font-poppins-semibold text-lg ${
                selectedId ? "text-white" : "text-text-secondary"
              }`}
            >
              Continue
            </Text>
          </Pressable>
        </View>
      </View>

      <View className="items-center justify-end pb-6">
        <Image
          source={images.earth}
          resizeMode="contain"
          style={{ width: 280, height: 207 }}
        />
      </View>
    </SafeAreaView>
  );
}