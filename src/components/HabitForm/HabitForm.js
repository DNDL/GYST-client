import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Slider from '@material-ui/core/Slider';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

function HabitForm({ history, handleSubmit }) {
  const [form, updateForm] = useState({
    title: '',
    frequency: '',
    goal: 10,
    why: '',
    color: '',
    days: {      // TODO figure out what the data looks like. I want to display capitol letters
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
    }}>

      <TextField
        id="outlined-controlled"
        label="Habit"
        onChange={(e) => {
          updateForm({ ...form, title: e.target.value });
        }}
        value={form.title}
        margin="normal"
        variant="outlined"
        defaultValue=""
      />

      <fieldset>
        <legend>Frequency:</legend>
        {createRadioButtons(frequencyLabels, frequencyFieldset)}
      </fieldset>

      <fieldset>
        <legend>Times per:</legend>
        <Slider
          defaultValue={1}
          step={1}
          marks
          min={1}
          max={10}
          onChange={(e, val) => updateForm({ ...form, goal: val })}
          valueLabelDisplay="auto"
        />
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
      <Button type="submit" variant="contained" size="small" color="primary">submit</Button>
    </form>
  );
}

HabitForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};

export default withRouter(HabitForm);
