import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import HabitList from '../Habit/HabitList';
import { getHabits } from '../../services/habitApi';
import { getAllHabits } from '../../selectors/habitSelectors';

class AllHabits extends Component {
  static propTypes = {
    habits: PropTypes.array.isRequired,
    fetch: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.props.fetch();
  }

  render() {
    const { habits } = this.props;
    return (
      <HabitList habits={habits}/>
    )
  }
}

const mapStateToProps = state => ({
  habits: getAllHabits(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(getHabits())
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllHabits)