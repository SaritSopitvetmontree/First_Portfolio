import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  Liigo,
  KELPS,
  shopify,
  FD,
  LL,
  RD,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "UX/UI",
    icon: web,
  },
  {
    title: "Frontend",
    icon: mobile,
  },
  {
    title: "Backend",
    icon: backend,
  },
  {
    title: "Database",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Frontend Developer Intern",
    company_name: "Liigo: A travel tech company",
    icon: Liigo,
    iconBg: "#FFFFFF",
    date: "APR 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Learned the daily tasks as a software developer and how to operate in a team.",
      "Most importantly, I learned that software developer is all about problem solving",
    ],
  },
  {
    title: "Embedded System Engineer",
    company_name: "KELPS: A 3D printer developing startup",
    icon: KELPS,
    iconBg: "#1b1b1d",
    date: "APR 2021 - OCT 2021",
    points: [
      "Managed tasks and timelines for team members, ensuring efficient progress and coordination",
      "Developed Python code for Raspberry Pi, serving as the central control system for the printer",
      "Designed and created mechanical components for the 3D printer",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Face Detection",
    description:
      "A full-stack web app utilizing a face detection API with a built-in registration and login system. The app can detect faces within the provided image. Demo account: Email - test@gmail.com, Password - test.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tachyons",
        color: "pink-text-gradient",
      },
      {
        name: "express.js",
        color: "green-text-gradient",
      },
      {
        name: "postgreSQL",
        color: "grey-text-gradient",
      },
    ],
    image: FD,
    source_code_link: "https://github.com/SaritSopitvetmontree/Face_Detection",
    demo_link: "https://SaritSopitvetmontree.github.io/Face_Detection",
  },
  {
    name: "Little Lemon",
    description:
      "A fictional restaurant website created as a capstone project for the Meta Front-End course. Built using React, this site showcases the effective use of React Router and responsive design techniques.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: LL,
    source_code_link: "https://github.com/SaritSopitvetmontree/Little_Lemon",
    demo_link: "https://SaritSopitvetmontree.github.io/Little_Lemon",
  },
  {
    name: "React Dashboard",
    description:
      "An all-in-one dashboard built using React and the Syncfusion design system. Showcasing the effective use of React hooks and state control, it offers a dynamic and visually appealing interface.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: RD,
    source_code_link: "https://github.com/SaritSopitvetmontree/Dashboard",
    demo_link: "https://saritsopitvetmontree.github.io/Dashboard",
  },
];

export { services, technologies, experiences, testimonials, projects };
