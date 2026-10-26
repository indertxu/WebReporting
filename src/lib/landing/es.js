// Contenido de la portada (es). Todo lo que se lee en la home sale de aquí.
// Las palabras entre *asteriscos* se pintan en el verde de la marca.
export default {
  nav: {
    links: [
      { label: "Pruébalo", id: "producto" },
      { label: "Datos", id: "datos" },
      { label: "Pantallas", id: "pantallas" },
      { label: "Planes", id: "planes" },
      { label: "FAQ", id: "faq" },
    ],
    signIn: "Entrar",
    demo: "Pide demo",
  },
  hero: {
    eyebrow: "Reporting financiero · Grupos multi-sociedad",
    title: "El cierre del grupo,",
    typing: ["en horas, no en días.", "sin copiar y pegar.", "del consolidado al asiento.", "con los tipos del BCE puestos."],
    subLead: "Sin un Excel de por medio.",
    sub: "Next Reporting recibe la contabilidad de cada sociedad, la cuadra, la pasa a la divisa del grupo y te la devuelve en informes, KPIs y presentaciones para dirección.",
    note: "Te enseñamos el producto en 30 minutos, con un grupo de ejemplo. Te respondemos en menos de 24 h.",
    noteLink: "Ver los planes",
    invite: "Esto es Next Reporting. Tócalo.",
  },
  form: {
    email: "tu@empresa.com",
    cta: "Pide tu demo",
    step2: "Dos datos más y te escribimos hoy.",
    name: "Nombre",
    lastName: "Apellido",
    company: "Empresa",
    rolePh: "Tu rol",
    send: "Enviar",
    sending: "Enviando…",
    okTitle: "Hecho. Te escribimos hoy.",
    okBody: "Te llega un correo de confirmación. Si quieres, reserva ya la hora:",
    okLink: "Elegir hora",
    errEmail: "Escribe un email válido.",
    errFields: "Completa nombre, apellido, empresa y rol.",
    errGeneric: "No se ha podido enviar. Escríbenos a info@atebiz.com.",
  },
  window: {
    title: "Cuenta de resultados",
    path: "grupo-norvia / dic-2025",
    views: { res: "Resultados", cmp: "Comparar", dim: "Dimensiones", soc: "Sociedades" },
    group: "Grupo (consolidado)",
    sections: { A: "Ingresos", B: "Coste de ventas", C: "Gastos operativos" },
    calc: { GM: "Margen bruto", EBIT: "Resultado de explotación" },
    colNow: "Dic 25", colPrior: "Dic 24", colDiff: "Dif.", colPct: "%",
    dims: ["Comercial", "Operaciones", "Estructura"],
    contribution: "aporta al grupo",
    local: "en su moneda",
    rate: "tipo medio",
    feed: [
      { tone: "bien", t: "Norvia UK cargó diciembre · 1.284 filas · cuadra", ago: "hace 2 min" },
      { tone: "info", t: "Tipos del BCE de diciembre actualizados", ago: "hace 9 min" },
      { tone: "avi", t: "Norvia Inc. aún no ha cargado diciembre", ago: "aviso" },
      { tone: "bien", t: "Mapeo guardado aplicado a diario_dic25.xlsx", ago: "hace 14 min" },
    ],
    clickHint: "Toca una cuenta y te decimos de dónde sale",
    drawerTitle: "Rastro del dato",
    drawerUpload: "Carga",
    drawerJournals: "Ajustes",
    drawerElim: "Eliminaciones intragrupo",
    drawerRound: "Redondeo",
    drawerFoot: "Así funciona en el producto: cada importe consolidado se abre hasta la línea local o el asiento. Datos de ejemplo.",
  },
  sources: {
    eyebrow: "Por dónde entran los datos",
    title: "Tu cierre se monta solo.",
    lead: "Nadie tiene tiempo de rehacer la contabilidad de doce sociedades a mano. Next Reporting la toma de donde ya está, y lo que no cuadra te lo dice; no lo adivina.",
    items: [
      { icon: "k", name: "Konsolidator", body: "Lee la consolidación tal cual, sin exportar ni importar nada.", plans: ["Base", "Pro", "Enterprise"] },
      { icon: "xls", name: "Tu Excel o CSV", body: "Tal cual sale del ERP. Sin plantilla: el asistente entiende las columnas.", plans: ["Pro", "Enterprise"] },
      { icon: "api", name: "La API", body: "Tu ERP envía los datos a un endpoint y se guardan al momento.", plans: ["Pro", "Enterprise"] },
      { icon: "dwh", name: "Tu Data Warehouse", body: "Conexión directa para llegar a la transacción.", plans: ["Enterprise"] },
    ],
    destTitle: "Tu cierre, montado",
    destBody: "Cuenta de resultados, balance, KPIs, caja y presentaciones. Del grupo o de cada sociedad.",
  },
  questions: {
    eyebrow: "Cada cierre",
    title: "Tres preguntas, *todos los meses.*",
    lead: "Un director financiero se hace las mismas tres cada cierre. Next Reporting existe para contestarlas sin abrir cuatro hojas de cálculo.",
    items: [
      { k: "01 · Cómo vamos", title: "El grupo, de un vistazo", body: "Ingresos, EBITDA, EBIT y resultado contra el mes anterior o el año pasado. Del grupo, de un holding o de una sociedad, en mensual o acumulado." },
      { k: "02 · Qué no cuadra", title: "Lo que no deberías firmar", body: "La sociedad que no ha cargado, el archivo repetido, el debe que no casa con el haber, la cuenta sin mapear. Antes de que llegue al informe." },
      { k: "03 · De dónde sale", title: "Cada cifra, con su origen", body: "Toca cualquier importe y baja a la cuenta local y al asiento: fecha, número, concepto, contraparte y dimensiones." },
    ],
  },
  auto: {
    eyebrow: "Automático por defecto",
    title: "La automatización no es un botón: *hace el trabajo sucio.*",
    lead: "Un informe vacío no sirve a nadie y nadie tiene tiempo de llenarlo a mano. Aquí el asistente propone *siempre*, y nada entra en tus datos sin que una persona lo confirme.",
    items: [
      { k: "Lee", title: "Tu archivo, tal cual", body: "Detecta las hojas, la fila de títulos y qué columna es la sociedad, la cuenta, el importe, la contraparte y las dimensiones." },
      { k: "Cuadra", title: "Antes de guardar", body: "Debe y haber por sociedad, meses que faltan, archivos repetidos, apuntes duplicados y saldos mezclados con movimientos." },
      { k: "Recuerda", title: "Una sola vez", body: "El mapeo se guarda. La próxima vez que llegue un archivo con el mismo formato, se aplica solo." },
    ],
    file: "diario_dic25_NorviaUK.xlsx",
    rows: [
      ["Fecha", "Cuenta", "Concepto", "Debe", "Haber", "CC"],
      ["01/12", "700000", "Ventas nacionales", "", "18.420,00", "COM"],
      ["03/12", "705900", "Servicios Norvia SA", "", "6.200,00", "OPS"],
      ["05/12", "640000", "Nóminas diciembre", "41.380,00", "", "EST"],
      ["09/12", "621000", "Alquiler oficina", "3.950,00", "", "EST"],
    ],
    read: "Leer el archivo",
    again: "Otra vez",
    hint: "el asistente propone · tú confirmas",
    fields: [
      ["Hoja", "Diario dic"],
      ["Títulos", "Fila 4"],
      ["Sociedad", "Norvia UK Ltd · GBP"],
      ["Cuenta", "Columna B · 214 cuentas"],
      ["Importe", "Debe y Haber"],
      ["Dimensión", "CC → Centro de coste"],
    ],
    ok: "Debe = Haber · 1.284 filas · 3 cuentas nuevas · mapeo guardado",
  },
  money: {
    eyebrow: "Las monedas",
    title: "Varias monedas, *y cada una a su tipo.*",
    lead: "Un grupo con sociedades en euros, libras y dólares es lo normal. Sumarlas mal también. Aquí cada importe sabe a qué tipo se convirtió y de dónde salió ese tipo.",
    items: [
      { k: "Balance", title: "A tipo de cierre", body: "El balance de cada sociedad se convierte al tipo del último día del mes. Y lo ves en cada sociedad." },
      { k: "Resultados", title: "A tipo medio", body: "La cuenta de resultados, al medio del mes y al medio acumulado. Las diferencias de conversión, calculadas." },
      { k: "Sin buscarlos", title: "Los tipos se ponen solos", body: "Se traen del Banco Central Europeo al cargar, con su fecha y su fuente. Si una divisa no se publica, de investing.com." },
    ],
    fx: [["Divisa", "Cierre", "Medio"], ["EUR/GBP", "0,8612", "0,8590"], ["EUR/USD", "1,0853", "1,0791"], ["EUR/DKK", "7,4589", "7,4577"]],
    fxNote: "Ejemplo",
  },
  today: {
    eyebrow: "Sin promesas",
    title: "Lo que ya puedes *hacer hoy.*",
    lead: "No es una lista de intenciones: es lo que está construido y funcionando.",
    cols: [
      [
        ["Arrastra el Excel del ERP", " y el asistente lo entiende, sin plantilla."],
        ["Conecta tu ERP por API", " con clave de empresa y token personal."],
        ["Recibe los tipos del BCE", " cada mes, sin buscarlos."],
        ["Agrega el grupo", " con eliminaciones intragrupo y conversión de divisas."],
      ],
      [
        ["Compara hasta cuatro períodos", " lado a lado, con diferencia en importe y en %."],
        ["Baja del total al asiento", " desde cualquier cifra."],
        ["KPIs que se montan solos", " sobre tu plan de cuentas, y los tuyos con un asistente."],
        ["Flujo de caja indirecto y directo", ", con comprobación contra tesorería."],
      ],
      [
        ["Presentaciones en vivo", ": cambia el período con un clic y exporta a .pptx."],
        ["La memoria PGC o NIIF-UE", " que se rellena y cuadra sola."],
        ["Mapea tu plan local al del grupo", " una vez, con vigencia por fechas."],
        ["Da a cada usuario sus páginas", ", sociedades y dimensiones, nada más."],
      ],
    ],
  },
  audience: {
    eyebrow: "Para quién",
    title: "Grupos que *cierran cada mes.*",
    lead: "Varias sociedades, varias divisas, varios planes contables. Y alguien que tiene que explicarlo todo el día 5.",
    items: [
      { icon: "cfo", title: "Dirección financiera", body: "El mes del grupo en una pantalla y la presentación del consejo hecha." },
      { icon: "ctl", title: "Controllers", body: "Comparaciones, dimensiones y KPIs sin reconstruir la hoja cada mes." },
      { icon: "cons", title: "Equipos de consolidación", body: "Cargas que se validan solas y un rastro que explica cada eliminación." },
      { icon: "desp", title: "Despachos y consultores", body: "Los informes de tus clientes, con sus colores y en su idioma." },
    ],
  },
  screens: {
    eyebrow: "Pantallas",
    title: "Así se ve, *tal cual.*",
    lead: "Nada de maquetas: son capturas del producto. Elige una.",
    items: [
      { id: "home", icon: "home", tab: "Inicio", short: "El mes del grupo", title: "El mes del grupo, en una pantalla", body: "KPIs principales con su variación, evolución, ranking de sociedades y desgloses listos. Se abre en el último mes con datos.", img: "/report/home.webp", alt: "Panel de inicio de Next Reporting con KPIs del grupo" },
      { id: "compare", icon: "cols", tab: "Comparación", short: "Hasta cuatro períodos", title: "Cuatro períodos lado a lado", body: "Real contra mes anterior, año anterior y presupuesto, con diferencias en importe y en %. Y todo sigue bajando al detalle.", img: "/report/comparison.webp", alt: "Comparación de cuatro períodos" },
      { id: "kpis", icon: "kpi", tab: "KPIs", short: "Ratios con estado", title: "Ratios que se montan solos", body: "Liquidez, solvencia, rentabilidad, eficiencia y mercado sobre tu plan de cuentas, con rangos de color.", img: "/report/kpis.webp", alt: "Cuadro de KPIs por sociedad" },
      { id: "dimensions", icon: "dim", tab: "Dimensiones", short: "Centros de coste", title: "Por departamento, proyecto o centro de coste", body: "Una columna por dimensión y un mapa de calor cuenta × dimensión para bajar al detalle.", img: "/report/dimensions.webp", alt: "Página de dimensiones" },
      { id: "cashflow", icon: "cash", tab: "Flujo de caja", short: "Por sociedad", title: "Un flujo de caja por sociedad", body: "Indirecto y, con datos propios, directo. Varios meses y sociedades a la vez, comprobado contra tesorería.", img: "/report/cashflow.webp", alt: "Flujo de caja por sociedad" },
      { id: "trail", icon: "trail", tab: "Consolidado", short: "Hoja y rastro", title: "La hoja de consolidación, explicada", body: "Aportación de cada sociedad, ajustes y eliminaciones. El rastro del dato sigue cualquier importe hasta el origen.", img: "/report/consolidation-sheet.webp", alt: "Hoja de consolidación" },
      { id: "mapper", icon: "map", tab: "Mapeos", short: "Plan local → grupo", title: "Tu plan local, en el plan del grupo", body: "Arrastra las cuentas de cada sociedad a las líneas del grupo. PGC, SNC, NIIF y NIIF 18.", img: "/report/mapper.webp", alt: "Mapeador de cuentas" },
      { id: "decks", icon: "deck", tab: "Presentaciones", short: "El consejo, hecho", title: "La presentación del mes siguiente, con un clic", body: "KPIs, gráficos y la hoja de consolidación en diapositivas que leen los datos al abrirse. Exporta a .pptx.", img: "/report/deck-editor.webp", alt: "Editor de presentaciones" },
      { id: "memory", icon: "memo", tab: "Memoria", short: "PGC · NIIF-UE", title: "Una memoria que cuadra sola", body: "Cuadros de movimientos que cuadran, cada cifra dice de dónde sale, y exportación a Word, PDF y Excel.", img: "/report/memory-movements.webp", alt: "Memoria con cuadro de movimientos" },
    ],
    demoCta: "Verlo con mis datos",
  },
  plans: {
    eyebrow: "Planes",
    title: "Eliges por dónde *entran tus datos.*",
    lead: "Los informes son los mismos en todos los planes. Lo que cambia es de dónde lee Next Reporting y hasta dónde llega.",
    steps: [
      { t: "Una demo de 30 minutos", b: "Te enseñamos el producto con un grupo de ejemplo: cargas, cuadre, informes y presentaciones." },
      { t: "Eliges plan", b: "Según dónde están hoy tus datos: Konsolidator, tus archivos o tu Data Warehouse." },
      { t: "Primer cierre dentro", b: "Configuramos contigo estructura y mapeos, y el siguiente cierre ya sale de aquí." },
    ],
    ask: "¿Consolidáis en Konsolidator?",
    options: ["Sí", "Sí, y además datos propios", "No"],
    recommend: { 0: "base", 1: "enterprise", 2: "pro" },
    badge: "Encaja contigo",
    price: "Precio",
    priceValue: "a medida",
    items: [
      { id: "base", name: "Base", who: "Para grupos que ya consolidan en Konsolidator.", source: "Lee de Konsolidator", features: ["Individual y consolidado", "Hoja de consolidación y rastro del dato", "KPIs, dimensiones y flujo de caja", "Presentaciones y memoria", "Permisos por usuario y página"], cta: "Pedir precio" },
      { id: "pro", name: "Pro", who: "Para grupos que cargan sus propios datos y quieren su estructura.", source: "Konsolidator o tus archivos y API", features: ["Todo lo de Base", "Carga Excel/CSV con asistente y API", "Historial con comprobaciones", "Tipos de cambio automáticos del BCE", "Agregados con eliminaciones intragrupo", "Estudio de estructuras del grupo"], cta: "Pedir precio" },
      { id: "enterprise", name: "Enterprise", who: "La consolidación y el detalle hasta la transacción, juntos.", source: "Konsolidator + tus datos + Data Warehouse", features: ["Todo lo de Pro", "Konsolidator y datos propios a la vez", "Conexión directa a tu Data Warehouse", "Del consolidado al apunte original", "Acompañamiento en la puesta en marcha"], cta: "Hablemos" },
    ],
    extras: [
      { name: "Low", text: "¿Solo necesitas consultar? Acceso básico a los informes sobre tus datos de Konsolidator." },
      { name: "Max", text: "¿Grupo grande o mucho volumen? Todo lo de Pro, sin límites." },
    ],
    compareTitle: "Ver la comparativa completa",
    compareOpen: "abrir",
    matrix: [
      ["Origen Konsolidator", true, true, true],
      ["Excel o CSV con asistente", false, true, true],
      ["API de carga", false, true, true],
      ["Konsolidator y datos propios a la vez", false, "Uno u otro", true],
      ["Conexión a Data Warehouse", false, false, true],
      ["Individual: datos, KPIs, dimensiones, caja", true, true, true],
      ["Consolidado: hoja y rastro del dato", true, "Con Konsolidator", true],
      ["Agregados con eliminaciones", false, true, true],
      ["Tipos de cambio automáticos (BCE)", false, true, true],
      ["Presentaciones y memoria", true, true, true],
    ],
  },
  security: {
    eyebrow: "Seguridad",
    title: "Tus datos, *solo tuyos.*",
    lead: "Cada empresa ve solo sus datos y cada usuario solo las páginas que le das.",
    items: [
      ["Datos aislados por empresa", ": seguridad por fila en todas las tablas."],
      ["Permisos por página", ", sociedad, estructura, escenario, dimensión y mapeo."],
      ["Compartir con control", ": privado, toda la empresa o ciertas personas."],
      ["API protegida", " con clave de empresa y token personal, guardados solo como huella."],
      ["Todo queda registrado", ": quién cargó, cuándo, desde dónde y con qué resultado."],
      ["Cuatro idiomas", ": español, inglés, danés y portugués."],
    ],
  },
  faq: {
    eyebrow: "Preguntas",
    title: "Lo que *siempre nos preguntan.*",
    items: [
      { q: "¿Necesito Konsolidator para usar Next Reporting?", a: "No necesariamente. Base lee la consolidación de Konsolidator. Pro trabaja con Konsolidator o con tus datos cargados por Excel, CSV o API. Enterprise une las dos vías y se conecta a tu Data Warehouse." },
      { q: "¿Mis archivos tienen que seguir una plantilla?", a: "No. Arrastras el archivo tal cual sale del ERP y el asistente detecta hojas, fila de títulos y columnas. Si guardas el mapeo, la próxima vez se aplica solo." },
      { q: "¿Qué diferencia hay entre consolidado y agregado?", a: "El consolidado es el que se hace en Konsolidator. Con datos propios, Next Reporting agrega las sociedades sobre un plan de grupo, con eliminaciones intragrupo y conversión de divisas." },
      { q: "¿Hasta qué nivel de detalle llego?", a: "Desde cualquier cifra bajas a la cuenta local y al asiento. Enterprise se conecta a tu Data Warehouse para llegar a la transacción desde el consolidado." },
      { q: "¿De dónde salen los tipos de cambio?", a: "Del Banco Central Europeo al cargar y, si no publica la divisa, de investing.com: cierre para el balance, medio del mes y medio acumulado para resultados." },
      { q: "¿Qué pasa si vuelvo a cargar un mes?", a: "Hay una sola versión vigente por sociedad, escenario y mes: volver a cargar sustituye, nunca suma. Y te dice qué cuentas son nuevas, cuáles cambian y cuáles pasan a cero." },
      { q: "¿Hay que instalar algo?", a: "No. Es una aplicación web, en español, inglés, danés y portugués." },
    ],
  },
  final: {
    title: "¿Lo vemos *juntos?*",
    lead: "En 30 minutos te enseñamos cómo un grupo de ejemplo pasa de los Excel de cada sociedad al informe del consejo. Sin compromiso.",
    full: "¿Prefieres el formulario completo?",
  },
  portal: {
    "crumb": "Next Reporting",
    "live": "En directo",
    "chips": [
      "Dic 2025",
      "Consolidado",
      "EUR"
    ],
    "groups": [
      {
        "label": "Portada",
        "items": [
          [
            "inicio",
            "Inicio",
            "home"
          ],
          [
            "cierre",
            "Cada cierre",
            "play"
          ]
        ]
      },
      {
        "label": "Producto",
        "items": [
          [
            "datos",
            "Datos",
            "db"
          ],
          [
            "auto",
            "Automático",
            "zap"
          ],
          [
            "ahorro",
            "Ahorro de tiempo",
            "clock"
          ],
          [
            "monedas",
            "Monedas",
            "coins"
          ],
          [
            "pantallas",
            "Pantallas",
            "layout"
          ]
        ]
      },
      {
        "label": "Empezar",
        "items": [
          [
            "planes",
            "Planes",
            "tag"
          ],
          [
            "seguridad",
            "Seguridad",
            "shield"
          ],
          [
            "faq",
            "Preguntas",
            "help"
          ],
          [
            "contacto",
            "Pide tu demo",
            "send"
          ]
        ]
      }
    ],
    "heroChart": "Ingresos del grupo · últimos 12 meses",
    "toasts": [
      "Norvia UK cargó diciembre · cuadra",
      "Tipos del BCE actualizados",
      "Mapeo aplicado a diario_dic25.xlsx",
      "Norvia Inc. aún no ha cargado diciembre"
    ],
    "scroll": "Desliza"
  },
  kpis: [
    {
      "label": "Ingresos",
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
      "label": "Deuda neta / EBITDA",
      "value": 2.34,
      "delta": "−0,4",
      "tone": "down",
      "decimals": 2
    }
  ],
  pillars: {
    "eyebrow": "El tiempo es dinero",
    "title": "Dedica el cierre a analizar, *no a preparar datos.*",
    "items": [
      {
        "k": "01",
        "title": "Carga en minutos.",
        "body": "Arrastra el Excel tal cual sale del ERP o conéctalo por API. El formato se recuerda y la próxima vez se aplica solo.",
        "visual": "upload"
      },
      {
        "k": "02",
        "title": "Errores antes de que lleguen al informe.",
        "body": "Meses que faltan, cargas que no cuadran o archivos repetidos se avisan en el momento.",
        "visual": "checks"
      },
      {
        "k": "03",
        "title": "Del consolidado al asiento.",
        "body": "Cualquier cifra se explica con un clic, hasta el apunte que la forma.",
        "visual": "drill"
      }
    ],
    "uploadFile": "diario_oct25_ERP.xlsx",
    "uploadSteps": [
      "Hojas detectadas",
      "Fila de títulos: 4",
      "Sociedad · Cuenta · Importe",
      "Mapeo guardado aplicado"
    ],
    "checks": [
      {
        "ok": true,
        "t": "Debe y haber cuadran por sociedad"
      },
      {
        "ok": false,
        "t": "Falta noviembre en Norvia UK"
      },
      {
        "ok": false,
        "t": "Mismo archivo cargado en dos meses"
      },
      {
        "ok": true,
        "t": "Tipos de cambio del mes traídos del BCE"
      }
    ],
    "drill": [
      "Grupo · Ingresos",
      "Norvia UK Ltd",
      "705000 Servicios",
      "Asiento 2025/1184"
    ]
  },
  tasks: {
    "eyebrow": "Rapidez y eficiencia",
    "title": "El ahorro está en *los pasos que desaparecen.*",
    "sub": "Cada tarea mensual que hoy pasa por Excel, correo y revisión manual se hace en la aplicación con uno o dos clics.",
    "colTask": "Tarea del cierre",
    "excel": "Sin Next Reporting",
    "report": "Con Next Reporting",
    "rows": [
      [
        "Recibir la contabilidad de cada sociedad",
        "Pedir el Excel, adaptarlo a una plantilla y pegarlo",
        "Se arrastra el archivo tal cual sale del ERP, o llega solo por API"
      ],
      [
        "Cargar el mismo formato el mes siguiente",
        "Repetir el ajuste de columnas",
        "El mapeo guardado se reconoce y se aplica solo"
      ],
      [
        "Saber qué sociedad falta o cargó mal",
        "Revisar sociedad por sociedad",
        "El historial avisa de meses que faltan, archivos repetidos y apuntes duplicados"
      ],
      [
        "Tipos de cambio del mes",
        "Buscarlos en la web del BCE y copiarlos",
        "Se traen solos al cargar: cierre, medio del mes y medio acumulado"
      ],
      [
        "Pasar de planes locales al plan de grupo",
        "Tablas de equivalencias en Excel",
        "Mapeo arrastrando cuentas, con vigencia por fechas, una sola vez"
      ],
      [
        "Agregar el grupo y eliminar intragrupo",
        "Sumas y cruces a mano",
        "Agregado con eliminaciones y conversión de divisas en una pantalla"
      ],
      [
        "Explicar una variación",
        "Buscar en el diario el asiento que la causa",
        "Clic en la cifra hasta el asiento"
      ],
      [
        "Ratios y KPIs",
        "Recalcular fórmulas cada mes",
        "Se montan solos sobre el plan de cuentas y se actualizan"
      ],
      [
        "Presentación mensual",
        "Rehacer gráficos y tablas en PowerPoint",
        "Cambiar el período con un clic y exportar a .pptx"
      ],
      [
        "Notas de la memoria",
        "Montar los cuadros de movimientos a mano",
        "Se rellenan solos y cuadran solos"
      ]
    ],
    "speed": {
      "from": 8,
      "to": 1,
      "unit": "s",
      "prefix": "<",
      "label": "Cambiar entre cuenta de resultados y balance. Antes 3–8 s, ahora menos de 1 s (pruebas internas)."
    },
    "notBi": "Y no, no es una herramienta de BI. Una BI dibuja gráficos; Next Reporting entiende sociedades, divisas, planes contables, participaciones y eliminaciones."
  },
  flow: {
    "hub": "Next Reporting",
    "hubSub": "Cuadra · convierte · informa",
    "inputs": [
      {
        "id": "konsolidator",
        "name": "Konsolidator",
        "detail": "La consolidación, sin exportar nada",
        "plans": [
          "base",
          "pro",
          "enterprise"
        ]
      },
      {
        "id": "excel",
        "name": "Excel o CSV",
        "detail": "Tal cual sale del ERP, con asistente",
        "plans": [
          "pro",
          "enterprise"
        ]
      },
      {
        "id": "api",
        "name": "API",
        "detail": "Un endpoint, tu clave, tu token",
        "plans": [
          "pro",
          "enterprise"
        ]
      },
      {
        "id": "dwh",
        "name": "Data Warehouse",
        "detail": "Directo al nivel transaccional",
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
        "name": "Consolidado",
        "plans": [
          "base",
          "pro",
          "enterprise"
        ]
      },
      {
        "id": "aggregates",
        "name": "Agregados con eliminaciones",
        "plans": [
          "pro",
          "enterprise"
        ]
      },
      {
        "id": "kpis",
        "name": "KPIs · Caja · Presentaciones",
        "plans": [
          "base",
          "pro",
          "enterprise"
        ]
      },
      {
        "id": "transactional",
        "name": "Hasta la transacción (DWH)",
        "plans": [
          "enterprise"
        ]
      }
    ],
    "pickPlan": "Ver con el plan",
    "planNotes": {
      "base": "Base lee la consolidación de Konsolidator directamente.",
      "pro": "Pro trabaja con Konsolidator o con datos propios (Excel, CSV o API).",
      "enterprise": "Enterprise une las dos vías a la vez y se conecta a tu Data Warehouse."
    },
    "everyLoad": {
      "title": "Lo que pasa en cada carga, sin que nadie lo pida",
      "items": [
        "Una sola versión vigente por sociedad, escenario y mes: volver a cargar sustituye, nunca suma.",
        "Solo cambian las diferencias: cuentas nuevas, que cambian y que pasan a cero.",
        "Debe y haber cuadran por sociedad; avisos de meses que faltan, archivos repetidos y apuntes duplicados.",
        "Tipos de cambio del mes del BCE: cierre para el balance, medio y medio acumulado para resultados.",
        "Queda registrado quién cargó, cuándo, desde qué archivo o llamada y con qué resultado."
      ]
    }
  },
};
