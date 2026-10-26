// Conteúdo da página inicial (pt). As palavras entre *asteriscos* ficam no verde da marca.
export default {
  nav: {
    links: [
      { label: "Experimente", id: "producto" },
      { label: "Dados", id: "datos" },
      { label: "Ecrãs", id: "pantallas" },
      { label: "Planos", id: "planes" },
      { label: "FAQ", id: "faq" },
    ],
    signIn: "Entrar",
    demo: "Peça uma demo",
  },
  hero: {
    eyebrow: "Reporting financeiro · Grupos multi-sociedade",
    title: "O fecho do grupo,",
    typing: ["em horas, não em dias.", "sem copiar e colar.", "do consolidado ao lançamento.", "com os câmbios do BCE já postos."],
    subLead: "Sem um Excel pelo meio.",
    sub: "O Next Reporting recebe a contabilidade de cada sociedade, valida-a, converte-a para a moeda do grupo e devolve-a em relatórios, KPIs e apresentações para a direção.",
    note: "Mostramos-lhe o produto em 30 minutos, com um grupo de exemplo. Respondemos em menos de 24 h.",
    noteLink: "Ver os planos",
    invite: "Isto é o Next Reporting. Experimente.",
  },
  form: {
    email: "voce@empresa.com",
    cta: "Peça a sua demo",
    step2: "Mais dois dados e escrevemos-lhe hoje.",
    name: "Nome",
    lastName: "Apelido",
    company: "Empresa",
    rolePh: "O seu cargo",
    send: "Enviar",
    sending: "A enviar…",
    okTitle: "Feito. Escrevemos-lhe hoje.",
    okBody: "Vai receber um email de confirmação. Se quiser, reserve já a hora:",
    okLink: "Escolher hora",
    errEmail: "Escreva um email válido.",
    errFields: "Preencha nome, apelido, empresa e cargo.",
    errGeneric: "Não foi possível enviar. Escreva-nos para info@atebiz.com.",
  },
  window: {
    title: "Demonstração de resultados",
    path: "grupo-norvia / dez-2025",
    views: { res: "Resultados", cmp: "Comparar", dim: "Dimensões", soc: "Sociedades" },
    group: "Grupo (consolidado)",
    sections: { A: "Receitas", B: "Custo das vendas", C: "Gastos operacionais" },
    calc: { GM: "Margem bruta", EBIT: "Resultado operacional" },
    colNow: "Dez 25", colPrior: "Dez 24", colDiff: "Dif.", colPct: "%",
    dims: ["Comercial", "Operações", "Estrutura"],
    contribution: "do grupo",
    local: "na sua moeda",
    rate: "câmbio médio",
    feed: [
      { tone: "bien", t: "Norvia UK carregou dezembro · 1.284 linhas · bate certo", ago: "há 2 min" },
      { tone: "info", t: "Câmbios do BCE de dezembro atualizados", ago: "há 9 min" },
      { tone: "avi", t: "Norvia Inc. ainda não carregou dezembro", ago: "aviso" },
      { tone: "bien", t: "Mapeamento guardado aplicado a diario_dez25.xlsx", ago: "há 14 min" },
    ],
    clickHint: "Toque numa conta e dizemos-lhe de onde vem",
    drawerTitle: "Rasto do dado",
    drawerUpload: "Carga",
    drawerJournals: "Ajustes",
    drawerElim: "Eliminações intragrupo",
    drawerRound: "Arredondamento",
    drawerFoot: "É assim que funciona no produto: cada valor consolidado abre-se até à linha local ou ao lançamento. Dados de exemplo.",
  },
  sources: {
    eyebrow: "Por onde entram os dados",
    title: "O seu fecho monta-se sozinho.",
    lead: "Ninguém tem tempo para refazer à mão a contabilidade de doze sociedades. O Next Reporting vai buscá-la onde ela já está, e o que não bate certo diz-lhe; não adivinha.",
    items: [
      { icon: "k", name: "Konsolidator", body: "Lê a consolidação tal como está, sem exportar nem importar nada.", plans: ["Base", "Pro", "Enterprise"] },
      { icon: "xls", name: "O seu Excel ou CSV", body: "Tal como sai do ERP. Sem modelo: o assistente entende as colunas.", plans: ["Pro", "Enterprise"] },
      { icon: "api", name: "A API", body: "O seu ERP envia os dados para um endpoint e ficam guardados no momento.", plans: ["Pro", "Enterprise"] },
      { icon: "dwh", name: "O seu Data Warehouse", body: "Ligação direta para chegar à transação.", plans: ["Enterprise"] },
    ],
    destTitle: "O seu fecho, montado",
    destBody: "Demonstração de resultados, balanço, KPIs, caixa e apresentações. Do grupo ou de cada sociedade.",
  },
  questions: {
    eyebrow: "Cada fecho",
    title: "Três perguntas, *todos os meses.*",
    lead: "Um diretor financeiro faz as mesmas três em cada fecho. O Next Reporting existe para lhes responder sem abrir quatro folhas de cálculo.",
    items: [
      { k: "01 · Como estamos", title: "O grupo, num relance", body: "Receitas, EBITDA, EBIT e resultado contra o mês anterior ou o ano passado. Do grupo, de uma holding ou de uma sociedade, mensal ou acumulado." },
      { k: "02 · O que não bate", title: "O que não devia assinar", body: "A sociedade que não carregou, o ficheiro repetido, o débito que não bate com o crédito, a conta sem mapear. Antes de chegar ao relatório." },
      { k: "03 · De onde vem", title: "Cada valor, com a sua origem", body: "Toque em qualquer valor e desça à conta local e ao lançamento: data, número, descritivo, contraparte e dimensões." },
    ],
  },
  auto: {
    eyebrow: "Automático por defeito",
    title: "A automatização não é um botão: *faz o trabalho sujo.*",
    lead: "Um relatório vazio não serve a ninguém e ninguém tem tempo para o preencher à mão. Aqui o assistente propõe *sempre*, e nada entra nos seus dados sem que uma pessoa confirme.",
    items: [
      { k: "Lê", title: "O seu ficheiro, tal como está", body: "Deteta as folhas, a linha de títulos e que coluna é a sociedade, a conta, o montante, a contraparte e as dimensões." },
      { k: "Valida", title: "Antes de guardar", body: "Débito e crédito por sociedade, meses em falta, ficheiros repetidos, lançamentos duplicados e saldos misturados com movimentos." },
      { k: "Memoriza", title: "Uma só vez", body: "O mapeamento fica guardado. Da próxima vez que chegar um ficheiro com o mesmo formato, aplica-se sozinho." },
    ],
    file: "diario_dez25_NorviaUK.xlsx",
    rows: [
      ["Data", "Conta", "Descritivo", "Débito", "Crédito", "CC"],
      ["01/12", "700000", "Vendas nacionais", "", "18.420,00", "COM"],
      ["03/12", "705900", "Serviços Norvia SA", "", "6.200,00", "OPS"],
      ["05/12", "640000", "Salários dezembro", "41.380,00", "", "EST"],
      ["09/12", "621000", "Renda escritório", "3.950,00", "", "EST"],
    ],
    read: "Ler o ficheiro",
    again: "Outra vez",
    hint: "o assistente propõe · você confirma",
    fields: [
      ["Folha", "Diário dez"],
      ["Títulos", "Linha 4"],
      ["Sociedade", "Norvia UK Ltd · GBP"],
      ["Conta", "Coluna B · 214 contas"],
      ["Montante", "Débito e Crédito"],
      ["Dimensão", "CC → Centro de custo"],
    ],
    ok: "Débito = Crédito · 1.284 linhas · 3 contas novas · mapeamento guardado",
  },
  money: {
    eyebrow: "As moedas",
    title: "Várias moedas, *cada uma ao seu câmbio.*",
    lead: "Um grupo com sociedades em euros, libras e dólares é o normal. Somá-las mal também. Aqui cada valor sabe a que câmbio foi convertido e de onde veio esse câmbio.",
    items: [
      { k: "Balanço", title: "Ao câmbio de fecho", body: "O balanço de cada sociedade converte-se ao câmbio do último dia do mês. E vê-se em cada sociedade." },
      { k: "Resultados", title: "Ao câmbio médio", body: "A demonstração de resultados ao médio do mês e ao médio acumulado. As diferenças de conversão, calculadas." },
      { k: "Sem procurar", title: "Os câmbios põem-se sozinhos", body: "Obtidos do Banco Central Europeu ao carregar, com data e fonte. Se uma moeda não for publicada, do investing.com." },
    ],
    fx: [["Moeda", "Fecho", "Médio"], ["EUR/GBP", "0,8612", "0,8590"], ["EUR/USD", "1,0853", "1,0791"], ["EUR/DKK", "7,4589", "7,4577"]],
    fxNote: "Exemplo",
  },
  today: {
    eyebrow: "Sem promessas",
    title: "O que já pode *fazer hoje.*",
    lead: "Não é uma lista de intenções: é o que está construído e a funcionar.",
    cols: [
      [
        ["Arraste o Excel do ERP", " e o assistente entende-o, sem modelo."],
        ["Ligue o seu ERP por API", " com chave da empresa e token pessoal."],
        ["Receba os câmbios do BCE", " todos os meses, sem os procurar."],
        ["Agregue o grupo", " com eliminações intragrupo e conversão cambial."],
      ],
      [
        ["Compare até quatro períodos", " lado a lado, com diferença em valor e em %."],
        ["Desça do total ao lançamento", " a partir de qualquer valor."],
        ["KPIs que se montam sozinhos", " sobre o seu plano de contas, e os seus com um assistente."],
        ["Fluxo de caixa indireto e direto", ", verificado contra a tesouraria."],
      ],
      [
        ["Apresentações ao vivo", ": mude o período com um clique e exporte para .pptx."],
        ["O anexo PGC ou IFRS-UE", " que se preenche e bate certo sozinho."],
        ["Mapeie o seu plano local para o do grupo", " uma vez, com vigência por datas."],
        ["Dê a cada utilizador as suas páginas", ", sociedades e dimensões, nada mais."],
      ],
    ],
  },
  audience: {
    eyebrow: "Para quem",
    title: "Grupos que *fecham todos os meses.*",
    lead: "Várias sociedades, várias moedas, vários planos de contas. E alguém que tem de explicar tudo no dia 5.",
    items: [
      { icon: "cfo", title: "Direção financeira", body: "O mês do grupo num só ecrã e a apresentação do conselho feita." },
      { icon: "ctl", title: "Controllers", body: "Comparações, dimensões e KPIs sem reconstruir a folha todos os meses." },
      { icon: "cons", title: "Equipas de consolidação", body: "Cargas que se validam sozinhas e um rasto que explica cada eliminação." },
      { icon: "desp", title: "Gabinetes e consultores", body: "Os relatórios dos seus clientes, com as cores deles e no idioma deles." },
    ],
  },
  screens: {
    eyebrow: "Ecrãs",
    title: "É assim que se vê, *tal e qual.*",
    lead: "Nada de maquetas: são capturas do produto. Escolha uma.",
    items: [
      { id: "home", icon: "home", tab: "Início", short: "O mês do grupo", title: "O mês do grupo, num só ecrã", body: "KPIs principais com a sua variação, evolução, ranking de sociedades e análises prontas. Abre no último mês com dados.", img: "/report/home.webp", alt: "Painel inicial do Next Reporting com KPIs do grupo" },
      { id: "compare", icon: "cols", tab: "Comparação", short: "Até quatro períodos", title: "Quatro períodos lado a lado", body: "Real contra mês anterior, ano anterior e orçamento, com diferenças em valor e em %. E tudo continua a descer ao detalhe.", img: "/report/comparison.webp", alt: "Comparação de quatro períodos" },
      { id: "kpis", icon: "kpi", tab: "KPIs", short: "Rácios com estado", title: "Rácios que se montam sozinhos", body: "Liquidez, solvência, rentabilidade, eficiência e mercado sobre o seu plano de contas, com intervalos de cor.", img: "/report/kpis.webp", alt: "Quadro de KPIs por sociedade" },
      { id: "dimensions", icon: "dim", tab: "Dimensões", short: "Centros de custo", title: "Por departamento, projeto ou centro de custo", body: "Uma coluna por dimensão e um mapa de calor conta × dimensão para descer ao detalhe.", img: "/report/dimensions.webp", alt: "Página de dimensões" },
      { id: "cashflow", icon: "cash", tab: "Fluxo de caixa", short: "Por sociedade", title: "Um fluxo de caixa por sociedade", body: "Indireto e, com dados próprios, direto. Vários meses e sociedades ao mesmo tempo, verificado contra a tesouraria.", img: "/report/cashflow.webp", alt: "Fluxo de caixa por sociedade" },
      { id: "trail", icon: "trail", tab: "Consolidado", short: "Folha e rasto", title: "A folha de consolidação, explicada", body: "Contribuição de cada sociedade, ajustes e eliminações. O rasto do dado segue qualquer valor até à origem.", img: "/report/consolidation-sheet.webp", alt: "Folha de consolidação" },
      { id: "mapper", icon: "map", tab: "Mapeamentos", short: "Plano local → grupo", title: "O seu plano local, no plano do grupo", body: "Arraste as contas de cada sociedade para as linhas do grupo. PGC, SNC, IFRS e IFRS 18.", img: "/report/mapper.webp", alt: "Mapeador de contas" },
      { id: "decks", icon: "deck", tab: "Apresentações", short: "O conselho, feito", title: "A apresentação do mês seguinte, com um clique", body: "KPIs, gráficos e a folha de consolidação em diapositivos que leem os dados ao abrir. Exporta para .pptx.", img: "/report/deck-editor.webp", alt: "Editor de apresentações" },
      { id: "memory", icon: "memo", tab: "Anexo", short: "PGC · IFRS-UE", title: "Um anexo que bate certo sozinho", body: "Quadros de movimentos que batem certo, cada valor diz de onde vem, e exportação para Word, PDF e Excel.", img: "/report/memory-movements.webp", alt: "Anexo com quadro de movimentos" },
    ],
    demoCta: "Ver com os meus dados",
  },
  plans: {
    eyebrow: "Planos",
    title: "Escolhe por onde *entram os seus dados.*",
    lead: "Os relatórios são os mesmos em todos os planos. O que muda é de onde o Next Reporting lê e até onde chega.",
    steps: [
      { t: "Uma demo de 30 minutos", b: "Mostramos o produto com um grupo de exemplo: cargas, validação, relatórios e apresentações." },
      { t: "Escolhe o plano", b: "Conforme onde estão hoje os seus dados: Konsolidator, os seus ficheiros ou o seu Data Warehouse." },
      { t: "Primeiro fecho cá dentro", b: "Configuramos consigo estrutura e mapeamentos, e o fecho seguinte já sai daqui." },
    ],
    ask: "Consolidam no Konsolidator?",
    options: ["Sim", "Sim, e também dados próprios", "Não"],
    recommend: { 0: "base", 1: "enterprise", 2: "pro" },
    badge: "Encaixa consigo",
    price: "Preço",
    priceValue: "à medida",
    items: [
      { id: "base", name: "Base", who: "Para grupos que já consolidam no Konsolidator.", source: "Lê do Konsolidator", features: ["Individual e consolidado", "Folha de consolidação e rasto do dado", "KPIs, dimensões e fluxo de caixa", "Apresentações e anexo", "Permissões por utilizador e página"], cta: "Pedir preço" },
      { id: "pro", name: "Pro", who: "Para grupos que carregam os seus dados e querem a sua estrutura.", source: "Konsolidator ou os seus ficheiros e API", features: ["Tudo o que o Base inclui", "Carga Excel/CSV com assistente e API", "Histórico com verificações", "Câmbios automáticos do BCE", "Agregados com eliminações intragrupo", "Estúdio de estruturas do grupo"], cta: "Pedir preço" },
      { id: "enterprise", name: "Enterprise", who: "A consolidação e o detalhe até à transação, juntos.", source: "Konsolidator + os seus dados + Data Warehouse", features: ["Tudo o que o Pro inclui", "Konsolidator e dados próprios ao mesmo tempo", "Ligação direta ao seu Data Warehouse", "Do consolidado ao lançamento original", "Acompanhamento na implementação"], cta: "Falemos" },
    ],
    extras: [
      { name: "Low", text: "Só precisa de consultar? Acesso básico aos relatórios sobre os seus dados do Konsolidator." },
      { name: "Max", text: "Grupo grande ou muito volume? Tudo o que o Pro inclui, sem limites." },
    ],
    compareTitle: "Ver o comparativo completo",
    compareOpen: "abrir",
    matrix: [
      ["Origem Konsolidator", true, true, true],
      ["Excel ou CSV com assistente", false, true, true],
      ["API de carga", false, true, true],
      ["Konsolidator e dados próprios ao mesmo tempo", false, "Um ou outro", true],
      ["Ligação a Data Warehouse", false, false, true],
      ["Individual: dados, KPIs, dimensões, caixa", true, true, true],
      ["Consolidado: folha e rasto do dado", true, "Com Konsolidator", true],
      ["Agregados com eliminações", false, true, true],
      ["Câmbios automáticos (BCE)", false, true, true],
      ["Apresentações e anexo", true, true, true],
    ],
  },
  security: {
    eyebrow: "Segurança",
    title: "Os seus dados, *só seus.*",
    lead: "Cada empresa vê só os seus dados e cada utilizador só as páginas que lhe dá.",
    items: [
      ["Dados isolados por empresa", ": segurança por linha em todas as tabelas."],
      ["Permissões por página", ", sociedade, estrutura, cenário, dimensão e mapeamento."],
      ["Partilha com controlo", ": privado, toda a empresa ou certas pessoas."],
      ["API protegida", " com chave da empresa e token pessoal, guardados só como impressão."],
      ["Tudo fica registado", ": quem carregou, quando, de onde e com que resultado."],
      ["Quatro idiomas", ": espanhol, inglês, dinamarquês e português."],
    ],
  },
  faq: {
    eyebrow: "Perguntas",
    title: "O que *sempre nos perguntam.*",
    items: [
      { q: "Preciso do Konsolidator para usar o Next Reporting?", a: "Não necessariamente. O Base lê a consolidação do Konsolidator. O Pro trabalha com o Konsolidator ou com os seus dados carregados por Excel, CSV ou API. O Enterprise junta as duas vias e liga-se ao seu Data Warehouse." },
      { q: "Os meus ficheiros têm de seguir um modelo?", a: "Não. Arrasta o ficheiro tal como sai do ERP e o assistente deteta folhas, linha de títulos e colunas. Se guardar o mapeamento, da próxima vez aplica-se sozinho." },
      { q: "Que diferença há entre consolidado e agregado?", a: "O consolidado é o que se faz no Konsolidator. Com dados próprios, o Next Reporting agrega as sociedades sobre um plano de grupo, com eliminações intragrupo e conversão cambial." },
      { q: "Até que nível de detalhe chego?", a: "De qualquer valor desce à conta local e ao lançamento. O Enterprise liga-se ao seu Data Warehouse para chegar à transação a partir do consolidado." },
      { q: "De onde vêm os câmbios?", a: "Do Banco Central Europeu ao carregar e, se não publicar a moeda, do investing.com: fecho para o balanço, médio do mês e médio acumulado para resultados." },
      { q: "O que acontece se voltar a carregar um mês?", a: "Há uma só versão em vigor por sociedade, cenário e mês: voltar a carregar substitui, nunca soma. E diz-lhe que contas são novas, quais mudam e quais passam a zero." },
      { q: "É preciso instalar alguma coisa?", a: "Não. É uma aplicação web, em espanhol, inglês, dinamarquês e português." },
    ],
  },
  final: {
    title: "Vemos *juntos?*",
    lead: "Em 30 minutos mostramos como um grupo de exemplo passa dos Excel de cada sociedade ao relatório para a administração. Sem compromisso.",
    full: "Prefere o formulário completo?",
  },
  portal: {
    "crumb": "Next Reporting",
    "live": "Ao vivo",
    "chips": [
      "Dez 2025",
      "Consolidado",
      "EUR"
    ],
    "groups": [
      {
        "label": "Início",
        "items": [
          [
            "inicio",
            "Visão geral",
            "home"
          ],
          [
            "cierre",
            "Cada fecho",
            "play"
          ]
        ]
      },
      {
        "label": "Produto",
        "items": [
          [
            "datos",
            "Dados",
            "db"
          ],
          [
            "auto",
            "Automático",
            "zap"
          ],
          [
            "ahorro",
            "Tempo poupado",
            "clock"
          ],
          [
            "monedas",
            "Moedas",
            "coins"
          ],
          [
            "pantallas",
            "Ecrãs",
            "layout"
          ]
        ]
      },
      {
        "label": "Começar",
        "items": [
          [
            "planes",
            "Planos",
            "tag"
          ],
          [
            "seguridad",
            "Segurança",
            "shield"
          ],
          [
            "faq",
            "Perguntas",
            "help"
          ],
          [
            "contacto",
            "Peça a sua demo",
            "send"
          ]
        ]
      }
    ],
    "heroChart": "Receitas do grupo · últimos 12 meses",
    "toasts": [
      "Norvia UK carregou dezembro · bate certo",
      "Câmbios do BCE atualizados",
      "Mapeamento aplicado a diario_dez25.xlsx",
      "Norvia Inc. ainda não carregou dezembro"
    ],
    "scroll": "Deslize"
  },
  kpis: [
    {
      "label": "Receitas",
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
      "label": "Dívida líquida / EBITDA",
      "value": 2.34,
      "delta": "−0,4",
      "tone": "down",
      "decimals": 2
    }
  ],
  pillars: {
    "eyebrow": "Tempo é dinheiro",
    "title": "Dedique o fecho a analisar, *não a preparar dados.*",
    "items": [
      {
        "k": "01",
        "title": "Carga em minutos.",
        "body": "Arraste o Excel tal como sai do ERP ou ligue-o por API. O formato fica memorizado e da próxima vez aplica-se sozinho.",
        "visual": "upload"
      },
      {
        "k": "02",
        "title": "Erros antes de chegarem ao relatório.",
        "body": "Meses em falta, cargas que não batem certo ou ficheiros repetidos são assinalados no momento.",
        "visual": "checks"
      },
      {
        "k": "03",
        "title": "Do consolidado ao lançamento.",
        "body": "Qualquer valor explica-se com um clique, até ao lançamento que o forma.",
        "visual": "drill"
      }
    ],
    "uploadFile": "diario_out25_ERP.xlsx",
    "uploadSteps": [
      "Folhas detetadas",
      "Linha de títulos: 4",
      "Sociedade · Conta · Montante",
      "Mapeamento guardado aplicado"
    ],
    "checks": [
      {
        "ok": true,
        "t": "Débito e crédito batem certo por sociedade"
      },
      {
        "ok": false,
        "t": "Falta novembro na Norvia UK"
      },
      {
        "ok": false,
        "t": "Mesmo ficheiro carregado em dois meses"
      },
      {
        "ok": true,
        "t": "Câmbios do mês obtidos do BCE"
      }
    ],
    "drill": [
      "Grupo · Receitas",
      "Norvia UK Ltd",
      "705000 Serviços",
      "Lançamento 2025/1184"
    ]
  },
  tasks: {
    "eyebrow": "Rapidez e eficiência",
    "title": "A poupança está *nos passos que desaparecem.*",
    "sub": "Cada tarefa mensal que hoje passa por Excel, email e revisão manual faz-se na aplicação com um ou dois cliques.",
    "colTask": "Tarefa do fecho",
    "excel": "Sem Next Reporting",
    "report": "Com Next Reporting",
    "rows": [
      [
        "Receber a contabilidade de cada sociedade",
        "Pedir o Excel, adaptá-lo a um modelo e colá-lo",
        "Arrasta-se o ficheiro tal como sai do ERP, ou chega sozinho por API"
      ],
      [
        "Carregar o mesmo formato no mês seguinte",
        "Repetir o ajuste de colunas",
        "O mapeamento guardado é reconhecido e aplicado sozinho"
      ],
      [
        "Saber que sociedade falta ou carregou mal",
        "Rever sociedade a sociedade",
        "O histórico avisa de meses em falta, ficheiros repetidos e lançamentos duplicados"
      ],
      [
        "Câmbios do mês",
        "Procurá-los no site do BCE e copiá-los",
        "Obtidos ao carregar: fecho, médio do mês e médio acumulado"
      ],
      [
        "Passar dos planos locais ao plano do grupo",
        "Tabelas de equivalências em Excel",
        "Mapeamento arrastando contas, com vigência por datas, uma só vez"
      ],
      [
        "Agregar o grupo e eliminar intragrupo",
        "Somas e cruzamentos à mão",
        "Agregado com eliminações e conversão cambial num só ecrã"
      ],
      [
        "Explicar uma variação",
        "Procurar no diário o lançamento que a causa",
        "Clique no valor até ao lançamento"
      ],
      [
        "Rácios e KPIs",
        "Recalcular fórmulas todos os meses",
        "Montam-se sozinhos sobre o plano de contas e atualizam-se"
      ],
      [
        "Apresentação mensal",
        "Refazer gráficos e tabelas em PowerPoint",
        "Mudar o período com um clique e exportar para .pptx"
      ],
      [
        "Notas do anexo",
        "Montar os quadros de movimentos à mão",
        "Preenchem-se e batem certo sozinhos"
      ]
    ],
    "speed": {
      "from": 8,
      "to": 1,
      "unit": "s",
      "prefix": "<",
      "label": "Mudar entre demonstração de resultados e balanço. Antes 3–8 s, agora menos de 1 s (testes internos)."
    },
    "notBi": "E não, não é uma ferramenta de BI. Uma BI desenha gráficos; o Next Reporting entende sociedades, moedas, planos de contas, participações e eliminações."
  },
  flow: {
    "hub": "Next Reporting",
    "hubSub": "Valida · converte · reporta",
    "inputs": [
      {
        "id": "konsolidator",
        "name": "Konsolidator",
        "detail": "A consolidação, sem exportar nada",
        "plans": [
          "base",
          "pro",
          "enterprise"
        ]
      },
      {
        "id": "excel",
        "name": "Excel ou CSV",
        "detail": "Tal como sai do ERP, com assistente",
        "plans": [
          "pro",
          "enterprise"
        ]
      },
      {
        "id": "api",
        "name": "API",
        "detail": "Um endpoint, a sua chave, o seu token",
        "plans": [
          "pro",
          "enterprise"
        ]
      },
      {
        "id": "dwh",
        "name": "Data Warehouse",
        "detail": "Direto ao nível transacional",
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
        "name": "Agregados com eliminações",
        "plans": [
          "pro",
          "enterprise"
        ]
      },
      {
        "id": "kpis",
        "name": "KPIs · Caixa · Apresentações",
        "plans": [
          "base",
          "pro",
          "enterprise"
        ]
      },
      {
        "id": "transactional",
        "name": "Até à transação (DWH)",
        "plans": [
          "enterprise"
        ]
      }
    ],
    "pickPlan": "Ver com o plano",
    "planNotes": {
      "base": "O Base lê a consolidação do Konsolidator diretamente.",
      "pro": "O Pro trabalha com o Konsolidator ou com dados próprios (Excel, CSV ou API).",
      "enterprise": "O Enterprise junta as duas vias ao mesmo tempo e liga-se ao seu Data Warehouse."
    },
    "everyLoad": {
      "title": "O que acontece em cada carga, sem ninguém pedir",
      "items": [
        "Uma só versão em vigor por sociedade, cenário e mês: voltar a carregar substitui, nunca soma.",
        "Só mudam as diferenças: contas novas, que mudam e que passam a zero.",
        "Débito e crédito batem certo por sociedade; avisos de meses em falta, ficheiros repetidos e lançamentos duplicados.",
        "Câmbios do mês do BCE: fecho para o balanço, médio e médio acumulado para resultados.",
        "Fica registado quem carregou, quando, a partir de que ficheiro ou chamada e com que resultado."
      ]
    }
  },
};
