import React from 'react';
import PropTypes from 'prop-types';
import { useAuth0 } from '../../Auth0Provider';

export default function UserDisplay({ user }) {
  const { isAuthenticated, loading, user } = useAuth0();

  return (
    <section>
      // TODO: pathing img if not provided through Auth0
      <img src={isAuthenticated && !loading ? user.picture : 'unknown'}></img>
      <h4>{isAuthenticated && !loading ? user.nickname : 'unknown'}</h4>
    </section>
  )
}

UserDisplay.propTypes = {
  user: PropTypes.shape({
    nickname: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired
  }).isRequired
}