export const getAllHabits = state => state.userHabits.habits;

export const getAllAttempts = state => state.userHabits.attempts;

// export const getHabitsByUserId = (state, _id) => {
//   return getAllHabits(state).filter(habit => {
//     return habit._id === _id;
//   });
// };

// export const getAllAttempts = state => state.habits.attempts;

// export const getAttemptsById = (state, habitId) => {
//   return getAllAttempts(state).filter(attempt => {
//     return attempt.habit === habitId;
//   });
// }; 
