import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { CONTACT, HEARD_ABOUT_OPTIONS, SECTOR_OPTIONS } from "../data/content";
import { isBusinessEmail, isValidFullName } from "../lib/validation";
import Icon from "./Icon";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const initialForm = {
  name: "",
  company: "",
  email: "",
  phone: "",
  heardAbout: "",
  sector: "",
  message: "",
};

function validateField(field, value) {
  switch (field) {
    case "name":
      if (!value.trim()) return "Please enter your full name.";
      if (!isValidFullName(value)) return "Please enter your first and last name.";
      return "";
    case "company":
      return value.trim() ? "" : "Please enter your company name.";
    case "email":
      if (!value.trim()) return "Please enter your email address.";
      if (!EMAIL_RE.test(value)) return "Please enter a valid email address.";
      if (!isBusinessEmail(value))
        return "Please use your business email address, not a personal one (e.g. Gmail, Yahoo, Outlook.com).";
      return "";
    case "phone":
      if (!value) return "Please enter your phone number.";
      if (!isValidPhoneNumber(value)) return "Please enter a valid phone number for the selected country.";
      return "";
    case "heardAbout":
      return value ? "" : "Please let us know how you heard about us.";
    default:
      return "";
  }
}

const REQUIRED_FIELDS = ["name", "company", "email", "phone", "heardAbout"];

export default function ContactSection() {
  const [searchParams] = useSearchParams();
  const sectorParam = searchParams.get("sector");
  const [form, setForm] = useState(() => ({
    ...initialForm,
    sector: sectorParam && SECTOR_OPTIONS.includes(sectorParam) ? sectorParam : "",
  }));
  const [fieldErrors, setFieldErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const update = (field) => (e) => {
    setForm((f) => ({ ...f, [field]: e.target.value }));
    setFieldErrors((fe) => ({ ...fe, [field]: "" }));
  };

  const updatePhone = (value) => {
    setForm((f) => ({ ...f, phone: value || "" }));
    setFieldErrors((fe) => ({ ...fe, phone: "" }));
  };

  const handleBlur = (field) => () => {
    setFieldErrors((fe) => ({ ...fe, [field]: validateField(field, form[field]) }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const nextErrors = {};
    for (const field of REQUIRED_FIELDS) {
      const msg = validateField(field, form[field]);
      if (msg) nextErrors[field] = msg;
    }
    setFieldErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setError("Please fix the highlighted fields below.");
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

  const inputClass = (field) =>
    `w-full rounded-lg border px-3.5 py-2.5 text-sm outline-none focus:ring-2 ${
      fieldErrors[field]
        ? "border-red-400 focus:border-red-500 focus:ring-red-500/20"
        : "border-navy-900/15 focus:border-teal-500 focus:ring-teal-500/20"
    }`;

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
            <form onSubmit={handleSubmit} noValidate className="grid gap-4 sm:grid-cols-2">
              <p className="text-xs text-navy-500 sm:col-span-2">
                Please use your full name (first and last) and a business email address —
                we don't accept personal addresses like Gmail, Yahoo, or Outlook.com.
              </p>

              <div className="sm:col-span-1">
                <label className="mb-1.5 block text-sm font-medium">Full name *</label>
                <input
                  value={form.name}
                  onChange={update("name")}
                  onBlur={handleBlur("name")}
                  className={inputClass("name")}
                  placeholder="e.g. Priya Sharma"
                  aria-invalid={Boolean(fieldErrors.name)}
                />
                {fieldErrors.name && <p className="mt-1 text-xs text-red-600">{fieldErrors.name}</p>}
              </div>
              <div className="sm:col-span-1">
                <label className="mb-1.5 block text-sm font-medium">Company name *</label>
                <input
                  value={form.company}
                  onChange={update("company")}
                  onBlur={handleBlur("company")}
                  className={inputClass("company")}
                  placeholder="Your company"
                  aria-invalid={Boolean(fieldErrors.company)}
                />
                {fieldErrors.company && <p className="mt-1 text-xs text-red-600">{fieldErrors.company}</p>}
              </div>
              <div className="sm:col-span-1">
                <label className="mb-1.5 block text-sm font-medium">Business email *</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={update("email")}
                  onBlur={handleBlur("email")}
                  className={inputClass("email")}
                  placeholder="you@company.com"
                  aria-invalid={Boolean(fieldErrors.email)}
                />
                {fieldErrors.email && <p className="mt-1 text-xs text-red-600">{fieldErrors.email}</p>}
              </div>
              <div className="sm:col-span-1">
                <label className="mb-1.5 block text-sm font-medium">Phone number *</label>
                <PhoneInput
                  international
                  defaultCountry="IN"
                  value={form.phone}
                  onChange={updatePhone}
                  onBlur={handleBlur("phone")}
                  className={`contact-phone-input ${fieldErrors.phone ? "contact-phone-input--error" : ""}`}
                  numberInputProps={{ "aria-invalid": Boolean(fieldErrors.phone) }}
                />
                {fieldErrors.phone && <p className="mt-1 text-xs text-red-600">{fieldErrors.phone}</p>}
              </div>
              <div className="sm:col-span-1">
                <label className="mb-1.5 block text-sm font-medium">How did you hear about us? *</label>
                <select
                  value={form.heardAbout}
                  onChange={update("heardAbout")}
                  onBlur={handleBlur("heardAbout")}
                  className={inputClass("heardAbout")}
                  aria-invalid={Boolean(fieldErrors.heardAbout)}
                >
                  <option value="">Select an option</option>
                  {HEARD_ABOUT_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
                {fieldErrors.heardAbout && (
                  <p className="mt-1 text-xs text-red-600">{fieldErrors.heardAbout}</p>
                )}
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
