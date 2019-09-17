import { connect } from 'react-redux';
import HabitDetailItem from '../Habit/HabitDetailItem';
import { getHabitsByUserId } from '../../selectors/habitSelectors';

const mapStateToProps = (state, props) => ({
  habit: getHabitsByUserId(state, props.match.params._id)
});

export default connect(
  mapStateToProps
)(HabitDetailItem);
