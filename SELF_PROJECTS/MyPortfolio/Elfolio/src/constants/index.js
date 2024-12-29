  import {
    Linux,
    Python,
    cpp,
    express,
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    portfolio,
    figma,
    docker,
    ContactApp,
    Spark,
    CountryVis,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer (MERN Stack)",
      icon: web,
    },
    {
      title: "Linux",
      icon: Linux,
    },
    {
      title: "Python",
      icon: Python,
    },
    {
      title: "C++ ",
      icon: cpp,
    },
    {
      title: "Tailwind CSS",
      icon: tailwind,
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
      name: "React JS",
      icon: reactjs,
    },
    {
      name:"Express Js",
      icon: express,
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
  const Handles = [
    {
      name: "Github",
      icon: html,
      link: "https://github.com/mesusheel01/",
    },
    {
      name: "Instagram",
      icon: css,
      link: "https://www.instagram.com/me.susheel_01/"
    },
    {
      name: "Linked In",
      icon: css,
      link: "https://www.linkedin.com/in/susheel-rai-3b7a51227/",
    },
  ];
  const projects = [
    {
      name: "React Contact App",
      description:
        "Implemented CRUD (Create, Read, Update, Delete) operations for efficient data manipulation: adding, viewing, editing, and removing contacts from the database.Enhanced user experience with dynamic layout adjustments and a message popup system.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: ContactApp,
      source_code_link: "https://github.com/mesusheel01/React_Contact_App",
    },
    {
      name: "Spark Cast",
      description:
        "Established a seamless live streaming workflow by integrating YouTube Live keys with SparkCast platform, enabling one-click live broadcasts. Same as OBS or StreamYard.",
      tags: [
        {
          name: "HTML5, CSS3",
          color: "blue-text-gradient",
        },
        {
          name: "Js -> (Socket.io, ffmpeg)",
          color: "green-text-gradient",
        },
        {
          name: "Docker",
          color: "pink-text-gradient",
        },
      ],
      image: Spark,
      source_code_link: "https://github.com/mesusheel01/SparkCast",
    },
    {
      name: "Country Visited Tracker",
      description:
        "Developed a Full stack Application using HTML5, CSS3, EJS, NODE.JS, EXPRESS.JS AND Postgres Sql as database to store the country that user have visited. Developed a full globe of earth where user can mark and have a count of Countries he/she have visited.",
      tags: [
        {
          name: "HTML5, CSS3",
          color: "pink-text-gradient",
        },
        {
          name: "Node.js",
          color: "blue-text-gradient",
        },
        {
          name: "Express.js",
          color: "green-text-gradient",
        },
        {
          name: "Postgres Sql",
          color: "blue-text-gradient",
        },
      ],
      image: CountryVis,
      source_code_link: "https://github.com/mesusheel01/CountryVis-Tracker",
    },
    {
      name: "3D Portfolio Website",
      description:
        "Developed a Full stack Application using HTML5, CSS3, EJS, NODE.JS, EXPRESS.JS AND Postgres Sql as database to store the country that user have visited. Developed a full globe of earth where user can mark and have a count of Countries he/she have visited.",
      tags: [
        {
          name: "React.js",
          color: "pink-text-gradient",
        },
        {
          name: "Three.js",
          color: "blue-text-gradient",
        },
        {
          name: "Blender",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind Css",
          color: "blue-text-gradient",
        },
      ],
      image: portfolio,
      source_code_link: "https://github.com/mesusheel01/CountryVis-Tracker",
    },
  ];
  
  export  { services, technologies, projects, Handles };