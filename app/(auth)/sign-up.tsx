import { Ionicons } from "@expo/vector-icons";
import { useAuth, useSignUp } from "@clerk/expo";
import { router } from "expo-router";
import { useCallback, useState } from "react";
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
import { useAuthRedirect } from "@/hooks/use-auth-redirect";
import { getClerkErrorMessage } from "@/lib/clerk";

export default function SignUpScreen() {
  useAuthRedirect({ whenSignedIn: "/" });

  const { isSignedIn } = useAuth({ treatPendingAsSignedOut: false });
  const { signUp, fetchStatus } = useSignUp();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSignUp = async () => {
    if (isSubmitting) return;
    setIsSubmitting(true);
    setError(null);
    try {
      await signUp.reset();

      const { error: createError } = await signUp.password({
        emailAddress: email,
        password,
      });
      if (createError) {
        if (isSignedIn) {
          router.replace("/");
          return;
        }
        setError(getClerkErrorMessage(createError));
        return;
      }

      const { error: sendError } = await signUp.verifications.sendEmailCode();
      if (sendError) {
        if (isSignedIn) {
          router.replace("/");
          return;
        }
        setError(getClerkErrorMessage(sendError));
        return;
      }

      setModalVisible(true);
    } catch (error) {
      if (isSignedIn) {
        router.replace("/");
        return;
      }
      setError(getClerkErrorMessage(error));
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSubmitCode = useCallback(
    async (code: string): Promise<string | null> => {
      const { error: verifyError } = await signUp.verifications.verifyEmailCode({
        code,
      });
      if (verifyError) {
        return getClerkErrorMessage(verifyError);
      }

      if (signUp.status !== "complete") {
        return "Sign-up needs an extra step. Please try again.";
      }

      const { error: finalizeError } = await signUp.finalize();
      if (finalizeError) {
        return getClerkErrorMessage(finalizeError);
      }

      setModalVisible(false);
      return null;
    },
    [signUp],
  );

  const handleResendCode = useCallback(async (): Promise<string | null> => {
    const { error } = await signUp.verifications.sendEmailCode();
    return getClerkErrorMessage(error);
  }, [signUp]);

  const handleCloseModal = useCallback(() => {
    setModalVisible(false);
    void signUp.reset();
  }, [signUp]);

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
              Create your account
            </Text>
            <Text className="mt-2 font-poppins text-[16px] text-text-secondary">
              Start your language journey today ✨
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
            <AuthInput
              label="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
          </View>

          <View className="mt-6">
            <PrimaryButton
              label="Sign Up"
              onPress={() => void handleSignUp()}
              disabled={isSubmitting || fetchStatus === "fetching"}
            />
            {error ? (
              <Text className="mt-3 text-center font-poppins text-[13px] text-error">
                {error}
              </Text>
            ) : null}
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
              Already have an account?{" "}
            </Text>
            <Pressable onPress={() => router.push("/sign-in")} hitSlop={8}>
              <Text className="font-poppins-semibold text-[13px] text-primary">
                Log in
              </Text>
            </Pressable>
          </View>

          {/* Required for sign-up flows on Expo web. Clerk skips the browser CAPTCHA on iOS and Android */}
          <View nativeID="clerk-captcha" />
        </ScrollView>
      </KeyboardAvoidingView>

      <VerificationModal
        visible={modalVisible}
        email={email}
        variant="signUp"
        onClose={handleCloseModal}
        onSubmitCode={handleSubmitCode}
        onResendCode={handleResendCode}
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