let token = null;
export const setToken = newToken => {
  token = newToken;
};

export const postHabit = ({ title, why }) => {
  return fetch(`${process.env.API_URL}/api/v1/habits`), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({ title, why })
  }
    .then(res => {
      if(res.ok) return res.json();
    });
};

export const getHabits = () => {
  return fetch(`${process.env.API_URL}/api/v1/habits`)
    .then(res => {
      if(!res.ok) throw 'Unable to get your habits';
      return res.json();
    });
};
