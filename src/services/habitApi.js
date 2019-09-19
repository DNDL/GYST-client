let token = null;
export const setToken = newToken => {
  token = newToken;
};

export const postHabit = (habit) => {
  console.log('in postHabit', habit);
  return fetch(`${process.env.API_URL}/api/v1/habits`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({ habit })
  })
    .then(res => {
      if(!res.ok) throw 'unable to post';
      return res.json();
    });
};

export const patchHabit = (habit) => {
  console.log('habit in patchHabit', habit);
  return fetch(`${process.env.API_URL}/api/v1/habits/${habit._id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({ habit })
  })
    .then(res => {
      if(!res.ok) throw `Unable to update habit ${habit._id}.`;
      return res.json();
    });
};

export const removeHabit = (id) => {
  return fetch(`${process.env.API_URL}/api/v1/habits/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  })
    .then(res => {
      if(!res.ok) throw `Unable to delete habit ${id}.`;
      return res.json();
    });
};

export const postAttempt = (habitId, comment)  => {
  return fetch(`${process.env.API_URL}/api/v1/habits/attempts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({ habit: habitId, comment })
  })
    .then(res => {
      if(!res.ok) throw 'unable to post attempt';
      return res.json();
    });
};

export const getHabits = () => {
  return fetch(`${process.env.API_URL}/api/v1/habits`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  })
    .then(res => {
      if(!res.ok) throw 'Unable to get your habits';
      return res.json();
    });
};
export const getAttempts = () => {
  return fetch(`${process.env.API_URL}/api/v1/habits/attempts`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  })
    .then(res => {
      if(!res.ok) throw 'Unable to get your attempts';
      return res.json();
    });
};

