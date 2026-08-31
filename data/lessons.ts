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
  {
    id: "es-lesson-3",
    unitId: "es-unit-1",
    languageId: "es",
    order: 2,
    title: "At the café",
    subtitle: "Order a café con leche.",
    xp: 10,
    goals: [
      { label: "Order", description: "Ask for food and drink." },
      { label: "Understand", description: "React to simple replies." },
    ],
    activities: [
      multipleChoice(
        "es-l3-a1",
        {
          id: "es-vocab-cafe",
          term: "un café",
          translation: "a coffee",
          partOfSpeech: "noun",
        },
        ["a coffee", "a tea", "a water", "a beer"],
        0,
      ),
      multipleChoice(
        "es-l3-a2",
        {
          id: "es-vocab-cuenta",
          term: "la cuenta",
          translation: "the bill",
          partOfSpeech: "noun",
        },
        ["the bill", "the menu", "the chair", "the cup"],
        0,
      ),
    ],
  },
  {
    id: "es-lesson-4",
    unitId: "es-unit-1",
    languageId: "es",
    order: 3,
    title: "Travel & directions",
    subtitle: "Find your way around Spain.",
    xp: 10,
    goals: [
      { label: "Ask", description: "Ask where things are." },
      { label: "Navigate", description: "Use direction words." },
    ],
    activities: [
      matchActivity(
        "es-l4-a1",
        {
          id: "es-vocab-donde",
          term: "dónde",
          translation: "where",
          partOfSpeech: "adverb",
        },
        [
          { left: "dónde", right: "where" },
          { left: "gracias", right: "thank you" },
          { left: "hola", right: "hello" },
        ],
      ),
      multipleChoice(
        "es-l4-a2",
        {
          id: "es-vocab-estacion",
          term: "la estación",
          translation: "the station",
          partOfSpeech: "noun",
        },
        ["the station", "the airport", "the hotel", "the shop"],
        0,
      ),
    ],
  },
  {
    id: "es-lesson-5",
    unitId: "es-unit-1",
    languageId: "es",
    order: 4,
    title: "Shopping",
    subtitle: "Buy what you need.",
    xp: 10,
    goals: [
      { label: "Ask price", description: "Use ¿cuánto cuesta?" },
      { label: "Buy", description: "Request with quiero." },
    ],
    activities: [
      multipleChoice(
        "es-l5-a1",
        {
          id: "es-vocab-quiero",
          term: "quiero",
          translation: "I want",
          partOfSpeech: "phrase",
        },
        ["I want", "I have", "I need", "I see"],
        0,
      ),
      multipleChoice(
        "es-l5-a2",
        {
          id: "es-vocab-cuanto",
          term: "cuánto",
          translation: "how much",
          partOfSpeech: "adverb",
        },
        ["how much", "how many", "where", "when"],
        0,
      ),
    ],
  },
  {
    id: "es-lesson-6",
    unitId: "es-unit-1",
    languageId: "es",
    order: 5,
    title: "Family & friends",
    subtitle: "Talk about people you love.",
    xp: 10,
    goals: [
      { label: "Name family", description: "Say family words." },
      { label: "Describe", description: "Build simple sentences." },
    ],
    activities: [
      multipleChoice(
        "es-l6-a1",
        {
          id: "es-vocab-familia",
          term: "la familia",
          translation: "the family",
          partOfSpeech: "noun",
        },
        ["the family", "the friend", "the teacher", "the house"],
        0,
      ),
      multipleChoice(
        "es-l6-a2",
        {
          id: "es-vocab-amigo",
          term: "el amigo",
          translation: "the friend",
          partOfSpeech: "noun",
        },
        ["the friend", "the family", "the dog", "the car"],
        0,
      ),
    ],
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
  {
    id: "ja-lesson-2",
    unitId: "ja-unit-1",
    languageId: "ja",
    order: 1,
    title: "Polite expressions",
    subtitle: "Learn kind words and manners.",
    xp: 10,
    goals: [
      { label: "Be polite", description: "Say please and sorry." },
      { label: "Say thanks", description: "Use arigatou naturally." },
    ],
    activities: [
      multipleChoice(
        "ja-l2-a1",
        {
          id: "ja-vocab-onegaishimasu",
          term: "おねがいします",
          translation: "please / I ask of you",
          romanization: "onegai shimasu",
          partOfSpeech: "expression",
        },
        ["please", "thank you", "hello", "goodbye"],
        0,
      ),
      multipleChoice(
        "ja-l2-a2",
        {
          id: "ja-vocab-sumimasen",
          term: "すみません",
          translation: "excuse me / sorry",
          romanization: "sumimasen",
          partOfSpeech: "expression",
        },
        ["yes", "excuse me", "good morning", "no"],
        1,
      ),
    ],
  },
  {
    id: "ja-lesson-3",
    unitId: "ja-unit-1",
    languageId: "ja",
    order: 2,
    title: "At the café",
    subtitle: "Order drinks and snacks.",
    xp: 10,
    goals: [
      { label: "Order", description: "Ask for a coffee or tea." },
      { label: "Understand", description: "React to simple replies." },
    ],
    activities: [
      multipleChoice(
        "ja-l3-a1",
        {
          id: "ja-vocab-kouhii",
          term: "コーヒー",
          translation: "coffee",
          romanization: "kouhii",
          partOfSpeech: "noun",
        },
        ["tea", "coffee", "water", "juice"],
        1,
      ),
      multipleChoice(
        "ja-l3-a2",
        {
          id: "ja-vocab-ocha",
          term: "お茶",
          translation: "tea",
          romanization: "ocha",
          partOfSpeech: "noun",
        },
        ["coffee", "tea", "milk", "beer"],
        1,
      ),
    ],
  },
  {
    id: "ja-lesson-4",
    unitId: "ja-unit-1",
    languageId: "ja",
    order: 3,
    title: "Travel & directions",
    subtitle: "Ask where things are.",
    xp: 10,
    goals: [
      { label: "Ask location", description: "Use doko to ask where." },
      { label: "Understand", description: "Recognize direction words." },
    ],
    activities: [
      multipleChoice(
        "ja-l4-a1",
        {
          id: "ja-vocab-doko",
          term: "どこ",
          translation: "where",
          romanization: "doko",
          partOfSpeech: "adverb",
        },
        ["when", "where", "who", "what"],
        1,
      ),
      matchActivity(
        "ja-l4-a2",
        {
          id: "ja-vocab-eki",
          term: "駅",
          translation: "station",
          romanization: "eki",
          partOfSpeech: "noun",
        },
        [
          { left: "駅", right: "station" },
          { left: "コーヒー", right: "coffee" },
          { left: "お茶", right: "tea" },
        ],
      ),
    ],
  },
  {
    id: "ja-lesson-5",
    unitId: "ja-unit-1",
    languageId: "ja",
    order: 4,
    title: "Shopping",
    subtitle: "Buy things with confidence.",
    xp: 10,
    goals: [
      { label: "Ask price", description: "Say ikura desu ka." },
      { label: "Buy", description: "Use kudasai to request." },
    ],
    activities: [
      multipleChoice(
        "ja-l5-a1",
        {
          id: "ja-vocab-kudasai",
          term: "ください",
          translation: "please give me",
          romanization: "kudasai",
          partOfSpeech: "expression",
        },
        ["please give me", "thank you", "excuse me", "goodbye"],
        0,
      ),
      multipleChoice(
        "ja-l5-a2",
        {
          id: "ja-vocab-ikura",
          term: "いくら",
          translation: "how much",
          romanization: "ikura",
          partOfSpeech: "adverb",
        },
        ["how much", "how many", "where", "when"],
        0,
      ),
    ],
  },
  {
    id: "ja-lesson-6",
    unitId: "ja-unit-1",
    languageId: "ja",
    order: 5,
    title: "Family & friends",
    subtitle: "Talk about people you love.",
    xp: 10,
    goals: [
      { label: "Name family", description: "Say kazoku words." },
      { label: "Describe", description: "Use simple sentences." },
    ],
    activities: [
      multipleChoice(
        "ja-l6-a1",
        {
          id: "ja-vocab-kazoku",
          term: "家族",
          translation: "family",
          romanization: "kazoku",
          partOfSpeech: "noun",
        },
        ["family", "friend", "teacher", "home"],
        0,
      ),
      multipleChoice(
        "ja-l6-a2",
        {
          id: "ja-vocab-tomodachi",
          term: "友達",
          translation: "friend",
          romanization: "tomodachi",
          partOfSpeech: "noun",
        },
        ["family", "friend", "house", "school"],
        1,
      ),
    ],
  },

  // ================= French - Unit 1 (extended) =================
  {
    id: "fr-lesson-2",
    unitId: "fr-unit-1",
    languageId: "fr",
    order: 1,
    title: "Polite words",
    subtitle: "Please, sorry and yes.",
    xp: 10,
    goals: [
      { label: "Be polite", description: "Use s'il vous plaît." },
      { label: "React", description: "Say oui and non." },
    ],
    activities: [
      multipleChoice(
        "fr-l2-a1",
        {
          id: "fr-vocab-svp",
          term: "s'il vous plaît",
          translation: "please",
          partOfSpeech: "expression",
        },
        ["please", "thank you", "sorry", "yes"],
        0,
      ),
      multipleChoice(
        "fr-l2-a2",
        {
          id: "fr-vocab-oui",
          term: "oui",
          translation: "yes",
          partOfSpeech: "adverb",
        },
        ["yes", "no", "maybe", "please"],
        0,
      ),
    ],
  },
  {
    id: "fr-lesson-3",
    unitId: "fr-unit-1",
    languageId: "fr",
    order: 2,
    title: "At the café",
    subtitle: "Order a coffee like a local.",
    xp: 10,
    goals: [
      { label: "Order", description: "Ask for a coffee or tea." },
      { label: "Pay politely", description: "Thank the server." },
    ],
    activities: [
      multipleChoice(
        "fr-l3-a1",
        {
          id: "fr-vocab-cafe",
          term: "un café",
          translation: "a coffee",
          partOfSpeech: "noun",
        },
        ["a coffee", "a tea", "a water", "a wine"],
        0,
      ),
      multipleChoice(
        "fr-l3-a2",
        {
          id: "fr-vocab-add",
          term: "l'addition",
          translation: "the bill",
          partOfSpeech: "noun",
        },
        ["the bill", "the menu", "the chair", "the cup"],
        0,
      ),
    ],
  },
  {
    id: "fr-lesson-4",
    unitId: "fr-unit-1",
    languageId: "fr",
    order: 3,
    title: "Travel & directions",
    subtitle: "Find your way around.",
    xp: 10,
    goals: [
      { label: "Ask", description: "Ask where places are." },
      { label: "Understand", description: "Follow simple directions." },
    ],
    activities: [
      matchActivity(
        "fr-l4-a1",
        {
          id: "fr-vocab-ou",
          term: "où",
          translation: "where",
          partOfSpeech: "adverb",
        },
        [
          { left: "où", right: "where" },
          { left: "merci", right: "thank you" },
          { left: "bonjour", right: "hello" },
        ],
      ),
      multipleChoice(
        "fr-l4-a2",
        {
          id: "fr-vocab-gare",
          term: "la gare",
          translation: "the station",
          partOfSpeech: "noun",
        },
        ["the station", "the airport", "the hotel", "the shop"],
        0,
      ),
    ],
  },
  {
    id: "fr-lesson-5",
    unitId: "fr-unit-1",
    languageId: "fr",
    order: 4,
    title: "Shopping",
    subtitle: "Buy what you need.",
    xp: 10,
    goals: [
      { label: "Ask price", description: "Say ça coûte combien." },
      { label: "Buy", description: "Use je voudrais." },
    ],
    activities: [
      multipleChoice(
        "fr-l5-a1",
        {
          id: "fr-vocab-voudrais",
          term: "je voudrais",
          translation: "I would like",
          partOfSpeech: "phrase",
        },
        ["I would like", "I have", "I need", "I see"],
        0,
      ),
      multipleChoice(
        "fr-l5-a2",
        {
          id: "fr-vocab-combien",
          term: "combien",
          translation: "how much",
          partOfSpeech: "adverb",
        },
        ["how much", "how many", "where", "when"],
        0,
      ),
    ],
  },
  {
    id: "fr-lesson-6",
    unitId: "fr-unit-1",
    languageId: "fr",
    order: 5,
    title: "Family & friends",
    subtitle: "Talk about the people you love.",
    xp: 10,
    goals: [
      { label: "Name family", description: "Say la famille words." },
      { label: "Describe", description: "Build simple sentences." },
    ],
    activities: [
      multipleChoice(
        "fr-l6-a1",
        {
          id: "fr-vocab-famille",
          term: "la famille",
          translation: "the family",
          partOfSpeech: "noun",
        },
        ["the family", "the friend", "the teacher", "the house"],
        0,
      ),
      multipleChoice(
        "fr-l6-a2",
        {
          id: "fr-vocab-amie",
          term: "l'ami",
          translation: "the friend",
          partOfSpeech: "noun",
        },
        ["the friend", "the family", "the dog", "the car"],
        0,
      ),
    ],
  },

  // ================= Korean - Unit 1 =================
  {
    id: "ko-lesson-1",
    unitId: "ko-unit-1",
    languageId: "ko",
    order: 0,
    title: "Greetings",
    subtitle: "안녕하세요! Say hello politely.",
    xp: 10,
    goals: [
      { label: "Greet", description: "Say hello and goodbye." },
      { label: "Introduce", description: "Say your name." },
    ],
    activities: [
      multipleChoice(
        "ko-l1-a1",
        {
          id: "ko-vocab-annyeong",
          term: "안녕하세요",
          translation: "hello",
          romanization: "annyeonghaseyo",
          partOfSpeech: "greeting",
        },
        ["hello", "goodbye", "thank you", "yes"],
        0,
      ),
      multipleChoice(
        "ko-l1-a2",
        {
          id: "ko-vocab-sarang",
          term: "사랑해요",
          translation: "I love you",
          romanization: "saranghaeyo",
          partOfSpeech: "expression",
        },
        ["I love you", "I am hungry", "thank you", "hello"],
        0,
      ),
    ],
  },
  {
    id: "ko-lesson-2",
    unitId: "ko-unit-1",
    languageId: "ko",
    order: 1,
    title: "Polite expressions",
    subtitle: "Learn kind words.",
    xp: 10,
    goals: [
      { label: "Be polite", description: "Say please and thanks." },
      { label: "React", description: "Answer yes and no." },
    ],
    activities: [
      multipleChoice(
        "ko-l2-a1",
        {
          id: "ko-vocab-gamsa",
          term: "감사합니다",
          translation: "thank you",
          romanization: "gamsahamnida",
          partOfSpeech: "expression",
        },
        ["thank you", "please", "sorry", "no"],
        0,
      ),
      multipleChoice(
        "ko-l2-a2",
        {
          id: "ko-vocab-ne",
          term: "네",
          translation: "yes",
          romanization: "ne",
          partOfSpeech: "adverb",
        },
        ["yes", "no", "please", "hello"],
        0,
      ),
    ],
  },
  {
    id: "ko-lesson-3",
    unitId: "ko-unit-1",
    languageId: "ko",
    order: 2,
    title: "At the café",
    subtitle: "Order drinks confidently.",
    xp: 10,
    goals: [
      { label: "Order", description: "Ask for a coffee or tea." },
      { label: "Remember", description: "Use basic drink words." },
    ],
    activities: [
      multipleChoice(
        "ko-l3-a1",
        {
          id: "ko-vocab-keopi",
          term: "커피",
          translation: "coffee",
          romanization: "keopi",
          partOfSpeech: "noun",
        },
        ["tea", "coffee", "water", "juice"],
        1,
      ),
      multipleChoice(
        "ko-l3-a2",
        {
          id: "ko-vocab-cha",
          term: "차",
          translation: "tea",
          romanization: "cha",
          partOfSpeech: "noun",
        },
        ["coffee", "tea", "milk", "soup"],
        1,
      ),
    ],
  },
  {
    id: "ko-lesson-4",
    unitId: "ko-unit-1",
    languageId: "ko",
    order: 3,
    title: "Travel & directions",
    subtitle: "Find your way easily.",
    xp: 10,
    goals: [
      { label: "Ask", description: "Ask where places are." },
      { label: "Navigate", description: "Use direction words." },
    ],
    activities: [
      matchActivity(
        "ko-l4-a1",
        {
          id: "ko-vocab-odi",
          term: "어디",
          translation: "where",
          romanization: "eodi",
          partOfSpeech: "adverb",
        },
        [
          { left: "어디", right: "where" },
          { left: "커피", right: "coffee" },
          { left: "차", right: "tea" },
        ],
      ),
      multipleChoice(
        "ko-l4-a2",
        {
          id: "ko-vocab-yeok",
          term: "역",
          translation: "station",
          romanization: "yeok",
          partOfSpeech: "noun",
        },
        ["station", "airport", "hotel", "shop"],
        0,
      ),
    ],
  },
  {
    id: "ko-lesson-5",
    unitId: "ko-unit-1",
    languageId: "ko",
    order: 4,
    title: "Shopping",
    subtitle: "Buy things like a local.",
    xp: 10,
    goals: [
      { label: "Ask price", description: "Use eolma." },
      { label: "Buy", description: "Request with juseyo." },
    ],
    activities: [
      multipleChoice(
        "ko-l5-a1",
        {
          id: "ko-vocab-juseyo",
          term: "주세요",
          translation: "please give me",
          romanization: "juseyo",
          partOfSpeech: "expression",
        },
        ["please give me", "thank you", "excuse me", "help"],
        0,
      ),
      multipleChoice(
        "ko-l5-a2",
        {
          id: "ko-vocab-eolma",
          term: "얼마",
          translation: "how much",
          romanization: "eolma",
          partOfSpeech: "adverb",
        },
        ["how much", "how many", "where", "when"],
        0,
      ),
    ],
  },
  {
    id: "ko-lesson-6",
    unitId: "ko-unit-1",
    languageId: "ko",
    order: 5,
    title: "Family & friends",
    subtitle: "Talk about people you love.",
    xp: 10,
    goals: [
      { label: "Name family", description: "Say family words." },
      { label: "Describe", description: "Build simple sentences." },
    ],
    activities: [
      multipleChoice(
        "ko-l6-a1",
        {
          id: "ko-vocab-gajok",
          term: "가족",
          translation: "family",
          romanization: "gajok",
          partOfSpeech: "noun",
        },
        ["family", "friend", "teacher", "home"],
        0,
      ),
      multipleChoice(
        "ko-l6-a2",
        {
          id: "ko-vocab-chingu",
          term: "친구",
          translation: "friend",
          romanization: "chingu",
          partOfSpeech: "noun",
        },
        ["family", "friend", "house", "school"],
        1,
      ),
    ],
  },

  // ================= German - Unit 1 =================
  {
    id: "de-lesson-1",
    unitId: "de-unit-1",
    languageId: "de",
    order: 0,
    title: "Greetings",
    subtitle: "Hallo! Start a conversation.",
    xp: 10,
    goals: [
      { label: "Greet", description: "Say hello and goodbye." },
      { label: "Introduce", description: "Say your name." },
    ],
    activities: [
      multipleChoice(
        "de-l1-a1",
        {
          id: "de-vocab-hallo",
          term: "hallo",
          translation: "hello",
          partOfSpeech: "greeting",
        },
        ["hello", "goodbye", "thank you", "please"],
        0,
      ),
      multipleChoice(
        "de-l1-a2",
        {
          id: "de-vocab-danke",
          term: "danke",
          translation: "thank you",
          partOfSpeech: "expression",
        },
        ["thank you", "please", "sorry", "hello"],
        0,
      ),
    ],
  },
  {
    id: "de-lesson-2",
    unitId: "de-unit-1",
    languageId: "de",
    order: 1,
    title: "Polite words",
    subtitle: "Be polite and friendly.",
    xp: 10,
    goals: [
      { label: "Be polite", description: "Say bitte and danke." },
      { label: "React", description: "Answer ja and nein." },
    ],
    activities: [
      multipleChoice(
        "de-l2-a1",
        {
          id: "de-vocab-bitte",
          term: "bitte",
          translation: "please / you're welcome",
          partOfSpeech: "expression",
        },
        ["please", "thank you", "sorry", "yes"],
        0,
      ),
      multipleChoice(
        "de-l2-a2",
        {
          id: "de-vocab-ja",
          term: "ja",
          translation: "yes",
          partOfSpeech: "adverb",
        },
        ["yes", "no", "maybe", "please"],
        0,
      ),
    ],
  },
  {
    id: "de-lesson-3",
    unitId: "de-unit-1",
    languageId: "de",
    order: 2,
    title: "At the café",
    subtitle: "Order a coffee in German.",
    xp: 10,
    goals: [
      { label: "Order", description: "Ask for a coffee or tea." },
      { label: "Pay politely", description: "Thank the waiter." },
    ],
    activities: [
      multipleChoice(
        "de-l3-a1",
        {
          id: "de-vocab-kaffee",
          term: "der Kaffee",
          translation: "the coffee",
          partOfSpeech: "noun",
        },
        ["the coffee", "the tea", "the water", "the cake"],
        0,
      ),
      multipleChoice(
        "de-l3-a2",
        {
          id: "de-vocab-tee",
          term: "der Tee",
          translation: "the tea",
          partOfSpeech: "noun",
        },
        ["the coffee", "the tea", "the milk", "the soup"],
        1,
      ),
    ],
  },
  {
    id: "de-lesson-4",
    unitId: "de-unit-1",
    languageId: "de",
    order: 3,
    title: "Travel & directions",
    subtitle: "Find your way around.",
    xp: 10,
    goals: [
      { label: "Ask", description: "Ask where things are." },
      { label: "Understand", description: "Follow simple directions." },
    ],
    activities: [
      matchActivity(
        "de-l4-a1",
        {
          id: "de-vocab-wo",
          term: "wo",
          translation: "where",
          partOfSpeech: "adverb",
        },
        [
          { left: "wo", right: "where" },
          { left: "danke", right: "thank you" },
          { left: "hallo", right: "hello" },
        ],
      ),
      multipleChoice(
        "de-l4-a2",
        {
          id: "de-vocab-bahnhof",
          term: "der Bahnhof",
          translation: "the station",
          partOfSpeech: "noun",
        },
        ["the station", "the airport", "the hotel", "the shop"],
        0,
      ),
    ],
  },
  {
    id: "de-lesson-5",
    unitId: "de-unit-1",
    languageId: "de",
    order: 4,
    title: "Shopping",
    subtitle: "Buy what you need.",
    xp: 10,
    goals: [
      { label: "Ask price", description: "Use wie viel kostet." },
      { label: "Buy", description: "Request with ich möchte." },
    ],
    activities: [
      multipleChoice(
        "de-l5-a1",
        {
          id: "de-vocab-moechte",
          term: "ich möchte",
          translation: "I would like",
          partOfSpeech: "phrase",
        },
        ["I would like", "I have", "I need", "I see"],
        0,
      ),
      multipleChoice(
        "de-l5-a2",
        {
          id: "de-vocab-wie-viel",
          term: "wie viel",
          translation: "how much",
          partOfSpeech: "adverb",
        },
        ["how much", "how many", "where", "when"],
        0,
      ),
    ],
  },
  {
    id: "de-lesson-6",
    unitId: "de-unit-1",
    languageId: "de",
    order: 5,
    title: "Family & friends",
    subtitle: "Talk about people you love.",
    xp: 10,
    goals: [
      { label: "Name family", description: "Say family words." },
      { label: "Describe", description: "Build simple sentences." },
    ],
    activities: [
      multipleChoice(
        "de-l6-a1",
        {
          id: "de-vocab-familie",
          term: "die Familie",
          translation: "the family",
          partOfSpeech: "noun",
        },
        ["the family", "the friend", "the teacher", "the house"],
        0,
      ),
      multipleChoice(
        "de-l6-a2",
        {
          id: "de-vocab-freund",
          term: "der Freund",
          translation: "the friend",
          partOfSpeech: "noun",
        },
        ["the friend", "the family", "the dog", "the car"],
        0,
      ),
    ],
  },

  // ================= Chinese - Unit 1 =================
  {
    id: "zh-lesson-1",
    unitId: "zh-unit-1",
    languageId: "zh",
    order: 0,
    title: "Greetings",
    subtitle: "你好! Say hello in Mandarin.",
    xp: 10,
    goals: [
      { label: "Greet", description: "Say hello and goodbye." },
      { label: "Introduce", description: "Say your name." },
    ],
    activities: [
      multipleChoice(
        "zh-l1-a1",
        {
          id: "zh-vocab-nihao",
          term: "你好",
          translation: "hello",
          romanization: "ni hao",
          partOfSpeech: "greeting",
        },
        ["hello", "goodbye", "thank you", "please"],
        0,
      ),
      multipleChoice(
        "zh-l1-a2",
        {
          id: "zh-vocab-xiexie",
          term: "谢谢",
          translation: "thank you",
          romanization: "xie xie",
          partOfSpeech: "expression",
        },
        ["thank you", "please", "sorry", "yes"],
        0,
      ),
    ],
  },
  {
    id: "zh-lesson-2",
    unitId: "zh-unit-1",
    languageId: "zh",
    order: 1,
    title: "Polite expressions",
    subtitle: "Learn kind, polite words.",
    xp: 10,
    goals: [
      { label: "Be polite", description: "Say qǐng and duìbuqǐ." },
      { label: "React", description: "Answer shì and bù." },
    ],
    activities: [
      multipleChoice(
        "zh-l2-a1",
        {
          id: "zh-vocab-qing",
          term: "请",
          translation: "please",
          romanization: "qǐng",
          partOfSpeech: "expression",
        },
        ["please", "thank you", "sorry", "no"],
        0,
      ),
      multipleChoice(
        "zh-l2-a2",
        {
          id: "zh-vocab-dui",
          term: "对",
          translation: "yes / correct",
          romanization: "duì",
          partOfSpeech: "adverb",
        },
        ["yes / correct", "no", "maybe", "please"],
        0,
      ),
    ],
  },
  {
    id: "zh-lesson-3",
    unitId: "zh-unit-1",
    languageId: "zh",
    order: 2,
    title: "At the café",
    subtitle: "Order a drink with confidence.",
    xp: 10,
    goals: [
      { label: "Order", description: "Ask for a coffee or tea." },
      { label: "Understand", description: "Recognize drink words." },
    ],
    activities: [
      multipleChoice(
        "zh-l3-a1",
        {
          id: "zh-vocab-kafei",
          term: "咖啡",
          translation: "coffee",
          romanization: "kāfēi",
          partOfSpeech: "noun",
        },
        ["tea", "coffee", "water", "juice"],
        1,
      ),
      multipleChoice(
        "zh-l3-a2",
        {
          id: "zh-vocab-cha",
          term: "茶",
          translation: "tea",
          romanization: "chá",
          partOfSpeech: "noun",
        },
        ["coffee", "tea", "milk", "soup"],
        1,
      ),
    ],
  },
  {
    id: "zh-lesson-4",
    unitId: "zh-unit-1",
    languageId: "zh",
    order: 3,
    title: "Travel & directions",
    subtitle: "Find your way in China.",
    xp: 10,
    goals: [
      { label: "Ask", description: "Ask where places are." },
      { label: "Navigate", description: "Use direction words." },
    ],
    activities: [
      matchActivity(
        "zh-l4-a1",
        {
          id: "zh-vocab-nar",
          term: "哪里",
          translation: "where",
          romanization: "nǎlǐ",
          partOfSpeech: "adverb",
        },
        [
          { left: "哪里", right: "where" },
          { left: "咖啡", right: "coffee" },
          { left: "茶", right: "tea" },
        ],
      ),
      multipleChoice(
        "zh-l4-a2",
        {
          id: "zh-vocab-zhan",
          term: "车站",
          translation: "station",
          romanization: "chēzhàn",
          partOfSpeech: "noun",
        },
        ["station", "airport", "hotel", "shop"],
        0,
      ),
    ],
  },
  {
    id: "zh-lesson-5",
    unitId: "zh-unit-1",
    languageId: "zh",
    order: 4,
    title: "Shopping",
    subtitle: "Buy things with a smile.",
    xp: 10,
    goals: [
      { label: "Ask price", description: "Use duōshao qián." },
      { label: "Buy", description: "Request with wǒ yào." },
    ],
    activities: [
      multipleChoice(
        "zh-l5-a1",
        {
          id: "zh-vocab-yao",
          term: "我要",
          translation: "I want",
          romanization: "wǒ yào",
          partOfSpeech: "phrase",
        },
        ["I want", "I have", "I need", "I see"],
        0,
      ),
      multipleChoice(
        "zh-l5-a2",
        {
          id: "zh-vocab-duoshao",
          term: "多少",
          translation: "how much",
          romanization: "duōshao",
          partOfSpeech: "adverb",
        },
        ["how much", "how many", "where", "when"],
        0,
      ),
    ],
  },
  {
    id: "zh-lesson-6",
    unitId: "zh-unit-1",
    languageId: "zh",
    order: 5,
    title: "Family & friends",
    subtitle: "Talk about people you love.",
    xp: 10,
    goals: [
      { label: "Name family", description: "Say family words." },
      { label: "Describe", description: "Build simple sentences." },
    ],
    activities: [
      multipleChoice(
        "zh-l6-a1",
        {
          id: "zh-vocab-jia",
          term: "家",
          translation: "family / home",
          romanization: "jiā",
          partOfSpeech: "noun",
        },
        ["family / home", "friend", "teacher", "work"],
        0,
      ),
      multipleChoice(
        "zh-l6-a2",
        {
          id: "zh-vocab-pengyou",
          term: "朋友",
          translation: "friend",
          romanization: "péngyou",
          partOfSpeech: "noun",
        },
        ["family", "friend", "house", "school"],
        1,
      ),
    ],
  },

  // ================= Italian - Unit 1 =================
  {
    id: "it-lesson-1",
    unitId: "it-unit-1",
    languageId: "it",
    order: 0,
    title: "Greetings",
    subtitle: "Ciao! Say hello in Italian.",
    xp: 10,
    goals: [
      { label: "Greet", description: "Say hello and goodbye." },
      { label: "Introduce", description: "Say your name." },
    ],
    activities: [
      multipleChoice(
        "it-l1-a1",
        {
          id: "it-vocab-ciao",
          term: "ciao",
          translation: "hello / goodbye",
          partOfSpeech: "greeting",
        },
        ["hello / goodbye", "thank you", "please", "sorry"],
        0,
      ),
      multipleChoice(
        "it-l1-a2",
        {
          id: "it-vocab-grazie",
          term: "grazie",
          translation: "thank you",
          partOfSpeech: "expression",
        },
        ["thank you", "please", "sorry", "yes"],
        0,
      ),
    ],
  },
  {
    id: "it-lesson-2",
    unitId: "it-unit-1",
    languageId: "it",
    order: 1,
    title: "Polite words",
    subtitle: "Be polite and kind.",
    xp: 10,
    goals: [
      { label: "Be polite", description: "Say per favore." },
      { label: "React", description: "Answer sì and no." },
    ],
    activities: [
      multipleChoice(
        "it-l2-a1",
        {
          id: "it-vocab-favore",
          term: "per favore",
          translation: "please",
          partOfSpeech: "expression",
        },
        ["please", "thank you", "sorry", "yes"],
        0,
      ),
      multipleChoice(
        "it-l2-a2",
        {
          id: "it-vocab-si",
          term: "sì",
          translation: "yes",
          partOfSpeech: "adverb",
        },
        ["yes", "no", "maybe", "please"],
        0,
      ),
    ],
  },
  {
    id: "it-lesson-3",
    unitId: "it-unit-1",
    languageId: "it",
    order: 2,
    title: "At the café",
    subtitle: "Order a coffee in Italy.",
    xp: 10,
    goals: [
      { label: "Order", description: "Ask for a coffee or tea." },
      { label: "Pay politely", description: "Thank the barista." },
    ],
    activities: [
      multipleChoice(
        "it-l3-a1",
        {
          id: "it-vocab-caffe",
          term: "un caffè",
          translation: "a coffee",
          partOfSpeech: "noun",
        },
        ["a coffee", "a tea", "a water", "a wine"],
        0,
      ),
      multipleChoice(
        "it-l3-a2",
        {
          id: "it-vocab-conto",
          term: "il conto",
          translation: "the bill",
          partOfSpeech: "noun",
        },
        ["the bill", "the menu", "the chair", "the cup"],
        0,
      ),
    ],
  },
  {
    id: "it-lesson-4",
    unitId: "it-unit-1",
    languageId: "it",
    order: 3,
    title: "Travel & directions",
    subtitle: "Find your way around.",
    xp: 10,
    goals: [
      { label: "Ask", description: "Ask where places are." },
      { label: "Understand", description: "Follow simple directions." },
    ],
    activities: [
      matchActivity(
        "it-l4-a1",
        {
          id: "it-vocab-dove",
          term: "dove",
          translation: "where",
          partOfSpeech: "adverb",
        },
        [
          { left: "dove", right: "where" },
          { left: "grazie", right: "thank you" },
          { left: "ciao", right: "hello" },
        ],
      ),
      multipleChoice(
        "it-l4-a2",
        {
          id: "it-vocab-stazione",
          term: "la stazione",
          translation: "the station",
          partOfSpeech: "noun",
        },
        ["the station", "the airport", "the hotel", "the shop"],
        0,
      ),
    ],
  },
  {
    id: "it-lesson-5",
    unitId: "it-unit-1",
    languageId: "it",
    order: 4,
    title: "Shopping",
    subtitle: "Buy things with confidence.",
    xp: 10,
    goals: [
      { label: "Ask price", description: "Use quanto costa." },
      { label: "Buy", description: "Request with vorrei." },
    ],
    activities: [
      multipleChoice(
        "it-l5-a1",
        {
          id: "it-vocab-vorrei",
          term: "vorrei",
          translation: "I would like",
          partOfSpeech: "phrase",
        },
        ["I would like", "I have", "I need", "I see"],
        0,
      ),
      multipleChoice(
        "it-l5-a2",
        {
          id: "it-vocab-quanto",
          term: "quanto",
          translation: "how much",
          partOfSpeech: "adverb",
        },
        ["how much", "how many", "where", "when"],
        0,
      ),
    ],
  },
  {
    id: "it-lesson-6",
    unitId: "it-unit-1",
    languageId: "it",
    order: 5,
    title: "Family & friends",
    subtitle: "Talk about people you love.",
    xp: 10,
    goals: [
      { label: "Name family", description: "Say family words." },
      { label: "Describe", description: "Build simple sentences." },
    ],
    activities: [
      multipleChoice(
        "it-l6-a1",
        {
          id: "it-vocab-famiglia",
          term: "la famiglia",
          translation: "the family",
          partOfSpeech: "noun",
        },
        ["the family", "the friend", "the teacher", "the house"],
        0,
      ),
      multipleChoice(
        "it-l6-a2",
        {
          id: "it-vocab-amico",
          term: "l'amico",
          translation: "the friend",
          partOfSpeech: "noun",
        },
        ["the friend", "the family", "the dog", "the car"],
        0,
      ),
    ],
  },

  // ================= Portuguese - Unit 1 =================
  {
    id: "pt-lesson-1",
    unitId: "pt-unit-1",
    languageId: "pt",
    order: 0,
    title: "Greetings",
    subtitle: "Olá! Say hello in Portuguese.",
    xp: 10,
    goals: [
      { label: "Greet", description: "Say hello and goodbye." },
      { label: "Introduce", description: "Say your name." },
    ],
    activities: [
      multipleChoice(
        "pt-l1-a1",
        {
          id: "pt-vocab-ola",
          term: "olá",
          translation: "hello",
          partOfSpeech: "greeting",
        },
        ["hello", "goodbye", "thank you", "please"],
        0,
      ),
      multipleChoice(
        "pt-l1-a2",
        {
          id: "pt-vocab-obrigado",
          term: "obrigado",
          translation: "thank you",
          partOfSpeech: "expression",
        },
        ["thank you", "please", "sorry", "yes"],
        0,
      ),
    ],
  },
  {
    id: "pt-lesson-2",
    unitId: "pt-unit-1",
    languageId: "pt",
    order: 1,
    title: "Polite words",
    subtitle: "Be polite and friendly.",
    xp: 10,
    goals: [
      { label: "Be polite", description: "Say por favor." },
      { label: "React", description: "Answer sim and não." },
    ],
    activities: [
      multipleChoice(
        "pt-l2-a1",
        {
          id: "pt-vocab-favor",
          term: "por favor",
          translation: "please",
          partOfSpeech: "expression",
        },
        ["please", "thank you", "sorry", "yes"],
        0,
      ),
      multipleChoice(
        "pt-l2-a2",
        {
          id: "pt-vocab-sim",
          term: "sim",
          translation: "yes",
          partOfSpeech: "adverb",
        },
        ["yes", "no", "maybe", "please"],
        0,
      ),
    ],
  },
  {
    id: "pt-lesson-3",
    unitId: "pt-unit-1",
    languageId: "pt",
    order: 2,
    title: "At the café",
    subtitle: "Order a coffee in Portuguese.",
    xp: 10,
    goals: [
      { label: "Order", description: "Ask for a coffee or tea." },
      { label: "Pay politely", description: "Thank the server." },
    ],
    activities: [
      multipleChoice(
        "pt-l3-a1",
        {
          id: "pt-vocab-cafe",
          term: "um café",
          translation: "a coffee",
          partOfSpeech: "noun",
        },
        ["a coffee", "a tea", "a water", "a juice"],
        0,
      ),
      multipleChoice(
        "pt-l3-a2",
        {
          id: "pt-vocab-conta",
          term: "a conta",
          translation: "the bill",
          partOfSpeech: "noun",
        },
        ["the bill", "the menu", "the chair", "the cup"],
        0,
      ),
    ],
  },
  {
    id: "pt-lesson-4",
    unitId: "pt-unit-1",
    languageId: "pt",
    order: 3,
    title: "Travel & directions",
    subtitle: "Find your way around.",
    xp: 10,
    goals: [
      { label: "Ask", description: "Ask where places are." },
      { label: "Understand", description: "Follow simple directions." },
    ],
    activities: [
      matchActivity(
        "pt-l4-a1",
        {
          id: "pt-vocab-onde",
          term: "onde",
          translation: "where",
          partOfSpeech: "adverb",
        },
        [
          { left: "onde", right: "where" },
          { left: "obrigado", right: "thank you" },
          { left: "olá", right: "hello" },
        ],
      ),
      multipleChoice(
        "pt-l4-a2",
        {
          id: "pt-vocab-estacao",
          term: "a estação",
          translation: "the station",
          partOfSpeech: "noun",
        },
        ["the station", "the airport", "the hotel", "the shop"],
        0,
      ),
    ],
  },
  {
    id: "pt-lesson-5",
    unitId: "pt-unit-1",
    languageId: "pt",
    order: 4,
    title: "Shopping",
    subtitle: "Buy what you need.",
    xp: 10,
    goals: [
      { label: "Ask price", description: "Use quanto custa." },
      { label: "Buy", description: "Request with eu quero." },
    ],
    activities: [
      multipleChoice(
        "pt-l5-a1",
        {
          id: "pt-vocab-quero",
          term: "eu quero",
          translation: "I want",
          partOfSpeech: "phrase",
        },
        ["I want", "I have", "I need", "I see"],
        0,
      ),
      multipleChoice(
        "pt-l5-a2",
        {
          id: "pt-vocab-quanto",
          term: "quanto",
          translation: "how much",
          partOfSpeech: "adverb",
        },
        ["how much", "how many", "where", "when"],
        0,
      ),
    ],
  },
  {
    id: "pt-lesson-6",
    unitId: "pt-unit-1",
    languageId: "pt",
    order: 5,
    title: "Family & friends",
    subtitle: "Talk about people you love.",
    xp: 10,
    goals: [
      { label: "Name family", description: "Say family words." },
      { label: "Describe", description: "Build simple sentences." },
    ],
    activities: [
      multipleChoice(
        "pt-l6-a1",
        {
          id: "pt-vocab-familia",
          term: "a família",
          translation: "the family",
          partOfSpeech: "noun",
        },
        ["the family", "the friend", "the teacher", "the house"],
        0,
      ),
      multipleChoice(
        "pt-l6-a2",
        {
          id: "pt-vocab-amigo",
          term: "o amigo",
          translation: "the friend",
          partOfSpeech: "noun",
        },
        ["the friend", "the family", "the dog", "the car"],
        0,
      ),
    ],
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
