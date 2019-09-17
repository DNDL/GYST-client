import React from 'react';
import PropTypes from 'prop-types';

function FriendDisplay({ friend }) {

  return (
    <section>
      <img src={friend.picture}></img>
      <h4>{friend.email}</h4>
    </section>
  );
}

FriendDisplay.propTypes = {
  friend: PropTypes.object.isRequired
};

export default FriendDisplay;
