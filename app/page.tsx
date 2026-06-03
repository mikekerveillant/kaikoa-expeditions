"use client";

import React, { useState } from "react";
import {
  Anchor,
  Calendar,
  Compass,
  Fish,
  MapPin,
  MessageCircle,
  Sailboat,
  Sparkles,
  Waves,
  Wind,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const whatsapp = "https://wa.me/639177270072";

const experiences = [
  { title: "Kitesurfing", image: "/kitesurf.jpg" },
  { title: "Freediving", image: "/freedive.jpg" },
  { title: "Spearfishing", image: "/spearfishing.jpg" },
  { title: "Lagoons", image: "/lagoon.jpg" },
  { title: "Sunrise Sailing", image: "/sunrise.jpg" },
  { title: "Sunset Anchorages", image: "/sunset.jpg" },
];

const route = [
  {
    place: "Raiatea",
    title: "The journey begins",
    text: "Step aboard Kaikoa and ease into island rhythm from the sailing heart of French Polynesia.",
  },
  {
    place: "Huahine",
    title: "Wild anchorages and island life",
    text: "Quiet lagoons, local charm, snorkeling, fishing, and slow evenings away from the crowds.",
  },
  {
    place: "Bora Bora",
    title: "Turquoise lagoons and iconic peaks",
    text: "Sail into one of the most legendary lagoons in the world, with space to explore it your way.",
  },
  {
    place: "Beyond",
    title: "Wind, weather and possibility",
    text: "Custom anchorages, kite spots, manta experiences, pearl farms, and detours shaped by the ocean.",
  },
];

export default function KaikoaExpeditions() {
  const [form, setForm] = useState({
  name: "",
  dates: "",
  guests: "",
  expedition: "",
});
  const [selectedMonth, setSelectedMonth] = useState("");
const selectMonth = (month: string) => {
  setSelectedMonth(month);
  setForm({
    ...form,
    dates: `${month} 2026`,
  });

  document
    .getElementById("inquire")
    ?.scrollIntoView({ behavior: "smooth" });
};
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const message = `Hi Kaikoa Expeditions, I'd like to inquire about French Polynesia 2026.

Name: ${form.name}
Preferred dates: ${form.dates}
Guests: ${form.guests}

Ideal expedition:
${form.expedition}`;

    window.open(`${whatsapp}?text=${encodeURIComponent(message)}`, "_blank");
  }

  return (
    <main className="min-h-screen bg-[#eee6d7] text-[#12385a]">
      <header className="fixed top-0 z-50 w-full border-b border-[#12385a]/10 bg-[#eee6d7]/85 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <a href="#top" className="flex items-center gap-3">
            <img src="/kaikoa-logo.png" alt="Kaikoa" className="h-10 w-auto" />
          </a>

          <nav className="hidden items-center gap-7 text-sm font-semibold tracking-wide md:flex">
            <a href="#expedition">Expedition</a>
            <a href="#route">Route</a>
            <a href="#boat">Boat</a>
            <a href="#experiences">Experiences</a>
            <a href="#inquire">Inquire</a>
          </nav>

          <a href="#inquire">
            <Button className="rounded-full bg-[#12385a] px-5 text-white hover:bg-[#0d2b46]">
              Reserve
            </Button>
          </a>
        </div>
      </header>

      <section
        id="top"
        className="relative grid min-h-screen items-center overflow-hidden px-5 pt-28"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(18,56,90,0.16),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(18,56,90,0.10),transparent_40%)]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
          <div>
           
            <h1 className="text-5xl font-black tracking-[0.08em] md:text-7xl">
  KAIKOA
  <br />
  EXPEDITIONS
</h1>

<p className="mt-4 text-xl tracking-[0.25em] md:text-2xl">
  FRENCH POLYNESIA 2026
</p>

<p className="mt-3 text-lg uppercase tracking-[0.35em] text-[#12385a]/50">
  Raiatea · Huahine · Bora Bora
</p>

            <p className="mt-8 max-w-xl text-xl leading-9 text-[#12385a]/75">
  Small-group sailing expeditions through French Polynesia.
  <br />
  Sail. Kitesurf. Freedive. Explore.
</p>
            <p className="mt-8 text-sm uppercase tracking-[0.35em] text-[#12385a]/70">
  Opening Season · July — September 2026
</p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a href="#inquire">
                <Button
                  size="lg"
                  className="rounded-full bg-[#12385a] px-8 text-white hover:bg-[#0d2b46]"
                >
                  Start the Conversation
                </Button>
              </a>

              <a href="#expedition">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full border-[#12385a] px-8 text-[#12385a] hover:bg-[#12385a] hover:text-white"
                >
                  View Expedition
                </Button>
              </a>
            </div>
          </div>
<div className="mx-auto max-w-lg rounded-[2rem] bg-[#f7f1e6] p-4 shadow-2xl shadow-[#12385a]/10">
            <img
              src="/mermaid-poster.jpg"
              alt="Kaikoa Polynesia 2026 artwork"
              className="rounded-[1.5rem] object-cover"
            />
          </div>
        </div>
      </section>

      <section id="expedition" className="py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-20 px-5 md:grid-cols-[0.9fr_1.1fr]">
          <div>
        <p className="text-6xl font-black leading-none md:text-7xl">
  The Expedition
</p>

<h2 className="mt-4 text-xl uppercase tracking-[0.25em] text-[#12385a]/50">
  This is not mass tourism.
</h2>

<p className="mt-8 text-lg leading-9 text-[#12385a]/75">
  A different way to experience Polynesia.
</p>
            <p className="mt-6 text-lg leading-9 text-[#12385a]/75">
  Built around exploration, freedom, ocean energy and island life —
  at your own rhythm and tailored to your style.
</p>

<p className="mt-6 text-lg leading-9 text-[#12385a]/75">
  For some it's all about kitesurfing, foiling and chasing wind.
  For others it's slowing down, snorkeling crystal lagoons,
  beach grills at sunset, fishing while cruising between islands,
  or simply disconnecting and enjoying the beauty of Polynesia.
</p>

<p className="mt-6 text-lg leading-9 text-[#12385a]/75">
  Anything from pearl farm visits to manta ray encounters and
  diving with certified local centers can be arranged.
</p>
<div className="mt-8 flex flex-wrap gap-3">
  {[
    "Kitesurf & Foil",
    "Dive & Snorkel",
    "Island Exploration",
    "Fishing",
    "Manta Rays",
    "Pearl Farms",
  ].map((item) => (
    <div
      key={item}
      className="rounded-full border border-[#12385a]/15 bg-white/50 px-4 py-2 text-sm font-semibold"
    >
      {item}
    </div>
  ))}
</div>
          </div>

         <img
  src="/whale.jpg"
  alt="French Polynesia lagoon"
  className="aspect-[4/5] w-full rounded-[2rem] object-cover shadow-2xl shadow-[#12385a]/20"
/>
        </div>
      </section>
<section className="relative overflow-hidden bg-[#f7f1e6] py-28">
  <div className="absolute inset-0 opacity-10">
    <img
      src="/surf.jpg"
      alt=""
      className="h-full w-full object-cover"
    />
  </div>

  <div className="relative mx-auto max-w-5xl px-5 text-center">
    <p className="text-sm font-black uppercase tracking-[0.35em] text-[#12385a]/50">
      Eduardo’s Invitation
    </p>

    <blockquote className="mt-8 text-4xl font-black leading-tight text-[#12385a] md:text-6xl">
      “The ocean has always been home. Kaikoa Expeditions is an invitation to
      experience Polynesia the way I love it — under sail, in the water, and far
      from the crowds.”
    </blockquote>

    <p className="mt-8 text-lg font-semibold tracking-[0.25em] text-[#12385a]/60">
      EDUARDO · KAIKOA
    </p>
  </div>
</section>
<div className="mx-auto max-w-7xl px-5">
  <div className="h-px bg-[#12385a]/10" />
</div>
      <section
  id="route"
  className="relative overflow-hidden py-32 text-white"
>
  <div className="absolute inset-0">
    <img
      src="/lagoon.jpg"
      alt="French Polynesia lagoon"
      className="h-full w-full object-cover"
    />
    <div className="absolute inset-0 bg-[#12385a]/75" />
  </div>

  <div className="relative mx-auto max-w-7xl px-5">
    <p className="text-sm font-black uppercase tracking-[0.3em] text-white/60">
      Route
    </p>

    <h2 className="mt-4 text-6xl font-black leading-none md:text-7xl">
      The Journey
    </h2>

    <p className="mt-5 max-w-2xl text-lg text-white/70">
      No fixed schedule. No rush. Just islands, wind, and possibility.
    </p>

    <div className="mt-14 grid gap-5 md:grid-cols-4">
      {route.map((stop, index) => (
        <div
          key={stop.place}
          className="rounded-[2rem] border border-white/15 bg-white/10 p-6 backdrop-blur"
        >
          <p className="text-sm uppercase tracking-[0.25em] text-white/45">
            Stop {index + 1}
          </p>

          <h3 className="mt-4 text-3xl font-black">{stop.place}</h3>

          <p className="mt-4 text-lg font-semibold text-white/90">
            {stop.title}
          </p>

          <p className="mt-4 text-sm leading-6 text-white/65">
            {stop.text}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

      <section id="boat" className="py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:grid-cols-2">
          <img
            src="/boat.jpg"
            alt="Outremer 45 catamaran"
            className="aspect-[4/3] rounded-[2rem] object-cover shadow-xl"
          />

          <div>
            <p className="text-sm font-black uppercase tracking-[0.3em]">
              Aboard Kaikoa
            </p>
            <h2 className="mt-4 text-5xl font-black">
              Outremer 45 performance catamaran.
            </h2>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "2 guest cabins",
                "Small-group format",
                "Custom itineraries",
                "Fast, intimate liveaboard",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl bg-white/50 p-5 font-bold"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="experiences" className="bg-[#f7f1e6] py-24">
        <div className="mx-auto max-w-7xl px-5">
          <p className="text-sm font-black uppercase tracking-[0.3em]">
            Experiences
          </p>
          <h2 className="mt-4 text-5xl font-black">
            Sail · Kitesurf · Freedive · Chill · Explore
          </h2>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {experiences.map((item) => (
              <div
                key={item.title}
                className="group relative aspect-[4/5] overflow-hidden rounded-[2rem]"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <p className="absolute bottom-6 left-6 text-2xl font-black text-white">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
  <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:grid-cols-2">
    <div>
      <p className="text-sm font-black uppercase tracking-[0.3em] text-[#12385a]/55">
        Your Host
      </p>

      <h2 className="mt-4 text-6xl font-black leading-none md:text-7xl">
        Meet
        <br />
        Eduardo
      </h2>

      <p className="mt-8 text-xl leading-9 text-[#12385a]/75">
        Sailor, waterman, photographer and ocean explorer. Eduardo’s life has
        always moved around the sea — sailing, diving, surfing, spearfishing,
        travel and photography.
      </p>

      <p className="mt-6 text-lg leading-8 text-[#12385a]/70">
        Kaikoa Expeditions brings that world together into a more personal way
        to experience French Polynesia: small groups, real ocean energy, and
        days shaped by wind, weather and curiosity.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        {["Sailing", "Photography", "Freediving", "Kitesurfing", "Island Life"].map(
          (item) => (
            <span
              key={item}
              className="rounded-full border border-[#12385a]/15 bg-white/50 px-4 py-2 text-sm font-semibold"
            >
              {item}
            </span>
          )
        )}
      </div>
    </div>

    <div className="rounded-[2rem] bg-[#f7f1e6] p-4 shadow-2xl shadow-[#12385a]/10">
      <img
        src="/eduardo.jpg"
        alt="Eduardo from Kaikoa"
        className="aspect-[4/5] w-full rounded-[1.5rem] object-cover"
      />
    </div>
  </div>
</section>

      <section id="season" className="bg-[#12385a] py-28 text-white">
  <div className="mx-auto max-w-7xl px-5">
    <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr]">
      <div>
        <p className="text-sm font-black uppercase tracking-[0.3em] text-white/60">
          Opening Season
        </p>

        <h2 className="mt-4 text-6xl font-black leading-none md:text-7xl">
          July —
          <br />
          September
          <br />
          2026
        </h2>

        <p className="mt-6 max-w-md text-lg leading-8 text-white/65">
          A limited number of small-group expeditions through the Society
          Islands. Each journey is shaped by wind, weather, and the group
          aboard.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {[
          {
            month: "July",
            status: "Opening Trips",
            text: "Ideal for early-season sailing, lagoon exploration, and custom liveaboard itineraries.",
          },
          {
            month: "August",
            status: "Peak Season",
            text: "Best window for kitesurfing, foiling, trade winds, and high-energy ocean days.",
          },
          {
            month: "September",
            status: "Final Trips",
            text: "A quieter month for slower routes, snorkeling, island time, and intimate expeditions.",
          },
        ].map((item) => (
          <div
  key={item.month}
  className={`rounded-[2rem] border p-6 ${
    selectedMonth === item.month
      ? "border-white bg-white/15"
      : "border-white/10 bg-white/5"
  }`}
>
            <p className="text-sm uppercase tracking-[0.25em] text-white/45">
              2026
            </p>

            <h3 className="mt-4 text-4xl font-black">{item.month}</h3>

            <p className="mt-4 font-semibold text-white/90">
              {item.status}
            </p>

            <p className="mt-4 text-sm leading-6 text-white/60">
              {item.text}
            </p>

           <Button
  onClick={() => selectMonth(item.month)}
  className="mt-6 rounded-full bg-white px-5 text-[#12385a] hover:bg-white/90"
>
  Reserve {item.month}
</Button>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

      <section id="inquire" className="py-24">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[2rem] bg-white shadow-2xl shadow-[#12385a]/10 md:grid-cols-2">
          <div className="bg-[#12385a] p-8 text-white md:p-12">
            <p className="text-sm font-black uppercase tracking-[0.3em] text-white/60">
              Inquiries
            </p>
            <h2 className="mt-4 text-5xl font-black">Start the conversation.</h2>
            <p className="mt-6 text-white/70">
              Tell us your dates, your style, and what kind of ocean experience
              you’re looking for.
            </p>
          </div>

          <form className="space-y-4 p-8 md:p-12" onSubmit={handleSubmit}>
            {form.dates && (
  <div className="rounded-2xl bg-[#12385a]/5 px-4 py-3 text-sm font-semibold text-[#12385a]">
    Selected Expedition: {form.dates}
  </div>
)}
            <input
              required
              placeholder="Name"
              className="w-full rounded-2xl border px-4 py-3"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <input
  required
  placeholder="How many guests?"
  className="w-full rounded-2xl border px-4 py-3"
  value={form.guests}
  onChange={(e) => setForm({ ...form, guests: e.target.value })}
/>
            <input
              required
              placeholder="Preferred dates"
              className="w-full rounded-2xl border px-4 py-3"
              value={form.dates}
              onChange={(e) => setForm({ ...form, dates: e.target.value })}
            />
            <textarea
  required
  placeholder="Tell us about your ideal expedition..."
  className="min-h-32 w-full rounded-2xl border px-4 py-3"
  value={form.expedition}
  onChange={(e) => setForm({ ...form, expedition: e.target.value })}
/>

            <Button
              type="submit"
              className="w-full rounded-full bg-[#12385a] py-6 text-white hover:bg-[#0d2b46]"
            >
              Send Inquiry on WhatsApp
            </Button>
          </form>
        </div>
      </section>

      <footer className="border-t border-[#12385a]/10 py-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 px-5 text-sm text-[#12385a]/60 md:flex-row">
          <p>© {new Date().getFullYear()} Kaikoa Expeditions.</p>
          <p>Raiatea · Huahine · Bora Bora · French Polynesia</p>
        </div>
      </footer>

      <a
        href={whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#12385a] text-white shadow-xl transition hover:scale-105"
      >
        <MessageCircle className="h-7 w-7" />
      </a>
    </main>
  );
}