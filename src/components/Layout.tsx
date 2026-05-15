import { useEffect } from "react";
import { useNavigate } from "@tanstack/react-router";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { FloatingHearts } from "./FloatingHearts";
import { useAuth } from "@/lib/auth";

export function Layout({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();
  const authed = useAuth();

  useEffect(() => {
    if (!authed) {
      navigate({ to: "/login", replace: true });
    }
  }, [authed, navigate]);

  // While unauthed, render a soft loading state instead of the protected page
  if (!authed) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-rose-100 via-amber-50 to-pink-100">
        <div className="flex flex-col items-center gap-3">
          <div className="w-12 h-12 rounded-full border-2 border-primary border-t-transparent animate-spin" />
          <p className="text-sm text-muted-foreground font-script text-lg">
            taking you to login...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen">
      <FloatingHearts />
      <div className="relative z-10">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
}
