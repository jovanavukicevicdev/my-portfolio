'use client';
import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ProjectsData } from '@/data/app-data';
import Link from 'next/link';

interface ProjectProps {
  data: ProjectsData;
  index: number;
}

const Project = ({ data, index }: ProjectProps) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: index % 2 === 0 ? 100 : -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, type: 'spring', stiffness: 100 }}
        onClick={() => setShow((show) => !show)}
        className="relative w-[350px] max-sm:w-full h-max border border-gray-300
                 dark:border-gray-700 rounded-lg cursor-pointer"
      >
        <Image
          src={data.imageUrl}
          alt="Project image"
          width={400}
          height={400}
          className="rounded-lg opacity-70"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: show ? 1 : 0 }}
          className="absolute top-0 w-full h-full flex flex-col items-center
                   justify-center gap-y-2 bg-white/95 p-6 rounded-lg
                   dark:bg-gray-700/95 transition-colors"
        >
          <h2
            className="text-lg font-bold tracking-wide text-gray-500
                     dark:text-white transition-colors"
          >
            {data.name}
          </h2>
          <p
            className="text-justify text-gray-500 first-letter:pl-2
                     dark:text-gray-100 transition-colors"
          >
            {data.desc}
          </p>
        </motion.div>
      </motion.div>
      <div className="w-full flex justify-start">
        <Link
          className="w-[60px] flex items-center justify-center gap-x-2 mt-2 mr-2 rounded-xl bg-sky-400
                     py-1 font-light text-white hover:bg-sky-500 transition-colors"
          href={data.repoUrl}
        >
          Code
        </Link>
        <Link
          className="w-[60px] flex items-center justify-center gap-x-2 mt-2 rounded-xl bg-sky-400
                     py-1 font-light text-white hover:bg-sky-500 transition-colors"
          href={data.appUrl}
        >
          Demo
        </Link>
      </div>
    </>
  );
};

export default Project;
