'use client';
import { useState, MouseEvent } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useMotionValue, useTransform, motion, useSpring } from 'framer-motion';
import { heroData } from '@/data/app-data';

const Hero = () => {
  const [windowOffset, setWindowOffset] = useState({ innerWidth: 0, innerHeight: 0 });
  const [mouseMove, setMouseMove] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Captures mouse position in real time and updates x and y motionValue
  const handleMouseMove = (e: MouseEvent) => {
    const { clientX, clientY } = e;
    x.set(clientX);
    y.set(clientY);
  };

  const handleMouseEnter = () => {
    setWindowOffset({ innerWidth: window.innerWidth, innerHeight: window.innerHeight });
    setMouseMove(true);
  };

  const { innerWidth, innerHeight } = windowOffset;

  const xSpring = useSpring(x, { stiffness: 100, damping: 10 });
  const ySpring = useSpring(y, { stiffness: 100, damping: 10 });

  const rotateY = useTransform(xSpring, [0, innerWidth], [-30, 30]);
  const rotateX = useTransform(ySpring, [0, innerHeight], [10, -50]);

  return (
    <div
      id="home"
      className="h-screen grid place-items-center"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
    >
      <div>
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col items-center justify-center gap-y-3 font-light capitalize"
        >
          <motion.div
            style={{
              rotateX: mouseMove ? rotateX : 0,
              rotateY: mouseMove ? rotateY : 0,
              transition: '0.1s',
            }}
            className="flex items-center justify-center"
          >
            <Image
              src={'/girl_waving.png'}
              alt="Person image"
              width={400}
              height={400}
              priority={true}
              className="h-auto w-[200px]"
            />
          </motion.div>
          <h1
            className="text-center text-3xl font-bold tracking-wider text-gray-500
                       max-sm:text-2xl dark:text-white transition-colors normal-case"
          >
            Hi, my name is Jovana Vukicevic
          </h1>
          <p className="text-lg tracking-wider text-gray-700 dark:text-gray-200 transition-colors normal-case">
            Frontend is my playground
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8 flex justify-center gap-x-10 text-3xl text-pink-400 sm:text-2xl"
        >
          {heroData.map(({ icon, url }, index) => (
            <Link
              href={url}
              key={index}
              className="rounded-lg hover:bg-pink-500 hover:text-white transition-colors"
            >
              {icon}
            </Link>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
