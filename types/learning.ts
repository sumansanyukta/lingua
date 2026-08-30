/**
 * Core learning content types shared across the app.
 *
 * These types describe the language learning content system:
 * languages -> units -> lessons, where each lesson contains a series of
 * activities (vocabulary, phrases, drills) and metadata for future
 * audio-based Vision Agent lessons.
 */

/** A language the app can teach. */
export type Language = {
  /** Stable id used across the app. Doubles as the ISO 639-1 code, e.g. "es". */
  id: string;
  /** Display name, e.g. "Spanish". */
  name: string;
  /** Native name, e.g. "Español". */
  nativeName: string;
  /**
   * Country flag image URL served by flagcdn.com, e.g. "https://flagcdn.com/es.svg".
   * Rendered with expo-image, which supports SVG sources.
   */
  flag: string;
  /** Approximate global learner count for display, e.g. "28.4M". */
  learners: string;
  /** Short tagline shown in the language list. */
  tagline: string;
  /** Whether the language shows under the "Popular" section. */
  isPopular: boolean;
};

/**
 * A teaching unit of a language (roughly a course chapter).
 * Groups several lessons under a themed topic.
 */
export type Unit = {
  id: string;
  languageId: string;
  /** Position of the unit within its language (0-based). */
  order: number;
  /** Human-readable unit title, e.g. "First words". */
  title: string;
  /** Short description shown on the unit row. */
  description: string;
};

/** A single interactive exercise performed inside a lesson. */
export type ActivityType =
  | "vocabulary"
  | "phrase"
  | "translate"
  | "multiple-choice"
  | "match"
  | "audio";

/** How the user is expected to answer an activity. */
export type ActivityPrompt =
  | { kind: "multiple-choice"; options: string[]; correctIndex: number }
  | { kind: "translate"; correctAnswer: string }
  | { kind: "match"; pairs: { left: string; right: string }[] }
  | { kind: "listen"; spoken: string; options: string[]; correctIndex: number }
  | { kind: "repeat"; spoken: string };

/** A single vocabulary word with its translation. */
export type VocabularyItem = {
  id: string;
  /** Word/phrase in the target language. */
  term: string;
  /** Translation in the learner's own language (English). */
  translation: string;
  /** Optional transliteration for non-Latin scripts, e.g. "nǐ hǎo". */
  romanization?: string;
  /** Part of speech, e.g. "noun", "verb", "greeting". */
  partOfSpeech: string;
};

/** A useful everyday phrase pair. */
export type Phrase = {
  id: string;
  /** Phrase in the target language. */
  phrase: string;
  /** English translation of the phrase. */
  translation: string;
  /** A short note on when to use the phrase. */
  context: string;
};

/** A single activity inside a lesson. */
export type Activity = {
  id: string;
  type: ActivityType;
  /** The vocabulary/phrase the activity focuses on. */
  source: VocabularyItem | Phrase;
  prompt: ActivityPrompt;
};

/** What a learner should be able to do after finishing a lesson. */
export type LessonGoal = {
  /** Short goal label, e.g. "Greet people". */
  label: string;
  /** One-line explanation of the skill being practiced. */
  description: string;
};

/**
 * Prompt that configures a future audio-based Vision Agent lesson.
 * The agent acts as the AI language teacher for this lesson's topic.
 */
export type AIteacherPrompt = {
  /** Role/persona the agent should adopt. */
  role: string;
  /** Instructions for how the teacher should behave during the lesson. */
  instructions: string;
  /** Vocabulary the teacher is allowed to use this lesson. */
  allowedTerms: string[];
  /** Optional example dialogue to steer the conversation. */
  exampleDialogue?: string;
};

/** A lesson within a unit. */
export type Lesson = {
  id: string;
  unitId: string;
  languageId: string;
  /** Position of the lesson within its unit (0-based). */
  order: number;
  /** Lesson title, e.g. "Greetings". */
  title: string;
  /** Short subtitle shown on the lesson card. */
  subtitle: string;
  /** Estimated XP the learner earns on completion. */
  xp: number;
  goals: LessonGoal[];
  activities: Activity[];
  /** Optional AI teacher configuration for audio-based lessons. */
  aiTeacher?: AIteacherPrompt;
};
