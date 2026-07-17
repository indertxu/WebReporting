import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Loader2, ArrowRight, Download, Calendar, Tag, LogIn } from "lucide-react";

import { useI18n } from "@/lib/i18n";

const COUNTRIES = [
  { code: "ES", flag: "🇪🇸", prefix: "+34" },
  { code: "PT", flag: "🇵🇹", prefix: "+351" },
  { code: "DK", flag: "🇩🇰", prefix: "+45" },
  { code: "GB", flag: "🇬🇧", prefix: "+44" },
  { code: "US", flag: "🇺🇸", prefix: "+1" },
  { code: "FR", flag: "🇫🇷", prefix: "+33" },
  { code: "DE", flag: "🇩🇪", prefix: "+49" },
  { code: "IT", flag: "🇮🇹", prefix: "+39" },
  { code: "NL", flag: "🇳🇱", prefix: "+31" },
  { code: "BE", flag: "🇧🇪", prefix: "+32" },
  { code: "IE", flag: "🇮🇪", prefix: "+353" },
  { code: "MX", flag: "🇲🇽", prefix: "+52" },
  { code: "AR", flag: "🇦🇷", prefix: "+54" },
  { code: "CL", flag: "🇨🇱", prefix: "+56" },
  { code: "CO", flag: "🇨🇴", prefix: "+57" },
  { code: "PE", flag: "🇵🇪", prefix: "+51" },
  { code: "BR", flag: "🇧🇷", prefix: "+55" },
];

function buildAutoReplyHtml(name) {
  const html = [
    '<!DOCTYPE html><html><head><meta charset="UTF-8"><title>Next Reporting</title></head>',
    '<body style="margin:0;padding:0;background:#f5f7fa;font-family:Arial,sans-serif;color:#0f172a;">',
    '<table width="100%" cellpadding="0" cellspacing="0" style="background:#f5f7fa;padding:40px 20px;"><tr><td align="center">',
    '<table width="640" cellpadding="0" cellspacing="0" style="max-width:640px;background:#ffffff;border-radius:8px;overflow:hidden;border:1px solid #e2e8f0;">',
    '<tr><td style="background:#ffffff;padding:28px 44px;border-bottom:2px solid #f1f5f9;">',
    '<table cellpadding="0" cellspacing="0" border="0"><tr>',
    '<td style="padding-right:14px;vertical-align:middle;"><img src="https://i.postimg.cc/hjXchPDC/logo-3.png" alt="Next Reporting" width="70" style="display:block;border:0;height:auto;max-width:60px;max-height:60px;width:auto;"/></td>',
    '<td style="vertical-align:middle;"><div style="font-size:22px;font-weight:bold;color:#059669;">Next Reporting</div>',
    '<div style="font-size:10px;letter-spacing:2px;color:#94a3b8;margin-top:4px;text-transform:uppercase;">By Next Finance</div></td>',
    '</tr></table></td></tr>',
    '<tr><td background="https://i.postimg.cc/3wGCKnYb/imgen-de-fondo.jpg" bgcolor="#0f172a" valign="middle" style="background-image:url(https://i.postimg.cc/3wGCKnYb/imgen-de-fondo.jpg);background-color:#0f172a;background-position:center center;background-repeat:no-repeat;background-size:cover;padding:0;">',
    '<div style="background-color:rgba(15,23,42,0.78);padding:44px;">',
    '<div style="color:#10b981;font-size:11px;letter-spacing:3px;text-transform:uppercase;font-weight:bold;margin-bottom:14px;">Solicitud de demo</div>',
    '<h1 style="color:#ffffff;font-size:28px;font-weight:bold;margin:0 0 10px 0;text-shadow:0 2px 8px rgba(0,0,0,0.6);">Confirmación de recepción</h1>',
    '<p style="color:#e5e7eb;font-size:14px;margin:0;text-shadow:0 1px 4px rgba(0,0,0,0.6);">Su solicitud ha sido registrada correctamente en nuestros sistemas.</p>',
    '</div>',
    '</td></tr>',
    '<tr><td style="padding:44px 44px 24px 44px;">',
    '<p style="font-size:16px;color:#0f172a;margin:0 0 20px 0;">Estimado/a <strong>' + name + '</strong>,</p>',
    '<p style="font-size:14px;color:#334155;line-height:1.75;margin:0 0 18px 0;">Gracias por reservar tu demo con <strong>Next Reporting</strong>. Estamos deseando conocerte y enseñarte de cerca cómo podemos hacer que tu reporting financiero deje de ser una carga y se convierta en una ventaja para tu equipo.</p>',
    '<p style="font-size:14px;color:#334155;line-height:1.75;margin:0 0 18px 0;">Le confirmamos que hemos recibido su solicitud de demostración correctamente. Nuestro departamento comercial procederá a revisar la información remitida y contactará con usted en un plazo máximo de <strong>24 horas laborables</strong> para coordinar la sesión.</p>',
    '<p style="font-size:14px;color:#334155;line-height:1.75;margin:0 0 18px 0;">La demostración, de aproximadamente 30 minutos de duración, se adaptará específicamente al perfil de su organización y los requerimientos particulares de su función de reporting.</p>',
    '<div style="font-size:11px;color:#64748b;text-transform:uppercase;letter-spacing:2px;font-weight:bold;margin:32px 0 12px 0;">Detalles de la solicitud</div>',
    '<table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-top:1px solid #e2e8f0;margin:0 0 28px 0;">',
    '<tr><td style="padding:12px 0;font-size:12px;color:#64748b;text-transform:uppercase;letter-spacing:1px;width:40%;border-bottom:1px solid #e2e8f0;">Objeto</td>',
    '<td style="padding:12px 0;font-size:13px;color:#0f172a;font-weight:bold;border-bottom:1px solid #e2e8f0;">Demostración de producto</td></tr>',
    '<tr><td style="padding:12px 0;font-size:12px;color:#64748b;text-transform:uppercase;letter-spacing:1px;border-bottom:1px solid #e2e8f0;">Duración</td>',
    '<td style="padding:12px 0;font-size:13px;color:#0f172a;font-weight:bold;border-bottom:1px solid #e2e8f0;">30 minutos</td></tr>',
    '<tr><td style="padding:12px 0;font-size:12px;color:#64748b;text-transform:uppercase;letter-spacing:1px;border-bottom:1px solid #e2e8f0;">Plazo de contacto</td>',
    '<td style="padding:12px 0;font-size:13px;color:#0f172a;font-weight:bold;border-bottom:1px solid #e2e8f0;">Máximo 24 horas laborables</td></tr>',
    '<tr><td style="padding:12px 0;font-size:12px;color:#64748b;text-transform:uppercase;letter-spacing:1px;">Modalidad</td>',
    '<td style="padding:12px 0;font-size:13px;color:#0f172a;font-weight:bold;">Videoconferencia (Microsoft Teams)</td></tr>',
    '</table>',
    '<p style="font-size:14px;color:#334155;line-height:1.7;margin:24px 0 6px 0;">Para cualquier consulta previa o aclaración adicional, puede responder directamente a este correo electrónico.</p>',
    '<p style="font-size:14px;color:#334155;line-height:1.7;margin:24px 0 6px 0;">Agradecemos su interés en Next Reporting y quedamos a su entera disposición.</p>',
    '<div style="margin:28px 0 0 0;padding:20px 0 0 0;border-top:1px solid #e2e8f0;">',
    '<div style="font-size:14px;color:#0f172a;font-weight:bold;">Información de contacto</div>',
    '<div style="font-size:12px;color:#64748b;margin-top:4px;">Para cualquier consulta escríbanos a <a href="mailto:info@atebiz.com" style="color:#059669;text-decoration:none;font-weight:bold;">info@atebiz.com</a></div>',
    '</div></td></tr>',
    '<tr><td style="background:#0f172a;padding:28px 44px;">',
    '<table cellpadding="0" cellspacing="0" border="0"><tr>',
    '<td style="padding-right:16px;vertical-align:middle;"><img src="https://i.postimg.cc/hjXchPDC/logo-3.png" alt="Next Reporting" width="54" style="display:block;border:0;height:auto;max-width:54px;max-height:54px;width:auto;"/></td>',
    '<td style="vertical-align:middle;">',
    '<div style="font-size:11px;color:#ffffff;font-weight:bold;letter-spacing:2px;text-transform:uppercase;margin-bottom:8px;">Next Reporting - By Next Finance</div>',
    '<div style="font-size:11px;color:#94a3b8;margin-bottom:3px;">Reporting and Analysis - Consolidacion y Analisis Financiero</div>',
    '<div style="font-size:11px;color:#94a3b8;margin-bottom:3px;">Madrid - Copenhague</div>',
    '<div style="font-size:11px;color:#94a3b8;">Idiomas: ES - PT - EN - DA</div>',
    '</td></tr></table>',
    '</td></tr>',
    '</table></td></tr></table></body></html>'
  ].join('');
  return html;
}

export function DemoForm({ t, onSuccess }) {
  const f = t.finalCta.form;
  const [form, setForm] = useState({ name: "", lastName: "", email: "", role: "", company: "", city: "", countryCode: "+34", phone: "", message: "" });
  const [customRole, setCustomRole] = useState("");
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.lastName || !form.email || !form.role || !form.company) {
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
      const finalRole =
        form.role === t.finalCta.roles[5] ? customRole.trim() : form.role;
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "8144f96b-b1eb-453e-a509-7a157eb77423",
          subject: `Nueva solicitud de demo - ${form.name}${form.company ? ` (${form.company})` : ""}`,
          from_name: "Next Reporting - Formulario web",
          replyto: form.email,
          Nombre: form.name,
          Apellido: form.lastName,
          Email: form.email,
          Rol: finalRole,
          Empresa: form.company,
          Ciudad: form.city || "(no indicada)",
          Telefono: form.phone ? `${form.countryCode} ${form.phone}` : "(no indicado)",
          Mensaje: form.message || "(sin mensaje)",
        }),
      });
      const data = await response.json();
      if (!data.success) {
        throw new Error(data.message || f.errorGeneric);
      }
      try {
        const emailjsResponse = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            service_id: "service_d1awlag",
            template_id: "template_88b0rdg",
            user_id: "WzqbYL3YsjFD9zhiK",
            template_params: {
              email: form.email,
              name: form.name,
              to_email: form.email,
              to_name: form.name,
              message_html: buildAutoReplyHtml(form.name),
            },
          }),
        });
        const emailjsText = await emailjsResponse.text();
        console.log("[EmailJS] status:", emailjsResponse.status);
        console.log("[EmailJS] response:", emailjsText);
        if (!emailjsResponse.ok) {
          console.error("[EmailJS] FALLO:", emailjsText);
        } else {
          console.log("[EmailJS] Auto-reply enviado a", form.email);
        }
      } catch (emailErr) {
        console.error("[EmailJS] Error de red:", emailErr);
      }
      setStatus("success");
      onSuccess?.();
    } catch (err) {
      setError(err?.message || f.errorGeneric);
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
      className="bg-white rounded-2xl border border-mint/15 p-6 shadow-[0_20px_60px_-15px_rgba(6,78,59,0.15)]"
    >
      <h3 className="text-ink font-bold text-lg mb-1">{f.title}</h3>
      <p className="text-ink-soft/50 text-[13px] mb-4">
        {f.subtitle}
      </p>
      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
              {f.lastNameLabel}
            </label>
            <input
              type="text"
              value={form.lastName}
              onChange={(e) => setForm({ ...form, lastName: e.target.value })}
              placeholder={f.lastNamePlaceholder}
              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-indigo focus:ring-2 focus:ring-indigo/10 outline-none transition-all text-[15px] text-ink placeholder:text-gray-300"
              disabled={status === "submitting"}
            />
          </div>
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
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-[13px] font-medium text-ink-soft mb-1.5">
              {f.companyLabel}
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
          <div>
            <label className="block text-[13px] font-medium text-ink-soft mb-1.5">
              {f.cityLabel} <span className="text-gray-300">{f.cityOptional}</span>
            </label>
            <input
              type="text"
              value={form.city}
              onChange={(e) => setForm({ ...form, city: e.target.value })}
              placeholder={f.cityPlaceholder}
              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-indigo focus:ring-2 focus:ring-indigo/10 outline-none transition-all text-[15px] text-ink placeholder:text-gray-300"
              disabled={status === "submitting"}
            />
          </div>
        </div>
        <div>
          <label className="block text-[13px] font-medium text-ink-soft mb-1.5">
            {f.phoneLabel} <span className="text-gray-300">{f.phoneOptional}</span>
          </label>
          <div className="flex gap-2">
            <select
              value={form.countryCode}
              onChange={(e) => setForm({ ...form, countryCode: e.target.value })}
              className="px-3 py-2.5 rounded-xl border border-gray-200 focus:border-indigo focus:ring-2 focus:ring-indigo/10 outline-none transition-all text-[15px] text-ink bg-white"
              disabled={status === "submitting"}
              style={{ maxWidth: "140px" }}
            >
              {COUNTRIES.map((c) => (
                <option key={c.code} value={c.prefix}>
                  {c.flag} {c.prefix}
                </option>
              ))}
            </select>
            <input
              type="tel"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              placeholder={f.phonePlaceholder}
              className="flex-1 px-4 py-2.5 rounded-xl border border-gray-200 focus:border-indigo focus:ring-2 focus:ring-indigo/10 outline-none transition-all text-[15px] text-ink placeholder:text-gray-300"
              disabled={status === "submitting"}
            />
          </div>
        </div>

        <div>
          <label className="block text-[13px] font-medium text-ink-soft mb-1.5">
            Mensaje <span className="text-gray-300">(opcional)</span>
          </label>
          <textarea
            rows={2}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            placeholder="Cuentanos algo más si quieres (numero de sociedades, contexto dudas etc.)"
            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-indigo focus:ring-2 focus:ring-indigo/10 outline-none transition-all text-[15px] text-ink placeholder:text-gray-300 resize-none"
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

export default function FinalCTA({ startWithForm = false }) {
  const { t } = useI18n();
  const fc = t.finalCta;
  const [showForm, setShowForm] = useState(startWithForm);

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
              className="max-w-3xl mx-auto text-left"
            >
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-indigo transition-colors mb-4 font-semibold"
              >
                ← Volver
              </button>
              <DemoForm t={t} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
