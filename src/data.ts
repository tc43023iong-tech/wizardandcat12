import { StorySection, Character } from "./types";

export const CHARACTERS: Character[] = [
  {
    nameEng: "Tom",
    nameZht: "湯姆",
    role: "🧙‍♂️ Royal Wizard / 皇家小巫師",
    emoji: "🧙‍♂️",
    color: "bg-blue-100 border-blue-300 text-blue-800",
    introEng: "A kind apprentice wizard with a purple robe and a magical wand. He wants to save the day!",
    introZht: "一位善良的巫師學徒，穿著紫色長袍、拿著魔法棒。他非常想幫公主找回皇冠！",
    secret: "Tom's magic word is 'Poof!' and he gets nervous about the Grim Dungeon."
  },
  {
    nameEng: "Cat",
    nameZht: "貓咪",
    role: "🐱 Clever Sidekick / 聰明的小灰貓",
    emoji: "🐱",
    color: "bg-amber-100 border-amber-300 text-amber-800",
    introEng: "A lazy-looking but super smart gray cat. She loves napping and... fishing!",
    introZht: "一隻看起來懶洋洋、但其實超級聰明的小灰貓，喜歡睡午覺並且……去釣魚！",
    secret: "Cat decoded the mystery and caught the gold crown using only a standard fishing rod!"
  },
  {
    nameEng: "Princess Mary",
    nameZht: "瑪麗公主",
    role: "👸 Royal Highness / 愛哭的瑪麗公主",
    emoji: "👸",
    color: "bg-pink-100 border-pink-300 text-pink-800",
    introEng: "A sweet princess who is extremely heartbroken because her favorite crown was stolen by a crocodile.",
    introZht: "一位甜美的公主，因為自己最心愛的皇冠被鱷魚偷走了，正在嚎啕大哭！",
    secret: "Her royal crown has purple hearts and beautiful pink jewels."
  },
  {
    nameEng: "Dirk",
    nameZht: "德克",
    role: "👤 The Sneaky Villain / 壞心眼德克",
    emoji: "👤",
    color: "bg-purple-100 border-purple-300 text-purple-800",
    introEng: "The palace troublemaker with a black mustache who wants Tom to be thrown in the Grim Dungeon.",
    introZht: "留著黑色小鬍子的宮殿搗蛋鬼，非常壞心眼，總想著要把湯姆關進地牢裡！",
    secret: "Dirk is the only person who did not clap in the end!"
  },
  {
    nameEng: "Crocodile",
    nameZht: "小鱷魚",
    role: "🐊 Hungry Diver / 貪玩小鱷魚",
    emoji: "🐊",
    color: "bg-green-100 border-green-300 text-green-800",
    introEng: "A green resident of the palace moat who accidentally snatched the shiny royal crown.",
    introZht: "一隻住在護城河裡的綠色鱷魚，亮晶晶的皇冠吸引了牠，咬著皇冠游走了！",
    secret: "Crocodile loves shiny jewelry but decided to trade it for fishing bait."
  }
];

export const STORY_SECTIONS: StorySection[] = [
  {
    id: 1,
    titleEng: "Cat Woke Up",
    titleZht: "貓咪醒來了",
    paragraphs: [
      "Cat woke up.",
      "Tom was still at the moat.",
      "\"Hmm . . . ,\" Cat thought."
    ],
    translationZht: "貓咪醒來了。\n湯姆還在護城河邊。\n「嗯……，」貓咪心想。",
    sceneEmoji: "🐈🛌🏰💭",
    illustrationPrompt: "A cute gray cat stretching and yawning under the warm sun, sleeping near a medieval castle wall.",
    vocabulary: [
      {
        word: "wake",
        phonetic: "/wok/",
        translation: "醒來 🛌",
        chineseOnly: "醒來",
        example: "Cat woke up and yawned happily.",
        exampleTranslation: "貓咪醒來了並高興地打了個哈欠。",
        emojis: "🛌 🥱 ☀️"
      },
      {
        word: "moat",
        phonetic: "/mot/",
        translation: "護城河 🏰",
        chineseOnly: "護城河",
        example: "The castle was protected by a wide moat filled with blue water.",
        exampleTranslation: "城堡被一條寬闊且充滿藍色湖水的護城河保護著。",
        emojis: "🏰 🌊 🧱"
      },
      {
        word: "thought",
        phonetic: "/θɔt/",
        translation: "想、思考 💭",
        chineseOnly: "想",
        example: "Tom thought of an amazing idea for his magic trick.",
        exampleTranslation: "湯姆想到了一個奇妙的魔術點子。",
        emojis: "💭 🤔 🧠"
      }
    ],
    qa: {
      questionEng: "Who woke up?",
      choices: [
        "Cat",
        "Tom",
        "The crocodile"
      ],
      answerIndex: 0,
      explanationEng: "The story starts with 'Cat woke up'.",
      explanationZht: "故事第一行說著「Cat woke up」（貓咪醒來了）。"
    }
  },
  {
    id: 2,
    titleEng: "The Sinking Crown",
    titleZht: "下沉的皇冠與壞笑",
    paragraphs: [
      "Splash! The crocodile dropped into the water.",
      "Tom watched it swim away with the crown.",
      "\"Ha-ha!\" Dirk laughed softly.",
      "\"You're going to get thrown in the Grim Dungeon!\""
    ],
    translationZht: "噗通！鱷魚落入水中。\n湯姆看著牠帶著皇冠游走。\n「哈哈！」德克輕聲冷笑著。\n「你就要被丟進恐怖地牢（Grim Dungeon）了！」",
    sceneEmoji: "🐊👑💧😈",
    illustrationPrompt: "A green friendly-looking crocodile swimming in dark blue water holding a sparkling gold crown on its snout, a sneaky man laughing in the background.",
    vocabulary: [
      {
        word: "splash",
        phonetic: "/splæʃ/",
        translation: "濺水聲、噗通 💦",
        chineseOnly: "（噗通）",
        example: "The heavy stone fell into the water with a loud splash.",
        exampleTranslation: "沉重的石頭噗通一聲落入水中。",
        emojis: "💦 🌊 🐸"
      },
      {
        word: "grim",
        phonetic: "/ɡrɪm/",
        translation: "可怕的、陰森的 🥶",
        chineseOnly: "（可怕的）",
        example: "The castle dungeon is a cold, grim place.",
        exampleTranslation: "城堡地牢是一個寒冷、可怕的地方。",
        emojis: "🥶 💀 🏚️"
      },
      {
        word: "crocodile",
        phonetic: "/ˈkrɑkə,daɪl/",
        translation: "鱷魚 🐊",
        chineseOnly: "（鱷魚）",
        example: "The green crocodile sneaked under the bridge.",
        exampleTranslation: "綠色的小鱷魚悄悄游到了橋底下。",
        emojis: "🐊 🦖 🌊"
      },
      {
        word: "crown",
        phonetic: "/kraʊn/",
        translation: "皇冠 👑",
        chineseOnly: "（皇冠）",
        example: "The beautiful golden crown was shining bright.",
        exampleTranslation: "這頂美麗的金黃冠散發著耀眼的光芒。",
        emojis: "👑 ✨ 👸"
      },
      {
        word: "softly",
        phonetic: "/ˈsɔftlɪ/",
        translation: "輕聲地 🤫",
        chineseOnly: "（輕聲地）",
        example: "She spoke softly so she wouldn't wake her cat.",
        exampleTranslation: "她輕聲細語，以免吵醒她的貓咪。",
        emojis: "🤫 🗣️"
      },
      {
        word: "dungeon",
        phonetic: "/ˈdʌndʒən/",
        translation: "地牢 ⛓️",
        chineseOnly: "（地牢）",
        example: "The bad wizard was put into the deep castle dungeon.",
        exampleTranslation: "壞巫師被關進了深邃的城堡地牢裡。",
        emojis: "⛓️ 🗝️ 💀"
      },
      {
        word: "drop",
        phonetic: "/drɑp/",
        translation: "掉落 💧",
        chineseOnly: "（掉下）",
        example: "The crocodile dropped the crown into the water.",
        exampleTranslation: "鱷魚把皇冠掉進了水裡。",
        emojis: "💧 🐊"
      },
      {
        word: "throw in",
        phonetic: "/θroʊ ɪn/",
        translation: "扔進去、丟進去 ⛓️",
        chineseOnly: "（丟進去）",
        example: "The bad man wanted Tom to be thrown in the dungeon.",
        exampleTranslation: "壞人想要把湯姆丟進地牢裡。",
        emojis: "⛓️ 💀"
      }
    ],
    qa: {
      questionEng: "What did the crocodile swim away with?",
      choices: [
        "A juicy fish",
        "The golden crown",
        "A book bag"
      ],
      answerIndex: 1,
      explanationEng: "The crocodile swam away with the princess' gold crown.",
      explanationZht: "鱷魚帶著「the crown」（金色皇冠）游走了。"
    }
  },
  {
    id: 3,
    titleEng: "Princess' Wailing",
    titleZht: "公主嚎啕大哭",
    paragraphs: [
      "\"Oh no!\" Tom thought. \"Not the Grim Dungeon!\"",
      "The princess was still wailing. \"My crown!\"",
      "\"Psst! Tom!\" whispered a voice. \"Over here!\""
    ],
    translationZht: "「喔不！」湯姆心想。「不要是恐怖地牢！」\n公主還在痛哭失聲。「我的皇冠！」\n「噓！湯姆！」一個微弱的聲音低聲呼喚。「過來這兒！」",
    sceneEmoji: "😭👸🏚️🤫",
    illustrationPrompt: "A cute anime-style princess crying with large tears saying 'My crown!', and a wizard looking scared.",
    vocabulary: [
      {
        word: "grim",
        phonetic: "/ɡrɪm/",
        translation: "可怕的、陰森的 🥶",
        chineseOnly: "（可怕的）",
        example: "The dungeon was a cold, dark and grim place.",
        exampleTranslation: "地牢是一個寒冷、陰暗而可怕的地方。",
        emojis: "🥶 💀 🏚️"
      },
      {
        word: "psst",
        phonetic: "/pst/",
        translation: "（打招呼引起注意）噓 🤫",
        chineseOnly: "（噓）",
        example: "Psst! Come over here and play with us.",
        exampleTranslation: "噓！過來這裡跟我們一起玩。",
        emojis: "🤫 👋 🗣️"
      },
      {
        word: "wailing",
        phonetic: "/ˈwelɪŋ/",
        translation: "大哭 😭",
        chineseOnly: "（大哭）",
        example: "The baby was wailing after waking up.",
        exampleTranslation: "小寶寶醒來後就哇哇嚎啕大哭起來。",
        emojis: "😭 😢 💔"
      },
      {
        word: "whisper",
        phonetic: "/ˈhwɪspɚd/",
        translation: "低聲說 🗣️",
        chineseOnly: "（低聲說）",
        example: "\"Listen close,\" she whispered in school.",
        exampleTranslation: "「聽好了，」她在學校低聲跟我說。",
        emojis: "🗣️ 🤫 👂"
      }
    ],
    qa: {
      questionEng: "What did Princess Mary yell?",
      choices: [
        "\"My crown!\"",
        "\"My cookie!\"",
        "\"My cat!\""
      ],
      answerIndex: 0,
      explanationEng: "Princess Mary cried out for her lost golden crown.",
      explanationZht: "公主哭喊著選 A：「My crown!」（我的皇冠！）"
    }
  },
  {
    id: 4,
    titleEng: "A Mysterious Message",
    titleZht: "神秘的招手",
    paragraphs: [
      "Tom looked around.",
      "Cat was hiding near the palace!",
      "She waved to Tom. \"Come here.\""
    ],
    translationZht: "湯姆環顧四周。\n貓咪正趴在宮殿牆角躲藏著！\n她向湯姆揮了揮手。「過來這裡。」",
    sceneEmoji: "👀🐈🏰🙋‍♀️",
    illustrationPrompt: "A cute gray cat peeking from behind a beautiful castle tower, waving its paw gently at a young red-haired wizard.",
    vocabulary: [
      {
        word: "hide",
        phonetic: "/haɪd/",
        translation: "躲藏 🫣",
        chineseOnly: "躲藏",
        example: "The grey kitten is hiding inside a small cardboard box.",
        exampleTranslation: "小灰貓躲在一個紙箱子裡。",
        emojis: "🫣 📦 🐈"
      },
      {
        word: "palace",
        phonetic: "/ˈpælɪs/",
        translation: "宮殿 🏰",
        chineseOnly: "宮殿",
        example: "The palace has beautiful tall golden gates.",
        exampleTranslation: "宮殿有著美麗而巨大的金色大門。",
        emojis: "🏰 👑 💂"
      },
      {
        word: "wave",
        phonetic: "/wevd/",
        translation: "揮手 👋",
        chineseOnly: "揮手",
        example: "Our school teacher smiled and waved at us.",
        exampleTranslation: "我們學校老師面帶微笑並向我們揮手。",
        emojis: "👋 🙋‍♂️ ✈️"
      }
    ],
    qa: {
      questionEng: "Where was Cat hiding?",
      choices: [
        "Under the bridge",
        "Near the palace",
        "Inside the cloud"
      ],
      answerIndex: 1,
      explanationEng: "The text says 'Cat was hiding near the palace'.",
      explanationZht: "故事寫著貓咪躲在「near the palace」（宮殿附近）。"
    }
  },
  {
    id: 5,
    titleEng: "Dirk's Fake Comfort",
    titleZht: "德克的假安慰",
    paragraphs: [
      "\"Now, now.\" Dirk patted the princess' shoulder.",
      "\"We can get you a new royal crown.\"",
      "The princess sobbed. \"But that one is very special.\""
    ],
    translationZht: "「好啦，好啦。」德克拍拍公主的肩膀安慰道。\n「起碼我們可以再幫妳打造一頂新的皇家皇冠嘛。」\n公主啜泣著。「但是那一頂是真的非常、非常特別的。」",
    sceneEmoji: "✋💪🥺👑",
    illustrationPrompt: "A tall man with a mustache patting a crying young princess on her shoulder, trying to look friendly but looking mischievous.",
    vocabulary: [
      {
        word: "special",
        phonetic: "/ˈspeʃ(ə)l/",
        translation: "特別的 ✨",
        chineseOnly: "（特別的）",
        example: "This crown has pink jewels and is very special to Mary.",
        exampleTranslation: "這頂皇冠鑲有粉紅寶石，對瑪麗來說非常特別。",
        emojis: "✨ 👸 💖"
      },
      {
        word: "pat",
        phonetic: "/pætɪd/",
        translation: "輕拍 ✋",
        chineseOnly: "（輕拍）",
        example: "The kind monk patted the puppy on its little head.",
        exampleTranslation: "善良的僧侶輕拍了拍小狗的小腦袋。",
        emojis: "✋ ❤️ 🐶"
      },
      {
        word: "shoulder",
        phonetic: "/ˈʃoldɚ/",
        translation: "肩膀 👤",
        chineseOnly: "（肩膀）",
        example: "The cool parrot is sitting on my brother's shoulder.",
        exampleTranslation: "那隻酷炫的鸚鵡正停在我弟弟的肩膀上。",
        emojis: "💪 👔 👕"
      },
      {
        word: "sob",
        phonetic: "/sɑbd/",
        translation: "啜泣 🥺",
        chineseOnly: "（啜泣）",
        example: "The lost boy sobbed until his mother came to find him.",
        exampleTranslation: "走失的小男孩一邊啜泣著，直到他媽媽來找他。",
        emojis: "🥺 😢 💧"
      }
    ],
    qa: {
      questionEng: "Who patted the princess' shoulder?",
      choices: [
        "Tom",
        "The cat",
        "Dirk"
      ],
      answerIndex: 2,
      explanationEng: "Dirk patted her shoulder and promised a new crown.",
      explanationZht: "是壞壞的德克「Dirk patted the princess' shoulder」拍拍她的肩膀。"
    }
  },
  {
    id: 6,
    titleEng: "An Unexpected Catch!",
    titleZht: "出乎意料的收穫",
    paragraphs: [
      "Tom hurried toward Cat.",
      "Then he blinked in surprise.",
      "Cat had the fishing rod and . . . the crown!"
    ],
    translationZht: "湯姆急忙朝著貓咪的方向跑去。\n然後他一臉驚訝地眨了眨眼。\n貓咪居然抓著那根釣魚竿，而且……上面掛著皇冠！",
    sceneEmoji: "🏃👀🎣👑",
    illustrationPrompt: "A wizard boy looking incredibly surprised as a small gray cat smiles proudly, holding a cute wooden fishing rod with a golden crown hooked on the line.",
    vocabulary: [
      {
        word: "hurry",
        phonetic: "/ˈhɝɪd/",
        translation: "趕快 🏃",
        chineseOnly: "趕快",
        example: "They hurried home to avoid the heavy rain.",
        exampleTranslation: "他們急忙跑回家，以免淋到大雨。",
        emojis: "🏃 💨 ⏰"
      },
      {
        word: "blink",
        phonetic: "/blɪŋkt/",
        translation: "眨眼 👀",
        chineseOnly: "眨眼",
        example: "The girl blinked in disbelief at her birthday cake.",
        exampleTranslation: "女孩不敢置信地對著她的生日蛋糕眨了眼睛。",
        emojis: "👀 😉 ✨"
      },
      {
        word: "fishing rod",
        phonetic: "/ˈfɪʃɪŋ rɑd/",
        translation: "釣魚竿 🎣",
        chineseOnly: "釣魚竿",
        example: "We brought a green fishing rod to catch lake fishes.",
        exampleTranslation: "我們帶了一根綠色的釣魚竿去湖邊釣魚。",
        emojis: "🎣 🐟 🌊"
      }
    ],
    qa: {
      questionEng: "What did Cat have?",
      choices: [
        "A toy ball",
        "The fishing rod and the crown",
        "Some warm milk"
      ],
      answerIndex: 1,
      explanationEng: "Cat had the fishing rod and the princess' precious crown.",
      explanationZht: "貓咪用釣魚竿竟然釣到了「the crown」皇冠！"
    }
  },
  {
    id: 7,
    titleEng: "How To Fish a Crown",
    titleZht: "要怎麼釣到皇冠呢",
    paragraphs: [
      "\"Wow!\" said Tom. \"How did you get the crown?\"",
      "Cat shrugged. \"I woke up and decided to go fishing.",
      "But I caught this instead.\""
    ],
    translationZht: "「哇！」湯姆驚呼。「妳是怎麼得到這皇冠的？」\n貓咪泰然自若地聳了聳肩。「我睡醒了，覺得應該去釣個魚。\n結果沒釣到魚，反而捕到這個寶貝物。」",
    sceneEmoji: "🤷🎣🔄😮",
    illustrationPrompt: "A cute gray cat shrugging with dynamic cartoon speed lines, holding a fishing rod with the crown.",
    vocabulary: [
      {
        word: "shrug",
        phonetic: "/ʃrʌgd/",
        translation: "聳聳肩 🤷",
        chineseOnly: "聳聳肩",
        example: "I asked him the time, but he just shrugged.",
        exampleTranslation: "我問他現在幾點，他只是聳了聳肩。",
        emojis: "🤷 💬 ❓"
      },
      {
        word: "decide",
        phonetic: "/dɪˈsaɪdɪd/",
        translation: "決定 🎯",
        chineseOnly: "決定",
        example: "The princess decided to wear her pink dress.",
        exampleTranslation: "公主決定今天穿著她那件粉紅色的洋裝。",
        emojis: "🎯 🗺️ 🤔"
      },
      {
        word: "catch",
        phonetic: "/kɔt/",
        translation: "抓到 🕸️",
        chineseOnly: "抓到",
        example: "The clever cat caught a fast fly with her paw.",
        exampleTranslation: "那隻聰明的貓咪用雙爪抓住了一隻快速飛過的小飛蟲。",
        emojis: "🕸️ 🐱 🐭"
      },
      {
        word: "instead",
        phonetic: "/ɪnˈstɛd/",
        translation: "反而 🔄",
        chineseOnly: "反而",
        example: "He did not buy books; he bought a magic wand instead.",
        exampleTranslation: "他沒有買書；相反地，他買了一根魔法棒。",
        emojis: "🔄 🍎 🍌"
      }
    ],
    qa: {
      questionEng: "What did Cat catch in the moat?",
      choices: [
        "A heavy boot",
        "The golden crown",
        "A giant pink sea star"
      ],
      answerIndex: 1,
      explanationEng: "Instead of fish, Cat caught the royal crown on her line.",
      explanationZht: "貓咪釣到（caught）了皇冠而不是小魚！"
    }
  },
  {
    id: 8,
    titleEng: "The Safe Robe and Magic",
    titleZht: "魔法長袍與Poof！",
    paragraphs: [
      "Tom hid the crown in his robe.",
      "He ran back to the moat.",
      "\"Wait! Princess Mary!\" Tom called.",
      "He waved his wand. Poof!"
    ],
    translationZht: "湯姆趕緊把皇冠塞進了他的寬大長袍底下。\n他一溜煙跑回護城河邊。\n「等一等！瑪麗公主！」湯姆大聲喊道。\n他英勇地揮動起他的魔杖。啵的一聲！",
    sceneEmoji: "🧥🏃‍♀️🪄💥",
    illustrationPrompt: "A cute boy wizard hiding a gold crown inside deep pockets of his large violet robe, then pulling out a sparkling yellow-tipped magic wand.",
    vocabulary: [
      {
        word: "robe",
        phonetic: "/rob/",
        translation: "長袍 🧥",
        chineseOnly: "長袍",
        example: "The old wizard's royal robe was covered with gold stars.",
        exampleTranslation: "老巫師的皇家長袍上綴滿了金色的小星星。",
        emojis: "🧥 🧙‍♂️ ✨"
      },
      {
        word: "wand",
        phonetic: "/wɑnd/",
        translation: "魔杖 🪄",
        chineseOnly: "魔杖",
        example: "With a touch of her shiny wand, the pumpkin turned into a coach.",
        exampleTranslation: "魔杖在南瓜上輕輕一點，南瓜便瞬間變成了一輛漂亮的皇家馬車。",
        emojis: "🪄 ✨ 🧚‍♀️"
      }
    ],
    qa: {
      questionEng: "Where did Tom hide the crown?",
      choices: [
        "In his purple robe",
        "Behind the green tree",
        "Inside a treasure box"
      ],
      answerIndex: 0,
      explanationEng: "Tom hid the crown inside his wizard robe to keep it safe.",
      explanationZht: "湯姆起初把皇冠藏在寬大的長袍（robe）下，走回河邊才秀魔法。"
    }
  },
  {
    id: 9,
    titleEng: "The Best Royal Wizard",
    titleZht: "最厲害的皇家小巫師",
    paragraphs: [
      "\"My royal crown!\" the princess cried.",
      "\"Oh, Tom,\" she said happily.",
      "\"You're the best royal wizard ever!\""
    ],
    translationZht: "「我的皇家皇冠！」公主不可置信地驚喜歡呼。\n「喔，湯姆，」她高高興興地拉著他說。\n「你真是有史以來全天下最棒的皇家巫師了！」",
    sceneEmoji: "😭👑🧙‍♂️💯",
    illustrationPrompt: "The beautiful golden hair princess smiling with glowing cheeks, holding her crown with hearts and pink stars, crying tears of joy as Tom the wizard smiles modestly.",
    vocabulary: [
      {
        word: "happily",
        phonetic: "/ˈhæpɪlɪ/",
        translation: "高興地 😊",
        chineseOnly: "高興地",
        example: "The bluebirds sang happily near the palace window.",
        exampleTranslation: "皇宮的窗戶邊，青鳥們正愉快地歌唱著。",
        emojis: "😊 🎈 🌟"
      },
      {
        word: "wizard",
        phonetic: "/ˈwɪzɚd/",
        translation: "小巫師 🧙‍♂️",
        chineseOnly: "小巫師",
        example: "The grand castle hired a special wizard to make colorful rainbow fireworks.",
        exampleTranslation: "大城堡特聘了一名巫師來製造五彩繽紛的彩虹煙火。",
        emojis: "🧙‍♂️ 🔮 ✨"
      }
    ],
    qa: {
      questionEng: "How did the princess feel when she got her crown back?",
      choices: [
        "Angry and sleepy",
        "Happily surprised!",
        "Sad and hungry"
      ],
      answerIndex: 1,
      explanationEng: "The princess spoke happily and called Tom the best royal wizard.",
      explanationZht: "公主感到非常高興且驚喜（happily）。"
    }
  },
  {
    id: 10,
    titleEng: "Everyone Claps But Dirk",
    titleZht: "大家都鼓掌，除了那個人",
    paragraphs: [
      "Tom bowed. \"Thank you, Princess.\"",
      "He put the crown back on her head.",
      "Everyone clapped—but Dirk."
    ],
    translationZht: "湯姆優雅地行了個鞠躬禮。「非常感謝您，公主殿下。」\n他慎重地把那頂漂亮的皇冠重新安穩地戴回她的頭上。\n現場的所有人都熱烈鼓掌歡呼——除了壞笑的德克。",
    sceneEmoji: "🙇👑👏😒",
    illustrationPrompt: "Tom the young handsome wizard bow to the princess as he gently places the shiny crown on her golden locks. People in background are clapping, but a man with mustache in purple coat folds his arms and scowls.",
    vocabulary: [
      {
        word: "bow",
        phonetic: "/baʊd/",
        translation: "鞠躬 🙇",
        chineseOnly: "鞠躬",
        example: "The tall knight bowed before the royal king and queen.",
        exampleTranslation: "高大的騎士朝著國王與王后恭敬地鞠躬致敬。",
        emojis: "🙇 🎭 🌟"
      },
      {
        word: "everyone",
        phonetic: "/ˈɛvrɪ,wʌn/",
        translation: "大家 👥",
        chineseOnly: "每個人",
        example: "Everyone loves to eat the chocolate princess cake.",
        exampleTranslation: "大家都非常喜歡吃精緻的巧克力公主蛋糕。",
        emojis: "👥 👋 🏫"
      },
      {
        word: "clap",
        phonetic: "/klæpt/",
        translation: "拍手 👏",
        chineseOnly: "拍手",
        example: "The entire crowd clapped loudly for the heroes.",
        exampleTranslation: "在場的全體民眾都為這些大英雄們熱烈鼓掌鼓勁。",
        emojis: "👏 🎉 🙌"
      }
    ],
    qa: {
      questionEng: "Who did NOT clap for Tom?",
      choices: [
        "Tom himself",
        "Princess Mary",
        "Dirk"
      ],
      answerIndex: 2,
      explanationEng: "Dirk was the only person who did not clap in the end.",
      explanationZht: "德克（Dirk）心懷鬼胎，是唯一沒有拍手的人。"
    }
  }
];
