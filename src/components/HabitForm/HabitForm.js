import React, { useState } from 'react';

// TODO make button more betterer

function HabitForm(handleSubmit) {
  const [title, updateTitle] = useState('');
  const [why, updateWhy] = useState('');
  const [value, updateSliderValue] = useState(10);
  const [frequency, updateFrequency] = useState();
  const [sunday, updateSunday] = useState('');
  const [monday, updateMonday] = useState('');
  const [tuesday, updateTuesday] = useState('');
  const [wednesday, updateWednesday] = useState('');
  const [thursday, updateThursday] = useState('');
  const [friday, updateFriday] = useState('');
  const [saturday, updateSaturday] = useState('');
  const [color, updateColor] = useState();
  const [red, updateRed] = useState('');
  const [blue, updateBlue] = useState('');
  const [yellow, updateYellow] = useState('');

  const habit = { owner, title, why, frequency, goal };

  return (
    <form onSubmit={event => {handleSubmit(event, habit);}}>
      <input
        type="text"
        name={title}
        value={title}
        onChange={({ target }) => updateTitle(target.value)}
        placeholder="Habit name..."
      ></input>

      <fieldset>
        <p>{frequency}</p>
        <legend>Frequency:</legend>
        <label>
          Daily
          <input 
            onChange={({ target }) => updateFrequency(target.value)} 
            type="radio" 
            name="frequency" 
          />
        </label>
        <label>
          Weekly
          <input 
            onChange={({ target }) => updateFrequency(target.value)}
            type="radio" 
            name="frequency" 
          />
        </label>
        <label>
          Monthly
          <input 
            onChange={({ target }) => updateFrequency(target.value)}
            type="radio" 
            name="frequency" 
          />
        </label>
      </fieldset>

      <fieldset>
        <legend>Times per:</legend>
        <input
          type="range"
          min="1"
          max="10"
          onChange={({ target }) => updateSliderValue(target.value)}
        ></input>
        <p>{value}</p>
      </fieldset>

      <fieldset>
        <legend>Hold me accountable on:</legend>
        <label>
          S
          <input  
            onChange={({ target }) => updateSunday(target.value)}
            type="checkbox" 
            name="sunday" 
            value={sunday} />
        </label>
        <label>
          M
          <input  
            onChange={({ target }) => updateMonday(target.value)}
            type="checkbox" 
            name="monday" 
            value={monday} />
        </label>
        <label>
          T
          <input 
            onChange={({ target }) => updateTuesday(target.value)}
            type="checkbox" 
            name="tueday" 
            value={tuesday} />
        </label>
        <label>
          W
          <input 
            onChange={({ target }) => updateWednesday(target.value)}
            type="checkbox" 
            name="wednesday"
            value={wednesday} />
        </label>
        <label>
          Th
          <input 
            onChange={({ target }) => updateThursday(target.value)}
            type="checkbox" 
            name="thursday" 
            value={thursday} />
        </label>
        <label>
          F
          <input 
            onChange={({ target }) => updateFriday(target.value)}
            type="checkbox" 
            name="friday" 
            value={friday} />
        </label>
        <label>
          S
          <input  
            onChange={({ target }) => updateSaturday(target.value)}
            type="checkbox" 
            name="saturday" 
            value={saturday} />
        </label>
      </fieldset>

      <fieldset>
        <legend>Color: </legend>
        <label>
          Red
          <input 
            onChange={({ target }) => updateColor(target.value)}
            type="radio" 
            name="color" 
            value={color} />
        </label>
        <label>
          Yellow
          <input 
            onChange={({ target }) => updateColor(target.value)}
            type="radio" 
            name="color" 
            value={color} />
        </label>
        <label>
          Blue
          <input 
            onChange={({ target }) => updateColor(target.value)}
            type="radio" 
            name="color" 
            value={color} />
        </label>
      </fieldset>

      <section>
        <textarea
          name="why"
          value={why}
          onChange={({ target }) => updateWhy(target.value)}
          maxLength="128"
          placeholder="Declare your Why..."
        ></textarea>
      </section>
      <button>Create</button>
    </form>
  );
}

export default HabitForm;
