import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getHabitById, getAttemptsByHabitId } from '../../selectors/habitSelectors';
import moment from 'moment';
import { deleteAHabit, editAHabit } from '../../actions/habitActions';

function timeConverter(timestamp) {
  return moment(timestamp)
    .format('dddd, MMMM Do YYYY, h:mm a');
}

class Habit extends Component {
  static propTypes = {
    habit: PropTypes.shape({
      _id: PropTypes.string,
      title: PropTypes.string,
      why: PropTypes.string
    }).isRequired,
    attempts: PropTypes.array,
    handleDelete: PropTypes.func.isRequired,
    handleEdit: PropTypes.func.isRequired
  }

  render() {
    const { habit, attempts, handleDelete, handleEdit } = this.props;

    const attemptsElement = attempts.map(attempt => (
      <li key={attempt.createdAt}>
        {timeConverter(attempt.createdAt)}
        {attempt.comment}
      </li>
    ));
    return (
      <section>
        <h3>{habit.title}</h3>
        <p>{habit.why}</p>
        <ul>{attemptsElement}</ul>
        <button onClick={() => handleEdit(habit._id)}>Edit</button>
        <button onClick={() => handleDelete(habit._id)}>Delete</button>
      </section>
    );
  }
}

const mapStateToProps = (state, props) => ({
  habit: getHabitById(state, props.props.match.params._id),
  attempts: getAttemptsByHabitId(state, props.props.match.params._id)
});

const mapDispatchToProps = dispatch => ({
  handleDelete(id) {
    dispatch(deleteAHabit(id));
  },
  handleEdit(id) {
    dispatch(editAHabit(id));
  }
});

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(Habit);
