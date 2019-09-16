let token = null;
export const setToken = newToken => {
  token = newToken;
};

export const postHabit = (habit) => {
  return fetch(`${process.env.API_URL}/api/v1/habits`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({ habit })
  })
    .then(res => {
      if(res.ok) return res.json();
    })
    .catch(console.log);
};

export const getHabits = (id) => {
  return fetch(`${process.env.API_URL}/api/v1/habits`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: {
      id
    }
  })
    .then(res => {
      if(!res.ok) throw 'Unable to get your habits';
      return res.json();
    });
};
