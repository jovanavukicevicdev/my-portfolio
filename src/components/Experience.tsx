'use client';
import { useRef } from 'react';
import { experienceData, arrowLeftIcon } from '@/data/app-data';
import Heading from '@/components/shared/Heading';
import { motion, useScroll, useSpring } from 'framer-motion';

const Experience = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 95%', 'end end'],
  });
  const scrollY = useSpring(scrollYProgress, { stiffness: 200, damping: 20 });

  return (
    <div id="experience" className="relative py-20">
      <Heading text={'Experience & Education'} />
      <div
        ref={containerRef}
        className="relative w-full h-full flex flex-col items-center
                   justify-center gap-y-10 max-lg:gap-y-20 py-10"
      >
        {experienceData.map((data, index) => (
          <div
            key={`id-${index}`}
            className={`w-[600px] max-xl:w-[480px] max-sm:w-full px-12 max-sm:px-0 relative ${
              index % 2 === 0
                ? '-left-[300px] max-xl:-left-[240px] max-lg:-left-0'
                : 'left-[300px] max-xl:left-[240px] max-lg:left-0'
            }`}
          >
            <motion.div
              initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, type: 'spring', stiffness: 50 }}
              className="relative flex flex-col gap-y-3 rounded-md border border-emerald-300
                         bg-white p-4 tracking-wide max-sm:text-sm dark:bg-gray-700
                         transition-colors z-20"
            >
              <h1
                className="text-xl max-sm:text-lg font-light text-gray-700
                           dark:text-white transition-colors"
              >
                {data.title}
              </h1>
              <p className="text-gray-800 dark:text-gray-100 transition-colors">
                <span className="block pl-2 font-extralight">{data.position}</span>
              </p>
              <div className="text-gray-800 dark:text-gray-200 transition-colors">
                <div className="pl-2">{data.description}</div>
              </div>
              <span
                className={`absolute top-20 text-emerald-300 -translate-y-1/2 max-lg:hidden ${
                  index % 2 === 0 ? 'left-full rotate-180' : 'right-full'
                }`}
              >
                {arrowLeftIcon}
              </span>
            </motion.div>
            <div
              className={`w-14 absolute top-20 border border-gray-300 rounded-full aspect-square 
                          grid place-items-center text-emerald-500 -translate-y-1/2 z-10 bg-white ${
                            index % 2 === 0
                              ? 'left-full -translate-x-1/2 max-lg:left-1/2'
                              : 'right-full translate-x-1/2 max-lg:right-1/2'
                          }`}
            >
              {data.year}
            </div>
          </div>
        ))}
        <motion.div
          initial={{ scaleY: 0 }}
          style={{ scaleY: scrollY }}
          className="absolute w-0.5 h-full rounded-full bg-gradient-to-b from-gray-300 to-emerald-300 origin-top"
        ></motion.div>
      </div>
    </div>
  );
};

export default Experience;
