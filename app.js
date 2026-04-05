// ===== Config =====
const USERNAME = "Arukiya"; // <-- Change this

const ANILIST_API = "https://graphql.anilist.co";

const QUERY = `
query ($userName: String) {
  MediaListCollection(userName: $userName, type: ANIME, status: COMPLETED) {
    lists {
      entries {
        media {
          title { romaji english }
          coverImage { large }
          averageScore
          genres
          description(asHtml: false)
        }
      }
    }
  }
}`;

// ===== Navbar scroll shadow + active link =====
const navbar = document.getElementById("navbar");
const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 40);

  let current = "";
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 100) current = sec.id;
  });
  document.querySelectorAll(".nav-links a").forEach(a => {
    a.classList.toggle("active", a.getAttribute("href") === `#${current}`);
  });
}, { passive: true });

// ===== Theme Toggle =====
const themeToggle = document.getElementById("themeToggle");
const html = document.documentElement;

const savedTheme = localStorage.getItem("theme") || "light";
html.setAttribute("data-theme", savedTheme);
themeToggle.textContent = "";
themeToggle.innerHTML = `<span id="themeIcon">${savedTheme === "dark" ? "☀️" : "🌙"}</span> <span id="themeLabel">${savedTheme === "dark" ? "Light" : "Dark"}</span>`;

themeToggle.addEventListener("click", () => {
  const current = html.getAttribute("data-theme");
  const next = current === "dark" ? "light" : "dark";
  html.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
  themeToggle.innerHTML = `<span id="themeIcon">${next === "dark" ? "☀️" : "🌙"}</span> <span id="themeLabel">${next === "dark" ? "Light" : "Dark"}</span>`;
});

// ===== Falling Petals =====
function spawnPetals() {
  const container = document.getElementById("petals");
  const colors = ["#f9a8c9", "#c9b8e8", "#ffd6b0", "#b8d8f9", "#f7c5d8"];
  for (let i = 0; i < 18; i++) {
    const petal = document.createElement("div");
    petal.className = "petal";
    petal.style.cssText = `
      left: ${Math.random() * 100}%;
      top: ${Math.random() * -20}%;
      background: ${colors[Math.floor(Math.random() * colors.length)]};
      width: ${6 + Math.random() * 8}px;
      height: ${6 + Math.random() * 8}px;
      animation-duration: ${5 + Math.random() * 8}s;
      animation-delay: ${Math.random() * 6}s;
      opacity: ${0.4 + Math.random() * 0.4};
    `;
    container.appendChild(petal);
  }
}

// ===== Fade-in on Scroll =====
function initFadeIn() {
  const observer = new IntersectionObserver(
    (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); }),
    { threshold: 0.15 }
  );
  document.querySelectorAll(".fade-in").forEach(el => observer.observe(el));
}

// ===== Skill Bars =====
function initSkillBars() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const fill = e.target.querySelector(".skill-fill");
        if (fill) fill.style.width = fill.dataset.width + "%";
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.4 });
  document.querySelectorAll(".skill-item").forEach(el => observer.observe(el));
}

// ===== Contact Form =====
function handleForm(e) {
  e.preventDefault();
  const success = document.getElementById("formSuccess");
  success.style.display = "block";
  e.target.reset();
  setTimeout(() => { success.style.display = "none"; }, 4000);
}

// ===== Score → Hearts =====
function scoreToHearts(score) {
  if (!score) return "♡♡♡♡♡";
  const filled = Math.round((score / 100) * 5);
  return "♥".repeat(filled) + "♡".repeat(5 - filled);
}

// ===== Strip HTML from description =====
function stripHtml(str) {
  if (!str) return "No description available.";
  return str.replace(/<[^>]*>/g, "").replace(/\n/g, " ").trim();
}

// ===== Fetch AniList Data =====
async function fetchAnimeList(userName) {
  const res = await fetch(ANILIST_API, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({ query: QUERY, variables: { userName } }),
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const json = await res.json();
  if (json.errors) throw new Error(json.errors[0].message);
  return json.data.MediaListCollection;
}

// ===== Build Anime Card =====
function buildCard(media) {
  const title = media.title.english || media.title.romaji;
  const desc = stripHtml(media.description);
  const hearts = scoreToHearts(media.averageScore);
  const img = media.coverImage?.large || "https://via.placeholder.com/200x270?text=No+Image";

  const card = document.createElement("div");
  card.className = "anime-card fade-in";
  card.innerHTML = `
    <img src="${img}" alt="${title}" loading="lazy" />
    <div class="anime-card-body">
      <div class="anime-card-title">${title}</div>
      <div class="anime-card-desc">${desc}</div>
      <div class="anime-card-rating">${hearts}</div>
    </div>
  `;
  return card;
}

// ===== Carousel Logic (infinite loop) =====
function initCarousel(cards) {
  const track = document.getElementById("carouselTrack");
  const container = document.getElementById("carouselContainer");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  // Build: [clone-tail] [originals] [clone-head]
  // Clone-tail = last N cards prepended so we can scroll backwards infinitely
  // Clone-head = first N cards appended so we can scroll forwards infinitely
  const CLONE_COUNT = Math.min(cards.length, 8);

  const tailClones = cards.slice(-CLONE_COUNT).map(c => {
    const cl = c.cloneNode(true);
    cl.classList.add("visible"); // clones skip fade-in
    cl.classList.remove("fade-in");
    return cl;
  });
  const headClones = cards.slice(0, CLONE_COUNT).map(c => {
    const cl = c.cloneNode(true);
    cl.classList.add("visible");
    cl.classList.remove("fade-in");
    return cl;
  });

  tailClones.forEach(c => track.appendChild(c));   // append tail first (will be prepended via flex trick)
  cards.forEach(c => track.appendChild(c));
  headClones.forEach(c => track.appendChild(c));

  // Observe originals for fade-in
  const observer = new IntersectionObserver(
    (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); }),
    { threshold: 0.1 }
  );
  cards.forEach(c => observer.observe(c));

  // We need tail clones at the START visually — use a wrapper order trick:
  // Rebuild order: tailClones → originals → headClones
  track.innerHTML = "";
  tailClones.forEach(c => track.appendChild(c));
  cards.forEach(c => track.appendChild(c));
  headClones.forEach(c => track.appendChild(c));

  const GAP = 20; // matches CSS gap of 1.25rem ≈ 20px

  function cardW() {
    const first = track.querySelector(".anime-card");
    return first ? first.offsetWidth + GAP : 215;
  }

  // Start offset = width of the tail clone block so originals are visible first
  let offset = CLONE_COUNT * cardW();
  let isJumping = false;

  function setOffset(val, animate = true) {
    offset = val;
    track.style.transition = animate
      ? "transform 0.48s cubic-bezier(0.25,0.46,0.45,0.94)"
      : "none";
    track.style.transform = `translateX(-${offset}px)`;
  }

  // Jump silently after transition ends when we've scrolled into clone territory
  track.addEventListener("transitionend", () => {
    if (isJumping) return;
    const cw = cardW();
    const tailWidth  = CLONE_COUNT * cw;
    const origWidth  = cards.length * cw;

    // Scrolled into head clones → jump back to matching originals
    if (offset >= tailWidth + origWidth) {
      isJumping = true;
      setOffset(offset - origWidth, false);
      isJumping = false;
    }
    // Scrolled into tail clones → jump forward to matching originals
    if (offset < tailWidth - cw) {
      isJumping = true;
      setOffset(offset + origWidth, false);
      isJumping = false;
    }
  });

  // Init position without animation
  setOffset(offset, false);

  const STEP = 2; // cards to scroll per button click

  prevBtn.addEventListener("click", () => setOffset(offset - cardW() * STEP));
  nextBtn.addEventListener("click", () => setOffset(offset + cardW() * STEP));

  // Drag / swipe
  let dragStart = null;
  let dragBase  = 0;

  function onDragStart(x) { dragStart = x; dragBase = offset; }
  function onDragMove(x)  {
    if (dragStart === null) return;
    setOffset(dragBase - (x - dragStart), false);
  }
  function onDragEnd()    { dragStart = null; }

  container.addEventListener("mousedown",  e => onDragStart(e.clientX));
  container.addEventListener("mousemove",  e => onDragMove(e.clientX));
  container.addEventListener("mouseup",    onDragEnd);
  container.addEventListener("mouseleave", onDragEnd);

  container.addEventListener("touchstart", e => onDragStart(e.touches[0].clientX), { passive: true });
  container.addEventListener("touchmove",  e => onDragMove(e.touches[0].clientX),  { passive: true });
  container.addEventListener("touchend",   onDragEnd);

  // Autoplay — advances one card every 3s
  let autoplay = setInterval(() => setOffset(offset + cardW()), 3000);
  container.addEventListener("mouseenter", () => clearInterval(autoplay));
  container.addEventListener("mouseleave", () => {
    autoplay = setInterval(() => setOffset(offset + cardW()), 3000);
  });
}

// ===== Main =====
async function init() {
  spawnPetals();
  initFadeIn();
  initSkillBars();
  document.getElementById("year").textContent = new Date().getFullYear();

  const loading = document.getElementById("loading");
  const errorMsg = document.getElementById("errorMsg");

  try {
    const data = await fetchAnimeList(USERNAME);

    // Flatten all entries and filter by Romance genre
    const entries = data.lists.flatMap(list => list.entries);
    const romance = entries
      .filter(e => e.media.genres?.includes("Romance"))
      .map(e => e.media);

    loading.style.display = "none";

    if (romance.length === 0) {
      errorMsg.textContent = "🌸 No completed romance anime found for this user.";
      errorMsg.style.display = "block";
      return;
    }

    const cards = romance.map(buildCard);
    initCarousel(cards);

  } catch (err) {
    console.error(err);
    loading.style.display = "none";
    errorMsg.style.display = "block";
  }
}

init();
