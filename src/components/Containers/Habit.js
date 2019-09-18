import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getHabitById, getAttemptsByHabitId } from '../../selectors/habitSelectors';
import moment from 'moment';

function timeConverter(timestamp) {
  return moment(timestamp)
    .format('dddd, MMMM Do YYYY, h:mm a');
}



class Habit extends Component {
  static propTypes = {
    habit: PropTypes.shape({
      title: PropTypes.string,
      why: PropTypes.string
    }).isRequired,
    attempts: PropTypes.array
  }

  render() {
    const { habit, attempts } = this.props;

    const attemptsElement = attempts.map(attempt => (
      <li key={attempt.createdAt}>
        {timeConverter(attempt.createdAt)}
      </li>
    ));

    return (
      <section>
        <h3>{habit.title}</h3>
        <p>{habit.why}</p>
        <ul>{attemptsElement}</ul>
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
