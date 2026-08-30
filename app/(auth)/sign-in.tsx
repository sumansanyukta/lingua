import { Ionicons } from "@expo/vector-icons";
import { useAuth, useSignIn } from "@clerk/expo";
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
import { getClerkErrorMessage, hasClerkErrorCode } from "@/lib/clerk";

export default function SignInScreen() {
  useAuthRedirect({ whenSignedIn: "/" });

  const { isSignedIn } = useAuth({ treatPendingAsSignedOut: false });
  const { signIn, fetchStatus } = useSignIn();
  const [email, setEmail] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSignIn = async () => {
    if (isSubmitting) return;
    setIsSubmitting(true);
    setError(null);
    try {
      await signIn.reset();

      const { error: sendError } = await signIn.emailCode.sendCode({
        emailAddress: email,
      });
      if (sendError) {
        if (isSignedIn) {
          router.replace("/");
          return;
        }
        setError(
          hasClerkErrorCode(sendError, "form_identifier_not_found")
            ? "No account found for this email. Sign up instead."
            : getClerkErrorMessage(sendError),
        );
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
      const { error: verifyError } = await signIn.emailCode.verifyCode({ code });
      if (verifyError) {
        return getClerkErrorMessage(verifyError);
      }

      if (signIn.status !== "complete") {
        return "Sign-in needs an extra step. Please try again.";
      }

      const { error: finalizeError } = await signIn.finalize();
      if (finalizeError) {
        return getClerkErrorMessage(finalizeError);
      }

      setModalVisible(false);
      return null;
    },
    [signIn],
  );

  const handleResendCode = useCallback(async (): Promise<string | null> => {
    const { error } = await signIn.emailCode.sendCode();
    return getClerkErrorMessage(error);
  }, [signIn]);

  const handleCloseModal = useCallback(() => {
    setModalVisible(false);
    void signIn.reset();
  }, [signIn]);

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
              onPress={() => void handleSignIn()}
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