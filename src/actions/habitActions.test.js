import {
  fetchHabits,
  FETCH_HABITS,
  addHabit,
  ADD_HABIT
} from './habitActions';

jest.mock('../services/habitApi', () => ({
  getHabits: () => Promise,
  postHabit: () => Promise
}));

describe('habitActions tests', () => {
  it('dispatches a fetch habits action', () => {
    const actionCreator = fetchHabits();
    expect(actionCreator).toEqual({ 
      type: FETCH_HABITS, 
      payload: Promise 
    });
  });
  it('dispatches a a habits action', () => {
    const actionCreator = addHabit();
    expect(actionCreator).toEqual({ 
      type: ADD_HABIT, 
      payload: Promise 
    });
  });
});
