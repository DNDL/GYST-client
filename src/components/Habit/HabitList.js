import React from 'react';
import PropTypes from 'prop-types';
import styles from './habitList.css';
import HabitListItem from '../Containers/HabitListItem';

// TODO: display most recent attemps for progress visualization

function HabitList({ habits }) {
  const habitElement = habits.map(habit => (
    <li key={habit._id} className={styles.li}>
      <HabitListItem habit={habit} />
    </li>
  ));

  return <ul className={styles.ul}>{habitElement}</ul>;
}

HabitList.propTypes = {
  habits: PropTypes.array
};

export default HabitList;
