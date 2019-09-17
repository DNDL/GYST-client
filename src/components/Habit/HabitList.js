import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import HabitListItem from './HabitListItem';
import { getHabitsByUserId, getAttemptsById } from '../../selectors/habitSelectors';

// TODO: increment button
// TODO: display most recent attemps for progress visualization


class HabitList extends Component {
  static propTypes = {
    attempts: PropTypes.array.isRequired,
    habits: PropTypes.array.isRequired
  }

  render() {
    const { attempts, habits } = this.props;

    if(!habits[0]) return null;
    const habitElement = habits[0].map(habit => (
      <li key={habit._id}>
        <HabitListItem habit={habit} attempt={attempts}/>
      </li>
    ));
  
    return <ul>{habitElement}</ul>;
  }

}

const mapStateToProps = (state, habitId, userId) => ({
  attempts: getAttemptsById(state, habitId),
  habits: getHabitsByUserId(userId)
});


const mapDispatchToProps = dispatch => ({
  // click handler for incrementing attempt

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HabitList);
