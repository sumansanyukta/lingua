import { Ionicons } from "@expo/vector-icons";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  KeyboardAvoidingView,
  Modal,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { getClerkErrorMessage } from "@/lib/clerk";

const CODE_LENGTH = 6;

type VerificationModalProps = {
  visible: boolean;
  email: string;
  variant: "signUp" | "signIn";
  onClose: () => void;
  onSubmitCode: (code: string) => Promise<string | null>;
  onResendCode: () => Promise<string | null>;
};

export function VerificationModal({
  visible,
  email,
  variant,
  onClose,
  onSubmitCode,
  onResendCode,
}: VerificationModalProps) {
  const insets = useSafeAreaInsets();
  const inputRef = useRef<TextInput>(null);
  const [code, setCode] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isResending, setIsResending] = useState(false);

  useEffect(() => {
    if (visible) {
      setCode("");
      setError(null);
      setIsSubmitting(false);
      setIsResending(false);
    }
  }, [visible]);

  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => inputRef.current?.focus(), 250);
      return () => clearTimeout(timer);
    }
  }, [visible]);

  const submitCode = useCallback(
    async (value: string) => {
      setIsSubmitting(true);
      setError(null);
      try {
        const message = await onSubmitCode(value);
        if (message) {
          setError(message);
          setCode("");
          inputRef.current?.focus();
        }
      } catch (error) {
        setError(getClerkErrorMessage(error));
      } finally {
        setIsSubmitting(false);
      }
    },
    [onSubmitCode],
  );

  useEffect(() => {
    if (
      visible &&
      code.length === CODE_LENGTH &&
      !isSubmitting &&
      !isResending
    ) {
      const timer = setTimeout(() => {
        void submitCode(code);
      }, 250);
      return () => clearTimeout(timer);
    }
  }, [visible, code, isSubmitting, isResending, submitCode]);

  const handleResend = async () => {
    setIsResending(true);
    setError(null);
    try {
      const message = await onResendCode();
      if (message) {
        setError(message);
      }
    } catch (error) {
      setError(getClerkErrorMessage(error));
    } finally {
      setIsResending(false);
    }
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      statusBarTranslucent
      onRequestClose={onClose}
    >
      <KeyboardAvoidingView
        style={styles.overlay}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View style={styles.sheetContainer}>
          <Pressable style={styles.backdrop} onPress={onClose} />

          <View
            style={[styles.sheet, { paddingBottom: Math.max(insets.bottom, 16) }]}
          >
            <View className="flex-row items-center justify-between">
              <View className="h-12 w-12 items-center justify-center rounded-full bg-[#F0ECFE]">
                <Ionicons name="mail" size={22} color="#6C4EF5" />
              </View>
              <Pressable onPress={onClose} hitSlop={12}>
                <Ionicons name="close" size={24} color="#6B7280" />
              </Pressable>
            </View>

            <Text className="mt-4 font-poppins-bold text-[20px] text-text">
              {variant === "signUp" ? "Verify your email" : "Verify it's you"}
            </Text>
            <Text className="mt-2 font-poppins text-[13px] leading-[21px] text-text-secondary">
              We sent a 6-digit code to{" "}
              <Text className="font-poppins-semibold text-text">{email}</Text>
              . Enter it below to{" "}
              {variant === "signUp" ? "create your account." : "log in."}
            </Text>

            <View className="relative mt-6">
              <View className="flex-row items-center justify-between">
                {Array.from({ length: CODE_LENGTH }).map((_, index) => {
                  const char = code[index];
                  const isActive = index === code.length;
                  return (
                    <View
                      key={index}
                      className={`h-[52px] w-[44px] items-center justify-center rounded-xl border-2 ${
                        char
                          ? "border-primary bg-[#F4F1FF]"
                          : isActive
                            ? "border-primary"
                            : "border-border bg-surface"
                      }`}
                    >
                      <Text className="font-poppins-bold text-[20px] text-text">
                        {char ?? ""}
                      </Text>
                    </View>
                  );
                })}
              </View>
              <TextInput
                ref={inputRef}
                value={code}
                onChangeText={setCode}
                keyboardType="number-pad"
                maxLength={CODE_LENGTH}
                caretHidden
                className="absolute inset-0 opacity-0"
              />
            </View>

            {error ? (
              <Text className="mt-3 text-center font-poppins text-[13px] text-error">
                {error}
              </Text>
            ) : null}

            <Pressable
              className="mt-6 self-center"
              hitSlop={8}
              onPress={() => void handleResend()}
              disabled={isResending || isSubmitting}
            >
              <Text
                className={`font-poppins-semibold text-[13px] ${
                  isResending || isSubmitting
                    ? "text-text-secondary"
                    : "text-primary"
                }`}
              >
                {isResending ? "Resending..." : "Didn't get it? Resend code"}
              </Text>
            </Pressable>
          </View>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
  },
  sheetContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(13, 19, 43, 0.4)",
  },
  sheet: {
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    paddingHorizontal: 24,
    paddingTop: 24,
    shadowColor: "#0D132B",
    shadowOpacity: 0.12,
    shadowRadius: 24,
    shadowOffset: { width: 0, height: -8 },
    elevation: 16,
  },
});