import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getAttemptByHabitId } from '../../selectors/habitSelectors';
import styles from './habitListItem.css';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';


let habit;

class HabitListItem extends Component {
  static propTypes = {
    habit: PropTypes.object.isRequired,
    attempt: PropTypes.object
  };
  render() {
    // const { attempt } = this.props;
    habit = this.props.habit;
    return (
      <section className={styles.section}>
        <Link to={`/habitDetail/${habit._id}`}>
          <p style={{ color: habit.color }}>{habit.title}</p>
        </Link>
        <div className={styles.progress}>
          <CircularProgress variant="static" value={75} />
          <Button className={styles.button} variant="contained" size="small" color="primary">+</Button>
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state, habit) => {
  console.log('in map state', habit);
  return { attempt: getAttemptByHabitId(state, habit.habit._id) };
};

export default connect(mapStateToProps)(HabitListItem);
