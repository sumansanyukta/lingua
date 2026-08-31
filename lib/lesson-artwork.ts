import type { Lesson } from "@/types/learning";

/**
 * Lesson illustrations.
 *
 * We don't ship a dedicated illustration per lesson, so each lesson maps to a
 * stable placeholder image (Picsum) keyed by its theme. Because the seed is
 * derived from the lesson id, a given lesson always shows the same artwork.
 */

const heroSeeds: Record<string, string> = {
  "es-unit-1": "cafe",
  "es-unit-2": "food",
  "fr-unit-1": "cafe",
  "fr-unit-2": "food",
  "ja-unit-1": "cafe",
  "ko-unit-1": "cafe",
  "de-unit-1": "cafe",
  "zh-unit-1": "cafe",
  "it-unit-1": "cafe",
  "pt-unit-1": "cafe",
};

const topicSeeds: Record<string, string> = {
  greet: "greetings",
  hello: "greetings",
  polite: "politeness",
  expression: "politeness",
  café: "cafe",
  cafe: "cafe",
  coffee: "cafe",
  travel: "travel",
  direction: "travel",
  shopping: "shopping",
  family: "family",
  friend: "family",
  daily: "daily",
};

function seedForKeyword(text: string): string | null {
  const lower = text.toLowerCase();
  for (const keyword of Object.keys(topicSeeds)) {
    if (lower.includes(keyword)) {
      return topicSeeds[keyword];
    }
  }
  return null;
}

/** Pick a stable Picsum image for a lesson based on its topic. */
export function getLessonArtwork(lesson: Lesson): string {
  const seed =
    seedForKeyword(lesson.title) ?? seedForKeyword(lesson.subtitle) ?? lesson.id;
  return `https://picsum.photos/seed/${encodeURIComponent(seed)}/200/200`;
}

/** Pick a hero banner image for a unit. */
export function getHeroArtwork(unitId: string): string {
  const seed = heroSeeds[unitId] ?? "cafe";
  return `https://picsum.photos/seed/${seed}-hero/800/400`;
}
