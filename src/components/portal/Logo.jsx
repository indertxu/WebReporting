import React from "react";

/** El cubo de Next Reporting, en SVG de verdad (mismo dibujo que favicon.svg).
 *  Sus tres caras son piezas sueltas: al pasar el ratón se separan un poco,
 *  la línea de tendencia se vuelve a dibujar y las barras crecen. */
export function BrandMark({ size = 36 }) {
  return (
    <svg className="nr-cube" width={size} height={size} viewBox="10 10 100 100" aria-hidden>
      <g className="f f-top">
        <g transform="matrix(1,0.5,-1,0.5,60,17)">
          <rect width="38" height="38" rx="2" fill="#86efc0" />
          <polyline className="trend" points="7,30 15,19 22,24 31.7,10.1" pathLength="1" fill="none" stroke="#0a6f4d" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
          <polygon className="tip" points="36,4 35.1,12.5 28.2,7.7" fill="#0a6f4d" />
        </g>
      </g>
      <g className="f f-left">
        <g transform="translate(16,47) skewY(26.565)">
          <rect width="38" height="40" rx="2" fill="#12b57f" />
          <text x="19" y="30" textAnchor="middle" fill="#ffffff" fontFamily="Arial, Helvetica, sans-serif" fontWeight="700" fontSize="27">N</text>
        </g>
      </g>
      <g className="f f-right">
        <g transform="translate(66,66) skewY(-26.565)">
          <rect width="38" height="40" rx="2" fill="#0a6f4d" />
          <rect className="bar b1" x="6" y="24" width="6" height="11" rx="1.5" fill="#ffffff" />
          <rect className="bar b2" x="16" y="16" width="6" height="19" rx="1.5" fill="#ffffff" />
          <rect className="bar b3" x="26" y="8" width="6" height="27" rx="1.5" fill="#ffffff" />
        </g>
      </g>
    </svg>
  );
}

/** Cubo + nombre. */
export default function Logo({ sub = "by Next Finance" }) {
  return (
    <span className="nr-logo">
      <BrandMark />
      <span className="nr-logo-t"><b>Next <em>Reporting</em></b><small>{sub}</small></span>
    </span>
  );
}
