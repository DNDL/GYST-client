import moment from 'moment';
export const getAllHabits = state => state.habits.habits;

export const getHabitById = (state, _id) => {
  return getAllHabits(state).find(habit => {
    return _id === habit._id;
  });
};

export const getAllAttempts = state => state.habits.attempts;

export const getAttemptsByHabitId = (state, id) => {
  return state.habits.attempts.filter(attempt => {
    return attempt.habit === id;
  });
};

export const getValidAttemptsByHabit = (state, props) => {
  const { habit } = props;
  const attempts = getAttemptsByHabitId(state, habit._id);
  const validAttempts = [];

  if(habit.frequency === 'daily') {
    attempts.forEach(a => {
      const dayOfAttempt = moment(a.createdAt).dayOfYear();
      const currentDay = moment().dayOfYear();
      if(currentDay === dayOfAttempt) {
        validAttempts.push(a);
      }
    });
  } else if(habit.frequency === 'weekly') {
    attempts.forEach(a => {
      const weekOfAttempt = moment(a.createdAt).week();
      const currentWeek = moment().week();
      if(currentWeek === weekOfAttempt) {
        validAttempts.push(a);
      }
    });
  } else {
    attempts.forEach(a => {
      const monthOfAttempt = moment(a.createdAt).month();
      const currentMonth = moment().month();
      if(currentMonth === monthOfAttempt) {
        validAttempts.push(a);
      }
    });
  }
  return validAttempts;
};
