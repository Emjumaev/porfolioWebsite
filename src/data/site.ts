// Central place for your personal info. Edit here and it updates across the site.
export const site = {
  name: 'Mehriddin Jumaev',
  role: 'Software Engineer',
  location: 'Freiburg, Germany',
  email: 'jumaevmekhriddin10@gmail.com',
  tagline:
    'Engineering AI-driven apps used by millions — focused on speed, usability, and reliability.',
  summary:
    "Software engineer with a track record of shipping fintech and AI features to apps serving millions of users. Currently pursuing an M.Sc. in Computer Science (AI specialization) at the University of Freiburg while building reliable, delightful mobile experiences.",
  socials: {
    github: 'https://github.com/Emjumaev',
    linkedin: 'https://www.linkedin.com/in/mekhriddin-jumaev',
    leetcode: 'https://leetcode.com/u/emjumaev/',
    email: 'mailto:jumaevmekhriddin10@gmail.com',
  },
};

export type SkillGroup = {
  label: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    label: 'Languages',
    items: ['Swift (Expert)', 'Python (Expert)', 'C++', 'Java'],
  },
  {
    label: 'iOS & Frameworks',
    items: ['SwiftUI', 'UIKit', 'Core Bluetooth', 'AVFoundation'],
  },
  {
    label: 'Technologies & Tools',
    items: [
      'Git',
      'Figma',
      'Jira',
      'Agile / Scrum',
      'REST APIs',
      'WebSocket',
      'NumPy / Pandas',
      'PyTorch / TensorFlow',
    ],
  },
  {
    label: 'Architecture & Patterns',
    items: [
      'OOP',
      'Clean Architecture',
      'SOLID',
      'Design Patterns',
      'Algorithms & Data Structures',
      'Unit Testing',
      'UI Testing',
    ],
  },
];

export type Job = {
  company: string;
  employer?: string;
  project?: string;
  role: string;
  period: string;
  location?: string;
  highlights: string[];
};

export const experience: Job[] = [
  {
    company: 'Hayot Bank',
    employer: 'SabLab LLC',
    project: 'Mobile Banking & Payments App',
    role: 'Software Engineer',
    period: 'Sep 2025 — Present',
    location: 'Tashkent, Uzbekistan',
    highlights: [
      'Helped raise the App Store rating from 3.8 to 4.6 through continuous feature delivery and bug fixes.',
      'Strengthened security with jailbreak detection, RASP, app-integrity validation, and SSL pinning to mitigate runtime threats.',
      'Shipped an autopayments feature, enabling users to automate recurring payments and reducing manual actions.',
      'Integrated debugging and monitoring tools to speed up issue tracking and streamline testing.',
      'Delivered fintech features used by 100K+ monthly active users alongside PMs, backend, QA, and mobile engineers.',
    ],
  },
  {
    company: 'OpenBank Uz',
    employer: 'OpenBank JSC',
    project: 'Mobile Banking & Payments App',
    role: 'Software Engineer',
    period: 'Jan 2024 — Aug 2025',
    location: 'Tashkent, Uzbekistan',
    highlights: [
      'Developed an AI-powered smart assistant enabling payments and P2P transactions via natural-language chat.',
      'Integrated real-time speech recognition and text-to-speech, reducing latency by 30%.',
      'Established a backend-driven architecture with JSON configs, enabling assistant updates without app releases.',
      'Deployed Firebase Analytics to monitor 1M+ monthly interactions, supporting continuous UX optimization.',
      'Collaborated with mobile, ML, backend, design, and QA teams to integrate AI features seamlessly.',
    ],
  },
  {
    company: 'Oson',
    employer: 'BRIO GROUP LLC',
    project: 'Mobile Banking & Payments App',
    role: 'Software Engineer',
    period: 'May 2023 — Dec 2023',
    location: 'Tashkent, Uzbekistan',
    highlights: [
      'Led development and maintenance of a high-traffic banking app serving ~2 million users.',
      'Led migration from MVP to MVVM, streamlining data flow and cutting code complexity.',
      'Refactored UI from XIBs/Storyboards to programmatic Swift, cutting XIB usage by 50%.',
      'Integrated Face ID / Touch ID authentication, reducing average login time by 60%.',
      'Managed App Store + TestFlight releases with 100% guideline compliance and near-zero rejections.',
    ],
  },
  {
    company: 'Carwon.uz',
    role: 'iOS Developer',
    project: 'Remote Vehicle Control App',
    period: 'May 2022 — Apr 2023',
    highlights: [
      'Built an end-to-end remote vehicle control app, improving convenience over traditional key fobs.',
      'Engineered a robust Bluetooth layer with Apple’s Core Bluetooth framework.',
      'Architected the app with MVVM + Clean Architecture for modularity and faster onboarding.',
      'Designed a fully programmatic UIKit interface with reusable components and localized for Uzbek, Russian, and English.',
    ],
  },
];

export type School = {
  school: string;
  degree: string;
  period: string;
  detail?: string;
};

export const education: School[] = [
  {
    school: 'University of Freiburg',
    degree: 'M.Sc. Computer Science — Specialization in Artificial Intelligence',
    period: 'Apr 2026 — Present',
  },
  {
    school: 'Inha University in Tashkent',
    degree: 'B.Sc. Computer Science & Software Engineering',
    period: 'Sep 2021 — Sep 2025',
    detail: 'GPA: 3.81 / 4.0',
  },
];

export type Certification = {
  name: string;
  issuer: string;
  year: string;
};

export const certifications: Certification[] = [
  {
    name: 'Machine Learning Specialization',
    issuer: 'DeepLearning.AI & Stanford Online',
    year: '2025',
  },
  {
    name: 'Meta iOS Developer Professional Certificate',
    issuer: 'Meta & Coursera',
    year: '2023',
  },
];

export const awards = [
  '1st place — “AI in Fintech” hackathon, among 25 teams (Tashkent, 2024)',
  '2nd place — “Open Data Challenge” hackathon, among 300+ participants (Tashkent, 2024)',
  '3rd place — BRB FinTech Hackcelerator, among 200 teams (Tashkent, 2024)',
  'Awardee — Scholarship of the Ministry of Digital Technologies of Uzbekistan (2023)',
];
