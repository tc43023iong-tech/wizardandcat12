import React, { useState, useEffect, useMemo } from "react";
import { 
  Sparkles, 
  BookOpen, 
  Cat as CatIcon, 
  Wand2, 
  Trophy, 
  ArrowLeft, 
  ArrowRight, 
  Languages, 
  Volume2, 
  RotateCcw, 
  CheckCircle2, 
  Play, 
  Smile, 
  Users,
  Layers,
  ChevronRight,
  BookOpenCheck
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { STORY_SECTIONS, CHARACTERS } from "./data";
import { StorySection, VocabularyWord, Character } from "./types";
import { soundEffects } from "./utils/audio";

// Setup types for Sparkle Bursts
interface SparkleParticle {
  dx: number;
  dy: number;
  size: number;
  delay: number;
  char: string;
}

interface SparkleClick {
  id: number;
  x: number;
  y: number;
  sparklesList: SparkleParticle[];
}

const getInflectionPattern = (word: string): string => {
  const w = word.toLowerCase();
  if (w === "wake") return "\\b(wake|woke)\\b";
  if (w === "drop") return "\\b(drop|dropped|dropping|drops)\\b";
  if (w === "throw in") return "\\b(throw(\\s+sub)?\\s*in|thrown(\\s+sub)?\\s*in|throws(\\s+sub)?\\s*in|throwing(\\s+sub)?\\s*in|thrown)\\b";
  if (w === "hurry") return "\\b(hurry|hurried|hurries|hurrying)\\b";
  if (w === "bow") return "\\b(bow|bowed|bows|bowing)\\b";
  if (w === "whisper") return "\\b(whisper|whispered|whispering|whispers)\\b";
  if (w === "pat") return "\\b(pat|patted|pats|patting)\\b";
  if (w === "sob") return "\\b(sob|sobbed|sobs|sobbing)\\b";
  if (w === "blink") return "\\b(blink|blinked|blinks|blinking)\\b";
  if (w === "shrug") return "\\b(shrug|shrugged|shrugs|shrugging)\\b";
  if (w === "decide") return "\\b(decide|decided|decides|deciding)\\b";
  if (w === "catch") return "\\b(catch|caught|catches|catching)\\b";
  if (w === "clap") return "\\b(clap|clapped|claps|clapping)\\b";
  if (w === "wave") return "\\b(wave|waved|waves|waving)\\b";
  return `\\b${word}\\b`;
};

const renderStyledText = (text: string) => {
  const regex = /(Splash!|Ha-ha!|Poof!|Oh no!|Not the Grim Dungeon!|Grim Dungeon|Dungeon|Tom|Cat|Dirk|Princess Mary|Princess|princess|crocodile|moat|wailing|sobbed|shrugged|bowed|clapped|happily)/gi;
  const parts = text.split(regex);
  if (parts.length === 1) return <span>{text}</span>;

  return (
    <>
      {parts.map((part, idx) => {
        const lower = part.toLowerCase();
        if (lower === "splash!") {
          return (
            <span key={idx} className="text-[#0ea5e9] font-cute font-bold text-[1.4rem] inline-flex items-center gap-1 animate-bounce bg-sky-50 border border-sky-200 px-2.5 py-0.5 rounded-full shadow-sm mx-1">
              Splash! 💦
            </span>
          );
        }
        if (lower === "ha-ha!") {
          return (
            <span key={idx} className="text-red-500 font-cute font-bold text-[1.3rem] inline-flex items-center gap-1 bg-red-50 border border-red-200 px-2 py-0.5 rounded-2xl mx-1 select-none shadow-sm font-black animate-pulse">
              Ha-ha! 😈💥
            </span>
          );
        }
        if (lower === "poof!") {
          return (
            <span key={idx} className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-cute font-bold text-3xl px-3.5 py-1 rounded-[20px] shadow-lg border-2 border-white inline-block animate-bounce mx-1.5 select-none font-black ring-4 ring-purple-100">
              Poof! 💥✨
            </span>
          );
        }
        if (lower === "oh no!") {
          return (
            <span key={idx} className="text-orange-600 font-cute font-bold text-[1.35rem] inline-flex items-center gap-1 bg-orange-50 border border-orange-200 px-2 py-0.5 rounded-2xl mx-1 font-black animate-pulse">
              Oh no! 😨🚨
            </span>
          );
        }
        if (lower === "not the grim dungeon!") {
          return (
            <span key={idx} className="text-red-700 bg-red-100 font-mono font-black border-2 border-red-300 px-2 py-1 rounded-xl text-[1.1rem] mx-1 inline-flex items-center gap-1 tracking-wider animate-pulse shadow-sm">
              Not the Grim Dungeon! 💀🔒
            </span>
          );
        }
        if (lower === "grim dungeon") {
          return (
            <span key={idx} className="text-slate-800 bg-slate-100 font-mono font-bold border-2 border-slate-300 px-2 py-1 rounded-xl text-[1.1rem] mx-1 inline-flex items-center gap-1 tracking-wider">
              Grim Dungeon 💀🧊🔒
            </span>
          );
        }
        if (lower === "dungeon") {
          return (
            <span key={idx} className="text-slate-800 bg-slate-100 font-mono font-bold border-2 border-slate-300 px-2 py-1 rounded-xl text-[1.1rem] mx-1 inline-flex items-center gap-1 tracking-wider">
              Dungeon 🔒🗝️
            </span>
          );
        }
        if (lower === "tom") {
          return (
            <span key={idx} className="text-blue-600 bg-blue-50 border border-blue-200 px-2 py-0.5 rounded-xl font-cute font-bold text-[1.25rem] inline-flex items-center gap-1 mx-1 shadow-sm">
              Tom 🧙‍♂️
            </span>
          );
        }
        if (lower === "cat") {
          return (
            <span key={idx} className="text-amber-600 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-xl font-cute font-bold text-[1.25rem] inline-flex items-center gap-1 mx-1 shadow-sm">
              Cat 🐱
            </span>
          );
        }
        if (lower === "dirk") {
          return (
            <span key={idx} className="text-purple-700 bg-purple-50 border border-purple-200 px-2 py-0.5 rounded-xl font-cute font-bold text-[1.25rem] inline-flex items-center gap-1 mx-1 shadow-sm">
              Dirk 👤😈
            </span>
          );
        }
        if (lower === "princess mary" || lower === "princess" || lower === "mary") {
          return (
            <span key={idx} className="text-pink-600 bg-pink-50 border border-pink-200 px-2 py-0.5 rounded-xl font-cute font-bold text-[1.25rem] inline-flex items-center gap-1 mx-1 shadow-sm animate-pulse">
              Princess Mary 👸💖
            </span>
          );
        }
        if (lower === "crocodile") {
          return (
            <span key={idx} className="text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-xl font-cute font-bold text-[1.2rem] inline-flex items-center gap-1 mx-1 shadow-sm">
              crocodile 🐊
            </span>
          );
        }
        if (lower === "moat") {
          return (
            <span key={idx} className="text-cyan-700 font-cute font-bold text-[1.15rem] inline-flex items-center gap-1 bg-cyan-50 border border-cyan-100 px-2 py-0.5 rounded-xl mx-1 shadow-sm">
              moat 🏰🌊
            </span>
          );
        }
        if (lower === "wailing") {
          return (
            <span key={idx} className="text-pink-500 font-bold underline decoration-wavy decoration-pink-300 text-[1.15rem] inline-flex items-center gap-1 mx-1 animate-pulse">
              wailing 😭💦
            </span>
          );
        }
        if (lower === "sobbed") {
          return (
            <span key={idx} className="text-pink-500 font-bold font-cute italic text-[1.15rem] inline-flex items-center gap-1 mx-1">
              sobbed 😢🥺
            </span>
          );
        }
        if (lower === "shrugged") {
          return (
            <span key={idx} className="text-slate-500 font-cute text-[1.15rem] inline-flex items-center gap-1 mx-1">
              shrugged 🤷‍♂️
            </span>
          );
        }
        if (lower === "bowed") {
          return (
            <span key={idx} className="text-teal-600 font-cute font-bold text-[1.15rem] inline-flex items-center gap-1 mx-1 bg-teal-50 px-2 py-0.5 rounded-xl border border-teal-100 shadow-sm animate-pulse">
              bowed 🙇✨
            </span>
          );
        }
        if (lower === "clapped") {
          return (
            <span key={idx} className="text-yellow-600 font-cute font-black text-[1.25rem] inline-flex items-center gap-1 mx-1 bg-yellow-50 px-2 py-0.5 rounded-xl border border-yellow-200 shadow-sm animate-bounce">
              clapped 👏🎉
            </span>
          );
        }
        if (lower === "happily") {
          return (
            <span key={idx} className="text-amber-500 font-cute font-bold text-[1.2rem] inline-flex items-center gap-1 mx-1 animate-pulse">
              happily 😊🎈
            </span>
          );
        }
        return <span key={idx}>{part}</span>;
      })}
    </>
  );
};

export default function App() {
  // Navigation & Core States
  const [activeTab, setActiveTab ] = useState<"book" | "game">("book");
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [showZhtStory, setShowZhtStory] = useState<{ [key: number]: boolean }>({});
  
  // Quiz states for the book
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: number }>({});
  const [isAnswerRevealed, setIsAnswerRevealed] = useState<{ [key: number]: boolean }>({});
  const [quizScore, setQuizScore] = useState<{ [key: number]: boolean }>({}); // tracks correct/incorrect
  
  // Vocabulary popup overlay state
  const [activeVocab, setActiveVocab] = useState<VocabularyWord | null>(null);
  
  // Characters interactive index
  const [activeCharacter, setActiveCharacter] = useState<number>(0);

  // Click Sparkles State
  const [sparkles, setSparkles] = useState<SparkleClick[]>([]);

  // Sound TTS support
  const [ttsSupported, setTtsSupported] = useState<boolean>(true);

  // Game Hub States
  const [hasReviewedVocab, setHasReviewedVocab] = useState<boolean>(false);

  // Ladder Game (爬爬梯) States
  const ladderPlayers = [
    { name: "湯姆 🧙‍♂️", emoji: "🧙‍♂️", color: "bg-blue-500", ringColor: "ring-blue-100" },
    { name: "灰灰 🐱", emoji: "🐱", color: "bg-amber-500", ringColor: "ring-amber-100" },
    { name: "公主 👸", emoji: "👸", color: "bg-pink-500", ringColor: "ring-pink-100" },
    { name: "鱷魚 🐊", emoji: "🐊", color: "bg-emerald-500", ringColor: "ring-emerald-100" }
  ];
  const [ladderSteps, setLadderSteps] = useState<number[]>([0, 0, 0, 0]); // positions on ladder (0 to 10)
  const [ladderQuestionIndex, setLadderQuestionIndex] = useState<number[]>([0, 0, 0, 0]); // how many questions asked (up to 10)
  const [ladderGameCompleted, setLadderGameCompleted] = useState<boolean>(false);
  const [ladderResults, setLadderResults] = useState<Array<{ name: string; emoji: string; score: number }>>([]);

  // Setup TTS check
  useEffect(() => {
    if (!('speechSynthesis' in window)) {
      setTtsSupported(false);
    }
  }, []);

  // Global Sparkle Particle Trigger on Click
  useEffect(() => {
    const handleGlobalClick = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      const id = Date.now() + Math.random();
      
      const starIcons = ["⭐", "✨", "🌟", "🪄", "💫", "✨"];
      const particles: SparkleParticle[] = Array.from({ length: 6 }).map((_, idx) => {
        const angle = (idx * 360) / 6 + Math.random() * 20;
        const rad = (angle * Math.PI) / 180;
        const distance = 20 + Math.random() * 35;
        return {
          dx: Math.cos(rad) * distance,
          dy: Math.sin(rad) * distance,
          size: 14 + Math.random() * 10,
          delay: Math.random() * 0.08,
          char: starIcons[Math.floor(Math.random() * starIcons.length)]
        };
      });

      setSparkles(prev => [...prev, { id, x, y, sparklesList: particles }]);
      
      setTimeout(() => {
        setSparkles(prev => prev.filter(s => s.id !== id));
      }, 800);
    };

    window.addEventListener("mousedown", handleGlobalClick);
    return () => {
      window.removeEventListener("mousedown", handleGlobalClick);
    };
  }, []);

  const currentSection = useMemo(() => STORY_SECTIONS[currentPage], [currentPage]);

  // Handle single word speech
  const speakWord = (word: string) => {
    if (!ttsSupported) return;
    try {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(word);
      utterance.lang = "en-US";
      utterance.rate = 0.75;
      window.speechSynthesis.speak(utterance);
    } catch (e) {
      console.error(e);
    }
  };

  // Dynamic progress calculated
  const questionsAnsweredCount = Object.keys(isAnswerRevealed).length;
  const progressPercent = Math.min((questionsAnsweredCount / STORY_SECTIONS.length) * 100, 100);
  const scoreCount = Object.values(quizScore).filter(Boolean).length;

  const getMagicalTitle = () => {
    if (scoreCount <= 3) return { title: "🌟 Apprentice Wizard 魔法小學徒", color: "text-blue-500 bg-blue-50" };
    if (scoreCount <= 6) return { title: "🪄 Royal Assistant 皇家助理巫師", color: "text-amber-600 bg-amber-50" };
    if (scoreCount <= 9) return { title: "🔮 Palace Conjurer 王宮大咒術師", color: "text-purple-600 bg-purple-50" };
    return { title: "👑 The Best Royal Wizard Ever! 史上最棒皇家大法師 🧙‍♂️✨", color: "text-rose-600 bg-rose-50 border border-rose-200 animate-pulse" };
  };

  const handleSelectOption = (idx: number) => {
    if (isAnswerRevealed[currentPage]) return;
    setSelectedAnswers(prev => ({
      ...prev,
      [currentPage]: idx
    }));
    soundEffects.playMagicChime();
  };

  const handleRevealAnswer = () => {
    const isCorrect = selectedAnswers[currentPage] === currentSection.qa.answerIndex;
    setIsAnswerRevealed(prev => ({
      ...prev,
      [currentPage]: true
    }));
    setQuizScore(prev => ({
      ...prev,
      [currentPage]: isCorrect
    }));

    if (isCorrect) {
      soundEffects.playCorrectAnswer();
    } else {
      soundEffects.playWrongAnswer();
    }
  };

  const handleNextPage = () => {
    if (currentPage < STORY_SECTIONS.length - 1) {
      setCurrentPage(prev => prev + 1);
      soundEffects.playPageFlip();
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(prev => prev - 1);
      soundEffects.playPageFlip();
    }
  };

  const handleReset = () => {
    setCurrentPage(0);
    setSelectedAnswers({});
    setIsAnswerRevealed({});
    setQuizScore({});
    setShowZhtStory({});
    setActiveVocab(null);
    setHasReviewedVocab(false);
    setLadderSteps([0, 0, 0, 0]);
    setLadderQuestionIndex([0, 0, 0, 0]);
    setLadderGameCompleted(false);
    setLadderResults([]);
    soundEffects.playPageFlip();
  };

  // Render paragraphs with highlighted inline translations: exactWord (Chinese)
  const renderParagraphWithHighlights = (text: string, vocabList: VocabularyWord[]) => {
    let elements: React.ReactNode[] = [];
    let remainingText = text;
    let keyIndex = 0;

    const sortedVocab = [...vocabList].sort((a, b) => b.word.length - a.word.length);

    while (remainingText.length > 0) {
      let foundIndex = -1;
      let matchedLength = 0;
      let matchedVocab: VocabularyWord | null = null;

      for (let vocab of sortedVocab) {
        const pattern = getInflectionPattern(vocab.word);
        const regex = new RegExp(pattern, 'i');
        const match = remainingText.match(regex);
        
        if (match && match.index !== undefined) {
          if (foundIndex === -1 || match.index < foundIndex) {
            foundIndex = match.index;
            matchedLength = match[0].length;
            matchedVocab = vocab;
          }
        }
      }

      if (foundIndex !== -1 && matchedVocab) {
        if (foundIndex > 0) {
          elements.push(
            <span key={`text-${keyIndex++}`}>
              {renderStyledText(remainingText.substring(0, foundIndex))}
            </span>
          );
        }

        const exactWord = remainingText.substring(foundIndex, foundIndex + matchedLength);
        const finalVocab = matchedVocab;

        elements.push(
          <button
            key={`vocab-${keyIndex++}`}
            onClick={(e) => {
              e.stopPropagation(); // let click trigger local sparkles instead of just overlay
              setActiveVocab(finalVocab);
              speakWord(finalVocab.word);
              soundEffects.playMagicChime();
            }}
            className="vocab-orange inline-flex items-center gap-1 mx-1.5 px-2 py-0.5 rounded-xl border border-orange-200 bg-orange-50/80 hover:bg-orange-100/90 text-2xl font-black shadow-sm"
          >
            {exactWord}
            <span className="text-sm font-sans font-medium text-slate-500 bg-white px-1.5 py-0.5 rounded-md border border-slate-100">
              {finalVocab.chineseOnly}
            </span>
          </button>
        );

        remainingText = remainingText.substring(foundIndex + matchedLength);
      } else {
        elements.push(
          <span key={`text-${keyIndex++}`}>
            {renderStyledText(remainingText)}
          </span>
        );
        break;
      }
    }

    return <p className="text-2xl leading-relaxed text-slate-800 font-display tracking-wide flex flex-wrap items-center">{elements}</p>;
  };

  // Generate active questions for all 4 players synchronously
  const activeLadderQuizzes = useMemo(() => {
    return Array.from({ length: 4 }).map((_, playerIdx) => {
      const questionNo = ladderQuestionIndex[playerIdx];
      // Core 10 English vocabulary items from our 10 sections
      // Give each player a unique starting offset so they don't look at the exact same question
      const baseVocabIndex = (questionNo + playerIdx * 2) % 10;
      const baseSection = STORY_SECTIONS[baseVocabIndex];
      const correctVocab = baseSection.vocabulary[0];

      // Choose two other random distractors deterministically
      const distractors = STORY_SECTIONS
        .map(sec => sec.vocabulary[0])
        .filter(v => v.word !== correctVocab.word);
      
      // Shuffle distractors deterministically based on question number and player index
      const seed = questionNo * 13 + playerIdx * 7;
      const dist1 = distractors[seed % distractors.length];
      const dist2 = distractors[(seed + 3) % distractors.length];

      // Combine choices and sort alphabetically for a neat aesthetic, forced to lowercase
      const choices = Array.from(new Set([
        correctVocab.word.toLowerCase(), 
        dist1.word.toLowerCase(), 
        dist2.word.toLowerCase()
      ])).sort();
      // Ensure we always have exactly 3 options, if duplicate selected, grab another from distractors
      if (choices.length < 3) {
        distractors.forEach(val => {
          const wLower = val.word.toLowerCase();
          if (choices.length < 3 && !choices.includes(wLower)) {
            choices.push(wLower);
          }
        });
        choices.sort();
      }

      const correctIdx = choices.indexOf(correctVocab.word.toLowerCase());

      return {
        chinesePrompt: correctVocab.chineseOnly, // Already formatted as "（中文）" in data.ts
        choices,
        correctIdx,
        wordObj: correctVocab
      };
    });
  }, [ladderQuestionIndex]);

  // Handle Ladder Game option clicks synchronously for any player
  const handleAnswerLadderQuizSync = (playerIdx: number, optionIdx: number) => {
    if (ladderGameCompleted) return;

    const quiz = activeLadderQuizzes[playerIdx];
    const isCorrect = optionIdx === quiz.correctIdx;

    let updatedSteps = [...ladderSteps];
    let updatedQuestions = [...ladderQuestionIndex];

    if (isCorrect) {
      updatedSteps[playerIdx] = Math.min(updatedSteps[playerIdx] + 1, 10);
      soundEffects.playCorrectAnswer();
    } else {
      soundEffects.playWrongAnswer();
    }

    updatedQuestions[playerIdx] += 1;

    setLadderSteps(updatedSteps);
    setLadderQuestionIndex(updatedQuestions);

    // Check if ALL participants are finished
    const isAllFinished = updatedQuestions.every((qCount, pIdx) => qCount === 10 || updatedSteps[pIdx] === 10);

    if (isAllFinished) {
      setLadderGameCompleted(true);
      // Construct final ranking results
      const results = ladderPlayers.map((player, idx) => ({
        name: player.name,
        emoji: player.emoji,
        score: updatedSteps[idx]
      })).sort((a, b) => b.score - a.score);
      setLadderResults(results);
    }
  };

  const currentMagicalState = getMagicalTitle();

  return (
    <div className="min-h-screen bg-canvas py-6 px-4 font-sans select-none overflow-x-hidden relative">
      
      {/* Background Magical Bubbles / Floating Emojis */}
      <div className="absolute top-10 left-10 text-4xl opacity-10 animate-bounce-slow pointer-events-none">🧙‍♂️</div>
      <div className="absolute top-1/4 right-12 text-4xl opacity-10 animate-bounce-slow pointer-events-none duration-1000">✨</div>
      <div className="absolute bottom-1/4 left-16 text-4xl opacity-10 animate-bounce-slow pointer-events-none duration-2500">🐈</div>
      <div className="absolute bottom-10 right-10 text-4xl opacity-10 animate-bounce-slow pointer-events-none">👑</div>

      {/* FIXED CONTAINER FOR RENDER SPARKLES CLICK EFFECTS */}
      <div className="fixed inset-0 pointer-events-none z-[99999] overflow-hidden">
        {sparkles.map(s => (
          <div key={s.id} className="absolute" style={{ left: s.x, top: s.y }}>
            {s.sparklesList.map((sp, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 1, scale: 0, x: 0, y: 0 }}
                animate={{ 
                  opacity: [1, 1, 0], 
                  scale: [0.5, 1.3, 0], 
                  x: sp.dx, 
                  y: sp.dy 
                }}
                transition={{ duration: 0.75, ease: "easeOut", delay: sp.delay }}
                className="absolute select-none pointer-events-none"
                style={{ 
                  fontSize: `${sp.size}px`,
                  textShadow: "0 0 6px rgba(251, 146, 60, 0.8)"
                }}
              >
                {sp.char}
              </motion.span>
            ))}
          </div>
        ))}
      </div>

      {/* Core Book Reading & Game Suite */}
      <div className="max-w-7xl mx-auto space-y-6">

        {/* APP SWITCHING NAVIGATION TAB HEADERS (Story Book vs. Magical Games) */}
        <div className="bg-white rounded-3xl p-3 shadow-md border-2 border-[#E0F2FE] flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-3xl animate-pulse">🧙‍♂️</span>
            <span className="font-cute font-black text-orange-500 text-sm sm:text-lg md:text-xl tracking-tight">
              Wizard and Cat 12: The Best Royal Wizard Ever
            </span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                setActiveTab("book");
                soundEffects.playPageFlip();
              }}
              className={`px-6 py-2.5 rounded-2xl font-bold flex items-center gap-2 transition-all duration-300 cursor-pointer ${
                activeTab === "book"
                  ? "bg-blue-600 text-white shadow-md shadow-blue-100"
                  : "bg-slate-50 text-slate-600 hover:bg-slate-100"
              }`}
            >
              <BookOpen className="w-5 h-5" />
              <span>📖 閱讀互動繪本</span>
            </button>
            
            <button
              onClick={() => {
                setActiveTab("game");
                soundEffects.playPageFlip();
              }}
              className={`px-6 py-2.5 rounded-2xl font-bold flex items-center gap-2 transition-all duration-300 cursor-pointer ${
                activeTab === "game"
                  ? "bg-amber-500 text-white shadow-md shadow-amber-100"
                  : "bg-slate-50 text-slate-600 hover:bg-slate-100"
              }`}
            >
              <Trophy className="w-5 h-5 animate-bounce" />
              <span>🎮 英語魔法遊戲中心</span>
            </button>
          </div>
          <div>
            <button 
              onClick={handleReset}
              className="text-xs bg-slate-100 hover:bg-red-50 hover:text-red-600 font-extrabold px-3 py-2 rounded-xl transition-colors cursor-pointer border border-transparent"
            >
              重新開始 🏠
            </button>
          </div>
        </div>

          {activeTab === "book" ? (
            /* ================= READING MODE VIEW ================= */
            <div className="space-y-6">
              
              {/* Progress Banner & Magical Rank at Top */}
              <div className="card-minimalist p-4 md:p-5 flex flex-col md:flex-row items-center justify-between gap-4">
                
                <div className="flex items-center gap-3 w-full md:w-auto">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-2xl wizard-floating shadow-md border-2 border-slate-100">
                    🧙‍♂️
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">Magical Accomplishment</div>
                    <div className="flex items-center gap-2">
                      <span className="font-display font-black text-slate-800 text-lg">學習魔法進度條 (Progress)</span>
                      <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-2 py-0.5 rounded-full">
                        第 {currentPage + 1} 頁
                      </span>
                    </div>
                  </div>
                </div>

                {/* Middle: Progress Fill Engine */}
                <div className="flex-1 w-full max-w-md">
                  <div className="flex justify-between text-xs font-bold text-slate-500 mb-1">
                    <span>解答挑戰：{questionsAnsweredCount} / 10 關</span>
                    <span>獲得綠星硬幣：{scoreCount} 🪙</span>
                  </div>
                  <div className="w-full h-6 bg-[#E2E8F0] rounded-full overflow-hidden border-3 border-white shadow-[0_2px_4px_rgba(0,0,0,0.1)] relative">
                    
                    {/* Fill bar */}
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${progressPercent}%` }}
                      transition={{ duration: 0.5 }}
                      className="bg-gradient-to-r from-[#4ADE80] to-[#22C55E] h-full rounded-full shadow-inner relative"
                    />

                    {/* Animated Gold Star Indicator traveling along progress */}
                    {progressPercent > 0 && (
                      <motion.div 
                        animate={{ left: `calc(${progressPercent}% - 8px)` }}
                        transition={{ type: "spring", stiffness: 80 }}
                        className="absolute top-1/2 -translate-y-1/2 text-sm select-none pointer-events-none"
                      >
                        ⭐
                      </motion.div>
                    )}
                  </div>
                </div>

                {/* Right: Magical Rank Badge */}
                <div className="flex items-center gap-2">
                  <span className={`text-sm md:text-base font-extrabold px-3 py-2 rounded-2xl ${currentMagicalState.color} transition-all duration-300 shadow-sm`}>
                    {currentMagicalState.title}
                  </span>
                  <button 
                    onClick={handleReset}
                    title="重新開始學英語"
                    className="p-2.5 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition-colors cursor-pointer border border-transparent hover:border-red-100 active:scale-95"
                  >
                    <RotateCcw className="w-5 h-5" />
                  </button>
                </div>

              </div>

              {/* Quick Page Navigator Bubble Dock */}
              <div className="flex items-center justify-start gap-1 md:gap-2 overflow-x-auto py-2 px-1 scrollbar-thin select-none max-w-full">
                <span className="text-slate-500 font-bold text-xs whitespace-nowrap mr-2 flex items-center gap-1">
                  <BookOpen className="w-3.5 h-3.5 text-blue-500" /> 章節快跳:
                </span>
                {STORY_SECTIONS.map((sec, i) => {
                  const quizCompleted = isAnswerRevealed[i];
                  const quizCorrect = quizScore[i];
                  const isCurrent = currentPage === i;

                  return (
                    <button
                      key={sec.id}
                      onClick={() => {
                        setCurrentPage(i);
                        soundEffects.playMagicChime();
                      }}
                      className={`relative flex items-center justify-center w-11 h-11 rounded-full font-display font-extrabold cursor-pointer transition-all duration-300 transform hover:scale-105 active:scale-95 ${
                        isCurrent 
                          ? "bg-blue-600 text-white shadow-md scale-110 border-2 border-amber-300 ring-2 ring-blue-200" 
                          : quizCompleted 
                            ? quizCorrect
                              ? "bg-emerald-100 text-emerald-800 border-2 border-emerald-300"
                              : "bg-red-50 text-red-700 border-2 border-red-200"
                            : "bg-white text-slate-600 hover:bg-slate-50 border border-slate-200 hover:border-slate-300"
                      }`}
                    >
                      {sec.id}
                      {/* Small check icon if solved */}
                      {quizCompleted && (
                        <span className="absolute -top-1.5 -right-1.5 text-[10px] w-4.5 h-4.5 rounded-full flex items-center justify-center text-white font-bold bg-emerald-500 border border-white shadow-sm">
                          ✓
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Main Story Board Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                
                {/* LEFT AREA: PAGE STORY MODULE (Takes 7/12 Grid) */}
                <div className="lg:col-span-12 xl:col-span-7 flex flex-col gap-5">
                  
                  <div className="card-minimalist p-6 md:p-8 relative overflow-hidden flex flex-col justify-between min-h-[460px]">
                    
                    {/* Tiny castle watermark inside card */}
                    <div className="absolute right-4 bottom-4 text-9xl opacity-5 pointer-events-none select-none">🏰</div>

                    {/* Section Title with PURE ENGLISH (Chinese Translation for title completely removed) */}
                    <div className="border-b border-dashed border-slate-100 pb-4 mb-4 flex items-center justify-between">
                      <div>
                        <h2 className="text-3xl font-display font-black text-blue-900 leading-tight">
                          {currentPage + 1}. {currentSection.titleEng}
                        </h2>
                      </div>

                      {/* Scene Emoji Art Badge */}
                      <div className="bg-amber-50 px-3 py-1.5 rounded-2xl border border-amber-200 text-lg font-mono flex items-center gap-1 select-none" title="本頁冒險場景">
                        {currentSection.sceneEmoji}
                      </div>
                    </div>

                    {/* Main Story Paragraphs containing Orange Clickable Vocabulary words with inline parentheses */}
                    <div className="flex-1 space-y-6 my-4 relative">
                      {currentSection.paragraphs.map((p, pIndex) => (
                        <div key={pIndex} className="flex items-start gap-2.5">
                          <span className="text-sm bg-blue-50 text-blue-400 font-mono w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-1.5">
                            {pIndex + 1}
                          </span>
                          <div className="w-full">
                            {renderParagraphWithHighlights(p, currentSection.vocabulary)}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Traditional Chinese Translation panel (Animated Toggle) */}
                    <AnimatePresence>
                      {showZhtStory[currentPage] && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="bg-emerald-50/70 border border-emerald-100 rounded-2xl p-4 my-2 text-slate-700 text-base md:text-lg leading-relaxed font-sans relative"
                        >
                          <div className="absolute right-3 top-3 text-[10px] bg-emerald-200 text-emerald-800 font-extrabold px-2 py-0.5 rounded-full uppercase">
                            繁中對照
                          </div>
                          {currentSection.translationZht.split('\n').map((line, idx) => (
                            <p key={idx} className="mb-1">{line}</p>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Control Action Toolbar */}
                    <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 bg-slate-50/50 p-2 rounded-2xl">
                      
                      {/* Left: Translation helpers */}
                      <div className="flex items-center gap-2.5">
                        <button
                          id="translate-zht-toggle-btn"
                          onClick={() => {
                            setShowZhtStory(prev => ({
                              ...prev,
                              [currentPage]: !prev[currentPage]
                            }));
                            soundEffects.playMagicChime();
                          }}
                          className={`btn-translate-minimalist flex items-center gap-2 ${
                            showZhtStory[currentPage] 
                              ? "!bg-[#22C55E] !text-white !border-emerald-700" 
                              : ""
                          }`}
                        >
                          <Languages className="w-4 h-4" />
                          {showZhtStory[currentPage] ? "隱藏中文翻譯" : "對照繁體中文 🌟"}
                        </button>
                      </div>

                      {/* Right: Back & Next Page slide triggers */}
                      <div className="flex items-center gap-2.5">
                        <button
                          id="prev-page-pointer-btn"
                          onClick={handlePrevPage}
                          disabled={currentPage === 0}
                          className={`p-2.5 rounded-full border transition-all cursor-pointer ${
                            currentPage === 0 
                              ? "text-slate-300 border-slate-100 bg-slate-50 cursor-not-allowed" 
                              : "text-blue-700 border-blue-200 bg-white hover:bg-blue-50 hover:scale-105 active:scale-95"
                          }`}
                          title="上一段故事"
                        >
                          <ArrowLeft className="w-5 h-5" />
                        </button>

                        <span className="font-mono text-slate-500 text-sm font-bold">
                          {currentPage + 1} / 10
                        </span>

                        <button
                          id="next-page-pointer-btn"
                          onClick={handleNextPage}
                          disabled={currentPage === STORY_SECTIONS.length - 1}
                          className={`p-2.5 rounded-full border transition-all cursor-pointer ${
                            currentPage === STORY_SECTIONS.length - 1 
                              ? "text-slate-300 border-slate-100 bg-slate-50 cursor-not-allowed" 
                              : "text-blue-700 border-blue-200 bg-white hover:bg-blue-50 hover:scale-105 active:scale-95"
                          }`}
                          title="下一段故事"
                        >
                          <ArrowRight className="w-5 h-5" />
                        </button>
                      </div>

                    </div>

                  </div>
                  
                </div>

                {/* RIGHT AREA: QUESTION & ANSWER PANEL (Takes 5/12 Grid) */}
                <div className="lg:col-span-12 xl:col-span-5 flex flex-col gap-5">
                  
                  {/* Question Widget Section */}
                  <div className="card-minimalist p-6 flex flex-col justify-between min-h-[460px]">
                    
                    <div>
                      {/* Badge */}
                      <div className="flex items-center justify-between mb-4 pb-2 border-b border-emerald-50">
                        <span className="flex items-center gap-1.5 text-sm font-bold text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full">
                          <Sparkles className="w-4 h-4 text-emerald-600" />
                          互動 Q&A 問答挑戰
                        </span>
                        <span className="text-xs font-mono text-slate-400">
                          Score: {scoreCount} / 10
                        </span>
                      </div>

                      {/* Question (Simple English, Chinese is completely deleted) */}
                      <div className="space-y-3 mb-6">
                        <h3 className="text-2xl font-display font-black text-slate-800 leading-snug">
                          🤔 {currentSection.qa.questionEng}
                        </h3>
                      </div>

                      {/* Multi-choice items */}
                      <div className="space-y-3">
                        {currentSection.qa.choices.map((choice, idx) => {
                          const isSelected = selectedAnswers[currentPage] === idx;
                          const isRevealed = isAnswerRevealed[currentPage];
                          const isOptionCorrect = currentSection.qa.answerIndex === idx;

                          let choiceStyle = "bg-slate-50 text-slate-700 hover:bg-slate-100 border-slate-200";
                          
                          if (isSelected) {
                            choiceStyle = "bg-blue-50 text-blue-900 border-blue-400 ring-2 ring-blue-100";
                          }
                          
                          if (isRevealed) {
                            if (isOptionCorrect) {
                              choiceStyle = "bg-emerald-100 text-emerald-950 border-emerald-500 font-semibold ring-2 ring-emerald-200";
                            } else if (isSelected) {
                              choiceStyle = "bg-red-50 text-red-950 border-red-300 line-through decoration-red-400";
                            } else {
                              choiceStyle = "opacity-50 bg-slate-50 text-slate-400 border-slate-100";
                            }
                          }

                          return (
                            <button
                              key={idx}
                              onClick={() => handleSelectOption(idx)}
                              disabled={isRevealed}
                              className={`w-full text-left px-4 py-3.5 rounded-2xl border text-sm md:text-base font-medium transition-all duration-200 cursor-pointer flex items-center justify-between ${choiceStyle}`}
                            >
                              <span className="flex items-center gap-2.5">
                                <span className="w-7 h-7 rounded-full bg-white flex items-center justify-center font-black border text-xs text-slate-500 shrink-0">
                                  {String.fromCharCode(65 + idx)}
                                </span>
                                <span>{choice}</span>
                              </span>
                              
                              {/* Reveal decorations */}
                              {isRevealed && isOptionCorrect && (
                                <span className="text-emerald-600 text-sm font-bold">✓ 正確</span>
                              )}
                              {isRevealed && isSelected && !isOptionCorrect && (
                                <span className="text-red-500 text-sm font-bold">✗ 答錯</span>
                              )}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Revealing Answers Panel */}
                    <div className="mt-6 pt-4 border-t border-slate-100">
                      <AnimatePresence>
                        {isAnswerRevealed[currentPage] ? (
                          /* Revealed state */
                          <motion.div 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className={`rounded-2xl p-4 border ${
                              selectedAnswers[currentPage] === currentSection.qa.answerIndex
                                ? "bg-emerald-50/90 border-emerald-200 text-emerald-950"
                                : "bg-[#FEF2F2] border-red-200 text-red-950"
                            }`}
                          >
                            <div className="flex items-center gap-2 font-bold mb-2">
                              {selectedAnswers[currentPage] === currentSection.qa.answerIndex ? (
                                <span className="text-emerald-700 flex items-center gap-1 text-sm bg-emerald-100 px-2 py-0.5 rounded-md">
                                  🎉 Correct Answer 答對了！
                                </span>
                              ) : (
                                <span className="text-red-700 flex items-center gap-1 text-sm bg-red-100 px-2 py-0.5 rounded-md">
                                  💡 Answer Keys 答案解密！
                                </span>
                              )}
                            </div>

                            <div className="space-y-1 my-2">
                              <p className="font-display font-extrabold text-lg">
                                🔑 {currentSection.qa.choices[currentSection.qa.answerIndex]}
                              </p>
                              <p className="text-slate-500 font-medium text-sm pl-4 border-l-2 border-slate-300">
                                {currentSection.qa.explanationZht}
                              </p>
                            </div>

                            <div className="text-xs text-slate-500 mt-2 bg-white/60 p-2 text-left rounded-xl border border-slate-100 leading-relaxed font-sans">
                              {currentSection.qa.explanationEng}
                            </div>
                          </motion.div>
                        ) : (
                          /* Interactive green button on click check */
                          <motion.button
                            onClick={handleRevealAnswer}
                            disabled={selectedAnswers[currentPage] === undefined}
                            whileHover={{ scale: selectedAnswers[currentPage] !== undefined ? 1.02 : 1 }}
                            whileTap={{ scale: selectedAnswers[currentPage] !== undefined ? 0.98 : 1 }}
                            className={`w-full font-black text-lg tracking-wider text-center flex items-center justify-center gap-2 cursor-pointer transition-all duration-300 ${
                              selectedAnswers[currentPage] !== undefined
                                ? "btn-answer-3d"
                                : "bg-slate-100 text-slate-400 cursor-not-allowed border-2 border-slate-200 rounded-[999px] py-3.5"
                            }`}
                          >
                            <span>點擊綠色按鈕看答案 🌟</span>
                          </motion.button>
                        )}
                      </AnimatePresence>
                    </div>

                  </div>

                </div>

              </div>

            </div>
          ) : (
            /* ================= GAME CENTER VIEW ================= */
            <div className="space-y-6">
              
              {!hasReviewedVocab ? (
                /* STEP 1: WORD REVIEW FLASHCARDS ("單詞：先給word list版面他們複習！") */
                <div className="card-minimalist p-6 md:p-8 space-y-6">
                  <div className="text-center max-w-2xl mx-auto space-y-2 mb-4">
                    <span className="text-xs font-mono text-orange-600 font-black uppercase bg-orange-100 px-3 py-1 rounded-full">
                      Step 1 of 2: Warm-up! 📚
                    </span>
                    <h2 className="text-3xl md:text-4xl font-display font-black text-slate-800">
                      🧙‍♂️ 魔法單字複習大本營
                    </h2>
                    <p className="text-slate-500 font-medium text-sm md:text-base">
                      先認真複習這10個重要的英文單字與中文，就能解鎖下面的大闖關遊戲喔！點擊卡片聽聽神奇發音：
                    </p>
                  </div>

                  {/* Revision interactive grid layout */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    {STORY_SECTIONS.map((sec) => {
                      const vocab = sec.vocabulary[0];
                      return (
                        <motion.button
                          key={vocab.word}
                          whileHover={{ scale: 1.04 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => {
                            speakWord(vocab.word);
                            soundEffects.playMagicChime();
                          }}
                          className="bg-white hover:bg-orange-50/40 border-2 border-slate-200 hover:border-orange-400 p-4 rounded-2xl shadow-sm text-left transition-all cursor-pointer flex flex-col justify-between h-44 group relative"
                        >
                          <div className="absolute right-3 top-3 text-2xl opacity-80 shrink-0 group-hover:scale-125 transition-transform">
                            {vocab.emojis.split(" ")[0]}
                          </div>
                          
                          <div>
                            <span className="text-xs text-orange-600 bg-orange-50 font-bold px-2 py-0.5 rounded-full">
                              No. {sec.id}
                            </span>
                            <h3 className="text-xl font-display font-black text-orange-600 tracking-wide mt-2 block break-all">
                              {vocab.word}
                            </h3>
                            <p className="text-xs font-mono text-slate-400 mt-0.5">
                              KK {vocab.phonetic}
                            </p>
                          </div>
                          
                          <div className="border-t border-slate-100 pt-2 shrink-0">
                            <p className="text-sm font-sans font-black text-slate-800">
                              {vocab.chineseOnly}
                            </p>
                            <span className="text-[10px] text-slate-400 flex items-center gap-1 mt-0.5">
                              🔊 點擊播發音
                            </span>
                          </div>
                        </motion.button>
                      );
                    })}
                  </div>

                  <div className="text-center pt-4">
                    <motion.button
                      onClick={() => {
                        setHasReviewedVocab(true);
                      }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.96 }}
                      className="px-10 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-black text-xl rounded-full shadow-lg border-3 border-white flex items-center gap-2 mx-auto cursor-pointer"
                    >
                      <span>🎉 我已經複習完成了，開始魔法挑戰！</span>
                    </motion.button>
                  </div>
                </div>
              ) : (
                /* STEP 2: ACTIVE GAME CENTER WITH 4-PLAYER SYNCHRONOUS LADDERS */
                <div className="space-y-6">
                  
                  {/* Header info badge and stats */}
                  <div className="p-5 md:p-6 rounded-[28px] bg-gradient-to-r from-[#FAF5FF] via-[#F5F3FF] to-[#EFF6FF] border-2 border-purple-100 flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <span className="text-4xl animate-bounce">🧗</span>
                      <div className="text-left">
                        <h3 className="text-xl md:text-2xl font-cute font-bold text-slate-800 leading-tight">
                          四人魔法爬爬梯同步大挑戰 (4-Player Synchronous Rope Challenge)
                        </h3>
                        <p className="text-slate-500 text-xs font-sans mt-0.5">
                          中英對照題！四位玩家同時答題向上攀爬！看誰最快爬到最頂樓 (Floor 10) 吧！
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => {
                          setLadderSteps([0, 0, 0, 0]);
                          setLadderQuestionIndex([0, 0, 0, 0]);
                          setLadderGameCompleted(false);
                          setLadderResults([]);
                          soundEffects.playCorrectAnswer();
                        }}
                        className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold rounded-xl transition-all cursor-pointer shadow-sm"
                      >
                        🔁 重新挑戰 (Restart)
                      </button>
                      <button
                        onClick={() => setHasReviewedVocab(false)}
                        className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-xl transition-all cursor-pointer"
                      >
                        📚 重新單字複習
                      </button>
                    </div>
                  </div>

                  {/* LADDERS CONTAINER WITH INTEGRATED INDEPENDENT ANSWER CONTROLS */}
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 bg-slate-50 p-4 rounded-[32px] border border-slate-100">
                    {ladderPlayers.map((player, pIdx) => {
                      const hasFinished = ladderSteps[pIdx] === 10 || ladderQuestionIndex[pIdx] === 10;
                      const activeQuiz = activeLadderQuizzes[pIdx];
                      
                      return (
                        <div 
                          key={player.name} 
                          className={`flex flex-col justify-between items-center bg-white p-4 rounded-3xl border-2 transition-all min-h-[580px] shadow-sm relative ${
                            hasFinished 
                              ? "border-emerald-200 bg-emerald-50/10" 
                              : "border-slate-100 hover:border-purple-200"
                          }`}
                        >
                          
                          {/* Top finished check banner */}
                          <div className="text-center w-full">
                            <span className="text-xs bg-slate-100 text-slate-500 font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                              Player {pIdx + 1}
                            </span>
                            <div className="flex items-center justify-center gap-1 mt-1.5">
                              <span className="text-xl select-none">{player.emoji}</span>
                              <span className="text-base font-black text-slate-800">{player.name}</span>
                            </div>
                            <span className="text-xs font-mono text-slate-400 mt-1 block">
                              目前：第 <strong className="text-purple-600 font-extrabold">{ladderSteps[pIdx]}</strong> / 10 階
                            </span>
                            
                            {hasFinished && (
                              <span className="text-xs bg-emerald-100 text-emerald-800 font-extrabold px-3 py-1 rounded-full block mx-auto mt-2 animate-bounce">
                                👑 成功登頂 Completed!
                              </span>
                            )}
                          </div>

                          {/* LADDER GRAPH (Floor 10 down to floor 0) */}
                          <div className="w-full bg-slate-50 rounded-2xl my-4 relative overflow-hidden flex flex-col justify-between p-2 border border-dashed border-slate-200 h-64">
                            
                            {/* Structural parallel wood rails */}
                            <div className="absolute left-1/4 top-0 bottom-0 w-1.5 bg-amber-800/20" />
                            <div className="absolute right-1/4 top-0 bottom-0 w-1.5 bg-amber-800/20" />

                            {Array.from({ length: 11 }).map((_, fIdx) => {
                              const floorNum = 10 - fIdx;
                              const isCurrentClimberAt = ladderSteps[pIdx] === floorNum;
                              
                              return (
                                <div key={floorNum} className="relative w-full h-5 flex items-center justify-center shrink-0">
                                  {/* Wood rungs bar */}
                                  <div className="absolute left-[24%] right-[24%] h-1 bg-amber-800/40 rounded-full" />
                                  
                                  <span className="absolute left-1 text-[8px] font-mono text-slate-300">
                                    F{floorNum}
                                  </span>

                                  {/* Climber avatar layout */}
                                  <AnimatePresence>
                                    {isCurrentClimberAt && (
                                      <motion.div
                                        initial={{ scale: 0, y: 10 }}
                                        animate={{ scale: 1.25, y: 0 }}
                                        exit={{ scale: 0 }}
                                        className="absolute z-10 w-6 h-6 rounded-full shadow-md flex items-center justify-center text-sm font-bold bg-white border border-slate-200 animate-pulse"
                                      >
                                        {player.emoji}
                                      </motion.div>
                                    )}
                                  </AnimatePresence>
                                </div>
                              );
                            })}

                          </div>

                          {/* Footer and Interactive Answers Block for EACH player */}
                          <div className="w-full space-y-3">
                            <div className="text-center font-mono text-[11px] text-slate-400">
                              解答進度: {ladderQuestionIndex[pIdx]} / 10 題
                              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden mt-1 select-none pointer-events-none">
                                <div 
                                  className={`${player.color} h-full transition-all duration-300`}
                                  style={{ width: `${(ladderQuestionIndex[pIdx] / 10) * 100}%` }}
                                />
                              </div>
                            </div>

                            {/* Active Question Box beneath ladder for this particular climber */}
                            {!hasFinished && activeQuiz ? (
                              <div className="bg-purple-50/70 border border-purple-100 p-2.5 rounded-2xl w-full text-center space-y-2">
                                <span className="text-[10px] font-extrabold text-purple-600 block leading-none">
                                  請找出中文對應單字：
                                </span>
                                <h4 className="text-base font-cute font-bold text-blue-900 line-clamp-1 truncate">
                                  {activeQuiz.chinesePrompt}
                                </h4>

                                {/* 3 choice buttons specifically for this player */}
                                <div className="grid grid-cols-1 gap-1 pt-1">
                                  {activeQuiz.choices.map((option, idx) => (
                                    <motion.button
                                      key={option}
                                      whileHover={{ scale: 1.02 }}
                                      whileTap={{ scale: 0.98 }}
                                      onClick={() => handleAnswerLadderQuizSync(pIdx, idx)}
                                      className="bg-white hover:bg-purple-100 border border-slate-200 rounded-xl py-1 px-1.5 text-center text-[11px] font-cute font-bold text-slate-800 hover:text-purple-950 cursor-pointer shadow-sm transition-all flex items-center justify-center"
                                    >
                                      {option}
                                    </motion.button>
                                  ))}
                                </div>
                              </div>
                            ) : (
                              <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-100 text-center text-xs font-bold text-emerald-800">
                                ⭐ 任務完成！<br />順利過關！
                              </div>
                            )}
                          </div>

                        </div>
                      );
                    })}
                  </div>

                  {/* SUMMARY / RESULTS REPORT ON COMPLETED */}
                  {ladderGameCompleted && (
                    <div className="p-8 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 rounded-[36px] text-white text-center space-y-6">
                      <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center text-4xl mx-auto animate-bounce">
                        👑
                      </div>
                      
                      <div className="space-y-2">
                        <h4 className="text-3xl md:text-4xl font-cute font-bold">🧗 4人登頂大挑戰全體通關！</h4>
                        <p className="text-slate-100 text-base">
                          恭喜大家！作答挑戰圓滿結束，各小巫師的最後成績排行榜如下：
                        </p>
                      </div>

                      {/* Ranking display list */}
                      <div className="max-w-md mx-auto bg-white/10 p-4 rounded-3xl space-y-3 border border-white/20">
                        {ladderResults.map((result, idx) => {
                          return (
                            <div 
                              key={result.name}
                              className="flex items-center justify-between bg-white/10 px-4 py-2.5 rounded-2xl text-sm md:text-base font-bold"
                            >
                              <span className="flex items-center gap-2">
                                <span className="text-2xl">{result.emoji}</span>
                                <span>{result.name}</span>
                              </span>
                              <span className="bg-amber-400 text-amber-950 font-black px-3 py-1 rounded-full text-xs">
                                攀爬至：第 {result.score} 階 🏆
                              </span>
                            </div>
                          );
                        })}
                      </div>

                      <div className="flex justify-center gap-3 pt-3">
                        <button
                          onClick={() => {
                            setLadderSteps([0, 0, 0, 0]);
                            setLadderQuestionIndex([0, 0, 0, 0]);
                            setLadderGameCompleted(false);
                            setLadderResults([]);
                            soundEffects.playCorrectAnswer();
                          }}
                          className="px-8 py-3 bg-white text-indigo-900 font-black rounded-full shadow hover:bg-slate-100 cursor-pointer text-sm"
                        >
                          🔁 重新挑戰下一個回合
                        </button>
                      </div>

                    </div>
                  )}

                </div>
              )}

            </div>
          )}

          {/* Floating Vocabulary Secret Scroll Overlay Card on Click */}
          <AnimatePresence>
            {activeVocab && (
              <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 25 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 25 }}
                  className="bg-white rounded-3xl border-4 border-[#F97316] p-6 max-w-lg w-full shadow-2xl relative overflow-hidden"
                >
                  <div className="absolute right-0 top-0 text-7xl opacity-5 select-none pointer-events-none transform translate-x-3 -translate-y-3">
                    🔮
                  </div>

                  <div className="flex items-center justify-between border-b border-orange-100 pb-3 mb-4">
                    <span className="flex items-center gap-1.5 text-[#C2410C] font-black text-sm bg-orange-50 px-3.5 py-1 rounded-full border border-orange-200">
                      📜 魔法單字秘笈 (Wizard Scroll Word)
                    </span>
                    <button 
                      onClick={() => setActiveVocab(null)}
                      className="w-8 h-8 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-600 hover:bg-slate-100 border cursor-pointer transition-colors"
                    >
                      ✕
                    </button>
                  </div>

                  <div className="space-y-4 text-left">
                    
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h3 className="text-4xl font-display font-black text-[#EA580C] tracking-wide uppercase">
                          {activeVocab.word}
                        </h3>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-sm font-mono text-slate-500 font-bold bg-slate-100 px-2.5 py-0.5 rounded-full">
                            KK [{activeVocab.phonetic}]
                          </span>
                          <span className="text-2xl select-none">{activeVocab.emojis}</span>
                        </div>
                      </div>
                      
                      <button
                        onClick={() => speakWord(activeVocab!.word)}
                        className="bg-orange-500 text-white p-3 rounded-2xl hover:bg-orange-600 cursor-pointer shadow-md shadow-orange-100 active:scale-95 transition-all flex items-center gap-1.5 text-sm font-bold"
                      >
                        <Volume2 className="w-5 h-5" /> 發音
                      </button>
                    </div>

                    <div className="bg-orange-50/50 p-4 rounded-2xl border border-orange-100/70">
                      <p className="text-xs font-mono text-orange-800 uppercase tracking-widest font-black mb-1">
                        繁體中文定義:
                      </p>
                      <p className="text-xl font-sans font-bold text-slate-800">
                        {activeVocab.translation}
                      </p>
                    </div>

                    <div className="space-y-2">
                      <p className="text-xs font-mono text-slate-400 uppercase tracking-wider font-bold">
                        例句對照 (Practice Sentences):
                      </p>
                      <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4 space-y-1.5">
                        <p className="font-display font-extrabold text-blue-900 text-base leading-relaxed">
                          {activeVocab.example}
                        </p>
                        <p className="text-slate-500 font-sans text-xs font-medium pl-3 border-l-2 border-amber-400">
                          {activeVocab.exampleTranslation}
                        </p>
                      </div>
                    </div>

                  </div>

                  <div className="mt-6">
                    <button
                      onClick={() => setActiveVocab(null)}
                      className="w-full py-3 bg-[#EA580C] text-white font-bold rounded-2xl hover:bg-orange-600 transition-colors shadow-md shadow-orange-100 cursor-pointer text-center text-sm md:text-base"
                    >
                      學會了！關閉秘笈 👍
                    </button>
                  </div>

                </motion.div>
              </div>
            )}
          </AnimatePresence>

          {/* Celebration Screen Trigger when all 10 solved */}
          <AnimatePresence>
            {questionsAnsweredCount === STORY_SECTIONS.length && (
              <div className="fixed inset-0 bg-slate-900/70 backdrop-blur-md z-[60] flex items-center justify-center p-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.85 }}
                  className="bg-white rounded-[36px] border-8 border-emerald-400 p-8 max-w-2xl w-full text-center shadow-2xl space-y-6 relative overflow-hidden"
                >
                  <div className="absolute top-4 left-4 text-4xl animate-bounce">👑</div>
                  <div className="absolute top-4 right-4 text-4xl animate-bounce duration-1000">✨</div>
                  <div className="absolute bottom-4 left-6 text-4xl animate-bounce duration-700">🐈</div>
                  <div className="absolute bottom-4 right-6 text-4xl animate-bounce">🧙‍♂️</div>

                  <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-4xl mx-auto shadow-inner">
                    🏆
                  </div>

                  <div className="space-y-2 text-center">
                    <h2 className="text-3xl font-display font-black text-emerald-800">
                      魔法挑戰大成功！
                    </h2>
                    <p className="text-lg text-slate-500 font-medium">
                      Wizard Master Challenge Completed!
                    </p>
                  </div>

                  <div className="bg-emerald-50 border border-emerald-100 rounded-3xl p-6 max-w-md mx-auto space-y-3">
                    <p className="text-xs font-mono text-emerald-800 uppercase tracking-widest font-black">
                      你的皇家法師成績證書
                    </p>
                    <div className="text-4xl font-black text-amber-500 flex items-center justify-center gap-1">
                      {scoreCount} <span className="text-xl text-slate-400">/ 10 關</span> 🪙
                    </div>
                    <p className={`text-sm md:text-base font-black py-2 px-4 rounded-2xl ${currentMagicalState.color} inline-block shadow-sm`}>
                      {currentMagicalState.title}
                    </p>
                    <p className="text-slate-600 text-xs md:text-sm leading-relaxed mt-2 text-left">
                      恭喜你陪著小巫師湯姆和聰明的灰色貓咪，成功解讀了所有的魔法挑戰！你是有史以來最棒的皇家英文法師！
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-6">
                    <button
                      onClick={handleReset}
                      className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-orange-500 via-amber-500 to-[#10B981] text-white font-black rounded-full hover:shadow-lg hover:scale-105 active:scale-95 transition-all text-sm cursor-pointer"
                    >
                      🔁 重新挑戰 (Restart Story)
                    </button>
                    <button
                      onClick={() => {
                        setIsAnswerRevealed(prev => ({ ...prev }));
                        setQuizScore(prev => ({ ...prev, [STORY_SECTIONS.length]: true })); 
                      }}
                      className="w-full sm:w-auto px-8 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-full transition-all text-sm cursor-pointer"
                    >
                      📄 留在本頁查看
                    </button>
                  </div>

                </motion.div>
              </div>
            )}
          </AnimatePresence>

        </div>

      {/* Humble Footer */}
      <footer className="mt-16 text-center select-none py-6 border-t border-slate-100 max-w-4xl mx-auto">
        <p className="text-slate-400 text-[10px] sm:text-xs font-mono">
          Wizard and Cat, Helping Princess Mary 4 &copy; Little Fox Readers.
        </p>
        <p className="text-slate-300 text-[9px] sm:text-[10px] font-sans mt-0.5">
          Designed by Google AI Studio Craft for Taiwanese Elementary Grade 3 English Learners.
        </p>
      </footer>

    </div>
  );
}
