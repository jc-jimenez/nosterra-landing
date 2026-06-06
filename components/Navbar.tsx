"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#proceso", label: "Proceso" },
  { href: "#edicion", label: "Edición Limitada" },
  { href: "#historia", label: "Historia" },
  { href: "#contacto", label: "Contacto" },
];

const STORE_URL = "https://www.nosterramezcal.com";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "border-b border-gold/15 bg-obsidian/90 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <a href="#top" className="group flex flex-col leading-none">
          <span className="font-display text-2xl font-light tracking-[0.2em] text-ivory transition-colors group-hover:text-gold">
            NOSTERRA
          </span>
          <span className="font-body text-[9px] uppercase tracking-[0.4em] text-gold/80">Mezcal</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="font-body text-xs uppercase tracking-[0.18em] text-ivory/70 transition-colors hover:text-gold">
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a
            href={STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden border border-gold/60 px-5 py-2 font-body text-xs uppercase tracking-[0.18em] text-gold transition-colors hover:bg-gold hover:text-obsidian sm:block"
          >
            Comprar
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="flex h-8 w-8 flex-col items-center justify-center gap-1.5 md:hidden"
            aria-label="Menú"
          >
            <span className={`h-px w-6 bg-ivory transition-transform ${open ? "translate-y-[7px] rotate-45" : ""}`} />
            <span className={`h-px w-6 bg-ivory transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`h-px w-6 bg-ivory transition-transform ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-gold/10 bg-obsidian/95 px-6 py-6 backdrop-blur-md md:hidden">
          <div className="flex flex-col gap-5">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="font-body text-sm uppercase tracking-[0.18em] text-ivory/80">
                {l.label}
              </a>
            ))}
            <a href={STORE_URL} target="_blank" rel="noopener noreferrer" className="border border-gold/60 px-5 py-3 text-center font-body text-sm uppercase tracking-[0.18em] text-gold">
              Comprar
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
