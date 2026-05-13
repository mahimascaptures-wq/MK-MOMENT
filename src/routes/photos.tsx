import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { useEffect, useState } from "react";
import { Camera, MapPin, X } from "lucide-react";

import hero from "@/assets/hero.jpg";
import mk from "@/assets/mk.jpeg";
import mk1 from "@/assets/mk1.jpeg";
import mk2 from "@/assets/mk2.jpeg";
import mk3 from "@/assets/mk3.jpeg";
import jaipur from "@/assets/jaipur.jpg";
import udaipur from "@/assets/udaipur.jpg";
import mountabu from "@/assets/mountabu.jpg";
import mtabu from "@/assets/mtabu.jpg";
import dewas from "@/assets/dewas.jpg";
import dewas1 from "@/assets/dewas1.jpg";
import temple from "@/assets/temple.jpg";
import hanumang from "@/assets/hanumang.jpg";
import velly from "@/assets/velly.jpg";
import kshyam from "@/assets/kshyam.jpg";
import pcmall from "@/assets/pc-mall.jpg";
import dhaba from "@/assets/dhaba.jpg";

import both from "@/assets/both.jpeg";
import bk from "@/assets/bk.jpeg";
import bk1 from "@/assets/bk1.jpeg";
import bk2 from "@/assets/bk2.jpeg";
import bk3 from "@/assets/bk3.jpeg";
import bk4 from "@/assets/bk4.jpeg";
import bk5 from "@/assets/bk5.jpeg";
import bk6 from "@/assets/bk6.jpeg";
import bk7 from "@/assets/bk7.jpeg";
import bk8 from "@/assets/bk8.jpeg";
import bk9 from "@/assets/bk9.jpeg";
import bk10 from "@/assets/bk10.jpeg";
import bk11 from "@/assets/bk11.jpeg";
import bk12 from "@/assets/bk12.jpeg";
import bk13 from "@/assets/bk13.jpeg";

import mkNew from "@/assets/new/mk-new.jpeg";
import mkNew1 from "@/assets/new/mk-new1.jpeg";
import mkNew2 from "@/assets/new/mk-new2.jpeg";
import mkNew3 from "@/assets/new/mk-new3.jpeg";
import mkNew4 from "@/assets/new/mk-new4.jpeg";
import mkNew5 from "@/assets/new/mk-new5.jpeg";
import mkNew6 from "@/assets/new/mk-new6.jpeg";
import mkNew7 from "@/assets/new/mk-new7.jpeg";
import mkNew8 from "@/assets/new/mk-new8.jpeg";
import mkNew9 from "@/assets/new/mk-new9.jpeg";
import mkNew10 from "@/assets/new/mk-new10.jpeg";
import mkNew11 from "@/assets/new/mk-new11.jpeg";
import mkNew12 from "@/assets/new/mk-new12.jpeg";
import mkNew13 from "@/assets/new/mk-new13.jpeg";

export const Route = createFileRoute("/photos")({
  head: () => ({
    meta: [
      { title: "Photos — Mahima & Kapil" },
      { name: "description", content: "A little photo book of our favourite moments — places, smiles and memories." },
    ],
  }),
  component: Photos,
});

type Photo = {
  img: string;
  location: string;
  caption: string;
  fit?: "cover" | "contain";
};

const photos: Photo[] = [
  { img: both,     location: "Dressed up, together",   caption: "The two of us, side by side — a forever favourite frame.", fit: "contain" },
  { img: bk13,     location: "Our beginning",          caption: "Where every story of ours quietly began." },
  { img: mk1,      location: "Indore streets",         caption: "Random walks, random laughs — perfectly us." },

  { img: bk4,   location: "Best One",        caption: "Best with fav person." },

  { img: mk2,      location: "Sunset evening",         caption: "Sky in colours, hearts at peace." },
  { img: mk3,      location: "Late night drive",       caption: "Music low, talks endless, soul full." },
   { img: kshyam,   location: "Khatu Shyam",            caption: "Folded hands, same wish — best friends, forever." },
  
  { img: bk,    location: "Bike Diaries",      caption: "Two wheels, two best friends, one endless road." },
  { img: bk1,   location: "Bike Diaries",      caption: "Helmet on, smile bigger — ready for the road." },
  { img: bk2,   location: "Morning Vibe",      caption: "Morning vibe with closest person." },
  { img: bk6,   location: "Open roads",        caption: "Highways, hill curves and us — perfect combo." },
  { img: bk3,   location: "Random stop",       caption: "Random pause, big smile — that's how we travel." },
 
  { img: bk7,   location: "Pit stop",          caption: "Petrol stop that turned into a photo session." },
  { img: bk8,   location: "Sunset ride",       caption: "Sunset, helmet hair and one happy click." },
  { img: bk10,  location: "Mini break",        caption: "Pause, breathe, click — repeat." },
  { img: bk11,  location: "Side roads",        caption: "Tiny detours that became favourite memories.", fit: "contain" },
  { img: bk12,  location: "Best Pal",          caption: "Click before we ride — our little ritual.", fit: "contain" },
  { img: bk5,   location: "Pillion view",      caption: "Best seat in the world — right behind him.", fit: "contain" },
  { img: bk9,   location: "Just us",           caption: "When the road feels like a friend too.", fit: "contain" },
  { img: mk,    location: "Indore",            caption: "A simple click that became a forever favourite.", fit: "contain" },

  { img: mkNew,    location: "New Memories",   caption: "Fresh clicks, same smiles — making memories all over again.", fit: "contain" },
  { img: mkNew1,   location: "Just Us",        caption: "That look — soft, silent, and full of meaning.", fit: "contain" },
  { img: mkNew2,   location: "Soft Moments",   caption: "Tiny moments that quietly become the most important ones.", fit: "contain" },
  { img: mkNew3,   location: "Together",       caption: "Together feels like the safest place I know.", fit: "contain" },
  { img: mkNew4,   location: "Happy Hours",    caption: "Some days, just being with you is the whole plan.", fit: "contain" },
  { img: mkNew5,   location: "Candid",         caption: "Unplanned click, perfectly us.", fit: "contain" },
  { img: mkNew6,   location: "Smile File",     caption: "Saving this smile for all the bad days.", fit: "contain" },
  { img: mkNew7,   location: "Golden Hour",    caption: "Soft light, soft hearts — golden hour magic.", fit: "contain" },
  { img: mkNew8,   location: "Comfort",        caption: "You are my comfort place — no other definition needed.", fit: "contain" },
  { img: mkNew9,   location: "Little Things",  caption: "Small clicks, big memories — that's our love language.", fit: "contain" },
  { img: mkNew10,  location: "Bestie Mode",    caption: "Bestie mode: always ON.", fit: "contain" },
  { img: mkNew11,  location: "Forever Frame",  caption: "Some frames you'd want to keep forever — this is one.", fit: "contain" },
  { img: mkNew12,  location: "Pure Joy",       caption: "Pure happiness, no filter needed.", fit: "contain" },
  { img: mkNew13,  location: "Our Story",      caption: "Adding one more page to our forever story.", fit: "contain" },
];

function Lightbox({ photo, onClose }: { photo: Photo; onClose: () => void }) {
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
      aria-label={photo.location}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4"
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
        className="relative max-w-5xl w-full max-h-[92vh] flex flex-col rounded-2xl overflow-hidden bg-card shadow-glow"
      >
        <div className="flex-1 min-h-0 bg-black flex items-center justify-center">
          <img
            src={photo.img}
            alt={photo.location}
            className="max-h-[72vh] w-auto max-w-full object-contain"
          />
        </div>
        <div className="p-5 md:p-6 border-t border-border">
          <div className="flex items-center gap-2 text-primary">
            <MapPin className="w-4 h-4" />
            <span className="font-script text-xl">{photo.location}</span>
          </div>
          <p className="mt-2 text-foreground/90 font-script text-xl leading-snug">{photo.caption}</p>
        </div>
      </div>
    </div>
  );
}

function Photos() {
  const [active, setActive] = useState<Photo | null>(null);

  return (
    <Layout>
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 pt-16 pb-10 text-center">
        <p className="font-script text-2xl text-primary">our  photo book</p>
        <h1 className="text-5xl md:text-6xl font-bold mt-2 flex items-center justify-center gap-3">
          <Camera className="w-10 h-10 md:w-12 md:h-12 text-primary" /> Photos
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground text-lg">
          Frozen smiles, sunset skies, temple bells and tired-leg trips — every picture here has a tiny story behind it.
        </p>
        <p className="mt-3 text-sm text-muted-foreground/80">
          Tap on any photo to view it bigger ✨
        </p>
      </section>

      {/* Gallery — equal-sized cards for a neat uniform look */}
      <section className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {photos.map((p, i) => (
            <article
              key={i}
              className="group flex flex-col rounded-3xl overflow-hidden bg-card border border-border shadow-soft hover:shadow-glow transition-all"
            >
              <button
                type="button"
                onClick={() => setActive(p)}
                aria-label={`Open ${p.location} photo`}
                className="block relative aspect-square w-full overflow-hidden cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-primary bg-secondary"
              >
                {p.fit === "contain" && (
                  <img
                    src={p.img}
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 w-full h-full object-cover scale-110 blur-xl opacity-70"
                  />
                )}
                <img
                  src={p.img}
                  alt={p.location}
                  loading="lazy"
                  className={`absolute inset-0 w-full h-full ${
                    p.fit === "contain" ? "object-contain" : "object-cover"
                  } group-hover:scale-105 transition-transform duration-700`}
                />
                <div className="absolute top-2 left-2 md:top-3 md:left-3 px-2.5 py-1 rounded-full bg-background/80 backdrop-blur flex items-center gap-1 text-xs md:text-sm">
                  <MapPin className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary" />
                  <span className="truncate max-w-[120px] md:max-w-none">{p.location}</span>
                </div>
              </button>
              <div className="p-4 md:p-5 flex-1 flex flex-col">
                <div className="flex items-center gap-2 text-primary">
                  <MapPin className="w-4 h-4 shrink-0" />
                  <span className="font-script text-lg md:text-xl truncate">{p.location}</span>
                </div>
                <p className="mt-1 font-script text-base md:text-lg text-foreground/90 leading-snug">
                  {p.caption}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Footer note */}
      <section className="max-w-3xl mx-auto px-4 mt-20 mb-20 text-center">
        <div className="p-8 rounded-[2rem] gradient-sunset text-white shadow-glow">
          <p className="font-script text-3xl">some photos &amp; videos never made it here.</p>
          <p className="mt-2 text-white/90">
            Due to some reasons, kuch photos aur videos add nahi ho paaye — but the memories
            stay safe in our hearts, exactly the way they happened.
          </p>
        </div>
      </section>

      {active && <Lightbox photo={active} onClose={() => setActive(null)} />}
    </Layout>
  );
}
