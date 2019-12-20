import React from 'react';
import PropTypes from 'prop-types';
import UserDisplay from '../components/User/UserDisplay';
import AllHabits from '../components/Containers/AllHabits';
import Nav from '../components/Nav/Nav';
import Logo from '../components/Logo/Logo';

function HomePage() {
  return (
    <section>
      <Logo />
      <UserDisplay />
      <AllHabits/>
      <Nav />
    </section>
  );
}

HomePage.propTypes = {
  props: PropTypes.shape({
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string.isRequired
      }).isRequired
    }).isRequired
  })
};

export default HomePage;
