import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getValidAttemptsByHabit } from '../../selectors/habitSelectors';
import { addAttempt } from '../../actions/habitActions';
import Button from '@material-ui/core/Button';
import styles from './habitListItem.css';
import LinearProgress from '@material-ui/core/LinearProgress';
import TextField from '@material-ui/core/TextField';


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
    const progress = (attempts.length / habit.goal) * 100;

    return (
      <section className={styles.habitListItem}>
        <div className={styles.habit}>
          <div className={styles.link}>
            <Link to={`/habit/detail/${habit._id}`}>
              <p style={{ color: habit.color }}>{habit.title}</p>
            </Link>
          </div>
          <div className={styles.progress}>
            <LinearProgress className={styles.progressLine} variant="determinate" value={progress} />
          </div>
        </div>
        <form className={styles.form} onSubmit={ (e) => handleSubmit(e, habit._id, comment) }>
          <TextField
            name="comment"
            id="outlined-dense"
            label="Comment..."
            onChange={(e) => this.handleChange(e)}
            margin="dense"
            variant="outlined"
          />
          <Button type="submit" className={styles.button} variant="contained" size="small" color="primary">+</Button>
        </form>
      </section>
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
