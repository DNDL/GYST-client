import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getAttemptsByHabitId } from '../../selectors/habitSelectors';
import { addAttempt } from '../../actions/habitActions';


class HabitListItem extends Component {
  static propTypes = {
    habit: PropTypes.object.isRequired,
    attempts: PropTypes.array,
    handleClick: PropTypes.func.isRequired,
  };
  render() {
    const { attempts, habit, handleClick } = this.props;

    return (
      <>
        <Link to={`/habitDetail/${habit._id}`}>
          <p style={{ color: habit.color }}>{habit.title}</p>
          <p>{attempts.length}/{habit.goal}</p>
        </Link>
        {/* <progress value={attempt.progress} max={habit.goal}></progress> */}
        <button onClick={() => handleClick(habit._id)}>Done</button>
      </>
    );
  }
}

const mapStateToProps = (state, props) => ({
  attempts: getAttemptsByHabitId(state, props)
});

const mapDispatchToProps = dispatch => ({
  handleClick(habit) {
    dispatch(addAttempt(habit));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HabitListItem);
