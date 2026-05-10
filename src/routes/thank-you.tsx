import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { MKLogo } from "@/components/MKLogo";

export const Route = createFileRoute("/thank-you")({
  head: () => ({
    meta: [
      { title: "Thank You — Mahima & Kapil" },
      { name: "description", content: "A thank-you note from both of us, to each other." },
    ],
  }),
  component: ThankYou,
});

function ThankYou() {
  return (
    <Layout>
      <section className="max-w-4xl mx-auto px-4 py-24 text-center">
        <div className="mx-auto w-24 h-24 flex items-center justify-center animate-pulse-soft">
          <MKLogo size={96} />
        </div>
        <p className="font-script text-3xl text-primary mt-6">a little note — from both of us</p>
        <h1 className="font-display text-5xl md:text-7xl font-bold text-gradient mt-4">
          Thank you for being in my life
        </h1>

        {/* From Kapil */}
        <div className="mt-10 p-10 md:p-14 rounded-[2.5rem] bg-card border border-border shadow-soft text-left space-y-5 text-lg leading-relaxed">
          <div className="flex items-center gap-3">
            <MKLogo size={32} />
            <p className="font-script text-2xl text-primary">from Kapil → Mahima</p>
          </div>
          <p>
            Thank you, butki. For understanding me even when I don't say too much. For knowing the
            words I never learned to use. You're special — my favourite person. Thank you, Mahi…
            butki Mahi, ladoo.
          </p>
          <p>
            For every burger that came as a sorry, every silly fight that ended in a hug, every
            little smile that made my whole day — thank you. Looking at you, I'm just happy. Quietly,
            completely happy.
          </p>
          <p className="font-script text-2xl text-right text-primary">— always your boy.</p>
        </div>

        {/* From Mahima */}
        <div className="mt-8 p-10 md:p-14 rounded-[2.5rem] gradient-rose text-white shadow-glow text-left space-y-5 text-lg leading-relaxed">
          <div className="flex items-center gap-3">
            <MKLogo size={32} />
            <p className="font-script text-2xl">from Mahima → Kapil</p>
          </div>
          <p>
            Thank you for being the calmest, kindest part of my world. For the trips and the chais,
            the late-night calls and the early-morning memes. For the movies we quoted till they
            became inside jokes, and the places that became "ours."
          </p>
          <p>
            Whether it's Omkareshwar in the rain, Dewas at sunrise, Phoenix Citadel on a Sunday, or
            Khatu Shyam with folded hands — you make every place feel like home.
          </p>
          <p className="font-script text-3xl text-center pt-2">
            you are my favourite story.
          </p>
          <p className="font-script text-2xl text-right">— forever yours, butki.</p>
        </div>

        <div className="mt-12 flex justify-center">
          <MKLogo size={64} />
        </div>
      </section>
    </Layout>
  );
}
