const initialState = {
  user: {},
  friends: [],
  friendInvitations: []
};

export default function usersReducer(state = initialState, action) {
  switch(action.type) {
    default:
      return state;
  }
}