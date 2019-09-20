import React from 'react';
import PropTypes from 'prop-types';
import styles from './habitDetailItem.css';
import moment from 'moment';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import LinearProgress from '@material-ui/core/LinearProgress';

function timeConverter(timestamp) {
  return moment(timestamp).format('dddd, MMMM Do YYYY, h:mm a');
}

export default function HabitDetailItem({ habit, attempts, handleDelete }) {
  if(!habit) return null;

  const attemptsElement = attempts.map(attempt => (
    <li className={styles.attempt} key={attempt.createdAt}>
      <p className={styles.timestamp}>{timeConverter(attempt.createdAt)}</p>
      <p className={styles.comment}>{attempt.comment}</p>
    </li>
  ));

  const progress = (attempts.length / habit.goal) * 100;

  return (
    <>
      <div className={styles.actions}>
        <Link
          to={{
            pathname: '/habit/form',
            state: { habit }
          }}
        >
          <Button
            className={styles.editButton}
            type="submit"
            variant="contained"
            size="small"
          >
            Edit
          </Button>
        </Link>
        <Link to="/">
          <Button
            className={styles.deleteButton}
            type="submit"
            variant="contained"
            size="small"
            onClick={() => handleDelete(habit._id)}
          >
            Delete
          </Button>
        </Link>
      </div>

      <section className={styles.wrapper}>
        <div className={styles.habitInfo}>
          <h3 style={{ color: habit.color }}>{habit.title}</h3>
          <p className={styles.form}>Your why:</p>
          <p className={styles.formInput}>{habit.why}</p>
          <p className={styles.form}>Your frequency:</p>
          <p className={styles.formInput}>{habit.frequency}</p>
          <p className={styles.form}>Your goal:</p>
          <p className={styles.formInput}>{habit.goal}</p>
          <p className={styles.form}>Your current progress:</p>
          <div className={styles.progress}>
            <LinearProgress
              className={styles.progressLine}
              variant="determinate"
              value={progress}
            />
          </div>
        </div>

        <h6>Activity Log:</h6>
        <div className={styles.ulWrapper}>
          <ul className={styles.ul}>{attemptsElement}</ul>
        </div>
      </section>
    </>
  );
}

HabitDetailItem.propTypes = {
  habit: PropTypes.object,
  attempts: PropTypes.array,
  handleDelete: PropTypes.func
};
