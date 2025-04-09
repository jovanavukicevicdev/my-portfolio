import { ReactNode } from 'react';

// Hero
import GithubLineIcon from 'remixicon-react/GithubLineIcon';
import LinkedInBoxLineIcon from 'remixicon-react/LinkedinBoxLineIcon';

interface HeroData {
  icon: ReactNode;
  url: string;
}

export const heroData: HeroData[] = [
  {
    icon: <GithubLineIcon />,
    url: 'https://github.com/jovanavukicevicdev',
  },
  {
    icon: <LinkedInBoxLineIcon />,
    url: 'https://www.linkedin.com/in/jovana-vukicevic-aa1681246',
  },
];

// About Me
import DownloadLineIcon from 'remixicon-react/DownloadLineIcon';
import ArrowLeftSFillIcon from 'remixicon-react/ArrowLeftSFillIcon';

export const downloadIcon = <DownloadLineIcon />;
export const arrowLeftIcon = <ArrowLeftSFillIcon />;

export const aboutText =
  "I'm a frontend developer with over 9 years of experience building responsive, " +
  'user-friendly web applications. I specialize in React and NextJS and work with modern ' +
  'technologies like TypeScript, JavaScript, HTML, CSS/Sass, and a variety of frontend tools. ' +
  "I'm passionate about clean code, performance, and creating intuitive user experiences. " +
  "I enjoy collaborating in cross-functional teams and I'm currently open to remote positions.";

// Experience
interface ExperienceData {
  year: number;
  title: string;
  position: string;
  description: string;
}

export const experienceData: ExperienceData[] = [
  {
    year: 2023,
    title: 'Roko Labs d.o.o. [Nov 2023-present]',
    position: 'Lead Software Engineer',
    description:
      'Developing frontend applications using React. ' +
      'Other technologies: Typescript, TanStack Query, Node.js, npm, ' +
      'REST, React Hook Form + Zod, react-i18next, WebSockets and SSE, HTML5, CSS3, ' +
      'Sass/SCSS, Material UI, Styled Components / Emotion, Docker, PostgreSQL, Git, ' +
      'Vite, Vitest + RTL, SonarQube.',
  },
  {
    year: 2023,
    title: 'Holycode d.o.o. [Mar 2023-Aug 2023]',
    position: 'Senior Frontend Developer',
    description:
      'Developing frontend applications using React, Vue and Svelte. ' +
      'Other technologies: Typescript, Formik + Yup, React Context API, ' +
      'react-i18next, Node.js, npm, REST, HTML5, CSS3, Sass/SCSS, Material UI, ' +
      'Emotion, GitHub (GitHub Actions), Docker, PostgreSQL, Vite.',
  },
  {
    year: 2017,
    title: 'P3 d.o.o. [Feb 2017-Mar 2023]',
    position: 'Senior Frontend Developer',
    description:
      'Developing frontend for 30+ web applications using Angular 2+ (until v10) and React.js (from v16, to v18). ' +
      'Other technologies: Typescript, Node.js, npm, REST, React Context API, Redux Toolkit, ' +
      'react-i18next, HTML5, CSS3, Sass/SCSS, Bootstrap, Material UI, Styled Components / Emotion, Azure DevOps ' +
      '(boards, repos and version control, pipelines, active directory), Scrum.',
  },
  {
    year: 2015,
    title: 'Emisia Consulting d.o.o. [Sep 2015-Feb 2017]',
    position: 'UI Developer',
    description:
      'Implementing visual and interactive elements using ExtJS framework. ' +
      'Other technologies: HTML5, CSS3, Sass, MySQL, Apache Maven, Jasmine JS, JSDoc, Jenkins,' +
      'Apache Subversion, SonarQube, Jira, Scrum and Kanban.',
  },
  {
    year: 2014,
    title: 'University of Novi Sad, Technical Faculty “Mihajlo Pupin”',
    position: 'Master in Information Technologies',
    description: "Obtained Master's degree.",
  },
  {
    year: 2002,
    title: 'University of Novi Sad, Technical Faculty “Mihajlo Pupin”',
    position: 'Teacher of Informatics',
    description: "Obtained Bachelor's degree.",
  },
];

// Skills
interface SkillsData {
  name: string;
  icon: string;
}

export const skillsData: SkillsData[] = [
  {
    name: 'ReactJS',
    icon: '/skills/react.svg',
  },
  {
    name: 'TypeScript',
    icon: '/skills/ts.svg',
  },
  {
    name: 'JavaScript',
    icon: '/skills/js.svg',
  },
  {
    name: 'HTML',
    icon: '/skills/html.svg',
  },
  {
    name: 'CSS',
    icon: '/skills/css.svg',
  },
  {
    name: 'Sass',
    icon: '/skills/sass.svg',
  },
  {
    name: 'Material UI',
    icon: '/skills/mui.svg',
  },
  {
    name: 'Emotion',
    icon: '/skills/emotion.png',
  },
  {
    name: 'TailwindCSS',
    icon: '/skills/tailwind.svg',
  },
  {
    name: 'Vite',
    icon: '/skills/vite.svg',
  },
  {
    name: 'TanStack Query',
    icon: '/skills/react-query.svg',
  },
  {
    name: 'Redux Toolkit',
    icon: '/skills/redux-toolkit.svg',
  },
  {
    name: 'React Hook Form',
    icon: '/skills/react-hook-form.svg',
  },
  {
    name: 'Zod',
    icon: '/skills/zod.svg',
  },
  {
    name: 'AWS S3',
    icon: '/skills/aws-s3.svg',
  },
  {
    name: 'AWS Cognito',
    icon: '/skills/aws-cognito.svg',
  },
  {
    name: 'Azure AD',
    icon: '/skills/azure-ad.svg',
  },
  {
    name: 'Git',
    icon: '/skills/git.svg',
  },
  {
    name: 'Github',
    icon: '/skills/github.svg',
  },
  {
    name: 'Jenkins',
    icon: '/skills/jenkins.svg',
  },
  {
    name: 'Jira',
    icon: '/skills/jira.svg',
  },
  {
    name: 'Scrum',
    icon: '/skills/scrum.svg',
  },
  {
    name: 'Vitest',
    icon: '/skills/vitest.svg',
  },
  {
    name: 'Testing Library',
    icon: '/skills/testing-library.svg',
  },
  {
    name: 'Framer Motion',
    icon: '/skills/framer.svg',
  },
  {
    name: 'Figma',
    icon: '/skills/figma.svg',
  },
  {
    name: 'Photoshop',
    icon: '/skills/photoshop.svg',
  },
  {
    name: 'IntelliJ IDEA',
    icon: '/skills/intellij-idea.svg',
  },
];

// Projects
export interface ProjectsData {
  name: string;
  desc: string;
  imageUrl: string;
  appUrl: string;
  repoUrl: string;
  tech: string[];
}

export const projectsData: ProjectsData[] = [
  {
    name: 'TV Show Hub',
    desc:
      'Designed to help you explore and keep track of your favorite TV shows. ' +
      'With the power of the TV Maze API, you can search for shows, view essential details, ' +
      "and explore each show by season. Once you click on a season, you'll find a complete list " +
      "of episodes, including images and detailed synopses. It's a simple, user-friendly way to " +
      'discover, follow, and revisit your favorite shows!',
    imageUrl: '/projects/tv-show-hub.png',
    appUrl: 'https://tv-show-hub-vite.firebaseapp.com',
    repoUrl: 'https://github.com/jovanavukicevicdev/tv-show-hub-vite',
    tech: ['React', 'TS', 'Vite', 'Tanstack', 'Emotion'],
  },
];

// Navbar
import CopyrightLineIcon from 'remixicon-react/CopyrightLineIcon';

export const copyRightIcon = <CopyrightLineIcon />;

import Home5LineIcon from 'remixicon-react/Home5LineIcon';
import UserLineIcon from 'remixicon-react/UserLineIcon';
import HistoryLineIcon from 'remixicon-react/HistoryLineIcon';
import BriefcaseLineIcon from 'remixicon-react/BriefcaseLineIcon';
import ProjectorLineIcon from 'remixicon-react/ProjectorLineIcon';
import ContactsBook2LineIcon from 'remixicon-react/ContactsBook2LineIcon';

interface NavbarData {
  id: string;
  name: string;
  icon: ReactNode;
}

export const navbarData: NavbarData[] = [
  {
    id: 'home',
    name: 'Home',
    icon: <Home5LineIcon />,
  },
  {
    id: 'about',
    name: 'About',
    icon: <UserLineIcon />,
  },
  {
    id: 'experience',
    name: 'MyRoad',
    icon: <HistoryLineIcon />,
  },
  {
    id: 'skills',
    name: 'Skills',
    icon: <BriefcaseLineIcon />,
  },
  {
    id: 'projects',
    name: 'Projects',
    icon: <ProjectorLineIcon />,
  },
  {
    id: 'contact',
    name: 'Contact',
    icon: <ContactsBook2LineIcon />,
  },
];
