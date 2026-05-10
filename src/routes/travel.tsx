import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import jaipur from "@/assets/jaipur.jpg";
import mountabu from "@/assets/mountabu.jpg";
import udaipur from "@/assets/udaipur.jpg";
import dewas from "@/assets/dewas.jpg";
import dewas1 from "@/assets/dewas1.jpg"
import pcmall from "@/assets/pc-mall.jpg"
import dhaba from "@/assets/dhaba.jpg"
import temple from "@/assets/temple.jpg"
import hanumang from "@/assets/hanumang.jpg"
import velly from "@/assets/velly.jpg"
import mtabu from "@/assets/mtabu.jpg"
import kshyam from "@/assets/kshyam.jpg"

import { useEffect, useState } from "react";
import { MapPin, Plane, X } from "lucide-react";

export const Route = createFileRoute("/travel")({
  head: () => ({
    meta: [
      { title: "Travel — MK" },
      { name: "description", content: "Places we've explored together and dreamy destinations on our list." },
    ],
  }),
  component: Travel,
});

const places = [
  { name: "Omkareshwar", img: temple, note: "Holy ghats, a temple darshan, and the mela that turned into a rainy adventure." },
  { name: "Dewas", img: dewas1, note: "Tekri temples at dawn, bells, blessings and giggles all the way down." },
  { name: "Phoenix Citadel Mall, Indore", img: pcmall, note: "Endless window shopping, the food court, and that one shop we kept going back to." },
  { name: "Restaurant", img: dhaba, note: "Same corner table, same orders — the place that feels like ours." },
  { name: "Jaipur", img: jaipur, note: "Hawa Mahal, Jal Mahal and Albert Hall — the Pink City stole our hearts." },
  { name: "Mount Abu", img: mtabu, note: "Sunset point, Nakki Lake, and the kind of breeze that makes you believe in magic." },
  { name: "Udaipur", img: udaipur, note: "City of lakes — boat rides and rooftops we'll never forget." },
  { name: "pitra parvat", img: hanumang, note: "A climb full of giggles, tired legs, and a thousand selfies." },
  { name: "Lotus Valley", img: velly, note: "Green, calm, and just us — nature, snacks and music." },
  { name: "Khatu Shyam", img: kshyam, note: "Folded hands, same wish — best friends, forever." },
];

const dreams = ["Manali", "Goa", "Rishikesh", "Ladakh", "Pondicherry", "Kashmir", "Meghalaya", "Andaman"];

type Place = (typeof places)[number];

function Lightbox({ place, onClose }: { place: Place; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={place.name}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in"
    >
      <button
        type="button"
        aria-label="Close"
        onClick={onClose}
        className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition"
      >
        <X className="w-6 h-6" />
      </button>

      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-5xl w-full max-h-[90vh] flex flex-col rounded-2xl overflow-hidden bg-card shadow-glow"
      >
        <div className="flex-1 min-h-0 bg-black flex items-center justify-center">
          <img
            src={place.img}
            alt={place.name}
            className="max-h-[70vh] w-auto max-w-full object-contain"
          />
        </div>
        <div className="p-5 md:p-6 border-t border-border">
          <div className="flex items-center gap-2 text-primary">
            <MapPin className="w-4 h-4" />
            <span className="font-script text-xl">{place.name}</span>
          </div>
          <p className="mt-2 text-foreground/90">{place.note}</p>
        </div>
      </div>
    </div>
  );
}

function Travel() {
  const [active, setActive] = useState<Place | null>(null);

  return (
    <Layout>
      <section className="max-w-6xl mx-auto px-4 pt-16 pb-10 text-center">
        <p className="font-script text-2xl text-primary">passport stamps of friendship</p>
        <h1 className="text-5xl md:text-6xl font-bold mt-2">Places We've Been</h1>
        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground text-lg">
          Big cities, tiny towns, temples, malls, and every enjoy in between — every place got better because we were there together.
        </p>
        <p className="mt-3 text-sm text-muted-foreground/80">
          Tip: tap on any photo to view it bigger ✨
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8">
        {places.map((p) => (
          <article key={p.name} className="group rounded-3xl overflow-hidden bg-card border border-border shadow-soft hover:shadow-glow transition-all">
            <button
              type="button"
              onClick={() => setActive(p)}
              aria-label={`Open ${p.name} photo`}
              className="block relative aspect-[4/3] w-full overflow-hidden cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <img
                src={p.img}
                alt={p.name}
                loading="lazy"
                width={1024}
                height={768}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-background/80 backdrop-blur flex items-center gap-1 text-sm">
                <MapPin className="w-4 h-4 text-primary" /> {p.name}
              </div>
            </button>
            <div className="p-6">
              <h3 className="font-display text-2xl font-bold">{p.name}</h3>
              <p className="text-muted-foreground mt-2">{p.note}</p>
            </div>
          </article>
        ))}
      </section>

      {/* Small places */}
      <section className="max-w-5xl mx-auto px-4 mt-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center">…and the tiny corners in between</h2>
        <p className="text-center text-muted-foreground mt-2">Hills, Small streets, hidden cafés, random benches — happiness lives in the little places too.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {["that roadside dhaba", "rainy bus stop", "the old book shop", "temple steps", "ice cream cart", "rooftop terrace", "garden bench", "river ghat"].map((p) => (
            <span key={p} className="px-4 py-2 rounded-full bg-card border border-border font-script text-xl">{p}</span>
          ))}
        </div>
      </section>

      {/* Dream destinations */}
      <section className="max-w-5xl mx-auto px-4 mt-20">
        <div className="p-10 rounded-[2rem] gradient-sunset text-white">
          <div className="flex items-center gap-3">
            <Plane className="w-8 h-8" />
            <h2 className="font-display text-3xl md:text-4xl font-bold">Future Dream Destinations</h2>
          </div>
          <p className="mt-2 text-white/90">The list keeps growing. So does the excitement.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            {dreams.map((d) => (
              <span key={d} className="px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30">{d}</span>
            ))}
          </div>
        </div>
      </section>

      {active && <Lightbox place={active} onClose={() => setActive(null)} />}
    </Layout>
  );
}
