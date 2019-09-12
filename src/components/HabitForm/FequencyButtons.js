import React from 'react';

export default function ColorPicker() {
  return (
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
  );
}
