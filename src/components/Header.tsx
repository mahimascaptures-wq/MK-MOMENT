import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { useEffect, useState } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/photos", label: "Photos" },
  { to: "/memories", label: "Memories" },
  { to: "/travel", label: "Travel" },
  { to: "/movies", label: "Movies" },
  { to: "/food", label: "Food" },
  { to: "/quotes", label: "Quotes" },
  { to: "/thank-you", label: "Thank You" },
] as const;

export function Header() {
  const [dark, setDark] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Logo />
        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="px-3 py-2 text-sm rounded-full text-foreground/80 hover:text-primary hover:bg-secondary transition-colors"
              activeProps={{ className: "px-3 py-2 text-sm rounded-full text-primary bg-secondary font-medium" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setDark((v) => !v)}
            aria-label="Toggle theme"
            className="p-2 rounded-full hover:bg-secondary transition-colors"
          >
            {dark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <button
            className="lg:hidden p-2 rounded-full hover:bg-secondary"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="lg:hidden border-t border-border/50 px-4 py-3 flex flex-col gap-1 bg-background/95">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="px-3 py-2 rounded-lg text-foreground/80 hover:bg-secondary"
              activeProps={{ className: "px-3 py-2 rounded-lg text-primary bg-secondary font-medium" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
