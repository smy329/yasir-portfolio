import {
  frontend,
  backend,
  mern,
  react,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  coverhunt,
  dcc,
  kelhel,
  microverse,
  netlify,
  nextjs,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'skills',
    title: 'Skills',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'experience',
    title: 'Experience',
  },
  {
    id: 'education',
    title: 'Education',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'MERN Stack Developer',
    icon: mern,
  },
  {
    title: 'React.js Developer',
    icon: react,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  // {
  //   name: 'TypeScript',
  //   icon: typescript,
  // },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'nextjs',
    icon: nextjs,
  },
  // {
  //   name: 'Redux Toolkit',
  //   icon: redux,
  // },

  {
    name: 'Node JS',
    icon: nodejs,
  },
  // {
  //   name: 'Rails',
  //   icon: rubyrails,
  // },
  // {
  //   name: 'graphql',
  //   icon: graphql,
  // },
  // {
  //   name: 'postgresql',
  //   icon: postgresql,
  // },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'netlify',
    icon: netlify,
  },

  // {
  //   name: 'docker',
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: 'Officer Cadet (OC)',
    company_name: 'Bangladesh Military Academy',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'Dec 2014 - April 2016',
  },
  {
    title: 'Co-founder & CEO',
    company_name: 'Levia',
    icon: microverse,
    iconBg: '#333333',
    date: 'Jan 2019 - Nov 2022',
  },
  // {
  //   title: 'Junior Software Engineer',
  //   company_name: 'Kelhel',
  //   icon: kelhel,
  //   iconBg: '#333333',
  //   date: 'May 2022 - Oct 2022',
  // },
  // {
  //   title: 'Full Stack Developer',
  //   company_name: 'Diversity Cyber Council',
  //   icon: dcc,
  //   iconBg: '#333333',
  //   date: 'Sep 2022 - Present',
  // },
];

const projects = [
  {
    id: 'project-1',
    name: 'Disney Palace',
    description:
      'The Disney Palace Marketplace is an online platform where users can explore and purchase various kinds of Disney toys. This marketplace provides a wide range of Disney toys along with detailed information, pricing, available quantity, and seller information for each toy. In addition, authenticated sellers have the ability to upload, update, and delete their toy products.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: komikult,
    repo: 'https://github.com/smy329/disney-palace-client-react',
    demo: 'https://disney-palace.web.app/',
  },
  {
    id: 'project-2',
    name: 'Melody Makers',
    description:
      'Melody Makers Camp is a summer music school that offers a wide range of music classes and activities for students of all ages. Our website provides a user-friendly platform for students to enroll in classes, explore talented instructors, and manage their learning journey. The website design is visually appealing, with a unique and captivating layout that enhances the user experience.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: leaderboard,
    repo: 'https://github.com/smy329/melody-makers-client-react',
    demo: 'https://melody-makers-camp.web.app/',
  },
  {
    id: 'project-3',
    name: 'Flavor Fusion',
    description:
      'This is a recipe website. You will find delicious Mexican recipes and chefs details. Newly arrived recipes also can be found',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: math,
    repo: 'https://github.com/smy329/flavor-fusion-client-react',
    demo: 'https://chef-recipe-558e5.web.app/',
  },
  // {
  //   id: 'project-4',
  //   name: 'Movie Metro',
  //   description: `A single-page application that allows users to search for any movie or show's ratings and its details.`,
  //   tags: [
  //     {
  //       name: 'nextjs',
  //       color: 'blue-text-gradient',
  //     },
  //     {
  //       name: 'supabase',
  //       color: 'green-text-gradient',
  //     },
  //     {
  //       name: 'css',
  //       color: 'pink-text-gradient',
  //     },
  //   ],
  //   image: movie,
  //   repo: 'https://github.com/Movie-Metro',
  //   demo: 'https://movie-metro.netlify.app/',
  // },
  // 
];

export { services, technologies, experiences, projects };
