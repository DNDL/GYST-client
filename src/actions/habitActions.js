import { postHabit, getHabits, getAttempts, postAttempt } from '../services/habitApi';

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

export const ADD_ATTEMPT = 'ADD_ATTEMPT';
export const addAttempt = habit => ({
  type: ADD_ATTEMPT,
  payload: postAttempt(habit)
});

export const FETCH_ATTEMPTS = 'FETCH_ATTEMPTS';
export const fetchAttempts = () => ({
  type: FETCH_ATTEMPTS,
  payload: getAttempts()
});
