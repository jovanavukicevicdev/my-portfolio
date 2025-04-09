'use client';
import Heading from '@/components/shared/Heading';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div id="contact" className="h-screen max-lg:h-auto py-20 max-lg:py-40 max-xs:pb-20">
      <Heading text="Send me a message" />
      <div
        className="w-full h-full my-auto flex max-lg:flex-col items-center
                   justify-between max-lg:justify-center gap-x-20 max-lg:gap-x-0 gap-y-20"
      >
        <motion.div
          initial={{ opacity: 0, y: 150 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <Image
            src={'/girl_writing_email.png'}
            alt="Contact image"
            height={400}
            width={400}
            className="w-[300px] rounded-md"
          />
        </motion.div>
        <motion.form
          initial={{ opacity: 0, x: 150 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="w-[600px] max-lg:w-[400px] max-sm:w-full flex flex-col gap-3"
        >
          <div className="w-full flex max-lg:flex-col gap-x-3 max-lg:gap-y-3">
            <input
              type="text"
              className="w-full border border-emerald-500 rounded-md bg-gray-100 px-4
                         py-2 text-sm tracking-wider text-gray-500 outline-none"
              placeholder="Name"
            />
            <input
              type="email"
              className="w-full border border-emerald-500 rounded-md bg-gray-100 px-4
                         py-2 text-sm tracking-wider text-gray-500 outline-none"
              placeholder="Email"
            />
          </div>
          <input
            type="text"
            className="w-full border border-emerald-500 rounded-md bg-gray-100 px-4
                       py-2 text-sm tracking-wider text-gray-500 outline-none"
            placeholder="Subject"
          />
          <textarea
            className="max-h-[250px] min-h-[150px] border border-emerald-500 rounded-md bg-gray-100
                       px-4 py-2 text-sm tracking-wider text-gray-500 outline-none"
            placeholder="Feel free to write me a novel (or just a few lines)."
          ></textarea>
          <input
            type="submit"
            className="w-full bg-emerald-500 px-4 py-2 rounded-full
                       text-sm font-light tracking-wider text-white outline-none
                       hover:bg-emerald-600 transition-colors cursor-pointer"
            value="Send Message"
            onClick={(e) => e.preventDefault()}
          />
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;
