"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/why-us", label: "Why Us" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/areas-we-serve", label: "Areas" },
  { href: "/contact", label: "Contact" },
];


export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-slate-950/90 border-b border-slate-800 backdrop-blur">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-emerald-500 text-slate-950 font-extrabold flex items-center justify-center shadow-emerald-500/40 shadow-md">
            RP
          </div>
          <div>
            <p className="font-semibold text-white text-sm leading-tight">
              R.P. Pest Control
            </p>
            <p className="text-[11px] text-slate-400 leading-tight">
              Govt. Approved • ISO 9001:2015
            </p>
          </div>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-slate-300 hover:text-emerald-300 transition"
            >
              {l.label}
            </Link>
          ))}

          <Link
            href="tel:+919824931083"
            className="rounded-full bg-emerald-500 px-4 py-1.5 text-xs font-semibold text-slate-950 shadow-md shadow-emerald-500/40 hover:bg-emerald-400 transition"
          >
            Call Now
          </Link>

          <Link
            href="https://wa.me/919824931083?text=Hi%2C%20I%20need%20pest%20control%20service"
            className="rounded-full border border-slate-600 px-4 py-1.5 text-xs font-semibold text-slate-100 hover:border-emerald-400 hover:text-emerald-300 transition"
          >
            WhatsApp
          </Link>
        </nav>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden border border-slate-700 p-2 rounded-md text-slate-200 hover:bg-slate-900"
          onClick={() => setOpen(!open)}
        >
          {open ? "✖" : "☰"}
        </button>
      </div>

      {/* MOBILE DROPDOWN */}
      {open && (
        <div className="md:hidden border-t border-slate-800 bg-slate-950/95 px-4 py-4 flex flex-col gap-3 text-sm">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-slate-200 hover:text-emerald-300"
            >
              {l.label}
            </Link>
          ))}

          <Link
            href="tel:+919824931083"
            onClick={() => setOpen(false)}
            className="rounded-full bg-emerald-500 px-4 py-1.5 text-xs text-center font-semibold text-slate-950 shadow-md hover:bg-emerald-400 transition"
          >
            Call Now
          </Link>

          <Link
            href="https://wa.me/919824931083?text=Hi%2C%20I%20need%20pest%20control%20service"
            onClick={() => setOpen(false)}
            className="rounded-full border border-slate-600 px-4 py-1.5 text-xs text-center font-semibold text-slate-100 hover:text-emerald-300 hover:border-emerald-400 transition"
          >
            WhatsApp
          </Link>
        </div>
      )}
    </header>
  );
}
