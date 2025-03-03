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
      'Pursuing a Bachelor of Computer Engineering and Management at McMaster University. Gaining expertise in full-stack development, system architecture, cloud computing, and embedded systems. Developed multiple personal projects, including a price-scraper and a social media platform clone.',
    icon: React.createElement(LuGraduationCap),
    date: '2019 - Present',
  },
  {
    title: 'Frontend Developer Co-op',
    location: 'SnapSmile, Toronto, ON',
    description:
      'Worked on UI/UX development using React, building interactive and responsive front-end components. Gained experience with component-based architecture, state management (Redux), and design systems. Developed reusable UI libraries and collaborated with designers in Figma to enhance user experience.',
    icon: React.createElement(CgWorkAlt),
    date: '2021',
  },
  {
    title: '5G Software Developer Co-op',
    location: 'Ericsson, Ottawa, ON',
    description:
      'Worked on Carrier Aggregation in 5G networks, focusing on improving signal efficiency in mid-band frequencies. Developed microservices in Golang, wrote unit tests, and optimized cloud-based RAN (Radio Access Network) architecture. Integrated CI/CD pipelines with Jenkins, GCOV, and SonarQube, ensuring 90%+ test coverage. Conducted system debugging and performance optimization for large-scale distributed networks.',
    icon: React.createElement(CgWorkAlt),
    date: '2022',
  },
  {
    title: 'Full-Stack Developer Co-op',
    location: 'Imprimo, Toronto, ON',
    description:
      'Designed and developed new features for a digital art licensing platform. Implemented a custom user-generated Stories feature in React Native, integrating modular UI components and RESTful APIs using Node.js. Optimized PostgreSQL database queries and migrations, reducing response times by 30%. Developed and deployed a real-time chat system using PubNub, improving communication reliability across devices. Led UI enhancements using Tailwind CSS and Framer Motion to improve cross-device compatibility and user engagement.',
    icon: React.createElement(FaReact),
    date: '2024',
  },
  {
    title: 'Mobile Developer (Part-time)',
    location: 'Fixvi, Ottawa, ON',
    description:
      'Developed an automated scheduling system in React Native using Sendbird, integrating webhooks, bot-driven prompts, and interactive polls to improve workflow efficiency. Led Android porting efforts by modifying native code and optimizing Gradle configurations for compatibility with the latest Android firmware. Implemented push notifications using Customer.io to manage Firebase Cloud Messaging (FCM) and Apple Push Notification Service (APNs), increasing user engagement by 40%. Collaborated with backend engineers to ensure seamless API integrations and real-time updates.',
    icon: React.createElement(FaReact),
    date: '2024',
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
  'Tailwind CSS',
  'Prisma',
  'MongoDB',
  'Mongoose',
  'PostgreSQL',
  'Redux',
  'Python',
  'Golang',
  'Framer Motion',
  'Docker',
  'REST API',
  'gRPC',
  'CI/CD',
  'Jenkins',
  'AWS (S3, EC2, DynamoDB)',
  'Firebase',
  'SonarQube',
  'Customer.io',
  'Sendbird',
  'Webhooks',
  'Cloud Computing',
  'Responsive Design',
  'System Architecture',
  'Figma',
  'Project Management',
] as const;
