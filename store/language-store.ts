import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type LanguageState = {
  selectedLanguageId: string | null;
  setLanguage: (languageId: string) => void;
  clearLanguage: () => void;
};

export const languageStorageKey = "lingua.selectedLanguage";

export const useLanguageStore = create<LanguageState>()(
  persist(
    (set) => ({
      selectedLanguageId: null,
      setLanguage: (languageId) => set({ selectedLanguageId: languageId }),
      clearLanguage: () => set({ selectedLanguageId: null }),
    }),
    {
      name: languageStorageKey,
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);

export function clearAllPersistedState() {
  return AsyncStorage.clear();
}

export function useLanguageHydrated() {
  const [hasHydrated, setHasHydrated] = useState(false);

  useEffect(() => {
    const unsub = useLanguageStore.persist.onFinishHydration(() =>
      setHasHydrated(true),
    );
    if (useLanguageStore.persist.hasHydrated()) {
      setHasHydrated(true);
    }
    return unsub;
  }, []);

  return hasHydrated;
}
