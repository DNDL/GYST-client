import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getHabitById } from '../../selectors/habitSelectors';


class Habit extends Component {
  static propTypes = {
    habit: PropTypes.shape({
      title: PropTypes.string.isRequired,
      why: PropTypes.string.isRequired
    }).isRequired
  }

  render() {
    const { title, why } = this.props.habit;
    return (
      <section>
        <h3>{title}</h3>
        <p>{why}</p>
        <p>DATA VISUALIZATION</p>
        <button>Edit</button>
      </section>
    );
  }
}

const mapStateToProps = (state, props) => ({
  habit: getHabitById(state, props.props.match.params._id)
});

export default connect(
  mapStateToProps
)(Habit);
