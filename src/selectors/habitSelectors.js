export const getAllHabits = state => state.userHabits.habits;

export const getAllAttempts = state => state.userHabits.attempts;

export const getAttemptByHabitId = (state, habit) => {
  return state.userHabits.attempts
    .filter((attempt) => {
      return attempt.habit === habit._id;
    });
};
