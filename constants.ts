import React from 'react';

export const BRAND = {
  name: 'BoringOS',
  tagline: 'The computer that leaves you alone.',
  subTagline: 'Modern computers have become shopping malls. We built you a quiet library.',
  heroHeadline: 'Finally, a computer that works for you.',
};

export const PROBLEM = {
  headline: 'Is your computer fighting you?',
  text: 'You sit down to work, but your computer has other plans. An update restarts your machine. An ad pops up in your start menu. Your files are moved to a cloud you didn\'t ask for. You aren\'t just tired of the glitches; you are tired of feeling like a product.',
  definitions: [
    { term: 'The Problem', def: 'Operating Systems are designed to distract you.' },
    { term: 'The Frustration', def: 'You spend more time managing updates than doing work.' },
    { term: 'The Solution', def: 'An operating system that stays out of your way.' },
  ]
};

export const PHILOSOPHY = {
  title: 'Our Promise.',
  subtitle: 'We treat you like an owner, not a subscriber.',
  text: 'We believe technology should serve humans, not the other way around.',
  cards: [
    { title: 'It Stays Fast', description: 'Most computers get slower over time to force you to buy a new one. BoringOS stays fast for years, saving you money.' },
    { title: 'It Respects You', description: 'Your photos are yours. Your documents are yours. We don\'t scan them, we don\'t upload them, and we don\'t train AI on them.' },
    { title: 'It Just Works', description: 'No "Welcome Experience." No "Setup Wizard" trying to sell you things. You turn it on, and it is ready to go.' }
  ]
};

export const WHAT_NOT = {
  headline: 'Luxury is what isn\'t there.',
  description: 'We removed the clutter so you can find your focus.',
  items: [
    { title: 'No Monthly Fees.', desc: 'Free forever. No subscriptions. No "Pro" version.' },
    { title: 'No "For You" Feed.', desc: 'A computer is a tool, not a slot machine.' },
    { title: 'No Tracking.', desc: 'We don\'t know who you are, and we don\'t want to.' },
    { title: 'No Surprise Updates.', desc: 'We will never restart your computer while you work.' },
  ]
};

export const APP_SUITE = [
  {
    category: 'Writing & Work',
    apps: ['Word Processor', 'Spreadsheets', 'Email', 'PDF Reader'],
    description: 'Compatible with Microsoft Office documents, but free. Write your novel, manage your budget, or finish your homework.',
    icon: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z'
  },
  {
    category: 'Photos & Memories',
    apps: ['Photo Gallery', 'Music Player', 'Video Player', 'Camera'],
    description: 'Your memories stay on your hard drive. Connect your phone, back up your photos, and keep them safe forever.',
    icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z'
  },
  {
    category: 'Family Safe',
    apps: ['Drawing App', 'Offline Encyclopedia', 'Educational Games', 'Maps'],
    description: 'A safe place for kids to explore technology without ads, tracking, or chat rooms. Just creativity and learning.',
    icon: 'M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z'
  },
  {
    category: 'Simple Fun',
    apps: ['Solitaire', 'Chess', 'Sudoku', 'Minesweeper'],
    description: 'Classic games that respect your time. No loot boxes, no daily login bonuses, no microtransactions.',
    icon: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM7 10h2v7H7zm4-3h2v10h-2zm4 6h2v4h-2z'
  }
];

export const MOCKINGBIRD_DEEP_DIVE = [
  {
    id: 'base',
    title: 'The Foundation',
    tech: 'Unbreakable Core',
    benefit: 'Peace of Mind',
    description: 'We built the core of the system like a bank vault. You can change your wallpaper or install apps, but you cannot accidentally break the operating system. It always starts up.',
    features: ['Virus Resistant', 'Self-Healing', 'Always Starts']
  },
  {
    id: 'graphics',
    title: 'The Visuals',
    tech: 'Modern Clarity',
    benefit: 'Easy on Eyes',
    description: 'We removed the clutter. Windows snap into place. Text is crisp and easy to read. It looks modern, but it doesn\'t demand your attention.',
    features: ['Readable Text', 'Smooth Motion', 'No Flicker']
  },
  {
    id: 'audio',
    title: 'The Sound',
    tech: 'Pro Audio',
    benefit: 'Plug & Play',
    description: 'Whether you are on a Zoom call or listening to jazz, it just works. No fiddling with drivers or settings.',
    features: ['Works instantly', 'Clear Voice', 'Rich Sound']
  },
  {
    id: 'apps',
    title: 'The Vault',
    tech: 'Privacy First',
    benefit: 'Total Safety',
    description: 'Every app lives in its own bubble. Your word processor cannot see your banking password. Your solitaire game cannot see your photos.',
    features: ['Apps are isolated', 'Data is safe', 'Easy to remove']
  }
];

export const AUDIENCE = [
  { title: 'The Parent', text: 'Who wants a safe computer for the living room.' },
  { title: 'The Student', text: 'Who needs to focus on writing papers, not fixing Wi-Fi.' },
  { title: 'The Creator', text: 'Who wants tools that don\'t change every month.' },
  { title: 'The Human', text: 'Who wants technology to help them live, not take over.' },
];

export const STEPS = [
  { 
    num: 1, 
    title: 'Download', 
    text: 'Download the free installer file. It works on almost any laptop or desktop from the last 10 years.' 
  },
  { 
    num: 2, 
    title: 'Install', 
    text: 'Put it on a USB drive and plug it in. Our simple wizard replaces your old, slow OS in about 15 minutes.' 
  },
  { 
    num: 3, 
    title: 'Relax', 
    text: 'Enjoy a computer that feels brand new. No account setup required. Just start using it.' 
  },
];

export const TECHNICAL_SPECS = [
  { label: 'Speed', value: 'Fast', detail: 'Revives old laptops.' },
  { label: 'Space', value: 'Light', detail: 'More room for photos.' },
  { label: 'Updates', value: 'Easy', detail: 'You choose when.' },
  { label: 'Privacy', value: 'Total', detail: 'Your business is yours.' },
  { label: 'Cost', value: '$0.00', detail: 'Free forever.' },
  { label: 'Tracking', value: 'None', detail: 'No hidden spies.' },
  { label: 'Viruses', value: 'Rare', detail: 'Built to be secure.' },
  { label: 'Lifespan', value: 'Long', detail: 'Use it for years.' },
];