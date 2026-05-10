import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Heart, Sparkles, Smile } from "lucide-react";

import kapilPhoto from "@/assets/bk4.jpeg";
import mahimaPhoto from "@/assets/mk3.jpeg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Mahima & Kapil" },
      { name: "description", content: "Meet Mahima and Kapil — two best friends, one beautiful little world." },
    ],
  }),
  component: About,
});

function Person({
  name,
  role,
  height,
  tone,
  traits,
  gradient,
  sweet,
  photo,
}: {
  name: string;
  role: string;
  height: string;
  tone: string;
  traits: string[];
  gradient: string;
  sweet: string;
  photo: string;
}) {
  return (
    <div className="relative rounded-3xl bg-card border border-border shadow-soft overflow-hidden">
      {/* Cover photo — full image, blurred backdrop so nothing gets cut */}
      <div className="relative h-56 md:h-64 overflow-hidden bg-secondary">
        <img
          src={photo}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover scale-110 blur-2xl opacity-60"
        />
        <img
          src={photo}
          alt={`${name} cover`}
          className="relative w-full h-full object-contain"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
      </div>

      {/* Circular avatar — overlapping the cover */}
      <div
        className={`absolute top-44 md:top-52 left-8 w-24 h-24 rounded-full ${gradient} p-[3px] shadow-glow`}
      >
        <img
          src={photo}
          alt={name}
          className="w-full h-full rounded-full object-cover object-top border-4 border-card"
        />
      </div>

      <div className="p-8 pt-16">
        <p className="font-script text-xl text-primary">{role}</p>
        <h3 className="font-display text-4xl font-bold mt-1">{name}</h3>
        <p className="font-script text-2xl text-foreground/80 mt-3 leading-snug">{sweet}</p>
        <div className="grid grid-cols-2 gap-4 mt-6">
          <div className="p-4 rounded-2xl bg-secondary/50">
            <div className="text-xs uppercase tracking-wider text-muted-foreground">Height</div>
            <div className="text-xl font-semibold mt-1">{height}</div>
          </div>
          <div className="p-4 rounded-2xl bg-secondary/50">
            <div className="text-xs uppercase tracking-wider text-muted-foreground">Skin Tone</div>
            <div className="text-xl font-semibold mt-1">{tone}</div>
          </div>
        </div>
        <div className="mt-6">
          <div className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Vibes</div>
          <div className="flex flex-wrap gap-2">
            {traits.map((t) => (
              <span key={t} className="px-3 py-1 rounded-full bg-accent/30 text-sm">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function About() {
  return (
    <Layout>
      <section className="max-w-6xl mx-auto px-4 pt-16 pb-10 text-center">
        <p className="font-script text-2xl text-primary">our  story</p>
        <h1 className="text-5xl md:text-6xl font-bold mt-2">About Us</h1>
        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground text-lg">
          Two completely different worlds, one warm, giggly, caring friendship — and a boy who feels lucky every single day just looking at it all.
        </p>
      </section>

      <section className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-10 mt-10">
        <Person
          name="Kapil"
          role="The Boy with the Soft Heart"
          height="6 feet"
          tone="Fair"
          traits={["Tall & calm", "Always caring", "Big dreamer", "Forever there","Cuteness overloded"]}
          gradient="gradient-sunset"
          sweet="quiet on the outside, full of love on the inside — the kind of friend who shows up with a burger when sorry is too small a word."
          photo={kapilPhoto}
        />
        <Person
          name="Mahima"
          role="The Girl with the Sunshine Smile"
          height="5 feet 3 inches"
          tone="Wheatish"
          traits={["Sunshine smile", "Tiny ","butki","nasamajh","bacchi",  "His whole world"]}
          gradient="gradient-rose"
          sweet="butki, betu, ladoo — a tiny bundle of laughter who can fix his worst day with one smile."
          photo={mahimaPhoto}
        />
      </section>
{/* Special Dates */}
<section className="max-w-4xl mx-auto px-4 mt-20 mb-20">
  <h2 className="text-4xl font-bold text-center">
    Our Special Dates
  </h2>

  <div className="mt-8 grid gap-4">

    {[
      {
        date: "21 March 2026",
        text: "A day that became truly special for me.",
      },
      {
        date: "4 April",
        text: "More than special — a memory we'll always keep close.",
      },
      {
        date: "21 April",
        text: "Another beautiful chapter in our  story.",
      },
    ].map((d, i) => (
      <div
        key={i}
        className="p-6 rounded-3xl bg-card border border-border shadow-soft"
      >
        <p className="font-script text-2xl text-primary">
          {d.date}
        </p>

        <p className="mt-2 text-lg text-foreground/90">
          {d.text}
        </p>
      </div>
    ))}
  </div>
</section>
      {/* Together section */}
      <section className="max-w-5xl mx-auto px-4 mt-20">
        <div className="p-10 md:p-16 rounded-[2.5rem] gradient-sunset text-white text-center shadow-glow">
          <Sparkles className="w-10 h-10 mx-auto mb-4" />
          <h2 className="font-display text-4xl md:text-5xl font-bold">When we're together</h2>
          <p className="font-script text-3xl mt-4">happiness has a name — us.</p>
          <div className="grid sm:grid-cols-3 gap-4 mt-10 text-left">
            {[
              "Time forgets to pass and laughs spill over until our cheeks hurt.",
              "Every problem becomes smaller, every joy becomes bigger.",
              "The world fades — it's just two best friends and a thousand stories.",
            ].map((t, i) => (
              <div key={i} className="p-5 rounded-2xl bg-white/15 backdrop-blur-sm flex gap-3">
                <Heart className="w-5 h-5 fill-white shrink-0 mt-1" />
                <p className="text-white/95">{t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kapil's happy heart */}
      <section className="max-w-4xl mx-auto px-4 mt-20">
        <div className="p-10 rounded-[2rem] bg-card border border-border shadow-soft text-center">
          <Smile className="w-10 h-10 text-primary mx-auto" />
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-3">And looking at all of this…</h2>
          <p className="font-script text-3xl text-primary mt-3">he is just happy.</p>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Kapil sees her tiny smile, her cute fights, her sleepy texts, her "butki" mood swings — and his heart just melts. No big words, no big drama. Just a quiet, caring kind of happy that says <span className="font-script text-xl text-primary">"this is enough. she is enough."</span>
          </p>
        </div>
      </section>

      {/* Why best friends */}
      <section className="max-w-4xl mx-auto px-4 mt-20 text-center">
        <h2 className="text-4xl font-bold">Why We Are Best Friends</h2>
        <div className="mt-8 grid sm:grid-cols-2 gap-4 text-left">
          {[
            "We trust each other with everything — even the silliest little things.",
            "Distance doesn't matter; the bond does.",
            "We celebrate each other's wins like our own.",
            "Through tears and laughter, we stay.",
            "Honesty over comfort, always — even in our cute little fights.",
            "We know each other's silence too.",
          ].map((r, i) => (
            <div key={i} className="p-5 rounded-2xl bg-card border border-border flex gap-3">
              <span className="font-script text-2xl text-primary leading-none">{i + 1}.</span>
              <p>{r}</p>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
