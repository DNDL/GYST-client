import React from 'react';
import PropTypes from 'prop-types';
import Checkboxes from './Checkboxes';
import Slider from './Slider';

function HabitForm({ habitName }) {
  return (
    <form>
      <input
        type="text"
        name={habitName}
        value={habitName}
        placeholder="Habit name..."
      ></input>

      <fieldset>
        <legend>Frequency:</legend>
        <label>
          Daily
          <input type="radio" name="frequency" value="daily" />
        </label>
        <label>
          Weekly
          <input type="radio" name="frequency" value="weekly" />
        </label>
        <label>
          Monthly
          <input type="radio" name="frequency" value="monthly" />
        </label>
      </fieldset>

      <Slider />

      <Checkboxes />
    </form>
  );
}

HabitForm.propTypes = {
  habitName: PropTypes.string.isRequired
};

export default HabitForm;
