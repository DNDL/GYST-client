import { connect } from 'react-redux';
import HabitForm from '../HabitForm/HabitForm';
import { addHabit } from '../../actions/habitActions';

const mapDispatchToProps = dispatch => ({
  handleSubmit(event, habit) {
    dispatch(addHabit(habit));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(HabitForm);
