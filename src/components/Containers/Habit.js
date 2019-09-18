import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getHabitById } from '../../selectors/habitSelectors';


class Habit extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    why: PropTypes.string.isRequired
  }

  render() {
    const { title, why } = this.props;
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

const mapStateToProps = (state, props) => {
  return {  habit: getHabitById(state, props.props.match.params._id)}
}

export default connect(
  mapStateToProps
)(Habit);
