import React from 'react';
import PropTypes from 'prop-types';
import HabitListItem from '../Containers/HabitListItem';

// TODO: increment button
// TODO: display most recent attemps for progress visualization

function HabitList(habits) {
  const habitElement = habits.habits.map(habit => (
    <li key={habit._id}>
      <HabitListItem habit={habit}  />
    </li>
  ));

  return <ul>{habitElement}</ul>;
}

HabitList.propTypes = {
  habits: PropTypes.array
};

export default HabitList;
