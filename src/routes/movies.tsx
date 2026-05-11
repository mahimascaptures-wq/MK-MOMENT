import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Film, Music, Play, ExternalLink } from "lucide-react";

export const Route = createFileRoute("/movies")({
  head: () => ({
    meta: [
      { title: "Movies & Music — Mahima & Kapil" },
      { name: "description", content: "Our favorite movies and the songs of our friendship." },
    ],
  }),
  component: Movies,
});

const categories = [
  {
    title: "Our Favourite Watches",
    color: "from-rose-400 to-red-500",
    items: ["Chhawa", "Mahavatar Narsimha", "Sita Ramam", "Border", "Kesari 2 (1.5 hrs)", "Bhool Chuk Maaf"],
  },
  // {
  //   title: "Action & Thrill",
  //   color: "from-amber-400 to-orange-500",
  //   items: ["War", "Pathaan", "KGF Chapter 2", "Tiger 3", "Bang Bang", "Singham"],
  // },
  {
    title: "Motivational",
    color: "from-emerald-400 to-teal-500",
    items: ["Chak De! India", "Bhaag Milkha Bhaag", "Dangal", "M.S. Dhoni", "12th Fail", "Iqbal"],
  },
  {
    title: "Spiritual & God",
    color: "from-violet-400 to-fuchsia-500",
    items: ["OMG: Oh My God", "PK", "Bajrangi Bhaijaan", "Kedarnath", "Shiva", "Mahabharat"],
  },
];

type Song = { name: string; movie?: string; q: string };

// Build a YouTube search URL — opens the song in a new tab.
const yt = (q: string) =>
  `https://www.youtube.com/results?search_query=${encodeURIComponent(q + " song")}`;

const songs: Song[] = [
  { name: "Ab Tumsa Jahaan Mein Koi Nahi Hai", q: "Ab Tumsa Jahan Mein Koi Nahi" },
  { name: "Neela Gagan Ke Deewane", q: "Neela Gagan Ke Deewane" },
  { name: "Darkhaast", movie: "Shivaay", q: "Darkhaast Shivaay Arijit Singh" },
  { name: "Tumse Hi", movie: "Jab We Met", q: "Tumse Hi Jab We Met Mohit Chauhan" },
  { name: "Saason Ki Maala Pe Simru Main Pi Ka Naam", q: "Saason Ki Mala Pe Simru" },
  { name: "Teri Ore", movie: "Singh Is Kinng", q: "Teri Ore Singh Is Kinng" },
  { name: "Ektara", movie: "Wake Up Sid", q: "Ektara Wake Up Sid" },
  { name: "Dekhe Dekhe Sheesha Sharmaye", q: "Dekhe Dekhe Re Sheesha" },
  { name: "Kiska Hai Yeh Tumko Intezaar", movie: "Main Hoon Na", q: "Tumhe Jo Maine Dekha Main Hoon Na" },
  { name: "Phir Le Aaya Dil", movie: "Barfi", q: "Phir Le Aya Dil Barfi Arijit" },
  { name: "Hothon Se Chhu Lo Tum", movie: "Prem Geet", q: "Hothon Se Chhu Lo Tum Jagjit Singh" },
  { name: "Kun Faya Kun", movie: "Rockstar", q: "Kun Faya Kun Rockstar" },
  { name: "Yeh Dooriyan", movie: "Love Aaj Kal", q: "Yeh Dooriyan Love Aaj Kal Mohit Chauhan" },
  { name: "Bairan", q: "Bairan song" },
  { name: "Gajar", q: "Gajar song" },
  { name: "Hum Tere Pyar Mein", q: "Hum Tere Pyar Mein" },
  { name: "Itna Na Mujhse Tu Pyar Badha", q: "Itna Na Mujhse Tu Pyar Badha" },
  { name: "Hona Tha Pyar", movie: "Bol", q: "Hona Tha Pyar Atif Aslam" },
  { name: "Yaaron", movie: "KK", q: "Yaaron KK" },
  { name: "Tere Jaisa Yaar Kahan", q: "Tere Jaisa Yaar Kahan Yaarana" },
  { name: "Phir Se Ud Chala", movie: "Rockstar", q: "Phir Se Ud Chala Rockstar Mohit" },
  { name: "Kabira", movie: "Yeh Jawaani Hai Deewani", q: "Kabira Yeh Jawaani Hai Deewani" },
  { name: "Yeh Dosti", movie: "Sholay", q: "Yeh Dosti Hum Nahin Todenge Sholay" },
];

function Movies() {
  return (
    <Layout>
      <section className="max-w-6xl mx-auto px-4 pt-16 pb-10 text-center">
        <p className="font-script text-2xl text-primary">popcorn & playlists</p>
        <h1 className="text-5xl md:text-6xl font-bold mt-2">Movies & Music</h1>
        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground text-lg">
          The films we re-watch and the songs we hum together — our shared soundtrack.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-4 space-y-8">
        {categories.map((c) => (
          <div key={c.title} className="p-8 rounded-3xl bg-card border border-border shadow-soft">
            <div className="flex items-center gap-3 mb-6">
              <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${c.color} flex items-center justify-center`}>
                <Film className="w-6 h-6 text-white" />
              </div>
              <h2 className="font-display text-3xl font-bold">{c.title}</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {c.items.map((m) => (
                <div key={m} className="p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors flex items-center gap-2">
                  <Play className="w-4 h-4 text-primary fill-primary" />
                  <span className="font-medium">{m}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Playlist */}
      <section className="max-w-4xl mx-auto px-4 mt-20">
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
            {songs.map((s, i) => (
              <li key={s.name}>
                <a
                  href={yt(s.q)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Play ${s.name} on YouTube`}
                  className="group relative p-4 rounded-xl bg-white/15 backdrop-blur-sm flex items-center gap-3 hover:bg-white/30 transition-all hover:-translate-y-0.5 cursor-pointer"
                >
                  <span className="font-script text-2xl w-8 shrink-0 opacity-80 group-hover:opacity-100">
                    {i + 1}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="font-medium leading-tight truncate">
                      {s.name}
                    </div>
                    {s.movie && (
                      <div className="text-xs text-white/75 italic truncate">
                        — {s.movie}
                      </div>
                    )}
                  </div>
                  <div className="shrink-0 w-9 h-9 rounded-full bg-white/20 group-hover:bg-white/40 flex items-center justify-center transition">
                    <Play className="w-4 h-4 text-white fill-white ml-0.5" />
                  </div>
                  <ExternalLink className="absolute top-2 right-2 w-3 h-3 text-white/60 group-hover:text-white/90 transition" />
                </a>
              </li>
            ))}
          </ol>
          <p className="mt-5 text-xs text-white/70 text-center">
            Each song opens in a new tab on YouTube.
          </p>
        </div>
      </section>
    </Layout>
  );
}
