'use client';

import { useRef } from 'react';
import { projectsData } from '@/lib/data';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { BsArrowUpRightSquare, BsGithub } from 'react-icons/bs';

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  github,
  link,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.33 1'],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className='group mb-3 sm:mb-8 last:mb-0'
    >
      <section className='bg-gray-100 max-w-[50rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20'>
        <div className='pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]'>
          <h3 className='text-2xl font-semibold text-purple-500 dark:text-purple-400'>
            {title}
          </h3>
          <p className='mt-2 leading-relaxed text-gray-700 dark:text-white/70'>
            {description}
          </p>
          <div className='flex flex-row space-x-3 mt-3'>
            <Link href={github} target='_blank'>
              <BsGithub
                size={25}
                className='text-purple-500 hover:-translate-y-1 transition-transform cursor-pointer dark:text-purple-400'
              />
            </Link>
            <Link href={link} target='_blank'>
              <BsArrowUpRightSquare
                size={25}
                className='text-purple-500 hover:-translate-y-1 transition-transform cursor-pointer dark:text-purple-400'
              />
            </Link>
          </div>
          <ul className='flex flex-wrap mt-4 gap-2 sm:mt-auto'>
            {tags.map((tag, index) => (
              <li
                className='bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70'
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <Image
          src={imageUrl}
          alt='Project I worked on'
          quality={95}
          className='absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
        transition 
        group-hover:scale-[1.04]
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2

        group-even:group-hover:translate-x-3
        group-even:group-hover:translate-y-3
        group-even:group-hover:rotate-2

        group-even:right-[initial] group-even:-left-40'
        />
      </section>
    </motion.div>
  );
}
