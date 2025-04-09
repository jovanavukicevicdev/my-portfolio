'use client';
import { motion } from 'framer-motion';
import Heading from '@/components/shared/Heading';
import Project from '@/components/Project';
import { projectsData } from '@/data/app-data';

const Projects = () => {
  return (
    <div id="projects" className="min-h-screen py-20">
      <Heading text="Projects" />
      <div className="flex flex-wrap items-center justify-center gap-5">
        {projectsData.map((project, index) => (
          <motion.div key={`id-${index}`} layout>
            <Project data={project} index={index} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
