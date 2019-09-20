import React from 'react';
import styles from './styles.css';
import { Link } from 'react-router-dom';

function AboutUs() {
  return (<>
  <section className={styles.container}>

    <ul className={styles.unorderedList}>
      <li className={styles.listItem}>
        <h1 className={styles.name}>Dirt</h1>
        <img 
          className={styles.profileImages}
          src="../../assets/dirt.jpeg"/>
        <p className={styles.paragraph}>Once wore white after labor day, the scoundrel. Was banned from Olive garden for impersonating a pasta dish.</p>
        <a href='https://github.com/DirtDeodara'><img className={styles.icon} src='../../assets/github-icon.png'></img></a>
        <a href='https://www.linkedin.com/in/dirtdeodara/'><img className={styles.icon} src='../../assets/linkedin-icon.png'></img></a>
      </li>

      <li className={styles.listItem}>
        <h1 className={styles.name}>Noah</h1>
        <img 
          className={styles.profileImages}
          src="../../assets/noah.jpeg"/>
        <p className={styles.paragraph}>Miiiiiiiiight have been in charge of writing these summaries...</p>
        <a href='https://github.com/noah-puckett'><img className={styles.icon} src='../../assets/github-icon.png'></img></a>
        <a href='https://www.linkedin.com/in/noahingrampuckett/'><img className={styles.icon} src='../../assets/linkedin-icon.png'></img></a>
      </li>

      <li className={styles.listItem}>
        <h1 className={styles.name}>Danny</h1>
        <img 
          className={styles.profileImages}
          src="../../assets/danny.png"/>
        <p className={styles.paragraph}>Hasn't slept since '93. Does a dance that nobody? has been able? to understand?</p>
        <a href='https://github.com/dannyhogan'><img className={styles.icon} src='../../assets/github-icon.png'></img></a>
        <a href='https://www.linkedin.com/in/danny-hogan/'><img className={styles.icon} src='../../assets/linkedin-icon.png'></img></a>
      </li>

      <li className={styles.listItem}>
        <h1 className={styles.name}>Lili</h1>
        <img 
          className={styles.profileImages}
          src="../../assets/lili.jpeg"/>
        <p className={styles.paragraph}>Either owns ONE black shirt or has 300 of them, we are afraid to know the truth.</p>
        <a href='https://github.com/liliboxer'><img className={styles.icon} src='../../assets/github-icon.png'></img></a>
        <a href='https://www.linkedin.com/in/lili-boxer/'><img className={styles.icon} src='../../assets/linkedin-icon.png'></img></a>
      </li>

    </ul>

    <Link to={'/'}><img className={styles.home} src="../../../assets/home.png"></img></Link>
  </section>
  </>);
}

export default AboutUs;
