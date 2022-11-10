import React from "react";
import styles from "./Skills.module.scss";

const skillList = [
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

const Skills = () => {
  return (
    <div className={styles.container}>
      <h2>Skills</h2>
      {skillList.map((skill) => (
        <div className={styles.skill} key={skill.id}>
          <h3 className={styles.title}>{skill.title}</h3>
          <p>{skill.details}</p>
        </div>
      ))}
    </div>
  );
};

export default Skills;
