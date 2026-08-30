import type { Language } from "@/types/learning";

/**
 * Hardcoded supported languages.
 *
 * This is a small, beginner-friendly sample set. Add a new language by adding
 * an entry here, then create matching units (data/units.ts) and lessons
 * (data/lessons.ts).
 */
export const languages: Language[] = [
  {
    id: "es",
    name: "Spanish",
    nativeName: "Español",
    code: "es",
    flag: "https://flagcdn.com/es.svg",
    learners: "28.4M",
    tagline: "The world's most popular learning language",
    isPopular: true,
  },
  {
    id: "fr",
    name: "French",
    nativeName: "Français",
    code: "fr",
    flag: "https://flagcdn.com/fr.svg",
    learners: "19.4M",
    tagline: "The language of love and culture",
    isPopular: true,
  },
  {
    id: "ja",
    name: "Japanese",
    nativeName: "日本語",
    code: "ja",
    flag: "https://flagcdn.com/jp.svg",
    learners: "12.7M",
    tagline: "Perfect your kana and start speaking",
    isPopular: true,
  },
  {
    id: "ko",
    name: "Korean",
    nativeName: "한국어",
    code: "ko",
    flag: "https://flagcdn.com/kr.svg",
    learners: "9.3M",
    tagline: "Learn Hangeul in minutes",
    isPopular: true,
  },
  {
    id: "de",
    name: "German",
    nativeName: "Deutsch",
    code: "de",
    flag: "https://flagcdn.com/de.svg",
    learners: "8.1M",
    tagline: "A sturdy language with a fun structure",
    isPopular: true,
  },
  {
    id: "zh",
    name: "Chinese",
    nativeName: "中文",
    code: "zh",
    flag: "https://flagcdn.com/cn.svg",
    learners: "7.4M",
    tagline: "Tones open up a whole new world",
    isPopular: true,
  },
  {
    id: "it",
    name: "Italian",
    nativeName: "Italiano",
    code: "it",
    flag: "https://flagcdn.com/it.svg",
    learners: "4.6M",
    tagline: "A musical language to enjoy",
    isPopular: false,
  },
  {
    id: "pt",
    name: "Portuguese",
    nativeName: "Português",
    code: "pt",
    flag: "https://flagcdn.com/pt.svg",
    learners: "3.2M",
    tagline: "Speak with millions across the globe",
    isPopular: false,
  },
];

/** Look up a language by id. */
export function getLanguage(id: string): Language | undefined {
  return languages.find((language) => language.id === id);
}
