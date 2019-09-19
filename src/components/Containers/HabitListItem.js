import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getValidAttemptsByHabit } from '../../selectors/habitSelectors';
import { addAttempt } from '../../actions/habitActions';
import Button from '@material-ui/core/Button';
import styles from './habitListItem.css';

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
    const { attempts, habit, handleSubmit } = this.props;
    const { comment } = this.state;
    return (
      <>
        <Link to={`/habitDetail/${habit._id}`}>
          <p style={{ color: habit.color }}>{habit.title}</p>
        </Link>
        <div className={styles.progress}>
          <p>{habit.frequency}</p>
          <p>{attempts.length}</p>
        </div>
        <form onSubmit={ (e) => handleSubmit(e, habit._id, comment) }>
          <input name="comment" onChange={(e) => this.handleChange(e)} placeholder="comment..."></input>
          <Button type="submit" className={styles.button} variant="contained" size="small" color="primary">+</Button>
        </form>
      </>
    );
  }
}

const mapStateToProps = (state, props) => ({
  attempts: getValidAttemptsByHabit(state, props)
});

const mapDispatchToProps = dispatch => ({
  handleSubmit(e, habit, comment) {
    e.preventDefault();
    e.target.reset();
    dispatch(addAttempt(habit, comment));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HabitListItem);
