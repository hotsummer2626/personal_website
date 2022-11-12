import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import weatherAppImgFull from "./imgs/weather_app_full.png";
import weatherAppImgMobile from "./imgs/weather_app_mobile.png";
import smartBookCollectionImgFullOne from "./imgs/smart_book_collection_full_1.png";
import smartBookCollectionImgFullTwo from "./imgs/smart_book_collection_full_2.png";
import smartBookCollectionImgMobile from "./imgs/smart_book_collection_mobile.png";
import pokedexImgMobileOne from "./imgs/pokedex_mobile_1.png";
import pokedexImgMobileTwo from "./imgs/pokedex_mobile_2.png";
import pokedexImgMobileThree from "./imgs/pokedex_mobile_3.png";

export const jobTitles = [
  { id: 1, name: "Frontend Developer" },
  { id: 2, name: "Backend Developer" },
  { id: 3, name: "Full stack Developer" },
];

export const socialMediaList = [
  {
    id: 1,
    name: "LinkedIn",
    icon: faLinkedin,
    href: "https://www.linkedin.com/in/junqi-su",
  },
  {
    id: 2,
    name: "GitHub",
    icon: faGithub,
    href: "https://github.com/hotsummer2626",
  },
];

export const skillList = [
  {
    id: 1,
    title: "Frontend",
    details:
      "HTML5, CSS3, Javascript(es6), React.js, React Hooks, Redux, Typescript, Sass, Less, flexbox, styled components, Ant design, Responsive design, media queries, JQuery, SPA",
  },
  {
    id: 2,
    title: "Backend",
    details:
      "Node.js, Express.js, Keystone.js, npm, cors, morgan, mongoose, joi, JWT Token, bcrypt, GraphQL",
  },
  { id: 3, title: "Database", details: "MongoDB" },
  { id: 4, title: "Testing", details: "JEST, Supertest" },
  {
    id: 5,
    title: "Cloud services",
    details: "AWS S3, AWS EC2, Heroku, Netlify",
  },
];

export const projectList = [
  {
    id: 1,
    name: "Weather App",
    imgs: [weatherAppImgFull, weatherAppImgMobile],
  },
  {
    id: 2,
    name: "Smart Book Collection",
    imgs: [
      smartBookCollectionImgFullOne,
      smartBookCollectionImgFullTwo,
      smartBookCollectionImgMobile,
    ],
  },
  {
    id: 3,
    name: "Pokedex Mobile",
    imgs: [pokedexImgMobileOne, pokedexImgMobileTwo, pokedexImgMobileThree],
  },
];
