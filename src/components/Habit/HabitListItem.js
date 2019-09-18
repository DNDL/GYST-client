import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// import { getAttemptByHabitId } from '../../selectors/habitSelectors';

let habit;

class HabitListItem extends Component {
  static propTypes = {
    habit: PropTypes.object.isRequired,
    // attempt: PropTypes.object
  };
  render() {
    // const { attempt } = this.props;
    habit = this.props.habit;
    return (
      <>
        <Link to={`/habitDetail/${habit._id}`}>
          <p style={{ color: habit.color }}>{habit.title}</p>
        </Link>
        {/* <progress value={attempt.progress} max={habit.goal}></progress> */}
        <button>Done</button>
      </>
    );
  }
}

// const mapStateToProps = (state, habit) => {
//   console.log('in map state', habit);
//   return { attempt: getAttemptByHabitId(state, habit.habit._id) };
// };

export default connect()(HabitListItem);
