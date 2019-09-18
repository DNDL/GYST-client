export const getAllHabits = state => state.userHabits.habits;

export const getHabitById = (state, id) => {
  return getAllHabits(state).filter(habit => {
    return id === habit._id;
  });
};

export const getAllAttempts = state => state.userHabits.attempts;

export const getAttemptsByHabitId = (state, habit) => {
  return state.userHabits.attempts
    .filter((attempt) => {
      return attempt.habit === habit._id;
    });
};
