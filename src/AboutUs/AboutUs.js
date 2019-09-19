import React from 'react';
import styles from './styles.css';

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
        <a href='https://github.com/DirtDeodara'>GitHub </a>
        <a href='https://www.linkedin.com/in/dirtdeodara/'> LinkedIn</a>
      </li>

      <li className={styles.listItem}>
        <h1 className={styles.name}>Noah</h1>
        <img 
          className={styles.profileImages}
          src="../../assets/noah.jpeg"/>
        <p className={styles.paragraph}>Miiiiiiiiight have been in charge of writing these summaries...</p>
        <a href='https://github.com/noah-puckett'>GitHub </a>
        <a href='https://www.linkedin.com/in/noahingrampuckett/'> LinkedIn</a>
      </li>

      <li className={styles.listItem}>
        <h1 className={styles.name}>Danny</h1>
        <img 
          className={styles.profileImages}
          src="../../assets/danny.png"/>
        <p className={styles.paragraph}>Hasn't slept since '93. Does a dance that nobody? has been able? to understand?</p>
        <a href='https://github.com/dannyhogan'>GitHub </a>
        <a href='https://www.linkedin.com/in/danny-hogan/'> LinkedIn</a>
      </li>

      <li className={styles.listItem}>
        <h1 className={styles.name}>Lili</h1>
        <img 
          className={styles.profileImages}
          src="../../assets/lili.jpeg"/>
        <p className={styles.paragraph}>Either owns ONE black shirt or has 300 of them, we are afraid to know the truth.</p>
        <a href='https://github.com/liliboxer'>GitHub </a>
        <a href='https://www.linkedin.com/in/lili-boxer/'> LinkedIn</a>
      </li>

    </ul>
  </section>
  </>);
}

export default AboutUs;
