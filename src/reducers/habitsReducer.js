import { ADD_HABIT, FETCH_HABITS, CREATE_HABIT } from '../actions/habitActions';

const initialState = {
  habits: []
};

export default function habitsReducer(state = initialState, action) {
  switch(action.type) {
    case ADD_HABIT:
      return { ...state, habits: [...state.habits, action.payload] };
    // case CREATE_HABIT:
    //     return { ...state, habits:}
    case FETCH_HABITS:
      return { ...state, habits: [...state.habits, action.payload] };
    default:
      return state;
  }
}

