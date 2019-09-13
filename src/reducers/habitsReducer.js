import { ADD_HABIT } from '../actions/habitActions';

const initialState = {
  habits: []
};

export default function habitsReducer(state = initialState, action) {
  switch(action.type) {
    case ADD_HABIT:
      return { ...state, habits: [...state.habits, action.payload] };
    default:
      return state;
  }
}

