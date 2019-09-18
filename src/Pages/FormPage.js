import React from 'react';
import PropTypes from 'prop-types';
import AddHabit from '../components/Containers/AddHabit';
import Nav from '../components/Nav/Nav';

function FormPage({ history }) {
  return (
    <>
      <AddHabit props={history}/>
      <Nav />
    </>
  );
}

FormPage.propTypes = {
  history: PropTypes.object
};

export default FormPage;
