export const postHabit = ({ title, why }) => {
  return fetch('OUR BACKEND'), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ title, why })
  }
    .then(res => {
      if(res.ok) return res.json();
    });
};

export const getHabits = () => {
  return fetch('OUR BACKEND')
    .then(res => {
      if(!res.ok) throw 'Unable to get your habits';
      return res.json();
    });
};
