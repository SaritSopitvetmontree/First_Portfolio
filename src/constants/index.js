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
  nextjs,
  gcp,
  meta,
  Qunasys,
  Digifab,
  Liigo,
  KELPS,
  shopify,
  FD,
  LL,
  DF,
  threejs,
  BlackGithub,
  NestJS,
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
    name: "git",
    icon: git,
  },
  {
    name: "github",
    icon: BlackGithub,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "GCP",
    icon: gcp,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "UX Engineer",
    company_name: "QunaSys: Quantum computer software company",
    icon: Qunasys,
    iconBg: "#2A3038",
    date: "AUG 2023 - PRESENT",
    points: [
      "Develop and modify websites using Next.js and related development tools",
      "Design and optimize the design in Figma based on data from user research",
      "Work with related technologies such as Google Cloud Platform and non-code builder tools",
    ],
  },
  {
    title: "UX Designer",
    company_name: "Digitech Fabrication: 3D printing service company",
    icon: Digifab,
    iconBg: "#000000",
    date: "JUL 2023 - OCT 2023",
    points: [
      "Decide the requirements for a 3D printing service website based on user data and interviews",
      "Create a design system, sitemap, and high-fidelity design for the website",
      "Work together with developer to deliver the website with a contribution to coding",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Liigo: Travel tech company",
    icon: Liigo,
    iconBg: "#FFFFFF",
    date: "APR 2023 - JUL 2023",
    points: [
      "Develop and maintain web application using React.js and related technologies.",
      "Learn the daily works as a software developer and how to operate in a team.",
    ],
  },
  {
    title: "Embedded System Engineer",
    company_name: "KELPS: 3D printer developing startup",
    icon: KELPS,
    iconBg: "#1b1b1d",
    date: "OCT 2020 - SEP 2021",
    points: [
      "Manage tasks and timelines for team members, ensuring efficient progress and coordination",
      "Develop Python code for Raspberry Pi, serving as the central control system for the printer",
      "Design and create mechanical components for the 3D printer",
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
    name: "Digitech Fabrication",
    description:
      "A web application for 3D printing service in Thailand. Within the order page, user can upload .stl file and select printing material to calculate the price automatically.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "three.js",
        color: "green-text-gradient",
      },
    ],
    image: DF,
    source_code_link: "https://www.digifab-th.com/",
    demo_link: "https://www.digifab-th.com/",
  },
  {
    name: "Face Detection",
    description:
      "(Self-practice project) A web app utilizing a face detection API with a register and login system. Demo account: Email - test@gmail.com, Password - test.",
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
      "(Self-practice project) A capstone project for the Meta Front-End course. Built using React, this site showcases the effective use of React Router and responsive design techniques.",
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
];

export { services, technologies, experiences, testimonials, projects };
