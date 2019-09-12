import { postHabit } from '../services/habitApi';

export const ADD_HABIT = 'ADD_HABIT';
export const addHabit = habit => ({
  type: ADD_HABIT,
  payload: postHabit(habit)
});


