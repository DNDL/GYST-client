import { connect } from 'react-redux';
import HabitDetailItem from '../Habit/HabitDetailItem';
import { getHabit } from '../../selectors/habitSelectors';

const mapStateToProps = (state, props) => ({
  habit: getHabit(state, props.match.params._id)
});

export default connect(
  mapStateToProps
)(HabitDetailItem);
