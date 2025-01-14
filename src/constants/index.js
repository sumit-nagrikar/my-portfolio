import project2 from '../assets/projects/project-2.png';
import project1 from '../assets/projects/project-1.png';
import project3 from '../assets/projects/project-3.png';
import project4 from '../assets/projects/project-4.png';
import project5 from '../assets/projects/project-5.png';

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const PROJECTS = [
  {
    title: 'Shop-Unlimited - An eCommerce platform',
    image: project1,
    description:
      'A fully functional eCommerce website with features like user authentication, product listing, cart management, and payment integration and Admin panel.',
    technologies: [
      'React',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Stripe API',
      'Razorpay API',
    ],
    link: 'https://shop-unlimited-frontend.vercel.app/',
    gitUrl: 'https://github.com/sumit-nagrikar/shop-unlimited',
  },
  {
    title: 'Blogs - A Next.js Blogging Platform',
    image: project5,
    description:
      'A dynamic blogging platform built with Next.js that allows users to browse blogs, subscribe to newsletters, and engage with content. Includes an admin panel for managing blogs and subscriptions.',
    features: [
      'View a list of blogs with category and author filtering.',
      'Subscribe to newsletters with email authentication.',
      'Responsive UI for a seamless user experience.',
      'Admin panel (not exposed to users) for adding blogs, viewing all subscriptions, and managing content.',
    ],
    technologies: ['Next.js', 'Node.js', 'MongoDB', 'TailwindCSS'],
    link: 'https://learn-with-blogs.vercel.app/',
    gitUrl: 'https://github.com/sumit-nagrikar/blog-app',
  },

  {
    title: 'CineBuzz-A movie ticket booking app',
    image: project2,
    description:
      'A fully functional movie ticket booking website with features like booking a movie ticket and fetching recent ticket booking.',
    technologies: ['HTML', 'CSS', 'React', 'Node.js', 'MongoDB'],
    link: 'https://cinebuzzz.netlify.app/',
    gitUrl: 'https://github.com/sumit-nagrikar/cinebuzz',
  },

  {
    title: 'Entertainment App - Explore movies, TV shows, and more',
    image: project3,
    description:
      'A sleek entertainment app offering a curated collection of trending movies and TV shows with detailed descriptions.',
    technologies: ['React', 'Redux', 'TailwindCSS', 'TMDb API', 'MERN'],
    link: 'https://main--cinelove.netlify.app/',
    gitUrl: 'https://github.com/sumit-nagrikar/entertainment-app',
  },

  {
    title: 'Crypto Dashboard - Real-time cryptocurrency tracker',
    image: project4,
    description:
      'A dynamic dashboard to track real-time cryptocurrency prices and trends, complete with a search feature and interactive charts.',
    technologies: [
      'HTML',
      'CSS',
      'React',
      'Node.js',
      'Chart.js',
      'API Integration',
      'MERN',
    ],
    link: 'https://cryptofrontdashboard.vercel.app/',
    gitUrl: 'https://github.com/Piyush0924/cryptofrontdashboard',
  },
];
