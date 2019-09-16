import { postHabit, getHabits } from '../services/habitApi';

export const ADD_HABIT = 'ADD_HABIT';
export const addHabit = habit => ({
  type: ADD_HABIT,
  payload: postHabit(habit)
});

export const CREATE_HABIT = 'CREATE_HABIT';
export const createHabit = (title, frequency, goal, why, color, days) => ({
  type: CREATE_HABIT,
  payload: { title, frequency, goal, why, color, days }
});

export const FETCH_HABITS = 'FETCH_HABITS';
export const fetchHabits = (id) => ({
  type: FETCH_HABITS,
  payload: getHabits(id)
});
