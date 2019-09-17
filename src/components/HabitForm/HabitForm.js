import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';


// TODO make button more betterer
// TODO: redirect to home page

function HabitForm({ history, handleSubmit }) {
  const [form, updateForm] = useState({
    title: '',
    frequency: '',
    goal: 10,
    why: '',
    color: '',
    days: {
      s: false,
      m: false,
      t: false,
      w: false,
      th: false,
      f: false,
      sa: false
    }
  });


  const handleChange = ({ target }) => {
    const prop = target.name === 'days' ? { days: { ...form.days, [target.value] : target.checked } } : { [target.name] : target.value };
    updateForm({ ...form, ...prop });
  };

  const frequencyLabels = ['daily', 'weekly', 'monthly'];
  const frequencyFieldset = 'frequency';

  const colorLabels = ['red', 'green', 'blue'];
  const colorFieldset = 'color';

  const createRadioButtons = (arr, fieldset) => {
    return arr.map(a => (
      <label key={a}>
        {a}
        <input 
          onChange={() => updateForm({ ...form, [fieldset] : `${a}` })} 
          type="radio" 
          name={fieldset} 
        />
      </label>
    ));
  };

  return (
    <form onSubmit={event => {
      event.preventDefault();
      handleSubmit(event, form);
      history.push('/');
      setTimeout(() => {
      }, 3000);
    }}>
      <input
        type="text"
        name="title"
        value={form.title}
        onChange={handleChange}
        placeholder="Habit name..."
      ></input>

      <fieldset>
        <legend>Frequency:</legend>
        {createRadioButtons(frequencyLabels, frequencyFieldset)}
      </fieldset>

      <fieldset>
        <legend>Times per:</legend>
        <input
          type="range"
          min="1"
          max="10"
          onChange={({ target }) => updateForm({ ...form, goal: target.value })}
        ></input>
        <p>{form.goal}</p>
      </fieldset>

      <fieldset>
        <legend>Hold me accountable on:</legend>
        {Object.keys(form.days).map(day => (
          <label key={day}>
            {day}
            <input  
              onChange={handleChange}
              type="checkbox" 
              name="days" 
              value={day}
            />
          </label>
        ))}
      </fieldset>

      <fieldset>
        <legend>Color: </legend>
        {createRadioButtons(colorLabels, colorFieldset)}
      </fieldset>

      <section>
        <textarea
          name="why"
          value={form.why}
          onChange={handleChange}
          maxLength="128"
          placeholder="Declare your Why..."
        ></textarea>
      </section>
      <button>Create</button>
    </form>
  );
}

HabitForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};

export default withRouter(HabitForm);
