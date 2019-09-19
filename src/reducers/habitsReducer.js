import { ADD_HABIT, FETCH_HABITS, FETCH_ATTEMPTS, ADD_ATTEMPT, DELETE_HABIT, EDIT_HABIT } from '../actions/habitActions';

const initialState = {
  habits: [],
  attempts: []
};

export default function habitsReducer(state = initialState, action) {
  switch(action.type) {
    case ADD_HABIT:
      return { ...state, habits: [...state.habits, action.payload] };
    case FETCH_HABITS:
      return { ...state, habits: action.payload };
    case EDIT_HABIT:
      return { ...state, habits: [...state.habits, action.payload] };
    case DELETE_HABIT:
      return { ...state, habits: [...state.habits, action.payload] };
    case ADD_ATTEMPT:
      return { ...state, attempts: [...state.attempts, action.payload] };
    case FETCH_ATTEMPTS:
      return { ...state, attempts: action.payload };
    default:
      return state;
  }
}
