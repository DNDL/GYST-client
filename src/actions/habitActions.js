import { postHabit, getHabits } from '../services/habitApi';
import { getAttemptsById } from '../selectors/habitSelectors';

export const ADD_HABIT = 'ADD_HABIT';
export const addHabit = habit => ({
  type: ADD_HABIT, 
  payload: postHabit(habit)
});

export const FETCH_HABITS = 'FETCH_HABITS';
export const fetchHabits = () => ({
  type: FETCH_HABITS,
  payload: getHabits()
});

export const FETCH_ATTEMPTS_BY_ID = 'FETCH_ATTEMPTS_BY_ID';
export const fetchAttemptsById = habitId => ({
  type: FETCH_ATTEMPTS_BY_ID,
  payload: getAttemptsById(habitId)
});
