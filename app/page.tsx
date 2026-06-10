"use client";

import React, { useState } from "react";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const sans = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const whatsapp = "https://wa.me/639177270072";

const experiences = [
  {
    title: "Chase Wind",
    subtitle: "Kitesurfing · Foiling · Sailing",
    image: "/kitesurf.jpg",
    text: "Days shaped by trade winds, lagoon passages and the quiet rush of moving by water.",
  },
  {
    title: "Below The Surface",
    subtitle: "Freediving · Snorkeling · Manta Rays",
    image: "/freedive.jpg",
    text: "Coral gardens, clear water and encounters that remind you how alive the ocean is.",
  },
  {
    title: "Island Life",
    subtitle: "Fishing · Pearl Farms · Local Culture",
    image: "/spearfishing.jpg",
    text: "A slower rhythm beyond the resort map, guided by people who know the water intimately.",
  },
  {
    title: "Unplug",
    subtitle: "Anchorages · Sunsets · Slow Days",
    image: "/sunset.jpg",
    text: "Space to drift, read, swim, cook, sleep and let the day be decided by the horizon.",
  },
];

const route = [
  {
    place: "Raiatea",
    title: "The sailing heart",
    text: "Step aboard in the spiritual center of Polynesian voyaging and ease into the rhythm of the islands.",
  },
  {
    place: "Huahine",
    title: "Wild anchorages",
    text: "Quiet lagoons, local charm, snorkeling, fishing and evenings away from the expected route.",
  },
  {
    place: "Bora Bora",
    title: "The iconic lagoon",
    text: "Enter one of the world’s most legendary waters, then discover the quieter edges beyond the postcard.",
  },
  {
    place: "Beyond",
    title: "Weather and possibility",
    text: "Kite spots, manta encounters, pearl farms and detours shaped by wind, ocean and curiosity.",
  },
];

const months = [
  {
    month: "July",
    status: "Opening Trips",
    text: "Early-season sailing, lagoon exploration and custom liveaboard itineraries.",
  },
  {
    month: "August",
    status: "Peak Wind",
    text: "The strongest window for kitesurfing, foiling and high-energy ocean days.",
  },
  {
    month: "September",
    status: "Final Departures",
    text: "A quieter month for slower routes, snorkeling, island time and intimate expeditions.",
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

    document.getElementById("inquire")?.scrollIntoView({ behavior: "smooth" });
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
    <main
      className={`${sans.className} min-h-screen bg-[#eee6d7] text-[#12385a] antialiased`}
    >
      <header className="fixed top-0 z-50 w-full border-b border-[#12385a]/10 bg-[#eee6d7]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <a href="#top" className="flex items-center gap-3">
            <img src="/kaikoa-logo.png" alt="Kaikoa" className="h-10 w-auto" />
          </a>

          <nav className="hidden items-center gap-8 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#12385a]/70 md:flex">
            <a className="transition hover:text-[#12385a]" href="#expedition">
              Expedition
            </a>
            <a className="transition hover:text-[#12385a]" href="#route">
              Journey
            </a>
            <a className="transition hover:text-[#12385a]" href="#experiences">
              Experiences
            </a>
            <a
              href="https://kaikoa.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-[#12385a]"
            >
              Photography
            </a>
            <a className="transition hover:text-[#12385a]" href="#inquire">
              Inquire
            </a>
          </nav>

          <a href="#inquire" className="hidden sm:block">
            <Button className="rounded-full bg-[#12385a] px-6 text-xs uppercase tracking-[0.18em] text-white hover:bg-[#0d2b46]">
              Inquire
            </Button>
          </a>
        </div>
      </header>

      <section id="top" className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
  <div className="absolute right-0 top-1/2 -translate-y-1/2 pr-12">
    <img
      src="/mermaid-poster.jpg"
      alt="Kaikoa French Polynesia expedition"
      className="h-[80vh] w-auto opacity-40"
    />
  </div>

  <div className="absolute inset-0 bg-gradient-to-r from-[#071b2c]/92 via-[#071b2c]/70 to-[#071b2c]/45" />
</div>

        <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-end px-5 pb-20 pt-32 md:pb-28">
          <p className="text-xs font-semibold uppercase tracking-[0.38em] text-white/65">
            French Polynesia · July — September 2026
          </p>

          <h1
            className={`${serif.className} mt-7 max-w-5xl text-6xl font-medium leading-[0.86] tracking-[-0.05em] text-white md:text-8xl lg:text-9xl`}
          >
            Beyond the
            <br />
            charted route.
          </h1>

          <div className="mt-10 grid max-w-4xl gap-8 border-t border-white/25 pt-8 md:grid-cols-[1.1fr_0.9fr]">
            <p className="text-xl leading-9 text-white/82 md:text-2xl md:leading-10">
              Small-group sailing expeditions through Raiatea, Huahine, Bora
              Bora and the wild edges between.
            </p>

            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-white/55">
                Sail · Kitesurf · Freedive · Explore
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a href="#inquire">
                  <Button
                    size="lg"
                    className="rounded-full bg-white px-8 text-[#12385a] hover:bg-white/90"
                  >
                    Start the Conversation
                  </Button>
                </a>
                <a href="#expedition">
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-full border-white/55 bg-transparent px-8 text-white hover:bg-white hover:text-[#12385a]"
                  >
                    View Expedition
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="expedition" className="py-32 md:py-44">
        <div className="mx-auto max-w-7xl px-5">
          <div className="grid gap-16 md:grid-cols-[0.85fr_1.15fr] md:gap-24">
            <div className="md:pt-10">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#12385a]/45">
                The Expedition
              </p>

              <h2
                className={`${serif.className} mt-6 text-5xl font-medium leading-[0.95] tracking-[-0.04em] md:text-7xl`}
              >
                Journeys for those who seek more than destinations.
              </h2>
            </div>

            <div className="max-w-2xl">
              <p className="text-2xl leading-10 text-[#12385a]/75">
                Kaikoa is a different way to experience Polynesia — built
                around exploration, freedom, ocean energy and island life.
              </p>

              <p className="mt-8 text-lg leading-9 text-[#12385a]/68">
                For some, the journey is kitesurfing, foiling and chasing
                wind. For others, it is slowing down into crystal lagoons,
                beach grills at sunset, fishing between islands or simply
                disconnecting from the noise of land.
              </p>

              <p className="mt-8 text-lg leading-9 text-[#12385a]/68">
                Pearl farm visits, manta ray encounters and diving with
                certified local centers can be arranged. The route remains
                flexible because the best days are often shaped by weather,
                tide and curiosity.
              </p>
            </div>
          </div>

          <div className="mt-24 grid gap-6 md:grid-cols-[1.25fr_0.75fr]">
            <img
              src="/whale.jpg"
              alt="French Polynesia ocean wildlife"
              className="h-[70vh] min-h-[520px] w-full object-cover"
            />
            <div className="flex flex-col justify-between gap-10 bg-[#f7f1e6] p-8 md:p-10">
              <p
                className={`${serif.className} text-4xl font-medium leading-tight tracking-[-0.03em] md:text-5xl`}
              >
                Expeditions shaped by wind, ocean and curiosity.
              </p>

              <div className="space-y-4 text-sm uppercase tracking-[0.24em] text-[#12385a]/55">
                <p>Kitesurf & Foil</p>
                <p>Dive & Snorkel</p>
                <p>Island Exploration</p>
                <p>Fishing</p>
                <p>Manta Rays</p>
                <p>Pearl Farms</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#f7f1e6] py-36 md:py-48">
        <div className="absolute inset-x-0 top-0 mx-auto h-px max-w-7xl bg-[#12385a]/10" />

        <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#12385a]/45">
              Eduardo’s Invitation
            </p>
            <p className="mt-8 text-lg leading-8 text-[#12385a]/65">
              The host’s perspective gives the expedition its character:
              personal, ocean-led and far from the packaged route.
            </p>
          </div>

          <blockquote
            className={`${serif.className} text-5xl font-medium leading-[1.03] tracking-[-0.04em] md:text-7xl`}
          >
            “The ocean has always been home. Kaikoa is an invitation to
            experience Polynesia under sail, in the water and far from the
            crowds.”
            <span className="mt-8 block text-sm font-semibold uppercase tracking-[0.3em] text-[#12385a]/45">
              Eduardo · Kaikoa
            </span>
          </blockquote>
        </div>
      </section>

      <section id="route" className="relative overflow-hidden py-36 text-white md:py-48">
        <div className="absolute inset-0">
          <img
            src="/lagoon.jpg"
            alt="French Polynesia lagoon"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[#071b2c]/72" />
        </div>

        <div className="relative mx-auto max-w-7xl px-5">
          <div className="grid gap-16 md:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/50">
                The Journey
              </p>

              <h2
                className={`${serif.className} mt-6 text-6xl font-medium leading-[0.92] tracking-[-0.05em] md:text-8xl`}
              >
                No fixed script.
                <br />
                No rush.
              </h2>
            </div>

            <div>
              <p className="max-w-2xl text-xl leading-9 text-white/72">
                The Society Islands offer a route, not a schedule. Each
                departure follows the conditions: wind, swell, anchorages,
                lagoon clarity and the appetite of the group aboard.
              </p>

              <div className="mt-16 divide-y divide-white/18 border-y border-white/18">
                {route.map((stop, index) => (
                  <div
                    key={stop.place}
                    className="grid gap-6 py-8 md:grid-cols-[0.25fr_0.75fr]"
                  >
                    <p className="text-xs uppercase tracking-[0.3em] text-white/40">
                      0{index + 1}
                    </p>
                    <div>
                      <h3
                        className={`${serif.className} text-4xl font-medium tracking-[-0.03em]`}
                      >
                        {stop.place}
                      </h3>
                      <p className="mt-3 text-lg text-white/88">{stop.title}</p>
                      <p className="mt-4 max-w-xl text-sm leading-7 text-white/60">
                        {stop.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="boat" className="py-32 md:py-44">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 md:grid-cols-[1.15fr_0.85fr] md:gap-24">
          <img
            src="/boat.jpg"
            alt="Outremer 45 catamaran"
            className="aspect-[5/4] w-full object-cover"
          />

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#12385a]/45">
              Aboard Kaikoa
            </p>

            <h2
              className={`${serif.className} mt-6 text-6xl font-medium leading-[0.92] tracking-[-0.05em] md:text-8xl`}
            >
              Outremer
              <br />
              45
            </h2>

            <p className="mt-8 text-2xl leading-10 text-[#12385a]/72">
              Fast enough to chase the wind. Comfortable enough to slow down.
            </p>

            <div className="mt-12 grid grid-cols-2 gap-x-8 gap-y-6 border-t border-[#12385a]/15 pt-8 text-sm uppercase tracking-[0.22em] text-[#12385a]/55">
              <p>2 Guest Cabins</p>
              <p>Small Groups</p>
              <p>Custom Routes</p>
              <p>Liveaboard Format</p>
            </div>
          </div>
        </div>
      </section>

      <section id="experiences" className="bg-[#f7f1e6] py-28 md:py-40">
  <div className="mx-auto max-w-7xl px-5">
    <div className="grid gap-10 md:grid-cols-[0.75fr_1.25fr] md:items-end">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#12385a]/45">
          Experiences
        </p>

        <h2
          className={`${serif.className} mt-6 text-6xl font-medium leading-[0.9] tracking-[-0.05em] text-[#12385a] md:text-8xl`}
        >
          Days shaped
          <br />
          by the ocean.
        </h2>
      </div>

      <p className="max-w-xl text-xl leading-9 text-[#12385a]/68">
        Each expedition moves with the conditions: wind, water, light,
        anchorages and the appetite of the group aboard.
      </p>
    </div>

    <div className="mt-16 overflow-x-auto pb-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      <div className="flex snap-x snap-mandatory gap-6">
        {experiences.map((item, index) => (
          <article
            key={item.title}
            className="relative min-w-[88%] snap-center overflow-hidden rounded-[2.5rem] bg-[#071b2c] shadow-2xl shadow-[#12385a]/15 md:min-w-[72%]"
          >
            <div className="relative flex aspect-[16/10] items-center justify-center overflow-hidden bg-[#071b2c] p-4 md:aspect-[16/8] md:p-6">
  <img
    src={item.image}
    alt={item.title}
    className="h-full w-full object-contain"
  />

              <div className="absolute inset-0 bg-gradient-to-t from-[#071b2c]/85 via-[#071b2c]/20 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#071b2c]/50 via-transparent to-transparent" />
            </div>

            <div className="absolute inset-x-0 bottom-0 p-7 text-white md:p-10">
              <p className="text-xs uppercase tracking-[0.32em] text-white/45">
                0{index + 1} / 0{experiences.length}
              </p>

              <div className="mt-5 grid gap-6 md:grid-cols-[0.8fr_1.2fr] md:items-end">
                <div>
                  <h3
                    className={`${serif.className} text-5xl font-medium leading-[0.95] tracking-[-0.04em] md:text-7xl`}
                  >
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm uppercase tracking-[0.24em] text-white/55">
                    {item.subtitle}
                  </p>
                </div>

                <p className="max-w-xl text-lg leading-8 text-white/72">
                  {item.text}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>

    <div className="mt-2 flex items-center justify-between border-t border-[#12385a]/12 pt-6">
      <p className="text-xs uppercase tracking-[0.28em] text-[#12385a]/45">
        Scroll to explore
      </p>

      <p className="text-xs uppercase tracking-[0.28em] text-[#12385a]/35">
        Wind · Water · Islands · Time
      </p>
    </div>
  </div>
</section>

      <section className="py-32 md:py-44">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 md:grid-cols-[0.85fr_1.15fr] md:gap-24">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#12385a]/45">
              Your Host
            </p>

            <h2
              className={`${serif.className} mt-6 text-6xl font-medium leading-[0.92] tracking-[-0.05em] md:text-8xl`}
            >
              Meet
              <br />
              Eduardo.
            </h2>

            <p className="mt-8 text-xl leading-9 text-[#12385a]/72">
              Sailor, waterman, photographer and ocean explorer. Eduardo’s life
              has always moved around the sea — sailing, diving, surfing,
              spearfishing, travel and photography.
            </p>

            <p className="mt-7 text-lg leading-9 text-[#12385a]/66">
              Kaikoa brings that world together into a more personal way to
              experience French Polynesia: small groups, real ocean energy and
              days shaped by wind, weather and curiosity.
            </p>
          </div>

          <img
            src="/eduardo.jpg"
            alt="Eduardo from Kaikoa"
            className="aspect-[4/5] w-full object-cover"
          />
        </div>
      </section>

      <section id="season" className="bg-[#12385a] py-32 text-white md:py-44">
        <div className="mx-auto max-w-7xl px-5">
          <div className="grid gap-16 md:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/45">
                Opening Season
              </p>

              <h2
                className={`${serif.className} mt-6 text-6xl font-medium leading-[0.92] tracking-[-0.05em] md:text-8xl`}
              >
                July —
                <br />
                September
                <br />
                2026
              </h2>

              <p className="mt-8 max-w-md text-lg leading-8 text-white/64">
                A limited number of small-group expeditions through the Society
                Islands. Each journey is shaped by wind, weather and the group
                aboard.
              </p>
            </div>

            <div className="divide-y divide-white/15 border-y border-white/15">
              {months.map((item) => (
                <div
                  key={item.month}
                  className={`grid gap-6 py-8 md:grid-cols-[0.35fr_0.65fr] ${
                    selectedMonth === item.month ? "bg-white/[0.04]" : ""
                  }`}
                >
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-white/40">
                      2026
                    </p>
                    <h3
                      className={`${serif.className} mt-3 text-5xl font-medium tracking-[-0.04em]`}
                    >
                      {item.month}
                    </h3>
                  </div>

                  <div>
                    <p className="text-lg text-white/88">{item.status}</p>
                    <p className="mt-3 max-w-xl text-sm leading-7 text-white/60">
                      {item.text}
                    </p>

                    <Button
                      onClick={() => selectMonth(item.month)}
                      className="mt-6 rounded-full bg-white px-6 text-[#12385a] hover:bg-white/90"
                    >
                      Reserve {item.month}
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="inquire" className="py-32 md:py-44">
        <div className="mx-auto grid max-w-7xl overflow-hidden bg-white shadow-2xl shadow-[#12385a]/10 md:grid-cols-[0.9fr_1.1fr]">
          <div className="bg-[#071b2c] p-8 text-white md:p-14">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/45">
              Inquiries
            </p>
            <h2
              className={`${serif.className} mt-6 text-5xl font-medium leading-[0.95] tracking-[-0.04em] md:text-7xl`}
            >
              The world remains wonderfully unexplored.
            </h2>
            <p className="mt-8 max-w-md text-lg leading-8 text-white/65">
              Tell us your dates, your style and the kind of ocean experience
              you are looking for.
            </p>
          </div>

          <form className="space-y-4 p-8 md:p-14" onSubmit={handleSubmit}>
            {form.dates && (
              <div className="bg-[#12385a]/5 px-4 py-3 text-sm font-semibold text-[#12385a]">
                Selected Expedition: {form.dates}
              </div>
            )}

            <input
              required
              placeholder="Name"
              className="w-full border border-[#12385a]/15 bg-transparent px-4 py-4 outline-none transition placeholder:text-[#12385a]/35 focus:border-[#12385a]"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />

            <input
              required
              placeholder="How many guests?"
              className="w-full border border-[#12385a]/15 bg-transparent px-4 py-4 outline-none transition placeholder:text-[#12385a]/35 focus:border-[#12385a]"
              value={form.guests}
              onChange={(e) => setForm({ ...form, guests: e.target.value })}
            />

            <input
              required
              placeholder="Preferred dates"
              className="w-full border border-[#12385a]/15 bg-transparent px-4 py-4 outline-none transition placeholder:text-[#12385a]/35 focus:border-[#12385a]"
              value={form.dates}
              onChange={(e) => setForm({ ...form, dates: e.target.value })}
            />

            <textarea
              required
              placeholder="Tell us about your ideal expedition..."
              className="min-h-36 w-full border border-[#12385a]/15 bg-transparent px-4 py-4 outline-none transition placeholder:text-[#12385a]/35 focus:border-[#12385a]"
              value={form.expedition}
              onChange={(e) =>
                setForm({ ...form, expedition: e.target.value })
              }
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

      <footer className="border-t border-[#12385a]/10 py-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 px-5 text-xs uppercase tracking-[0.2em] text-[#12385a]/45 md:flex-row">
          <p>© {new Date().getFullYear()} Kaikoa Expeditions.</p>
          <p>Move with the wind. Follow the ocean.</p>
          <p>Photography by Eduardo — Kaikoa.com</p>
        </div>
      </footer>

      <a
        href={whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact Kaikoa on WhatsApp"
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#12385a] text-white shadow-xl transition hover:scale-105"
      >
        <MessageCircle className="h-7 w-7" />
      </a>
    </main>
  );
}
