'use client';
import Heading from '@/components/shared/Heading';
import Image from 'next/image';
import { skillsData } from '@/data/app-data';
import { motion } from 'framer-motion';

const Skills = () => {
  const variants = {
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3 + i * 0.07,
      },
    }),
    hidden: {
      opacity: 0,
      y: 30,
    },
  };

  return (
    <div id="skills" className="min-h-screen flex flex-col items-center justify-center gap-y-20">
      <Heading text="Skills" />
      {/*<div className="w-full flex justify-start flex-wrap gap-x-8 gap-y-10 max-lg:gap-y-6">*/}
      <div className="w-full grid [grid-template-columns:repeat(auto-fit,_minmax(140px,_1fr))] gap-6 p-4">
        {skillsData.map((skill, index) => (
          <motion.div
            custom={index}
            variants={variants}
            initial="hidden"
            whileInView="visible"
            whileHover={{ scale: 1.1 }}
            viewport={{ margin: '50px', once: true }}
            key={index}
            className="flex items-center justify-center gap-x-3 rounded-xl border border-gray-300
                       dark:border-gray-700 bg-gray-100 dark:bg-gray-50 px-5 py-2 max-lg:px-2"
          >
            <Image
              src={skill.icon}
              alt="Skills image"
              width={100}
              height={100}
              className="h-auto w-[40px]"
            />
            <p className="text-sm text-gray-600">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
