"use client";

import { useEffect, useState } from "react";
import { nav, site } from "@/lib/site";
import { CloseIcon, LogoMark, MenuIcon, PhoneIcon } from "./icons";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-white/10 bg-ink/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#top" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="grid size-10 place-items-center rounded-xl bg-brand text-white shadow-lg shadow-brand/30 transition-transform group-hover:rotate-45">
            <LogoMark className="size-6" />
          </span>
          <span className="font-display text-xl leading-none font-bold tracking-wide text-white uppercase">
            Tony&apos;s <span className="text-brand">Garage</span>
            <span className="mt-1 block text-[10px] font-medium tracking-[0.3em] text-steel">
              {site.town}
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-zinc-300 transition-colors hover:bg-white/5 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={site.phoneHref}
            className="hidden items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-brand/25 transition hover:bg-brand-dark sm:inline-flex"
          >
            <PhoneIcon className="size-4" />
            {site.phoneDisplay}
          </a>
          <button
            type="button"
            className="grid size-11 place-items-center rounded-full text-white hover:bg-white/10 md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <CloseIcon className="size-6" /> : <MenuIcon className="size-6" />}
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden transition-[max-height] duration-300 md:hidden ${
          open ? "max-h-[100svh]" : "max-h-0"
        }`}
      >
        <nav className="flex h-[calc(100svh-4.5rem)] flex-col gap-1 px-4 pt-4 pb-8" aria-label="Mobile">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="border-b border-white/10 py-4 font-display text-3xl font-semibold text-white uppercase"
            >
              {item.label}
            </a>
          ))}
          <a
            href={site.phoneHref}
            className="mt-auto inline-flex items-center justify-center gap-2 rounded-full bg-brand px-6 py-4 font-semibold text-white"
          >
            <PhoneIcon className="size-5" />
            Call {site.phoneDisplay}
          </a>
        </nav>
      </div>
    </header>
  );
}
