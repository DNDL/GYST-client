import React, { useState } from 'react';

// TODO make button more betterer

function HabitForm(handleSubmit) {
  const [title, updateTitle] = useState('');
  const [why, updateWhy] = useState('');
  const [value, updateSliderValue] = useState(10);
  const [daily, updateDaily] = useState('');
  const [weekly, updateWeekly] = useState('');
  const [monthly, updateMonthly] = useState('');

  const habit = { title, why };

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
        <legend>Frequency:</legend>
        <label>
          Daily
          <input 
            onChange={({ target }) => updateDaily(target.value)} 
            type="radio" 
            name="frequency" 
            value={daily} />
        </label>
        <label>
          Weekly
          <input 
            onChange={({ target }) => updateWeekly(target.value)}
            type="radio" 
            name="frequency" 
            value={weekly} />
        </label>
        <label>
          Monthly
          <input 
            onChange={({ target }) => updateMonthly(target.value)}
            type="radio" 
            name="frequency" 
            value={monthly} />
        </label>
      </fieldset>

      <fieldset>
        <legend>Times per day</legend>
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
          <input type="checkbox" name="sunday" value="sunday" />
        </label>
        <label>
          M
          <input type="checkbox" name="monday" value="monday" />
        </label>
        <label>
          T
          <input type="checkbox" name="tueday" value="tueday" />
        </label>
        <label>
          W
          <input type="checkbox" name="wednesday" value="wednesday" />
        </label>
        <label>
          Th
          <input type="checkbox" name="thursday" value="thursday" />
        </label>
        <label>
          F
          <input type="checkbox" name="friday" value="friday" />
        </label>
        <label>
          S
          <input type="checkbox" name="saturday" value="saturday" />
        </label>
      </fieldset>

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
