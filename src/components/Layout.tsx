import { Header } from "./Header";
import { Footer } from "./Footer";
import { FloatingHearts } from "./FloatingHearts";

export function Layout({ children }: { children: React.ReactNode }) {
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
