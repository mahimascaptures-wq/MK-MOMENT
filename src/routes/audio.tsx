import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import { Layout } from "@/components/Layout";
import {
  Music,
  Play,
  Pause,
  ExternalLink,
  Heart,
  Sparkles,
  X,
} from "lucide-react";

import mk1Audio from "@/assets/audio/mk1.mp3";
import m2Audio from "@/assets/audio/m2.mp3";

export const Route = createFileRoute("/audio")({
  head: () => ({
    meta: [
      { title: "Audio — Mahima & Kapil" },
      {
        name: "description",
        content:
          "Special voice notes, sound clips and our forever playlist — every track a tiny memory.",
      },
    ],
  }),
  component: Audio,
});

type LocalClip = {
  src: string;
  title: string;
  note: string;
};

type Song = {
  name: string;
  movie?: string;
  q: string;
};

const localClips: LocalClip[] = [
  {
    src: mk1Audio,
    title: "Our voice — Clip One",
    note: "A little sound straight from our days — keep this one close.",
  },
  {
    src: m2Audio,
    title: "Our voice — Clip Two",
    note: "Another tiny memory in a few seconds of sound.",
  },
];

const yt = (q: string) =>
  `https://www.youtube.com/results?search_query=${encodeURIComponent(q + " song")}`;

// Slugify a song name (or filename) to a comparable token
const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/[\s_]+/g, "-");

// Auto-discover every .mp3 file dropped into src/assets/audio/songs/
// at build-time. New files appear after a dev-server restart.
const songFileModules = import.meta.glob<string>(
  "../assets/audio/songs/*.mp3",
  { eager: true, query: "?url", import: "default" },
);

const songFileBySlug: Record<string, string> = (() => {
  const map: Record<string, string> = {};
  for (const [path, url] of Object.entries(songFileModules)) {
    const filename = (path.split("/").pop() ?? "").replace(/\.mp3$/i, "");
    map[slugify(filename)] = url;
  }
  return map;
})();

const songs: Song[] = [
  { name: "Ab Tumsa Jahaan Mein Koi Nahi Hai", q: "Ab Tumsa Jahan Mein Koi Nahi" },
  { name: "Neela Gagan Ke Deewane", q: "Neela Gagan Ke Deewane" },
  { name: "Darkhaast", movie: "Shivaay", q: "Darkhaast Shivaay Arijit Singh" },
  { name: "Tumse Hi", movie: "Jab We Met", q: "Tumse Hi Jab We Met Mohit Chauhan" },
  { name: "Saason Ki Maala Pe Simru Main Pi Ka Naam", q: "Saason Ki Mala Pe Simru" },
  { name: "Teri Ore", movie: "Singh Is Kinng", q: "Teri Ore Singh Is Kinng" },
  { name: "Ektara", movie: "Wake Up Sid", q: "Ektara Wake Up Sid" },
  { name: "Dekhe Dekhe Sheesha Sharmaye", q: "Dekhe Dekhe Re Sheesha" },
  {
    name: "Kiska Hai Yeh Tumko Intezaar",
    movie: "Main Hoon Na",
    q: "Tumhe Jo Maine Dekha Main Hoon Na",
  },
  { name: "Phir Le Aaya Dil", movie: "Barfi", q: "Phir Le Aya Dil Barfi Arijit" },
  {
    name: "Hothon Se Chhu Lo Tum",
    movie: "Prem Geet",
    q: "Hothon Se Chhu Lo Tum Jagjit Singh",
  },
  { name: "Kun Faya Kun", movie: "Rockstar", q: "Kun Faya Kun Rockstar" },
  {
    name: "Yeh Dooriyan",
    movie: "Love Aaj Kal",
    q: "Yeh Dooriyan Love Aaj Kal Mohit Chauhan",
  },
  { name: "Bairan", q: "Bairan song" },
   { name: "Hum Tere Pyar Mein", q: "Hum Tere Pyar Mein" },
  { name: "Itna Na Mujhse Tu Pyar Badha", q: "Itna Na Mujhse Tu Pyar Badha" },
  { name: "Hona Tha Pyar", movie: "Bol", q: "Hona Tha Pyar Atif Aslam" },
  { name: "Yaaron", movie: "KK", q: "Yaaron KK" },
  { name: "Tere Jaisa Yaar Kahan", q: "Tere Jaisa Yaar Kahan Yaarana" },
  {
    name: "Phir Se Ud Chala",
    movie: "Rockstar",
    q: "Phir Se Ud Chala Rockstar Mohit",
  },
  {
    name: "Kabira",
    movie: "Yeh Jawaani Hai Deewani",
    q: "Kabira Yeh Jawaani Hai Deewani",
  },
  { name: "Yeh Dosti", movie: "Sholay", q: "Yeh Dosti Hum Nahin Todenge Sholay" },
];

function Audio() {
  const [playing, setPlaying] = useState<Song | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Resolve which songs already have a local mp3 next to this file
  const songsWithLocal = useMemo(() => {
    return songs.map((s) => ({
      song: s,
      localUrl: songFileBySlug[slugify(s.name)] as string | undefined,
    }));
  }, []);

  const availableCount = songsWithLocal.filter((s) => s.localUrl).length;

  // Body padding so the floating player never covers the last row
  useEffect(() => {
    document.body.style.paddingBottom = playing ? "110px" : "";
    return () => {
      document.body.style.paddingBottom = "";
    };
  }, [playing]);

  // Try to autoplay the moment a new song is selected
  useEffect(() => {
    if (!playing) return;
    const el = audioRef.current;
    if (!el) return;
    setIsPaused(false);
    el.play().catch(() => {
      // Autoplay was blocked — leave UI in paused state, user can press play
      setIsPaused(true);
    });
  }, [playing]);

  const handleClickSong = (s: Song) => {
    const local = songFileBySlug[slugify(s.name)];
    if (!local) {
      // Fallback — open YouTube search in a new tab
      window.open(yt(s.q), "_blank", "noopener,noreferrer");
      return;
    }
    if (playing?.name === s.name) {
      // Toggle pause/play on the active track
      const el = audioRef.current;
      if (!el) return;
      if (el.paused) {
        el.play().catch(() => {});
        setIsPaused(false);
      } else {
        el.pause();
        setIsPaused(true);
      }
      return;
    }
    setPlaying(s);
  };

  const togglePlayer = () => {
    const el = audioRef.current;
    if (!el) return;
    if (el.paused) {
      el.play().catch(() => {});
      setIsPaused(false);
    } else {
      el.pause();
      setIsPaused(true);
    }
  };

  const currentLocalUrl = playing
    ? songFileBySlug[slugify(playing.name)]
    : undefined;

  return (
    <Layout>
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 pt-16 pb-10 text-center">
        <p className="font-script text-2xl text-primary">our soundtrack</p>
        <h1 className="text-5xl md:text-6xl font-bold mt-2 flex items-center justify-center gap-3">
          <Music className="w-10 h-10 md:w-12 md:h-12 text-primary" /> Audio
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground text-lg">
          Some sounds are too special for words. Voice notes, tiny clips and the
          songs that play in our heads when we miss each other.
        </p>
      </section>

      {/* Highlighted local audio clips */}
      <section className="max-w-5xl mx-auto px-4">
        <div className="relative overflow-hidden rounded-[2.5rem] gradient-sunset text-white p-8 md:p-12 shadow-glow">
          <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-white/10 blur-2xl" />
          <div className="absolute -bottom-12 -left-12 w-56 h-56 rounded-full bg-white/10 blur-2xl" />

          <div className="relative">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <Sparkles className="w-7 h-7" />
              </div>
              <div>
                <p className="font-script text-2xl">our very own</p>
                <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight">
                  Special Audio Notes
                </h2>
              </div>
            </div>

            <p className="mt-4 text-white/90 max-w-2xl">
              Yeh wo sound clips hain jo bas humare hain — koi YouTube nahi, koi
              gaana nahi, sirf hum dono ki yaadein, awaaz mein.
            </p>

            <div className="mt-8 grid md:grid-cols-2 gap-5">
              {localClips.map((c, i) => (
                <div
                  key={c.src}
                  className="p-5 rounded-2xl bg-white/15 backdrop-blur-sm border border-white/20"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Heart className="w-4 h-4 fill-white" />
                    <h3 className="font-display text-xl font-bold">
                      {c.title}
                    </h3>
                    <span className="ml-auto px-2 py-0.5 rounded-full bg-white/30 text-[10px] uppercase tracking-wider font-semibold">
                      #{i + 1}
                    </span>
                  </div>
                  <p className="font-script text-lg text-white/90 leading-snug mb-3">
                    {c.note}
                  </p>
                  <audio
                    controls
                    preload="metadata"
                    src={c.src}
                    className="w-full mt-2 rounded-lg"
                  >
                    Your browser doesn't support audio playback.
                  </audio>
                </div>
              ))}
            </div>

            <div className="mt-8 p-5 rounded-2xl bg-white/15 backdrop-blur-sm border border-white/20 flex items-start gap-3">
              <Sparkles className="w-5 h-5 mt-1 shrink-0" />
              <p className="text-white/95">
                <span className="font-script text-xl">Sweet reminder —</span>{" "}
                kuch awaazein photos se bhi zyada yaad reh jaati hain. Inhe
                kabhi bhi sun lena.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Playlist */}
      <section className="max-w-4xl mx-auto px-4 mt-16">
        <div className="p-8 md:p-10 rounded-3xl gradient-rose text-white shadow-glow">
          <div className="flex items-center gap-3">
            <Music className="w-8 h-8" />
            <h2 className="font-display text-3xl md:text-4xl font-bold">
              Our Friendship Playlist
            </h2>
          </div>
          <p className="mt-2 text-white/90">
            Tap any song — it'll open on YouTube and play instantly. 🎵
          </p>

          <ol className="mt-6 grid sm:grid-cols-2 gap-3">
            {songsWithLocal.map(({ song: s, localUrl }, i) => {
              const isActive = playing?.name === s.name;
              const hasLocal = Boolean(localUrl);
              return (
                <li key={s.name}>
                  <button
                    type="button"
                    onClick={() => handleClickSong(s)}
                    aria-label={
                      hasLocal
                        ? isActive
                          ? `Pause ${s.name}`
                          : `Play ${s.name}`
                        : `Open ${s.name} on YouTube`
                    }
                    aria-pressed={isActive}
                    className={`group relative w-full text-left p-4 rounded-xl backdrop-blur-sm flex items-center gap-3 transition-all hover:-translate-y-0.5 cursor-pointer ${
                      isActive
                        ? "bg-white/40 ring-2 ring-white/70 shadow-lg"
                        : "bg-white/15 hover:bg-white/30"
                    }`}
                  >
                    <span
                      className={`font-script text-2xl w-8 shrink-0 ${
                        isActive
                          ? "opacity-100"
                          : "opacity-80 group-hover:opacity-100"
                      }`}
                    >
                      {i + 1}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium leading-tight truncate flex items-center gap-2">
                        {s.name}
                        {isActive && (
                          <span className="inline-flex items-center gap-0.5 text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full bg-white text-rose-600 shrink-0">
                            <span className="w-1.5 h-1.5 rounded-full bg-rose-600 animate-pulse" />
                            {isPaused ? "paused" : "playing"}
                          </span>
                        )}
                      </div>
                      {s.movie && (
                        <div className="text-xs text-white/75 italic truncate">
                          — {s.movie}
                        </div>
                      )}
                    </div>
                    <div
                      className={`shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition ${
                        isActive
                          ? "bg-white text-rose-600"
                          : "bg-white/20 group-hover:bg-white/40 text-white"
                      }`}
                    >
                      {isActive && !isPaused ? (
                        <Pause className="w-4 h-4 fill-current" />
                      ) : hasLocal ? (
                        <Play className="w-4 h-4 fill-current ml-0.5" />
                      ) : (
                        <ExternalLink className="w-4 h-4" />
                      )}
                    </div>
                  </button>
                </li>
              );
            })}
          </ol>
          <p className="mt-5 text-xs text-white/70 text-center">
            {availableCount > 0
              ? `${availableCount} of ${songs.length} songs play right here; the rest open on YouTube.`
              : "Each song opens on YouTube in a new tab."}
          </p>
        </div>
      </section>

      {/* Footer note */}
      <section className="max-w-3xl mx-auto px-4 mt-20 mb-20 text-center">
        <div className="p-8 rounded-[2rem] bg-card border border-border shadow-soft">
          <Music className="w-10 h-10 text-primary mx-auto" />
          <p className="font-script text-3xl mt-3 text-primary">
            har gaane ke peeche ek yaad hai
          </p>
          <p className="mt-2 text-muted-foreground">
            and every yaad has a song quietly attached to it.
          </p>
        </div>
      </section>

      {/* Floating mini player — only when a local mp3 is playing */}
      {playing && currentLocalUrl && (
        <div
          role="region"
          aria-label="Now playing"
          className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-[min(94vw,720px)] rounded-2xl bg-card/95 backdrop-blur-md border border-border shadow-2xl overflow-hidden"
        >
          <div className="p-3 flex items-center gap-3">
            <button
              type="button"
              onClick={togglePlayer}
              aria-label={isPaused ? "Play" : "Pause"}
              className="relative w-12 h-12 rounded-xl gradient-rose flex items-center justify-center text-white shrink-0 hover:scale-105 transition"
            >
              {isPaused ? (
                <Play className="w-5 h-5 fill-current ml-0.5" />
              ) : (
                <Pause className="w-5 h-5 fill-current" />
              )}
              <span className="absolute -bottom-1 -right-1 w-3 h-3 rounded-full bg-rose-500 ring-2 ring-card animate-pulse" />
            </button>

            <div className="flex-1 min-w-0">
              <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">
                Now playing
              </p>
              <p className="font-medium truncate leading-tight">
                {playing.name}
              </p>
              {playing.movie && (
                <p className="text-xs italic text-muted-foreground truncate">
                  — {playing.movie}
                </p>
              )}
              <audio
                ref={audioRef}
                key={currentLocalUrl}
                src={currentLocalUrl}
                controls
                preload="metadata"
                onPlay={() => setIsPaused(false)}
                onPause={() => setIsPaused(true)}
                onEnded={() => setIsPaused(true)}
                className="w-full mt-1.5 h-8"
              >
                Your browser doesn't support audio playback.
              </audio>
            </div>

            <button
              type="button"
              onClick={() => setPlaying(null)}
              aria-label="Stop and close"
              className="w-10 h-10 rounded-full bg-rose-500 hover:bg-rose-600 text-white flex items-center justify-center transition shadow-md shrink-0"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </Layout>
  );
}
