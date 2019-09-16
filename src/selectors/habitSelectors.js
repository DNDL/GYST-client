export const getAllHabits = state => state.habits.habits;

export const getHabit = (state, _id) => {
  return getAllHabits(state).filter(habit => {
    return habit._id === _id;
  });
};
