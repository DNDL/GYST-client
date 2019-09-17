import { ADD_HABIT, FETCH_HABITS, FETCH_ATTEMPTS_BY_ID } from '../actions/habitActions';

const initialState = {
  habits: [],
  attempts: []
};

export default function habitsReducer(state = initialState, action) {
  switch(action.type) {
    case ADD_HABIT:
      return { ...state, habits: [...state.habits, action.payload] };
    case FETCH_HABITS:
      return { ...state, habits: [...state.habits, action.payload] };
    case FETCH_ATTEMPTS_BY_ID:
      return { ...state, attempts: [...state.attempts, action.payload] };
    default:
      return state;
  }
}
