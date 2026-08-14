import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { CONTACT, HEARD_ABOUT_OPTIONS, SECTOR_OPTIONS } from "../data/content";
import Icon from "./Icon";

const initialForm = {
  name: "",
  company: "",
  email: "",
  phone: "",
  heardAbout: "",
  sector: "",
  message: "",
};

export default function ContactSection() {
  const [searchParams] = useSearchParams();
  const sectorParam = searchParams.get("sector");
  const [form, setForm] = useState(() => ({
    ...initialForm,
    sector: sectorParam && SECTOR_OPTIONS.includes(sectorParam) ? sectorParam : "",
  }));
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.company || !form.email || !form.phone) {
      setError("Please fill in your name, company, email, and phone number.");
      return;
    }
    setError("");
    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Something went wrong. Please try again or email us directly.");
      }
      setSubmitted(true);
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again or email us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="scroll-mt-20 bg-blue-900 py-20 text-white">
      <div className="section-shell grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wide text-saffron-400">
            Get in touch
          </span>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Talk to us</h2>
          <p className="mt-4 max-w-md text-navy-300">
            Tell us about your business and what you're looking for. No obligation, no
            pricing pitch — just a conversation about whether we're a fit for each other.
          </p>

          <ul className="mt-8 space-y-4 text-sm text-navy-200">
            <li className="flex items-center gap-3">
              <Icon name="chat" className="h-5 w-5 text-teal-400" />
              <a href={`mailto:${CONTACT.email}`} className="hover:text-white">
                {CONTACT.email}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Icon name="check" className="h-5 w-5 text-teal-400" />
              <a href={`tel:${CONTACT.phone.replace(/\s+/g, "")}`} className="hover:text-white">
                {CONTACT.phone}
              </a>
            </li>
          </ul>
        </div>

        <div className="rounded-2xl bg-white p-6 text-navy-900 shadow-xl sm:p-8">
          {submitted ? (
            <div className="flex flex-col items-center justify-center gap-3 py-10 text-center">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-500/10 text-teal-600">
                <Icon name="check" className="h-6 w-6" />
              </span>
              <h3 className="text-xl font-semibold">Thanks — we've got it.</h3>
              <p className="max-w-sm text-sm text-navy-600">
                Someone from our team will reach out to {form.email || "you"} shortly to
                continue the conversation.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <label className="mb-1.5 block text-sm font-medium">Full name *</label>
                <input
                  required
                  value={form.name}
                  onChange={update("name")}
                  className="w-full rounded-lg border border-navy-900/15 px-3.5 py-2.5 text-sm outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20"
                  placeholder="Your name"
                />
              </div>
              <div className="sm:col-span-1">
                <label className="mb-1.5 block text-sm font-medium">Company name *</label>
                <input
                  required
                  value={form.company}
                  onChange={update("company")}
                  className="w-full rounded-lg border border-navy-900/15 px-3.5 py-2.5 text-sm outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20"
                  placeholder="Your company"
                />
              </div>
              <div className="sm:col-span-1">
                <label className="mb-1.5 block text-sm font-medium">Email address *</label>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={update("email")}
                  className="w-full rounded-lg border border-navy-900/15 px-3.5 py-2.5 text-sm outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20"
                  placeholder="you@company.com"
                />
              </div>
              <div className="sm:col-span-1">
                <label className="mb-1.5 block text-sm font-medium">Phone number *</label>
                <input
                  required
                  type="tel"
                  value={form.phone}
                  onChange={update("phone")}
                  className="w-full rounded-lg border border-navy-900/15 px-3.5 py-2.5 text-sm outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>
              <div className="sm:col-span-1">
                <label className="mb-1.5 block text-sm font-medium">How did you hear about us?</label>
                <select
                  value={form.heardAbout}
                  onChange={update("heardAbout")}
                  className="w-full rounded-lg border border-navy-900/15 bg-white px-3.5 py-2.5 text-sm outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20"
                >
                  <option value="">Select an option</option>
                  {HEARD_ABOUT_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
              <div className="sm:col-span-1">
                <label className="mb-1.5 block text-sm font-medium">Your sector (optional)</label>
                <select
                  value={form.sector}
                  onChange={update("sector")}
                  className="w-full rounded-lg border border-navy-900/15 bg-white px-3.5 py-2.5 text-sm outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20"
                >
                  <option value="">Select a sector</option>
                  {SECTOR_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="mb-1.5 block text-sm font-medium">What are you looking for? (optional)</label>
                <textarea
                  value={form.message}
                  onChange={update("message")}
                  rows={3}
                  className="w-full rounded-lg border border-navy-900/15 px-3.5 py-2.5 text-sm outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20"
                  placeholder="Tell us a bit about your business and what you need"
                />
              </div>

              {error && <p className="text-sm text-red-600 sm:col-span-2">{error}</p>}

              <div className="sm:col-span-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full rounded-full bg-saffron-500 px-6 py-3 text-sm font-semibold text-navy-950 transition hover:bg-saffron-400 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                >
                  {submitting ? "Sending…" : "Talk to Us"}
                </button>
                <p className="mt-3 text-xs text-navy-500">
                  No pricing or checkout here — just a conversation. We'll never share your details.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
