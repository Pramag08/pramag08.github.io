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
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  python,
  cpp,
  c,
  java,
  mysql,
  githubTech,
  erpproject,
  egos,
  riscv,
  projectm,
  sim,
  hifi,
  linkedin,
  figmaIcon,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Problem Solver",
    icon: creator,
  },
  {
    title: "CS Undergraduate",
    icon: mobile,
  },
  {
    title: "UI/UX Designer",
    icon: backend,
  },
  {
    title: "Web Developer",
    icon: web,
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
    name: "Python",
    icon: python,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "C",
    icon: c,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "GitHub",
    icon: githubTech,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
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
    name: "University ERP System",
    description:
      "Application with custom TCP protocol managing course enrollments, grade tracking, transcript generation, and secure BCrypt authentication for 3 user roles.",
    tags: [
      {
        name: "swing",
        color: "blue-text-gradient",
      },
      {
        name: "maven",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "pink-text-gradient",
      },
    ],
    image: erpproject,
    source_code_link: "https://github.com/vaibhav-sahni/Ap_project.git",
    youtube_link: "https://youtu.be/Re_hPdtRJrQ?si=F3JJPEeHolzs5tQW",
  },
  {
    name: "EGOS-2000",
    description:
      "Architected MLFQ scheduler with dynamic process demotion, engineered kernel-level utilities (grep, wcl) using direct syscalls, and process lifecycle tracking with 7 metrics.",
    tags: [
      {
        name: "operating-system",
        color: "blue-text-gradient",
      },
      {
        name: "c",
        color: "green-text-gradient",
      },
      {
        name: "riscv",
        color: "pink-text-gradient",
      },
    ],
    image: egos,
    source_code_link: "https://github.com/vaibhav-sahni/egos-assignment.git",
  },
  {
    name: "Assembler & Simulator",
    description:
      "A RISC-V assembler from scratch with lexical parsing and binary encoding And a cycle-accurate simulator with 32 registers and 64KB memory and automated testing.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Architecture",
        color: "green-text-gradient",
      },
      {
        name: "Assembly",
        color: "pink-text-gradient",
      },
    ],
    image: riscv,
    source_code_link: "https://github.com/vaibhav-sahni/CO_project.git",
  },
  {
    name: "Project Manager",
    description:
      "A task management app with state management using React Context API, dynamic sorting and filtering systems, improving workflow efficiency.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "next.js",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
    ],
    image: projectm,
    source_code_link: "https://github.com/Pramag08/Mr.-Manager.git",
    youtube_link: "https://youtu.be/GapRfdO6rmw",
  },
  {
    name: "Highway Simulator",
    description:
      "A multithreaded Java GUI application demonstrating race conditions and synchronization mechanisms through concurrent vehicle simulation.",
    tags: [
      {
        name: "swing",
        color: "blue-text-gradient",
      },
      {
        name: "threads",
        color: "green-text-gradient",
      },
      {
        name: "synchronisation",
        color: "pink-text-gradient",
      },
    ],
    image: sim,
    source_code_link: "https://github.com/Pramag08/Transportation-Fleet-Management-System.git",
  },
  {
    name: "Farm2Table Design",
    description:
      "A responsive, user-friendly UI HIFI design that ensures transparency, fair pricing, and updates for farmers while delivering organic, and affordable produce to consumers. ",
    tags: [
      {
        name: "ui",
        color: "blue-text-gradient",
      },
      {
        name: "prototype",
        color: "green-text-gradient",
      },
      {
        name: "agritech",
        color: "pink-text-gradient",
      },
    ],
    image: hifi,
    linkedin_link: "https://www.linkedin.com/posts/pramag-basantia_innovation-hci-agritech-activity-7274125106115727361-SPuK?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAE6VUOABjn8limmonKNnRxNYSoSy77SZFrE",
    figma_link: "https://www.figma.com/proto/TKuwduY0rimG7hWZakIQnk/Farm2Table?page-id=0%3A1&node-id=2031-5997&node-type=canvas&viewport=1036%2C437%2C0.06&t=W7O1UnQej2ebwOxv-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=2031%3A5985",
  },
];

export { services, technologies, experiences, testimonials, projects };
