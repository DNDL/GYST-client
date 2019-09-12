import React from 'react';

export default function ColorPicker() {
  return (
    <fieldset>
      <legend>Color: </legend>
      <label>
        Red
        <input type="radio" name="color" value="red" />
      </label>
      <label>
        Yellow
        <input type="radio" name="color" value="yellow" />
      </label>
      <label>
        Blue
        <input type="radio" name="color" value="blue" />
      </label>
    </fieldset>
  );
}
