import { Link } from "@tanstack/react-router";
import { MKLogo } from "./MKLogo";

export function Logo() {
  return (
    <Link
      to="/"
      className="flex items-center gap-3 group"
      aria-label="Mahima & Kapil — Home"
    >
      <MKLogo
        size={42}
        className="transition-transform duration-500 group-hover:scale-105 group-hover:rotate-[-4deg]"
      />
      <div className="leading-tight hidden sm:block">
        <div className="font-display text-xl font-bold tracking-tight">
          Mahima <span className="text-primary font-script italic">&amp;</span>{" "}
          Kapil
        </div>
        <div className="font-script text-sm text-muted-foreground -mt-1">
          best friends, always
        </div>
      </div>
    </Link>
  );
}
