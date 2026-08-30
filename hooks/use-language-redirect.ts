import { useAuth } from "@clerk/expo";
import { router } from "expo-router";
import { useEffect } from "react";

import {
  useLanguageHydrated,
  useLanguageStore,
} from "@/store/language-store";

export function useRequireLanguage() {
  const { isLoaded, isSignedIn } = useAuth({ treatPendingAsSignedOut: false });
  const hasHydrated = useLanguageHydrated();
  const selectedLanguageId = useLanguageStore(
    (state) => state.selectedLanguageId,
  );

  useEffect(() => {
    if (!isLoaded || !hasHydrated || !isSignedIn) {
      return;
    }
    if (!selectedLanguageId) {
      router.replace("/language-selection");
    }
  }, [isLoaded, hasHydrated, isSignedIn, selectedLanguageId]);
}
