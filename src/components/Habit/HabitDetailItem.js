import React from 'react';
import PropTypes from 'prop-types';
import styles from './habitDetailItem.css';
import moment from 'moment';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

function timeConverter(timestamp) {
  return moment(timestamp)
    .format('dddd, MMMM Do YYYY, h:mm a');
}

export default function HabitDetailItem({ habit, attempts, handleDelete }) {

  if(!habit) return null;

  const attemptsElement = attempts.map(attempt => (
    <li className={styles.attempt} key={attempt.createdAt}>
      <p className={styles.timestamp}>{timeConverter(attempt.createdAt)}</p>
      <p>comment: {attempt.comment}</p>
    </li>
  ));
  
  return (
    <section className={styles.section}>
      <Link to={{
        pathname: '/habitForm',
        state: { habit }
      }}>
        <Button
          type="submit"
          variant="contained"
          size="small" color="primary">
        Edit Habit
        </Button>
      </Link>

      <Link to='/'>
        <Button
          type="submit"
          variant="contained"
          size="small" color="primary" 
          onClick={() => handleDelete(habit._id)}>Delete Habit</Button>
      </Link>
      <div className={styles.habitInfo}>
        <div className={styles.habitTitle}>
          <h3 style={{ color: habit.color }}>{habit.title}</h3>
        </div>
        <div className={styles.why}>
          <p>Your why: </p>
          <p>{habit.why}</p>
        </div>
      </div>
  
      <div className={styles.ulWrapper}>
        <ul className={styles.ul}>{attemptsElement}</ul>
      </div>


    </section>
  );
}

HabitDetailItem.propTypes = {
  habit: PropTypes.object,
  attempts: PropTypes.array
};
