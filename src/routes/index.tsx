import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgeCheck,
  Check,
  Footprints,
  MessageCircle,
  Phone,
  Search,
  Truck,
  Wallet,
} from "lucide-react";

import logo from "@/assets/logo.png.asset.json";
import heroSweaters from "@/assets/hero-sweaters.jpg";
import pSweaters from "@/assets/p-sweaters.jpg";
import pShirts from "@/assets/p-shirts.jpg";
import pSkirts from "@/assets/p-skirts.jpg";
import pTrousers from "@/assets/p-trousers.jpg";
import pTracksuits from "@/assets/p-tracksuits.jpg";
import pPeKits from "@/assets/p-pekits.jpg";
import pShoesUniform from "@/assets/p-shoes-uniform.jpg";
import pShoesGames from "@/assets/p-shoes-games.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Waridi Uniform Store — School uniforms & shoes in Kenya" },
      {
        name: "description",
        content:
          "School-specific uniforms, uniform shoes and games shoes for 400+ Kenyan schools. Order on WhatsApp, pay with M-Pesa, delivered nationwide.",
      },
      {
        property: "og:title",
        content: "Waridi Uniform Store — School uniforms & shoes in Kenya",
      },
      {
        property: "og:description",
        content:
          "Sweaters, shirts, skirts, tracksuits, PE kits, uniform shoes and games shoes. WhatsApp order, M-Pesa payment, nationwide delivery.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const WHATSAPP = "https://wa.me/254700123456";

const levels = [
  {
    range: "Playgroup – PP2",
    title: "Kindergarten",
    copy: "Bright, sturdy, easy-wash basics — plus soft-sole school shoes.",
  },
  {
    range: "Grade 1 – 8",
    title: "Primary",
    copy: "Crisp shirts, pleats, knits, black shoes and games shoes.",
  },
  {
    range: "Form 1 – 4",
    title: "Secondary",
    copy: "Sweaters, blazers, full kits and leather shoes — exact to spec.",
  },
];

const uniformProducts = [
  { name: "School Sweaters", from: "From KSh 850", price: "KSh 1,450", img: pSweaters },
  { name: "Shirts & Polos", from: "From KSh 450", price: "KSh 950", img: pShirts },
  { name: "Skirts & Dresses", from: "From KSh 950", price: "KSh 1,200", img: pSkirts },
  { name: "Tailored Trousers", from: "From KSh 1,200", price: "KSh 1,850", img: pTrousers },
  { name: "Tracksuits", from: "From KSh 2,450", price: "KSh 2,450", img: pTracksuits },
  { name: "PE Kits", from: "From KSh 1,600", price: "KSh 1,600", img: pPeKits },
];

const shoeProducts = [
  {
    name: "Uniform Shoes",
    tag: "Everyday wear",
    copy: "Polished black leather lace-ups and buckle styles. Sizes 8 – 12 (UK), reinforced stitching and non-slip soles.",
    price: "KSh 1,950",
    from: "From KSh 1,350",
    img: pShoesUniform,
  },
  {
    name: "Games Shoes",
    tag: "Sports & PE",
    copy: "White canvas and cushioned trainers for games day. Machine-washable, breathable, school-approved colours.",
    price: "KSh 1,650",
    from: "From KSh 1,100",
    img: pShoesGames,
  },
];

const schools = [
  "Kilimani Grammar",
  "Thika Girls",
  "Nairobi County Primary",
  "Mombasa High",
  "Kisumu Academy",
  "Machakos College",
  "Eldoret Grammar",
  "Nakuru Girls",
];

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <a
        href={WHATSAPP}
        className="btn-base btn-primary fixed bottom-5 right-5 z-50 shadow-lg md:hidden"
      >
        <MessageCircle className="size-4" /> WhatsApp
      </a>

      {/* Announcement */}
      <div className="surface-ink text-xs sm:text-sm">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-5 py-2.5">
          <p>Free delivery on Nairobi orders over KSh 3,000 — term starts soon</p>
          <p className="flex items-center gap-3">
            <span className="opacity-80">M-Pesa accepted</span>
            <a href={WHATSAPP} className="font-semibold text-primary">
              WhatsApp +254 700 123 456
            </a>
          </p>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-3.5">
          <a href="#top" className="flex items-center gap-3">
            <img src={logo.url} alt="Waridi Uniform Store logo" className="size-9 rounded-full" />
            <span className="leading-tight">
              <span className="block font-display text-lg font-semibold">Waridi</span>
              <span className="block text-[0.62rem] font-semibold tracking-[0.18em] text-muted-foreground">
                UNIFORM STORE
              </span>
            </span>
          </a>
          <nav className="hidden items-center gap-7 text-sm font-medium md:flex">
            <a href="#levels" className="hover:text-primary">
              Shop by level
            </a>
            <a href="#collection" className="hover:text-primary">
              Collection
            </a>
            <a href="#shoes" className="hover:text-primary">
              Shoes
            </a>
            <a href="#school" className="hover:text-primary">
              Find your school
            </a>
          </nav>
          <a href={WHATSAPP} className="btn-base btn-ink hidden sm:inline-flex">
            <MessageCircle className="size-4" /> Order on WhatsApp
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="surface-warm">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 lg:grid-cols-[1.05fr_1fr] lg:py-24">
          <div>
            <p className="eyebrow">Back to school · January term</p>
            <h1 className="mt-4 text-4xl leading-[1.05] sm:text-5xl lg:text-[3.4rem]">
              Uniforms and school shoes, ready before the first bell.
            </h1>
            <p className="mt-6 max-w-lg text-base text-muted-foreground sm:text-lg">
              Embroidered sweaters, skirts, PE kits, uniform shoes and games shoes for 400+ schools
              across Kenya. Order on WhatsApp, pay with M-Pesa, and we deliver to your door.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#collection" className="btn-base btn-primary">
                Shop the collection <ArrowRight className="size-4" />
              </a>
              <a href="#shoes" className="btn-base btn-outline">
                <Footprints className="size-4" /> Shop shoes
              </a>
            </div>
            <ul className="mt-9 flex flex-wrap gap-x-7 gap-y-3 text-sm text-muted-foreground">
              {["Delivery in 24–48h, Nairobi", "M-Pesa & card", "14-day size exchange"].map((f) => (
                <li key={f} className="flex items-center gap-2">
                  <Check className="size-4 text-primary" /> {f}
                </li>
              ))}
            </ul>
          </div>

          <div className="card-soft overflow-hidden p-3">
            <img
              src={heroSweaters}
              alt="Folded school sweaters in navy with orange trim"
              width={1200}
              height={1400}
              className="aspect-4/5 w-full rounded-xl object-cover"
            />
            <div className="flex items-end justify-between gap-4 px-2 pb-1 pt-4">
              <div>
                <p className="font-semibold">Crest-embroidered V-neck sweater</p>
                <p className="text-sm text-muted-foreground">Navy · All schools</p>
              </div>
              <p className="font-display text-lg font-semibold text-primary">KSh 1,450</p>
            </div>
          </div>
        </div>
      </section>

      {/* School marquee */}
      <div className="overflow-hidden border-y border-border bg-card py-3.5">
        <div className="marquee-track">
          {[...schools, ...schools].map((s, i) => (
            <span
              key={`${s}-${i}`}
              className="flex items-center gap-8 whitespace-nowrap px-8 text-sm text-muted-foreground"
            >
              {s} <span className="text-primary">·</span>
            </span>
          ))}
        </div>
      </div>

      {/* Levels */}
      <section id="levels" className="mx-auto max-w-6xl px-5 py-16 lg:py-20">
        <p className="eyebrow">Start here</p>
        <h2 className="mt-3 text-3xl sm:text-4xl">Shop by level</h2>
        <div className="mt-9 grid gap-5 md:grid-cols-3">
          {levels.map((l) => (
            <article key={l.title} className="card-soft p-6">
              <p className="text-sm text-muted-foreground">{l.range}</p>
              <h3 className="mt-2 text-xl">{l.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{l.copy}</p>
              <a
                href="#collection"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary"
              >
                Browse <ArrowRight className="size-4" />
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* Collection */}
      <section id="collection" className="surface-warm border-y border-border">
        <div className="mx-auto max-w-6xl px-5 py-16 lg:py-20">
          <p className="eyebrow">The rails</p>
          <h2 className="mt-3 text-3xl sm:text-4xl">Shop the collection</h2>
          <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {uniformProducts.map((p) => (
              <article key={p.name} className="card-soft overflow-hidden">
                <img
                  src={p.img}
                  alt={p.name}
                  loading="lazy"
                  width={900}
                  height={900}
                  className="aspect-square w-full object-cover"
                />
                <div className="flex items-end justify-between gap-3 p-4">
                  <div>
                    <h3 className="font-sans text-base font-semibold">{p.name}</h3>
                    <p className="text-sm text-muted-foreground">{p.from}</p>
                  </div>
                  <p className="font-display font-semibold text-primary">{p.price}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Shoes */}
      <section id="shoes" className="mx-auto max-w-6xl px-5 py-16 lg:py-20">
        <p className="eyebrow">New at Waridi</p>
        <h2 className="mt-3 max-w-2xl text-3xl sm:text-4xl">
          School shoes — for uniform days and games days.
        </h2>
        <p className="mt-4 max-w-xl text-muted-foreground">
          Fitted in store or ordered by size on WhatsApp. Every pair is exchangeable within 14 days
          if the fit is off.
        </p>
        <div className="mt-9 grid gap-5 md:grid-cols-2">
          {shoeProducts.map((s) => (
            <article key={s.name} className="card-soft overflow-hidden">
              <img
                src={s.img}
                alt={s.name}
                loading="lazy"
                width={900}
                height={900}
                className="aspect-4/3 w-full object-cover"
              />
              <div className="p-6">
                <p className="eyebrow">{s.tag}</p>
                <h3 className="mt-2 text-2xl">{s.name}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{s.copy}</p>
                <div className="mt-5 flex items-center justify-between gap-4 border-t border-border pt-4">
                  <p className="text-sm text-muted-foreground">{s.from}</p>
                  <p className="font-display text-lg font-semibold text-primary">{s.price}</p>
                </div>
                <a href={WHATSAPP} className="btn-base btn-primary mt-5 w-full">
                  <MessageCircle className="size-4" /> Order this pair
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Why */}
      <section className="surface-warm border-y border-border">
        <div className="mx-auto max-w-6xl px-5 py-16 lg:py-20">
          <p className="eyebrow">Why parents choose Waridi</p>
          <h2 className="mt-3 max-w-xl text-3xl sm:text-4xl">
            Built for the first week of term, not after it.
          </h2>
          <div className="mt-9 grid gap-5 md:grid-cols-3">
            {[
              {
                icon: Truck,
                tag: "Delivery",
                title: "Nationwide, on time",
                copy: "Same-day in Nairobi, 1–2 days to every other county. Track every parcel.",
              },
              {
                icon: Wallet,
                tag: "Payment",
                title: "M-Pesa, simple",
                copy: "Pay on order or on delivery. Card accepted too. No queuing, no stress.",
              },
              {
                icon: BadgeCheck,
                tag: "Guarantee",
                title: "Exact to spec",
                copy: "Free 14-day size exchange on clothes and shoes, plus re-embroidery if a crest is off.",
              },
            ].map((f) => (
              <article key={f.title} className="card-soft p-6">
                <span className="flex size-10 items-center justify-center rounded-full bg-secondary text-primary">
                  <f.icon className="size-5" />
                </span>
                <p className="eyebrow mt-5">{f.tag}</p>
                <h3 className="mt-2 text-xl">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Find your school */}
      <section id="school" className="surface-ink">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 lg:grid-cols-2 lg:py-20">
          <div>
            <p className="eyebrow">Find your school</p>
            <h2 className="mt-3 text-3xl sm:text-4xl">Type your school — we have the exact kit.</h2>
            <p className="mt-5 max-w-md opacity-80">
              We carry school-specific colours, crests, embroidery and shoe requirements for 400+
              Kenyan schools. Search one and we'll set up your child's full kit.
            </p>
          </div>
          <form
            className="rounded-2xl border border-white/15 bg-white/5 p-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <label htmlFor="school-search" className="text-sm font-medium">
              Search your school
            </label>
            <div className="mt-3 flex flex-col gap-3 sm:flex-row">
              <input
                id="school-search"
                placeholder="e.g. Kilimani Grammar"
                className="w-full rounded-full border border-white/20 bg-white/10 px-4 py-3 text-sm placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button type="submit" className="btn-base btn-primary shrink-0">
                <Search className="size-4" /> Search
              </button>
            </div>
            <div className="mt-4 flex flex-wrap items-center gap-2 text-sm">
              <span className="opacity-70">Popular:</span>
              {schools.slice(0, 3).map((s) => (
                <span key={s} className="rounded-full bg-white/10 px-3 py-1">
                  {s}
                </span>
              ))}
            </div>
          </form>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="flex flex-col items-start justify-between gap-6 rounded-3xl bg-primary p-8 text-primary-foreground sm:p-10 lg:flex-row lg:items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl">Order in minutes, no queuing.</h2>
            <p className="mt-2 max-w-xl opacity-90">
              Send a WhatsApp message with your school, sizes and shoe size — we confirm stock and
              delivery time.
            </p>
          </div>
          <a href={WHATSAPP} className="btn-base bg-background text-foreground hover:bg-card">
            <MessageCircle className="size-4" /> Chat on WhatsApp
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="surface-ink">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <img src={logo.url} alt="Waridi Uniform Store logo" className="size-9 rounded-full" />
              <span className="font-display text-lg font-semibold">Waridi</span>
            </div>
            <p className="mt-4 text-sm opacity-75">
              A Kenyan school uniform and shoe centre. Waridi means rose — crisp, warm, and ready
              for term.
            </p>
          </div>
          <div>
            <p className="eyebrow">Visit us</p>
            <p className="mt-3 text-sm opacity-80">
              Waridi Uniform Store
              <br />
              Shop 4, Kariokor Road
              <br />
              Nairobi, Kenya
            </p>
          </div>
          <div>
            <p className="eyebrow">Contact</p>
            <p className="mt-3 flex items-center gap-2 text-sm opacity-80">
              <Phone className="size-4" /> +254 700 123 456
            </p>
            <p className="mt-2 text-sm opacity-80">hello@waridi.co.ke</p>
            <a href={WHATSAPP} className="mt-2 block text-sm text-primary">
              WhatsApp ordering
            </a>
          </div>
          <div>
            <p className="eyebrow">Ordering</p>
            <p className="mt-3 text-sm opacity-80">
              M-Pesa · Card
              <br />
              Delivery across Kenya
              <br />
              14-day size exchange
            </p>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-6xl flex-wrap justify-between gap-2 px-5 py-5 text-xs opacity-70">
            <p>© 2026 Waridi Uniform Store. All rights reserved.</p>
            <p>Asante for shopping local.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
