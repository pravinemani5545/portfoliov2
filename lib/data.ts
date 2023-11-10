import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { FaReact } from 'react-icons/fa';
import { LuGraduationCap } from 'react-icons/lu';
import gericht from '@/public/gericht.png';
import prompty from '@/public/prompty.png';
import carHub from '@/public/carHub.png';
import pricescraper from '@/public/pricescraperr.png';
import threads from '@/public/threads.png';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const experiencesData = [
  {
    title: 'Computer Engineering Undergrad',
    location: 'Hamilton, ON',
    description:
      'Started my journey as a Computer Engineering undergrad at McMaster University. Currently in my 2nd last year of my program.',
    icon: React.createElement(LuGraduationCap),
    date: '2019',
  },
  {
    title: 'Frontend Intern',
    location: 'Toronto, ON',
    description:
      'Started working as an intern with my day to day primarily consisting of working on UI/UX design and working on various frontend components in React ',
    icon: React.createElement(CgWorkAlt),
    date: '2021',
  },
  {
    title: '5G Software Developer Co-op',
    location: 'Ottawa, ON',
    description:
      'I worked on a 5G feature called Carrier Aggregation. My day to day included unit-testing and working on various features. Worked primarily in Golang.',
    icon: React.createElement(CgWorkAlt),
    date: '2022',
  },
  {
    title: 'Full-Stack Developer',
    location: 'Toronto, ON',
    description:
      "Continued my web development journey by learning backend and database technologies. I'm now a full-stack developer seeking work. My stack includes React, Next.js, TypeScript, Tailwind, Mongoose and MongoDB. I'm open to part-time opportunities.",
    icon: React.createElement(FaReact),
    date: '2023 - present',
  },
] as const;

export const projectsData = [
  {
    title: 'Threads',
    description:
      'Web clone version of the popular text based social networking platform Threads.',
    github: 'https://github.com/pravinemani5545/threads',
    link: 'https://threads-pravinemani5545.vercel.app/',
    tags: ['Next.js', 'TypeScript', 'Tailwind', 'MongoDB', 'Clerk'],
    imageUrl: threads,
  },
  {
    title: 'PriceScraper',
    description: 'A tool to monitor and compare prices of products on Amazon',
    github: 'hhttps://github.com/pravinemani5545/PriceScraper',
    link: 'https://price-scraper-pravinemani5545.vercel.app/',
    tags: ['Next.js', 'Tailwind', 'MongoDB', 'Cheerio', 'Puppeteer'],
    imageUrl: pricescraper,
  },
  {
    title: 'Prompty',
    description: 'Tool to share or find some of the best AI chatbot prompts',
    github: 'https://github.com/pravinemani5545/prompty',
    link: 'https://prompty-pravinemani5545.vercel.app/',
    tags: ['Next.js', 'OAuth', 'Tailwind', 'MongoDB'],
    imageUrl: prompty,
  },
  {
    title: 'CarHub',
    description:
      'Car Hub is a simple application to find details of and rent out cars from.',
    github: 'https://github.com/pravinemani5545/CarRents',
    link: 'https://car-rents-pravinemani5545.vercel.app/',
    tags: ['Next.js', 'TypeScript', 'Tailwind', 'Opensource API'],
    imageUrl: carHub,
  },
  {
    title: 'Gericht',
    description: 'Gericht, your destination for fine dining.',
    github: 'https://github.com/pravinemani5545/gericht',
    link: 'https://gericht-pravinemani5545.vercel.app/',
    tags: ['React', 'Tailwind'],
    imageUrl: gericht,
  },
] as const;

export const skillsData = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Express',
  'Git',
  'Tailwind',
  'Prisma',
  'MongoDB',
  'Mongoose',
  'Redux',
  'Express',
  'Python',
  'Golang',
  'Framer Motion',
  'Responsive Design',
  'Figma',
] as const;
