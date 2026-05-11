import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { useEffect, useRef, useState } from "react";
import { Video, Play, X } from "lucide-react";

import vmk from "@/assets/videos/vmk.mp4";
import vmk1 from "@/assets/videos/vmk1.mp4";
import vmk2 from "@/assets/videos/vmk2.mp4";
import vmk3 from "@/assets/videos/vmk3.mp4";
import vmk4 from "@/assets/videos/vmk4.mp4";
import vmk5 from "@/assets/videos/vmk5.mp4";
import vmk6 from "@/assets/videos/vmk6.mp4";
import vmk7 from "@/assets/videos/vmk7.mp4";
import vmk8 from "@/assets/videos/vmk8.mp4";
import vmk9 from "@/assets/videos/vmk9.mp4";
import vmk10 from "@/assets/videos/vmk10.mp4";
import vmk11 from "@/assets/videos/vmk11.mp4";


export const Route = createFileRoute("/videos")({
  head: () => ({
    meta: [
      { title: "Videos — Mahima & Kapil" },
      {
        name: "description",
        content:
          "Tiny video clips, big memories — laughter, rides, and the in-between moments.",
      },
    ],
  }),
  component: Videos,
});

type Clip = {
  src: string;
  title: string;
  caption: string;
};

const clips: Clip[] = [
  { src: vmk11, title: "@cup chay", caption: "HUm tum kitne." },
  { src: vmk, title: "Our little world", caption: "A moment that says everything without saying a word." },
  { src: vmk1, title: "Random masti", caption: "Cameras rolling, laughter unstoppable." },
  { src: vmk2, title: "Soft smiles", caption: "Those tiny smiles that fix the whole day." },
  { src: vmk3, title: "On the road", caption: "Wind, music and us — bike ride mood." },
  { src: vmk4, title: "Golden hour", caption: "Soft sunlight, softer hearts." },
  { src: vmk5, title: "Just being us", caption: "Nothing fancy — just us, just real." },
  { src: vmk6, title: "Caught laughing", caption: "Some giggles just refuse to stop." },
  { src: vmk7, title: "Tiny moment", caption: "Blink and miss — but my heart kept it." },
  { src: vmk8, title: "Cute fight", caption: "Even our nok-jhok looks like masti." },
  { src: vmk9, title: "Lazy afternoon", caption: "Slow day, full heart." },
  { src: vmk10, title: "Forever frame", caption: "If memory had a video, it would look like this." },
];

function VideoLightbox({ clip, onClose }: { clip: Clip; onClose: () => void }) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

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

  useEffect(() => {
    videoRef.current?.play().catch(() => {});
  }, [clip.src]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={clip.title}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
    >
      <button
        type="button"
        aria-label="Close"
        onClick={onClose}
        className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition z-10"
      >
        <X className="w-6 h-6" />
      </button>

      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-5xl w-full max-h-[92vh] flex flex-col rounded-2xl overflow-hidden bg-card shadow-glow"
      >
        <div className="flex-1 min-h-0 bg-black flex items-center justify-center">
          <video
            ref={videoRef}
            src={clip.src}
            controls
            playsInline
            className="max-h-[72vh] w-auto max-w-full"
          />
        </div>
        <div className="p-5 md:p-6 border-t border-border">
          <div className="flex items-center gap-2 text-primary">
            <Video className="w-4 h-4" />
            <span className="font-script text-xl">{clip.title}</span>
          </div>
          <p className="mt-2 text-foreground/90 font-script text-xl leading-snug">
            {clip.caption}
          </p>
        </div>
      </div>
    </div>
  );
}

function Videos() {
  const [active, setActive] = useState<Clip | null>(null);

  return (
    <Layout>
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 pt-16 pb-10 text-center">
        <p className="font-script text-2xl text-primary">our moving moments</p>
        <h1 className="text-5xl md:text-6xl font-bold mt-2 flex items-center justify-center gap-3">
          <Video className="w-10 h-10 md:w-12 md:h-12 text-primary" /> Videos
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground text-lg">
          Tiny clips, big feelings — laughter caught mid-air, slow rides, soft
          smiles and all the in-between moments words can't quite hold.
        </p>
        <p className="mt-3 text-sm text-muted-foreground/80">
          Tap on any clip to play it in full ✨
        </p>
      </section>

      {/* Gallery */}
      <section className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {clips.map((c, i) => (
            <article
              key={i}
              className="group flex flex-col rounded-3xl overflow-hidden bg-card border border-border shadow-soft hover:shadow-glow transition-all"
            >
              <button
                type="button"
                onClick={() => setActive(c)}
                aria-label={`Play ${c.title}`}
                className="block relative aspect-video w-full overflow-hidden cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary bg-black"
              >
                {/* subtle background of the video frame */}
                <video
                  src={c.src}
                  preload="metadata"
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-contain"
                />
                {/* Soft overlay + play icon */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full gradient-sunset flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform">
                    <Play className="w-7 h-7 md:w-9 md:h-9 text-white fill-white ml-1" />
                  </div>
                </div>
                <div className="absolute top-2 left-2 md:top-3 md:left-3 px-2.5 py-1 rounded-full bg-background/80 backdrop-blur flex items-center gap-1 text-xs md:text-sm">
                  <Video className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary" />
                  <span className="truncate max-w-[140px] md:max-w-none">
                    {c.title}
                  </span>
                </div>
              </button>
              <div className="p-4 md:p-5 flex-1 flex flex-col">
                <div className="flex items-center gap-2 text-primary">
                  <Video className="w-4 h-4 shrink-0" />
                  <span className="font-script text-lg md:text-xl truncate">
                    {c.title}
                  </span>
                </div>
                <p className="mt-1 font-script text-base md:text-lg text-foreground/90 leading-snug">
                  {c.caption}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Footer note */}
      <section className="max-w-3xl mx-auto px-4 mt-20 mb-20 text-center">
        <div className="p-8 rounded-[2rem] gradient-rose text-white shadow-glow">
          <p className="font-script text-3xl">
            some moments only a video can capture.
          </p>
          <p className="mt-2 text-white/90">
            Photos rok lete hain ek pal, par videos zinda kar dete hain wo poora
            moment — hansi, awaaz, sab kuch.
          </p>
        </div>
      </section>

      {active && <VideoLightbox clip={active} onClose={() => setActive(null)} />}
    </Layout>
  );
}
