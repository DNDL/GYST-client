import React from 'react';
import styles from './styles.css';
import { Link } from 'react-router-dom';
import SvgIcon from '@material-ui/core/SvgIcon';


function AboutUs() {
  function HomeIcon(props) {
    return (
      <SvgIcon {...props}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </SvgIcon>
    );
  }

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

    <Link to={'/'}><HomeIcon 
      color="black"
      fontSize="large"
    /></Link>
  </section>
  </>);
}

export default AboutUs;
