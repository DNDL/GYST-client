import React from 'react';
import { Link } from 'react-router-dom';
import styles from './logo.css';

export default function Logo() {
  return (
    <Link to={'/aboutus'}><h1 className={styles.logo}>GYST</h1></Link>
    
  );
}
