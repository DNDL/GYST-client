import React from 'react';
import { useAuth0 } from '../../Auth0Provider';
import styles from './userDisplay.css';
import Button from '@material-ui/core/Button';

export default function UserDisplay() {
  const { isAuthenticated, loading, user, auth0Client } = useAuth0();
  const logout = () => auth0Client.logout();

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <div className={styles.user}>
          <img className={styles.img} src={isAuthenticated && !loading ? user.picture : 'unknown'}></img>
          <h4>{isAuthenticated && !loading ? user.nickname : 'unknown'}</h4>
        </div>
        <div className={styles.logout}>
          {isAuthenticated && <Button 
            className={styles.logoutButton} 
            variant="contained"
            size="small" 
            color="primary"
            onClick={logout}>
            Logout
          </Button>}
        </div>
      </div>
    </section>
  );
}
