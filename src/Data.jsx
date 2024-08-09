import Project1 from './assets/project1.png';
import Project2 from './assets/project2.jpg';
import Project3 from './assets/project3.jpg';
import Project4 from './assets/project4.jpg';
import Project5 from './assets/project5.png';


export const links = [
  {
    name: 'Home',
    path: 'home',
  },
  {
    name: 'Skills',
    path: 'skills',
  },
  {
    name: 'Works',
    path: 'work',
  },
  // {
  //   name: 'Resume',
  //   path: 'resume',
  // },
  {
    name: 'Contact',
    path: 'contact',
  },
];


export const skills = [
  {
    id: 1,
    name: 'JavaScript',
    percentage: 85,
    category: "FrontEnd",
    description:
      'Solid foundation of javascript syntax and features. Strong understanding of Javascript data types, variables, operators, control flow, functions and core language concepts',
  },
  {
    id: 2,
    name: 'TypeScript',
    percentage: 85,
    category: "FrontEnd",
    description:
      "Solid foundation in TypeScript syntax and features. Proficient in Typescript's core language concepts, with a focus on type safety and code scalability"
  },

  {
    id: 2,
    name: 'Java',
    percentage: 80,
    category: "BackEnd",
    description:
      "Solid foundation in Java syntax and features. Strong understanding of Java's core language concepts, with a focus on building robust, maintainable, and scalable applications.",
  },

  {
    id: 3,
    name: ' React',
    percentage: 85,
    category: "FrontEnd",
    description:
      "Solid foundation in React's core concepts and features.Experienced in building dynamic, responsive, and scalable user interfaces with a focus on performance optimization and maintainability.",
  },

  {
    id: 4,
    name: 'Next',
    category: "FrontEnd",
    percentage: 75,
    description:
      "Deep understanding of server-side rendering (SSR), static site generation (SSG), and dynamic routing. Experienced in creating fast, scalable, and SEO-friendly websites with a focus on maintainability and optimal performance.",
  },

  {
    id: 5,
    name: 'Scala',
    category: "BackEnd",
    percentage: 75,
    description:
      "In-depth understanding of Scala's syntax and functional programming paradigms. Proficient in combining object-oriented and functional programming features."},

  {
    id: 6,
    name: 'SpringBoot',
    category: "BackEnd",
    percentage: 85,
    description:
      "Extensive experience with Spring Boot's features and capabilities. Proficient in developing microservices and enterprise-level applications using Spring Boot and implementing robust application architectures ."},
  {
    id: 7,
    name: 'Node.js',
    percentage: 75,
    category: "BackEnd",
    description:
      "Strong expertise in Node.js and its ecosystem. Proficient in building scalable, high-performance backend applications using Node.js and its asynchronous, non-blocking I/O model. ",
  },
  {
    id: 8,
    name: 'Python',
    percentage: 70,
    category: "BackEnd",
    description:
      "Extensive knowledge of Python programming and its versatile applications. Proficient in writing clean, efficient, and maintainable Python code, with a deep understanding of core language concepts",
  },
  {
    id: 9,
    name: 'Git',
    percentage: 90,
    category: "Others",
    description:
      "Strong expertise in using Git for version control and collaboration. Proficient in managing code repositories, branching strategies, and resolving merge conflicts.",
  },
  {
    id: 10,
    name: 'Docker',
    percentage: 80,
    category: "Others",
    description:
      "Extensive experience with Docker and containerization technologies. Proficient in creating, managing, and deploying Docker containers and images.",
  },
];

export const projects = [
  {
    id: 1,
    img: Project1,
    category: 'Ecommerce',
    title: 'Cobra Case Ecommerce Application',
    link:"https://github.com/tanushaayer/cobra-case-ecommerce",
    description:
      "It is a modern E-Commerce store for custom phone cases named CaseCobra. It allows user to customize their phone case and place an order. It uses technologies like Next.js, Tailwind and React",
  },
  {
    id: 2,
    img: Project2,
    category: 'Ecommerce',
    title: 'Ecommerce Application',
    link: "https://github.com/WAA-E-commerce-K-AS-2T",
    description:
      "It is a modern E-Commerce store for everything. It uses technologies like Next.js, Tailwind, React on the frontend and Springboot, Java on the backend",
  },
  {
    id: 3,
    img: Project3,
    category: 'Development',
    title: 'News Portal Application',
    link: "https://github.com/PrayashShrestha/newsPortal",
    description:
      "It is a news portal application. It allows users to write news and read news articles. It uses technologies like Next,js, Material UI and React on frontend and Node.js, prisma on the backend",
  },
  {
    id: 4,
    img: Project4,
    category: 'Development',
    title: 'Real estate application',
    link: "https://github.com/butbuiapp/real-estate-api-microservices",
    description:
      "It is backend for real estate manageent application. It allows users to buy, sell and rent their houses/appartments. It uses technologies like java, springboot, rabbitmq and follows microservices architecture",
  },
  {
    id: 5,
    img: Project5,
    category: 'Development',
    title: 'Gpt3 modern ui/ux',
    link: "https://github.com/tanushaayer/gpt3-modern-uiux",
    description:
      "It is a modern ui/ux SPA. It uses technologies like html and tailwind css",
  },
];

export const cv = [
  {
    id: 1,
    title: 'Masters',
    subtitle: 'Computer Science',
    date: '2023 - 2026',
    description:
      'courses learnt',
    category: 'education',
  },

  {
    id: 2,
    title: 'Bachelors',
    subtitle: 'Computer Science and Information Technology',
    date: '2016 - 2020',
    description:
      'Bachelors in computer science from neapl. gpa',
    category: 'education',
  },
  {
    id: 3,
    title: 'Full Stack Developer',
    subtitle: 'Wiseyak Inc.',
    date: '03/2021 - 03/2023',
    description:
      'Built an EMR system',
    category: 'experience',
  },

  {
    id: 5,
    title: 'Software Dveloper',
    subtitle: 'Enterprise E-support Inc',
    date: '11/2021 - 2/2022',
    description:
      'Developed and tested customer software solutions',
    category: 'experience',
  },

  {
    id: 6,
    title: 'Search Engine Optimization Intern',
    subtitle: 'Numeric Mind',
    date: '1/2021 - 3/2021',
    description:
      'helped built websites and increase on page and off page seo',
    category: 'experience',
  },
];

