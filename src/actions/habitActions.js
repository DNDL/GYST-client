import { postHabit, patchHabit, getHabits, getAttempts, postAttempt, removeHabit } from '../services/habitApi';

export const ADD_HABIT = 'ADD_HABIT';
export const addHabit = habit => ({
  type: ADD_HABIT, 
  payload: postHabit(habit)
});

export const UPDATE_HABIT = 'UPDATE_HABIT';
export const updateHabit = habit => ({
  type: UPDATE_HABIT, 
  payload: patchHabit(habit)
});

export const FETCH_HABITS = 'FETCH_HABITS';
export const fetchHabits = () => ({
  type: FETCH_HABITS,
  payload: getHabits()
});

export const DELETE_HABIT = 'DELETE_HABIT';
export const deleteHabit = (id) => ({
  type: DELETE_HABIT,
  payload: removeHabit(id)
});

export const ADD_ATTEMPT = 'ADD_ATTEMPT';
export const addAttempt = (habit, comment) => ({
  type: ADD_ATTEMPT,
  payload: postAttempt(habit, comment)
});

export const FETCH_ATTEMPTS = 'FETCH_ATTEMPTS';
export const fetchAttempts = () => ({
  type: FETCH_ATTEMPTS,
  payload: getAttempts()
});
