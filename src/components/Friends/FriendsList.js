import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


function FriendsList({ user }) {
  const friendElement = user.friends.map((friend, i) => (
    <li key={i}>
      <Link to={`/${user._id}`}>
        <img src={friend.picture}></img>
        {friend.email}
      </Link>
    </li>
  ));

  return <ul>{friendElement}</ul>;
}

FriendsList.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    friends: PropTypes.array.isRequired,
    _id: PropTypes.string.isRequired
  }).isRequired
};

export default FriendsList;
