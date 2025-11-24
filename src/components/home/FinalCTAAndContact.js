"use client";
import Link from "next/link";
import { useState } from "react";

export default function FinalCTAAndContact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    location: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "", message: "" });

    if (!form.name || !form.phone) {
      setStatus({
        type: "error",
        message: "Please fill your name and phone number.",
      });
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok || !data.ok) {
        throw new Error(data.error || "Failed to send message.");
      }

      setStatus({
        type: "success",
        message: "Thank you! We have received your enquiry and will call you soon.",
      });

      setForm({
        name: "",
        phone: "",
        location: "",
        service: "",
        message: "",
      });
    } catch (err) {
      console.error(err);
      setStatus({
        type: "error",
        message: "Something went wrong. Please try again or call/WhatsApp us directly.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative bg-slate-950 text-white py-16 md:py-20 overflow-hidden"
    >
      {/* background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-10 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute bottom-[-6rem] right-0 h-80 w-80 rounded-full bg-sky-500/10 blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 space-y-10">
        {/* Top CTA banner */}
        <div className="rounded-3xl bg-gradient-to-r from-emerald-500 to-sky-500 px-6 py-7 md:px-8 md:py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-5 shadow-[0_24px_60px_-30px_rgba(16,185,129,0.7)]">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-emerald-950/80 mb-1">
              R.P. Pest Control • Gujarat
            </p>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-emerald-950 mb-1">
              Ready to make your home or factory{" "}
              <span className="underline decoration-emerald-900/50">
                pest-free
              </span>
              ?
            </h2>
            <p className="text-sm text-emerald-950/90 max-w-xl">
              Call now for a quick inspection and customized treatment plan.
              Same-day service available for most locations in Gujarat.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <Link
              href="tel:+919824931033"
              className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-emerald-950 px-5 py-2 text-sm font-semibold text-emerald-200 shadow-md hover:bg-slate-950 transition"
            >
              Call: 98249 31033
            </Link>
            <Link
              href="https://wa.me/919824931033?text=Hi%2C%20I%20need%20pest%20control%20service%20at%20my%20location."
              target="_blank"
              rel="noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 rounded-full border border-emerald-950/70 bg-emerald-100/20 px-5 py-2 text-sm font-semibold text-emerald-950 hover:bg-emerald-50/40 transition"
            >
              WhatsApp Us
            </Link>
          </div>
        </div>

        {/* Contact + form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-start">
          {/* Left: contact details */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-3">
              Contact &amp; Service Details
            </h3>
            <p className="text-sm text-slate-300 mb-6 max-w-md">
              Share your pest problem, location and preferred time. Our team
              will call you back to confirm inspection and suggest the right
              treatment.
            </p>

            <div className="space-y-4 text-sm text-slate-200">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-slate-400 mb-1">
                  Phone Numbers
                </p>
                <p>
                  <Link
                    href="tel:+919824931033"
                    className="hover:text-emerald-300"
                  >
                    98249 31033
                  </Link>{" "}
                  /{" "}
                  <Link
                    href="tel:+918469728777"
                    className="hover:text-emerald-300"
                  >
                    84697 28777
                  </Link>
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-slate-400 mb-1">
                  WhatsApp
                </p>
                <p>
                  <Link
                    href="https://wa.me/919824931033"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-emerald-300"
                  >
                    Chat on WhatsApp
                  </Link>
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-slate-400 mb-1">
                  Service Hours
                </p>
                <p>Monday – Sunday: 9:00 AM to 8:00 PM</p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-slate-400 mb-1">
                  Service Areas
                </p>
                <p className="text-slate-300 text-sm">
                  All major cities &amp; industrial zones across Gujarat.
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-slate-400 mb-1">
                  Note
                </p>
                <p className="text-xs text-slate-400">
                  For emergency cases like heavy infestation or bee hives, it is
                  better to call or WhatsApp directly.
                </p>
              </div>
            </div>
          </div>

          {/* Right: enquiry form */}
          <div className="rounded-2xl bg-slate-900/80 border border-slate-700 px-5 py-5 sm:px-6 sm:py-6 shadow-[0_22px_50px_-28px_rgba(0,0,0,0.9)] backdrop-blur">
            <h3 className="text-base sm:text-lg font-semibold mb-3">
              Book a Free Inspection
            </h3>

            <form className="space-y-3" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
                className="w-full text-sm px-3 py-2 rounded-md bg-slate-950 border border-slate-700 text-slate-100 outline-none focus:ring-2 focus:ring-emerald-500/60"
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone number"
                value={form.phone}
                onChange={handleChange}
                className="w-full text-sm px-3 py-2 rounded-md bg-slate-950 border border-slate-700 text-slate-100 outline-none focus:ring-2 focus:ring-emerald-500/60"
                required
              />
              <input
                type="text"
                name="location"
                placeholder="Location / Area (e.g. Vapi GIDC)"
                value={form.location}
                onChange={handleChange}
                className="w-full text-sm px-3 py-2 rounded-md bg-slate-950 border border-slate-700 text-slate-100 outline-none focus:ring-2 focus:ring-emerald-500/60"
              />
              <select
                name="service"
                value={form.service}
                onChange={handleChange}
                className="w-full text-sm px-3 py-2 rounded-md bg-slate-950 border border-slate-700 text-slate-300 outline-none focus:ring-2 focus:ring-emerald-500/60"
              >
                <option value="">Select pest problem</option>
                <option>Termites</option>
                <option>Rodents (rats/mice)</option>
                <option>Cockroaches</option>
                <option>Honey bees / wasps</option>
                <option>Wood borer</option>
                <option>General pest control</option>
                <option>Other / not sure</option>
              </select>
              <textarea
                rows={4}
                name="message"
                placeholder="Describe your problem (optional)"
                value={form.message}
                onChange={handleChange}
                className="w-full text-sm px-3 py-2 rounded-md bg-slate-950 border border-slate-700 text-slate-100 outline-none focus:ring-2 focus:ring-emerald-500/60"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full mt-2 px-4 py-2 rounded-md bg-emerald-500 text-slate-950 text-sm font-semibold hover:bg-emerald-400 transition disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? "Sending..." : "Submit Enquiry"}
              </button>

              {status.message && (
                <p
                  className={`text-[11px] mt-2 ${
                    status.type === "success"
                      ? "text-emerald-400"
                      : "text-red-400"
                  }`}
                >
                  {status.message}
                </p>
              )}

              <p className="text-[11px] text-slate-500 mt-2">
                Once you submit this form, our team will contact you on the
                given phone number to confirm details.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
