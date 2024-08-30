import React from 'react';
import styles from './styles/About.module.css';
import img from '../assets/React.webp'

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <header className={styles.header}>
        <h1>About Me</h1>
      </header>
      <section className={styles.content}>
        <div className={styles.intro}>
          <img src={img} alt="Eman Elmaghraby" className={styles.profileImage} />
          <p>
            Hello! I'm Eman Elmaghraby, a passionate Front-end Developer with extensive experience in creating engaging and dynamic web applications. I specialize in React.js, JavaScript, and modern front-end technologies.
          </p>
        </div>
        <div className={styles.details}>
          <h2>My Expertise</h2>
          <ul>
            <li>React.js & Next.js</li>
            <li>JavaScript & TypeScript</li>
            <li>HTML5 & CSS3</li>
            <li>Responsive Design & Bootstrap</li>
          </ul>
        </div>
        <div className={styles.projects}>
          <h2>Notable Projects</h2>
          <p>
            I have worked on a range of projects, including e-commerce platforms, movie apps, and weather applications. My focus is on delivering user-friendly and performant web solutions.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
