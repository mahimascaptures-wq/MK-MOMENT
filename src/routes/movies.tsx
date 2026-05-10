import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Film, Music, Play } from "lucide-react";

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

const songs = [
  "Bairan",
  "Teri Ore",
  "Ektara",
  "Gajar",
  "Hum Tere Pyar Mein",
  "Itna Na Mujhse Tu Pyar Badha",
  "Hona Tha Pyar",
  "Darkhaast",
  "Yaaron — KK",
  "Tere Jaisa Yaar Kahan",
  "Phir Se Ud Chala",
  "Kabira",
  "Kun Faya Kun",
  "Yeh Dosti — Sholay",
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
            <h2 className="font-display text-3xl md:text-4xl font-bold">Our Friendship Playlist</h2>
          </div>
          <p className="mt-2 text-white/90">Hit play on any memory — it has a song attached to it.</p>
          <ol className="mt-6 grid sm:grid-cols-2 gap-3">
            {songs.map((s, i) => (
              <li key={s} className="p-4 rounded-xl bg-white/15 backdrop-blur-sm flex items-center gap-3">
                <span className="font-script text-2xl w-8">{i + 1}</span>
                <span className="font-medium">{s}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </Layout>
  );
}
