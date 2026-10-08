export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  category: 'Corpus Engineering' | 'Evaluation & Benchmarks' | 'Speech & Audio' | 'Document AI';
  status: 'Active' | 'In Progress' | 'Planned';
  timeline: string;
  candidate?: string;
  mentors: string[];
  abstract: string;
  tags: string[];
  links?: { label: string; url: string; internal?: boolean }[];
  featured?: boolean;
}

export const projects: Project[] = [
  {
    slug: 'nepali-data-studio',
    title: 'Nepali Data Studio (नेपाली डाटा स्टुडियो)',
    subtitle: 'A Provenance-First Open Data Platform for Nepali & Nepal-Based Languages',
    category: 'Corpus Engineering',
    status: 'Active',
    timeline: '12-Week Capstone (Phase 1)',
    candidate: 'Sundeep Dawadi',
    mentors: [
      'Mr. Sunil Regmi (Lecturer & AI Coordinator, DoAI)',
      'Prof. Dr. Bal Krishna Bal (Dean, SoE & Lead, ILPRL)'
    ],
    abstract:
      'A unified, audit-first data operating system built on Datasette and SQLite. Ingests raw web crawls and archive dumps, normalizes legacy fonts (Preeti/Kantipur), filters Hindi leakage, clusters MinHash duplicates, and runs native-speaker annotation queues with complete provenance tracing.',
    tags: ['Data Platform', 'Datasette', 'SQLite WAL', 'Annotation Hub', 'Data Provenance'],
    featured: true,
    links: [
      { label: 'Project Detail', url: '/projects/nepali-data-studio', internal: true },
      { label: 'GitHub Repository', url: 'https://github.com/ILPRL/NepaliDataStudio' }
    ]
  },
  {
    slug: 'baleval',
    title: 'BalEval: Multimodal Nepali Foundation Benchmark',
    subtitle: 'A Unified Empirical Evaluation Suite Pairing Retrieval & Generation',
    category: 'Evaluation & Benchmarks',
    status: 'In Progress',
    timeline: '12-Week Capstone Research',
    candidate: 'Sundeep Dawadi',
    mentors: [
      'Mr. Sunil Regmi (Lecturer & AI Coordinator, DoAI)',
      'Prof. Dr. Bal Krishna Bal (Dean, SoE & Lead, ILPRL)'
    ],
    abstract:
      'A rigorous empirical evaluation benchmark and baseline suite testing generative reasoning, instruction-following, and natively multimodal retrieval across 22 years of Nepali computational linguistics assets, pairing Gemma 4 E4B with EmbeddingGemma 2.',
    tags: ['LLM Benchmark', 'Multimodal', 'Gemma Baselines', 'Evaluation'],
    featured: true,
    links: [
      { label: 'Project Detail', url: '/projects/baleval', internal: true }
    ]
  },
  {
    slug: 'speech-asr-alignment',
    title: 'Nepali Speech Recognition & Dialect Alignment',
    subtitle: 'Acoustic Model Tuning & Dialectal Audio Archival for Nepal',
    category: 'Speech & Audio',
    status: 'Planned',
    timeline: 'Upcoming Cohort Track',
    mentors: [
      'Mr. Sunil Regmi (DoAI)',
      'Prof. Dr. Bal Krishna Bal (ILPRL)'
    ],
    abstract:
      'Investigating end-to-end Conformer/Whisper fine-tuning on open speech archives (OpenSLR-54), time-aligned transcript verification, and dialectal recording campaigns for under-represented languages of Nepal.',
    tags: ['Speech AI', 'ASR', 'Acoustic Modeling', 'Audio NLP'],
    featured: false,
    links: [
      { label: 'Track Overview', url: '/projects#speech-asr-alignment', internal: true }
    ]
  },
  {
    slug: 'devanagari-ocr-document-ai',
    title: 'Devanagari Document AI & Legacy Font Restoration',
    subtitle: 'Automated Extraction and Preeti/Kantipur Normalization for Historical Gazettes',
    category: 'Document AI',
    status: 'Planned',
    timeline: 'Upcoming Cohort Track',
    mentors: [
      'Mr. Sunil Regmi (DoAI)',
      'Prof. Dr. Bal Krishna Bal (ILPRL)'
    ],
    abstract:
      'Developing high-accuracy vision-language layout parsers and algorithmic Preeti-to-Unicode converters for historical Nepal Gazettes, Supreme Court rulings, and national curriculum archives.',
    tags: ['OCR', 'Document Intelligence', 'Preeti Normalization', 'Legal NLP'],
    featured: false,
    links: [
      { label: 'Track Overview', url: '/projects#devanagari-ocr-document-ai', internal: true }
    ]
  }
];
