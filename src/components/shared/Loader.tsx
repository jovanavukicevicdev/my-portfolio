'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Loader = () => {
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setLoad(true);
  }, []);

  return (
    <motion.div
      initial={{ top: 0 }}
      animate={{ top: load ? '-100%' : 0 }}
      transition={{ duration: 0.5 }}
      className="w-full h-full fixed left-0 top-0 flex items-center
                 justify-center bg-gray-800 opacity-90 z-50"
    >
      <div className="loader"></div>
    </motion.div>
  );
};

export default Loader;
