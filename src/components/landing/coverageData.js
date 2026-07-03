// Shared SVG world map data for the coverage section
// viewBox: 760 x 560 — focuses on Europe, Africa, and South America

export const MAP_VIEWBOX = "0 0 760 560";

export const CONTINENTS = [
  // South America
  "M 120 260 C 105 272, 100 292, 108 312 C 100 332, 105 358, 118 380 C 125 405, 138 432, 155 452 C 168 472, 185 482, 198 475 C 210 463, 214 442, 207 415 C 220 392, 226 370, 220 342 C 226 320, 232 298, 225 270 C 218 254, 200 246, 178 244 C 155 242, 138 250, 120 260 Z",
  // Africa
  "M 385 168 C 368 174, 358 190, 360 212 C 352 234, 356 260, 368 286 C 374 312, 386 334, 402 350 C 418 360, 434 354, 444 338 C 454 316, 458 290, 456 262 C 462 236, 460 208, 452 188 C 440 172, 418 162, 402 160 C 394 160, 389 164, 385 168 Z",
  // Europe mainland
  "M 478 112 C 466 118, 460 130, 466 142 C 472 154, 490 160, 508 156 C 524 152, 540 144, 550 132 C 556 120, 552 108, 542 102 C 524 94, 506 98, 490 104 C 482 107, 480 109, 478 112 Z",
  // Iberian Peninsula (Spain + Portugal)
  "M 395 145 C 383 150, 378 163, 385 175 C 392 188, 430 195, 460 192 C 485 188, 500 175, 495 160 C 487 148, 465 142, 430 143 C 415 143, 403 144, 395 145 Z",
  // Scandinavia (Denmark)
  "M 520 62 C 513 70, 510 84, 516 94 C 525 100, 538 96, 544 82 C 548 72, 544 62, 535 58 C 528 57, 524 59, 520 62 Z",
  // British Isles (for context)
  "M 442 108 C 436 114, 436 124, 442 130 C 450 132, 456 126, 456 116 C 454 108, 448 105, 442 108 Z",
];

// Translatable text (name, label, sublabel, speed) is in src/lib/translations.js under coverage.countries
export const COUNTRIES = [
  { id: "es", entities: "120+", currency: "EUR", cx: 478, cy: 168, r: 8, type: "hq" },
  { id: "pt", entities: "35+", currency: "EUR", cx: 400, cy: 176, r: 6, type: "hub" },
  { id: "latam", entities: "85+", currency: "Multi", cx: 168, cy: 345, r: 7, type: "hub" },
  { id: "dk", entities: "20+", currency: "DKK", cx: 533, cy: 78, r: 5, type: "partner" },
];

export const CLIENT_DOTS = [
  // South America clients
  { cx: 135, cy: 290 }, { cx: 150, cy: 310 }, { cx: 165, cy: 340 },
  { cx: 175, cy: 370 }, { cx: 170, cy: 400 }, { cx: 185, cy: 425 },
  { cx: 200, cy: 430 }, { cx: 195, cy: 380 }, { cx: 180, cy: 360 },
  { cx: 195, cy: 410 },
  // Iberia clients
  { cx: 410, cy: 158 }, { cx: 420, cy: 170 }, { cx: 415, cy: 185 },
  { cx: 455, cy: 160 }, { cx: 470, cy: 170 }, { cx: 465, cy: 182 },
  { cx: 485, cy: 175 }, { cx: 440, cy: 155 },
  // Scandinavia clients
  { cx: 525, cy: 72 }, { cx: 538, cy: 82 },
];

// Connection line: Spain → Portugal → South America
export const CONNECTION_PATH = "M 478 168 L 400 176 Q 280 260 168 345";
// Connection line: Spain → Denmark
export const CONNECTION_DK = "M 478 168 Q 500 120 533 78";