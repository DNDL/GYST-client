import {
  fetchHabits,
  FETCH_HABITS,
  addHabit,
  ADD_HABIT,
  updateHabit,
  UPDATE_HABIT,
  deleteHabit,
  DELETE_HABIT,
  addAttempt,
  ADD_ATTEMPT,
  fetchAttempts,
  FETCH_ATTEMPTS
} from './habitActions';

jest.mock('../services/habitApi', () => ({
  getHabits: () => Promise,
  patchHabit: () => Promise,
  postHabit: () => Promise,
  removeHabit: () => Promise,
  postAttempt: () => Promise,
  getAttempts: () => Promise
}));

describe('habitActions tests', () => {
  it('dispatches a a habits action', () => {
    const actionCreator = addHabit();
    expect(actionCreator).toEqual({ 
      type: ADD_HABIT, 
      payload: Promise 
    });
  });

  it('dispatches a a habits action', () => {
    const actionCreator = updateHabit();
    expect(actionCreator).toEqual({ 
      type: UPDATE_HABIT,
      payload: Promise 
    });
  });

  it('dispatches a fetch habits action', () => {
    const actionCreator = fetchHabits();
    expect(actionCreator).toEqual({ 
      type: FETCH_HABITS, 
      payload: Promise 
    });
  });

  it('dispatches a fetch habits action', () => {
    const actionCreator = deleteHabit();
    expect(actionCreator).toEqual({ 
      type: DELETE_HABIT,
      payload: Promise 
    });
  });

  it('dispatches a fetch habits action', () => {
    const actionCreator = addAttempt();
    expect(actionCreator).toEqual({ 
      type: ADD_ATTEMPT,
      payload: Promise 
    });
  });

  it('dispatches a fetch habits action', () => {
    const actionCreator = fetchAttempts();
    expect(actionCreator).toEqual({ 
      type: FETCH_ATTEMPTS,
      payload: Promise 
    });
  });

});
