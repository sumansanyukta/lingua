import type { Activity, Lesson } from "@/types/learning";

/**
 * Sample beginner lessons with vocabulary, phrases, activities, goals and
 * AI teacher prompts for future audio-based Vision Agent lessons.
 *
 * Lessons reference their unit (data/units.ts) and language (data/languages.ts)
 * by id. Extend with new topics by adding more entries.
 */

/** Reusable activity builders to keep lesson definitions concise. */

function multipleChoice(
  id: string,
  source: Lesson["activities"][number]["source"],
  options: string[],
  correctIndex: number,
): Activity {
  return {
    id,
    type: "multiple-choice",
    source,
    prompt: { kind: "multiple-choice", options, correctIndex },
  };
}

function matchActivity(
  id: string,
  source: Lesson["activities"][number]["source"],
  pairs: { left: string; right: string }[],
): Activity {
  return {
    id,
    type: "match",
    source,
    prompt: { kind: "match", pairs },
  };
}

function rehearsal(
  id: string,
  source: Lesson["activities"][number]["source"],
  spoken: string,
): Activity {
  return {
    id,
    type: "audio",
    source,
    prompt: { kind: "listen", spoken, options: [], correctIndex: 0 },
  };
}

export const lessons: Lesson[] = [
  // ================= Spanish - Unit 1 =================
  {
    id: "es-lesson-1",
    unitId: "es-unit-1",
    languageId: "es",
    order: 0,
    title: "Greetings",
    subtitle: "Hola! Learn your first words.",
    xp: 10,
    goals: [
      { label: "Greet people", description: "Say hello and goodbye." },
      { label: "Say your name", description: "Introduce yourself simply." },
    ],
    activities: [
      multipleChoice(
        "es-l1-a1",
        {
          id: "es-vocab-hola",
          term: "hola",
          translation: "hello",
          partOfSpeech: "greeting",
        },
        ["hello", "goodbye", "please", "thanks"],
        0,
      ),
      multipleChoice(
        "es-l1-a2",
        {
          id: "es-vocab-adios",
          term: "adiós",
          translation: "goodbye",
          partOfSpeech: "greeting",
        },
        ["hello", "goodbye", "sorry", "yes"],
        1,
      ),
      multipleChoice(
        "es-l1-a3",
        {
          id: "es-phrase-me-llamo",
          phrase: "Me llamo Ana.",
          translation: "My name is Ana.",
          context: "Introducing yourself.",
        },
        ["My name is Ana.", "I speak Spanish.", "Where are you from?", "Nice to meet you."],
        0,
      ),
      matchActivity("es-l1-a4", {
        id: "es-vocab-gracias",
        term: "gracias",
        translation: "thank you",
        partOfSpeech: "expression",
      }, [
        { left: "hola", right: "hello" },
        { left: "adiós", right: "goodbye" },
        { left: "gracias", right: "thank you" },
      ]),
    ],
    aiTeacher: {
      role: "Friendly Spanish teacher",
      instructions:
        "Greet the learner in Spanish, ask their name, and only use the allowed terms. Keep responses short and repeat each word clearly.",
      allowedTerms: ["hola", "adiós", "gracias", "Me llamo"],
      exampleDialogue:
        "Teacher: ¡Hola! Me llamo Carlos. ¿Cómo te llamas?\nLearner: Me llamo Ana.\nTeacher: ¡Muy bien, Ana! ¡Adiós!",
    },
  },
  {
    id: "es-lesson-2",
    unitId: "es-unit-1",
    languageId: "es",
    order: 1,
    title: "Politeness",
    subtitle: "Please, thanks, and yes.",
    xp: 10,
    goals: [
      { label: "Be polite", description: "Use please and thank you." },
      { label: "Confirm", description: "Answer yes and no." },
    ],
    activities: [
      multipleChoice(
        "es-l2-a1",
        {
          id: "es-vocab-por-favor",
          term: "por favor",
          translation: "please",
          partOfSpeech: "expression",
        },
        ["please", "sorry", "hello", "thank you"],
        0,
      ),
      multipleChoice(
        "es-l2-a2",
        {
          id: "es-vocab-si",
          term: "sí",
          translation: "yes",
          partOfSpeech: "adverb",
        },
        ["no", "yes", "maybe", "please"],
        1,
      ),
      multipleChoice(
        "es-l2-a3",
        {
          id: "es-vocab-no",
          term: "no",
          translation: "no",
          partOfSpeech: "adverb",
        },
        ["yes", "no", "hello", "thanks"],
        1,
      ),
      matchActivity(
        "es-l2-a4",
        {
          id: "es-phrase-puedo",
          phrase: "¿Puedo pasar?",
          translation: "May I come in?",
          context: "Asking permission politely.",
        },
        [
          { left: "por favor", right: "please" },
          { left: "sí", right: "yes" },
          { left: "no", right: "no" },
        ],
      ),
    ],
    aiTeacher: {
      role: "Patient Spanish conversation partner",
      instructions:
        "Practice polite expressions with the learner. Ask yes/no questions and encourage them to use the allowed terms in replies.",
      allowedTerms: ["por favor", "sí", "no", "gracias"],
      exampleDialogue:
        "Teacher: ¿Quieres un café, por favor? Sí o no.\nLearner: Sí, gracias.\nTeacher: ¡Perfecto!",
    },
  },

  // ================= French - Unit 1 =================
  {
    id: "fr-lesson-1",
    unitId: "fr-unit-1",
    languageId: "fr",
    order: 0,
    title: "Say hello",
    subtitle: "Bonjour! Start a conversation.",
    xp: 10,
    goals: [
      { label: "Greet people", description: "Say hello and goodbye." },
      { label: "Introduce yourself", description: "Say your name." },
    ],
    activities: [
      multipleChoice(
        "fr-l1-a1",
        {
          id: "fr-vocab-bonjour",
          term: "bonjour",
          translation: "hello / good day",
          partOfSpeech: "greeting",
        },
        ["good morning", "good night", "goodbye", "please"],
        0,
      ),
      multipleChoice(
        "fr-l1-a2",
        {
          id: "fr-vocab-merci",
          term: "merci",
          translation: "thank you",
          partOfSpeech: "expression",
        },
        ["please", "thank you", "hello", "sorry"],
        1,
      ),
      multipleChoice(
        "fr-l1-a3",
        {
          id: "fr-phrase-je-m-appelle",
          phrase: "Je m'appelle Jean.",
          translation: "My name is Jean.",
          context: "Introducing yourself in French.",
        },
        ["Do you speak French?", "My name is Jean.", "Where are you from?", "Goodbye friend."],
        1,
      ),
      rehearsal(
        "fr-l1-a4",
        {
          id: "fr-vocab-au-revoir",
          term: "au revoir",
          translation: "goodbye",
          partOfSpeech: "greeting",
        },
        "au revoir",
      ),
    ],
    aiTeacher: {
      role: "Cheerful French teacher",
      instructions:
        "Greet the learner in French, exchange names, and stick to the allowed terms. Speak slowly and clearly.",
      allowedTerms: ["bonjour", "merci", "au revoir", "Je m'appelle"],
      exampleDialogue:
        "Teacher: Bonjour ! Je m'appelle Marie. Et toi ?\nLearner: Je m'appelle Jean.\nTeacher: Enchantée, Jean ! Au revoir !",
    },
  },

  // ================= Japanese - Unit 1 =================
  {
    id: "ja-lesson-1",
    unitId: "ja-unit-1",
    languageId: "ja",
    order: 0,
    title: "Greetings",
    subtitle: "こんにちは! Start politely.",
    xp: 10,
    goals: [
      { label: "Greet people", description: "Use everyday greetings." },
      { label: "Say your name", description: "Introduce yourself politely." },
    ],
    activities: [
      multipleChoice(
        "ja-l1-a1",
        {
          id: "ja-vocab-konnichiwa",
          term: "こんにちは",
          translation: "hello / good afternoon",
          romanization: "konnichiwa",
          partOfSpeech: "greeting",
        },
        ["hello", "goodbye", "thank you", "yes"],
        0,
      ),
      multipleChoice(
        "ja-l1-a2",
        {
          id: "ja-vocab-arigatou",
          term: "ありがとう",
          translation: "thank you",
          romanization: "arigatou",
          partOfSpeech: "expression",
        },
        ["please", "hello", "thank you", "sorry"],
        2,
      ),
      multipleChoice(
        "ja-l1-a3",
        {
          id: "ja-phrase-namae",
          phrase: "私の名前は。",
          translation: "My name is …",
          romanization: "watashi no namae wa",
          context: "Introducing yourself politely.",
        },
        ["I am happy.", "My name is …", "Good morning.", "Nice to meet you."],
        1,
      ),
      matchActivity(
        "ja-l1-a4",
        {
          id: "ja-vocab-sayounara",
          term: "さようなら",
          translation: "goodbye",
          romanization: "sayounara",
          partOfSpeech: "greeting",
        },
        [
          { left: "こんにちは", right: "hello" },
          { left: "ありがとう", right: "thank you" },
          { left: "さようなら", right: "goodbye" },
        ],
      ),
    ],
    aiTeacher: {
      role: "Gentle Japanese teacher",
      instructions:
        "Greet the learner in Japanese and practice introductions using only the allowed terms. Keep sentences short and use polite forms.",
      allowedTerms: ["こんにちは", "ありがとう", "さようなら", "なまえ"],
      exampleDialogue:
        "Teacher: こんにちは！\nLearner: こんにちは！\nTeacher: ありがとう！ さようなら！",
    },
  },
];

/** Get all lessons that belong to a unit (in order). */
export function getLessonsByUnit(unitId: string): Lesson[] {
  return lessons
    .filter((lesson) => lesson.unitId === unitId)
    .sort((a, b) => a.order - b.order);
}

/** Get all lessons for a language. */
export function getLessonsByLanguage(languageId: string): Lesson[] {
  return lessons
    .filter((lesson) => lesson.languageId === languageId)
    .sort((a, b) => a.order - b.order);
}

/** Get a single lesson by id. */
export function getLessonById(id: string): Lesson | undefined {
  return lessons.find((lesson) => lesson.id === id);
}
