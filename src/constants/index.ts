import {
  profileTam,
  profileTho,
  gameIcon,
  webIcon,
  mobileIcon,
  databaseIcon,
  project1,
  typescriptIcon,
  javascriptIcon,
  reactIcon,
  nextjsIcon,
  tailwindcssIcon,
  nodeIcon,
} from "@/assets";
import { ProfileName } from "@/enums";

export const navLinks = [
  {
    id: "overview",
    title: "Overview",
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

export const profiles = [
  {
    title: "Software Engineer",
    icon: profileTam,
    name: ProfileName.TAM,
  },
  {
    title: "Software Engineer",
    icon: profileTho,
    name: ProfileName.THO,
  },
];

export const profileDetail = {
  [ProfileName.TAM]: {
    skills: [
      {
        title: "Web Developer",
        icon: webIcon,
      },
      {
        title: "Mobile Developer",
        icon: mobileIcon,
      },
      {
        title: "Backend Developer",
        icon: databaseIcon,
      },
    ],
    position: "Software Engineer",
    description: `I'm a Front-end Software Engineer with 3 years of software
            development experience. I have 1.5 years of experience in Mobile
            Application Development and 1.5 years of experience in Web
            Development. With my knowledge of UI/UX I can solve functionality
            and performance issues. Of course, also find solutions to optimize
            costs for the project. I also spend time learning new technology and
            best practices to become a better engineer.`,
  },
  [ProfileName.THO]: {
    skills: [
      {
        title: "Web Developer",
        icon: webIcon,
      },
      {
        title: "Mobile Developer",
        icon: mobileIcon,
      },
      {
        title: "Backend Developer",
        icon: databaseIcon,
      },
      {
        title: "Game Developer",
        icon: gameIcon,
      },
    ],
    position: "Software Engineer",
    description: "Hello...",
  },
};

export const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
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
    image: project1.src,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: project1.src,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: project1.src,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: project1.src,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: project1.src,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: project1.src,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: project1.src,
    source_code_link: "https://github.com/",
  },
];

export const experiences = {
  [ProfileName.TAM]: {
    experiences: [
      {
        title: "React.js Developer",
        company_name: "Starbucks",
        icon: webIcon.src,
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
        icon: webIcon.src,
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
        icon: webIcon.src,
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
        icon: webIcon.src,
        iconBg: "#E6DEDD",
        date: "Jan 2023 - Present",
        points: [
          "Developing and maintaining web applications using React.js and other related technologies.",
          "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
          "Implementing responsive design and ensuring cross-browser compatibility.",
          "Participating in code reviews and providing constructive feedback to other developers.",
        ],
      },
    ],
  },
  [ProfileName.THO]: {
    experiences: [
      {
        title: "React.js Developer",
        company_name: "Starbucks",
        icon: webIcon.src,
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
        icon: webIcon.src,
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
        icon: webIcon.src,
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
        icon: webIcon.src,
        iconBg: "#E6DEDD",
        date: "Jan 2023 - Present",
        points: [
          "Developing and maintaining web applications using React.js and other related technologies.",
          "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
          "Implementing responsive design and ensuring cross-browser compatibility.",
          "Participating in code reviews and providing constructive feedback to other developers.",
        ],
      },
    ],
  },
};

export const technicalSkill = {
  [ProfileName.TAM]: {
    techs: [
      {
        name: "TypeScript",
        icon: typescriptIcon.src,
      },
      {
        name: "JavaScript",
        icon: javascriptIcon.src,
      },
      {
        name: "ReactJS",
        icon: reactIcon.src,
      },
      {
        name: "NextJS",
        icon: nextjsIcon.src,
      },
      {
        name: "TailwindCSS",
        icon: tailwindcssIcon.src,
      },
      {
        name: "NodeJS",
        icon: nodeIcon.src,
      },
    ],
  },
  [ProfileName.THO]: {
    techs: [
      {
        name: "TypeScript",
        icon: typescriptIcon.src,
      },
      {
        name: "JavaScript",
        icon: javascriptIcon.src,
      },
      {
        name: "ReactJS",
        icon: reactIcon.src,
      },
      {
        name: "NextJS",
        icon: nextjsIcon.src,
      },
      {
        name: "TailwindCSS",
        icon: tailwindcssIcon.src,
      },
      {
        name: "NodeJS",
        icon: nodeIcon.src,
      },
    ],
  },
};
