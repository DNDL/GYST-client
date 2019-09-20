import React from 'react';
import styles from './styles.css';
import { Link } from 'react-router-dom';
import githubIcon from '../../assets/github-icon.png';
import linkedinIcon from '../../assets/linkedin-icon.png';
import dirt from '../../assets/dirt.jpeg';
import noah from '../../assets/noah.jpeg';
import danny from '../../assets/danny.png';
import lili from '../../assets/lili.jpeg';
import homeIcon from '../../assets/home.png';

function AboutUs() {
  return (<>
  <section className={styles.container}>

    <ul className={styles.unorderedList}>
      <li className={styles.listItem}>
        <h1 className={styles.name}>Dirt</h1>
        <img 
          className={styles.profileImages}
          src={dirt}/>
        <p className={styles.paragraph}>Once wore white after labor day, the scoundrel. Was banned from Olive garden for impersonating a pasta dish.</p>
        <a href='https://github.com/DirtDeodara'>
          <img className={styles.icon} src={githubIcon}></img>
        </a>
        <a href='https://www.linkedin.com/in/dirtdeodara/'>
          <img className={styles.icon} src={linkedinIcon}></img>
        </a>
      </li>

      <li className={styles.listItem}>
        <h1 className={styles.name}>Noah</h1>
        <img 
          className={styles.profileImages}
          src={noah}/>
        <p className={styles.paragraph}>Miiiiiiiiight have been in charge of writing these summaries...</p>
        <a href='https://github.com/noah-puckett'>
          <img className={styles.icon} src={githubIcon}>
          </img>
        </a>
        <a href='https://www.linkedin.com/in/noahingrampuckett/'>
          <img className={styles.icon} src={linkedinIcon}>
          </img>
        </a>
      </li>

      <li className={styles.listItem}>
        <h1 className={styles.name}>Danny</h1>
        <img 
          className={styles.profileImages}
          src={danny}/>
        <p className={styles.paragraph}>Has not slept since 1993. Does a dance that nobody? has been able? to understand?</p>
        <a href='https://github.com/dannyhogan'>
          <img className={styles.icon} src={githubIcon}>
          </img>
        </a>
        <a href='https://www.linkedin.com/in/danny-hogan/'>
          <img className={styles.icon} src={linkedinIcon}>
          </img>
        </a>
      </li>

      <li className={styles.listItem}>
        <h1 className={styles.name}>Lili</h1>
        <img 
          className={styles.profileImages}
          src={lili}/>
        <p className={styles.paragraph}>Either owns ONE black shirt or has 300 of them, we are afraid to know the truth.</p>
        <a href='https://github.com/liliboxer'>
          <img className={styles.icon} src={githubIcon}>
          </img>
        </a>
        <a href='https://www.linkedin.com/in/lili-boxer/'>
          <img className={styles.icon} src={linkedinIcon}>
          </img>
        </a>
      </li>

    </ul>

    <Link to={'/'}><img className={styles.home} src={homeIcon}></img></Link>
  </section>
  </>);
}

export default AboutUs;
