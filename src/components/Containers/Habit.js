import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getHabitById, getAttemptsByHabitId } from '../../selectors/habitSelectors';
import { fetchHabits, fetchAttempts, deleteHabit } from '../../actions/habitActions';
import HabitDetailItem from '../Habit/HabitDetailItem';

class Habit extends Component {
  static propTypes = {
    habit: PropTypes.object,
    attempts: PropTypes.array,
    fetch: PropTypes.func,
    handleDelete: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.props.fetch();
  }

  render() {
    const { habit, attempts, handleDelete } = this.props;

    return (
      <HabitDetailItem habit={habit} attempts={attempts} handleDelete={handleDelete}/>
    );
  }
}

const mapStateToProps = (state, props) => ({
  habit: getHabitById(state, props.props.match.params._id),
  attempts: getAttemptsByHabitId(state, props.props.match.params._id)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchHabits());
    dispatch(fetchAttempts());
  },
  handleDelete(id) {
    dispatch(deleteHabit(id));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Habit);
