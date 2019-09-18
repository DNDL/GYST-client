import React from 'react';
import { Link } from 'react-router-dom';
import styles from './nav.css';

// TODO insert real paths into Links

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <Link to={'/'}><img className={styles.img} src="../../../assets/home.png"></img></Link>
      <Link to={'/addHabit'}><img className={styles.img} src="../../../assets/add.png"></img></Link>
      <Link to={'/friendsList'}><img className={styles.img} src="../../../assets/multiple-users-silhouette.png"></img></Link>
    </nav>
  );
}

