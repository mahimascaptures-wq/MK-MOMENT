import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Link } from "@tanstack/react-router";
import { Film, Music, Play, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/movies")({
  head: () => ({
    meta: [
      { title: "Movies — Mahima & Kapil" },
      { name: "description", content: "The films we re-watch and the stories we share." },
    ],
  }),
  component: Movies,
});

const categories = [
  {
    title: "Our Favourite Watches",
    color: "from-rose-400 to-red-500",
    items: ["Chhawa", "Mahavatar Narsimha", "Sita Ramam", "Border", "Kesari 2 (1.5 hrs)", "Bhool Chuk Maaf", "Pati Patni Aur Woh Do"],
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


function Movies() {
  return (
    <Layout>
      <section className="max-w-6xl mx-auto px-4 pt-16 pb-10 text-center">
        <p className="font-script text-2xl text-primary">popcorn nights</p>
        <h1 className="text-5xl md:text-6xl font-bold mt-2">Movies</h1>
        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground text-lg">
          The films we re-watch, the ones that made us cry, laugh, and feel
          everything — our little cinema list.
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

      {/* Music has its own page now — small teaser/link */}
      <section className="max-w-4xl mx-auto px-4 mt-20">
        <div className="p-8 md:p-10 rounded-3xl gradient-rose text-white shadow-glow text-center">
          <Music className="w-10 h-10 mx-auto" />
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-3">
            Looking for our songs?
          </h2>
          <p className="mt-2 text-white/90">
            Saare gaane aur humare special audio clips ab ek alag jagah hain —
            ek poora section sirf un yaadon ke liye jo sirf sun ke yaad aati hain.
          </p>
          <Link
            to="/audio"
            className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-medium transition"
          >
            <Music className="w-4 h-4" /> Open Audio &amp; Playlist
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
