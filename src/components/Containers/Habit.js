import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getHabitById, getAttemptsByHabitId } from '../../selectors/habitSelectors';
import moment from 'moment';
import styles from './habit.css';

function timeConverter(timestamp) {
  return moment(timestamp)
    .format('dddd, MMMM Do YYYY, h:mm a');
}

class Habit extends Component {
  static propTypes = {
    habit: PropTypes.shape({
      title: PropTypes.string,
      why: PropTypes.string,
      color: PropTypes.string.isRequired
    }).isRequired,
    attempts: PropTypes.array
  }

  render() {
    const { habit, attempts } = this.props;

    const attemptsElement = attempts.map(attempt => (
      <li key={attempt.createdAt}>
        {timeConverter(attempt.createdAt)}
        <p>comment: {attempt.comment}</p>
      </li>
    ));

    return (
      <section>
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

        <button>Edit</button>
      </section>
    );
  }
}

const mapStateToProps = (state, props) => ({
  habit: getHabitById(state, props.props.match.params._id),
  attempts: getAttemptsByHabitId(state, props.props.match.params._id)
});

export default connect(
  mapStateToProps
)(Habit);
