import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import {
  UtensilsCrossed,
  Cake,
  IceCreamCone,
  Coffee,
  Pizza,
  Soup,
  Heart,
  Sparkles,
  Star,
  Candy,
} from "lucide-react";

export const Route = createFileRoute("/food")({
  head: () => ({
    meta: [
      { title: "Food Diaries — Mahima & Kapil" },
      {
        name: "description",
        content:
          "Khane ki kahani — meethi yaadein, chatpati plates aur Kapil ki favourite mithaiyan.",
      },
    ],
  }),
  component: Food,
});

type FoodItem = {
  name: string;
  note?: string;
  favourite?: boolean;
};

type Category = {
  title: string;
  subtitle: string;
  color: string;
  icon: React.ComponentType<{ className?: string }>;
  items: FoodItem[];
};

const kapilSweets: FoodItem[] = [
  { name: "Gulab Jamun", note: "garam garam, chashni mein doobe hue", favourite: true },
  { name: "Rasgulla", note: "Bengali soft & spongy", favourite: true },
  { name: "Kaju Katli", note: "shaadi-special vibes", favourite: true },
  { name: "Rasmalai", note: "thandi, kesar wali", favourite: true },
  { name: "Gajar ka Halwa", note: "sardiyon ki jaan", favourite: true },
  { name: "Ladoo", note: "ek nahi, do chahiye" },
   { name: "Jalebi with Rabri", note: "subah-subah breakfast goals" },
  { name: "Mysore Pak", note: "ghee se bhara hua" },
  { name: "Soan Papdi", note: "festive box ka hero" },
  { name: "Malai Peda", note: "Mathura special" },
  { name: "Kheer", note: "....." },
];

const chocolates: FoodItem[] = [
  { name: "Amul Chocolate", note: "desi swaad, bachpan wali yaad", favourite: true },
  { name: "Cadbury Dairy Milk Bubbly", note: "har bubble mein ek smile", favourite: true },
  { name: "Melody", note: "Melody itni chocolatey kyun hai?", favourite: true },
  { name: "KitKat", note: "break time = KitKat time", favourite: true },
  { name: "Dairy Milk Silk", note: "smooth & melty — share karna mushkil" },
  
];

const categories: Category[] = [
  {
    title: "Street Food",
    subtitle: "thode chatpate, thode tangy — humari shaam ki jaan",
    color: "from-amber-400 to-orange-500",
    icon: Pizza,
    items: [
      { name: "Pani Puri" },
      { name: "Dahi Bhalla" },
      { name: "Aloo Tikki Chaat" },
      { name: "Pav Bhaji" },
      { name: "Vada Pav" },
      { name: "Samosa" },
      { name: "Kachori" },
      { name: "Bhel Puri" },
      { name: "Dabeli" },
    ],
  },
  {
    title: "Main Course",
    subtitle: "pet bhar ke khao, dil se khao",
    color: "from-rose-400 to-red-500",
    icon: Soup,
    items: [
      { name: "Butter Khichadi" },
      { name: "Daal Caawal" },

      { name: "Dal Makhani" },
      { name: "All type paneer" },
      { name: "Chole Bhature" },
      { name: "Rajma Chawal" },
      { name: "Butter Naan + Sabzi" },
      { name: "Biryani (Veg/Hyderabadi)" },
      { name: "Sarso Da Saag + Makki Roti" },
      { name: "Dhaba style Tadka Dal" },
    ],
  },
  {
    title: "Quick Bites & Snacks",
    subtitle: "hunger pang? in 5 minutes please.",
    color: "from-violet-400 to-fuchsia-500",
    icon: UtensilsCrossed,
    items: [
      { name: "Maggi (cheesy)" },
      { name: "Burger" },
      { name: "Pasta" },
      { name: "Garlic Bread" },
      { name: "Veg Sandwich" },
      { name: "Momos" },
      { name: "Pizza" },
      { name: "French Fries" },
      { name: "Bread Pakoda" },
    ],
  },
  {
    title: "Drinks & Coolers",
    subtitle: "ek sip aur saari thakaan gayab",
    color: "from-emerald-400 to-teal-500",
    icon: Coffee,
    items: [
      { name: "Masala Chai" },
      { name: "Cold Coffee" },
      { name: "Mango Shake" },
      { name: "Lassi (sweet)" },
      { name: "Nimbu Pani" },
      { name: "Rooh Afza" },
      { name: "Hot Chocolate" },
     ],
  },
  {
    title: "Ice Creams & Desserts",
    subtitle: "har mood ka ek scoop",
    color: "from-pink-400 to-rose-500",
    icon: IceCreamCone,
    items: [
      { name: "Rose Ice Cream" },
      { name: "Kulfi Falooda" },
      { name: "Chocolate Brownie + Ice Cream" },
      { name: "Butterscotch Ice Cream" },
      { name: "Gulab Jamun + Vanilla" },
      { name: "Rabri Faluda" },
      { name: "Choco Lava Cake" },
    ],
  },
];

function Food() {
  return (
    <Layout>
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 pt-16 pb-10 text-center">
        <p className="font-script text-2xl text-primary">khane ki kahani</p>
        <h1 className="text-5xl md:text-6xl font-bold mt-2">Food Diaries</h1>
        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground text-lg">
          Har plate ke peeche ek yaad hai — kabhi haste hue khaya, kabhi rooth ke
          khilaya. Yeh raha humara chhota sa menu of memories.
        </p>
      </section>

      {/* Kapil's Favourite Sweets — hero card */}
      <section className="max-w-5xl mx-auto px-4">
        <div className="relative overflow-hidden rounded-[2.5rem] gradient-sunset text-white p-8 md:p-12 shadow-glow">
          <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-white/10 blur-2xl" />
          <div className="absolute -bottom-12 -left-12 w-56 h-56 rounded-full bg-white/10 blur-2xl" />

          <div className="relative">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <Cake className="w-7 h-7" />
              </div>
              <div>
                <p className="font-script text-2xl">Kapil's man-pasand</p>
                <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight">
                  Mithaiyan — Sweets Edition
                </h2>
              </div>
            </div>
 

            <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {kapilSweets.map((s) => (
                <div
                  key={s.name}
                  className="group relative p-5 rounded-2xl bg-white/15 backdrop-blur-sm border border-white/20 hover:bg-white/25 transition-all hover:-translate-y-1"
                >
                  {s.favourite && (
                    <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/30 text-[10px] uppercase tracking-wider font-semibold">
                      <Star className="w-3 h-3 fill-white" />
                      fav
                    </div>
                  )}
                  <div className="flex items-center gap-2">
                    <Heart
                      className={`w-4 h-4 ${
                        s.favourite ? "fill-white" : "opacity-70"
                      }`}
                    />
                    <h3 className="font-display text-xl font-bold">{s.name}</h3>
                  </div>
                  {s.note && (
                    <p className="mt-2 text-sm text-white/85 font-script text-lg leading-snug">
                      {s.note}
                    </p>
                  )}
                </div>
              ))}
            </div>

            
          </div>
        </div>
      </section>

      {/* Kapil's Favourite Chocolates */}
      <section className="max-w-5xl mx-auto px-4 mt-12">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-amber-900 via-yellow-800 to-amber-700 text-white p-8 md:p-12 shadow-glow">
          <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-yellow-300/15 blur-2xl" />
          <div className="absolute -bottom-12 -left-12 w-56 h-56 rounded-full bg-amber-300/15 blur-2xl" />

          <div className="relative">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <Candy className="w-7 h-7" />
              </div>
              <div>
                <p className="font-script text-2xl">chocolate cravings</p>
                <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight">
                  Chocolate Corner
                </h2>
              </div>
            </div>

            <p className="mt-4 text-white/90 max-w-2xl">
              Chhoti si bite, badi si khushi. Yeh wo chocolates hain jo har mood
              ka jawab hain — exam ka stress ho, naraazgi ho, ya bina baat ki
              khushi.
            </p>

            <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {chocolates.map((c) => (
                <div
                  key={c.name}
                  className="group relative p-5 rounded-2xl bg-white/15 backdrop-blur-sm border border-white/20 hover:bg-white/25 transition-all hover:-translate-y-1"
                >
                  {c.favourite && (
                    <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/30 text-[10px] uppercase tracking-wider font-semibold">
                      <Star className="w-3 h-3 fill-white" />
                      fav
                    </div>
                  )}
                  <div className="flex items-center gap-2">
                    <Heart
                      className={`w-4 h-4 ${
                        c.favourite ? "fill-white" : "opacity-70"
                      }`}
                    />
                    <h3 className="font-display text-xl font-bold">{c.name}</h3>
                  </div>
                  {c.note && (
                    <p className="mt-2 text-sm text-white/85 font-script text-lg leading-snug">
                      {c.note}
                    </p>
                  )}
                </div>
              ))}
            </div>

          
          </div>
        </div>
      </section>

      {/* Other Categories */}
      <section className="max-w-6xl mx-auto px-4 mt-16 space-y-8">
        {categories.map((c) => (
          <div
            key={c.title}
            className="p-8 rounded-3xl bg-card border border-border shadow-soft"
          >
            <div className="flex items-center gap-3 mb-2">
              <div
                className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${c.color} flex items-center justify-center`}
              >
                <c.icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="font-display text-3xl font-bold">{c.title}</h2>
                <p className="font-script text-lg text-primary">{c.subtitle}</p>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-3">
              {c.items.map((m) => (
                <div
                  key={m.name}
                  className="p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors flex items-center gap-2"
                >
                  <UtensilsCrossed className="w-4 h-4 text-primary shrink-0" />
                  <span className="font-medium">{m.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Cute closing card */}
      <section className="max-w-4xl mx-auto px-4 mt-20 mb-20">
        <div className="p-10 md:p-14 rounded-[2rem] bg-card border border-border shadow-soft text-center">
          <Heart className="w-10 h-10 text-primary mx-auto fill-primary/30" />
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-3">
            Saath khaane mein swaad double ho jaata hai
          </h2>
          <p className="font-script text-2xl text-primary mt-3">
            ek plate, do chamach, hazaar baatein.
          </p>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Chahe dhaba ho ya ghar ki rasoi — jab Mahima aur Kapil saath baith
            ke khaate hain, simple si dal-roti bhi feast lagti hai.
          </p>
        </div>
      </section>
    </Layout>
  );
}
