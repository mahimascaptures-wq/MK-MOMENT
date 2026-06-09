import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import heroImg from "@/assets/mk1.jpeg";
import heroImg1 from "@/assets/mk.jpeg";
import heroImg2 from "@/assets/mk2.jpeg";
import heroImg3 from "@/assets/mk3.jpeg";
import bk13 from "@/assets/bk13.jpeg";
import bk9 from "@/assets/bk9.jpeg"
import bk7 from "@/assets/bk7.jpeg"
import both from "@/assets/both.jpeg"
import heroImg4 from "@/assets/new2/atha/atha1.jpeg";



import { Heart, MapPin, Film, Quote, Sparkles, ArrowRight, Camera, UtensilsCrossed, Video, Music } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mahima & Kapil — Best Friends Forever" },
      { name: "description", content: "A celebration of an unbreakable friendship — memories, travels, and happiness." },
    ],
  }),
  component: Home,
});

const snapshots = [
  { img: both, caption: "the two of us, always" },
  { img: heroImg1, caption: "the smile that started it all" },
  { img: bk13, caption: "Love" },
  { img: heroImg, caption: "random walks, random laughs" },
  { img: bk9, caption: "Love...." },
  { img: bk7, caption: "Love...." },
  { img: heroImg2, caption: "sunset skies & soft hearts" },
  { img: heroImg3, caption: "late drives, endless talks" },
];

function Home() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[600px] overflow-hidden -mt-[1px]">
        <img
          src={heroImg3}
          alt="Mahima and Kapil watching the sunset together"
          className="absolute inset-0 w-full h-full object-cover object-top"
          width={1920}
          height={1088}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/40 to-background" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 py-24">
          <p className="font-script text-2xl md:text-3xl text-primary mb-2 animate-fade-up">once upon a friendship...</p>
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold text-gradient animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Mahima <span className="font-script text-5xl md:text-7xl text-foreground/80">&</span> Kapil
          </h1>
          <p className="mt-6 max-w-xl text-lg text-foreground/80 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            Two souls. Countless laughs. A million memories — and the journey is just beginning.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center animate-fade-up" style={{ animationDelay: "0.5s" }}>
            <Link to="/memories" className="px-6 py-3 rounded-full gradient-sunset text-white font-medium shadow-soft hover:shadow-glow transition-all flex items-center gap-2">
              Our Memories <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/about" className="px-6 py-3 rounded-full bg-card border border-border hover:bg-secondary transition-all">
              About Us
            </Link>
          </div>
        </div>
      </section>

      {/* Why best friends */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <p className="font-script text-2xl text-primary">why we're best friends</p>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">Because together, everything feels lighter</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: Heart, title: "Endless Laughter", desc: "Every silly joke, every inside reference — pure happiness." },
            { icon: Sparkles, title: "Unspoken Bond", desc: "We just get each other. No explanations needed." },
            { icon: MapPin, title: "Adventures Together", desc: "From Jaipur streets to Mount Abu sunsets — better as two." },
          ].map((f, i) => (
            <div key={i} className="p-8 rounded-3xl bg-card border border-border shadow-soft hover:shadow-glow transition-all hover:-translate-y-1">
              <div className="w-14 h-14 rounded-2xl gradient-sunset flex items-center justify-center mb-4">
                <f.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2">{f.title}</h3>
              <p className="text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Little Glimpses — snapshot gallery */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <p className="font-script text-2xl text-primary">little glimpses</p>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">Snapshots of Us</h2>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
            A few favourite frozen moments — hover over them to see the tiny stories behind each click.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
          {snapshots.map((s, i) => (
            <div
              key={i}
              className="group relative aspect-[3/4] overflow-hidden rounded-2xl border border-border shadow-soft hover:shadow-glow transition-all"
            >
              <img
                src={s.img}
                alt={s.caption}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-70 group-hover:opacity-100 transition-opacity" />
              <p className="absolute bottom-3 left-4 right-4 text-white font-script text-lg md:text-xl leading-snug drop-shadow-lg">
                {s.caption}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <Link
            to="/photos"
            className="px-6 py-3 rounded-full bg-card border border-border hover:border-primary/60 hover:bg-secondary transition-all flex items-center gap-2"
          >
            <Camera className="w-4 h-4 text-primary" />
            View all photos
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Quick links */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[
            { to: "/travel", icon: MapPin, label: "Places We've Been" },
            { to: "/videos", icon: Video, label: "Our Videos" },
            { to: "/audio", icon: Music, label: "Audio & Playlist" },
            { to: "/movies", icon: Film, label: "Favorite Movies" },
            { to: "/food", icon: UtensilsCrossed, label: "Food Diaries" },
            { to: "/memories", icon: Heart, label: "Memory Gallery" },
            { to: "/quotes", icon: Quote, label: "Cute Quotes" },
          ].map((l, i) => (
            <Link key={i} to={l.to} className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all hover:shadow-soft">
              <l.icon className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
              <div className="font-display text-xl font-semibold">{l.label}</div>
              <div className="text-sm text-muted-foreground mt-1 flex items-center gap-1 group-hover:text-primary">
                Explore <ArrowRight className="w-3 h-3" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Quote banner */}
      <section className="max-w-4xl mx-auto px-4 py-20 text-center">
        <Quote className="w-12 h-12 text-primary/40 mx-auto mb-4" />
        <p className="font-script text-3xl md:text-5xl text-foreground leading-relaxed">
          "A true friend is someone who sees the pain in your eyes while everyone else believes the smile on your face."
        </p>
        <p className="mt-6 text-muted-foreground">— and that's exactly who we are to each other</p>
      </section>
    </Layout>
  );
}
