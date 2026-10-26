// Forsidens indhold (da). Ord mellem *stjerner* vises i brandets grønne farve.
export default {
  nav: {
    links: [
      { label: "Prøv den", id: "producto" },
      { label: "Data", id: "datos" },
      { label: "Skærme", id: "pantallas" },
      { label: "Planer", id: "planes" },
      { label: "FAQ", id: "faq" },
    ],
    signIn: "Log ind",
    demo: "Book demo",
  },
  hero: {
    eyebrow: "Finansiel rapportering · Koncerner med flere selskaber",
    title: "Koncernens lukning,",
    typing: ["på timer, ikke dage.", "uden kopier og indsæt.", "fra konsolideret tal til postering.", "med ECB-kurserne på plads."],
    subLead: "Uden et regneark imellem.",
    sub: "Next Reporting modtager hvert selskabs regnskab, afstemmer det, omregner det til koncernvalutaen og giver det tilbage som ledelsesrapporter, KPI'er og præsentationer.",
    note: "En demo på 30 minutter med jeres egne tal. Vi svarer inden for 24 timer.",
    noteLink: "Se planerne",
    invite: "Det her er Next Reporting. Prøv den.",
  },
  form: {
    email: "dig@virksomhed.dk",
    cta: "Book jeres demo",
    step2: "To oplysninger mere, så skriver vi i dag.",
    name: "Fornavn",
    lastName: "Efternavn",
    company: "Virksomhed",
    rolePh: "Din rolle",
    send: "Send",
    sending: "Sender…",
    okTitle: "Klaret. Vi skriver til dig i dag.",
    okBody: "Du får en bekræftelse på e-mail. Vil du vælge et tidspunkt nu?",
    okLink: "Vælg tidspunkt",
    errEmail: "Skriv en gyldig e-mail.",
    errFields: "Udfyld fornavn, efternavn, virksomhed og rolle.",
    errGeneric: "Det kunne ikke sendes. Skriv til info@atebiz.com.",
  },
  window: {
    title: "Resultatopgørelse",
    path: "norvia-koncern / dec-2025",
    views: { res: "Resultat", cmp: "Sammenlign", dim: "Dimensioner", soc: "Selskaber" },
    group: "Koncern (konsolideret)",
    sections: { A: "Omsætning", B: "Vareforbrug", C: "Driftsomkostninger" },
    calc: { GM: "Bruttoavance", EBIT: "Driftsresultat" },
    colNow: "Dec 25", colPrior: "Dec 24", colDiff: "Diff.", colPct: "%",
    dims: ["Salg", "Drift", "Fælles"],
    contribution: "af koncernen",
    local: "i egen valuta",
    rate: "gns.-kurs",
    feed: [
      { tone: "bien", t: "Norvia UK indlæste december · 1.284 rækker · stemmer", ago: "for 2 min siden" },
      { tone: "info", t: "ECB-kurser for december opdateret", ago: "for 9 min siden" },
      { tone: "avi", t: "Norvia Inc. har endnu ikke indlæst december", ago: "advarsel" },
      { tone: "bien", t: "Gemt mapping anvendt på kladde_dec25.xlsx", ago: "for 14 min siden" },
    ],
    clickHint: "Tryk på en konto, så viser vi, hvor den kommer fra",
    drawerTitle: "Datasporet",
    drawerUpload: "Indlæsning",
    drawerJournals: "Reguleringer",
    drawerElim: "Koncerninterne elimineringer",
    drawerRound: "Afrunding",
    drawerFoot: "Sådan virker produktet: ethvert konsolideret beløb kan foldes ud til den lokale linje eller posteringen. Eksempeldata.",
  },
  sources: {
    eyebrow: "Sådan kommer data ind",
    title: "Jeres lukning bygger sig selv.",
    lead: "Ingen har tid til at genopbygge tolv selskabers regnskaber i hånden. Next Reporting henter dem, hvor de allerede er, og det, der ikke stemmer, fortæller den jer; den gætter ikke.",
    items: [
      { icon: "k", name: "Konsolidator", body: "Læser konsolideringen som den er, uden eksport eller import.", plans: ["Base", "Pro", "Enterprise"] },
      { icon: "xls", name: "Jeres Excel eller CSV", body: "Præcis som den kommer fra ERP'et. Ingen skabelon: guiden forstår kolonnerne.", plans: ["Pro", "Enterprise"] },
      { icon: "api", name: "API'et", body: "Jeres ERP sender data til ét endpoint, og de gemmes med det samme.", plans: ["Pro", "Enterprise"] },
      { icon: "dwh", name: "Jeres Data Warehouse", body: "Direkte forbindelse helt ned til transaktionen.", plans: ["Enterprise"] },
    ],
    destTitle: "Jeres lukning, bygget",
    destBody: "Resultatopgørelse, balance, KPI'er, likviditet og præsentationer. For koncernen eller hvert selskab.",
  },
  questions: {
    eyebrow: "Hver lukning",
    title: "Tre spørgsmål, *hver måned.*",
    lead: "En økonomidirektør stiller de samme tre ved hver lukning. Next Reporting findes for at besvare dem uden at åbne fire regneark.",
    items: [
      { k: "01 · Hvordan går det", title: "Koncernen på ét blik", body: "Omsætning, EBITDA, EBIT og resultat mod sidste måned eller sidste år. For koncernen, et holdingselskab eller et selskab, månedligt eller år til dato." },
      { k: "02 · Hvad stemmer ikke", title: "Det I ikke bør godkende", body: "Selskabet der ikke har indlæst, den gentagne fil, debet der ikke matcher kredit, kontoen uden mapping. Før det når rapporten." },
      { k: "03 · Hvor kommer det fra", title: "Hvert tal med sin kilde", body: "Tryk på et beløb og bor ned til den lokale konto og posteringen: dato, nummer, tekst, modpart og dimensioner." },
    ],
  },
  auto: {
    eyebrow: "Automatisk som standard",
    title: "Automatik er ikke en knap: *den tager det beskidte arbejde.*",
    lead: "En tom rapport hjælper ingen, og ingen har tid til at udfylde den i hånden. Her foreslår guiden *altid*, og intet kommer ind i jeres data, før en person har godkendt det.",
    items: [
      { k: "Læser", title: "Jeres fil, som den er", body: "Finder arkene, overskriftsrækken og hvilken kolonne der er selskab, konto, beløb, modpart og dimensioner." },
      { k: "Afstemmer", title: "Før der gemmes", body: "Debet og kredit pr. selskab, manglende måneder, gentagne filer, dublerede posteringer og saldi blandet med bevægelser." },
      { k: "Husker", title: "Kun én gang", body: "Mappingen gemmes. Næste gang en fil med samme format kommer, anvendes den automatisk." },
    ],
    file: "kladde_dec25_NorviaUK.xlsx",
    rows: [
      ["Dato", "Konto", "Tekst", "Debet", "Kredit", "OS"],
      ["01/12", "700000", "Indenlandsk salg", "", "18.420,00", "SAL"],
      ["03/12", "705900", "Ydelser Norvia SA", "", "6.200,00", "DRI"],
      ["05/12", "640000", "Løn december", "41.380,00", "", "FÆL"],
      ["09/12", "621000", "Husleje kontor", "3.950,00", "", "FÆL"],
    ],
    read: "Læs filen",
    again: "Igen",
    hint: "guiden foreslår · I godkender",
    fields: [
      ["Ark", "Kladde dec"],
      ["Overskrifter", "Række 4"],
      ["Selskab", "Norvia UK Ltd · GBP"],
      ["Konto", "Kolonne B · 214 konti"],
      ["Beløb", "Debet og Kredit"],
      ["Dimension", "OS → Omkostningssted"],
    ],
    ok: "Debet = Kredit · 1.284 rækker · 3 nye konti · mapping gemt",
  },
  money: {
    eyebrow: "Valutaer",
    title: "Flere valutaer, *hver til sin kurs.*",
    lead: "En koncern med selskaber i euro, pund og dollar er det normale. At lægge dem forkert sammen er også. Her ved hvert beløb, hvilken kurs det blev omregnet til, og hvor kursen kom fra.",
    items: [
      { k: "Balance", title: "Til lukkekurs", body: "Hvert selskabs balance omregnes til kursen på månedens sidste dag. Og I kan se den for hvert selskab." },
      { k: "Resultat", title: "Til gennemsnitskurs", body: "Resultatopgørelsen til månedens og år-til-dato-gennemsnittet. Omregningsdifferencer beregnes." },
      { k: "Ingen søgning", title: "Kurserne udfyldes selv", body: "Hentes fra Den Europæiske Centralbank ved indlæsning, med dato og kilde. Offentliggøres en valuta ikke, fra investing.com." },
    ],
    fx: [["Valuta", "Lukke", "Gns."], ["EUR/GBP", "0,8612", "0,8590"], ["EUR/USD", "1,0853", "1,0791"], ["EUR/DKK", "7,4589", "7,4577"]],
    fxNote: "Eksempel",
  },
  today: {
    eyebrow: "Ingen løfter",
    title: "Det I kan *gøre i dag.*",
    lead: "Ikke en liste over intentioner: det her er bygget og virker.",
    cols: [
      [
        ["Træk ERP'ets Excel ind", ", og guiden forstår den uden skabelon."],
        ["Forbind jeres ERP via API", " med virksomhedsnøgle og personligt token."],
        ["Få ECB-kurserne", " hver måned uden at slå dem op."],
        ["Aggreger koncernen", " med koncerninterne elimineringer og valutaomregning."],
      ],
      [
        ["Sammenlign op til fire perioder", " side om side, med afvigelse i beløb og %."],
        ["Bor fra total til postering", " fra ethvert tal."],
        ["KPI'er der bygger sig selv", " på jeres kontoplan, og jeres egne med en guide."],
        ["Indirekte og direkte pengestrøm", ", kontrolleret mod likvider."],
      ],
      [
        ["Live præsentationer", ": skift periode med ét klik og eksportér til .pptx."],
        ["Noter efter PGC eller IFRS-EU", ", der udfylder og afstemmer sig selv."],
        ["Map jeres lokale kontoplan til koncernens", " én gang, med gyldighedsdatoer."],
        ["Giv hver bruger deres sider", ", selskaber og dimensioner, intet andet."],
      ],
    ],
  },
  audience: {
    eyebrow: "Til hvem",
    title: "Koncerner der *lukker hver måned.*",
    lead: "Flere selskaber, flere valutaer, flere kontoplaner. Og en, der skal forklare det hele på dag fem.",
    items: [
      { icon: "cfo", title: "Økonomiledelse", body: "Koncernens måned på én skærm og bestyrelsespakken klar." },
      { icon: "ctl", title: "Controllere", body: "Sammenligninger, dimensioner og KPI'er uden at genopbygge arket hver måned." },
      { icon: "cons", title: "Konsolideringsteams", body: "Indlæsninger der validerer sig selv og et spor, der forklarer hver eliminering." },
      { icon: "desp", title: "Rådgivere", body: "Jeres kunders rapporter i deres farver og på deres sprog." },
    ],
  },
  screens: {
    eyebrow: "Skærme",
    title: "Sådan ser den ud, *helt ærligt.*",
    lead: "Ingen mock-ups: det er skærmbilleder fra produktet. Vælg et.",
    items: [
      { id: "home", icon: "home", tab: "Forside", short: "Koncernens måned", title: "Koncernens måned på én skærm", body: "De vigtigste KPI'er med afvigelse, udvikling, rangering af selskaber og færdige opdelinger. Åbner i seneste måned med data.", img: "/report/home.webp", alt: "Next Reportings forside med koncernens KPI'er" },
      { id: "compare", icon: "cols", tab: "Sammenligning", short: "Op til fire perioder", title: "Fire perioder side om side", body: "Faktisk mod sidste måned, sidste år og budget, med afvigelser i beløb og %. Og alt kan stadig bores ned i.", img: "/report/comparison.webp", alt: "Sammenligning af fire perioder" },
      { id: "kpis", icon: "kpi", tab: "KPI'er", short: "Nøgletal med status", title: "Nøgletal der bygger sig selv", body: "Likviditet, soliditet, rentabilitet, effektivitet og marked på jeres kontoplan, med farvebånd.", img: "/report/kpis.webp", alt: "KPI-oversigt pr. selskab" },
      { id: "dimensions", icon: "dim", tab: "Dimensioner", short: "Omkostningssteder", title: "Pr. afdeling, projekt eller omkostningssted", body: "En kolonne pr. dimension og et heatmap konto × dimension til at bore ned.", img: "/report/dimensions.webp", alt: "Dimensionsside" },
      { id: "cashflow", icon: "cash", tab: "Pengestrøm", short: "Pr. selskab", title: "En pengestrøm pr. selskab", body: "Indirekte og, med egne data, direkte. Flere måneder og selskaber på én gang, kontrolleret mod likvider.", img: "/report/cashflow.webp", alt: "Pengestrøm pr. selskab" },
      { id: "trail", icon: "trail", tab: "Konsolideret", short: "Ark og spor", title: "Konsolideringsarket, forklaret", body: "Hvert selskabs bidrag, reguleringer og elimineringer. Datasporet følger ethvert beløb til kilden.", img: "/report/consolidation-sheet.webp", alt: "Konsolideringsark" },
      { id: "mapper", icon: "map", tab: "Mappings", short: "Lokal → koncern", title: "Jeres lokale kontoplan i koncernens", body: "Træk hvert selskabs konti over på koncernens linjer. PGC, SNC, IFRS og IFRS 18.", img: "/report/mapper.webp", alt: "Kontomapper" },
      { id: "decks", icon: "deck", tab: "Præsentationer", short: "Bestyrelsen, klar", title: "Næste måneds præsentation med ét klik", body: "KPI'er, grafer og konsolideringsarket på slides, der læser data, når de åbnes. Eksport til .pptx.", img: "/report/deck-editor.webp", alt: "Præsentationseditor" },
      { id: "memory", icon: "memo", tab: "Noter", short: "PGC · IFRS-EU", title: "Noter der afstemmer sig selv", body: "Bevægelsestabeller der stemmer, hvert tal fortæller hvor det kommer fra, og eksport til Word, PDF og Excel.", img: "/report/memory-movements.webp", alt: "Note med bevægelsestabel" },
    ],
    demoCta: "Se den med mine data",
  },
  plans: {
    eyebrow: "Planer",
    title: "I vælger, hvor *jeres data kommer ind.*",
    lead: "Rapporterne er de samme i alle planer. Det, der ændrer sig, er hvor Next Reporting læser fra, og hvor dybt den går.",
    steps: [
      { t: "En demo med jeres tal", b: "Tag ét selskabs Excel med og se den indlæst, afstemt og i en rapport." },
      { t: "Vælg plan", b: "Ud fra hvor jeres data ligger i dag: Konsolidator, jeres filer eller jeres Data Warehouse." },
      { t: "Første lukning indeni", b: "Vi sætter struktur og mappings op sammen med jer, og næste lukning kommer herfra." },
    ],
    ask: "Konsoliderer I i Konsolidator?",
    options: ["Ja", "Ja, og også egne data", "Nej"],
    recommend: { 0: "base", 1: "enterprise", 2: "pro" },
    badge: "Passer til jer",
    price: "Pris",
    priceValue: "efter behov",
    items: [
      { id: "base", name: "Base", who: "Til koncerner der allerede konsoliderer i Konsolidator.", source: "Læser fra Konsolidator", features: ["Individuel og konsolideret", "Konsolideringsark og datasporet", "KPI'er, dimensioner og pengestrøm", "Præsentationer og noter", "Rettigheder pr. bruger og side"], cta: "Få en pris" },
      { id: "pro", name: "Pro", who: "Til koncerner der indlæser egne data og vil have deres egen struktur.", source: "Konsolidator eller jeres filer og API", features: ["Alt i Base", "Excel/CSV-guide og API", "Historik med kontroller", "Automatiske ECB-kurser", "Aggregater med koncerninterne elimineringer", "Koncernstruktur-studie"], cta: "Få en pris" },
      { id: "enterprise", name: "Enterprise", who: "Konsolideringen og detaljen ned til transaktionen, samlet.", source: "Konsolidator + jeres data + Data Warehouse", features: ["Alt i Pro", "Konsolidator og egne data på én gang", "Direkte forbindelse til jeres Data Warehouse", "Fra konsolideret tal til den oprindelige postering", "Guidet opstart"], cta: "Lad os tale sammen" },
    ],
    extras: [
      { name: "Low", text: "Skal I kun slå op? Basal adgang til rapporter på jeres Konsolidator-data." },
      { name: "Max", text: "Stor koncern eller store mængder? Alt i Pro, uden begrænsninger." },
    ],
    compareTitle: "Se den fulde sammenligning",
    compareOpen: "åbn",
    matrix: [
      ["Konsolidator som kilde", true, true, true],
      ["Excel eller CSV med guide", false, true, true],
      ["Upload-API", false, true, true],
      ["Konsolidator og egne data på én gang", false, "Det ene eller andet", true],
      ["Forbindelse til Data Warehouse", false, false, true],
      ["Individuel: data, KPI'er, dimensioner, likviditet", true, true, true],
      ["Konsolideret: ark og datasporet", true, "Med Konsolidator", true],
      ["Aggregater med elimineringer", false, true, true],
      ["Automatiske valutakurser (ECB)", false, true, true],
      ["Præsentationer og noter", true, true, true],
    ],
  },
  security: {
    eyebrow: "Sikkerhed",
    title: "Jeres data, *kun jeres.*",
    lead: "Hver virksomhed ser kun sine data, og hver bruger kun de sider, I giver adgang til.",
    items: [
      ["Data isoleret pr. virksomhed", ": rækkesikkerhed på alle tabeller."],
      ["Rettigheder pr. side", ", selskab, struktur, scenarie, dimension og mapping."],
      ["Kontrolleret deling", ": privat, hele virksomheden eller udvalgte personer."],
      ["Beskyttet API", " med virksomhedsnøgle og personligt token, gemt kun som fingeraftryk."],
      ["Alt logges", ": hvem der indlæste, hvornår, hvorfra og med hvilket resultat."],
      ["Fire sprog", ": spansk, engelsk, dansk og portugisisk."],
    ],
  },
  faq: {
    eyebrow: "Spørgsmål",
    title: "Det *vi altid bliver spurgt om.*",
    items: [
      { q: "Skal vi have Konsolidator for at bruge Next Reporting?", a: "Ikke nødvendigvis. Base læser konsolideringen fra Konsolidator. Pro arbejder med Konsolidator eller med jeres data indlæst via Excel, CSV eller API. Enterprise kombinerer begge og forbinder til jeres Data Warehouse." },
      { q: "Skal vores filer følge en skabelon?", a: "Nej. Træk filen ind, som den kommer fra ERP'et, og guiden finder ark, overskriftsrække og kolonner. Gem mappingen, så anvendes den automatisk næste gang." },
      { q: "Hvad er forskellen på konsolideret og aggregeret?", a: "Konsolideringen laves i Konsolidator. Med egne data aggregerer Next Reporting selskaberne på en koncernkontoplan med koncerninterne elimineringer og valutaomregning." },
      { q: "Hvor dybt går detaljen?", a: "Fra ethvert tal borer I ned til den lokale konto og posteringen. Enterprise forbinder til jeres Data Warehouse for at nå transaktionen fra konsolideringen." },
      { q: "Hvor kommer valutakurserne fra?", a: "Fra Den Europæiske Centralbank ved indlæsning og, hvis den ikke offentliggør valutaen, fra investing.com: lukkekurs til balancen, månedens og år-til-dato-gennemsnit til resultatet." },
      { q: "Hvad sker der, hvis vi genindlæser en måned?", a: "Der er én gældende version pr. selskab, scenarie og måned: genindlæsning erstatter, lægger aldrig til. Og I får at vide, hvilke konti der er nye, ændrede eller gået til nul." },
      { q: "Skal der installeres noget?", a: "Nej. Det er en webapplikation på spansk, engelsk, dansk og portugisisk." },
    ],
  },
  final: {
    title: "Skal vi prøve den *på jeres lukning?*",
    lead: "Tag ét selskabs Excel med, præcis som den kommer fra ERP'et. På 30 minutter ser I den indlæst, afstemt og omsat til rapport.",
    full: "Foretrækker I den fulde formular?",
  },
  portal: {
    "crumb": "Next Reporting",
    "live": "Live",
    "chips": [
      "Dec 2025",
      "Konsolideret",
      "EUR"
    ],
    "groups": [
      {
        "label": "Forside",
        "items": [
          [
            "inicio",
            "Overblik",
            "home"
          ],
          [
            "demo",
            "Live demo",
            "play"
          ]
        ]
      },
      {
        "label": "Produkt",
        "items": [
          [
            "datos",
            "Data",
            "db"
          ],
          [
            "auto",
            "Automatik",
            "zap"
          ],
          [
            "ahorro",
            "Sparet tid",
            "clock"
          ],
          [
            "monedas",
            "Valutaer",
            "coins"
          ],
          [
            "pantallas",
            "Skærme",
            "layout"
          ]
        ]
      },
      {
        "label": "Kom i gang",
        "items": [
          [
            "planes",
            "Planer",
            "tag"
          ],
          [
            "seguridad",
            "Sikkerhed",
            "shield"
          ],
          [
            "faq",
            "Spørgsmål",
            "help"
          ],
          [
            "contacto",
            "Book demo",
            "send"
          ]
        ]
      }
    ],
    "heroChart": "Koncernens omsætning · sidste 12 måneder",
    "toasts": [
      "Norvia UK indlæste december · stemmer",
      "ECB-kurser opdateret",
      "Mapping anvendt på kladde_dec25.xlsx",
      "Norvia Inc. har ikke indlæst december"
    ],
    "scroll": "Rul"
  },
  kpis: [
    {
      "label": "Omsætning",
      "value": 67943736,
      "delta": "+8,6 %",
      "tone": "up"
    },
    {
      "label": "EBITDA",
      "value": 12746995,
      "delta": "+13,0 %",
      "tone": "up"
    },
    {
      "label": "Nettogæld / EBITDA",
      "value": 2.34,
      "delta": "−0,4",
      "tone": "down",
      "decimals": 2
    }
  ],
  pillars: {
    "eyebrow": "Tid er penge",
    "title": "Brug lukningen på at analysere, *ikke på at forberede data.*",
    "items": [
      {
        "k": "01",
        "title": "Indlæsning på minutter.",
        "body": "Træk Excel-filen ind præcis som den kommer fra ERP'et, eller forbind via API. Formatet huskes og anvendes automatisk næste gang.",
        "visual": "upload"
      },
      {
        "k": "02",
        "title": "Fejl fanges, før de når rapporten.",
        "body": "Manglende måneder, indlæsninger der ikke stemmer, eller dublerede filer markeres med det samme.",
        "visual": "checks"
      },
      {
        "k": "03",
        "title": "Fra konsolideret tal til postering.",
        "body": "Ethvert tal forklarer sig selv med ét klik, helt ned til posteringen bag det.",
        "visual": "drill"
      }
    ],
    "uploadFile": "kassekladde_okt25_ERP.xlsx",
    "uploadSteps": [
      "Ark fundet",
      "Overskriftsrække: 4",
      "Selskab · Konto · Beløb",
      "Gemt mapping anvendt"
    ],
    "checks": [
      {
        "ok": true,
        "t": "Debet og kredit stemmer pr. selskab"
      },
      {
        "ok": false,
        "t": "November mangler for Norvia UK"
      },
      {
        "ok": false,
        "t": "Samme fil indlæst i to måneder"
      },
      {
        "ok": true,
        "t": "Månedens kurser hentet fra ECB"
      }
    ],
    "drill": [
      "Koncern · Omsætning",
      "Norvia UK Ltd",
      "705000 Ydelser",
      "Postering 2025/1184"
    ]
  },
  tasks: {
    "eyebrow": "Hastighed og effektivitet",
    "title": "Besparelsen ligger i *de trin, der forsvinder.*",
    "sub": "Hver månedlig opgave, der i dag går gennem Excel, e-mail og manuel kontrol, klares i applikationen med et eller to klik.",
    "colTask": "Lukkeopgave",
    "excel": "Uden Next Reporting",
    "report": "Med Next Reporting",
    "rows": [
      [
        "Modtage hvert selskabs regnskab",
        "Bede om Excel-filen, tilpasse den til en skabelon og indsætte den",
        "Filen trækkes ind som den kommer fra ERP'et, eller ankommer via API"
      ],
      [
        "Indlæse samme format næste måned",
        "Gentage kolonneopsætningen",
        "Den gemte mapping genkendes og anvendes automatisk"
      ],
      [
        "Vide hvilket selskab der mangler eller er indlæst forkert",
        "Gennemgå selskab for selskab",
        "Historikken advarer om manglende måneder, gentagne filer og dublerede posteringer"
      ],
      [
        "Månedens valutakurser",
        "Slå dem op på ECB's side og kopiere dem",
        "Hentes ved indlæsning: lukkekurs, månedens gennemsnit og år-til-dato-gennemsnit"
      ],
      [
        "Gå fra lokale kontoplaner til koncernkontoplanen",
        "Ækvivalenstabeller i Excel",
        "Mapping ved at trække konti, dateret, én gang"
      ],
      [
        "Aggregere koncernen og eliminere koncerninternt",
        "Manuelle summer og opslag",
        "Aggregat med elimineringer og valutaomregning på én skærm"
      ],
      [
        "Forklare en afvigelse",
        "Lede i kladden efter posteringen bag den",
        "Klik på tallet helt ned til posteringen"
      ],
      [
        "Nøgletal og KPI'er",
        "Genberegne formler hver måned",
        "Bygger sig selv på kontoplanen og holdes opdateret"
      ],
      [
        "Månedspræsentation",
        "Genskabe grafer og tabeller i PowerPoint",
        "Skift periode med ét klik og eksportér til .pptx"
      ],
      [
        "Noter til regnskabet",
        "Bygge bevægelsestabeller i hånden",
        "De udfylder og afstemmer sig selv"
      ]
    ],
    "speed": {
      "from": 8,
      "to": 1,
      "unit": "s",
      "prefix": "<",
      "label": "Skift mellem resultatopgørelse og balance. Før 3–8 s, nu under 1 s (interne tests)."
    },
    "notBi": "Og nej, det er ikke et BI-værktøj. BI tegner grafer; Next Reporting forstår selskaber, valutaer, kontoplaner, ejerandele og elimineringer."
  },
  flow: {
    "hub": "Next Reporting",
    "hubSub": "Afstem · omregn · rapportér",
    "inputs": [
      {
        "id": "konsolidator",
        "name": "Konsolidator",
        "detail": "Konsolideringen, uden eksport",
        "plans": [
          "base",
          "pro",
          "enterprise"
        ]
      },
      {
        "id": "excel",
        "name": "Excel eller CSV",
        "detail": "Som fra ERP'et, med guide",
        "plans": [
          "pro",
          "enterprise"
        ]
      },
      {
        "id": "api",
        "name": "API",
        "detail": "Ét endpoint, jeres nøgle, jeres token",
        "plans": [
          "pro",
          "enterprise"
        ]
      },
      {
        "id": "dwh",
        "name": "Data Warehouse",
        "detail": "Direkte til transaktionsniveau",
        "plans": [
          "enterprise"
        ]
      }
    ],
    "outputs": [
      {
        "id": "individual",
        "name": "Individuel",
        "plans": [
          "base",
          "pro",
          "enterprise"
        ]
      },
      {
        "id": "consolidated",
        "name": "Konsolideret",
        "plans": [
          "base",
          "pro",
          "enterprise"
        ]
      },
      {
        "id": "aggregates",
        "name": "Aggregater med elimineringer",
        "plans": [
          "pro",
          "enterprise"
        ]
      },
      {
        "id": "kpis",
        "name": "KPI'er · Likviditet · Præsentationer",
        "plans": [
          "base",
          "pro",
          "enterprise"
        ]
      },
      {
        "id": "transactional",
        "name": "Ned til transaktionen (DWH)",
        "plans": [
          "enterprise"
        ]
      }
    ],
    "pickPlan": "Vis med plan",
    "planNotes": {
      "base": "Base læser konsolideringen fra Konsolidator direkte.",
      "pro": "Pro arbejder med Konsolidator eller med egne data (Excel, CSV eller API).",
      "enterprise": "Enterprise kombinerer begge veje på én gang og forbinder til jeres Data Warehouse."
    },
    "everyLoad": {
      "title": "Det sker ved hver indlæsning, uden at nogen beder om det",
      "items": [
        "Én gældende version pr. selskab, scenarie og måned: genindlæsning erstatter, lægger aldrig til.",
        "Kun forskelle ændres: nye konti, ændrede konti og konti der går til nul.",
        "Debet og kredit stemmer pr. selskab; advarsler om manglende måneder, gentagne filer og dublerede posteringer.",
        "Månedens ECB-kurser: lukkekurs til balancen, gennemsnit og år-til-dato-gennemsnit til resultatet.",
        "Det registreres, hvem der indlæste, hvornår, fra hvilken fil eller API-kald og med hvilket resultat."
      ]
    }
  },
};
