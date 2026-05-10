type Props = { size?: number; className?: string };

// An elegant "M & K" monogram badge — soft gradient with serif initials
// and a flowy script ampersand in between. Replaces the old line-art logo.
export function MKLogo({ size = 36, className = "" }: Props) {
  return (
    <div
      className={`relative inline-flex items-center justify-center rounded-full gradient-sunset shadow-soft text-white select-none ${className}`}
      style={{ width: size, height: size }}
      aria-label="Mahima and Kapil"
      role="img"
    >
      {/* subtle inner ring for a polished badge feel */}
      <span
        className="absolute inset-[3px] rounded-full border border-white/30"
        aria-hidden="true"
      />

      <span
        className="font-display font-bold tracking-tighter leading-none"
        style={{ fontSize: size * 0.42 }}
      >
        M
      </span>
      <span
        className="font-script italic mx-[0.05em] leading-none -mt-[0.15em]"
        style={{ fontSize: size * 0.5 }}
      >
        &amp;
      </span>
      <span
        className="font-display font-bold tracking-tighter leading-none"
        style={{ fontSize: size * 0.42 }}
      >
        K
      </span>
    </div>
  );
}
