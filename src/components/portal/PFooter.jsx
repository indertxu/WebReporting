import React, { useState } from "react";
import { useI18n } from "@/lib/i18n";
import LegalModal from "@/components/landing/LegalModal";

/** Pie del portal: los mismos textos y avisos legales que el pie del sitio, en oscuro. */
export default function PFooter() {
  const { t } = useI18n();
  const ft = t.footer;
  const [modal, setModal] = useState(null);
  const cols = [ft.columns?.[3], ft.columns?.[2]].filter(Boolean);
  return (
    <>
      <footer className="pt-footer">
        <div className="pt-in">
          <div>
            <div className="pt-brand" style={{ padding: 0 }}>
              <img src="/favicon.svg" alt="" />
              <span><b>Next Reporting</b><small>by Next Finance</small></span>
            </div>
            <p>{ft.tagline}</p>
          </div>
          {cols.map((col) => (
            <div key={col.title}>
              <h4>{col.title}</h4>
              <ul>
                {col.links.map((l, i) => (
                  <li key={i}>
                    {l.type === "mail" ? <a href={`mailto:${l.email}`}>{l.email}</a>
                      : l.type === "modal" ? <button type="button" onClick={() => setModal(l.modal)}>{l.label} →</button>
                      : <span>{l.label ?? l}</span>}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="bot"><span>{ft.copyright}</span><span>{ft.builtFor}</span></div>
      </footer>
      <LegalModal open={modal !== null} type={modal} onClose={() => setModal(null)} />
    </>
  );
}
