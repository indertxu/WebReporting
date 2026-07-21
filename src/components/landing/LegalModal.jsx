import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Download } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export default function LegalModal({ open, type, onClose }) {
  const { t } = useI18n();
  if (!type) return null;

  const content = t.legal[type];

  const handleDownload = async () => {
    const container = document.createElement("div");
    container.style.cssText = "position:absolute;left:-9999px;top:0;width:800px;padding:40px;background:#fff;font-family:Inter,Arial,sans-serif;color:#0f172a;";
    const sectionsHtml = content.sections
      .map((s) => {
        const paras = String(s.body)
          .split("\n\n")
          .map((p) => `<p style="margin:0 0 12px 0;line-height:1.7;font-size:13px;color:#334155;">${p.replace(/\n/g, "<br/>")}</p>`)
          .join("");
        return `<section style="margin:20px 0;page-break-inside:avoid;"><h2 style="color:#4f46e5;font-size:15px;margin:0 0 8px 0;font-weight:700;">${s.heading || ""}</h2>${paras}</section>`;
      })
      .join("");
    container.innerHTML = `
      <h1 style="color:#0f172a;font-size:24px;border-bottom:2px solid #4f46e5;padding-bottom:10px;margin:0 0 6px 0;font-weight:800;">${content.title}</h1>
      <div style="color:#64748b;font-family:monospace;font-size:10px;letter-spacing:1.5px;text-transform:uppercase;margin-bottom:20px;">${content.updated || ""}</div>
      ${sectionsHtml}
      <div style="margin-top:30px;padding-top:16px;border-top:1px solid #e5e7eb;color:#94a3b8;font-size:11px;">Next Reporting · by Next Finance · info@atebiz.com</div>
    `;
    document.body.appendChild(container);
    try {
      const canvas = await html2canvas(container, { scale: 2, backgroundColor: "#ffffff", useCORS: true });
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = pageWidth;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;
      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
      while (heightLeft > 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }
      const fileName = `${content.title.replace(/[^\w\s-]/g, "").replace(/\s+/g, "_")}.pdf`;
      pdf.save(fileName);
    } finally {
      document.body.removeChild(container);
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl max-w-3xl w-full max-h-[85vh] overflow-hidden shadow-2xl flex flex-col"
          >
            <div className="flex items-center justify-between px-8 py-5 border-b border-gray-100">
              <h2 className="text-ink font-bold text-xl">{content.title}</h2>
              <button
                onClick={onClose}
                className="w-9 h-9 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors"
              >
                <X size={18} className="text-gray-500" />
              </button>
            </div>

            <div className="overflow-y-auto px-8 py-6 space-y-5 text-[14.5px] text-ink-soft leading-relaxed">
              {content.sections.map((section, i) => (
                <div key={i}>
                  {section.heading && (
                    <h3 className="text-ink font-semibold text-[15px] mb-2">
                      {section.heading}
                    </h3>
                  )}
                  {section.body.split("\n\n").map((para, j) => (
                    <p key={j} className="mb-2 last:mb-0">
                      {para}
                    </p>
                  ))}
                </div>
              ))}

              {content.updated && (
                <p className="font-mono text-[11px] text-gray-400 tracking-wider pt-4 border-t border-gray-100">
                  {content.updated}
                </p>
              )}
            </div>

            <div className="px-8 py-4 border-t border-gray-100 bg-gray-50/50 flex justify-end gap-3">
              <button
                onClick={handleDownload}
                className="inline-flex items-center gap-2 bg-white border border-mint/40 hover:border-indigo text-ink hover:text-indigo font-semibold text-[13px] px-5 py-2.5 rounded-lg transition-colors"
              >
                <Download size={15} />
                Descargar
              </button>
              <button
                onClick={onClose}
                className="bg-ink hover:bg-indigo text-white font-semibold text-[13px] px-5 py-2.5 rounded-lg transition-colors"
              >
                {content.closeButton}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}