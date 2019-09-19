let token = null;
export const setToken = newToken => {
  token = newToken;
};

export const createUser = (email) => {
  return fetch(`${process.env.API_URL}/api/v1/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({ email })
  })
    .then(res => {
      if(!res.ok) throw 'Could not create a habit';
      return res.json();
    });
};
