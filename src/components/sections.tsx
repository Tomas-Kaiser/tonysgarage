import Image from "next/image";
import { highlights, mapsEmbed, mapsLink, services, site } from "@/lib/site";
import {
  ArrowRight,
  CheckIcon,
  ClockIcon,
  FacebookIcon,
  LogoMark,
  MailIcon,
  PhoneIcon,
  PinIcon,
  ServiceGlyph,
} from "./icons";
import { Reviews } from "./reviews";

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="inline-flex items-center gap-3 text-xs font-semibold tracking-[0.25em] text-brand uppercase">
      <span className="h-px w-8 bg-brand" />
      {children}
    </p>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-ink">
      <Image
        src="/hero.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover object-[60%_center] opacity-70"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/70 to-ink/30" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/60 to-transparent" />
      <div className="absolute top-0 right-0 -z-10 h-full w-1/2 bg-[radial-gradient(ellipse_at_top_right,rgb(220_38_38/0.25),transparent_60%)]" />

      <div className="mx-auto w-full max-w-7xl px-4 pt-32 pb-16 sm:px-6 sm:pb-24 lg:px-8">
        <div className="max-w-3xl">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-wide text-zinc-300 backdrop-blur">
            <span className="size-2 animate-pulse rounded-full bg-brand" />
            Trusted in Wicklow for {site.yearsExperience} years
          </p>
          <h1 className="font-display text-5xl leading-[0.95] font-bold text-white uppercase sm:text-7xl lg:text-8xl">
            Honest repairs.
            <br />
            <span className="text-brand">Expert care.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-300">
            With {site.yearsExperience} years of experience, we pride ourselves on making sure your car
            leaves our garage in top condition. Full diagnostic services on all makes and models,
            petrol and diesel.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href={site.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand px-7 py-4 font-semibold text-white shadow-xl shadow-brand/30 transition hover:-translate-y-0.5 hover:bg-brand-dark"
            >
              <PhoneIcon className="size-5" />
              Book a service
            </a>
            <a
              href="#services"
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-4 font-semibold text-white backdrop-blur transition hover:border-white/40 hover:bg-white/10"
            >
              Our services
              <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        <dl className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:mt-24 lg:grid-cols-4">
          {highlights.map((h) => (
            <div key={h.label} className="bg-ink/80 px-6 py-5 backdrop-blur">
              <dt className="sr-only">{h.label}</dt>
              <dd className="font-display text-3xl font-bold text-white uppercase sm:text-4xl">
                {h.value}
              </dd>
              <dd className="mt-1 text-sm text-steel">{h.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

export function Services() {
  return (
    <section id="services" className="scroll-mt-16 bg-fog py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <Eyebrow>What we do</Eyebrow>
            <h2 className="mt-4 font-display text-4xl font-bold text-ink uppercase sm:text-6xl">
              Here are just some of the services we offer
            </h2>
          </div>
          <p className="max-w-md text-lg text-zinc-600">
            From routine maintenance to major repairs, every job gets the same careful attention.
            Not sure what you need? Give us a call and we&apos;ll take a look.
          </p>
        </div>

        <ul className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <li
              key={s.title}
              className="group relative overflow-hidden rounded-3xl border border-zinc-200 bg-white p-8 transition duration-300 hover:-translate-y-1 hover:border-ink hover:bg-ink hover:shadow-2xl hover:shadow-ink/20"
            >
              <span className="absolute top-6 right-8 font-display text-6xl font-bold text-zinc-100 transition-colors group-hover:text-white/5">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="relative grid size-14 place-items-center rounded-2xl bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                <ServiceGlyph name={s.icon} className="size-7" />
              </span>
              <h3 className="relative mt-8 font-display text-2xl font-bold text-ink uppercase transition-colors group-hover:text-white">
                {s.title}
              </h3>
              <p className="relative mt-3 leading-relaxed text-zinc-600 transition-colors group-hover:text-zinc-400">
                {s.details}
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-col items-center justify-between gap-6 rounded-3xl bg-brand px-8 py-8 text-white sm:flex-row">
          <p className="font-display text-2xl font-bold uppercase sm:text-3xl">
            Need something not listed?
          </p>
          <a
            href={site.phoneHref}
            className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 font-semibold transition hover:bg-black"
          >
            <PhoneIcon className="size-5" />
            Call {site.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}

const promises = [
  "Diagnostics on all makes & models",
  "Clear, honest advice before any work",
  "Fair prices, no surprises",
  "Fully qualified, local team",
];

export function About() {
  return (
    <section id="about" className="relative scroll-mt-16 overflow-hidden bg-ink py-24 sm:py-32">
      <div className="absolute -top-40 -left-40 size-[32rem] rounded-full bg-brand/15 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="relative">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
            <Image
              src="/workshop.jpg"
              alt="A mechanic working on a car in the workshop, seen from above"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -right-2 -bottom-8 rounded-3xl bg-brand p-6 text-white shadow-2xl shadow-brand/30 sm:-right-6 sm:p-8">
            <p className="font-display text-5xl leading-none font-bold sm:text-6xl">
              {site.yearsExperience}
            </p>
            <p className="mt-1 text-sm font-medium tracking-wide uppercase">Years of experience</p>
          </div>
        </div>

        <div>
          <Eyebrow>About us</Eyebrow>
          <h2 className="mt-4 font-display text-4xl font-bold text-white uppercase sm:text-6xl">
            Wicklow&apos;s trusted local garage
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-zinc-300">
            At Tony&apos;s Garage, we&apos;ve proudly served Wicklow and the surrounding community
            for over {site.yearsExperience} years. Known for honest service and expert care, our team
            handles everything from diagnostics and repairs to NCT preparation and regular
            maintenance.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-zinc-400">
            We&apos;re committed to keeping your vehicle running smoothly and reliably, so you can
            get back on the road with confidence.
          </p>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {promises.map((p) => (
              <li key={p} className="flex items-start gap-3 text-zinc-200">
                <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-brand/15 text-brand">
                  <CheckIcon className="size-4" />
                </span>
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function ReviewsSection() {
  return (
    <section id="reviews" className="scroll-mt-16 overflow-hidden bg-graphite py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex justify-center">
            <Eyebrow>Reviews</Eyebrow>
          </div>
          <h2 className="mt-4 font-display text-4xl font-bold text-white uppercase sm:text-6xl">
            What our customers say
          </h2>
        </div>
      </div>
      <Reviews />
    </section>
  );
}

export function Contact() {
  const items = [
    {
      icon: PinIcon,
      label: "Find us",
      value: (
        <>
          {site.address.line1}
          <br />
          {site.address.line2}
        </>
      ),
      href: mapsLink,
      external: true,
    },
    { icon: PhoneIcon, label: "Call us", value: site.phoneDisplay, href: site.phoneHref },
    { icon: MailIcon, label: "Email us", value: site.email, href: `mailto:${site.email}` },
  ];

  return (
    <section id="contact" className="scroll-mt-16 bg-fog py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <Eyebrow>Contact</Eyebrow>
          <h2 className="mt-4 font-display text-4xl font-bold text-ink uppercase sm:text-6xl">
            Get in touch
          </h2>
          <p className="mt-4 text-lg text-zinc-600">
            Call ahead to book your car in, or drop by the garage on Strand Street Upper, down by
            the harbour.
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-5">
          <div className="flex flex-col gap-5 lg:col-span-2">
            {items.map(({ icon: Icon, label, value, href, external }) => (
              <a
                key={label}
                href={href}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="group flex items-center gap-5 rounded-3xl border border-zinc-200 bg-white p-6 transition hover:border-brand hover:shadow-xl hover:shadow-zinc-300/40"
              >
                <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-ink text-white transition-colors group-hover:bg-brand">
                  <Icon className="size-6" />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs font-semibold tracking-[0.2em] text-zinc-500 uppercase">
                    {label}
                  </span>
                  <span className="mt-1 block font-semibold break-words text-ink">{value}</span>
                </span>
              </a>
            ))}

            <div className="rounded-3xl bg-ink p-6 text-white">
              <div className="flex items-center gap-3">
                <ClockIcon className="size-6 text-brand" />
                <span className="text-xs font-semibold tracking-[0.2em] text-zinc-400 uppercase">
                  Opening hours
                </span>
              </div>
              <dl className="mt-4 divide-y divide-white/10">
                {site.hours.map((h) => (
                  <div key={h.days} className="flex justify-between gap-4 py-3">
                    <dt className="text-zinc-300">{h.days}</dt>
                    <dd className={`font-semibold ${h.time === "Closed" ? "text-zinc-500" : ""}`}>
                      {h.time}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          <div className="grid gap-5 lg:col-span-3 lg:grid-rows-2">
            <div className="relative min-h-72 overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-200">
              <iframe
                title="Map showing Tony's Garage location"
                src={mapsEmbed}
                className="absolute inset-0 size-full grayscale-[60%] contrast-110"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="relative min-h-72 overflow-hidden rounded-3xl">
              <Image
                src="/shopfront.jpg"
                alt="The front of Tony's Garage at Harbour Point, Wicklow"
                fill
                sizes="(min-width: 1024px) 60vw, 100vw"
                className="object-cover object-[70%_70%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent" />
              <a
                href={mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-5 left-5 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-ink transition hover:bg-brand hover:text-white"
              >
                Get directions
                <ArrowRight className="size-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

async function currentYear() {
  "use cache";
  return new Date().getFullYear();
}

export async function Footer() {
  const year = await currentYear();
  return (
    <footer className="bg-ink text-zinc-400">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-center">
          <div className="flex items-center gap-3">
            <span className="grid size-12 place-items-center rounded-xl bg-brand text-white">
              <LogoMark className="size-7" />
            </span>
            <div>
              <p className="font-display text-2xl font-bold text-white uppercase">
                Tony&apos;s <span className="text-brand">Garage</span>
              </p>
              <p className="text-sm">
                {site.address.line1}, {site.address.line2}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-sm">Connect with us</span>
            <a
              href={site.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Tony's Garage on Facebook"
              className="grid size-11 place-items-center rounded-full border border-white/15 text-white transition hover:border-brand hover:bg-brand"
            >
              <FacebookIcon className="size-5" />
            </a>
            <a
              href={site.phoneHref}
              aria-label={`Call ${site.phoneDisplay}`}
              className="grid size-11 place-items-center rounded-full border border-white/15 text-white transition hover:border-brand hover:bg-brand"
            >
              <PhoneIcon className="size-5" />
            </a>
            <a
              href={`mailto:${site.email}`}
              aria-label={`Email ${site.email}`}
              className="grid size-11 place-items-center rounded-full border border-white/15 text-white transition hover:border-brand hover:bg-brand"
            >
              <MailIcon className="size-5" />
            </a>
          </div>
        </div>
        <div className="mt-12 flex flex-col justify-between gap-2 border-t border-white/10 pt-8 text-sm sm:flex-row">
          <p>© {year} Tony&apos;s Garage, Wicklow Town. All rights reserved.</p>
          <p>Mon – Fri, 8:00 – 17:00</p>
        </div>
      </div>
    </footer>
  );
}
