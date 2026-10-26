// Home page content (en). Words between *asterisks* are painted in the brand green.
export default {
  nav: {
    links: [
      { label: "Try it", id: "producto" },
      { label: "Data", id: "datos" },
      { label: "Screens", id: "pantallas" },
      { label: "Plans", id: "planes" },
      { label: "FAQ", id: "faq" },
    ],
    signIn: "Sign in",
    demo: "Book a demo",
  },
  hero: {
    eyebrow: "Financial reporting · Multi-entity groups",
    title: "Your group's close,",
    typing: ["in hours, not days.", "without copy and paste.", "from consolidated to entry.", "with ECB rates already in."],
    subLead: "No spreadsheet in between.",
    sub: "Next Reporting takes each company's accounts, checks they balance, converts them to group currency and hands them back as management reports, KPIs and presentations.",
    note: "We'll show you the product in 30 minutes, with a sample group. We reply within 24 h.",
    noteLink: "See the plans",
    invite: "This is Next Reporting. Go on, touch it.",
  },
  form: {
    email: "you@company.com",
    cta: "Book your demo",
    step2: "Two more details and we'll write to you today.",
    name: "First name",
    lastName: "Last name",
    company: "Company",
    rolePh: "Your role",
    send: "Send",
    sending: "Sending…",
    okTitle: "Done. We'll write to you today.",
    okBody: "A confirmation email is on its way. Want to pick a time now?",
    okLink: "Choose a time",
    errEmail: "Please enter a valid email.",
    errFields: "Please fill in first name, last name, company and role.",
    errGeneric: "Couldn't send it. Write to us at info@atebiz.com.",
  },
  window: {
    title: "Income statement",
    path: "norvia-group / dec-2025",
    views: { res: "Results", cmp: "Compare", dim: "Dimensions", soc: "Companies" },
    group: "Group (consolidated)",
    sections: { A: "Revenue", B: "Cost of sales", C: "Operating expenses" },
    calc: { GM: "Gross margin", EBIT: "Operating result" },
    colNow: "Dec 25", colPrior: "Dec 24", colDiff: "Diff.", colPct: "%",
    dims: ["Sales", "Operations", "Overheads"],
    contribution: "of the group",
    local: "in its currency",
    rate: "avg rate",
    feed: [
      { tone: "bien", t: "Norvia UK loaded December · 1,284 rows · balances", ago: "2 min ago" },
      { tone: "info", t: "December ECB rates updated", ago: "9 min ago" },
      { tone: "avi", t: "Norvia Inc. hasn't loaded December yet", ago: "alert" },
      { tone: "bien", t: "Saved mapping applied to journal_dec25.xlsx", ago: "14 min ago" },
    ],
    clickHint: "Tap an account and we'll show where it comes from",
    drawerTitle: "Data trail",
    drawerUpload: "Upload",
    drawerJournals: "Adjustments",
    drawerElim: "Intercompany eliminations",
    drawerRound: "Rounding",
    drawerFoot: "This is how the product works: every consolidated amount opens down to the local line or the journal entry. Sample data.",
  },
  sources: {
    eyebrow: "How data comes in",
    title: "Your close builds itself.",
    lead: "Nobody has time to rebuild twelve companies' accounts by hand. Next Reporting takes them from where they already are, and what doesn't balance it tells you; it doesn't guess.",
    items: [
      { icon: "k", name: "Konsolidator", body: "Reads the consolidation as it is, with nothing to export or import.", plans: ["Base", "Pro", "Enterprise"] },
      { icon: "xls", name: "Your Excel or CSV", body: "Exactly as it leaves the ERP. No template: the wizard understands the columns.", plans: ["Pro", "Enterprise"] },
      { icon: "api", name: "The API", body: "Your ERP sends data to one endpoint and it's stored instantly.", plans: ["Pro", "Enterprise"] },
      { icon: "dwh", name: "Your Data Warehouse", body: "A direct connection to reach the transaction.", plans: ["Enterprise"] },
    ],
    destTitle: "Your close, built",
    destBody: "Income statement, balance sheet, KPIs, cash and presentations. For the group or each company.",
  },
  questions: {
    eyebrow: "Every close",
    title: "Three questions, *every month.*",
    lead: "A finance director asks the same three at every close. Next Reporting exists to answer them without opening four spreadsheets.",
    items: [
      { k: "01 · How are we doing", title: "The group at a glance", body: "Revenue, EBITDA, EBIT and net result against last month or last year. For the group, a holding or one company, monthly or year to date." },
      { k: "02 · What doesn't add up", title: "What you shouldn't sign off", body: "The company that hasn't loaded, the repeated file, debits that don't match credits, the unmapped account. Before it reaches the report." },
      { k: "03 · Where it comes from", title: "Every figure, with its source", body: "Tap any amount and drill to the local account and the entry: date, number, description, counterparty and dimensions." },
    ],
  },
  auto: {
    eyebrow: "Automatic by default",
    title: "Automation isn't a button: *it does the dirty work.*",
    lead: "An empty report helps nobody and nobody has time to fill it by hand. Here the wizard *always* proposes, and nothing enters your data until a person confirms it.",
    items: [
      { k: "Reads", title: "Your file, as it is", body: "Detects the sheets, the header row and which column is the company, account, amount, counterparty and dimensions." },
      { k: "Checks", title: "Before saving", body: "Debits and credits per company, missing months, repeated files, duplicate entries and balances mixed with movements." },
      { k: "Remembers", title: "Just once", body: "The mapping is saved. Next time a file with the same format arrives, it applies itself." },
    ],
    file: "journal_dec25_NorviaUK.xlsx",
    rows: [
      ["Date", "Account", "Description", "Debit", "Credit", "CC"],
      ["01/12", "700000", "Domestic sales", "", "18,420.00", "SAL"],
      ["03/12", "705900", "Services Norvia SA", "", "6,200.00", "OPS"],
      ["05/12", "640000", "December payroll", "41,380.00", "", "OVH"],
      ["09/12", "621000", "Office rent", "3,950.00", "", "OVH"],
    ],
    read: "Read the file",
    again: "Again",
    hint: "the wizard proposes · you confirm",
    fields: [
      ["Sheet", "Journal Dec"],
      ["Headers", "Row 4"],
      ["Company", "Norvia UK Ltd · GBP"],
      ["Account", "Column B · 214 accounts"],
      ["Amount", "Debit and Credit"],
      ["Dimension", "CC → Cost centre"],
    ],
    ok: "Debit = Credit · 1,284 rows · 3 new accounts · mapping saved",
  },
  money: {
    eyebrow: "Currencies",
    title: "Several currencies, *each at its own rate.*",
    lead: "A group with companies in euros, pounds and dollars is normal. Adding them up wrong is too. Here every amount knows which rate converted it and where that rate came from.",
    items: [
      { k: "Balance sheet", title: "At closing rate", body: "Each company's balance sheet is converted at the last day of the month. And you see it on every company." },
      { k: "Income statement", title: "At average rate", body: "The income statement at the month's average and the YTD average. Translation differences, calculated." },
      { k: "No searching", title: "Rates fill themselves in", body: "Fetched from the European Central Bank on upload, with date and source. If a currency isn't published, from investing.com." },
    ],
    fx: [["Currency", "Closing", "Average"], ["EUR/GBP", "0.8612", "0.8590"], ["EUR/USD", "1.0853", "1.0791"], ["EUR/DKK", "7.4589", "7.4577"]],
    fxNote: "Example",
  },
  today: {
    eyebrow: "No promises",
    title: "What you can *do today.*",
    lead: "Not a list of intentions: this is what's built and working.",
    cols: [
      [
        ["Drop in the ERP's Excel", " and the wizard understands it, no template."],
        ["Connect your ERP by API", " with a company key and personal token."],
        ["Get ECB rates", " every month, without looking them up."],
        ["Aggregate the group", " with intercompany eliminations and currency conversion."],
      ],
      [
        ["Compare up to four periods", " side by side, with amount and % differences."],
        ["Drill from total to entry", " from any figure."],
        ["KPIs that build themselves", " on your chart of accounts, and your own with a wizard."],
        ["Indirect and direct cash flow", ", checked against cash."],
      ],
      [
        ["Live presentations", ": change the period in one click and export to .pptx."],
        ["PGC or IFRS-EU notes", " that fill in and reconcile themselves."],
        ["Map your local chart to the group's", " once, with validity dates."],
        ["Give each user their pages", ", companies and dimensions, nothing more."],
      ],
    ],
  },
  audience: {
    eyebrow: "Who it's for",
    title: "Groups that *close every month.*",
    lead: "Several companies, several currencies, several charts of accounts. And someone who has to explain it all on day five.",
    items: [
      { icon: "cfo", title: "Finance leadership", body: "The group's month on one screen and the board pack done." },
      { icon: "ctl", title: "Controllers", body: "Comparisons, dimensions and KPIs without rebuilding the sheet every month." },
      { icon: "cons", title: "Consolidation teams", body: "Loads that validate themselves and a trail that explains every elimination." },
      { icon: "desp", title: "Advisory firms", body: "Your clients' reports, in their colours and their language." },
    ],
  },
  screens: {
    eyebrow: "Screens",
    title: "This is how it looks, *for real.*",
    lead: "No mock-ups: these are screenshots of the product. Pick one.",
    items: [
      { id: "home", icon: "home", tab: "Home", short: "The group's month", title: "The group's month, on one screen", body: "Main KPIs with their variance, trend, company ranking and ready-made breakdowns. Opens on the latest month with data.", img: "/report/home.webp", alt: "Next Reporting home dashboard with group KPIs" },
      { id: "compare", icon: "cols", tab: "Comparison", short: "Up to four periods", title: "Four periods side by side", body: "Actual against last month, last year and budget, with amount and % differences. And it all still drills down.", img: "/report/comparison.webp", alt: "Four-period comparison" },
      { id: "kpis", icon: "kpi", tab: "KPIs", short: "Ratios with status", title: "Ratios that build themselves", body: "Liquidity, solvency, profitability, efficiency and market on your chart of accounts, with colour bands.", img: "/report/kpis.webp", alt: "KPI grid by company" },
      { id: "dimensions", icon: "dim", tab: "Dimensions", short: "Cost centres", title: "By department, project or cost centre", body: "A column per dimension and an account × dimension heat map to drill into.", img: "/report/dimensions.webp", alt: "Dimensions page" },
      { id: "cashflow", icon: "cash", tab: "Cash flow", short: "Per company", title: "A cash flow per company", body: "Indirect and, with your own data, direct. Several months and companies at once, checked against cash.", img: "/report/cashflow.webp", alt: "Cash flow per company" },
      { id: "trail", icon: "trail", tab: "Consolidated", short: "Sheet and trail", title: "The consolidation sheet, explained", body: "Each company's contribution, adjustments and eliminations. The data trail follows any amount to its source.", img: "/report/consolidation-sheet.webp", alt: "Consolidation sheet" },
      { id: "mapper", icon: "map", tab: "Mappings", short: "Local → group chart", title: "Your local chart, in the group chart", body: "Drag each company's accounts to the group lines. PGC, SNC, IFRS and IFRS 18.", img: "/report/mapper.webp", alt: "Account mapper" },
      { id: "decks", icon: "deck", tab: "Presentations", short: "Board pack, done", title: "Next month's presentation, in one click", body: "KPIs, charts and the consolidation sheet on slides that re-read the data when opened. Exports to .pptx.", img: "/report/deck-editor.webp", alt: "Presentation editor" },
      { id: "memory", icon: "memo", tab: "Notes", short: "PGC · IFRS-EU", title: "Notes that reconcile themselves", body: "Movement tables that balance, every figure says where it comes from, and export to Word, PDF and Excel.", img: "/report/memory-movements.webp", alt: "Notes with a movement table" },
    ],
    demoCta: "See it with my data",
  },
  plans: {
    eyebrow: "Plans",
    title: "You choose where *your data comes in.*",
    lead: "The reports are the same on every plan. What changes is where Next Reporting reads from and how deep it goes.",
    steps: [
      { t: "A 30-minute demo", b: "We show you the product with a sample group: loads, checks, reports and presentations." },
      { t: "Pick a plan", b: "Based on where your data lives today: Konsolidator, your files or your Data Warehouse." },
      { t: "First close inside", b: "We set up structure and mappings with you, and your next close comes out of here." },
    ],
    ask: "Do you consolidate in Konsolidator?",
    options: ["Yes", "Yes, plus our own data", "No"],
    recommend: { 0: "base", 1: "enterprise", 2: "pro" },
    badge: "Fits you",
    price: "Price",
    priceValue: "tailored",
    items: [
      { id: "base", name: "Base", who: "For groups already consolidating in Konsolidator.", source: "Reads from Konsolidator", features: ["Individual and consolidated", "Consolidation sheet and data trail", "KPIs, dimensions and cash flow", "Presentations and notes", "Per-user, per-page permissions"], cta: "Get pricing" },
      { id: "pro", name: "Pro", who: "For groups that load their own data and want their own structure.", source: "Konsolidator or your files and API", features: ["Everything in Base", "Excel/CSV upload wizard and API", "Load history with checks", "Automatic ECB exchange rates", "Aggregates with intercompany eliminations", "Group structure studio"], cta: "Get pricing" },
      { id: "enterprise", name: "Enterprise", who: "The consolidation and transaction-level detail, together.", source: "Konsolidator + your data + Data Warehouse", features: ["Everything in Pro", "Konsolidator and your own data at once", "Direct Data Warehouse connection", "From consolidated to the original entry", "Guided onboarding"], cta: "Let's talk" },
    ],
    extras: [
      { name: "Low", text: "Only need to look things up? Basic access to reports on your Konsolidator data." },
      { name: "Max", text: "Large group or high volume? Everything in Pro, without limits." },
    ],
    compareTitle: "See the full comparison",
    compareOpen: "open",
    matrix: [
      ["Konsolidator source", true, true, true],
      ["Excel or CSV with wizard", false, true, true],
      ["Upload API", false, true, true],
      ["Konsolidator and own data at once", false, "One or the other", true],
      ["Data Warehouse connection", false, false, true],
      ["Individual: data, KPIs, dimensions, cash", true, true, true],
      ["Consolidated: sheet and data trail", true, "With Konsolidator", true],
      ["Aggregates with eliminations", false, true, true],
      ["Automatic exchange rates (ECB)", false, true, true],
      ["Presentations and notes", true, true, true],
    ],
  },
  security: {
    eyebrow: "Security",
    title: "Your data, *only yours.*",
    lead: "Each company sees only its data and each user only the pages you give them.",
    items: [
      ["Data isolated per company", ": row-level security on every table."],
      ["Permissions per page", ", company, structure, scenario, dimension and mapping."],
      ["Controlled sharing", ": private, company-wide or specific people."],
      ["Protected API", " with company key and personal token, stored only as a fingerprint."],
      ["Everything is logged", ": who loaded, when, from where and with what result."],
      ["Four languages", ": Spanish, English, Danish and Portuguese."],
    ],
  },
  faq: {
    eyebrow: "Questions",
    title: "What *people always ask.*",
    items: [
      { q: "Do I need Konsolidator to use Next Reporting?", a: "Not necessarily. Base reads the Konsolidator consolidation. Pro works with Konsolidator or with your data loaded by Excel, CSV or API. Enterprise combines both and connects to your Data Warehouse." },
      { q: "Do my files have to follow a template?", a: "No. Drop the file in as it leaves the ERP and the wizard detects sheets, header row and columns. Save the mapping and it applies itself next time." },
      { q: "What's the difference between consolidated and aggregated?", a: "The consolidation is done in Konsolidator. With your own data, Next Reporting aggregates the companies on a group chart, with intercompany eliminations and currency conversion." },
      { q: "How deep does the detail go?", a: "From any figure you drill to the local account and the entry. Enterprise connects to your Data Warehouse to reach the transaction from the consolidation." },
      { q: "Where do exchange rates come from?", a: "From the European Central Bank on upload and, if it doesn't publish the currency, investing.com: closing for the balance sheet, monthly and YTD average for the income statement." },
      { q: "What if I reload a month?", a: "There's one current version per company, scenario and month: reloading replaces, never adds. And it tells you which accounts are new, changed or went to zero." },
      { q: "Is there anything to install?", a: "No. It's a web application, in Spanish, English, Danish and Portuguese." },
    ],
  },
  final: {
    title: "Shall we take a look *together?*",
    lead: "In 30 minutes we show you how a sample group goes from each company's Excel to the board report. No commitment.",
    full: "Prefer the full form?",
  },
  portal: {
    "crumb": "Next Reporting",
    "live": "Live",
    "chips": [
      "Dec 2025",
      "Consolidated",
      "EUR"
    ],
    "groups": [
      {
        "label": "Home",
        "items": [
          [
            "inicio",
            "Overview",
            "home"
          ],
          [
            "cierre",
            "Every close",
            "play"
          ]
        ]
      },
      {
        "label": "Product",
        "items": [
          [
            "datos",
            "Data",
            "db"
          ],
          [
            "auto",
            "Automation",
            "zap"
          ],
          [
            "ahorro",
            "Time saved",
            "clock"
          ],
          [
            "monedas",
            "Currencies",
            "coins"
          ],
          [
            "pantallas",
            "Screens",
            "layout"
          ]
        ]
      },
      {
        "label": "Get started",
        "items": [
          [
            "planes",
            "Plans",
            "tag"
          ],
          [
            "seguridad",
            "Security",
            "shield"
          ],
          [
            "faq",
            "Questions",
            "help"
          ],
          [
            "contacto",
            "Book a demo",
            "send"
          ]
        ]
      }
    ],
    "heroChart": "Group revenue · last 12 months",
    "toasts": [
      "Norvia UK loaded December · balances",
      "ECB rates updated",
      "Mapping applied to journal_dec25.xlsx",
      "Norvia Inc. hasn't loaded December yet"
    ],
    "scroll": "Scroll"
  },
  kpis: [
    {
      "label": "Revenue",
      "value": 67943736,
      "delta": "+8.6%",
      "tone": "up"
    },
    {
      "label": "EBITDA",
      "value": 12746995,
      "delta": "+13.0%",
      "tone": "up"
    },
    {
      "label": "Net debt / EBITDA",
      "value": 2.34,
      "delta": "−0.4",
      "tone": "down",
      "decimals": 2
    }
  ],
  pillars: {
    "eyebrow": "Time is money",
    "title": "Spend the close analysing, *not preparing data.*",
    "items": [
      {
        "k": "01",
        "title": "Upload in minutes.",
        "body": "Drag in the Excel exactly as it comes out of the ERP, or connect it by API. The format is remembered and applied automatically next time.",
        "visual": "upload"
      },
      {
        "k": "02",
        "title": "Errors caught before they reach the report.",
        "body": "Missing months, loads that don't balance or duplicated files are flagged on the spot.",
        "visual": "checks"
      },
      {
        "k": "03",
        "title": "From consolidated to journal entry.",
        "body": "Any figure explains itself in one click, down to the entry behind it.",
        "visual": "drill"
      }
    ],
    "uploadFile": "journal_oct25_ERP.xlsx",
    "uploadSteps": [
      "Sheets detected",
      "Header row: 4",
      "Company · Account · Amount",
      "Saved mapping applied"
    ],
    "checks": [
      {
        "ok": true,
        "t": "Debits and credits balance per company"
      },
      {
        "ok": false,
        "t": "November missing for Norvia UK"
      },
      {
        "ok": false,
        "t": "Same file loaded in two months"
      },
      {
        "ok": true,
        "t": "Month's rates fetched from the ECB"
      }
    ],
    "drill": [
      "Group · Revenue",
      "Norvia UK Ltd",
      "705000 Services",
      "Entry 2025/1184"
    ]
  },
  tasks: {
    "eyebrow": "Speed and efficiency",
    "title": "The saving is in *the steps that disappear.*",
    "sub": "Every monthly task that today goes through Excel, email and manual checking happens in the app in one or two clicks.",
    "colTask": "Close task",
    "excel": "Without Next Reporting",
    "report": "With Next Reporting",
    "rows": [
      [
        "Receive each company's accounts",
        "Ask for the Excel, fit it to a template and paste it",
        "Drag the file as it comes out of the ERP, or it arrives by API"
      ],
      [
        "Load the same format next month",
        "Redo the column setup",
        "The saved mapping is recognised and applied"
      ],
      [
        "Know which company is missing or loaded wrong",
        "Check company by company",
        "The history flags missing months, repeated files and duplicate entries"
      ],
      [
        "Month's exchange rates",
        "Look them up on the ECB site and copy them",
        "Fetched on upload: closing, monthly average and YTD average"
      ],
      [
        "Move from local charts to the group chart",
        "Equivalence tables in Excel",
        "Drag-and-drop mapping, dated, done once"
      ],
      [
        "Aggregate the group and eliminate intercompany",
        "Manual sums and lookups",
        "Aggregate with eliminations and currency conversion on one screen"
      ],
      [
        "Explain a variance",
        "Search the journal for the entry behind it",
        "Click the figure down to the entry"
      ],
      [
        "Ratios and KPIs",
        "Recalculate formulas every month",
        "Built on your chart of accounts and kept up to date"
      ],
      [
        "Monthly presentation",
        "Redo charts and tables in PowerPoint",
        "Change the period in one click and export to .pptx"
      ],
      [
        "Notes to the accounts",
        "Build movement tables by hand",
        "They fill in and reconcile themselves"
      ]
    ],
    "speed": {
      "from": 8,
      "to": 1,
      "unit": "s",
      "prefix": "<",
      "label": "Switching between income statement and balance sheet. Was 3–8 s, now under 1 s (internal tests)."
    },
    "notBi": "And no, it's not a BI tool. BI draws charts; Next Reporting understands companies, currencies, charts of accounts, participations and eliminations."
  },
  flow: {
    "hub": "Next Reporting",
    "hubSub": "Balance · convert · report",
    "inputs": [
      {
        "id": "konsolidator",
        "name": "Konsolidator",
        "detail": "The consolidation, nothing to export",
        "plans": [
          "base",
          "pro",
          "enterprise"
        ]
      },
      {
        "id": "excel",
        "name": "Excel or CSV",
        "detail": "As it leaves the ERP, with a wizard",
        "plans": [
          "pro",
          "enterprise"
        ]
      },
      {
        "id": "api",
        "name": "API",
        "detail": "One endpoint, your key, your token",
        "plans": [
          "pro",
          "enterprise"
        ]
      },
      {
        "id": "dwh",
        "name": "Data Warehouse",
        "detail": "Straight to transaction level",
        "plans": [
          "enterprise"
        ]
      }
    ],
    "outputs": [
      {
        "id": "individual",
        "name": "Individual",
        "plans": [
          "base",
          "pro",
          "enterprise"
        ]
      },
      {
        "id": "consolidated",
        "name": "Consolidated",
        "plans": [
          "base",
          "pro",
          "enterprise"
        ]
      },
      {
        "id": "aggregates",
        "name": "Aggregates with eliminations",
        "plans": [
          "pro",
          "enterprise"
        ]
      },
      {
        "id": "kpis",
        "name": "KPIs · Cash · Presentations",
        "plans": [
          "base",
          "pro",
          "enterprise"
        ]
      },
      {
        "id": "transactional",
        "name": "Down to the transaction (DWH)",
        "plans": [
          "enterprise"
        ]
      }
    ],
    "pickPlan": "Show with plan",
    "planNotes": {
      "base": "Base reads the Konsolidator consolidation directly.",
      "pro": "Pro works with Konsolidator or with your own data (Excel, CSV or API).",
      "enterprise": "Enterprise combines both at once and connects to your Data Warehouse."
    },
    "everyLoad": {
      "title": "What happens on every load, without anyone asking",
      "items": [
        "One current version per company, scenario and month: reloading replaces, never adds.",
        "Only differences change: new accounts, changed accounts and accounts going to zero.",
        "Debits and credits balance per company; alerts for missing months, repeated files and duplicate entries.",
        "The month's ECB rates: closing for the balance sheet, average and YTD average for the income statement.",
        "A record of who loaded, when, from which file or API call, and with what result."
      ]
    }
  },
};
