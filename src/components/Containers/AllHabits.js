import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import HabitList from '../Profile/HabitList';

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
  // TODO: habit selectors
  habits: 
});

const mapDispatchToProps = dispatch => ({
  // TODO: api call to get all habits based on signed in user
  fetch() {
    dispatch()
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllHabits)