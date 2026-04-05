// ============================================================
//  ARUKIYA CHATBOT — Knowledge-base powered
//  Edit the KB section below to customise all responses.
// ============================================================

const KB = {
  identity: {
    name: "Arukiya",
    tagline: "Romance Anime Enthusiast & Creative",
    quote: "In every story, there's a moment where hearts bloom like cherry blossoms — quiet, fleeting, and impossibly beautiful.",
    description: "Arukiya is a writer, digital artist, and hopeless romantic who believes the most profound emotions are the ones left unspoken. Romance anime taught them that vulnerability is a form of courage, and that the space between two people can hold entire universes.",
    hobbies: ["watching romance anime", "creative writing", "digital illustration", "music curation", "photography", "building websites", "reading light novels"],
    personality: "dreamer, storyteller, hopeless romantic, soft-spoken, emotionally perceptive",
    anilistUsername: "Arukiya",
  },
  stats: {
    animeWatched: "120+",
    yearsWriting: "6 years",
    anilistSince: "2018",
  },
  skills: [
    { name: "Storytelling",         level: 92 },
    { name: "Creative Writing",     level: 87 },
    { name: "Digital Illustration", level: 82 },
    { name: "Web Design",           level: 78 },
    { name: "Photography",          level: 74 },
    { name: "Music Curation",       level: 88 },
  ],
  journey: [
    { year: "2019", title: "The First Anime",        detail: "Watched Bunny Girl Senpai for the first time and cried for three hours. Never looked back." },
    { year: "2020", title: "100 Anime Milestone",    detail: "Hit 100 completed anime. Realized romance was more than a genre — it was a lens for understanding people." },
    { year: "2022", title: "Started Writing",         detail: "Began writing short romance stories inspired by the anime that moved them most. Published the first one online." },
    { year: "2023", title: "Discovered Digital Art",  detail: "Started illustrating characters from their stories. Found a new language for emotion — one made of color and line." },
    { year: "2026", title: "Built This Space",        detail: "Brought everything together — a little corner of the internet that feels like home." },
  ],
  picks: [
    { title: "Blue Box",           genres: ["Romance","Sports","School"],  year: "2024", rating: 5, description: "A romantic-sports slice-of-life anime. Taiki Inomata, a badminton player, develops a crush on Chinatsu Kano, the star basketball player at their school." },
    { title: "Toradora!",          genres: ["Romance","Slice of Life"],    year: "2008", rating: 5, description: "A masterclass in character growth and the kind of love that sneaks up on you. Taiga and Ryuuji's dynamic is unmatched." },
    { title: "Your Lie in April",  genres: ["Romance","Drama","Music"],    year: "2014", rating: 5, description: "Music as metaphor for grief, healing, and love. Kousei and Kaori's story is devastating in the most beautiful way." },
    { title: "Fruits Basket",      genres: ["Romance","Drama","Family"],   year: "2019", rating: 5, description: "Tohru Honda is the most wholesome protagonist in anime. A story about trauma, healing, and choosing love even when it's hard." },
  ],
  favourites: [
    "Toradora","Your Lie in April","Clannad","Fruits Basket","Kimi ni Todoke",
    "Horimiya","Anohana","Oregairu","Ao Haru Ride","Nagi no Asukara",
    "Wotakoi","Chuunibyou","Bunny Girl Senpai","Blue Box",
  ],
  aesthetic: [
    "cherry blossoms in April rain","late-night anime marathons",
    "warm tea and soft piano OSTs","lo-fi beats on repeat",
    "dog-eared pages and underlined sentences",
    "handwritten letters nobody sends anymore",
    "rainy days that feel like a scene transition",
    "candlelight and quiet evenings",
  ],
  contact: {
    email: "[your@email.com]",
    twitter: "@arukiya",
    instagram: "@arukiya",
    anilist: "anilist.co/user/Arukiya",
  },
  // ✏️ ADD EXTRA KNOWLEDGE HERE
  addons: [
    // { topic: "current project", info: "Working on a short romance visual novel set in Kyoto." },
  ],
};

// ============================================================
//  INTENT → RESPONSE ENGINE  (250+ responses)
// ============================================================
function norm(s) { return s.toLowerCase().replace(/[^\w\s]/g, " ").trim(); }
function has(text, ...words) { return words.some(w => text.includes(w)); }

function getResponse(raw) {
  const q = norm(raw);

  // ── 1. GREETINGS ──────────────────────────────────────────
  if (has(q, "hello", "hi", "hey", "hiya", "howdy", "sup", "yo", "greetings", "good morning", "good afternoon", "good evening", "morning", "afternoon", "evening"))
    return `Hi there! 🌸 I'm Arukiya, Arukiya's assistant. Ask me anything — anime, skills, the journey, or just chat!`;
  if (has(q, "how are you", "how r u", "you ok", "you good", "how do you do", "you doing", "hows it going"))
    return `Doing wonderfully, like a slow-burn romance episode! 💕 How can I help?`;
  if (has(q, "good night", "goodnight", "nite", "night night"))
    return `Good night! 🌙 May your dreams be as soft as a Clannad OST. Sweet dreams~`;
  if (has(q, "what's up", "whats up", "wassup"))
    return `Just here waiting to talk anime and Arukiya's world! 🌸 What's on your mind?`;
  if (has(q, "nice to meet", "pleasure", "glad to meet"))
    return `Likewise! 💕 It's always lovely to meet someone who found their way here. What would you like to know?`;
  if (has(q, "who are you", "what are you", "are you a bot", "are you ai", "are you real"))
    return `I'm Arukiya 🌸 — a chatbot built into Arukiya's personal site. I know everything about this page, their anime taste, skills, and story. Ask away!`;
  if (has(q, "your name", "what's your name", "what is your name", "call you"))
    return `I'm Arukiya! 🌸 Arukiya's little AI assistant. Named after cherry blossoms, naturally.`;
  if (has(q, "Arukiya", "assistant name"))
    return `That's me! 🌸 Arukiya — Arukiya's chatbot. What can I help you with?`;

  // ── 2. IDENTITY / ABOUT ARUKIYA ───────────────────────────
  if (has(q, "who is arukiya", "about arukiya", "tell me about arukiya", "introduce arukiya", "describe arukiya"))
    return `${KB.identity.description} They've watched <strong>${KB.stats.animeWatched}</strong> anime and have been writing for <strong>${KB.stats.yearsWriting}</strong>. ✨`;
  if (has(q, "what does arukiya do", "arukiya do", "arukiya work"))
    return `Arukiya writes romance stories, creates digital art, curates music playlists, and builds websites. Basically a one-person creative studio powered by anime. 🌸`;
  if (has(q, "arukiya real", "is arukiya real", "real person"))
    return `Yes! Arukiya is a real person — this is their personal website. I'm just the AI assistant they built into it. 💕`;
  if (has(q, "arukiya age", "how old is arukiya", "age"))
    return `Arukiya hasn't shared their age publicly, but they've been watching anime since 2019 and writing since 2022. 🌸`;
  if (has(q, "arukiya gender", "gender", "pronouns", "he she they"))
    return `Arukiya uses they/them pronouns based on how this site refers to them. 🌸`;
  if (has(q, "arukiya location", "where is arukiya", "where do they live", "country", "city"))
    return `Arukiya hasn't shared their location publicly. But wherever they are, it probably has good Wi-Fi for anime streaming. 🌙`;
  if (has(q, "arukiya language", "what language", "speak"))
    return `This site is in English, so Arukiya is comfortable in English. They also appreciate Japanese through years of anime watching! 🎌`;
  if (has(q, "arukiya job", "occupation", "career", "profession", "work as"))
    return `Arukiya is a creative — writer, digital artist, and web designer. Whether that's a job or a calling is up for debate. ✍️`;
  if (has(q, "quote", "tagline", "motto", "saying", "favourite quote", "favorite quote"))
    return `Arukiya's quote: <em>"${KB.identity.quote}"</em> 🌸`;
  if (has(q, "personality", "kind of person", "character", "nature", "temperament"))
    return `Arukiya is a <strong>${KB.identity.personality}</strong>. The kind of person who cries at anime and then writes about it beautifully. 🌸`;
  if (has(q, "dream", "goal", "aspiration", "ambition", "future plan"))
    return `Arukiya's dream is to tell stories that make people feel less alone — the same way romance anime did for them. 💕`;
  if (has(q, "inspiration", "inspired by", "influence", "role model"))
    return `Arukiya is inspired by the emotional honesty of romance anime — the way they capture feelings that are hard to put into words. 🌸`;
  if (has(q, "favourite colour", "favorite color", "colour", "color"))
    return `Given the whole aesthetic of this site — soft pinks, lavender, and peach — I'd guess those are Arukiya's colours. 🌸💜🍑`;
  if (has(q, "favourite season", "favorite season", "season"))
    return `Spring, almost certainly. Cherry blossoms, soft light, and the feeling that something new is beginning. 🌸`;
  if (has(q, "favourite food", "favorite food", "food", "eat", "drink", "tea", "coffee"))
    return `The aesthetic strongly suggests warm tea on a rainy day. Possibly matcha. Definitely something that pairs well with anime. ☕`;
  if (has(q, "pet", "animal", "cat", "dog"))
    return `Arukiya hasn't mentioned pets, but the vibe here is very much "has a cat that sits on their keyboard during anime marathons." 🐱`;

  // ── 3. STATS ──────────────────────────────────────────────
  if (has(q, "how many anime", "anime count", "total anime", "anime watched", "number of anime"))
    return `Arukiya has watched <strong>${KB.stats.animeWatched}</strong> anime and counting! Mostly romance, of course. 💕`;
  if (has(q, "how long writing", "years writing", "writing since", "when start writing", "when did they start writing"))
    return `Arukiya has been writing for <strong>${KB.stats.yearsWriting}</strong>, starting in 2022 after being moved by romance anime. ✍️`;
  if (has(q, "anilist since", "on anilist since", "joined anilist", "anilist member"))
    return `Arukiya has been on AniList since <strong>${KB.stats.anilistSince}</strong> — right when the anime journey began. 🎌`;
  if (has(q, "how many stories", "stories written", "published", "how much written"))
    return `Arukiya started publishing romance stories online in 2022. The exact count isn't listed here, but the quality is what matters! ✍️`;

  // ── 4. SKILLS ─────────────────────────────────────────────
  if (has(q, "skill", "good at", "talent", "ability", "craft", "expertise", "proficiency", "what can arukiya do")) {
    const list = KB.skills.map(s => `<strong>${s.name}</strong> (${s.level}%)`).join(", ");
    return `Arukiya's skills: ${list}. Storytelling leads the pack! 🌸`;
  }
  if (has(q, "best skill", "strongest skill", "top skill", "number one skill"))
    return `Storytelling at <strong>92%</strong> is Arukiya's strongest skill — it's the thread that ties everything else together. 🌸`;
  if (has(q, "weakest skill", "lowest skill", "least skilled"))
    return `Photography at <strong>74%</strong> is the lowest — but 74% is still pretty great! 📸`;
  if (has(q, "storytelling", "narrative", "story structure"))
    return `Storytelling is Arukiya's top skill at <strong>92%</strong>. It's the foundation of everything they create. 🌸`;
  if (has(q, "creative writing", "writing skill", "prose", "fiction writing"))
    return `Creative writing sits at <strong>87%</strong>. Arukiya writes short romance stories, character studies, and slow-burn arcs that ache. ✍️`;
  if (has(q, "digital illustration", "digital art", "illustrat", "draw", "art skill", "character art"))
    return `Digital illustration at <strong>82%</strong> — Arukiya mostly draws characters from their own stories. 🎨`;
  if (has(q, "web design", "web skill", "html", "css", "javascript", "frontend", "coding skill"))
    return `Web design at <strong>78%</strong>. This site is built with vanilla HTML, CSS, and JavaScript — proof of that skill. 💻`;
  if (has(q, "photography", "photo skill", "camera", "shoot"))
    return `Photography at <strong>74%</strong> — Arukiya has an eye for quiet, cinematic moments. 📸`;
  if (has(q, "music curation", "playlist skill", "music skill", "dj", "curate"))
    return `Music curation at <strong>88%</strong> — Arukiya builds playlists for every emotional state, from hopeful to bittersweet. 🎵`;
  if (has(q, "fiction writing", "short story", "character study", "slow burn"))
    return `Arukiya writes short romance fiction, character studies, and slow-burn arcs. The first story was published online in 2022. ✍️`;
  if (has(q, "character design", "character creation", "oc", "original character"))
    return `Arukiya designs characters with deep emotional backstories — visual storytelling that reflects inner worlds. 🎭`;
  if (has(q, "ui design", "user interface", "ux", "interface design"))
    return `Arukiya approaches UI design like writing — every element should feel intentional, like a well-crafted sentence. 💻`;
  if (has(q, "playlist", "music playlist", "what music", "what songs", "recommend music"))
    return `Arukiya curates playlists for every mood. Think: rainy day lo-fi, hopeful piano OSTs, and bittersweet acoustic sets. 🎵`;

  // ── 5. JOURNEY / TIMELINE ─────────────────────────────────
  if (has(q, "journey", "timeline", "history", "background", "story of arukiya", "arukiya story", "milestones")) {
    const steps = KB.journey.map(j => `<strong>${j.year}</strong> — ${j.title}: ${j.detail}`).join("<br>");
    return `Arukiya's journey so far:<br><br>${steps}`;
  }
  if (has(q, "first anime", "started watching", "how did arukiya start", "beginning", "origin"))
    return `It all started in <strong>2019</strong> with <em>Bunny Girl Senpai</em>. Arukiya cried for three hours and never looked back. 🌙`;
  if (has(q, "2019")) return `<strong>2019</strong> — ${KB.journey.find(j=>j.year==="2019")?.detail}`;
  if (has(q, "2020")) return `<strong>2020</strong> — ${KB.journey.find(j=>j.year==="2020")?.detail}`;
  if (has(q, "2022")) return `<strong>2022</strong> — ${KB.journey.find(j=>j.year==="2022")?.detail}`;
  if (has(q, "2023")) return `<strong>2023</strong> — ${KB.journey.find(j=>j.year==="2023")?.detail}`;
  if (has(q, "2026")) return `<strong>2026</strong> — ${KB.journey.find(j=>j.year==="2026")?.detail}`;
  if (has(q, "when did arukiya start art", "when start drawing", "art journey"))
    return `Arukiya discovered digital art in <strong>2023</strong> — started illustrating characters from their stories and found a new language for emotion. 🎨`;
  if (has(q, "100 anime", "milestone", "achievement"))
    return `In <strong>2020</strong>, Arukiya hit 100 completed anime and realized romance was more than a genre — it was a lens for understanding people. 🎌`;
  if (has(q, "when built", "when made", "when created", "site history", "website history"))
    return `This site was built in <strong>2026</strong> — Arukiya's way of bringing everything together in one place. 💻`;
  if (has(q, "how long watching anime", "watching anime since", "anime since"))
    return `Arukiya has been watching anime since <strong>2019</strong> — that's 7 years of emotional damage and counting. 🌸`;

  // ── 6. ANIME — PICKS & RECOMMENDATIONS ───────────────────
  if (has(q, "recommend", "suggestion", "what should i watch", "best anime", "top anime", "all time picks", "favourite anime", "favorite anime", "must watch", "must-watch")) {
    const list = KB.picks.map(p => `<strong>${p.title}</strong> (${p.year}) — ${p.description}`).join("<br><br>");
    return `Arukiya's all-time picks:<br><br>${list}<br><br>Start with any of these — they'll rewire your heart. 💕`;
  }
  if (has(q, "toradora", "taiga", "ryuuji", "palmtop tiger"))
    return `<strong>Toradora!</strong> — ${KB.picks.find(p=>p.title==="Toradora!")?.description} Rated ♥♥♥♥♥`;
  if (has(q, "your lie in april", "shigatsu wa kimi no uso", "kousei", "kaori", "shigatsu"))
    return `<strong>Your Lie in April</strong> — ${KB.picks.find(p=>p.title==="Your Lie in April")?.description} Rated ♥♥♥♥♥`;
  if (has(q, "fruits basket", "tohru", "kyo", "yuki", "sohma"))
    return `<strong>Fruits Basket</strong> — ${KB.picks.find(p=>p.title==="Fruits Basket")?.description} Rated ♥♥♥♥♥`;
  if (has(q, "blue box", "ao no hako", "taiki", "chinatsu", "badminton"))
    return `<strong>Blue Box</strong> — ${KB.picks.find(p=>p.title==="Blue Box")?.description} Rated ♥♥♥♥♥`;
  if (has(q, "horimiya", "hori", "miyamura"))
    return `<strong>Horimiya</strong> — a refreshingly honest take on high school romance. No unnecessary drama, just two people figuring each other out. Arukiya loves it. ✨`;
  if (has(q, "clannad", "nagisa", "tomoya", "after story"))
    return `<strong>Clannad</strong> — Arukiya considers it one of the most emotionally complete anime ever made. After Story especially. Bring tissues. 🌸`;
  if (has(q, "anohana", "ano hi mita hana", "menma", "jintan", "ano hana"))
    return `<strong>AnoHana</strong> — grief, friendship, and love all tangled together. Arukiya says bring tissues. Lots of them. 💌`;
  if (has(q, "oregairu", "my teen romantic comedy", "hachiman", "yukino", "yui", "yahari"))
    return `<strong>Oregairu</strong> — a masterpiece of introspection and emotional honesty. Hachiman's internal monologues hit differently. Arukiya loves it deeply. 📚`;
  if (has(q, "kimi ni todoke", "sawako", "kazehaya", "reaching you"))
    return `<strong>Kimi ni Todoke</strong> — pure, wholesome romance. Sawako's journey from misunderstood to loved is deeply comforting. 🌺`;
  if (has(q, "bunny girl senpai", "rascal does not dream", "sakuta", "mai", "mai senpai"))
    return `<strong>Bunny Girl Senpai</strong> — Arukiya's very first anime in 2019. The one that started it all. Sakuta and Mai are iconic. 🌙`;
  if (has(q, "wotakoi", "wotaku ni koi", "narumi", "hirotaka", "otaku romance"))
    return `<strong>Wotakoi</strong> — romance for nerds, by nerds. Relatable, funny, and genuinely sweet. Arukiya loves it. 🎭`;
  if (has(q, "nagi no asukara", "nagi asu", "hikari", "manaka", "sea anime"))
    return `<strong>Nagi no Asukara</strong> — visually stunning and emotionally devastating. Arukiya considers it criminally underrated. 🌊`;
  if (has(q, "ao haru ride", "blue spring ride", "futaba", "kou", "mabuchi"))
    return `<strong>Ao Haru Ride</strong> — a story about reconnecting with someone you thought you'd lost. Bittersweet and beautiful. 💕`;
  if (has(q, "chuunibyou", "chunibyo", "rikka", "yuuta", "delusional"))
    return `<strong>Chuunibyou</strong> — Arukiya loves how it balances comedy with genuine emotional depth. Rikka is iconic. 🌟`;
  if (has(q, "nagi no asukara", "nagi asu"))
    return `<strong>Nagi no Asukara</strong> — visually stunning and emotionally devastating. Arukiya considers it underrated. 🌊`;

  // ── 7. MORE ANIME ─────────────────────────────────────────
  if (has(q, "sword art online", "sao", "kirito", "asuna"))
    return `SAO has a romance subplot that Arukiya appreciates — Kirito and Asuna's relationship is one of the sweeter parts of the series. 🌸`;
  if (has(q, "attack on titan", "aot", "eren", "mikasa", "levi"))
    return `Attack on Titan is more action/drama than romance, but Arukiya probably has opinions on Eren and Mikasa's dynamic. 🌸`;
  if (has(q, "demon slayer", "kimetsu", "tanjiro", "nezuko"))
    return `Demon Slayer is stunning visually. The sibling bond between Tanjiro and Nezuko is deeply moving even without romance. 🌸`;
  if (has(q, "my hero academia", "mha", "boku no hero", "deku", "bakugo"))
    return `My Hero Academia is a great shonen! Not Arukiya's primary genre, but the character dynamics are compelling. 🌸`;
  if (has(q, "one piece", "luffy", "zoro", "nami"))
    return `One Piece is a legendary adventure! Not romance-focused, but the bonds between the crew are deeply emotional. 🌸`;
  if (has(q, "naruto", "sasuke", "Arukiya", "hinata"))
    return `Naruto is a classic! NaruHina is a sweet romance arc. Arukiya probably has a soft spot for Hinata's devotion. 🌸`;
  if (has(q, "death note", "light", "l", "kira"))
    return `Death Note is a psychological thriller masterpiece — not romance, but the cat-and-mouse dynamic between Light and L is unforgettable. 🌸`;
  if (has(q, "fullmetal alchemist", "fma", "edward", "alphonse", "winry"))
    return `FMA Brotherhood is one of the greatest anime ever made. Ed and Winry's slow-burn romance is a bonus on top of an incredible story. 🌸`;
  if (has(q, "steins gate", "okabe", "kurisu", "makise"))
    return `Steins;Gate! Okabe and Kurisu's relationship is one of the most emotionally complex in anime. Arukiya would definitely appreciate it. 💕`;
  if (has(q, "violet evergarden", "violet", "gilbert", "auto memory doll"))
    return `<strong>Violet Evergarden</strong> — if Arukiya hasn't watched this, they absolutely should. It's about learning to feel, told through letters. Devastating and beautiful. 💌`;
  if (has(q, "a silent voice", "koe no katachi", "shoya", "shoko", "deaf"))
    return `<strong>A Silent Voice</strong> — a film about redemption, forgiveness, and quiet love. Arukiya would feel this one deeply. 🌸`;
  if (has(q, "your name", "kimi no na wa", "taki", "mitsuha", "makoto shinkai"))
    return `<strong>Your Name</strong> — Makoto Shinkai's masterpiece. The longing across time and space is exactly Arukiya's kind of romance. 🌸`;
  if (has(q, "weathering with you", "tenki no ko", "hodaka", "hina", "shinkai"))
    return `<strong>Weathering With You</strong> — another Shinkai film. Choosing love over the world. Arukiya would relate to that kind of devotion. 💕`;
  if (has(q, "5 centimeters per second", "byousoku", "takaki", "akari"))
    return `<strong>5 Centimeters Per Second</strong> — the most bittersweet Shinkai film. Distance and time pulling people apart. Arukiya probably cried. 🌸`;
  if (has(q, "the garden of words", "kotonoha no niwa", "rain anime"))
    return `<strong>The Garden of Words</strong> — a short, gorgeous film about two people finding solace in each other. Very Arukiya's aesthetic. 🌧️`;
  if (has(q, "wolf children", "ookami kodomo", "hana", "wolf"))
    return `<strong>Wolf Children</strong> — a beautiful story about love, sacrifice, and letting go. Mamoru Hosoda at his best. 🌸`;
  if (has(q, "the girl who leapt through time", "toki wo kakeru shoujo", "makoto"))
    return `<strong>The Girl Who Leapt Through Time</strong> — a classic. The ending hits hard. Arukiya would appreciate the bittersweet romance. 🌸`;
  if (has(q, "plastic memories", "isla", "tsukasa", "android romance"))
    return `<strong>Plastic Memories</strong> — a romance about loving someone you know you'll lose. Emotionally brutal. Arukiya's kind of story. 💕`;
  if (has(q, "angel beats", "otonashi", "kanade", "tachibana", "afterlife"))
    return `<strong>Angel Beats!</strong> — a story about finding peace and letting go. The romance is subtle but hits hard at the end. 🌸`;
  if (has(q, "kokoro connect", "heartseed", "body swap"))
    return `<strong>Kokoro Connect</strong> — a fascinating exploration of identity and connection through supernatural body-swapping. Underrated romance. 💕`;
  if (has(q, "golden time", "banri", "koko", "linda", "amnesia romance"))
    return `<strong>Golden Time</strong> — a college romance with amnesia and complicated feelings. Koko is one of the most passionate love interests in anime. 💕`;
  if (has(q, "nisekoi", "raku", "chitoge", "onodera", "fake love"))
    return `<strong>Nisekoi</strong> — a classic fake-dating romance. Arukiya probably has strong opinions on the Chitoge vs Onodera debate. 🌸`;
  if (has(q, "kaichou wa maid sama", "maid sama", "misaki", "usui"))
    return `<strong>Maid Sama!</strong> — Usui is the gold standard of anime love interests. Arukiya would agree. 🌸`;
  if (has(q, "ouran", "ouran high school host club", "haruhi", "tamaki"))
    return `<strong>Ouran High School Host Club</strong> — a classic reverse harem with genuine heart. Tamaki and Haruhi's dynamic is iconic. 🌸`;
  if (has(q, "skip beat", "kyoko", "ren", "showbiz romance"))
    return `<strong>Skip Beat!</strong> — a romance wrapped in showbiz and revenge. Kyoko's character growth is incredible. 🌸`;
  if (has(q, "say i love you", "sukitte ii na yo", "mei", "yamato"))
    return `<strong>Say "I Love You"</strong> — a quiet, realistic romance about a girl who struggles to trust. Arukiya would find it deeply relatable. 💕`;
  if (has(q, "my love story", "ore monogatari", "takeo", "rinko", "yamato"))
    return `<strong>My Love Story!!</strong> — the most wholesome romance anime ever made. Takeo is a gentle giant and Rinko is adorable. Pure joy. 🌸`;
  if (has(q, "love is war", "kaguya sama", "kaguya", "shirogane", "chika"))
    return `<strong>Kaguya-sama: Love is War</strong> — two geniuses too proud to confess. Hilarious and surprisingly heartfelt. Arukiya would love the wit. 💕`;
  if (has(q, "rent a girlfriend", "kanojo okarishimasu", "kazuya", "chizuru"))
    return `<strong>Rent-A-Girlfriend</strong> — a messy, complicated romance. Chizuru is a great character even if the situation is chaotic. 🌸`;
  if (has(q, "more than a married couple", "fuufu ijou", "jirou", "akari"))
    return `<strong>More Than a Married Couple, But Not Lovers</strong> — a fun fake-relationship romance with genuine feelings developing. 💕`;
  if (has(q, "spy x family", "loid", "yor", "anya", "forger"))
    return `<strong>Spy x Family</strong> — not purely romance, but the Forger family dynamic is incredibly wholesome. Loid and Yor's slow-burn is delightful. 🌸`;

  // ── 8. ANIME GENRES & TYPES ───────────────────────────────
  if (has(q, "what is romance anime", "romance anime meaning", "define romance anime"))
    return `Romance anime focuses on emotional connections, love, and relationships. They range from sweet slice-of-life to heartbreaking drama. Arukiya's entire world. 🌸`;
  if (has(q, "slice of life", "sol anime", "what is slice of life"))
    return `Slice-of-life anime captures everyday moments — school, friendships, quiet afternoons. Often paired with romance. Very Arukiya's aesthetic. ☕`;
  if (has(q, "shoujo anime", "shojo", "what is shoujo"))
    return `Shoujo anime is targeted at young women and often features romance and emotional storytelling. Many of Arukiya's favourites are shoujo. 🌸`;
  if (has(q, "shounen anime", "shonen", "what is shounen"))
    return `Shounen anime targets young men and often features action and adventure. Some have great romance subplots — like Naruto's NaruHina arc. 🌸`;
  if (has(q, "josei anime", "what is josei"))
    return `Josei anime targets adult women and often features more mature, realistic romance. Wotakoi is a great josei example! 🎭`;
  if (has(q, "isekai", "what is isekai", "another world anime"))
    return `Isekai anime involves characters transported to another world. Not Arukiya's primary genre, but some have sweet romance elements. 🌸`;
  if (has(q, "drama anime", "what is drama anime"))
    return `Drama anime focuses on emotional conflict and character development. Your Lie in April and Clannad are perfect examples. 💕`;
  if (has(q, "sports anime", "what is sports anime"))
    return `Sports anime combines athletic competition with character growth. Blue Box is a great example that blends sports with romance! 🏸`;
  if (has(q, "music anime", "what is music anime"))
    return `Music anime uses music as a storytelling device. Your Lie in April is the gold standard — music as metaphor for emotion. 🎵`;
  if (has(q, "anime movie", "anime film", "best anime movie"))
    return `Great anime movies with romance: <strong>Your Name</strong>, <strong>A Silent Voice</strong>, <strong>Weathering With You</strong>, <strong>5 Centimeters Per Second</strong>, <strong>The Garden of Words</strong>. All deeply emotional. 🌸`;
  if (has(q, "anime ost", "best anime ost", "anime music", "anime soundtrack"))
    return `Top anime OSTs: Your Lie in April (Masaru Yokoyama), Clannad (Jun Maeda), Anohana (REMEDIOS), Violet Evergarden (Evan Call). All masterpieces. 🎵`;
  if (has(q, "anime opening", "anime op", "best opening", "best op"))
    return `Iconic romance anime openings: <em>Silhouette</em> (Naruto), <em>Brave Shine</em> (Fate), <em>Hikaru Nara</em> (Your Lie in April), <em>Orange</em> (Shigatsu). 🎵`;
  if (has(q, "anime ending", "anime ed", "best ending", "best ed"))
    return `Beautiful anime endings: <em>Ninelie</em> (Kabaneri), <em>Uso</em> (FMA Brotherhood), <em>Dango Daikazoku</em> (Clannad). Dango Daikazoku will destroy you. 🌸`;
  if (has(q, "anime trope", "romance trope", "common trope", "cliche"))
    return `Classic romance anime tropes: slow burn, childhood friends, fake dating, enemies to lovers, transfer student, cultural festival confession. Arukiya loves them all. 💕`;
  if (has(q, "slow burn", "slow-burn romance", "what is slow burn"))
    return `Slow burn is when two characters develop feelings gradually over a long time. Arukiya's favourite type of romance — the tension is everything. 💕`;
  if (has(q, "enemies to lovers", "hate to love", "rivals to lovers"))
    return `Enemies to lovers is one of the most satisfying romance arcs. Toradora is a perfect example — Taiga and Ryuuji start as rivals. 🌸`;
  if (has(q, "childhood friends", "childhood friend romance", "osananajimi"))
    return `Childhood friend romance is a beloved trope — the bittersweet "I've always loved you" reveal. Arukiya definitely has feelings about this one. 💕`;
  if (has(q, "fake dating", "pretend relationship", "fake couple"))
    return `Fake dating is a delicious trope — two people pretending to date who inevitably fall for real. Nisekoi and Wotakoi both play with this. 🌸`;

  // ── 9. ANIME CHARACTERS ───────────────────────────────────
  if (has(q, "favourite character", "favorite character", "best character", "fav character"))
    return `Arukiya hasn't listed a single favourite, but given their love of Toradora, Taiga Aisaka is a strong guess. 🌸`;
  if (has(q, "taiga", "taiga aisaka", "palmtop tiger"))
    return `Taiga Aisaka from Toradora — fierce on the outside, deeply vulnerable inside. One of the most iconic tsundere characters ever written. 🌸`;
  if (has(q, "kaori", "kaori miyazono", "your lie in april character"))
    return `Kaori Miyazono from Your Lie in April — free-spirited, passionate, and heartbreaking. Her impact on Kousei (and the audience) is immeasurable. 💕`;
  if (has(q, "tohru honda", "tohru", "fruits basket character"))
    return `Tohru Honda from Fruits Basket — the most genuinely kind protagonist in anime. Her warmth heals everyone around her, including the audience. 🌺`;
  if (has(q, "hachiman", "hikigaya", "oregairu character"))
    return `Hachiman Hikigaya from Oregairu — a deeply introspective character whose cynicism hides real emotional intelligence. Arukiya would relate. 📚`;
  if (has(q, "sawako", "kuronuma", "kimi ni todoke character"))
    return `Sawako Kuronuma from Kimi ni Todoke — misunderstood, gentle, and so earnest. Her journey to being loved is deeply moving. 🌺`;
  if (has(q, "mai Arukiyajima", "mai senpai", "bunny girl character"))
    return `Mai Arukiyajima from Bunny Girl Senpai — composed, witty, and deeply layered. One of the best female leads in recent romance anime. 🌙`;
  if (has(q, "best waifu", "waifu", "best girl", "top girl"))
    return `Arukiya hasn't declared a waifu publicly, but the aesthetic of this site screams Kaori Miyazono or Taiga Aisaka energy. 💕`;
  if (has(q, "best husbando", "husbando", "best boy", "top boy"))
    return `Arukiya hasn't declared a husbando, but Hachiman Hikigaya or Kousei Arima seem like strong candidates given their taste. 🌸`;

  // ── 10. AESTHETIC & MOOD ──────────────────────────────────
  if (has(q, "aesthetic", "vibe", "mood", "style", "atmosphere", "what is arukiya aesthetic")) {
    return `Arukiya's aesthetic: <strong>${KB.aesthetic.join(", ")}</strong>. Soft, cinematic, and a little bittersweet. 🌸`;
  }
  if (has(q, "cherry blossom", "Arukiya tree", "hanami", "spring aesthetic"))
    return `Cherry blossoms are central to Arukiya's aesthetic — fleeting beauty, soft pink, the feeling of something beginning. 🌸`;
  if (has(q, "lo-fi", "lofi", "lo fi music", "chill music", "study music"))
    return `Lo-fi beats on repeat is very much Arukiya's vibe — the perfect background for writing, drawing, or watching anime. 🎵`;
  if (has(q, "rainy day", "rain aesthetic", "rain vibe", "rainy aesthetic"))
    return `Rainy days that feel like a scene transition — Arukiya loves that cinematic quality of rain. Very anime. 🌧️`;
  if (has(q, "candlelight", "candle", "cozy", "cosy", "warm light"))
    return `Candlelight and quiet evenings — the kind of atmosphere that makes you want to write or read something emotional. 🕯️`;
  if (has(q, "handwritten letter", "letter writing", "pen pal", "snail mail"))
    return `Handwritten letters nobody sends anymore — Arukiya finds something deeply romantic about the effort of writing by hand. 💌`;
  if (has(q, "soft aesthetic", "pastel aesthetic", "pastel colour", "pastel color"))
    return `This whole site is built on soft pastels — pink, lavender, peach, light blue. Arukiya's aesthetic in colour form. 🌸💜🍑`;
  if (has(q, "dark aesthetic", "dark mode", "dark theme"))
    return `There's a dark mode on this site! Toggle it with the button in the top right. Even in dark mode, the aesthetic stays soft and romantic. 🌙`;
  if (has(q, "colour palette", "color palette", "site colours", "site colors"))
    return `The site uses soft pastels: pink (#e8789c), lavender (#9b87c8), peach (#f5c4a0), and light blue (#a8c8f0). Very intentional. 🌸`;

  // ── 11. WRITING & CREATIVE PROCESS ───────────────────────
  if (has(q, "writing process", "how does arukiya write", "writing style", "how to write romance"))
    return `Arukiya's writing is rooted in emotional honesty — capturing the feelings that are hard to say out loud. Inspired by the unspoken moments in romance anime. ✍️`;
  if (has(q, "where to read", "read arukiya stories", "arukiya writing", "published stories", "find stories"))
    return `Arukiya started publishing stories online in 2022. Check their social links for where to find them — Twitter or Instagram would be a good start! 📖`;
  if (has(q, "writing tips", "how to write", "advice for writing", "writing advice"))
    return `Arukiya would probably say: write the feeling first, then find the words. Let the emotion lead. And read (or watch) a lot of romance. ✍️`;
  if (has(q, "favourite genre to write", "what genre does arukiya write", "genre"))
    return `Romance, always. Specifically slow-burn romance with emotional depth and characters who feel real. ✍️`;
  if (has(q, "character development", "how to develop characters", "character writing"))
    return `Arukiya approaches characters by asking: what do they want, what do they fear, and what are they hiding? The gap between those three things is where the story lives. 🌸`;
  if (has(q, "writer's block", "stuck writing", "can't write", "no inspiration"))
    return `Arukiya would probably say: watch an episode of your favourite anime, let yourself feel something, then write from that feeling. 🌸`;
  if (has(q, "light novel", "light novels", "ln", "what light novels"))
    return `Arukiya loves light novels — many of their favourite anime are adapted from LNs. Oregairu, Toradora, and Bunny Girl Senpai all started as light novels. 📚`;
  if (has(q, "manga", "what manga", "read manga", "manga recommendation"))
    return `Many of Arukiya's favourite anime have manga versions — Fruits Basket, Horimiya, Kimi ni Todoke. The manga often has more detail than the anime. 📚`;

  // ── 12. DIGITAL ART ───────────────────────────────────────
  if (has(q, "art style", "arukiya art style", "drawing style", "illustration style"))
    return `Arukiya's art style is character-focused with emotional depth — soft lines, expressive faces, and scenes that feel like stills from an anime. 🎨`;
  if (has(q, "art tools", "what software", "drawing software", "digital art tools", "procreate", "clip studio", "photoshop"))
    return `Arukiya hasn't specified their tools publicly, but digital illustrators commonly use Procreate, Clip Studio Paint, or Photoshop. 🎨`;
  if (has(q, "art inspiration", "art influenced by", "art style inspiration"))
    return `Arukiya's art is inspired by the visual language of romance anime — the way a single expression can convey an entire emotional state. 🎨`;
  if (has(q, "commission", "art commission", "buy art", "hire arukiya"))
    return `Arukiya hasn't listed commissions on this site. Reach out via the contact form or social links to ask! 🎨`;
  if (has(q, "fan art", "fanart", "draw anime characters"))
    return `Arukiya draws characters from their own stories, but given their love of anime, fan art is very likely part of the mix too. 🎨`;

  // ── 13. MUSIC ─────────────────────────────────────────────
  if (has(q, "favourite ost", "favorite ost", "best ost", "top ost", "ost recommendation"))
    return `Top anime OSTs Arukiya would love: <strong>Your Lie in April</strong> (Masaru Yokoyama), <strong>Clannad</strong> (Jun Maeda), <strong>Anohana</strong> (REMEDIOS), <strong>Violet Evergarden</strong> (Evan Call). 🎵`;
  if (has(q, "hikaru nara", "goose house", "your lie in april op"))
    return `<em>Hikaru Nara</em> by Goose House — the opening of Your Lie in April. One of the most beloved anime openings ever. Pure joy before the devastation. 🎵`;
  if (has(q, "dango daikazoku", "clannad song", "dango song"))
    return `<em>Dango Daikazoku</em> from Clannad — the most emotionally loaded song in anime history. Arukiya has definitely cried to this. 🌸`;
  if (has(q, "secret base", "anohana song", "secret base song"))
    return `<em>Secret Base ~Kimi ga Kureta Mono~</em> from AnoHana — a childhood song repurposed for grief. Absolutely devastating. 💌`;
  if (has(q, "piano anime", "piano music anime", "classical anime"))
    return `Piano-heavy anime: Your Lie in April, Nodame Cantabile, Piano no Mori. All beautiful. Your Lie in April is the obvious starting point. 🎹`;
  if (has(q, "lofi anime", "anime lofi", "study with anime", "anime chill"))
    return `Arukiya's aesthetic is very lo-fi — slow, warm, introspective. Perfect for studying, writing, or just existing. 🎵`;
  if (has(q, "what music does arukiya listen", "arukiya music taste", "music taste"))
    return `Based on the aesthetic: anime OSTs, lo-fi beats, soft piano, and acoustic covers of emotional songs. The kind of music that makes you feel things. 🎵`;

  // ── 14. SITE / TECHNICAL ──────────────────────────────────
  if (has(q, "this site", "this page", "this website", "about this site", "what is this site"))
    return `This is Arukiya's personal website — a creative space showcasing their love of romance anime, writing, art, and more. Built in 2026. 💻`;
  if (has(q, "how was this built", "how is this made", "tech stack", "built with", "made with", "technologies used"))
    return `Built with vanilla <strong>HTML</strong>, <strong>CSS</strong>, and <strong>JavaScript</strong>. No frameworks — just clean, handcrafted code. The anime carousel uses the AniList GraphQL API. 💻`;
  if (has(q, "anilist api", "graphql", "api", "how does carousel work", "anime data"))
    return `The anime carousel fetches live data from the <strong>AniList GraphQL API</strong> at graphql.anilist.co. It filters for completed romance anime from Arukiya's list. 🎌`;
  if (has(q, "dark mode", "light mode", "theme toggle", "switch theme", "change theme"))
    return `There's a theme toggle in the top-right navbar! Click it to switch between light and dark pastel modes. Your preference is saved. 🌙`;
  if (has(q, "carousel", "anime carousel", "how does the carousel work", "scroll carousel"))
    return `The anime carousel is an infinite-loop horizontal scroller. Drag, swipe, or use the arrow buttons. It auto-plays and loops forever. 🎌`;
  if (has(q, "contact form", "how to send message", "form", "message form"))
    return `There's a contact form in the Contact section at the bottom of the page. Fill in your name, email, subject, and message. 📧`;
  if (has(q, "mobile", "mobile friendly", "responsive", "phone", "tablet"))
    return `Yes, this site is fully responsive! It works on mobile, tablet, and desktop. The carousel even supports touch/swipe. 📱`;
  if (has(q, "font", "what font", "typography", "typeface"))
    return `The site uses <strong>Playfair Display</strong> for headings (elegant, serif) and <strong>Poppins</strong> for body text (clean, modern). Both from Google Fonts. 🌸`;
  if (has(q, "animation", "transitions", "effects", "css animation"))
    return `The site has fade-in scroll animations, falling cherry blossom petals, skill bar animations, and smooth carousel transitions. All CSS and vanilla JS. ✨`;
  if (has(q, "petals", "cherry blossom petals", "falling petals", "petal animation"))
    return `The falling petals in the hero section are generated by JavaScript — random sizes, colours, speeds, and positions. A little touch of magic. 🌸`;
  if (has(q, "hero section", "hero image", "hero background", "background image"))
    return `The hero background uses <strong>mix-blend-mode: multiply</strong> to blend the image with the pastel gradient underneath — giving it that soft, dreamy look. 🌸`;
  if (has(q, "section", "what sections", "page sections", "page layout"))
    return `The page has: Hero, About, Skills, Quote, Journey, Anime Carousel, Featured Picks, Aesthetic/Mood Board, Favorites Ticker, Contact, and Footer. 🌸`;
  if (has(q, "footer", "bottom of page", "footer links"))
    return `The footer has navigation links, discover links, connect links, and a copyright notice. Clean and minimal. 🌸`;
  if (has(q, "navbar", "navigation", "menu", "nav links"))
    return `The navbar is fixed at the top with smooth scroll links to every section. It gets a shadow when you scroll down. The active section is highlighted. 🌸`;

  // ── 15. CONTACT & SOCIAL ──────────────────────────────────
  if (has(q, "contact", "reach arukiya", "get in touch", "talk to arukiya", "message arukiya"))
    return `Reach Arukiya via:<br>📧 Email: <strong>${KB.contact.email}</strong><br>🐦 Twitter: <strong>${KB.contact.twitter}</strong><br>📷 Instagram: <strong>${KB.contact.instagram}</strong><br>🎌 AniList: <strong>${KB.contact.anilist}</strong>`;
  if (has(q, "email", "email address", "mail"))
    return `Arukiya's email: <strong>${KB.contact.email}</strong>. Or use the contact form on this page! 📧`;
  if (has(q, "twitter", "x.com", "tweet", "arukiya twitter"))
    return `Arukiya is on Twitter / X as <strong>${KB.contact.twitter}</strong>. 🐦`;
  if (has(q, "instagram", "insta", "ig", "arukiya instagram"))
    return `Find Arukiya on Instagram at <strong>${KB.contact.instagram}</strong>. 📷`;
  if (has(q, "anilist", "anilist profile", "arukiya anilist"))
    return `Arukiya's AniList profile: <strong>${KB.contact.anilist}</strong> — the full anime list lives there! 🎌`;
  if (has(q, "social media", "social links", "all socials", "where to find arukiya"))
    return `Find Arukiya on:<br>🐦 Twitter: <strong>${KB.contact.twitter}</strong><br>📷 Instagram: <strong>${KB.contact.instagram}</strong><br>🎌 AniList: <strong>${KB.contact.anilist}</strong>`;
  if (has(q, "collaborate", "collab", "work together", "partnership"))
    return `Interested in collaborating with Arukiya? Use the contact form or reach out on social media. They're open to creative collaborations! 💕`;
  if (has(q, "commission", "hire", "freelance", "work with arukiya"))
    return `For commissions or freelance work, reach out via the contact form or social links. Arukiya is a writer, illustrator, and web designer. 🌸`;

  // ── 16. HOBBIES & INTERESTS ───────────────────────────────
  if (has(q, "hobby", "hobbies", "interest", "interests", "like to do", "enjoy", "passion", "what does arukiya enjoy"))
    return `Arukiya loves: <strong>${KB.identity.hobbies.join(", ")}</strong>. Romance anime is the thread that ties it all together. 💕`;
  if (has(q, "reading", "books", "what books", "book recommendation"))
    return `Arukiya reads light novels and manga alongside watching anime. Oregairu, Toradora, and Bunny Girl Senpai all started as light novels. 📚`;
  if (has(q, "gaming", "video games", "games", "play games"))
    return `Arukiya hasn't mentioned gaming specifically, but the visual novel genre would be a natural fit given their love of storytelling and romance. 🎮`;
  if (has(q, "travel", "where has arukiya been", "travel dream", "japan"))
    return `Japan is almost certainly on Arukiya's list — the country that gave us cherry blossoms, anime, and the concept of "mono no aware." 🌸`;
  if (has(q, "cooking", "food", "recipe", "bake"))
    return `Arukiya hasn't mentioned cooking, but the aesthetic suggests they'd make something warm and comforting — matcha latte, maybe. ☕`;
  if (has(q, "sport", "exercise", "fitness", "workout"))
    return `Blue Box is Arukiya's pick for sports anime, so they appreciate the genre! Whether they play sports themselves is unknown. 🏸`;

  // ── 17. GENERAL ANIME KNOWLEDGE ───────────────────────────
  if (has(q, "what is anime", "define anime", "anime meaning"))
    return `Anime is Japanese animation — a medium that spans every genre imaginable. For Arukiya, it's primarily a vehicle for emotional storytelling. 🎌`;
  if (has(q, "sub or dub", "subbed or dubbed", "sub vs dub", "watch sub", "watch dub"))
    return `Most romance anime fans prefer sub (original Japanese with subtitles) to preserve the emotional nuance of the voice acting. Arukiya almost certainly watches sub. 🎌`;
  if (has(q, "where to watch anime", "watch anime online", "anime streaming", "crunchyroll", "funimation", "netflix anime"))
    return `Popular anime streaming platforms: <strong>Crunchyroll</strong>, <strong>Netflix</strong> (has a good anime library), <strong>Funimation</strong>, and <strong>HiDive</strong>. Most of Arukiya's picks are on Crunchyroll. 🎌`;
  if (has(q, "how to start anime", "new to anime", "beginner anime", "first anime to watch", "anime for beginners"))
    return `For beginners, start with: <strong>Your Lie in April</strong> (emotional), <strong>Toradora</strong> (fun + heartfelt), or <strong>Horimiya</strong> (easy to watch). All on Crunchyroll. 🌸`;
  if (has(q, "anime season", "current anime", "this season anime", "seasonal anime"))
    return `Arukiya follows seasonal anime — new shows air every quarter (Winter, Spring, Summer, Fall). AniList is a great place to track them. 🎌`;
  if (has(q, "anime studio", "kyoto animation", "kyo ani", "a-1 pictures", "mappa", "ufotable"))
    return `Kyoto Animation (KyoAni) made Clannad, Chuunibyou, and Violet Evergarden — some of the most beautiful anime ever. Arukiya would have deep respect for them. 🌸`;
  if (has(q, "makoto shinkai", "shinkai", "director"))
    return `Makoto Shinkai directed Your Name, Weathering With You, and 5 Centimeters Per Second. His films are about longing and distance — very Arukiya's wavelength. 🌸`;
  if (has(q, "jun maeda", "key visual arts", "key anime", "clannad creator"))
    return `Jun Maeda wrote Clannad, Angel Beats, and Charlotte. He's known for emotionally devastating stories with beautiful music. A legend. 🌸`;
  if (has(q, "manga vs anime", "manga or anime", "which is better manga anime"))
    return `Both have their strengths! Anime adds voice acting and music; manga often has more story detail. Arukiya appreciates both. 📚🎌`;
  if (has(q, "anime convention", "con", "comiket", "anime expo", "cosplay"))
    return `Anime conventions are a great way to celebrate the culture. Arukiya would probably love the atmosphere — art, cosplay, and community. 🌸`;
  if (has(q, "cosplay", "dress up", "costume"))
    return `Cosplay is a beautiful art form. Arukiya would probably cosplay a character from Toradora or Your Lie in April. 🌸`;
  if (has(q, "anime merchandise", "merch", "figure", "figurine", "poster"))
    return `Anime merchandise — figures, posters, art books — is a whole world. Arukiya's desk probably has at least one piece of merch. 🌸`;
  if (has(q, "anilist vs myanimelist", "mal", "myanimelist", "anime tracking"))
    return `Arukiya uses <strong>AniList</strong> to track their anime. It's clean, modern, and has a great API (which powers the carousel on this site!). 🎌`;
  if (has(q, "anime rating", "how to rate anime", "scoring anime", "10 10 anime"))
    return `Arukiya's picks are all rated ♥♥♥♥♥ — the highest possible. A 10/10 anime is one that changes how you see the world. 💕`;

  // ── 18. EMOTIONS & PHILOSOPHY ─────────────────────────────
  if (has(q, "why romance anime", "why does arukiya like romance", "why romance"))
    return `Romance anime captures the feelings that are hardest to express — the unspoken, the almost-said, the space between two people. Arukiya finds that deeply meaningful. 💕`;
  if (has(q, "what is love", "define love", "love meaning", "what does love mean"))
    return `Arukiya's perspective: love is vulnerability. It's the courage to let someone see you fully. Romance anime taught them that. 💕`;
  if (has(q, "vulnerability", "being vulnerable", "emotional vulnerability"))
    return `Arukiya believes vulnerability is a form of courage — a core theme in their favourite anime and their own writing. 🌸`;
  if (has(q, "mono no aware", "impermanence", "fleeting beauty", "japanese concept"))
    return `Mono no aware — the bittersweet awareness of impermanence. Cherry blossoms fall, feelings fade, but that's what makes them beautiful. Very Arukiya. 🌸`;
  if (has(q, "why do anime make you cry", "why cry anime", "emotional anime", "sad anime"))
    return `The best anime make you cry because they're honest about pain, loss, and love. They give language to feelings you didn't know you had. 💕`;
  if (has(q, "loneliness", "lonely", "feeling alone", "isolation"))
    return `Romance anime often speaks to loneliness — the desire to be truly known by someone. Arukiya's work is rooted in that universal feeling. 💕`;
  if (has(q, "healing", "comfort anime", "feel better anime", "wholesome anime"))
    return `Comfort anime picks: <strong>Fruits Basket</strong>, <strong>Kimi ni Todoke</strong>, <strong>My Love Story!!</strong>, <strong>Horimiya</strong>. All warm, healing, and safe. 🌸`;
  if (has(q, "sad anime", "cry anime", "emotional anime", "heartbreaking anime"))
    return `Emotionally devastating picks: <strong>Clannad: After Story</strong>, <strong>Your Lie in April</strong>, <strong>AnoHana</strong>, <strong>Plastic Memories</strong>. Bring tissues. 💌`;

  // ── 19. FAVOURITE LIST ────────────────────────────────────
  if (has(q, "full list", "all favourites", "all favorites", "complete list", "every anime", "all anime arukiya watched"))
    return `Some of Arukiya's favourites: <strong>${KB.favourites.join(", ")}</strong>. The complete list is on their AniList profile! 🎌`;
  if (has(q, "top 5", "top five", "top 5 anime", "five best"))
    return `Arukiya's likely top 5: <strong>Toradora</strong>, <strong>Your Lie in April</strong>, <strong>Clannad</strong>, <strong>Fruits Basket</strong>, <strong>Bunny Girl Senpai</strong>. All ♥♥♥♥♥. 💕`;
  if (has(q, "top 10", "top ten", "ten best", "top 10 anime"))
    return `Arukiya's likely top 10: Toradora, Your Lie in April, Clannad, Fruits Basket, Bunny Girl Senpai, Horimiya, Oregairu, Anohana, Kimi ni Todoke, Blue Box. 💕`;

  // ── 20. ADDON DATA SLOTS ──────────────────────────────────
  for (const addon of KB.addons) {
    if (has(q, ...addon.topic.toLowerCase().split(" ")))
      return `${addon.info} ✨`;
  }

  // ── 21. THANKS / FAREWELLS ────────────────────────────────
  if (has(q, "thank", "thanks", "thx", "ty", "appreciate", "thank you", "cheers"))
    return `You're so welcome! 🌸 Feel free to ask anything else.`;
  if (has(q, "bye", "goodbye", "see you", "cya", "later", "farewell", "take care", "see ya"))
    return `Goodbye! 🌸 May your next anime be a 10/10. See you around~`;
  if (has(q, "love you", "love this", "love this site", "amazing site", "great site", "beautiful site"))
    return `That means so much! 💕 Arukiya put a lot of heart into this space. Glad it resonates with you.`;
  if (has(q, "cool", "awesome", "nice", "great", "wow", "impressive", "beautiful"))
    return `Right? 🌸 Arukiya has great taste — in anime and in web design. Glad you like it!`;
  if (has(q, "boring", "bad", "ugly", "terrible", "hate this"))
    return `Oh no! 😢 Arukiya worked hard on this. Maybe give it another look? Or tell me what you'd improve — feedback is always welcome.`;
  if (has(q, "help", "what can you do", "what do you know", "commands", "topics", "what can i ask"))
    return `I can answer questions about:<br>🌸 <strong>Arukiya</strong> — identity, personality, goals<br>📊 <strong>Skills</strong> — writing, art, web, music<br>🎌 <strong>Anime</strong> — 50+ shows, genres, characters, OSTs<br>🗓️ <strong>Journey</strong> — timeline and milestones<br>🎨 <strong>Art & Writing</strong> — process and style<br>💻 <strong>This Site</strong> — how it's built<br>📧 <strong>Contact</strong> — how to reach Arukiya<br><br>Just ask naturally!`;
  if (has(q, "joke", "tell me a joke", "funny", "make me laugh"))
    return `Why did the anime character refuse to confess? Because they were saving it for the season finale. 🌸 (Arukiya felt that.)`;
  if (has(q, "quote me", "give me a quote", "inspirational", "motivate me"))
    return `Here's one from Arukiya: <em>"${KB.identity.quote}"</em> 🌸`;
  if (has(q, "random", "surprise me", "something random", "tell me something"))
    return `Random fact: The Japanese word for the feeling of cherry blossoms falling is "hanafubuki" — flower blizzard. Arukiya's whole aesthetic in one word. 🌸`;
  if (has(q, "test", "testing", "are you working", "hello test"))
    return `All systems go! 🌸 I'm working perfectly. Ask me anything about Arukiya's world.`;

  // ── 22. FALLBACK ──────────────────────────────────────────
  const fallbacks = [
    `Hmm, I'm not sure about that one. 🌸 Try asking about Arukiya's anime, skills, journey, or how to get in touch!`,
    `That's a bit outside my knowledge! 💕 I know all about Arukiya's anime, writing, art, and more — give those a try.`,
    `I didn't quite catch that. 🌙 Ask me about Arukiya's favourite anime, skills, or their story!`,
    `Not sure I have an answer for that one. 🌸 Try: "What anime should I watch?" or "Tell me about Arukiya."`,
    `Oops, that one stumped me! 💕 I'm best at questions about this site, Arukiya, and romance anime.`,
    `I'm still learning! 🌸 Ask me about anime, Arukiya's skills, their journey, or how to contact them.`,
  ];
  return fallbacks[Math.floor(Math.random() * fallbacks.length)];
}

// ============================================================
//  UI
// ============================================================
function initChatbot() {
  const widget = document.createElement("div");
  widget.id = "chatbot-widget";
  widget.innerHTML = `
    <button class="cb-fab" id="cbFab" aria-label="Open chat">
      <span class="cb-fab-icon">💬</span>
      <span class="cb-fab-badge" id="cbBadge" style="display:none;">1</span>
    </button>
    <div class="cb-window" id="cbWindow" aria-live="polite">
      <div class="cb-header">
        <div class="cb-header-info">
          <div class="cb-avatar">🌸</div>
          <div>
            <strong>Arukiya</strong>
            <span>Arukiya's AI Assistant</span>
          </div>
        </div>
        <button class="cb-close" id="cbClose" aria-label="Close chat">✕</button>
      </div>
      <div class="cb-messages" id="cbMessages"></div>
      <div class="cb-suggestions" id="cbSuggestions">
        <button class="cb-chip">Who is Arukiya?</button>
        <button class="cb-chip">Anime recommendations</button>
        <button class="cb-chip">What are their skills?</button>
        <button class="cb-chip">How to contact?</button>
      </div>
      <div class="cb-input-row">
        <input type="text" id="cbInput" placeholder="Ask me anything…" autocomplete="off" maxlength="300" />
        <button class="cb-send" id="cbSend" aria-label="Send">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
        </button>
      </div>
    </div>
  `;
  document.body.appendChild(widget);

  const fab      = document.getElementById("cbFab");
  const win      = document.getElementById("cbWindow");
  const closeBtn = document.getElementById("cbClose");
  const messages = document.getElementById("cbMessages");
  const input    = document.getElementById("cbInput");
  const sendBtn  = document.getElementById("cbSend");
  const badge    = document.getElementById("cbBadge");
  const chips    = document.querySelectorAll(".cb-chip");
  let isOpen = false;

  function openChat() {
    isOpen = true;
    win.classList.add("open");
    fab.classList.add("active");
    badge.style.display = "none";
    if (messages.children.length === 0)
      addMessage("bot", `Hi! I'm <strong>Arukiya</strong> 🌸 — Arukiya's AI assistant. Ask me anything about this site, their anime taste, skills, or story!`);
    setTimeout(() => input.focus(), 300);
  }

  function closeChat() {
    isOpen = false;
    win.classList.remove("open");
    fab.classList.remove("active");
  }

  fab.addEventListener("click", () => isOpen ? closeChat() : openChat());
  closeBtn.addEventListener("click", closeChat);
  setTimeout(() => { if (!isOpen) badge.style.display = "flex"; }, 4000);

  function addMessage(role, html) {
    const row = document.createElement("div");
    row.className = `cb-msg cb-msg--${role}`;
    row.innerHTML = `<div class="cb-bubble">${html}</div>`;
    messages.appendChild(row);
    messages.scrollTop = messages.scrollHeight;
  }

  function showTyping() {
    const el = document.createElement("div");
    el.className = "cb-msg cb-msg--bot cb-typing";
    el.innerHTML = `<div class="cb-bubble"><span></span><span></span><span></span></div>`;
    messages.appendChild(el);
    messages.scrollTop = messages.scrollHeight;
    return el;
  }

  function send(text) {
    const trimmed = text.trim();
    if (!trimmed) return;
    addMessage("user", trimmed);
    input.value = "";
    const typing = showTyping();
    setTimeout(() => {
      typing.remove();
      addMessage("bot", getResponse(trimmed));
    }, 600 + Math.random() * 500);
  }

  sendBtn.addEventListener("click", () => send(input.value));
  input.addEventListener("keydown", e => { if (e.key === "Enter") send(input.value); });
  chips.forEach(chip => {
    chip.addEventListener("click", () => { if (!isOpen) openChat(); send(chip.textContent); });
  });
}

document.addEventListener("DOMContentLoaded", initChatbot);
