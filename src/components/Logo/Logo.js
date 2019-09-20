import React from 'react';
import { Link } from 'react-router-dom';
import styles from './logo.css';

export default function Logo() {
  return (
    <section className={styles.logo}>
      <Link to={'/aboutus'}><h1>-GYST-</h1></Link>
    </section>
  );
}
