import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import {
  BlendingBytesLogo,
  HeyfoodLogo,
  SatgLogo,
  ZuriLogo,
} from "@/images/logos";

export const RESUME_DATA = {
  name: "Samuel Gopeh",
  initials: "SG",
  location: "Ibadan 200213, Oyo, Nigeria.",
  locationLink: "https://www.google.com/maps/place/Ibadan",
  fullstackAbout: "Full Stack Developer",
  about: "Backend Developer",
  fullstackSummary:
    "As a full stack developer with five years of hands-on experience, I excel in the dynamic realm of client-side and server-side development. Driven by a profound passion for my craft, I remain dedicated to creating scalable and efficient solutions while maintaining clean architecture. I stay at the forefront of emerging technologies by ensuring my skills are consistently honed and adapted.",
  summary:
    "As a backend developer with five years of hands-on experience, I excel in the dynamic realm of server-side development. Driven by a profound passion for my craft, I remain dedicated to creating scalable and efficient solutions while maintaining clean architecture. I stay at the forefront of emerging technologies by ensuring my skills are consistently honed and adapted.",
  avatarUrl:
    "https://avatars.githubusercontent.com/u/54728958?s=400&u=d6be5c87f709017b235b8f80e4eb3be9be8b43d3&v=4",
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
      },
    ],
  },
  education: [
    {
      school: "Precious Gift Comprehensive College",
      degree: "Secondary School Certificate",
      start: "2008",
      end: "2014",
    },
  ],
  work: [
    {
      company: "Turing",
      link: "https://www.turing.com/",
      badges: ["Remote"],
      title: "Fullstack Developer",
      start: "Apr 2024",
      end: "Present",
      description:
        "Trained and fine-tuned LLMs to improve task-specific performance and language understanding.",
      accomplishments: [
        "Trained and fine-tuned LLMs to improve task-specific performance and language understanding.",
      ],
    },
    {
      company: "Blending Bytes",
      link: "https://www.blendingbytes.com/",
      badges: ["Remote"],
      title: "Backend Developer (Contract)",
      logo: BlendingBytesLogo,
      start: "2023",
      end: "2024",
      description:
        "Implemented the backend for a faceted search and provided general insight into backend code architecture. Technologies: Typescript, Node.js and Mongodb.",
      accomplishments: [
        "Improved user experience by implementing the backend for a faceted search.",
        "Reduced database cost by optimizing existing inefficient queries.",
        "Improved developer experience by providing comprehensive insights into backend code architecture.",
      ],
    },
    {
      company: "Heyfood",
      link: "https://heyfood.africa/",
      badges: ["Hybrid"],
      title: "Full Stack Developer",
      logo: HeyfoodLogo,
      start: "2021",
      end: "2023",
      description:
        "Implemented a vast array of new features including an order assignment system, a notification system, a vendor payout system, several dashboards to mention a few. Led the team, developed deployment strategies for new features, carried-out migration from Mongodb to Postgresql, and many more. Technologies: TypeScript, Javascript, Node.js, Express.js, MongoDB, Postgresql, Redis, Firebase, AWS, React.js/Next.js and multiple integrations with third party APIs.",
      accomplishments: [
        "Improved delivery time by 20% by automating the order assignment and batching process.",
        "Improved vendor and driver satisfaction by implementing a flexible automatic payout system.",
        "Drove growth via rapid iteration and implementation of features to support growth hacks.",
        "Improved customer support response time by developing a real-time monitoring dashboard for live orders.",
        "Reduced grocery vendor onboarding time by 50% through the implementation of an automatic inventory ingestion system.",
        "Improved overall operations efficiency by implementing interfaces that provided insights into the system and allowed authorized employees to take immediate action when necessary.",
        "Reduced database cost by 65% by migrating to a more suitable database (MongoDB to PostgreSQL).",
      ],
    },
    {
      company: "Pledre",
      link: "https://pledre.com/",
      badges: ["Remote"],
      title: "Frontend Developer (Contract)",
      logo: HeyfoodLogo,
      start: "2022",
      end: "2022",
      description:
        "Implemented a vast array of new features including an order assignment system, a notification system, a vendor payout system, several dashboards to mention a few. Led the team, developed deployment strategies for new features, carried-out migration from Mongodb to Postgresql, and many more. Technologies: TypeScript, Javascript, Node.js, Express.js, MongoDB, Postgresql, Redis, Firebase, AWS, React.js/Next.js and multiple integrations with third party APIs.",
      accomplishments: ["Built a fast and responsive landing page"],
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
      title: "Full Stack Developer",
      logo: ZuriLogo,
      start: "2019",
      end: "2021",
      description:
        "Worked in a team of 3 to build a blog and an e-commerce website for the company. Technologies: Python, Django, React.js, Next.js, Javascript, PostgreSQL",
      accomplishments: [
        "Improved brand awareness by building a blog for the company",
        "Assited in generating revenue by building and maintaining an e-commerce website.",
      ],
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
  ],
  projects: [
    {
      title: "Codewatch",
      techStack: ["TypeScript", "Node.js", "Postgresql", "Jest"],
      description:
        "A free and open source error logging and monitoring system for Node.js applications. It helps developers track errors and exceptions, making it easier to identify and fix issues.",
      logo: SatgLogo,
      link: {
        label: "https://github.com/gopeeey/codewatch",
        href: "https://github.com/gopeeey/codewatch",
      },
    },
    {
      title: "Bufferbus",
      techStack: [
        "AWS S3",
        "Google Cloud Storage",
        "Azure Blob Storage",
        "Firebase",
        "TypeScript",
        "Node.js",
      ],
      description:
        "An npm package that provides a simple interface for uploading files from a node.js application to major cloud storage platforms, including S3, Google Cloud Storage, Azure Blob Storage, Firebase, and Google Drive.",
      logo: SatgLogo,
      link: {
        label: "https://www.npmjs.com/package/bufferbus",
        href: "https://www.npmjs.com/package/bufferbus",
      },
    },
    {
      title: "Paychip",
      techStack: ["TypeScript", "Node.js", "Postgresql", "Redis", "Jest"],
      description:
        "A platform for businesses to create and manage wallets for their users. It implements a RESTful API for creating, funding, and withdrawing from wallets while maintaining accurate transaction records, allowing businesses to focus on writing their business logic.",
      link: {
        href: "https://github.com/gopeeey/paychip",
      },
    },
    {
      title: "S.A.T.G",
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
      description:
        "Short for Super Awesome Typing Game. A real-time multiplayer typing game",
      logo: SatgLogo,
      link: {
        label: "satg.gopeh.com",
        href: "https://satg.gopeh.com/",
      },
    },
    {
      title: "U.O.D",
      techStack: ["JavaScript", "Node.js", "HTML", "CSS"],
      description:
        "Up Or Down. A simple application for monitoring the up or down status of a user's desired sites. It is built entirely in Node.js without third-party libraries (as an added challenge).",
      link: {
        href: "https://github.com/gopeeey/up_or_down",
      },
    },
    {
      title: "Irrational",
      techStack: ["Javascript", "HTML", "CSS"],
      description:
        "A simple demonstration of simple and complex patterns in rational and irrational numbers.",
      link: {
        href: "https://irrational.gopeh.com",
      },
    },
  ],
} as const;
