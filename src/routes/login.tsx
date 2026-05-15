import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Heart,
  Lock,
  Mail,
  Eye,
  EyeOff,
  LogIn,
  Sparkles,
} from "lucide-react";
import { isAuthed, signIn } from "@/lib/auth";
import mkLogo from "@/assets/mk-logo.png";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Login — Mahima & Kapil" },
      { name: "robots", content: "noindex,nofollow" },
      {
        name: "description",
        content: "Login to enter our personal little corner of the internet.",
      },
    ],
  }),
  component: Login,
});

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  // Already logged in? Bounce to home
  useEffect(() => {
    if (isAuthed()) navigate({ to: "/", replace: true });
  }, [navigate]);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setBusy(true);
    // Tiny artificial delay so the loading state is visible
    window.setTimeout(() => {
      if (signIn(email, password)) {
        navigate({ to: "/", replace: true });
      } else {
        setError("Something went wrong.");
        setBusy(false);
      }
    }, 400);
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center px-4 py-12 overflow-hidden">
      {/* Deep elegant background — slate base for the gold logo to shine on */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-zinc-900 to-stone-900" />
      {/* Warm gold glow top right */}
      <div className="absolute -top-32 -right-32 w-[28rem] h-[28rem] rounded-full bg-amber-500/20 blur-3xl animate-pulse" />
      {/* Rose glow bottom left */}
      <div
        className="absolute -bottom-32 -left-32 w-[28rem] h-[28rem] rounded-full bg-rose-500/15 blur-3xl animate-pulse"
        style={{ animationDelay: "1.2s" }}
      />
      {/* Soft center glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[36rem] h-[36rem] rounded-full bg-amber-400/10 blur-3xl animate-pulse"
        style={{ animationDelay: "0.6s" }}
      />

      {/* Subtle floating decorations */}
      <Sparkles className="absolute top-12 left-12 w-5 h-5 text-amber-400/70 animate-pulse" />
      <Sparkles
        className="absolute top-24 right-16 w-4 h-4 text-amber-300/60 animate-pulse"
        style={{ animationDelay: "0.8s" }}
      />
      <Heart className="absolute bottom-16 right-12 w-5 h-5 text-rose-400/60 fill-rose-400/30 animate-pulse" />
      <Heart
        className="absolute bottom-32 left-12 w-4 h-4 text-rose-400/60 fill-rose-400/30 animate-pulse"
        style={{ animationDelay: "0.4s" }}
      />

      <form
        onSubmit={onSubmit}
        className="relative w-full max-w-md bg-slate-900/70 backdrop-blur-xl rounded-[2rem] p-8 md:p-10 shadow-2xl border border-amber-500/20 ring-1 ring-white/5"
      >
        {/* MK Logo header */}
        <div className="flex flex-col items-center mb-7">
          <div className="relative">
            {/* Golden radial glow behind the logo */}
            <div className="absolute inset-0 -m-8 rounded-full bg-amber-400/20 blur-2xl" />
            <div className="absolute inset-0 -m-4 rounded-full bg-amber-500/10 blur-xl" />
            <img
              src={mkLogo}
              alt="MK — Mahima & Kapil"
              className="relative w-40 md:w-48 h-auto drop-shadow-[0_10px_25px_rgba(245,158,11,0.35)]"
            />
          </div>
          <p className="font-script text-2xl text-amber-300 mt-3">
            welcome back
          </p>
          <p className="mt-3 text-sm text-white/70 text-center max-w-xs">
            Login karke andar aao — yeh humari personal jagah hai, sirf hum
            dono ke liye.
          </p>
        </div>

        {/* Email */}
        <label className="block mb-4">
          <span className="block text-sm font-medium mb-1.5 text-amber-100/90">
            Email
          </span>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-amber-400" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
              placeholder="you@example.com"
              disabled={busy}
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-950/60 border border-white/10 text-white placeholder:text-white/30 focus:border-amber-400/60 focus:ring-2 focus:ring-amber-400/20 outline-none transition disabled:opacity-70"
            />
          </div>
        </label>

        {/* Password */}
        <label className="block mb-5">
          <span className="block text-sm font-medium mb-1.5 text-amber-100/90">
            Password
          </span>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-amber-400" />
            <input
              type={showPass ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="current-password"
              placeholder="Type the secret..."
              disabled={busy}
              className="w-full pl-10 pr-12 py-3 rounded-xl bg-slate-950/60 border border-white/10 text-white placeholder:text-white/30 focus:border-amber-400/60 focus:ring-2 focus:ring-amber-400/20 outline-none transition disabled:opacity-70"
            />
            <button
              type="button"
              onClick={() => setShowPass((v) => !v)}
              aria-label={showPass ? "Hide password" : "Show password"}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-white/50 hover:text-amber-300 transition"
            >
              {showPass ? (
                <EyeOff className="w-4 h-4" />
              ) : (
                <Eye className="w-4 h-4" />
              )}
            </button>
          </div>
        </label>

        {error && (
          <div className="mb-4 p-3 rounded-xl bg-rose-500/15 border border-rose-400/40 text-rose-200 text-sm text-center font-medium">
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={busy}
          className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-500 text-slate-950 font-bold shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50 hover:brightness-110 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {busy ? (
            <>
              <span className="w-4 h-4 rounded-full border-2 border-slate-950/40 border-t-slate-950 animate-spin" />
              Checking...
            </>
          ) : (
            <>
              Login <LogIn className="w-4 h-4" />
            </>
          )}
        </button>

        <p className="mt-6 text-center font-script text-lg text-amber-300/90 flex items-center justify-center gap-1.5">
          made with{" "}
          <Heart className="w-4 h-4 inline fill-rose-400 text-rose-400" /> just
          for us
        </p>
      </form>
    </div>
  );
}
