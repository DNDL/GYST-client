import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getAttemptsByHabitId } from '../../selectors/habitSelectors';
import { addAttempt } from '../../actions/habitActions';


class HabitListItem extends Component {
  state = {
    comment: ''
  };

  static propTypes = {
    habit: PropTypes.object.isRequired,
    attempts: PropTypes.array,
    handleSubmit: PropTypes.func.isRequired,
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  
  render() {
    console.log(this.state);
    const { attempts, habit, handleSubmit } = this.props;
    const { comment } = this.state;
    return (
      <>
        <Link to={`/habitDetail/${habit._id}`}>
          <p style={{ color: habit.color }}>{habit.title}</p>
          <p>{attempts.length}/{habit.goal}</p>
        </Link>
        <form onSubmit={ (e) => handleSubmit(e, habit._id, comment) }>
          <input name="comment" onChange={(e) => this.handleChange(e)} placeholder="comment..."></input>
          {/* <progress value={attempt.progress} max={habit.goal}></progress> */}
          <button>Done</button>
        </form>
      </>
    );
  }
}

const mapStateToProps = (state, props) => {
  console.log('inside mapstatetoprops', props.habit._id);
  return { attempts: getAttemptsByHabitId(state, props.habit._id) };
};

const mapDispatchToProps = dispatch => ({
  handleSubmit(e, habit, comment) {
    console.log(habit);
    e.preventDefault();
    e.target.reset();
    dispatch(addAttempt(habit, comment));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HabitListItem);
