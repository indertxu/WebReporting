import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Loader2, ArrowRight, Download, Calendar, Tag, LogIn } from "lucide-react";
import { base44 } from "@/api/base44Client";
import { useI18n } from "@/lib/i18n";

function DemoForm({ t, onSuccess }) {
  const f = t.finalCta.form;
  const [form, setForm] = useState({ name: "", email: "", role: "", company: "" });
  const [customRole, setCustomRole] = useState("");
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.role) {
      setError(f.errorFields);
      return;
    }
    if (form.role === t.finalCta.roles[5] && !customRole.trim()) {
      setError(f.errorRole);
      return;
    }
    setStatus("submitting");
    setError("");
    try {
      const payload = {
        ...form,
        role: form.role === t.finalCta.roles[5] ? customRole.trim() : form.role,
      };
      await base44.functions.invoke("submitDemoRequest", payload);
      setStatus("success");
      onSuccess?.();
    } catch (err) {
      setError(err?.response?.data?.error || err?.message || f.errorGeneric);
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-2xl border border-mint/15 p-8 shadow-xl text-center"
      >
        <div className="w-14 h-14 rounded-full bg-mint/10 flex items-center justify-center mx-auto mb-5">
          <CheckCircle2 size={28} className="text-mint" />
        </div>
        <h3 className="text-ink font-bold text-xl mb-2">{f.successTitle}</h3>
        <p className="text-ink-soft/60 text-[15px] leading-relaxed mb-6">
          {f.successDesc}
        </p>

{/* Post-success actions */}
{/* Post-success actions */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-5">
          <button
            type="button"
            onClick={() => window.open("https://calendly.com/next-finance/demo", "_blank")}
            className="inline-flex items-center justify-center gap-2 bg-ink hover:bg-indigo text-white font-semibold text-[14px] px-5 py-3 rounded-xl transition-all shadow-lg shadow-indigo/20"
          >
            <Calendar size={16} />
            {f.scheduleDemo}
          </button>
          <button
            type="button"
            onClick={() => window.location.href = "/one-pager"}
            className="inline-flex items-center justify-center gap-2 bg-white border border-mint/20 hover:border-indigo text-ink hover:text-indigo font-semibold text-[14px] px-5 py-3 rounded-xl transition-all"
          >
            <Download size={16} />
            {t.finalCta.downloadOnePager}
          </button>
        </div>

        <p className="font-mono text-[11px] text-gray-400 tracking-wider">
          {f.successNote}
        </p>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-2xl border border-mint/15 p-8 shadow-[0_20px_60px_-15px_rgba(6,78,59,0.15)]"
    >
      <h3 className="text-ink font-bold text-xl mb-1">{f.title}</h3>
      <p className="text-ink-soft/50 text-[14px] mb-6">
        {f.subtitle}
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-[13px] font-medium text-ink-soft mb-1.5">
            {f.nameLabel}
          </label>
          <input
            type="text"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder={f.namePlaceholder}
            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-indigo focus:ring-2 focus:ring-indigo/10 outline-none transition-all text-[15px] text-ink placeholder:text-gray-300"
            disabled={status === "submitting"}
          />
        </div>
        <div>
          <label className="block text-[13px] font-medium text-ink-soft mb-1.5">
            {f.emailLabel}
          </label>
          <input
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder={f.emailPlaceholder}
            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-indigo focus:ring-2 focus:ring-indigo/10 outline-none transition-all text-[15px] text-ink placeholder:text-gray-300"
            disabled={status === "submitting"}
          />
        </div>
        <div>
          <label className="block text-[13px] font-medium text-ink-soft mb-1.5">
            {f.roleLabel}
          </label>
          <select
            value={form.role}
            onChange={(e) => setForm({ ...form, role: e.target.value })}
            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-indigo focus:ring-2 focus:ring-indigo/10 outline-none transition-all text-[15px] text-ink bg-white"
            disabled={status === "submitting"}
          >
            <option value="">{f.rolePlaceholder}</option>
            {t.finalCta.roles.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
          {form.role === t.finalCta.roles[5] && (
            <input
              type="text"
              value={customRole}
              onChange={(e) => setCustomRole(e.target.value)}
              placeholder={f.roleCustomPlaceholder}
              className="w-full mt-3 px-4 py-2.5 rounded-xl border border-gray-200 focus:border-indigo focus:ring-2 focus:ring-indigo/10 outline-none transition-all text-[15px] text-ink placeholder:text-gray-300"
              disabled={status === "submitting"}
            />
          )}
        </div>
        <div>
          <label className="block text-[13px] font-medium text-ink-soft mb-1.5">
            {f.companyLabel} <span className="text-gray-300">{f.companyOptional}</span>
          </label>
          <input
            type="text"
            value={form.company}
            onChange={(e) => setForm({ ...form, company: e.target.value })}
            placeholder={f.companyPlaceholder}
            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-indigo focus:ring-2 focus:ring-indigo/10 outline-none transition-all text-[15px] text-ink placeholder:text-gray-300"
            disabled={status === "submitting"}
          />
        </div>

        {error && (
          <p className="text-[13px] text-rose">{error}</p>
        )}

        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full bg-ink hover:bg-indigo text-white font-semibold text-[15px] py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed shadow-lg shadow-indigo/20"
        >
          {status === "submitting" ? (
            <>
              <Loader2 size={16} className="animate-spin" />
              {f.submitting}
            </>
          ) : (
            <>
              {f.submit}
              <ArrowRight size={16} />
            </>
          )}
        </button>
      </form>
      <p className="text-center text-[12px] text-gray-400 mt-4">
        {f.footer}
      </p>
    </motion.div>
  );
}

export default function FinalCTA() {
  const { t } = useI18n();
  const fc = t.finalCta;
  const [showForm, setShowForm] = useState(false);

  return (
    <section id="demo" className="py-20 bg-cloud">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-3 font-mono text-[11px] tracking-[0.14em] uppercase text-indigo mb-6">
            <span className="w-6 h-px bg-indigo" />
            {fc.tag}
            <span className="w-6 h-px bg-indigo" />
          </div>
          <h2
            className="font-extrabold text-ink leading-[1.05] tracking-tight mb-6"
            style={{ fontSize: "clamp(2.25rem, 4.4vw, 3.5rem)" }}
          >
            {fc.title}{" "}
            <span className="bg-gradient-to-r from-indigo to-mint bg-clip-text text-transparent">
              {fc.titleHighlight}
            </span>
          </h2>
          <p className="text-lg text-ink-soft/60 leading-relaxed mb-10 max-w-xl mx-auto">
            {fc.desc}
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {!showForm ? (
            <motion.div
              key="cta"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col items-center gap-6"
            >
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="button"
                  onClick={() => setShowForm(true)}
                  className="group inline-flex items-center gap-2.5 bg-ink hover:bg-indigo text-white font-semibold text-[16px] px-7 py-3.5 rounded-xl transition-all shadow-xl shadow-indigo/20 hover:shadow-indigo/30 hover:-translate-y-0.5"
                >
                  <Tag size={17} />
                  <span>{fc.pricingCta}</span>
                  <ArrowRight
                    size={17}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>

                <button
                  type="button"
                  onClick={() => window.open("https://nextreporting.atebiz.com/signup", "_blank", "noopener,noreferrer")}
                  className="group inline-flex items-center gap-2.5 bg-white border-2 border-mint/60 hover:border-indigo text-ink hover:text-indigo font-semibold text-[16px] px-7 py-3.5 rounded-xl transition-all hover:-translate-y-0.5"
                >
                  <LogIn size={17} />
                  <span>{fc.konsolidatorSignup}</span>
                </button>
              </div>

              <p className="text-[12px] text-ink-soft/50 font-mono tracking-wider uppercase">
                {fc.konsolidatorNote}
              </p>

              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[13px] text-ink-soft/60">
                {fc.checks.map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-mint shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="max-w-xl mx-auto text-left"
            >
              <DemoForm t={t} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}