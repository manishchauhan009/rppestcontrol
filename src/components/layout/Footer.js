import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-xs sm:text-sm text-slate-300">
        {/* NAP / Brand block */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center text-slate-950 font-bold text-sm">
              RP
            </div>
            <div>
              <p className="font-semibold text-slate-50 text-sm">
                R.P. Pest Control
              </p>
              <p className="text-[11px] text-slate-400">
                Govt. Approved • ISO 9001:2015
              </p>
            </div>
          </div>
          <p className="text-[11px] sm:text-xs text-slate-400 max-w-sm">
            Professional pest control services for homes, bungalows, factories,
            offices and warehouses in and around Vapi.
          </p>
        </div>

        {/* Address */}
        <div>
          <h3 className="text-xs font-semibold text-slate-200 uppercase tracking-[0.18em] mb-2">
            Address
          </h3>
          <p className="text-[11px] sm:text-xs text-slate-300 leading-relaxed">
            R.P. Pest Control
            <br />
            Vapi, Gujarat, India
            <br />
            (Serving Vapi, Sarigam, GIDC & nearby areas)
          </p>
        </div>

        {/* Contact & Links */}
        <div>
          <h3 className="text-xs font-semibold text-slate-200 uppercase tracking-[0.18em] mb-2">
            Contact
          </h3>
          <div className="space-y-1 text-[11px] sm:text-xs">
            <p>
              Phone:{" "}
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
            <p>
              WhatsApp:{" "}
              <Link
                href="https://wa.me/919824931033"
                target="_blank"
                rel="noreferrer"
                className="hover:text-emerald-300"
              >
                Chat with us
              </Link>
            </p>
            <p>
              Email:{" "}
              <Link
                href="mailto:info@rppestcontrol.in"
                className="hover:text-emerald-300"
              >
                info@rppestcontrol.com
              </Link>
            </p>
          </div>

          <h4 className="mt-4 text-xs font-semibold text-slate-200 uppercase tracking-[0.18em] mb-2">
            Quick Links
          </h4>
          <div className="flex flex-wrap gap-3 text-[11px] sm:text-xs">
            <Link href="#services" className="hover:text-emerald-300">
              Services
            </Link>
            <Link href="#why-us" className="hover:text-emerald-300">
              Why Us
            </Link>
            <Link href="#process" className="hover:text-emerald-300">
              Process
            </Link>
            <Link href="#testimonials" className="hover:text-emerald-300">
              Testimonials
            </Link>
            <Link href="#contact" className="hover:text-emerald-300">
              Contact
            </Link>
            <p className="text-[11px] text-slate-400 mt-2">
              City pages:{" "}
              <Link href="/vapi-pest-control" className="hover:text-emerald-300">Vapi</Link>,{" "}
              <Link href="/surat-pest-control" className="hover:text-emerald-300">Surat</Link>,{" "}
              <Link href="/ahmedabad-pest-control" className="hover:text-emerald-300">Ahmedabad</Link>,{" "}
              <Link href="/vadodara-pest-control" className="hover:text-emerald-300">Vadodara</Link>,{" "}
              <Link href="/rajkot-pest-control" className="hover:text-emerald-300">Rajkot</Link>
              {" "} &amp; more across Gujarat.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col sm:flex-row items-center justify-between gap-2 text-[10px] sm:text-[11px] text-slate-500">
          <span>
            © {new Date().getFullYear()} R.P. Pest Control. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
