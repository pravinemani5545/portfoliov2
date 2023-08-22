import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { FaReact } from 'react-icons/fa';
import { LuGraduationCap } from 'react-icons/lu';
import gericht from '@/public/gericht.png';
import prompty from '@/public/prompty.png';
import carHub from '@/public/carHub.png';
import usePopcorn from '@/public/usePopcorn.png';
import dormBuddy from '@/public/dormBuddy.png';

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
      'Started my long journey as a Computer Engineering undergrad. Currently in my 2nd last year of my program.',
    icon: React.createElement(LuGraduationCap),
    date: '2019',
  },
  {
    title: '5G Software Developer Co-op',
    location: 'Ottawa, ON',
    description:
      'I worked on a 5G feature called Carrier Aggregation. My day to day included unit-testing and working on features. Worked primarily in Golang.',
    icon: React.createElement(CgWorkAlt),
    date: '2022',
  },
  {
    title: 'Full-Stack Developer',
    location: 'Toronto, ON',
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Mongoose and MongoDB. I'm open to part-time and full-time opportunities.",
    icon: React.createElement(FaReact),
    date: '2023 - present',
  },
] as const;

export const projectsData = [
  {
    title: 'Gericht',
    description: 'Gericht, your destination for fine dining.',
    github: 'https://github.com/pravinemani5545/gericht',
    link: 'https://gericht-pravinemani5545.vercel.app/',
    tags: ['React', 'Next.js', 'MongoDB', 'Tailwind', 'Prisma'],
    imageUrl: gericht,
  },
  {
    title: 'Prompty',
    description:
      'Looking to share or find some of the best AI chatbot prompts, look no further!',
    github: 'https://github.com/pravinemani5545/prompty',
    link: 'https://prompty-pravinemani5545.vercel.app/',
    tags: ['React', 'Next.js', 'MongoDB', 'Tailwind', 'Prisma'],
    imageUrl: prompty,
  },
  {
    title: 'CarHub',
    description: 'Car Hub is the best application to rent out cars from.',
    github: 'https://github.com/pravinemani5545/CarRents',
    link: 'https://car-rents-pravinemani5545.vercel.app/',
    tags: ['React', 'Next.js', 'MongoDB', 'Tailwind', 'Prisma'],
    imageUrl: carHub,
  },
  {
    title: 'usePopcorn',
    description: 'Rank and save all your favourite TV Shows & Movies',
    github: 'https://github.com/pravinemani5545/usePopcorn',
    link: 'https://use-popcorn-pravinemani5545.vercel.app/',
    tags: ['React', 'Next.js', 'MongoDB', 'Tailwind', 'Prisma'],
    imageUrl: usePopcorn,
  },
  {
    title: 'DormBuddy',
    description: 'Find University Rental opportunities near you!',
    github: 'https://github.com/pravinemani5545/CarRents',
    link: 'https://car-rents-pravinemani5545.vercel.app/',
    tags: ['React', 'Next.js', 'MongoDB', 'Tailwind', 'Prisma'],
    imageUrl: dormBuddy,
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
