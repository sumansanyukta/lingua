import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { AuthInput } from "@/components/auth-input";
import { PrimaryButton } from "@/components/primary-button";
import { SocialAuthButtons } from "@/components/social-auth-buttons";
import { VerificationModal } from "@/components/verification-modal";
import { images } from "@/constants/images";

export default function SignInScreen() {
  const [email, setEmail] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "#ffffff" }}
      edges={["top", "bottom"]}
    >
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView
          contentContainerStyle={styles.scroll}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          <Pressable onPress={() => router.back()} hitSlop={12} className="self-start">
            <Ionicons name="chevron-back" size={28} color="#0D132B" />
          </Pressable>

          <View className="mt-6">
            <Text className="font-poppins-bold text-[32px] leading-[38px] text-text">
              Welcome back
            </Text>
            <Text className="mt-2 font-poppins text-[16px] text-text-secondary">
              Log in to continue your journey ✨
            </Text>
          </View>

          <Image
            source={images.mascotAuth}
            className="mx-auto mt-6 h-[120px] w-[120px]"
            resizeMode="contain"
          />

          <View className="mt-6 gap-4">
            <AuthInput
              label="Email"
              value={email}
              onChangeText={setEmail}
              autoCapitalize="none"
              keyboardType="email-address"
            />
          </View>

          <View className="mt-6">
            <PrimaryButton
              label="Log In"
              onPress={() => setModalVisible(true)}
            />
          </View>

          <View className="mt-6 flex-row items-center gap-4">
            <View className="h-px flex-1 bg-border" />
            <Text className="font-poppins text-[13px] text-text-secondary">
              or continue with
            </Text>
            <View className="h-px flex-1 bg-border" />
          </View>

          <View className="mt-6">
            <SocialAuthButtons />
          </View>

          <View className="mt-6 flex-row items-center justify-center pb-4">
            <Text className="font-poppins text-[13px] text-text-secondary">
              Don&apos;t have an account?{" "}
            </Text>
            <Pressable onPress={() => router.push("/sign-up")} hitSlop={8}>
              <Text className="font-poppins-semibold text-[13px] text-primary">
                Sign up
              </Text>
            </Pressable>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>

      <VerificationModal
        visible={modalVisible}
        email={email}
        variant="signIn"
        onClose={() => setModalVisible(false)}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scroll: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingTop: 8,
  },
});