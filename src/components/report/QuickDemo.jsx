import React, { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { sendDemoRequest } from "@/components/landing/FinalCTA";
import { useLanding } from "./shared";

/** Un campo y un botón. Al pulsar, pide solo lo imprescindible (nombre, empresa, rol) y envía
 *  por el mismo circuito que el formulario completo de /solicitar-demo. */
export default function QuickDemo({ id }) {
  const { c } = useLanding();
  const { t } = useI18n();
  const f = c.form;
  const roles = t.finalCta?.roles || [];
  const [paso, setPaso] = useState(1);
  const [estado, setEstado] = useState("idle");
  const [error, setError] = useState("");
  const [d, setD] = useState({ email: "", name: "", lastName: "", company: "", role: "" });
  const set = (k) => (e) => setD({ ...d, [k]: e.target.value });

  const enviar = async (e) => {
    e.preventDefault();
    setError("");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email)) return setError(f.errEmail);
    if (paso === 1) return setPaso(2);
    if (!d.name || !d.lastName || !d.company || !d.role) return setError(f.errFields);
    setEstado("yendo");
    try {
      await sendDemoRequest({ ...d, city: "", countryCode: "", phone: "", message: "Solicitud desde la portada (formulario rápido)" }, f.errGeneric);
      setEstado("ok");
    } catch {
      setEstado("idle");
      setError(f.errGeneric);
    }
  };

  if (estado === "ok") {
    return (
      <div className="nr-gracias" role="status">
        <CheckCircle2 size={20} style={{ flex: "none", color: "var(--bien)", marginTop: 1 }} />
        <span><b>{f.okTitle}</b>{f.okBody} <a href="https://calendly.com/next-finance/demo" target="_blank" rel="noopener noreferrer">{f.okLink} →</a></span>
      </div>
    );
  }

  return (
    <form id={id} className="nr-pedir" onSubmit={enviar} noValidate>
      <input type="email" aria-label="Email" placeholder={f.email} value={d.email} onChange={set("email")} autoComplete="email" />
      {paso === 1 && <button className="btn" type="submit">{f.cta} <span className="fl">→</span></button>}
      {paso === 2 && (
        <div className="mas">
          <span className="ancho" style={{ fontSize: 13.5, color: "var(--tinta2)" }}>{f.step2}</span>
          <input aria-label={f.name} placeholder={f.name} value={d.name} onChange={set("name")} autoComplete="given-name" autoFocus />
          <input aria-label={f.lastName} placeholder={f.lastName} value={d.lastName} onChange={set("lastName")} autoComplete="family-name" />
          <input aria-label={f.company} placeholder={f.company} value={d.company} onChange={set("company")} autoComplete="organization" />
          <select aria-label={f.rolePh} value={d.role} onChange={set("role")}>
            <option value="">{f.rolePh}</option>
            {roles.map((r) => <option key={r}>{r}</option>)}
          </select>
          <button className="btn ancho" type="submit" disabled={estado === "yendo"}>{estado === "yendo" ? f.sending : f.send} <span className="fl">→</span></button>
        </div>
      )}
      {error && <div className="nr-fallo" role="alert">{error}</div>}
    </form>
  );
}
