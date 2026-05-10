import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { useEffect, useState } from "react";

import chhaavaImg from "@/assets/chhaava.jpg";
import narsimhaImg from "@/assets/narsimha.jpg";
import melaRainImg from "@/assets/mela-rain.jpg";
import hanumangImg from "@/assets/hanumang.jpg";
import templeImg from "@/assets/temple.jpg";
import vellyImg from "@/assets/velly.jpg";
import dhabaImg from "@/assets/dhaba.jpg";
import pcMallImg from "@/assets/pc-mall.jpg";
import kshyamImg from "@/assets/kshyam.jpg";
import dewasImg from "@/assets/dewas.jpg";
import mountabuImg from "@/assets/mountabu.jpg";
import mkImg from "@/assets/mk.jpeg";
import mk3Img from "@/assets/mk3.jpeg";

import bkImg from "@/assets/bk.jpeg";
import bk5Img from "@/assets/bk5.jpeg";

export const Route = createFileRoute("/memories")({
  head: () => ({
    meta: [
      { title: "Memories — Mahima & Kapil" },
      { name: "description", content: "Polaroids, timeline and handwritten notes from our friendship." },
    ],
  }),
  component: Memories,
});

type Polaroid = {
  caption: string;
  color: string;
  img?: string;
};

const polaroids: Polaroid[] = [
  { caption: "Chhawa — movie night", color: "from-orange-300 to-rose-400", img: chhaavaImg },
  { caption: "pitra parvat trip", color: "from-emerald-300 to-teal-400", img: hanumangImg },
  { caption: "Omkareshwar darshan", color: "from-amber-300 to-orange-500", img: templeImg },
  { caption: "the mela in the rain", color: "from-sky-300 to-indigo-400", img: melaRainImg },
  { caption: "Lotus Valley day out", color: "from-lime-300 to-green-500", img: vellyImg },
  { caption: "Mahavatar Narsimha", color: "from-violet-300 to-fuchsia-500", img: narsimhaImg },
  { caption: "burger as a sorry", color: "from-yellow-300 to-orange-400", img: dhabaImg },
  { caption: "Phoenix Citadel mall", color: "from-rose-300 to-pink-500", img: pcMallImg },
  { caption: "Khatu Shyam blessings", color: "from-indigo-300 to-purple-500", img: kshyamImg },
  { caption: "Dewas — Tekri sunrise", color: "from-fuchsia-300 to-purple-500", img: dewasImg },
  { caption: "midnight talks", color: "from-purple-300 to-pink-400", img: mkImg },
  { caption: "rooftop sunset", color: "from-amber-300 to-orange-500", img: mk3Img },
  { caption: "bike ride evenings", color: "from-cyan-300 to-blue-500", img: bkImg },
  { caption: "hill wali maggie", color: "from-orange-200 to-red-400", img: mountabuImg },
  { caption: "the day he taught me", color: "from-sky-300 to-cyan-500", img: bk5Img },
];

const timeline = [
  {
    year: "Day One",
    title: "Hello, jiju",
    desc: "The day a simple funny reels turned into hours of talking — and it never stopped. Sending Instagram reels became our routine, and those reels slowly turned into comfort. Every time we opened Instagram, the first thing we checked was whether a message had come or not."
  },
  {
    year: "First Meet",
    title: "Indore street surprise",
    desc: "Our first meeting was completely unplanned at a fulki thela in Indore. It felt like meeting someone who had a lot of ego at first glance, but still somehow that moment stayed special and memorable."
  },


  { year: "Chhawa Day", title: "Our first big movie together", desc: "We walked out of the theatre still talking about every scene." },
  {
    year: "pitra parvat",
    title: "Twice the memories, same place",
    desc: "We went here twice — first time it was an unplanned visit. While riding the bike, I accidentally touched the brake and it felt so sudden but also strangely nice, like that small moment stayed in memory. We also had aloo tikki at Sweet Swits. Second time, while coming back from Lotus Valley in the rain, we had corn (bhutta), and then went again to pitra parvat to enjoy the aarti together."
  },
  {
    year: "The Burger Sorry",
    title: "Kapil's apology language",
    desc: "He doesn’t say sorry well — but a burger always says it for him. One time he promised to meet but couldn’t come, and instead of words, he showed up later with a burger as an apology."
  },
  {
    year: "Omkareshwar",
    title: "Temple, then the journey that felt endless",
    desc: "We went when the weather was perfect — slightly rainy, surrounded by hills and greenery. After reaching, we had darshan and then left, but it felt like the journey should never end. On the way we ate bhutta (corn), looked at the hills and greenery from the side, talked, clicked pictures of each other, and just kept enjoying every moment. Even while heading back to the room, no one really wanted the day to end."
  },
  {
    year: "Khajrana Mandir",
    title: "Prasad from the temple",
    desc: "Jiju once went to Khajrana Mandir with his friends in his car and brought prasad for me. He brought it back specially, and it felt thoughtful and sweet(laddu)."
  },
  {
    year: "Lotus Valley",
    title: "Green day out",
    desc: "He made me ride the bike, then we went boating, laughed on the swings while pushing each other, rode horses together, and later just sat talking about life and office things. Then the rain came, and somehow my heart just wanted to stay there a little longer, sitting together and living that moment without worrying about anything else."
  },
  {
    year: "Bike Lessons",
    title: "He taught me to ride",
    desc: "From being scared of falling to finally balancing the bike — every little turn became my favorite memory with him."
  },
  {
    year: "Mahavatar Narsimha",
    title: "Goosebumps in the dark",
    desc: "We watched the movie and stayed till the credits rolled like it wasn’t really over. I was a little scared and kept nervously scratching (nakhun se nocha — just nervous habit). After that we went out for ice cream on the way back to the room. When the hostel gate got locked and the owner didn’t open it, there was a funny moment of panic, and jiju jokingly said we might have to sleep outside. But I just said I wouldn’t let that happen. Even that locked night, staying together outside the hostel felt unexpectedly calm and comforting."
  },
  {
    year: "Dewas",
    title: "A whole day, just ours",
    desc: "We left for Dewas early in the morning, full of masti right from the start — laughing, talking, stopping mid-way for snacks. After reaching, we had darshan at the mandir, and on the way back stopped for fulki (water balls) — that little roadside flavour we both love. After a while Kapil casually said \"Chalogi gaadi\", and I rode the bike. Somewhere in between, our hands brushed for a tiny second — that small, accidental touch is one of the most memorable feelings I have. Then suddenly the rain came down. Kapil started teasing me about my makeup — \"Mahima ki putti nikal gyi\" — and we just kept laughing in the rain. Once it stopped, I picked up the bike again. We went to the mall, sat at a restaurant, clicked a hundred pictures, ate together, and finally rode back to the room. One whole day, start to finish — every silly, soft, beautiful moment of it, ours.",
  },
  {
    year: "Sarafa, Rajwada",
    title: "The night every plan flopped — except us",
    desc: "We had a simple plan that evening — go to the mela and ride the jhula together, that's it. But when we reached, the whole mela was packed up because of a sudden tufaan (storm). No problem — we said let's try the one in Vijaynagar, maybe that's still open. We rode all the way there, only to find that one was empty too. Two melas down, zero jhula. But neither of us wanted the night to end, so we changed the plan on the spot — chalo Sarafa, Rajwada! We went straight to Sarafa, Indore's famous food street. Walked around in the night lights, tasted everything we could, picked up some sweets on the way, and finally headed back to the room — tired, full, and still laughing about how every plan that night flopped except being together. Sometimes the best evenings are the ones that don't go as planned.",
  },

  { year: "Phoenix Citadel", title: "Indore mall day", desc: "Pineapple pastry, masti on the escalator, and buying that one shirt together — a simple day that turned into one of my favorite memories." },
  {
    year: "Bike Ride",
    title: "Wind, roads & us",
    desc: "Late evening bike rides with music, random talks and peaceful silence."
  },

  { year: "Today", title: "Still us", desc: "Still fighting cutely, still caring deeply, still going strong." },

  {
    year: "Hill Maggie",
    title: "Maggie with a view",
    desc: "Cold breeze, hill top vibes and hot maggie together — perfect memory."
  },
];

function Countdown({ target, label }: { target: string; label: string }) {
  const [now, setNow] = useState<number | null>(null);
  useEffect(() => {
    setNow(Date.now());
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, []);
  const diff = now === null ? 0 : Math.max(0, new Date(target).getTime() - now);
  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff % 86400000) / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  const s = Math.floor((diff % 60000) / 1000);
  return (
    <div className="p-6 rounded-2xl bg-card border border-border text-center">
      <div className="text-sm text-muted-foreground">{label}</div>
      <div className="mt-2 flex justify-center gap-2 font-display text-2xl font-bold">
        <span>{d}<span className="text-xs text-muted-foreground ml-1">d</span></span>
        <span>:</span>
        <span>{h}<span className="text-xs text-muted-foreground ml-1">h</span></span>
        <span>:</span>
        <span>{m}<span className="text-xs text-muted-foreground ml-1">m</span></span>
        <span>:</span>
        <span>{s}<span className="text-xs text-muted-foreground ml-1">s</span></span>
      </div>
    </div>
  );
}

function Memories() {
  const nextYear = new Date().getFullYear() + 1;
  return (
    <Layout>
      <section className="max-w-6xl mx-auto px-4 pt-16 pb-10 text-center">
        <p className="font-script text-2xl text-primary">our little museum</p>
        <h1 className="text-5xl md:text-6xl font-bold mt-2">Memory Gallery</h1>
        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground text-lg">
          Movies, trips, malls, temples, the rain at the mela, and a burger that came as a sorry — all the tiny happinesses that became big memories.
        </p>
      </section>

      {/* Polaroids */}
      <section className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {polaroids.map((p, i) => (
            <div
              key={i}
              className="polaroid rounded-md transition-transform hover:!rotate-0 hover:scale-[1.03]"
              style={{ transform: `rotate(${i % 2 === 0 ? -2 : 2}deg)` }}
            >
              <div
                className={`relative aspect-square rounded-sm overflow-hidden bg-gradient-to-br ${p.color}`}
              >
                {p.img && (
                  <img
                    src={p.img}
                    alt={p.caption}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
              <p className="font-script text-xl text-center mt-3 text-foreground">
                {p.caption}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="max-w-3xl mx-auto px-4 mt-24">
        <h2 className="text-4xl font-bold text-center mb-12">Friendship Timeline</h2>
        <div className="relative pl-8 border-l-2 border-dashed border-primary/40 space-y-8">
          {timeline.map((t, i) => (
            <div key={i} className="relative">
              <div className="absolute -left-[37px] w-4 h-4 rounded-full gradient-sunset shadow-glow" />
              <p className="font-script text-xl text-primary">{t.year}</p>
              <h3 className="text-2xl font-bold">{t.title}</h3>
              <p className="text-muted-foreground mt-1">{t.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Handwritten notes */}
      <section className="max-w-5xl mx-auto px-4 mt-24">
        <h2 className="text-4xl font-bold text-center mb-10">Handwritten Notes</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            "you make ordinary days feel like festivals.",
            "even our little fights end with a burger .",
            "Love you.....∞",
          ].map((n, i) => (
            <div key={i} className="p-8 rounded-2xl bg-[var(--color-cream)] dark:bg-card shadow-soft" style={{ transform: `rotate(${i % 2 ? 1.5 : -1.5}deg)` }}>
              <p className="font-script text-2xl leading-relaxed text-foreground">{n}</p>
              <p className="font-script text-right text-primary mt-3">— always yours</p>
            </div>
          ))}
        </div>
      </section>

      {/* Countdowns */}


      {/* Funny secrets */}
      <section className="max-w-4xl mx-auto px-4 mt-24">
        <h2 className="text-4xl font-bold text-center mb-8">Cute Fights, Care & Tiny Secrets</h2>
        <div className="space-y-3">
          {[
            "Our cute little nok-jhok that ends in laughter every single time.",
            "Getting drenched at the Omkareshwar mela and not caring at all.",
            "When Kapil sent a burger instead of a 'sorry' — and it worked.",
            "Long mall walks at Phoenix Citadel just to share one ice cream.",
            "Whispering wishes at Khatu Shyam and pretending we didn't.",
            "Our little moments that meant everything to us.",
            "A moment so simple, yet so special to me.",
            "Those peaceful bike rides where even silence felt special.",
            "Sharing hot maggie on the hill while watching the view together.",
          ].map((s, i) => (
            <div key={i} className="p-5 rounded-2xl bg-card border border-border flex gap-3">
              <span className="font-script text-2xl text-primary">#{i + 1}</span>
              <p className="text-foreground/90">{s}</p>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
