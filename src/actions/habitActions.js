import { postHabit, getHabits, getAttempts, postAttempt, deleteHabit, editHabit } from '../services/habitApi';

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

export const EDIT_HABIT = 'EDIT_HABIT';
export const editAHabit = () => ({
  type: EDIT_HABIT,
  payload: editHabit()
});

export const DELETE_HABIT = 'DELETE_HABIT';
export const deleteAHabit = (id) => ({
  type: DELETE_HABIT,
  payload: deleteHabit(id)
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
