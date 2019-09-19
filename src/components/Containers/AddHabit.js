import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import HabitForm from '../HabitForm/HabitForm';
import { addHabit, updateHabit } from '../../actions/habitActions';

class AddHabit extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    handleUpdate: PropTypes.func.isRequired
  }

  render() {
    const { handleSubmit, handleUpdate } = this.props;
    return <HabitForm actions={{ handleSubmit, handleUpdate }}/>;
  }
}

const mapDispatchToProps = dispatch => ({
  handleSubmit(habit) {
    return dispatch(addHabit(habit));
  },
  handleUpdate(habit) {
    return dispatch(updateHabit(habit));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(AddHabit);
