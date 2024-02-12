import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import {
  BlendingBytesLogo,
  HeyfoodLogo,
  SatgLogo,
  ZuriLogo
} from "@/images/logos";

export const RESUME_DATA = {
  name: "Samuel Gopeh",
  initials: "SG",
  location: "Ibadan, Oyo state, Nigeria.",
  locationLink: "https://www.google.com/maps/place/Ibadan",
  about:
    "Fullstack developer with a passion for clean architecture and a commitment to building robust and scalable applications.",
  summary:
    "As a fullstack developer with five years of hands-on experience, I thrive in the dynamic world of server-side and client-side development, where I bring a passion for creating scalable and efficient solutions, while staying at the forefront of emerging technologies to enhance my craft.",
  avatarUrl: "https://avatars.githubusercontent.com/u/54728958?s=400&u=d6be5c87f709017b235b8f80e4eb3be9be8b43d3&v=4",
  // personalWebsiteUrl: "https://gopeh.com",
  contact: {
    email: "sammygopeh@gmail.com",
    tel: "+2349055551371",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/gopeeey",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://ng.linkedin.com/in/samuel-gopeh-3847719b",
        icon: LinkedInIcon,
      }
    ],
  },
  // education: [
  //   {
  //     school: "Wrocław University of Technology",
  //     degree: "Bachelor's Degree in Control systems engineering and Robotics",
  //     start: "2007",
  //     end: "2010",
  //   },
  // ],
  work: [
    {
      company: "Blending Bytes",
      link: "https://www.blendingbytes.com/",
      badges: ["Remote"],
      title: "Developer Consultant",
      logo: BlendingBytesLogo,
      start: "2023",
      end: "2024",
      description:
        "Implemented the backend for a faceted search and provided general insight into backend code architecture. Technologies: Typescript, Node.js and Mongodb.",
    },
    {
      company: "Heyfood",
      link: "https://heyfood.africa/",
      badges: ["Hybrid"],
      title: "Full Stack Developer (backend-heavy)",
      logo: HeyfoodLogo,
      start: "2021",
      end: "2023",
      description:
        "Implemented a vast array of new features including an order assignment system, a notification system, a vendor payout system, several dashboards to mention a few. Led the team, developed deployment strategies for new features, carried-out migration from Mongodb to Postgresql, and many more. Technologies: TypeScript, Javascript, Node.js, Express.js, MongoDB, Postgresql, Redis, Firebase, AWS, React.js/Next.js and multiple integrations with third party APIs.",
    },
    // {
    //   company: "Zuri Team",
    //   link: "https://www.zuri.team/",
    //   badges: ["Remote"],
    //   title: "Node.js Backend Developer Intern",
    //   logo: ZuriLogo,
    //   start: "2020",
    //   end: "2021",
    //   description:
    //     "Worked in multiple teams to design and develop backend applications for various projects. Technologies: Javascript, Node.js, Express.js, MongoDB.",
    // },
    {
      company: "Bluu Africa",
      link: "https://www.linkedin.com/company/bluu-africa/",
      badges: ["Remote"],
      title: "Fullstack Developer",
      logo: ZuriLogo,
      start: "2019",
      end: "2021",
      description:
        "Worked in a team of 3 to build a blog and an e-commerce website for the company. Technologies: Python, Django, React.js, Next.js, Javascript, PostgreSQL",
    },
  ],
  skills: [
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Express.js",
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "Socket.io",
    "RabbitMQ",
    "Jest",
    "Docker",
    "AWS",
    "Firebase",
    "Azure",
    "Python",
    "Django",
    "React",
    "Next.js",
    "PWAs",
    "Material-UI",
    "HTML5",
    "CSS3",
    "Git",
    "Bitbucket",
    "Jira",
    "Problem solving",
    "Critical thinking",
  ],
  projects: [
    {
      title: "Bufferbus",
      techStack: [
        "AWS S3",
        "Google Cloud Storage",
        "Azure Blob Storage",
        "Firebase",
        "TypeScript",
        "Node.js"
      ],
      description: "An npm package that provides a super simple interface for uploading files from a server to major cloud storage platforms including S3, Google Cloud Storage, Azure Blob Storage, Firebase, and Google Drive.",
      logo: SatgLogo,
      link: {
        label: "https://www.npmjs.com/package/bufferbus",
        href: "https://www.npmjs.com/package/bufferbus",
      },
    },
    {
      title: "SATG",
      techStack: [
        "TypeScript",
        "JavaScript",
        "Socket.io",
        "RabbitMQ",
        "Mongodb",
        "Redis",
        "HTML",
        "CSS",
      ],
      description: "Short for Super Awesome Typing Game. A multiplayer typing game",
      logo: SatgLogo,
      link: {
        label: "satg.gopeh.com",
        href: "https://satg.gopeh.com/",
      },
    },
    {
      title: "Paychip",
      techStack: [
        "TypeScript",
        "Node.js",
        "Postgresql",
        "Redis",
        "Jest",
      ],
      description: "A platform for businesses to create and manage wallets for their users. Implements a RESTful API for creating, funding and withdrawing from wallets while maintaining accurate transaction records, allowing businesses to focus on writing their business logic.",
      link: {
        href: "https://github.com/gopeeey/paychip",
      },
    },
    {
      title: "U.O.D",
      techStack: [
        "JavaScript",
        "Node.js",
        "HTML",
        "CSS",
      ],
      description: "Up Or Down. A simple application for monitoring the up or down status of a user's desired sites. Built entirely in Node.js without any third party libraries (as an added challenge).",
      link: {
        href: "https://github.com/gopeeey/up_or_down",
      },
    },
    {
      title: "Irrational",
      techStack: [
        "For fun",
        "Javascript",
        "HTML",
        "CSS"
      ],
      description: "A demonstration of simple and complex patterns in rational and irrational numbers.",
      link: {
        href: "https://irrational.gopeh.com",
      },
    },
  ],
} as const;
