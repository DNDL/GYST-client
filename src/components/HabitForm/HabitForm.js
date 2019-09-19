import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Slider from '@material-ui/core/Slider';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

function HabitForm(props) {
  const { history } = props;
  const { handleSubmit, handleUpdate } = props.actions;
  const [editing, setEditing] = useState(false);
  const [habit, updateHabit] = useState({
    title: '',
    frequency: '',
    goal: 1,
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

  useEffect(() => {
    if(props.location.state) {
      const existingHabit = props.location.state.habit;
      updateHabit({ ...existingHabit, days: { ...existingHabit.days } });
      setEditing(true);
    }
  }, []);

  const handleChange = ({ target }) => {
    const prop = target.name === 'days' ? { days: { ...habit.days, [target.value] : target.checked } } : { [target.name] : target.value };
    updateHabit({ ...habit, ...prop });
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
          onChange={() => updateHabit({ ...habit, [fieldset] : `${a}` })}
          type="radio"
          name={fieldset}
        />
      </label>
    ));
  };

  return (
    <form>
      <TextField
        id="outlined-controlled"
        label="Habit"
        onChange={(e) => {
          updateHabit({ ...habit, title: e.target.value });
        }}
        value={habit.title}
        margin="normal"
        variant="outlined"
      />

      <fieldset>
        <legend>Frequency:</legend>
        {createRadioButtons(frequencyLabels, frequencyFieldset)}
      </fieldset>

      <fieldset>
        <legend>Times per:</legend>
        <Slider
          defaultValue={habit.goal}
          step={1}
          marks
          min={1}
          max={10}
          onChange={(e, val) => updateHabit({ ...habit, goal: val })}
          valueLabelDisplay="auto"
        />
      </fieldset>

      <fieldset>
        <legend>Hold me accountable on:</legend>
        {Object.keys(habit.days).map(day => (
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
          value={habit.why}
          onChange={handleChange}
          maxLength="128"
          placeholder="Declare your Why..."
        ></textarea>
      </section>
      
      {/* //Conditionally rendered buttons */}
      { editing &&
        <Button
          type="submit"
          variant="contained"
          size="small" color="primary"
          onClick={() => {
            handleUpdate(habit);
            history.push('/');
          }}>
          Update Habit
        </Button>
      }
      { !editing &&
        <Button
          type="submit"
          variant="contained"
          size="small" color="primary"
          onClick={() => {
            handleSubmit(habit);
            history.push('/');
          }}>
          Create Habit
        </Button>
      }
    </form>
  );
}

HabitForm.propTypes = {
  history: PropTypes.object.isRequired,
  location: PropTypes.object,
  actions: PropTypes.shape({
    handleSubmit: PropTypes.func,
    handleUpdate: PropTypes.func,
  })
};

export default withRouter(HabitForm);
