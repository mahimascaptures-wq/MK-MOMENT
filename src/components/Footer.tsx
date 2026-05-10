import { MKLogo } from "./MKLogo";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-border/50 py-10 text-center">
      <div className="flex justify-center mb-2"><MKLogo size={42} /></div>
      <p className="font-script text-3xl text-gradient">Mahima & Kapil</p>
      <p className="text-sm text-muted-foreground mt-2 flex items-center justify-center gap-1">
        Made with <MKLogo size={16} /> for a friendship that lasts forever
      </p>
      <p className="text-xs text-muted-foreground/70 mt-1">© {new Date().getFullYear()} — Our  corner of the internet</p>
    </footer>
  );
}
