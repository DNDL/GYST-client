import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import HabitList from '../Habit/HabitList';
import { fetchHabits } from '../../actions/habitActions';
import { getAllHabits } from '../../selectors/habitSelectors';

class AllHabits extends Component {
  static propTypes = {
    habits: PropTypes.array.isRequired,
    fetch: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired
  }

  componentDidMount() {
    this.props.fetch();
  }

  render() {
    const { habits } = this.props;
    return (
      <HabitList habits={habits}/>
    );
  }
}

const mapStateToProps = state => ({
  habits: getAllHabits(state)
});

const mapDispatchToProps = dispatch => ({
  fetch(id) {
    dispatch(fetchHabits(id));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllHabits);
