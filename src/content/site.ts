export type Lang = 'pt' | 'en';

export type Surface = 'canvas' | 'parchment' | 'dark' | 'dark-2' | 'dark-3' | 'void';

/* ------------------------------------------------------------------ */
/* Types                                                               */
/* ------------------------------------------------------------------ */

/** A measured result, split so the numeral can be counted up on scroll. */
export interface Metric {
  prefix?: string;
  value: number;
  decimals: number;
  suffix: string;
  label: string;
  note: string;
}

export interface Role {
  company: string;
  /** 192×192 WebP under /logos. Falls back to `initials`. */
  logo?: string;
  initials: string;
  title: string;
  period: string;
  summary: string;
  bullets: string[];
  stack: string[];
}

export interface StackGroup {
  title: string;
  note: string;
  items: string[];
}

export interface Certification {
  name: string;
  issuer: string;
}

export interface Fact {
  key: string;
  value: string;
}

/* ------------------------------------------------------------------ */

export const profile = {
  firstName: 'Julio',
  lastName: 'Zampieri',
  fullName: 'Julio Zampieri',
  email: 'contact.zampieri@gmail.com',
  phone: '+55 (11) 99129-2785',
  phoneHref: 'tel:+5511991292785',
  location: 'São Paulo, SP — Brasil',
  github: 'https://github.com/jzampieri',
  linkedin: 'https://www.linkedin.com/in/julio-cesar-zampieri',
  resume: '/curriculum.zampieri.pdf',
  year: new Date().getFullYear(),
} as const;

/* ------------------------------------------------------------------ */

interface Dictionary {
  nav: {
    sections: { id: string; label: string }[];
    resume: string;
    menu: string;
    close: string;
    reach: string;
  };
  hero: { title: string; role: string; current: string; scroll: string };
  about: { label: string; lead: string; body: string[]; facts: Fact[] };
  numbers: { label: string; title: string; items: Metric[] };
  work: {
    label: string;
    title: string;
    stackLabel: string;
    expand: string;
    collapse: string;
    roles: Role[];
  };
  stack: { label: string; title: string; groups: StackGroup[] };
  education: {
    label: string;
    title: string;
    degree: { course: string; school: string; period: string; note: string };
    certificationsTitle: string;
    certifications: Certification[];
  };
  contact: {
    label: string;
    title: string;
    body: string;
    links: { label: string; href: string; external?: boolean; download?: boolean }[];
  };
  footer: { rights: string; built: string; backToTop: string };
  preloader: { label: string };
}

/* ------------------------------------------------------------------ */

const pt: Dictionary = {
  nav: {
    sections: [
      { id: 'sobre', label: 'Sobre' },
      { id: 'numeros', label: 'Resultados' },
      { id: 'trabalho', label: 'Trabalho' },
      { id: 'stack', label: 'Stack' },
      { id: 'formacao', label: 'Formação' },
      { id: 'contato', label: 'Contato' },
    ],
    resume: 'Currículo',
    menu: 'Menu',
    close: 'Fechar',
    reach: 'FALE COMIGO',
  },
  hero: {
    title: 'Engenheiro de Software',
    role: 'Back-end · C#/.NET · Sistemas distribuídos',
    current: 'Hoje na Amdocs, engenharia core para a região CALA',
    scroll: 'Role',
  },
  about: {
    label: 'SOBRE',
    lead: 'Comecei arrumando folha de pagamento num ERP contábil. Hoje escrevo integração que atravessa fuso horário, idioma e operadora de telecom.',
    body: [
      'Trabalho em back-end C#/.NET com microsserviços, Kafka e AWS. Os sistemas que construo movem dinheiro, pedido e chamada. Coisa que ninguém pode perder no meio do caminho.',
      'Aprendi uma coisa nesses quatro anos: ninguém lembra do código bonito. Todo mundo lembra do dia em que o sistema caiu.',
    ],
    facts: [
      { key: 'Cargo', value: 'Engenheiro de Software · Amdocs' },
      { key: 'Base', value: 'São Paulo, SP · presencial flexível' },
      { key: 'Idiomas', value: 'Português nativo · Inglês C1' },
      { key: 'Formação', value: 'Eng. de Software · FIAP, dez/2026' },
    ],
  },
  numbers: {
    label: 'RESULTADOS',
    title: 'O que deu para medir',
    items: [
      {
        prefix: '8% → ',
        value: 3.6,
        decimals: 1,
        suffix: '%',
        label: 'Inadimplência',
        note: 'Plataforma de negociação de dívidas · Rede Decisão',
      },
      {
        value: 100,
        decimals: 2,
        suffix: '%',
        label: 'Estabilidade das conexões pós implementação de microsserviços',
        note: 'Integrações REST/SOAP do OpenDelivery · Keeta',
      },
      {
        prefix: '−',
        value: 27,
        decimals: 0,
        suffix: '%',
        label: 'Tempo de onboarding técnico',
        note: 'Padronização de APIs e documentação · Keeta',
      },
    ],
  },
  work: {
    label: 'TRABALHO',
    title: 'Por onde passei...',
    stackLabel: 'STACK',
    expand: 'Detalhes',
    collapse: 'Fechar',
    roles: [
      {
        company: 'Amdocs',
        logo: '/logos/amdocs.webp',
        initials: 'AM',
        title: 'Engenheiro de Software Pleno',
        period: '05/2026 — hoje',
        summary:
          'Engenharia core para a região CALA, sustentando sistemas críticos de operadoras na República Dominicana e no Chile.',
        bullets: [
          'Serviços de back-end e integrações em Java, com design patterns de nível enterprise.',
          'Modelagem de dados com Data Vault, garantindo rastreabilidade e consistência histórica.',
          'Deploy e orquestração de aplicações cloud-native em Red Hat OpenShift.',
        ],
        stack: ['Java', 'Data Vault', 'OpenShift', 'Scrum'],
      },
      {
        company: 'Keeta Delivery Brasil',
        logo: '/logos/keeta.webp',
        initials: 'KE',
        title: 'Analista Sênior de Integração de APIs',
        period: '12/2025 — 05/2026',
        summary:
          'Technical Integration Manager do OpenDelivery Brasil durante o lançamento da Keeta (Meituan) no país.',
        bullets: [
          'Liguei os parceiros locais ao time global, negociando em inglês com stakeholders na China.',
          'Padronizei fluxos de dados e documentação de API: 27% a menos de tempo de onboarding.',
          'Debugging de integrações REST/SOAP em C#/.NET sobre AWS, com 99,98% de estabilidade.',
        ],
        stack: ['C# / .NET', 'AWS', 'REST', 'SOAP', 'OpenDelivery'],
      },
      {
        company: 'Rede Decisão',
        logo: '/logos/rede-decisao.webp',
        initials: 'RD',
        title: 'Engenheiro de Software Pleno',
        period: '04/2025 — 12/2025',
        summary:
          'Plataforma de negociação de dívidas e o sistema que centralizou a operação de todas as unidades da rede.',
        bullets: [
          'Parametrização flexível de pagamento derrubou a inadimplência de 8% para 3,6%.',
          'Ciclo completo em Laravel e Vue.js, com cuidado extra na segurança das transações.',
          'Automações em Python e agentes de IA por disciplina para as ferramentas pedagógicas.',
        ],
        stack: ['Laravel', 'Vue.js', 'Docker', 'AWS', 'Python', 'MySQL'],
      },
      {
        company: 'CG Contadores',
        logo: '/logos/cg-contadores.webp',
        initials: 'CG',
        title: 'Engenheiro de Software Júnior',
        period: '04/2024 — 04/2025',
        summary:
          'ERP financeiro de gestão de colaboradores, lidando com dados sensíveis de RH e folha de pagamento.',
        bullets: [
          'Ciclo completo em Python (Django) e React, com padrão estrito de segurança.',
          'Otimização de queries em PostgreSQL para destravar os relatórios financeiros.',
          'CI/CD automatizado no lugar de deploy manual, e interfaces mobile em React Native.',
        ],
        stack: ['Python', 'Django', 'React', 'PostgreSQL', 'CI/CD', 'C# / .NET'],
      },
    ],
  },
  stack: {
    label: 'STACK',
    title: 'O que eu uso todo dia',
    groups: [
      {
        title: 'Back-end',
        note: 'Clean Architecture, SOLID e design patterns em APIs REST/SOAP para integração B2B.',
        items: ['C# / .NET Core', 'Java', 'Node.js', 'NestJS', 'Laravel', 'Django'],
      },
      {
        title: 'Sistemas distribuídos',
        note: 'Serviços desacoplados e integração assíncrona de alta disponibilidade entre domínios.',
        items: ['Apache Kafka', 'Microsserviços', 'REST', 'SOAP', 'OpenDelivery'],
      },
      {
        title: 'Cloud e DevOps',
        note: 'Ambientes escaláveis, orquestração de containers e entrega contínua.',
        items: ['AWS', 'Docker', 'Red Hat OpenShift', 'CI/CD', 'Git'],
      },
      {
        title: 'Dados',
        note: 'Modelagem e otimização de query em ambiente transacional de alto volume.',
        items: ['PostgreSQL', 'SQL Server', 'MySQL', 'Data Vault'],
      },
      {
        title: 'Front-end',
        note: 'Interface reativa ligada aos back-ends que eu mesmo escrevo.',
        items: ['React', 'Vue.js', 'TypeScript', 'React Native', 'Tailwind'],
      },
      {
        title: 'Automação e IA',
        note: 'Fluxo de automação e agentes para regra de negócio repetitiva.',
        items: ['Python', 'n8n', 'Flask', 'Agentes de IA'],
      },
    ],
  },
  education: {
    label: 'FORMAÇÃO',
    title: 'Ainda estudando',
    degree: {
      course: 'Bacharelado em Engenharia de Software',
      school: 'FIAP',
      period: '2023 — 2026',
      note: 'Formo em dezembro de 2026',
    },
    certificationsTitle: 'CERTIFICAÇÕES',
    certifications: [
      { name: 'Desenvolvimento .NET', issuer: 'FIAP' },
      { name: 'C#: criando sua primeira aplicação', issuer: 'FIAP' },
      { name: 'Big Data', issuer: 'FIAP' },
      { name: 'Data Driven Decision', issuer: 'FIAP' },
      { name: 'Data Visualization', issuer: 'FIAP' },
      { name: 'Python', issuer: 'FIAP' },
      { name: 'Fundamentos de IA Generativa', issuer: 'Bootcamp Universia' },
      { name: 'Python para Data Science', issuer: 'Alura' },
      { name: 'Django: templates e boas práticas', issuer: 'Alura' },
      { name: 'Linguagem C', issuer: 'Alura' },
    ],
  },
  contact: {
    label: 'CONTATO',
    title: 'Vamos conversar',
    body: 'Aberto a conversa sobre back-end, integração e sistemas distribuídos.',
    links: [
      { label: 'GitHub', href: profile.github, external: true },
      { label: 'LinkedIn', href: profile.linkedin, external: true },
      { label: 'Currículo em PDF', href: profile.resume, download: true },
    ],
  },
  footer: {
    rights: 'Todos os direitos reservados.',
    built: 'Feito por Julio Zampieri',
    backToTop: 'Topo',
  },
  preloader: { label: 'CARREGANDO' },
};

/* ------------------------------------------------------------------ */

const en: Dictionary = {
  nav: {
    sections: [
      { id: 'sobre', label: 'About' },
      { id: 'numeros', label: 'Results' },
      { id: 'trabalho', label: 'Work' },
      { id: 'stack', label: 'Stack' },
      { id: 'formacao', label: 'Education' },
      { id: 'contato', label: 'Contact' },
    ],
    resume: 'Resume',
    menu: 'Menu',
    close: 'Close',
    reach: 'GET IN TOUCH',
  },
  hero: {
    title: 'Software Engineer',
    role: 'Back-end · C#/.NET · Distributed systems',
    current: 'Currently at Amdocs, core engineering for the CALA region',
    scroll: 'Scroll',
  },
  about: {
    label: 'ABOUT',
    lead: 'I started fixing payroll in an accounting ERP. Today I write integrations that cross time zones, languages and telecom carriers.',
    body: [
      'I work on back-end C#/.NET with microservices, Kafka and AWS. The systems I build move money, orders and calls. Things nobody can afford to lose on the way.',
      'One thing these four years taught me: nobody remembers the elegant code. Everybody remembers the day the system went down.',
    ],
    facts: [
      { key: 'Role', value: 'Software Engineer · Amdocs' },
      { key: 'Based in', value: 'São Paulo, Brazil · flexible on-site' },
      { key: 'Languages', value: 'Portuguese native · English C1' },
      { key: 'Studying', value: 'Software Eng. · FIAP, Dec 2026' },
    ],
  },
  numbers: {
    label: 'RESULTS',
    title: 'What could be measured',
    items: [
      {
        prefix: '8% → ',
        value: 3.6,
        decimals: 1,
        suffix: '%',
        label: 'Default rate',
        note: 'Debt negotiation platform · Rede Decisão',
      },
      {
        value: 99.98,
        decimals: 2,
        suffix: '%',
        label: 'Connection stability',
        note: 'OpenDelivery REST/SOAP integrations · Keeta',
      },
      {
        prefix: '−',
        value: 27,
        decimals: 0,
        suffix: '%',
        label: 'Technical onboarding time',
        note: 'API and documentation standardisation · Keeta',
      },
    ],
  },
  work: {
    label: 'WORK',
    title: 'Four companies in four years',
    stackLabel: 'STACK',
    expand: 'Details',
    collapse: 'Close',
    roles: [
      {
        company: 'Amdocs',
        logo: '/logos/amdocs.webp',
        initials: 'AM',
        title: 'Software Engineer',
        period: '05/2026 — now',
        summary:
          'Core engineering for the CALA region, sustaining critical carrier systems in the Dominican Republic and Chile.',
        bullets: [
          'Back-end services and integrations in Java with enterprise-grade design patterns.',
          'Data modelling with Data Vault for historical traceability and consistency.',
          'Deployment and orchestration of cloud-native apps on Red Hat OpenShift.',
        ],
        stack: ['Java', 'Data Vault', 'OpenShift', 'Scrum'],
      },
      {
        company: 'Keeta Delivery Brasil',
        logo: '/logos/keeta.webp',
        initials: 'KE',
        title: 'Senior API Integration Analyst',
        period: '12/2025 — 05/2026',
        summary:
          'Technical Integration Manager for OpenDelivery Brazil during the Keeta (Meituan) launch in the country.',
        bullets: [
          'Connected local partners to the global team, negotiating in English with stakeholders in China.',
          'Standardised data flows and API docs: 27% less technical onboarding time.',
          'Debugged REST/SOAP integrations in C#/.NET on AWS, reaching 99.98% stability.',
        ],
        stack: ['C# / .NET', 'AWS', 'REST', 'SOAP', 'OpenDelivery'],
      },
      {
        company: 'Rede Decisão',
        logo: '/logos/rede-decisao.webp',
        initials: 'RD',
        title: 'Software Engineer (Mid-level)',
        period: '04/2025 — 12/2025',
        summary:
          'Debt negotiation platform, plus the system that centralised the operation of every unit in the network.',
        bullets: [
          'Flexible payment parameterisation cut the default rate from 8% to 3.6%.',
          'Full cycle in Laravel and Vue.js, with extra care on transaction security.',
          'Python automation and per-subject AI agents for the teaching tools.',
        ],
        stack: ['Laravel', 'Vue.js', 'Docker', 'AWS', 'Python', 'MySQL'],
      },
      {
        company: 'CG Contadores',
        logo: '/logos/cg-contadores.webp',
        initials: 'CG',
        title: 'Junior Software Engineer',
        period: '04/2024 — 04/2025',
        summary:
          'Financial ERP for workforce management, handling sensitive HR and payroll data.',
        bullets: [
          'Full cycle in Python (Django) and React under strict security standards.',
          'PostgreSQL query tuning to unblock the financial reporting modules.',
          'Automated CI/CD replacing manual deploys, plus mobile interfaces in React Native.',
        ],
        stack: ['Python', 'Django', 'React', 'PostgreSQL', 'CI/CD', 'C# / .NET'],
      },
    ],
  },
  stack: {
    label: 'STACK',
    title: 'What I use every day',
    groups: [
      {
        title: 'Back-end',
        note: 'Clean Architecture, SOLID and design patterns across REST/SOAP APIs for B2B integration.',
        items: ['C# / .NET Core', 'Java', 'Node.js', 'NestJS', 'Laravel', 'Django'],
      },
      {
        title: 'Distributed systems',
        note: 'Decoupled services and high-availability asynchronous integration across domains.',
        items: ['Apache Kafka', 'Microservices', 'REST', 'SOAP', 'OpenDelivery'],
      },
      {
        title: 'Cloud and DevOps',
        note: 'Scalable environments, container orchestration and continuous delivery.',
        items: ['AWS', 'Docker', 'Red Hat OpenShift', 'CI/CD', 'Git'],
      },
      {
        title: 'Data',
        note: 'Modelling and query tuning in high-volume transactional environments.',
        items: ['PostgreSQL', 'SQL Server', 'MySQL', 'Data Vault'],
      },
      {
        title: 'Front-end',
        note: 'Reactive interfaces wired to the back-ends I write myself.',
        items: ['React', 'Vue.js', 'TypeScript', 'React Native', 'Tailwind'],
      },
      {
        title: 'Automation and AI',
        note: 'Automation flows and agents for repetitive business rules.',
        items: ['Python', 'n8n', 'Flask', 'AI agents'],
      },
    ],
  },
  education: {
    label: 'EDUCATION',
    title: 'Still studying',
    degree: {
      course: 'Bachelor of Software Engineering',
      school: 'FIAP',
      period: '2023 — 2026',
      note: 'Graduating December 2026',
    },
    certificationsTitle: 'CERTIFICATIONS',
    certifications: [
      { name: '.NET Development', issuer: 'FIAP' },
      { name: 'C#: building your first application', issuer: 'FIAP' },
      { name: 'Big Data', issuer: 'FIAP' },
      { name: 'Data Driven Decision', issuer: 'FIAP' },
      { name: 'Data Visualization', issuer: 'FIAP' },
      { name: 'Python', issuer: 'FIAP' },
      { name: 'Generative AI Fundamentals', issuer: 'Bootcamp Universia' },
      { name: 'Python for Data Science', issuer: 'Alura' },
      { name: 'Django: templates and best practices', issuer: 'Alura' },
      { name: 'C Language', issuer: 'Alura' },
    ],
  },
  contact: {
    label: 'CONTACT',
    title: 'Let us talk',
    body: 'Open to conversations about back-end, integration and distributed systems.',
    links: [
      { label: 'GitHub', href: profile.github, external: true },
      { label: 'LinkedIn', href: profile.linkedin, external: true },
      { label: 'Resume (PDF)', href: profile.resume, download: true },
    ],
  },
  footer: {
    rights: 'All rights reserved.',
    built: 'Built by Julio Zampieri',
    backToTop: 'Top',
  },
  preloader: { label: 'LOADING' },
};

export const dictionaries: Record<Lang, Dictionary> = { pt, en };

export type { Dictionary };
