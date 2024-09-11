import {
  profileTam,
  profileTho,
  gameIcon,
  webIcon,
  mobileIcon,
  databaseIcon,
} from "@/assets";
import { ProfileName } from "@/enums";

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
            best practices to become a better engineer.`
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
    description: 'Hello...'
  }
};
