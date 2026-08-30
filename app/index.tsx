import { useAuth, useClerk } from "@clerk/expo";
import { useState } from "react";
import { ActivityIndicator, Pressable, Text, View } from "react-native";

import { useAuthRedirect } from "@/hooks/use-auth-redirect";
import { getClerkErrorMessage } from "@/lib/clerk";

export default function Index() {
  useAuthRedirect({ whenSignedOut: "/onboarding" });

  const { isLoaded, isSignedIn } = useAuth({ treatPendingAsSignedOut: false });
  const { signOut } = useClerk();
  const [isSigningOut, setIsSigningOut] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSignOut = async () => {
    setIsSigningOut(true);
    setError(null);
    try {
      await signOut();
    } catch (signOutError) {
      setError(getClerkErrorMessage(signOutError));
    } finally {
      setIsSigningOut(false);
    }
  };

  if (!isLoaded) {
    return (
      <View className="flex-1 items-center justify-center bg-background">
        <ActivityIndicator size="large" color="#6C4EF5" />
      </View>
    );
  }

  if (!isSignedIn) {
    return null;
  }

  return (
    <View className="flex-1 items-center justify-center bg-background pb-16">
      <Text className="font-poppins-bold text-3xl text-text">Lingua</Text>
      <Text className="font-poppins-medium text-base text-text-secondary">
        Your home screen will live here
      </Text>

      <Pressable
        onPress={() => void handleSignOut()}
        disabled={isSigningOut}
        className="mt-8 h-[56px] flex-row items-center justify-center rounded-[20px] border border-border bg-white px-6 active:bg-surface disabled:opacity-50"
      >
        {isSigningOut ? (
          <ActivityIndicator size="small" color="#0D132B" />
        ) : (
          <Text className="font-poppins-semibold text-base text-text">
            Log out
          </Text>
        )}
      </Pressable>
      {error ? (
        <Text className="mt-3 text-center font-poppins text-[13px] text-error">
          {error}
        </Text>
      ) : null}
    </View>
  );
}