import React from 'react';
import { useAuth0 } from '../../Auth0Provider';

export default function UserDisplay() {
  const { isAuthenticated, loading, user } = useAuth0();

  return (
    <section>
      <img src={isAuthenticated && !loading ? user.picture : 'unknown'}></img>
      <h4>{isAuthenticated && !loading ? user.nickname : 'unknown'}</h4>
    </section>
  );
}
