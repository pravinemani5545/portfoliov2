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
      className='mb-28 max-w-[50rem] text-center leading-8 sm:mb-40 scroll-mt-28'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id='about'
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I'm <span className="font-bold">Pravine Manivannan</span>, a 
        <span className="font-medium"> full-stack developer</span> with a strong background in 
        <span className="font-medium"> mobile and web development</span>. With experience at 
        <span className="font-medium"> Ericsson, Imprimo, and Fixvi</span>, I've built scalable applications, 
        optimized backend systems, and contributed to high-impact projects in both 
        <span className="font-medium"> startups and enterprise environments</span>.
        
        <br /><br />

        I thrive at the intersection of <span className="font-medium">software engineering and product development</span>, 
        leveraging my skills in <span className="font-medium">system architecture, cloud infrastructure, and real-time communications </span> 
        to deliver high-performance solutions. Whether developing 
        <span className="italic"> automated scheduling systems, real-time messaging platforms, or cloud-native applications</span>, 
        I enjoy solving complex technical challenges and driving measurable improvements.
        
        <br /><br />

        Currently, I’m completing my <span className="font-medium">Bachelor of Computer Engineering and Management</span> 
        at <span className="font-medium">McMaster University</span>, where I apply my knowledge to personal projects like 
        <span className="font-medium"> a price-scraping tool and a social media platform clone</span>. 
        I’m passionate about <span className="underline">building efficient, user-focused applications</span> and continuously 
        expanding my expertise in modern software technologies.
      </p>
    </motion.section>
  );
}
