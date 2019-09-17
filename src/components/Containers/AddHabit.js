import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import HabitForm from '../HabitForm/HabitForm';
import { addHabit } from '../../actions/habitActions';

class AddHabit extends Component {
  static propTypes = {
    props: PropTypes.object.isRequired
  }

  render() {
    return <HabitForm props={this.props}/>;
  }
}

const mapDispatchToProps = dispatch => ({
  handleSubmit(event, habit) {
    dispatch(addHabit(habit));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(AddHabit);
