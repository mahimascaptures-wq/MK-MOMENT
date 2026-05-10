import { useEffect, useMemo, useState } from "react";
import { Heart, Star } from "lucide-react";

export function FloatingHearts() {
  // Avoid SSR/CSR mismatch — only render randomized items after mount on client.
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const items = useMemo(
    () =>
      Array.from({ length: 14 }, (_, i) => ({
        left: Math.random() * 100,
        delay: Math.random() * 12,
        size: 12 + Math.random() * 18,
        kind: i % 3 === 0 ? "star" : "heart",
        opacity: 0.3 + Math.random() * 0.5,
      })),
    [mounted]
  );

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {items.map((it, i) => {
        const Icon = it.kind === "star" ? Star : Heart;
        return (
          <Icon
            key={i}
            className="absolute float-heart text-primary fill-primary"
            style={{
              left: `${it.left}%`,
              width: it.size,
              height: it.size,
              animationDelay: `${it.delay}s`,
              opacity: it.opacity,
            }}
          />
        );
      })}
    </div>
  );
}
