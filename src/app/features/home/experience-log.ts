import { ChangeDetectionStrategy, Component, computed, input, signal } from '@angular/core';

type Category = 'experience' | 'education';

interface DetailPoint {
  readonly heading: string;
  readonly body: string;
}

interface CareerEntry {
  readonly id: string;
  readonly slug: string;
  readonly category: Category;
  readonly hash: string;
  readonly badge?: { readonly pt: string; readonly en: string };
  readonly title: { readonly pt: string; readonly en: string };
  readonly organization: { readonly pt: string; readonly en: string };
  readonly period: { readonly pt: string; readonly en: string };
  readonly summary?: { readonly pt: string; readonly en: string };
  readonly points?: readonly { readonly heading: { readonly pt: string; readonly en: string }; readonly body: { readonly pt: string; readonly en: string } }[];
  readonly tags: readonly string[];
}

const CAREER_ENTRIES: readonly CareerEntry[] = [
  {
    id: 'cti',
    slug: 'cti-consultores',
    category: 'experience',
    hash: '26a5cti',
    badge: { pt: 'HEAD -> atual', en: 'HEAD -> current' },
    title: { pt: 'Software Developer', en: 'Software Developer' },
    organization: { pt: 'CTI Consultores Associados', en: 'CTI Consultores Associados' },
    period: { pt: 'Mai/2026 - Atual', en: 'May/2026 - Present' },
    points: [
      {
        heading: { pt: 'Análise de Requisitos e Alinhamento de Negócio', en: 'Requirements Analysis & Business Alignment' },
        body: {
          pt: 'Participação ativa em sessões de levantamento e análise de requisitos junto a clientes e à equipe técnica, ajudando a traduzir regras de negócio e necessidades operacionais em soluções técnicas eficientes.',
          en: 'Actively participated in requirements gathering and analysis sessions alongside clients and the technical team, helping translate business rules and operational needs into efficient technical solutions.',
        },
      },
      {
        heading: { pt: 'Desenvolvimento de Sistemas Escaláveis', en: 'Scalable Systems Development' },
        body: {
          pt: 'Desenvolvimento e implementação de soluções escaláveis no ecossistema IBM Planning Analytics, contribuindo para alta performance e fluxos estruturados de processamento de dados.',
          en: 'Developed and implemented scalable solutions within the IBM Planning Analytics ecosystem, contributing to high performance and structured data processing workflows.',
        },
      },
      {
        heading: { pt: 'Análise e Processamento de Dados', en: 'Data Analysis & Processing' },
        body: {
          pt: 'Execução de rotinas de extração, análise, limpeza e transformação de dados para garantir integridade, otimizar consultas e apoiar as entregas aos clientes.',
          en: 'Executed data extraction, analysis, cleansing, and transformation routines to ensure data integrity, optimize queries, and support client deliverables.',
        },
      },
      {
        heading: { pt: 'Manutenção e Depuração de Software', en: 'Software Maintenance & Debugging' },
        body: {
          pt: 'Atuação em manutenção corretiva e evolutiva contínua de software, depurando funções, resolvendo incidentes e refinando regras para garantir estabilidade e confiabilidade em produção.',
          en: 'Contributed to ongoing corrective and evolutionary software maintenance by debugging functions, resolving issues, and refining logic to ensure production stability and reliability.',
        },
      },
    ],
    tags: ['IBM Planning Analytics', 'Data Processing', 'Requirements', 'Debugging'],
  },
  {
    id: 'independent',
    slug: 'independent-projects',
    category: 'experience',
    hash: '23c3dev',
    badge: { pt: 'atual', en: 'current' },
    title: { pt: 'Full Stack Developer', en: 'Full Stack Developer' },
    organization: { pt: 'Independent / Contract Projects', en: 'Independent / Contract Projects' },
    period: { pt: 'Mar/2023 - Atual', en: 'Mar/2023 - Present' },
    points: [
      {
        heading: { pt: 'Levantamento de Requisitos e Soluções Sob Medida', en: 'Requirements Gathering & Custom Solutions' },
        body: {
          pt: 'Levantamento e análise de requisitos diretamente com clientes, traduzindo necessidades operacionais e regras de negócio em sistemas web completos entregues em produção.',
          en: 'Gathered and analyzed requirements directly with clients, translating operational needs and business rules into full-featured web systems deployed in production.',
        },
      },
      {
        heading: { pt: 'Desenvolvimento Back-End e APIs', en: 'Backend & API Development' },
        body: {
          pt: 'Construção de APIs RESTful escaláveis com Java e ecossistema Spring (Spring Boot, Security, Data JPA), aplicando código limpo, autenticação segura e integrações com terceiros.',
          en: 'Built scalable RESTful APIs using Java and the Spring ecosystem (Spring Boot, Security, Data JPA), applying clean code practices, secure authentication, and third-party integrations.',
        },
      },
      {
        heading: { pt: 'Desenvolvimento Front-End e UX', en: 'Frontend Development & UX' },
        body: {
          pt: 'Criação de interfaces dinâmicas e responsivas com React, Angular e TypeScript, garantindo integração fluida com serviços de back-end e uma experiência consistente para o usuário.',
          en: 'Created dynamic, responsive user interfaces with React, Angular, and TypeScript, ensuring seamless integration with backend services and a smooth end-user experience.',
        },
      },
      {
        heading: { pt: 'Bancos de Dados, Containers e Deploy', en: 'Databases, Containerization & Deployment' },
        body: {
          pt: 'Modelagem de bancos de dados relacionais (PostgreSQL e MySQL), padronização de ambientes com Docker e gestão de deploys em produção junto à manutenção contínua.',
          en: 'Modeled relational databases (PostgreSQL and MySQL), standardized environments using Docker, and managed production deployments alongside ongoing maintenance.',
        },
      },
    ],
    tags: ['Java', 'Spring Boot', 'React', 'Angular', 'TypeScript', 'PostgreSQL', 'MySQL', 'Docker'],
  },
  {
    id: 'datatrusty',
    slug: 'datatrusty-tecnologia',
    category: 'experience',
    hash: '24b1dtt',
    title: { pt: 'Analista de Suporte e Sistemas', en: 'Systems & Support Analyst' },
    organization: { pt: 'DataTrusty Tecnologia', en: 'DataTrusty Tecnologia' },
    period: { pt: 'Nov/2024 - Mai/2026', en: 'Nov/2024 - May/2026' },
    points: [
      {
        heading: {
          pt: 'Desenvolvimento Full Stack (React, Spring Boot, PostgreSQL)',
          en: 'Full Stack Development (React, Spring Boot, PostgreSQL)',
        },
        body: {
          pt: 'Desenvolvimento e entrega em produção de 2 aplicações web internas com usuários ativos: um sistema de Gestão de Incidentes de Qualidade (substituindo planilhas Excel) e uma plataforma de Controle de Visitas Corporativas com geração de relatórios.',
          en: 'Developed and delivered 2 internal web applications to production with active users: a Quality Incident Management system (replacing Excel spreadsheets) and a Corporate Visit Control platform with report generation.',
        },
      },
      {
        heading: {
          pt: 'Automação Operacional (Java, JS, MySQL)',
          en: 'Operational Automation (Java, JS, MySQL)',
        },
        body: {
          pt: 'Criação e implantação de uma aplicação web para impressão automatizada de etiquetas integrando mais de 1.000 produtos, eliminando processos manuais no envio de amostras a clientes.',
          en: 'Built and deployed a web application for automated label printing integrating over 1,000 products, eliminating manual steps in shipping samples to clients.',
        },
      },
      {
        heading: {
          pt: 'Deploy e Infraestrutura de TI',
          en: 'Deployment & IT Infrastructure',
        },
        body: {
          pt: 'Administração do ambiente produtivo das aplicações (configuração de VMs, redes, CORS e integrações), gestão de acesso remoto seguro (VPN/Cato Client) e suporte técnico de hardware e redes on-site.',
          en: 'Administered the production application environment (VM setup, networking, CORS, and integrations), managed secure remote access (VPN/Cato Client), and provided on-site hardware and network technical support.',
        },
      },
    ],
    tags: ['React', 'Spring Boot', 'PostgreSQL', 'Java', 'JavaScript', 'MySQL', 'VMs & Redes', 'VPN/Cato'],
  },
  {
    id: 'dell',
    slug: 'dell-technologies',
    category: 'experience',
    hash: '24a1del',
    title: { pt: 'Analista de Suporte Técnico N1', en: 'Technical Support Analyst L1' },
    organization: { pt: 'Dell Technologies', en: 'Dell Technologies' },
    period: { pt: 'Jan/2024 - Nov/2024', en: 'Jan/2024 - Nov/2024' },
    points: [
      {
        heading: {
          pt: 'Suporte Técnico N1 e Diagnósticos',
          en: 'Tier 1 Support & Diagnostics',
        },
        body: {
          pt: 'Atuação em suporte técnico Nível 1 com foco em diagnóstico de hardware e software, troubleshooting e resolução de incidentes para sistemas Dell.',
          en: 'Provided Tier 1 technical support focused on hardware and software diagnostics, troubleshooting, and incident resolution for Dell systems.',
        },
      },
      {
        heading: {
          pt: 'Manutenção Preventiva e Gestão de Chamados',
          en: 'Preventive Maintenance & Ticket Management',
        },
        body: {
          pt: 'Execução de rotinas de manutenção preventiva e condução do registro, triagem e acompanhamento de chamados para resolução ágil de incidentes.',
          en: 'Performed preventive maintenance routines while managing ticket logging, triage, and tracking for rapid incident resolution.',
        },
      },
    ],
    tags: ['Hardware', 'Diagnostics', 'Troubleshooting', 'Service Desk'],
  },
  {
    id: 'limpay',
    slug: 'limpay',
    category: 'experience',
    hash: '23h8lmp',
    title: { pt: 'Desenvolvedor Back-End e Banco de Dados', en: 'Back-End & Database Developer' },
    organization: { pt: 'Limpay', en: 'Limpay' },
    period: { pt: 'Ago/2023 - Dez/2023', en: 'Aug/2023 - Dec/2023' },
    points: [
      {
        heading: {
          pt: 'Concepção do Produto e UX/UI (Figma)',
          en: 'Product Lifecycle & UX/UI (Figma)',
        },
        body: {
          pt: 'Participação em todo o ciclo de desenvolvimento de uma plataforma para simplificar a rotina operacional de profissionais de limpeza na Limpay (projeto educacional de startup), incluindo design UX/UI e prototipação no Figma.',
          en: 'Contributed across the full project lifecycle of a platform designed to streamline daily operations for cleaning professionals at Limpay (an educational startup project), including UX/UI design and prototyping in Figma.',
        },
      },
      {
        heading: {
          pt: 'Desenvolvimento Back-End e Banco de Dados (Java, Spring Boot, MySQL)',
          en: 'Back-End & Database Implementation (Java, Spring Boot, MySQL)',
        },
        body: {
          pt: 'Implementação do back-end e modelagem do banco de dados utilizando Java, Spring Boot e MySQL em colaboração próxima com uma equipe multidisciplinar.',
          en: 'Implemented backend services and relational data modeling using Java, Spring Boot, and MySQL, collaborating closely within a cross-functional team.',
        },
      },
    ],
    tags: ['Java', 'Spring Boot', 'MySQL', 'Figma'],
  },
  {
    id: 'uninter',
    slug: 'uninter-ads',
    category: 'education',
    hash: '24e8uni',
    badge: { pt: 'em andamento', en: 'in progress' },
    title: { pt: 'Tecnólogo em Análise e Desenvolvimento de Sistemas', en: 'Systems Analysis and Development (Degree)' },
    organization: { pt: 'Uninter', en: 'Uninter' },
    period: { pt: 'Ago/2024 - Dez/2026', en: 'Aug/2024 - Dec/2026' },
    points: [
      {
        heading: { pt: 'Formação Superior', en: 'Undergraduate Program' },
        body: {
          pt: 'Graduação tecnológica focada em engenharia de software, análise de requisitos, desenvolvimento de sistemas, bancos de dados e arquitetura de aplicações.',
          en: 'Undergraduate technology degree focused on software engineering, requirements analysis, systems development, databases, and application architecture.',
        },
      },
    ],
    tags: ['ADS', 'Engenharia de Software', 'Arquitetura', 'Banco de Dados'],
  },
  {
    id: 'proa',
    slug: 'proa-senac',
    category: 'education',
    hash: '23e8pro',
    title: { pt: 'Programador Full Stack', en: 'Full Stack Developer Program' },
    organization: { pt: 'Instituto PROA / Senac', en: 'Instituto PROA / Senac' },
    period: { pt: 'Ago/2023 - Dez/2023', en: 'Aug/2023 - Dec/2023' },
    points: [
      {
        heading: { pt: 'Formação Intensiva Full Stack', en: 'Intensive Full Stack Program' },
        body: {
          pt: 'Formação intensiva em desenvolvimento Full Stack com foco em projetos práticos em equipe, front-end, back-end, banco de dados e desenvolvimento profissional.',
          en: 'Intensive Full Stack development program centered on hands-on team projects, front-end, back-end, databases, and career readiness.',
        },
      },
    ],
    tags: ['Full Stack', 'Java', 'Web', 'Projetos'],
  },
  {
    id: 'etec',
    slug: 'etec-redes',
    category: 'education',
    hash: '22e8etc',
    title: { pt: 'Técnico em Redes de Computadores', en: 'Computer Networks Technician' },
    organization: { pt: 'Etec', en: 'Etec' },
    period: { pt: 'Ago/2022 - Dez/2023', en: 'Aug/2022 - Dec/2023' },
    points: [
      {
        heading: { pt: 'Formação Técnica', en: 'Technical Degree' },
        body: {
          pt: 'Formação técnica voltada para infraestrutura de redes, protocolos de comunicação, configuração de servidores, hardware e suporte técnico.',
          en: 'Technical degree focused on network infrastructure, communication protocols, server administration, hardware, and technical support.',
        },
      },
    ],
    tags: ['Redes', 'Infraestrutura', 'Servidores', 'Hardware'],
  },
];

@Component({
  selector: 'app-experience-log',
  templateUrl: './experience-log.html',
  styleUrl: './experience-log.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperienceLog {
  readonly isPt = input(true);

  protected readonly experiences = CAREER_ENTRIES.filter((entry) => entry.category === 'experience');
  protected readonly education = CAREER_ENTRIES.filter((entry) => entry.category === 'education');
  protected readonly experienceOpen = signal(true);
  protected readonly educationOpen = signal(true);
  protected readonly selectedId = signal<string>(CAREER_ENTRIES[0].id);

  protected readonly selectedEntry = computed<CareerEntry>(() => {
    const id = this.selectedId();
    return CAREER_ENTRIES.find((entry) => entry.id === id) ?? CAREER_ENTRIES[0];
  });

  protected readonly selectedPoints = computed<readonly DetailPoint[]>(() => {
    const entry = this.selectedEntry();
    const pt = this.isPt();
    return (entry.points ?? []).map((point) => ({
      heading: pt ? point.heading.pt : point.heading.en,
      body: pt ? point.body.pt : point.body.en,
    }));
  });

  protected readonly activeIndexInCategory = computed(() => {
    const selected = this.selectedEntry();
    const list = selected.category === 'experience' ? this.experiences : this.education;
    return list.findIndex((item) => item.id === selected.id) + 1;
  });

  protected readonly commandLine = computed(() => {
    const selected = this.selectedEntry();
    const folder = selected.category === 'experience'
      ? (this.isPt() ? 'experiencia' : 'experience')
      : (this.isPt() ? 'formacao' : 'education');
    return `git show ${selected.hash} -- ${folder}/${selected.slug}.log`;
  });

  protected text(value: { readonly pt: string; readonly en: string }): string {
    return this.isPt() ? value.pt : value.en;
  }

  protected toggleFolder(category: Category): void {
    if (category === 'experience') this.experienceOpen.update((open) => !open);
    else this.educationOpen.update((open) => !open);
  }

  protected selectEntry(entry: CareerEntry): void {
    if (entry.category === 'experience') this.experienceOpen.set(true);
    else this.educationOpen.set(true);
    this.selectedId.set(entry.id);
  }
}
