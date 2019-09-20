import React from 'react';
import { Link } from 'react-router-dom';
import styles from './nav.css';
import SvgIcon from '@material-ui/core/SvgIcon';

// TODO insert real paths into Links

export default function Nav() {

  function HomeIcon(props) {
    return (
      <SvgIcon {...props}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </SvgIcon>
    );
  }
  function AddIcon(props) {
    return (
      <SvgIcon {...props}>
        <path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
      </SvgIcon>
    );
  }
  function AboutUsIcon(props) {
    return (
      <SvgIcon {...props}>
        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
      </SvgIcon>
    );
  }

  return (
    <nav className={styles.nav}>
      <Link to={'/'}><HomeIcon 
        color="black"
        fontSize="large"
      /></Link>
      <Link to={'/habitForm'}><AddIcon
        color="black"
        fontSize="large"
      /></Link>
      <Link to={'/friendsList'}><AboutUsIcon
        color="black"
        fontSize="large"
      /></Link>
    </nav>
  );
}

