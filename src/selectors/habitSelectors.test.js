import { getAllHabits, getHabitById, getAllAttempts, getAttemptsByHabitId } from '../../src/selectors/habitSelectors';

describe('habit selectors test', () => {

  it('gets all habits from state', () => {
    const state = {
      habits: { habits:
          [
            { _id: '123', owner: 'def456', title: 'test habit 2', frequency: 'weekly', goal: 1, days: { f: true }, color: 'blue', why: 'WHYYYY' },
            { _id: '456', owner: 'abc123', title: 'test habit 1', frequency: 'daily', goal: 2, days: { m: true }, color: 'red', why: 'fuuudge' }
          ]
      } 
    };
    const habits = getAllHabits(state);
    expect(habits).toEqual([
      { _id: '123', owner: 'def456', title: 'test habit 2', frequency: 'weekly', goal: 1, days: { f: true }, color: 'blue', why: 'WHYYYY' },
      { _id: '456', owner: 'abc123', title: 'test habit 1', frequency: 'daily', goal: 2, days: { m: true }, color: 'red', why: 'fuuudge' } 
    ]);
  });


  it('gets a habit by id from state', () => {
    const state = {
      habits: { habits:
          [
            { _id: '123', owner: 'def456', title: 'test habit 2', frequency: 'weekly', goal: 1, days: { f: true }, color: 'blue', why: 'WHYYYY' },
            { _id: '456', owner: 'abc123', title: 'test habit 1', frequency: 'daily', goal: 2, days: { m: true }, color: 'red', why: 'fuuudge' }
          ]
      } 
    };

    const habit = getHabitById(state, '456');
    expect(habit).toEqual(
      { _id: '456', owner: 'abc123', title: 'test habit 1', frequency: 'daily', goal: 2, days: { m: true }, color: 'red', why: 'fuuudge' } 
    );
  });
});


describe('attempt selectors test', () => {

  it('gets all attempts from state', () => {
    const state = {
      habits: { attempts:
          [
            { _id: '123', owner: 'abc', habit: '123' },
            { _id: '456', owner: 'def', habit: '456' }
          ]
      } 
    };
    const attempts = getAllAttempts(state);
    expect(attempts).toEqual(
      [
        { _id: '123', owner: 'abc', habit: '123' },
        { _id: '456', owner: 'def', habit: '456' }
      ]
    );
  });


  it('gets all attempts that match a habit\'s id from state', () => {
    const state = {
      habits: { attempts:
        [
          { _id: '123', owner: 'abc', habit: '123' },
          { _id: '456', owner: 'abc', habit: '123' },
          { _id: '789', owner: 'def', habit: '456' },
          { _id: '111', owner: 'def', habit: '456' }
        ]
      } 
    };

    const attempts = getAttemptsByHabitId(state, '123');
    expect(attempts).toEqual([
      { _id: '123', owner: 'abc', habit: '123' },
      { _id: '456', owner: 'abc', habit: '123' },
    ]);
  });
});

