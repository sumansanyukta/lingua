import type { Unit } from "@/types/learning";

/**
 * Units group lessons into themed chapters per language.
 *
 * Sample beginner units for a few languages. Units reference their language
 * by id, and lessons reference their unit by id (see data/lessons.ts).
 *
 * To add content: create a unit here, then add matching lessons in
 * data/lessons.ts using the same unit id.
 */
export const units: Unit[] = [
  // ---- Spanish ----
  {
    id: "es-unit-1",
    languageId: "es",
    order: 0,
    title: "First words",
    description: "Greet people and introduce yourself.",
  },
  {
    id: "es-unit-2",
    languageId: "es",
    order: 1,
    title: "Food & drink",
    description: "Order food and talk about what you like.",
  },

  // ---- French ----
  {
    id: "fr-unit-1",
    languageId: "fr",
    order: 0,
    title: "Basics",
    description: "Say hello and talk about yourself.",
  },
  {
    id: "fr-unit-2",
    languageId: "fr",
    order: 1,
    title: "Food & drink",
    description: "Order a coffee and describe your tastes.",
  },

  // ---- Japanese ----
  {
    id: "ja-unit-1",
    languageId: "ja",
    order: 0,
    title: "Greetings",
    description: "Learn polite greetings and introductions.",
  },

  // ---- Korean ----
  {
    id: "ko-unit-1",
    languageId: "ko",
    order: 0,
    title: "Basics",
    description: "Say hello and introduce yourself.",
  },

  // ---- German ----
  {
    id: "de-unit-1",
    languageId: "de",
    order: 0,
    title: "Basics",
    description: "Greet, thank and say your name.",
  },

  // ---- Chinese ----
  {
    id: "zh-unit-1",
    languageId: "zh",
    order: 0,
    title: "Greetings",
    description: "Start polite conversations in Mandarin.",
  },

  // ---- Italian ----
  {
    id: "it-unit-1",
    languageId: "it",
    order: 0,
    title: "Basics",
    description: "Say hello and talk about yourself.",
  },

  // ---- Portuguese ----
  {
    id: "pt-unit-1",
    languageId: "pt",
    order: 0,
    title: "Basics",
    description: "Greet people and introduce yourself.",
  },
];

/** Get all units that belong to a language. */
export function getUnitsByLanguage(languageId: string): Unit[] {
  return units
    .filter((unit) => unit.languageId === languageId)
    .sort((a, b) => a.order - b.order);
}
