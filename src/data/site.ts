// Central place for your personal info. Edit here and it updates across the site.
export const site = {
  name: 'Mehriddin Jumaev',
  role: 'Software Engineer · iOS Developer',
  location: 'Germany',
  email: 'jumaevmekhriddin10@gmail.com',
  tagline:
    'Engineering AI-driven, pixel-perfect iOS apps used by millions — focused on speed, usability, and reliability.',
  summary:
    "iOS engineer with a track record of shipping fintech and AI features to apps serving millions of users. Currently pursuing a Master's in Computer Science at the University of Freiburg while building reliable, delightful mobile experiences.",
  socials: {
    github: 'https://github.com/Emjumaev',
    linkedin: 'https://www.linkedin.com/in/mekhriddin-jumaev',
    leetcode: 'https://leetcode.com/u/emjumaev/',
    email: 'mailto:jumaevmekhriddin10@gmail.com',
  },
};

export const skills = [
  'Swift',
  'SwiftUI',
  'UIKit',
  'MVVM / Clean Architecture',
  'Core Bluetooth',
  'AVFoundation',
  'WebSockets',
  'REST APIs',
  'Data Science',
  'Git / Version Control',
];

export type Job = {
  company: string;
  role: string;
  period: string;
  location?: string;
  highlights: string[];
};

export const experience: Job[] = [
  {
    company: 'Hayot Bank',
    role: 'iOS Developer',
    period: 'Sep 2025 — Present',
    location: 'Tashkent, Uzbekistan',
    highlights: [
      'Helped raise the App Store rating from 3.8 to 4.6 through continuous feature delivery and bug fixes.',
      'Delivered fintech features used by 100K+ monthly active users, working with PMs, backend, QA, and mobile engineers.',
      'Shipped an autopayments feature enabling users to automate recurring payments.',
      'Integrated debugging, monitoring, and analytics tools to speed up issue tracking and support data-driven decisions.',
    ],
  },
  {
    company: 'Openbank',
    role: 'Software Engineer',
    period: 'Jan 2024 — Aug 2025',
    location: 'Tashkent, Uzbekistan',
    highlights: [
      'Developed an AI-powered smart assistant enabling payments and P2P transactions via natural-language chat.',
      'Built WebSocket communication for real-time, bidirectional chat experiences.',
      'Implemented Speech-to-Text and Text-to-Speech with AVFoundation for hands-free interaction.',
      'Established a backend-driven architecture with JSON configs, enabling assistant updates without app releases.',
    ],
  },
  {
    company: 'OSON',
    role: 'iOS Developer',
    period: 'May 2023 — Dec 2023',
    location: 'Tashkent, Uzbekistan',
    highlights: [
      'Led development of a high-traffic banking app serving ~2 million users.',
      'Led migration from MVP to MVVM, streamlining data flow and reducing complexity.',
      'Refactored UI from XIBs/Storyboards to programmatic Swift, cutting XIB usage by 50%.',
      'Integrated Face ID / Touch ID authentication and managed App Store + TestFlight releases.',
    ],
  },
  {
    company: 'Carwon.uz',
    role: 'iOS Developer',
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
};

export const education: School[] = [
  {
    school: 'University of Freiburg',
    degree: "Master's Degree, Computer Science",
    period: 'Expected Apr 2026',
  },
  {
    school: 'Inha University',
    degree: 'B.S., Computer Science — School of Computer & Information Engineering',
    period: '2021 — 2025',
  },
];

export const awards = [
  'Winner — Scholarship of the Ministry of Digital Technologies of Uzbekistan',
  'First Place — AI in Fintech Hackathon',
  'Second Place — Open Data Challenge',
  'Top 7 Project — MGovAward',
  'Third Place — BRB FinTech Hackcelerator',
];
