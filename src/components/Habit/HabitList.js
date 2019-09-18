import React from 'react';
import PropTypes from 'prop-types';
import HabitListItem from './HabitListItem';
import styles from './habitList.css';
// import { getHabitsByUserId, getAttemptsById } from '../../selectors/habitSelectors';

// TODO: increment button
// TODO: display most recent attemps for progress visualization

function HabitList(habits) {
  console.log('in habitList', habits.habits);
  const habitElement = habits.habits.map(habit => (
    <li key={habit._id} className={styles.li}>
      <HabitListItem habit={habit}  />
    </li>
  ));

  return <ul className={styles.ul}>{habitElement}</ul>;
}

HabitList.propTypes = {
  habits: PropTypes.array
};

export default HabitList;
