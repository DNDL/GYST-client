import habitsReducer from './habitsReducer';
import { addHabit, fetchHabits, fetchAttempts, updateHabit, deleteHabit, addAttempt } from '../actions/habitActions';

jest.mock('../services/habitApi.js', () => ({
  //returns payload functions with resolved promises, I think
  postHabit: (habit) => (habit),
  patchHabit: (habit) => (habit),
  getHabits: () => ([
    { _id: '123', owner: 'def456', title: 'test habit 2', frequency: 'weekly', goal: 1, days: { f: true }, color: 'blue', why: 'WHYYYY' },
    { _id: '456', owner: 'def456', title: 'test habit 1', frequency: 'daily', goal: 5, days: { m: true }, color: 'red', why: 'BECAUSE' }
  ]),
  removeHabit: (habit) => (habit),
  postAttempt: (habit, comment) => ([
    { habit },
    { comment }
  ]),
  getAttempts: () => ([
    { _id: '123', owner: 'def456', habit: '456' },
    { _id: '456', owner: 'def456', habit: '456' }
  ]),
}));

describe('habitsReducer', () => {

  it('returns default state', () => {

    const state = {
      habits: [],
      attempts: []
    };

    const action = {
      type: 'NOTHING_USEFUL',
      payload: 'loss.jpeg'
    };

    const newState = habitsReducer(state, action);
    expect(newState).toEqual(state);
  });

  it('returns habits and updates state', () => {
    
    const state = {
      habits: [],
      attempts: []
    };

    const action = addHabit({ _id: '123', owner: 'def456', title: 'test habit 2', frequency: 'weekly', goal: 1, days: { f: true }, color: 'blue', why: 'WHYYYY' });
    
    const newState = habitsReducer(state, action);
    expect(newState).toEqual({ 
      habits: [
        { _id: '123', owner: 'def456', title: 'test habit 2', frequency: 'weekly', goal: 1, days: { f: true }, color: 'blue', why: 'WHYYYY' }
      ], 
      attempts: [] });
  });

  it('updates a habit by id and returns state ', () => {
    
    const state = {
      habits: [
        { _id: '999', owner: 'def456', title: 'teeeeest', frequency: 'weekly', goal: 1, days: { f: true }, color: 'blue', why: 'WHYYYY' }
      ],
      attempts: []
    };

    const action = updateHabit({ _id: '999', owner: 'def456', title: 'UPDATED HABIT TITLE', frequency: 'weekly', goal: 1, days: { f: true }, color: 'blue', why: 'WHYYYY' });
    
    const newState = habitsReducer(state, action);
    expect(newState).toEqual({ 
      habits: [
        { _id: '999', owner: 'def456', title: 'UPDATED HABIT TITLE', frequency: 'weekly', goal: 1, days: { f: true }, color: 'blue', why: 'WHYYYY' }
      ], 
      attempts: [] });
  });

  it('returns all habits for a user and updates state', () => {

    const state = {
      habits: [],
      attempts: []
    };

    const action = fetchHabits();

    const newState = habitsReducer(state, action);
    expect(newState).toEqual({ 
      habits: [
        { _id: '123', owner: 'def456', title: 'test habit 2', frequency: 'weekly', goal: 1, days: { f: true }, color: 'blue', why: 'WHYYYY' },
        { _id: '456', owner: 'def456', title: 'test habit 1', frequency: 'daily', goal: 5, days: { m: true }, color: 'red', why: 'BECAUSE' }
      ], 
      attempts: [] 
    });
  });

  it('deletes a habit by id and returns state ', () => {

    const state = {
      habits: [
        { _id: '999', owner: 'def456', title: 'teeeeest', frequency: 'weekly', goal: 1, days: { f: true }, color: 'blue', why: 'WHYYYY' }
      ],
      attempts: []
    };

    const action = deleteHabit({ _id: '999' });
    
    const newState = habitsReducer(state, action);
    expect(newState).toEqual({ 
      habits: [], 
      attempts: [] });
  });

  it('returns all attempts for a user and updates state', () => {

    const state = {
      habits: [],
      attempts: []
    };

    const action = fetchAttempts();

    const newState = habitsReducer(state, action);
    expect(newState).toEqual({ 
      habits: [], 
      attempts: [
        { _id: '123', owner: 'def456', habit: '456' },
        { _id: '456', owner: 'def456', habit: '456' }
      ] 
    });
  });

  it('adds an attempt and returns state', () => {

    const state = {
      habits: [
        { _id: '123' }
      ],
      attempts: []
    };

    const action = addAttempt({ _id: '123' }, 'test');

    const newState = habitsReducer(state, action);
    expect(newState).toEqual({ 
      habits: [
        { _id: '123' }
      ], 
      attempts: [
        [
          { habit: { _id: '123' } },
          { comment: 'test' }
        ]
      ] 
    });
  });
});
