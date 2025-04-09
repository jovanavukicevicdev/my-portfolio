'use client';
import { useEffect, useRef, useState } from 'react';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Navbar from '@/components/Navbar';
import ThemeToggle from '@/components/theme/ThemeToggle';
import Loader from '@/components/shared/Loader';

export default function Home() {
  const [id, setId] = useState('');
  const componentsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const isIntersecting = entry.isIntersecting;
          if (isIntersecting) {
            setId(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (componentsRef.current) {
      const componentsArr = Array.from(componentsRef.current.children);
      componentsArr.forEach((comp) => {
        observer.observe(comp);
      });
    }
  }, []);

  return (
    <>
      <Loader />
      <ThemeToggle>
        <Navbar id={id} />
        <div className="w-full" ref={componentsRef}>
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Contact />
        </div>
      </ThemeToggle>
    </>
  );
}
