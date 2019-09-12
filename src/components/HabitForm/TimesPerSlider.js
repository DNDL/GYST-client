import React, { useState } from 'react';

export default function TimesPerSlider() {
  const [value, updateValue] = useState(10);

  return (
    <fieldset>
      <legend>Times per day</legend>
      <input
        type="range"
        min="1"
        max="10"
        onChange={({ target }) => updateValue(target.value)}
      ></input>
      <p>{value}</p>
    </fieldset>
  );
}

// TODO: slider default to 1, currently at 10
