import React from 'react';

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className='text-3xl font-medium capitalize mb-8 text-center text-purple-500 dark:text-purple-400'>
      {children}
    </h2>
  );
}
