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
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  threejs,
  next,
  dotnet,
  farkt,
  mernblog,
  cursegnrt,
  bourbxnnvim,
  petrolpredict,
  binquiz,
  cebux,
  covidcheckpoint,
  freakingvirus,
  clang,
  cpp,
  cs,
  java,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "tech",
    title: "Tech",
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
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: mobile,
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
    name: "Next JS",
    icon: next,
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
    name: "ASP.NET Core",
    icon: dotnet,
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
];

const projects = [
  {
    name: "Fark-T",
    description:
      "Web Application Development Project, Computer Engineering at KMITL. Web application project about food delivery that one user can order some food and buy some food to other poeple. ",
    tags: [
      {
        name: "ReactTS",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "green-text-gradient",
      },
      {
        name: "ASP.NET Core",
        color: "pink-text-gradient",
      },
    ],
    image: farkt,
    source_code_link: "https://github.com/Bourbxn/fark-t",
  },
  {
    name: "MERN Blog",
    description:
      "This is a simple MERN stack workshop about web blog. Other user can read blog only but admin can create, read, update and delete blog. This is a simple web application that I have learned from udemy course",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "ExpressJS",
        color: "pink-text-gradient",
      },
    ],
    image: mernblog,
    source_code_link: "https://github.com/Bourbxn/mern-web-blog",
  },
  {
    name: "Curse Generator",
    description:
      "An easy website about cursing generator inspired from quote generator. When sometime you have got a feel about you want to cursed just click a button the cursing will generate for you",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "green-text-gradient",
      },
      {
        name: "ExpressJS",
        color: "pink-text-gradient",
      },
    ],
    image: cursegnrt,
    source_code_link: "https://github.com/Bourbxn/mern-web-blog",
  },
  {
    name: "Binary Quiz",
    description:
      "This is a website for quiz practicing about binary addition, subtraction, left shift and exclusive or and answer in hexadecimal.",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "green-text-gradient",
      },
    ],
    image: binquiz,
    source_code_link: "https://github.com/Bourbxn/binary-quiz-web",
  },
  {
    name: "CE Boostup X",
    description:
      "A C language grader website for CE Boost Up X Camp at KMITL. This camp is a main camp for newbie student at computer engineering.",

    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "green-text-gradient",
      },
    ],
    image: cebux,
    source_code_link: "https://github.com/Bourbxn/ce-boostup-x-front",
  },
  {
    name: "Bourbxn Nvim",
    description:
      "This is a first version of my neovim configuration. My neovim configuration is easy to use and confugure and My neovim is the refference to newer neovim user.",
    tags: [
      {
        name: "Lua",
        color: "blue-text-gradient",
      },
    ],
    image: bourbxnnvim,
    source_code_link: "https://github.com/Bourbxn/bourbxn-nvim",
  },
  {
    name: "Petrol Prediction",
    description:
      "This is a crude oil prediction using linear regression theory using jupyter notebook and sklearn-kit module.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Sklearn-kit",
        color: "green-text-gradient",
      },
      {
        name: "Jupyter Notebook",
        color: "pink-text-gradient",
      },
    ],
    image: petrolpredict,
    source_code_link: "https://github.com/Bourbxn/petrol-prediction",
  },
  {
    name: "Covid-19 Checkpoint",
    description:
      "This is a crude oil prediction using linear regression theory using jupyter notebook and sklearn-kit module. User can search other users's timeline by date and location",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "JavaFX",
        color: "green-text-gradient",
      },
    ],
    image: covidcheckpoint,
    source_code_link: "https://github.com/Bourbxn/covid-checkpoint",
  },
  {
    name: "Freaking Virus",
    description:
      "Programming Fundamental Project, KMITL. 2D shooter arcade game project about zombie shooter using C++ SFML",
    tags: [
      {
        name: "C++",
        color: "blue-text-gradient",
      },
      {
        name: "SFML",
        color: "green-text-gradient",
      },
    ],
    image: freakingvirus,
    source_code_link: "https://github.com/Bourbxn/freaking-virus",
  },
];

export { services, technologies, projects };
