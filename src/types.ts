/**
 * Types for the Wizard and Cat Interactive English Reader
 */

export interface VocabularyWord {
  word: string;
  phonetic: string;
  translation: string;
  chineseOnly: string;
  example: string;
  exampleTranslation: string;
  emojis: string;
}

export interface QuestionAnswer {
  questionEng: string;
  choices: string[];
  answerIndex: number;
  explanationEng: string;
  explanationZht: string;
}

export interface StorySection {
  id: number;
  titleEng: string;
  titleZht: string;
  paragraphs: string[];
  translationZht: string; // Traditional Chinese translation of the story section
  vocabulary: VocabularyWord[];
  qa: QuestionAnswer;
  sceneEmoji: string; // Cute emoji depiction of the scene
  illustrationPrompt: string; // Prompt description for readers
}

export interface Character {
  nameEng: string;
  nameZht: string;
  role: string;
  emoji: string;
  color: string; // Tailwind class
  introEng: string;
  introZht: string;
  secret: string; // Fun secret tip!
}
