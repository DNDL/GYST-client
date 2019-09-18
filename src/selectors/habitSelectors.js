export const getAllHabits = state => state.habits.habits;

export const getHabitById = (state, _id) => {
  return getAllHabits(state).find(habit => {
    return _id === habit._id;
  });
};

export const getAllAttempts = state => state.habits.attempts;

export const getAttemptsByHabitId = (state, id) => {
  return state.habits.attempts
    .filter((attempt) => {
      return attempt.habit === id;
    });
};
