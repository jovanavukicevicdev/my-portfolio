'use client';
import Heading from '@/components/shared/Heading';
import Image from 'next/image';
import { aboutText, downloadIcon, arrowLeftIcon } from '@/data/app-data';

const About = () => {
  return (
    <div id="about" className="min-h-screen flex flex-col items-center justify-center">
      <Heading text="About Me" />
      <div className="w-full flex items-center justify-between max-md:justify-center">
        <Image
          src={'/girl_pointing_left.png'}
          alt="About image"
          width={400}
          height={400}
          className="w-[300px] max-lg:w-[200px] max-md:hidden"
        />
        <div
          className="relative max-w-[800px] rounded-xl bg-gray-100 p-5 text-justify
                   dark:bg-gray-700 transition-colors"
        >
          <span
            className="absolute -left-4 top-20 scale-[2.5] text-gray-100 max-md:hidden
                       dark:text-gray-700 transition-colors"
          >
            {arrowLeftIcon}
          </span>
          <p
            className="text-lg font-light text-gray-700 first-letter:pl-3 max-lg:text-[16px]
                       max-sm:text-[14px] dark:text-white transition-colors"
          >
            {aboutText}
          </p>
          <a
            href="/jovana_cv.pdf"
            download=""
            className="w-max flex items-center gap-x-2 mt-6 rounded-full bg-pink-400
                       px-3 py-2 font-light text-white hover:bg-pink-500 transition-colors"
          >
            <span>Download CV</span>
            <span className="text-xl">{downloadIcon}</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
