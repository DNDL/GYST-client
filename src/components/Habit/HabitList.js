import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function HabitList({ habits }) {
  const habitElement = habits.map(habit => (
    <li key={habit._id}>
      <Link to={`/habitDetail/${habit._id}`}>{habit.title}</Link>
    </li>
  ));

  return <ul>{habitElement}</ul>;
}

HabitList.propTypes = {
  habits: PropTypes.array.isRequired
};

export default HabitList;
