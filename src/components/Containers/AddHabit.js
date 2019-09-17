import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import HabitForm from '../HabitForm/HabitForm';
import { addHabit } from '../../actions/habitActions';

class AddHabit extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired
  }

  render() {
    return <HabitForm handleSubmit={this.props.handleSubmit}/>;
  }
}

const mapDispatchToProps = dispatch => ({
  handleSubmit(event, habit) {
    return dispatch(addHabit(habit));
    // dispatch(addAttempt(habit));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(AddHabit);
