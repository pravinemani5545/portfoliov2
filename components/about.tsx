'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';

export default function About() {
  const { ref } = useSectionInView('About');

  return (
    <motion.section
      ref={ref}
      className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id='about'
    >
      <SectionHeading>About me</SectionHeading>
      <p className='mb-3'>
        Hello! I'm Pravine Manivannan, an enthusiastic and dedicated student
        with a passion for programming and technology. Currently pursuing my
        studies in <span className='font-medium'>Computer Engineering</span> at
        McMaster University, I aspire to become a skilled developer and
        contribute to the ever-evolving world of technology.
        <span className='italic'>My favorite part of programming</span> is the
        problem-solving aspect. I <span className='underline'>love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{' '}
        <span className='font-medium'>
          React, Next.js, Node.js, Express, Typescript, and MongoDB
        </span>
        . I am always looking to learn new technologies. I am currently looking
        for a <span className='font-medium'>full-time position</span> as a
        software developer.
      </p>
    </motion.section>
  );
}
