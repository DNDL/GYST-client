import { combineReducers } from 'redux';
import habits from './habitsReducer';
import users from './usersReducer'

export default combineReducers({
  habits,
  users
});
