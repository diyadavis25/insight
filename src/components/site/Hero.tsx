import { ASSETS, CONTACT } from "@/lib/brand";
import { ArrowRight, Phone } from "lucide-react";

export function Hero() {
  const scrollToForm = () => {
    const el = document.getElementById("contact-form") || document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="home" className="relative overflow-hidden" style={{minHeight:"100svh"}}>
      {/* Background */}
      <div className="absolute inset-0">
        <img src={ASSETS.seminar3} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      </div>

      {/* Consultant image */}
      <div className="absolute right-0 top-0 bottom-0 w-full lg:w-1/2">
        <img src="/hero-bg.jpg" alt="" className="w-full h-full object-cover object-top opacity-30 lg:opacity-100" />
        <div className="absolute inset-y-0 left-0 w-full lg:w-56" style={{background:"linear-gradient(to right, oklch(0.22 0.16 265), transparent)"}} />
        <div className="absolute inset-x-0 top-0 h-40" style={{background:"linear-gradient(to bottom, oklch(0.22 0.16 265 / 0.9), transparent)"}} />
        <div className="absolute inset-x-0 bottom-0 h-40" style={{background:"linear-gradient(to top, oklch(0.22 0.16 265 / 0.9), transparent)"}} />
      </div>

      {/* Content — starts from top with padding */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-28 pb-16 lg:pt-40 lg:pb-24 grid lg:grid-cols-12 gap-10 items-start w-full">
        <div className="lg:col-span-7 text-white">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur text-xs font-medium tracking-wider uppercase mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--gold)]" />
            Trusted Global Career Consultancy
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.05] mb-5">
            Your Trusted Partner for{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-[var(--gold)] via-white to-[var(--gold)] bg-clip-text text-transparent">Global Career</span>
            </span>{" "}
            Opportunities
          </h1>
          <p className="text-base sm:text-lg text-white/85 max-w-2xl mb-5 leading-relaxed">
            Helping candidates build successful international careers through professional guidance,
            interview preparation, and overseas placement support.
          </p>
          <p className="font-display italic text-[var(--gold)] mb-6 text-lg">
            "{CONTACT.tagline}"
          </p>
          <div className="flex flex-wrap gap-3">
            <button onClick={scrollToForm} className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-[var(--royal-deep)] font-semibold shadow-xl hover:-translate-y-0.5 transition">
              Contact Us <ArrowRight className="w-4 h-4" />
            </button>
            <button onClick={scrollToForm} className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[var(--gold)] text-[var(--royal-deep)] font-semibold shadow-xl hover:-translate-y-0.5 transition">
              Apply Now
            </button>
            <a href={`tel:${CONTACT.phone}`} className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-white/40 text-white font-semibold hover:bg-white/10 transition">
              <Phone className="w-4 h-4" /> Book Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}