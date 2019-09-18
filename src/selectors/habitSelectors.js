export const getAllHabits = state => state.userHabits.habits;

export const getHabitById = (state, _id) => {
  return getAllHabits(state).find(habit => {
    return _id === habit._id;
  });
};

export const getAllAttempts = state => state.userHabits.attempts;

export const getAttemptsByHabitId = (state, habit) => {
  return state.userHabits.attempts
    .filter((attempt) => {
      return attempt.habit === habit._id;
    });
};
