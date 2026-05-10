import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Quote } from "lucide-react";

export const Route = createFileRoute("/quotes")({
  head: () => ({
    meta: [
      { title: "Quotes — Mahima & Kapil" },
      { name: "description", content: "Cute quotes, sweet messages and the little names we call each other." },
    ],
  }),
  component: Quotes,
});

const quotes = [
  {
    text:
      "Thank you, and always understanding me even when I don't say too much — you just understand. You're special. You are my favourite person. Thank you, Mahi… butki Mahi, ladoo.",
    author: "Kapil → Mahima",
  },
  {
    text: "You're my tiny butki, my betu, my ladoo — and the calmest place my heart knows.",
    author: "Kapil → Mahima",
  },
  {
    text: "You don't need to say it. I see it in your silence too. Thank you for being my safe person.",
    author: "Mahima → Kapil",
  },

  {
    text:
      "Your smile, your love, the way you call me 'betu', the way you love like a little child, your masti — all of these together have become the most beautiful memory of my life.",
    author: "Mahima → Kapil",
  },
  {
    text:
      "Looking at your smile, it feels like everything in the world is okay. That one smile of yours can make my entire day.",
    author: "Mahima → Kapil",
  },
  {
    text:
      "When you call me 'betu', a quiet little corner of my heart goes warm. Such a small word — yet it carries so much love.",
    author: "Mahima → Kapil",
  },
  {
    text:
      "The way you love like a little child, that masti, those cute little fights — these are the things that make you so different from everyone else. So pure, so honest.",
    author: "Mahima → Kapil",
  },
  {
    text:
      "I just have to say 'let's go' — and you're ready, no questions asked. That's exactly what your love is — silent, instant, and always there.",
    author: "Mahima → Kapil",
  },
  {
    text:
      "You don't talk much, but your care shows up in every little thing you do. Your silence is far sweeter than most people's words.",
    author: "Mahima → Kapil",
  },

  {
    text: "Some people are home. You're mine — even from far away.",
    author: "us",
  },
  { text: "Friends are the family we choose.", author: "us" },

  {
    text: "Some people arrive and make such a beautiful impact, you can hardly remember life without them.",
    author: "anon",
  },

  { text: "Walking with a friend in the dark is better than walking alone in the light.", author: "Helen Keller" },
];

function Quotes() {
  return (
    <Layout>
      <section className="max-w-6xl mx-auto px-4 pt-16 pb-10 text-center">
        <p className="font-script text-2xl text-primary">words we live by</p>
        <h1 className="text-5xl md:text-6xl font-bold mt-2">Cute Quotes & Messages</h1>
        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground text-lg">
          Tiny notes, soft confessions and the little names — butki, betu, ladoo — that mean the whole world.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-6">
        {quotes.map((q, i) => (
          <div
            key={i}
            className={`p-8 rounded-3xl border border-border shadow-soft ${
              i % 3 === 0 ? "gradient-sunset text-white" : i % 3 === 1 ? "bg-card" : "gradient-rose text-white"
            }`}
          >
            <Quote className={`w-8 h-8 mb-3 ${i % 3 === 1 ? "text-primary/40" : "text-white/60"}`} />
            <p className="font-script text-2xl md:text-3xl leading-relaxed">{q.text}</p>
            <p className={`mt-4 text-sm ${i % 3 === 1 ? "text-muted-foreground" : "text-white/80"}`}>— {q.author}</p>
          </div>
        ))}
      </section>

      <section className="max-w-3xl mx-auto px-4 mt-20 text-center">
        <p className="font-script text-4xl md:text-5xl text-gradient leading-tight">
          "And in the end, we'll still be those two friends who laughed at everything — butki and her boy."
        </p>
      </section>
    </Layout>
  );
}
