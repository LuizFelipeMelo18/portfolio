export type BookCategory = 'technical' | 'general';
export type BookStatus = 'completed' | 'reading' | 'backlog';

export interface LocalizedText {
  readonly pt: string;
  readonly en: string;
}

export interface LibraryBook {
  readonly id: string;
  readonly category: BookCategory;
  readonly status: BookStatus;
  readonly title: LocalizedText;
  readonly author: string;
  readonly publisher?: string;
  readonly rating: number;
  readonly cover?: string;
  readonly spineColor: string;
  readonly accentColor: string;
  readonly kicker: LocalizedText;
  readonly quote: LocalizedText;
  readonly review: LocalizedText;
  readonly takeaways: readonly LocalizedText[];
}

export const LIBRARY_BOOKS: readonly LibraryBook[] = [
  // ================= TÉCNICOS · CONCLUÍDO =================
  {
    id: 'entendendo-algoritmos',
    category: 'technical',
    status: 'completed',
    title: { pt: 'Entendendo Algoritmos', en: 'Grokking Algorithms' },
    author: 'Aditya Y. Bhargava',
    publisher: 'Novatec',
    rating: 5,
    cover: '/books/entendendo-algoritmos.svg',
    spineColor: '#252a32',
    accentColor: '#b83b3b',
    kicker: { pt: 'ALGORITMOS', en: 'ALGORITHMS' },
    quote: {
      pt: 'Um guia ilustrado que transforma complexidade assintótica, grafos e programação dinâmica em intuição visual.',
      en: 'An illustrated guide that turns asymptotic complexity, graphs, and dynamic programming into visual intuition.',
    },
    review: {
      pt: 'Uma das melhores leituras para consolidar fundamentos de ciência da computação sem perder a leveza. As ilustrações e exemplos práticos tornam busca binária, recursão, tabelas hash, busca em largura e Dijkstra muito claros para aplicar no dia a dia.',
      en: 'One of the best reads to solidify computer science fundamentals while staying approachable. Its illustrations and practical examples make binary search, recursion, hash tables, BFS, and Dijkstra genuinely intuitive in daily engineering.',
    },
    takeaways: [
      { pt: 'Pensar em Big-O antes de escolher estruturas de dados.', en: 'Reason about Big-O before choosing data structures.' },
      { pt: 'Grafos e algoritmos gulosos simplificam problemas reais.', en: 'Graphs and greedy algorithms simplify real-world problems.' },
      { pt: 'Programação dinâmica resolve subproblemas sobrepostos com clareza.', en: 'Dynamic programming solves overlapping subproblems cleanly.' },
    ],
  },

  // ================= TÉCNICOS · LENDO =================
  {
    id: 'programador-pragmatico',
    category: 'technical',
    status: 'reading',
    title: { pt: 'Programador Pragmático', en: 'The Pragmatic Programmer' },
    author: 'David Thomas & Andrew Hunt',
    publisher: 'Bookman',
    rating: 5,
    spineColor: '#2c3540',
    accentColor: '#9bb7c7',
    kicker: { pt: 'ENGENHARIA', en: 'CRAFT' },
    quote: {
      pt: 'Assuma responsabilidade pelo seu ofício e mantenha o código flexível diante das mudanças inevitáveis.',
      en: 'Take ownership of your craft and keep software flexible in the face of inevitable change.',
    },
    review: {
      pt: 'Leitura em andamento que reforça mentalidade de engenharia madura: ortogonalidade, DRY sem dogmatismo, prototipação rápida, automação e cuidado contínuo com a qualidade das ferramentas e do código.',
      en: 'Currently reading — reinforces a mature engineering mindset: orthogonality, pragmatic DRY, tracer bullets, automation, and continuous care for tooling and code quality.',
    },
    takeaways: [
      { pt: 'Código ortogonal reduz efeitos colaterais ao evoluir sistemas.', en: 'Orthogonal design reduces unintended side effects when evolving systems.' },
      { pt: 'Corrigir "janelas quebradas" cedo preserva a saúde do projeto.', en: 'Fixing broken windows early preserves long-term codebase health.' },
      { pt: 'Investir no portfólio de conhecimento com consistência.', en: 'Invest in your knowledge portfolio consistently.' },
    ],
  },

  // ================= TÉCNICOS · BACKLOG =================
  {
    id: 'refatoracao',
    category: 'technical',
    status: 'backlog',
    title: { pt: 'Refatoração', en: 'Refactoring' },
    author: 'Martin Fowler',
    publisher: 'Novatec',
    rating: 0,
    spineColor: '#2a333e',
    accentColor: '#a6bfd0',
    kicker: { pt: 'DESIGN DE CÓDIGO', en: 'CODE DESIGN' },
    quote: {
      pt: 'Melhorar o design de código existente em passos pequenos e seguros, apoiados por testes.',
      en: 'Improving the design of existing code in small, safe steps backed by tests.',
    },
    review: {
      pt: 'Na fila de leitura técnica para aprofundar o catálogo de refatorações, identificação de code smells e evolução segura de bases legadas.',
      en: 'Queued on the technical reading list to deepen refactoring catalogs, code smell detection, and safe evolution of legacy systems.',
    },
    takeaways: [
      { pt: 'Catálogo sistemático de refatorações seguras.', en: 'Systematic catalog of safe refactorings.' },
      { pt: 'Identificação prática de code smells.', en: 'Practical identification of code smells.' },
    ],
  },
  {
    id: 'arquitetura-limpa',
    category: 'technical',
    status: 'backlog',
    title: { pt: 'Arquitetura Limpa', en: 'Clean Architecture' },
    author: 'Robert C. Martin',
    publisher: 'Alta Books',
    rating: 0,
    cover: '/books/arquitetura-limpa.svg',
    spineColor: '#364452',
    accentColor: '#8eb1c7',
    kicker: { pt: 'ARQUITETURA', en: 'ARCHITECTURE' },
    quote: {
      pt: 'Frameworks, bancos de dados e interfaces são detalhes — o coração do sistema são as regras de negócio.',
      en: 'Frameworks, databases, and interfaces are details — the heart of the system is its business rules.',
    },
    review: {
      pt: 'No backlog técnico para consolidar fronteiras entre domínio, casos de uso e infraestrutura com princípios SOLID aplicados em escala.',
      en: 'In the technical backlog to reinforce clean boundaries between domain, use cases, and infrastructure using SOLID principles at scale.',
    },
    takeaways: [
      { pt: 'Inversão de dependência protegendo regras de negócio.', en: 'Dependency inversion shielding core business rules.' },
      { pt: 'Separação clara entre políticas e detalhes de entrega.', en: 'Clear separation between policies and delivery mechanisms.' },
    ],
  },
  {
    id: 'codigo-limpo',
    category: 'technical',
    status: 'backlog',
    title: { pt: 'Código Limpo', en: 'Clean Code' },
    author: 'Robert C. Martin',
    publisher: 'Alta Books',
    rating: 0,
    cover: '/books/codigo-limpo.svg',
    spineColor: '#2c3c49',
    accentColor: '#9bb7c7',
    kicker: { pt: 'BOAS PRÁTICAS', en: 'CLEAN CODE' },
    quote: {
      pt: 'Código legível e expressivo é o alicerce de qualquer software sustentável.',
      en: 'Readable, expressive code is the foundation of sustainable software.',
    },
    review: {
      pt: 'Clássico no backlog para leitura completa sobre nomes significativos, funções coesas, tratamento limpo de exceções e testes expressivos.',
      en: 'Classic in the backlog for a thorough read on meaningful naming, cohesive functions, clean error handling, and expressive tests.',
    },
    takeaways: [
      { pt: 'Legibilidade e simplicidade como prioridade diária.', en: 'Readability and simplicity as a daily priority.' },
      { pt: 'Testes limpos como rede de segurança.', en: 'Clean tests as a reliable safety net.' },
    ],
  },
  {
    id: 'fundamentos-arquitetura',
    category: 'technical',
    status: 'backlog',
    title: { pt: 'Fundamentos da Arquitetura de Software', en: 'Fundamentals of Software Architecture' },
    author: 'Mark Richards & Neal Ford',
    publisher: "O'Reilly",
    rating: 0,
    spineColor: '#2d3944',
    accentColor: '#c98a7c',
    kicker: { pt: "O'REILLY", en: "O'REILLY" },
    quote: {
      pt: 'Tudo em arquitetura de software é um trade-off — entender características arquiteturais guia boas decisões.',
      en: 'Everything in software architecture is a trade-off — understanding architectural characteristics guides better decisions.',
    },
    review: {
      pt: 'Na lista para aprofundar estilos arquiteturais (camadas, eventos, microsserviços), métricas de acoplamento e análise estruturada de trade-offs.',
      en: 'On the backlog to explore architectural styles (layered, event-driven, microservices), coupling metrics, and structured trade-off analysis.',
    },
    takeaways: [
      { pt: 'Estilos arquiteturais e seus compromissos práticos.', en: 'Architectural styles and their practical trade-offs.' },
      { pt: 'Atributos de qualidade e fitness functions.', en: 'Quality attributes and fitness functions.' },
    ],
  },
  {
    id: 'arquitetura-partes-dificeis',
    category: 'technical',
    status: 'backlog',
    title: { pt: 'Arquitetura de Software: As Partes Difíceis', en: 'Software Architecture: The Hard Parts' },
    author: 'Neal Ford, Mark Richards, Pramod Sadalage & Zhamak Dehghani',
    publisher: "O'Reilly",
    rating: 0,
    spineColor: '#2c3742',
    accentColor: '#c98a7c',
    kicker: { pt: "O'REILLY", en: "O'REILLY" },
    quote: {
      pt: 'Não existem respostas fáceis em sistemas distribuídos — apenas o conjunto menos pior de trade-offs.',
      en: 'There are no easy answers in distributed systems — only the least-worst set of trade-offs.',
    },
    review: {
      pt: 'No backlog para estudar decomposição de serviços, dados distribuídos, sagas, consistência eventual e granularidade de contratos.',
      en: 'Queued to study service decomposition, distributed data, sagas, eventual consistency, and contract granularity.',
    },
    takeaways: [
      { pt: 'Decomposição de dados e transações distribuídas.', en: 'Data decomposition and distributed transactions.' },
      { pt: 'Comunicação assíncrona e gerenciamento de acoplamento.', en: 'Asynchronous communication and coupling management.' },
    ],
  },
  {
    id: 'desenvolvimento-real-software',
    category: 'technical',
    status: 'backlog',
    title: { pt: 'Desenvolvimento Real de Software', en: 'Real-World Software Development' },
    author: 'Raoul-Gabriel Urma & Richard Warburton',
    publisher: "O'Reilly",
    rating: 0,
    spineColor: '#293542',
    accentColor: '#c98a7c',
    kicker: { pt: 'JAVA · PROJETOS', en: 'JAVA · PROJECTS' },
    quote: {
      pt: 'Aprender design orientado a objetos, testes e arquitetura através de projetos reais em Java.',
      en: 'Learning object-oriented design, testing, and architecture through real-world Java projects.',
    },
    review: {
      pt: 'No backlog técnico para praticar princípios de design, TDD e padrões modernos aplicados diretamente no ecossistema Java.',
      en: 'In the technical backlog to practice design principles, TDD, and modern patterns directly within the Java ecosystem.',
    },
    takeaways: [
      { pt: 'Design orientado a objetos em cenários práticos com Java.', en: 'Object-oriented design in practical Java scenarios.' },
      { pt: 'Evolução incremental orientada por testes.', en: 'Incremental, test-driven evolution.' },
    ],
  },
  {
    id: 'engenharia-software-pressman',
    category: 'technical',
    status: 'backlog',
    title: { pt: 'Engenharia de Software', en: 'Software Engineering: A Practitioner’s Approach' },
    author: 'Roger S. Pressman',
    publisher: 'McGraw-Hill',
    rating: 0,
    spineColor: '#25313e',
    accentColor: '#90afc4',
    kicker: { pt: 'REFERÊNCIA', en: 'REFERENCE' },
    quote: {
      pt: 'Processos, modelagem, qualidade e gestão de projetos formando a base clássica da engenharia de software.',
      en: 'Processes, modeling, quality, and project management forming the classic foundation of software engineering.',
    },
    review: {
      pt: 'Livro-base no backlog para consulta e estudo aprofundado de processos de engenharia, requisitos, testes e garantia de qualidade.',
      en: 'Foundational reference in the backlog for deep study of engineering processes, requirements, testing, and quality assurance.',
    },
    takeaways: [
      { pt: 'Ciclo de vida completo e modelos de processo.', en: 'Full software lifecycle and process models.' },
      { pt: 'Engenharia de requisitos e garantia de qualidade.', en: 'Requirements engineering and quality assurance.' },
    ],
  },
  {
    id: 'ddd-eric-evans',
    category: 'technical',
    status: 'backlog',
    title: { pt: 'Domain-Driven Design', en: 'Domain-Driven Design' },
    author: 'Eric Evans',
    publisher: 'Alta Books',
    rating: 0,
    cover: '/books/ddd.svg',
    spineColor: '#25394d',
    accentColor: '#9bb7c7',
    kicker: { pt: 'DOMÍNIO', en: 'DOMAIN' },
    quote: {
      pt: 'Alinhar linguagem ubíqua e modelo de código aproxima o software da realidade do negócio.',
      en: 'Aligning ubiquitous language and code models keeps software faithful to business reality.',
    },
    review: {
      pt: 'Clássico no backlog para aprofundar modelagem estratégica e tática: linguagem ubíqua, bounded contexts, agregados e eventos de domínio.',
      en: 'Classic in the backlog to deepen strategic and tactical modeling: ubiquitous language, bounded contexts, aggregates, and domain events.',
    },
    takeaways: [
      { pt: 'Linguagem ubíqua entre negócio e engenharia.', en: 'Ubiquitous language across business and engineering.' },
      { pt: 'Contextos delimitados e agregados bem definidos.', en: 'Well-defined bounded contexts and aggregates.' },
    ],
  },
  {
    id: 'system-design-interview',
    category: 'technical',
    status: 'backlog',
    title: { pt: 'System Design Interview (Vol. 1 e Vol. 2)', en: 'System Design Interview (Vol. 1 & Vol. 2)' },
    author: 'Alex Xu',
    publisher: 'ByteByteGo',
    rating: 0,
    spineColor: '#253540',
    accentColor: '#bdd0aa',
    kicker: { pt: 'SYSTEM DESIGN', en: 'SYSTEM DESIGN' },
    quote: {
      pt: 'Projetar sistemas em larga escala exige clareza sobre gargalos, cache, filas, particionamento e resiliência.',
      en: 'Designing large-scale systems demands clarity around bottlenecks, caching, queues, sharding, and resilience.',
    },
    review: {
      pt: 'Volumes 1 e 2 no backlog para treinar arquitetura de sistemas distribuídos de alta escala, estimativas de capacidade e design de componentes reais.',
      en: 'Volumes 1 and 2 queued to practice large-scale distributed system design, capacity estimation, and real-world architecture patterns.',
    },
    takeaways: [
      { pt: 'Escalabilidade horizontal, sharding e estratégias de cache.', en: 'Horizontal scaling, sharding, and caching strategies.' },
      { pt: 'Estudos de caso práticos de arquiteturas distribuídas.', en: 'Practical case studies of distributed architectures.' },
    ],
  },
  {
    id: 'engenharia-software-sommerville',
    category: 'technical',
    status: 'backlog',
    title: { pt: 'Engenharia de Software', en: 'Software Engineering' },
    author: 'Ian Sommerville',
    publisher: 'Pearson',
    rating: 0,
    spineColor: '#273440',
    accentColor: '#a6c0d1',
    kicker: { pt: 'REFERÊNCIA', en: 'REFERENCE' },
    quote: {
      pt: 'Engenharia sistemática para construir sistemas confiáveis, seguros e fáceis de evoluir.',
      en: 'Systematic engineering to build dependable, secure, and evolvable software systems.',
    },
    review: {
      pt: 'Obra clássica no backlog para complementar a formação acadêmica em engenharia de requisitos, confiabilidade, validação e arquitetura.',
      en: 'Classic textbook in the backlog complementing academic study in requirements engineering, dependability, validation, and architecture.',
    },
    takeaways: [
      { pt: 'Especificação, verificação e validação de sistemas.', en: 'System specification, verification, and validation.' },
      { pt: 'Confiabilidade, segurança e evolução de software.', en: 'Dependability, security, and software evolution.' },
    ],
  },
  {
    id: 'aprenda-ddd',
    category: 'technical',
    status: 'backlog',
    title: { pt: 'Aprenda Domain-Driven Design', en: 'Learning Domain-Driven Design' },
    author: 'Vlad Khononov',
    publisher: "O'Reilly",
    rating: 0,
    spineColor: '#2d3744',
    accentColor: '#c98a7c',
    kicker: { pt: "O'REILLY", en: "O'REILLY" },
    quote: {
      pt: 'Alinhando arquitetura de software e estratégia de negócio de forma prática e moderna.',
      en: 'Aligning software architecture and business strategy in a modern, pragmatic way.',
    },
    review: {
      pt: 'No backlog como porta de entrada moderna para DDD, conectando subdomínios, arquitetura hexagonal, event sourcing e times.',
      en: 'In the backlog as a modern guide to DDD, connecting subdomains, hexagonal architecture, event sourcing, and team topology.',
    },
    takeaways: [
      { pt: 'Mapeamento de subdomínios core, suporte e genéricos.', en: 'Mapping core, supporting, and generic subdomains.' },
      { pt: 'Escolha do padrão arquitetural conforme a complexidade.', en: 'Matching architectural patterns to domain complexity.' },
    ],
  },
  {
    id: 'criando-microsservicos',
    category: 'technical',
    status: 'backlog',
    title: { pt: 'Criando Microsserviços', en: 'Building Microservices' },
    author: 'Sam Newman',
    publisher: "O'Reilly",
    rating: 0,
    spineColor: '#2a3642',
    accentColor: '#c98a7c',
    kicker: { pt: "O'REILLY", en: "O'REILLY" },
    quote: {
      pt: 'Serviços pequenos e autônomos que colaboram em torno de fronteiras claras de negócio.',
      en: 'Small, autonomous services working together around clear business boundaries.',
    },
    review: {
      pt: 'No backlog para aprofundar modelagem de microsserviços, comunicação síncrona/assíncrona, observabilidade, resiliência e deploy independente.',
      en: 'Queued to deepen microservices modeling, sync/async communication, observability, resilience, and independent deployment.',
    },
    takeaways: [
      { pt: 'Fronteiras coesas e baixo acoplamento entre serviços.', en: 'Cohesive boundaries and loose coupling between services.' },
      { pt: 'Observabilidade, resiliência e automação de deploy.', en: 'Observability, resilience, and deployment automation.' },
    ],
  },
  {
    id: 'migrando-monoliticos-microsservicos',
    category: 'technical',
    status: 'backlog',
    title: {
      pt: 'Migrando Sistemas Monolíticos para Microsserviços',
      en: 'Monolith to Microservices',
    },
    author: 'Sam Newman',
    publisher: "O'Reilly",
    rating: 0,
    spineColor: '#2c3844',
    accentColor: '#c98a7c',
    kicker: { pt: "O'REILLY", en: "O'REILLY" },
    quote: {
      pt: 'Migração evolutiva e incremental sem parar a entrega de valor para o negócio.',
      en: 'Evolutionary, incremental migration without halting business value delivery.',
    },
    review: {
      pt: 'No backlog para dominar padrões práticos de transição como Strangler Fig, decomposição de bancos de dados e mitigação de riscos em produção.',
      en: 'In the backlog to master practical migration patterns like Strangler Fig, database decomposition, and production risk mitigation.',
    },
    takeaways: [
      { pt: 'Padrão Strangler Fig e extração gradual de módulos.', en: 'Strangler Fig pattern and gradual module extraction.' },
      { pt: 'Estratégias seguras para dividir bancos compartilhados.', en: 'Safe strategies for splitting shared databases.' },
    ],
  },

  // ================= GERAIS · CONCLUÍDO =================
  {
    id: 'percy-jackson',
    category: 'general',
    status: 'completed',
    title: { pt: 'Percy Jackson — Saga Completa', en: 'Percy Jackson — Complete Series' },
    author: 'Rick Riordan',
    publisher: 'Intrínseca',
    rating: 5,
    spineColor: '#243a49',
    accentColor: '#9ec4d9',
    kicker: { pt: 'FANTASIA', en: 'FANTASY' },
    quote: {
      pt: 'Aventura, humor afiado e mitologia grega reimaginada em uma jornada que prende do primeiro ao último livro.',
      en: 'Adventure, sharp humor, and reimagined Greek mythology across a journey that hooks from book one to the finale.',
    },
    review: {
      pt: 'Saga completa lida e favorita de fantasia. O ritmo ágil, o carisma dos personagens e a forma criativa de misturar mitologia clássica com o mundo moderno tornam a leitura extremamente envolvente.',
      en: 'Complete series read and a favorite fantasy saga. Its brisk pacing, memorable characters, and creative blend of Greek mythology with the modern world make it endlessly engaging.',
    },
    takeaways: [
      { pt: 'Construção de mundo leve, divertida e criativa.', en: 'Light, fun, and inventive world-building.' },
      { pt: 'Arco completo de amadurecimento e amizade.', en: 'A rewarding full arc of growth and friendship.' },
    ],
  },
  {
    id: 'devoradores-de-estrelas',
    category: 'general',
    status: 'completed',
    title: { pt: 'Devoradores de Estrelas', en: 'Project Hail Mary' },
    author: 'Andy Weir',
    publisher: 'Suma',
    rating: 5,
    spineColor: '#2a303c',
    accentColor: '#d4b47c',
    kicker: { pt: 'FICÇÃO CIENTÍFICA', en: 'SCI-FI' },
    quote: {
      pt: 'Resolução de problemas científicos no limite do impossível, acompanhada de uma das amizades mais memoráveis da ficção científica.',
      en: 'Scientific problem-solving at the edge of the impossible, paired with one of sci-fi’s most memorable friendships.',
    },
    review: {
      pt: 'Ficção científica brilhante, cheia de engenharia, física prática, reviravoltas e coração. É impossível não torcer por cada experimento e solução improvisada no espaço.',
      en: 'Brilliant sci-fi packed with engineering, practical physics, twists, and heart. Impossible not to root for every improvised experiment in deep space.',
    },
    takeaways: [
      { pt: 'Método científico e criatividade para destravar problemas extremos.', en: 'Scientific method and creativity under extreme constraints.' },
      { pt: 'Narrativa emocionante que equilibra ciência e humor.', en: 'Heartfelt storytelling balancing hard science and humor.' },
    ],
  },
  {
    id: 'o-homem-de-giz',
    category: 'general',
    status: 'completed',
    title: { pt: 'O Homem de Giz', en: 'The Chalk Man' },
    author: 'C. J. Tudor',
    publisher: 'Intrínseca',
    rating: 4,
    spineColor: '#2d2d34',
    accentColor: '#c7b8c9',
    kicker: { pt: 'SUSPENSE', en: 'THRILLER' },
    quote: {
      pt: 'Segredos de infância desenhados em giz que voltam décadas depois para cobrar o passado.',
      en: 'Childhood secrets drawn in chalk that resurface decades later to collect on the past.',
    },
    review: {
      pt: 'Thriller atmosférico que alterna entre passado e presente com mistério crescente. Mantém a curiosidade acesa a cada capítulo com pistas sutis e atmosfera sombria.',
      en: 'Atmospheric thriller alternating between past and present with mounting suspense. Keeps curiosity alive chapter after chapter with subtle clues and an eerie tone.',
    },
    takeaways: [
      { pt: 'Alternância de linhas temporais construindo tensão.', en: 'Dual timelines steadily building suspense.' },
      { pt: 'Clima nostálgico misturado com mistério sombrio.', en: 'Nostalgic atmosphere woven into dark mystery.' },
    ],
  },

  // ================= GERAIS · LENDO =================
  {
    id: 'blade-runner',
    category: 'general',
    status: 'reading',
    title: { pt: 'Blade Runner', en: 'Do Androids Dream of Electric Sheep?' },
    author: 'Philip K. Dick',
    publisher: 'Aleph',
    rating: 5,
    spineColor: '#242c38',
    accentColor: '#7eb6c9',
    kicker: { pt: 'CYBERPUNK · SCI-FI', en: 'CYBERPUNK · SCI-FI' },
    quote: {
      pt: 'O que define empatia e humanidade em um mundo onde o artificial se confunde com o real?',
      en: 'What defines empathy and humanity in a world where the artificial blurs with the real?',
    },
    review: {
      pt: 'Leitura em andamento — clássico denso e filosófico da ficção científica que inspirou o cinema cyberpunk, questionando identidade, memória e empatia.',
      en: 'Currently reading — a dense, philosophical sci-fi classic that inspired cyberpunk cinema while questioning identity, memory, and empathy.',
    },
    takeaways: [
      { pt: 'Reflexão profunda sobre empatia e autenticidade.', en: 'Deep reflection on empathy and authenticity.' },
      { pt: 'Atmosfera distópica fundadora do cyberpunk.', en: 'Foundational dystopian atmosphere of cyberpunk.' },
    ],
  },

  // ================= GERAIS · BACKLOG =================
  {
    id: 'relatos-do-gato-viajante',
    category: 'general',
    status: 'backlog',
    title: { pt: 'Relatos de um Gato Viajante', en: 'The Travelling Cat Chronicles' },
    author: 'Hiro Arikawa',
    publisher: 'Alfaguara',
    rating: 0,
    spineColor: '#313a42',
    accentColor: '#bdd0aa',
    kicker: { pt: 'FICÇÃO', en: 'FICTION' },
    quote: {
      pt: 'Uma viagem pelo Japão narrada sob o olhar afetuoso e bem-humorado de um gato.',
      en: 'A journey across Japan told through the warm, witty eyes of a cat.',
    },
    review: {
      pt: 'No backlog de leituras gerais por sua narrativa sensível sobre amizade, memórias e despedidas.',
      en: 'On the general reading backlog for its tender story about friendship, memory, and farewells.',
    },
    takeaways: [
      { pt: 'Literatura japonesa contemporânea sensível e leve.', en: 'Heartfelt contemporary Japanese literature.' },
    ],
  },
  {
    id: 'rapido-e-devagar',
    category: 'general',
    status: 'backlog',
    title: { pt: 'Rápido e Devagar', en: 'Thinking, Fast and Slow' },
    author: 'Daniel Kahneman',
    publisher: 'Objetiva',
    rating: 0,
    spineColor: '#2c353f',
    accentColor: '#d1b98c',
    kicker: { pt: 'PSICOLOGIA', en: 'PSYCHOLOGY' },
    quote: {
      pt: 'Duas formas de pensar moldam nossos julgamentos: a intuição rápida e o raciocínio deliberado.',
      en: 'Two systems of thought shape our judgments: fast intuition and deliberate reasoning.',
    },
    review: {
      pt: 'No backlog para entender vieses cognitivos, heurísticas e como tomar decisões mais conscientes.',
      en: 'In the backlog to understand cognitive biases, heuristics, and more deliberate decision-making.',
    },
    takeaways: [
      { pt: 'Sistema 1 vs. Sistema 2 na tomada de decisão.', en: 'System 1 vs. System 2 in decision-making.' },
    ],
  },
  {
    id: '2001-odisseia-no-espaco',
    category: 'general',
    status: 'backlog',
    title: { pt: '2001: Uma Odisseia no Espaço', en: '2001: A Space Odyssey' },
    author: 'Arthur C. Clarke',
    publisher: 'Aleph',
    rating: 0,
    spineColor: '#202631',
    accentColor: '#9bb7c7',
    kicker: { pt: 'SCI-FI CLÁSSICO', en: 'CLASSIC SCI-FI' },
    quote: {
      pt: 'Da aurora da humanidade até os confins de Júpiter sob o olhar de HAL 9000 e do monólito.',
      en: 'From the dawn of humanity to the reaches of Jupiter under HAL 9000 and the monolith.',
    },
    review: {
      pt: 'Clássico essencial de Arthur C. Clarke no backlog sobre evolução humana, inteligência artificial e exploração espacial.',
      en: 'Essential Arthur C. Clarke classic in the backlog exploring human evolution, artificial intelligence, and space exploration.',
    },
    takeaways: [
      { pt: 'Pilar da ficção científica hard e da discussão sobre IA.', en: 'Cornerstone of hard sci-fi and AI discourse.' },
    ],
  },
  {
    id: 'encontro-com-rama',
    category: 'general',
    status: 'backlog',
    title: { pt: 'Encontro com Rama', en: 'Rendezvous with Rama' },
    author: 'Arthur C. Clarke',
    publisher: 'Aleph',
    rating: 0,
    spineColor: '#222a35',
    accentColor: '#8eb1c7',
    kicker: { pt: 'SCI-FI CLÁSSICO', en: 'CLASSIC SCI-FI' },
    quote: {
      pt: 'Um objeto cilíndrico colossal cruza o Sistema Solar despertando pura curiosidade científica.',
      en: 'A colossal cylindrical object crosses the Solar System, sparking pure scientific wonder.',
    },
    review: {
      pt: 'Na fila de Arthur C. Clarke pelo fascínio da exploração do desconhecido e rigor científico.',
      en: 'Queued in the Arthur C. Clarke list for its sense of wonder and scientific rigor.',
    },
    takeaways: [
      { pt: 'Exploração espacial e mistério cósmico em escala monumental.', en: 'Space exploration and cosmic mystery at monumental scale.' },
    ],
  },
  {
    id: 'o-fim-da-infancia',
    category: 'general',
    status: 'backlog',
    title: { pt: 'O Fim da Infância', en: 'Childhood’s End' },
    author: 'Arthur C. Clarke',
    publisher: 'Aleph',
    rating: 0,
    spineColor: '#252c38',
    accentColor: '#b7a9cf',
    kicker: { pt: 'SCI-FI CLÁSSICO', en: 'CLASSIC SCI-FI' },
    quote: {
      pt: 'A chegada pacífica dos Senhores Supremos transforma o destino da humanidade para sempre.',
      en: 'The peaceful arrival of the Overlords reshapes humanity’s destiny forever.',
    },
    review: {
      pt: 'Clássico filosófico de ficção científica no backlog sobre transcendência, utopia e o futuro da espécie humana.',
      en: 'Philosophical sci-fi classic in the backlog exploring transcendence, utopia, and humanity’s future.',
    },
    takeaways: [
      { pt: 'Ficção científica especulativa com forte carga filosófica.', en: 'Speculative sci-fi with deep philosophical weight.' },
    ],
  },
  {
    id: 'neuromancer',
    category: 'general',
    status: 'backlog',
    title: { pt: 'Neuromancer', en: 'Neuromancer' },
    author: 'William Gibson',
    publisher: 'Aleph',
    rating: 0,
    spineColor: '#1f2a33',
    accentColor: '#7dc0c4',
    kicker: { pt: 'TRILOGIA SPRAWL · #1', en: 'SPRAWL TRILOGY · #1' },
    quote: {
      pt: 'O céu sobre o porto tinha a cor de uma televisão sintonizada em um canal fora do ar.',
      en: 'The sky above the port was the color of television, tuned to a dead channel.',
    },
    review: {
      pt: 'Obra fundadora do cyberpunk e da ideia de ciberespaço na fila de leitura.',
      en: 'Foundational cyberpunk novel that coined cyberspace, queued on the reading list.',
    },
    takeaways: [
      { pt: 'Início da Trilogia do Sprawl e estética cyberpunk.', en: 'Opening of the Sprawl Trilogy and cyberpunk aesthetics.' },
    ],
  },
  {
    id: 'count-zero',
    category: 'general',
    status: 'backlog',
    title: { pt: 'Count Zero', en: 'Count Zero' },
    author: 'William Gibson',
    publisher: 'Aleph',
    rating: 0,
    spineColor: '#222d36',
    accentColor: '#7dc0c4',
    kicker: { pt: 'TRILOGIA SPRAWL · #2', en: 'SPRAWL TRILOGY · #2' },
    quote: {
      pt: 'Sete anos após Neuromancer, novas entidades e intrigas corporativas emergem na Matrix.',
      en: 'Seven years after Neuromancer, new entities and corporate intrigue emerge inside the Matrix.',
    },
    review: {
      pt: 'Segundo volume da Trilogia do Sprawl no backlog, expandindo o universo cyberpunk criado por William Gibson.',
      en: 'Second book of the Sprawl Trilogy in the backlog, expanding William Gibson’s cyberpunk universe.',
    },
    takeaways: [
      { pt: 'Continuação direta do universo de Neuromancer.', en: 'Direct continuation of the Neuromancer universe.' },
    ],
  },
  {
    id: 'mona-lisa-overdrive',
    category: 'general',
    status: 'backlog',
    title: { pt: 'Mona Lisa Overdrive', en: 'Mona Lisa Overdrive' },
    author: 'William Gibson',
    publisher: 'Aleph',
    rating: 0,
    spineColor: '#242e38',
    accentColor: '#7dc0c4',
    kicker: { pt: 'TRILOGIA SPRAWL · #3', en: 'SPRAWL TRILOGY · #3' },
    quote: {
      pt: 'O desfecho da Trilogia do Sprawl conectando inteligências artificiais, ciberespaço e destinos cruzados.',
      en: 'The finale of the Sprawl Trilogy weaving together AIs, cyberspace, and intersecting fates.',
    },
    review: {
      pt: 'Conclusão da trilogia de William Gibson na lista de leitura cyberpunk.',
      en: 'Conclusion to William Gibson’s trilogy on the cyberpunk reading list.',
    },
    takeaways: [
      { pt: 'Encerramento do arco da Trilogia do Sprawl.', en: 'Closing arc of the Sprawl Trilogy.' },
    ],
  },
  {
    id: 'materia-escura',
    category: 'general',
    status: 'backlog',
    title: { pt: 'Matéria Escura', en: 'Dark Matter' },
    author: 'Blake Crouch',
    publisher: 'Intrínseca',
    rating: 0,
    spineColor: '#252836',
    accentColor: '#9eb6d1',
    kicker: { pt: 'THRILLER SCI-FI', en: 'SCI-FI THRILLER' },
    quote: {
      pt: 'Você é feliz com a vida que tem — e o que faria se pudesse revisitar os caminhos que não escolheu?',
      en: 'Are you happy with your life — and what would you do if you could revisit the paths not taken?',
    },
    review: {
      pt: 'No backlog pela mistura eletrizante de suspense, multiverso e escolhas de vida.',
      en: 'In the backlog for its fast-paced blend of thriller, multiverse concepts, and life choices.',
    },
    takeaways: [
      { pt: 'Ritmo acelerado com ficção científica acessível.', en: 'Fast pacing paired with accessible sci-fi.' },
    ],
  },
  {
    id: 'modernidade-liquida',
    category: 'general',
    status: 'backlog',
    title: { pt: 'Modernidade Líquida', en: 'Liquid Modernity' },
    author: 'Zygmunt Bauman',
    publisher: 'Zahar',
    rating: 0,
    spineColor: '#2a343b',
    accentColor: '#9ec0cc',
    kicker: { pt: 'SOCIOLOGIA', en: 'SOCIOLOGY' },
    quote: {
      pt: 'Relações, trabalho e identidades em constante fluidez na sociedade contemporânea.',
      en: 'Relationships, work, and identity in constant flux within contemporary society.',
    },
    review: {
      pt: 'No backlog de sociologia para compreender a fluidez das instituições, do tempo e das conexões modernas.',
      en: 'In the sociology backlog to examine the fluidity of modern institutions, time, and human bonds.',
    },
    takeaways: [
      { pt: 'Análise crítica das transformações da era contemporânea.', en: 'Critical analysis of contemporary societal shifts.' },
    ],
  },
  {
    id: 'logica-pesquisa-cientifica',
    category: 'general',
    status: 'backlog',
    title: { pt: 'A Lógica da Pesquisa Científica', en: 'The Logic of Scientific Discovery' },
    author: 'Karl Popper',
    publisher: 'Cultrix',
    rating: 0,
    spineColor: '#2b323b',
    accentColor: '#b5c7d4',
    kicker: { pt: 'FILOSOFIA DA CIÊNCIA', en: 'PHILOSOPHY OF SCIENCE' },
    quote: {
      pt: 'O critério de cientificidade de uma teoria é sua falseabilidade e abertura a testes rigorosos.',
      en: 'The hallmark of a scientific theory is its falsifiability and openness to rigorous testing.',
    },
    review: {
      pt: 'No backlog para aprofundar epistemologia, método científico e pensamento crítico rigoroso.',
      en: 'In the backlog to deepen epistemology, scientific method, and rigorous critical thinking.',
    },
    takeaways: [
      { pt: 'Falseabilidade e método hipotético-dedutivo.', en: 'Falsifiability and the hypothetico-deductive method.' },
    ],
  },
  {
    id: 'a-morte-de-ivan-ilitch',
    category: 'general',
    status: 'backlog',
    title: { pt: 'A Morte de Ivan Ilitch', en: 'The Death of Ivan Ilyich' },
    author: 'Liev Tolstói',
    publisher: 'Editora 34',
    rating: 0,
    spineColor: '#312c2b',
    accentColor: '#cfb99d',
    kicker: { pt: 'CLÁSSICO RUSSO', en: 'RUSSIAN CLASSIC' },
    quote: {
      pt: 'Diante da finitude, o que realmente torna uma vida autêntica e bem vivida?',
      en: 'In the face of mortality, what truly makes a life authentic and well lived?',
    },
    review: {
      pt: 'Novela clássica de Tolstói no backlog pela profundidade psicológica e reflexão existencial.',
      en: 'Classic Tolstoy novella in the backlog for its psychological depth and existential clarity.',
    },
    takeaways: [
      { pt: 'Reflexão sobre autenticidade e sentido da vida.', en: 'Reflection on authenticity and meaning.' },
    ],
  },
  {
    id: 'a-metamorfose',
    category: 'general',
    status: 'backlog',
    title: { pt: 'A Metamorfose', en: 'The Metamorphosis' },
    author: 'Franz Kafka',
    publisher: 'Companhia das Letras',
    rating: 0,
    spineColor: '#2e2b30',
    accentColor: '#c4b1c7',
    kicker: { pt: 'CLÁSSICO', en: 'CLASSIC' },
    quote: {
      pt: 'Uma manhã, ao acordar de sonhos intranquilos, Gregor Samsa descobriu-se transformado.',
      en: 'One morning, waking from troubled dreams, Gregor Samsa found himself transformed.',
    },
    review: {
      pt: 'Clássico indispensável no backlog sobre alienação, pressão familiar e condição humana.',
      en: 'Essential classic in the backlog exploring alienation, family pressure, and the human condition.',
    },
    takeaways: [
      { pt: 'Alegoria marcante sobre isolamento e pertencimento.', en: 'Enduring allegory of isolation and belonging.' },
    ],
  },
  {
    id: 'crepusculo-dos-idolos',
    category: 'general',
    status: 'backlog',
    title: { pt: 'Crepúsculo dos Ídolos', en: 'Twilight of the Idols' },
    author: 'Friedrich Nietzsche',
    publisher: 'Companhia das Letras',
    rating: 0,
    spineColor: '#302b2a',
    accentColor: '#d1a88e',
    kicker: { pt: 'FILOSOFIA', en: 'PHILOSOPHY' },
    quote: {
      pt: 'Como filosofar com o martelo — testando valores estabelecidos para ver o que resiste.',
      en: 'How to philosophize with a hammer — sounding out established values to see what holds.',
    },
    review: {
      pt: 'No backlog de filosofia como síntese incisiva e provocadora do pensamento tardio de Nietzsche.',
      en: 'In the philosophy backlog as an incisive, provocative synthesis of Nietzsche’s later thought.',
    },
    takeaways: [
      { pt: 'Crítica afiada a dogmas e tradições filosóficas.', en: 'Sharp critique of dogmas and philosophical traditions.' },
    ],
  },
  {
    id: 'duas-narrativas-fantasticas',
    category: 'general',
    status: 'backlog',
    title: { pt: 'Duas Narrativas Fantásticas', en: 'Two Fantastic Stories' },
    author: 'Fiódor Dostoiévski',
    publisher: 'Editora 34',
    rating: 0,
    spineColor: '#2f2b31',
    accentColor: '#c9b5c4',
    kicker: { pt: 'CLÁSSICO RUSSO', en: 'RUSSIAN CLASSIC' },
    quote: {
      pt: 'A Dócil e O Sonho de um Homem Ridículo — mergulhos intensos na consciência humana.',
      en: 'A Gentle Creature and The Dream of a Ridiculous Man — intense dives into human consciousness.',
    },
    review: {
      pt: 'Na lista de clássicos russos pela intensidade psicológica e moral de Dostoiévski em narrativas curtas.',
      en: 'On the Russian classics backlog for Dostoevsky’s psychological and moral intensity in compact form.',
    },
    takeaways: [
      { pt: 'Exploração da culpa, empatia e redenção humana.', en: 'Exploration of guilt, empathy, and human redemption.' },
    ],
  },
  {
    id: 'o-desespero-humano',
    category: 'general',
    status: 'backlog',
    title: { pt: 'O Desespero Humano', en: 'The Sickness Unto Death' },
    author: 'Søren Kierkegaard',
    publisher: 'UNESP',
    rating: 0,
    spineColor: '#282d35',
    accentColor: '#a6b7c9',
    kicker: { pt: 'FILOSOFIA', en: 'PHILOSOPHY' },
    quote: {
      pt: 'Um tratado existencial sobre a construção do eu, angústia e liberdade interior.',
      en: 'An existential treatise on selfhood, despair, and inner freedom.',
    },
    review: {
      pt: 'Obra fundadora do existencialismo no backlog para estudar a visão de Kierkegaard sobre identidade e consciência.',
      en: 'Foundational existentialist work in the backlog examining Kierkegaard’s view of identity and self-awareness.',
    },
    takeaways: [
      { pt: 'Base clássica do pensamento existencialista.', en: 'Classical cornerstone of existentialist thought.' },
    ],
  },
];
