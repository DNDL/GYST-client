import { ADD_HABIT, UPDATE_HABIT, FETCH_HABITS, FETCH_ATTEMPTS, ADD_ATTEMPT, DELETE_HABIT } from '../actions/habitActions';

const initialState = {
  habits: [],
  attempts: []
};

export default function habitsReducer(state = initialState, action) {
  switch(action.type) {
    case ADD_HABIT:
      return { ...state, habits: [...state.habits, action.payload] };
    case UPDATE_HABIT:
      return { ...state, habits: [...state.habits.filter(habit => habit._id !== action.payload._id), Object.assign({}, action.payload)] };
    case DELETE_HABIT:
      return { ...state, habits: [...state.habits.filter(habit => habit._id !== action.payload._id)] };
    case FETCH_HABITS:
      return { ...state, habits: action.payload };
    case ADD_ATTEMPT:
      return { ...state, attempts: [...state.attempts, action.payload] };
    case FETCH_ATTEMPTS:
      return { ...state, attempts: action.payload };
    default:
      return state;
  }
}
