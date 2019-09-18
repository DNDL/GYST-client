import React from 'react';
import { useAuth0 } from '../../Auth0Provider';
import dirtStyles from './userDisplay.css';
import styles from './styles.css';

export default function UserDisplay() {
  const { isAuthenticated, loading, user, auth0Client } = useAuth0();
  const logout = () => auth0Client.logout();

  return (
    <section className={dirtStyles.section}>
      <img className={styles.img} src={isAuthenticated && !loading ? user.picture : 'unknown'}></img>
      <h4>{isAuthenticated && !loading ? user.nickname : 'unknown'}</h4>
      {isAuthenticated && <button className={styles.logoutButton} onClick={logout}>Log out</button>}
    </section>
  );
}
