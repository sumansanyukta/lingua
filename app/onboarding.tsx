import { router } from "expo-router";
import { Image, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { images } from "@/constants/images";

export default function Onboarding() {
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "#ffffff" }}
      edges={["top", "bottom"]}
    >
      <View className="flex-1 justify-between px-6 pb-6 pt-4">
        <View className="items-center">
          <View className="flex-row items-center gap-3">
            <Image source={images.mascotLogo} className="h-12 w-12" />
            <Text className="font-poppins-bold text-2xl text-text">
              muolingo
            </Text>
          </View>

          <View className="mt-8">
            <Text className="text-center font-poppins-bold text-[32px] leading-[38px] text-text">
              Your AI language{"\n"}
              <Text className="text-primary">teacher</Text>.
            </Text>
            <Text className="mt-3 text-center font-poppins text-base leading-[26px] text-text-secondary">
              Real conversations, personalized lessons, anytime, anywhere.
            </Text>
          </View>
        </View>

        <View className="items-center">
          <Image
            source={images.mascotWelcome}
            className="h-72 w-72"
            resizeMode="contain"
          />
        </View>

        <View>
          <View className="mb-8 flex-row items-center justify-center gap-2">
            <Text className="rounded-2xl bg-[#EBF3FF] px-4 py-2 font-poppins-semibold text-sm text-text">
              Hello!
            </Text>
            <Text className="rounded-2xl bg-[#F0ECFE] px-4 py-2 font-poppins-semibold text-sm text-primary-deep">
              ¡Hola!
            </Text>
            <Text className="rounded-2xl bg-[#FFF2ED] px-4 py-2 font-poppins-semibold text-sm text-error">
              你好!
            </Text>
          </View>

          <Pressable
            onPress={() => router.push("/sign-up")}
            className="flex-row items-center justify-center rounded-[20px] bg-primary active:opacity-80"
            style={{ height: 56 }}
          >
            <Text className="font-poppins-semibold text-lg text-white">
              Get Started
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}
