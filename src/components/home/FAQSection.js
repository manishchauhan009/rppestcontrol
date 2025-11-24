// components/home/FAQSection.jsx
"use client";

import { useState } from "react";
import { FAQS } from "@/data/faqs";
import Link from "next/link";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0); // first FAQ open by default

  const toggle = (index) => {
    setOpenIndex((current) => (current === index ? -1 : index));
  };

  return (
    <section
      id="faqs"
      className="relative bg-slate-950 text-white py-16 md:py-20 overflow-hidden"
    >
      {/* background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 right-16 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute bottom-[-6rem] left-0 h-80 w-80 rounded-full bg-sky-500/10 blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-3">
          Frequently Asked{" "}
          <span className="text-emerald-400">Questions</span>
        </h2>
        <p className="text-sm text-slate-300 max-w-xl mb-8">
          Doubts about safety, pricing, warranty or how pest control works?
          Here are answers to some of the most common questions customers ask
          us before booking a service.
        </p>

        <div className="space-y-3">
          {FAQS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.question}
                className="rounded-2xl border border-slate-800 bg-slate-900/70 hover:border-emerald-400/70 transition shadow-[0_18px_40px_-24px_rgba(0,0,0,0.8)]"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between gap-3 px-4 py-3 sm:px-5 sm:py-4 text-left"
                >
                  <div>
                    <p className="text-sm sm:text-base font-semibold text-white">
                      {item.question}
                    </p>
                  </div>
                  <div className="flex-shrink-0 text-emerald-300 text-lg">
                    {isOpen ? "−" : "+"}
                  </div>
                </button>
                {isOpen && (
                  <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-0">
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <p className="text-[11px] text-slate-500 mt-5">
          Still have a question?{" "}
          <Link
            href="/contact"
            className="text-emerald-300 hover:text-emerald-200 underline underline-offset-2"
          >
            Contact us
          </Link>{" "}
          or{" "}
          <Link
            href="https://wa.me/919824931033"
            className="text-emerald-300 hover:text-emerald-200 underline underline-offset-2"
          >
            ask on WhatsApp
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
