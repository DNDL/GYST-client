let token = null;
export const setToken = newToken => {
  token = newToken;
};

export const postHabit = (habit) => {
  console.log('in service', habit);
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

export const getHabits = () => {
  return fetch(`${process.env.API_URL}/api/v1/habits`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  })
    .then(res => {
      console.log('in getHabits', res);
      if(!res.ok) throw 'Unable to get your habits';
      return res.json();
    });
};
