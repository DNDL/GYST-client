/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './habitList.css';
import HabitListItem from '../Containers/HabitListItem';

function HabitList({ habits }) {

  const habitElement = habits.map(habit => (
    <li key={habit._id} className={styles.li}>
      <HabitListItem habit={habit} />
    </li>
  ));
  if(habits.length === 0) {
    return (<>
    <section>
      <p className={styles.p}>It looks like you don't have any habits yet.
        <br></br>
        <br></br>
      Click the + button below to add some!</p>
    </section>
    </>);
  }
  else {
    return <ul className={styles.ul}>{habitElement}</ul>;
  }
}

HabitList.propTypes = {
  habits: PropTypes.array
};

export default HabitList;
