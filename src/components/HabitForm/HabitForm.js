import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Slider from '@material-ui/core/Slider';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import styles from './habitForm.css';

function HabitForm({ history, handleSubmit }) {
  const [form, updateForm] = useState({
    title: '',
    frequency: '',
    goal: 10, 
    why: '',
    color: '',
    days: {
      // TODO figure out what the data looks like. I want to display capitol letters
      s: false,
      m: false,
      t: false,
      w: false,
      th: false,
      f: false,
      sa: false
    },
    checked: false
  });

  const handleChange = ({ target }) => {
    const prop =
      target.name === 'days'
        ? { days: { ...form.days, [target.value]: target.checked } }
        : { [target.name]: target.value };
    updateForm({ ...form, ...prop });
  };

  const frequencyLabels = ['daily', 'weekly', 'monthly'];
  const frequencyFieldset = 'frequency';

  const colorLabels = ['red', 'yellow', 'green', 'blue', 'purple'];
  const colorFieldset = 'color';

  const createMatrialRadioButtons = (arr, fieldset) => {
    return arr.map(a => (
      <label key={a}>
        {a}
        <RadioGroup aria-label={fieldset} name={fieldset}></RadioGroup>
        <FormControlLabel 
          onChange={() => updateForm({ ...form, [fieldset]: `${a}` })}
          value={a}
          control={<Radio />} 
          labelPlacement="top" />
        <RadioGroup/>
      </label>
    ));
  };

  return (
    <form className={styles.HabitForm}
      onSubmit={event => {
        event.preventDefault();
        handleSubmit(event, form);
        history.push('/');
      }}
    >
      <TextField
        id="outlined-dense"
        label="Habit"
        onChange={e => {
          updateForm({ ...form, title: e.target.value });
        }}
        value={form.title}
        margin="dense"
        variant="outlined"
      />

      <fieldset>
        <legend>Frequency</legend>
        <RadioGroup className={styles.radio} aria-label="frequency" name="frequency" row>
          {createMatrialRadioButtons(frequencyLabels, frequencyFieldset)}
        </RadioGroup>
      </fieldset>

      <fieldset>
        <legend>Times per {form.frequency}</legend>  
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


      <fieldset className={styles.checkboxes}>
        <legend>Hold me accountable on</legend>
        <FormGroup aria-label="position" name="days"  row>
          {Object.keys(form.days).map(day => (
            <FormControlLabel
              onChange={handleChange}
              className={styles.checkbox}
              key={day}
              value="top"
              control={<Checkbox color="primary" className={styles.checkbox}/>}
              label={day}
              labelPlacement="top"
              />
          ))}
        </FormGroup>
      </fieldset>


      <fieldset>
        <legend>Label color</legend>
        {/* <FormLabel component="legend">{colorFieldset}</FormLabel> */}
        <RadioGroup className={styles.radio} aria-label="gender" name="color" row>
          {createMatrialRadioButtons(colorLabels, colorFieldset)}
        </RadioGroup>
      </fieldset>

      <TextField
        id="outlined-dense"
        label="Declare your Why..."
        onChange={e => {
          updateForm({ ...form, why: e.target.value });
        }}
        value={form.why}
        margin="dense"
        variant="outlined"
        />

      <Button type="submit" variant="contained" size="small" color="primary">
        submit
      </Button>

    </form>
  );
}

HabitForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};

export default withRouter(HabitForm);

{/* <fieldset>
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
  </fieldset> */}
    
{/* <fieldset>
  <legend>Hold me accountable on:</legend>
  {Object.keys(form.days).map(day => (
    <label key={day} >
    {day}
    <Checkbox
    name="days"
    checked={form.day}
    onChange={(e, val) => updateForm({ ...form, day: val })}
    value={day}
    inputProps={{
      'aria-label': 'primary checkbox'
    }}
    />
    </label>
    ))}
  </fieldset> */}
  
  {/* <fieldset>
    <legend>Frequency:</legend>
    {createRadioButtons(frequencyLabels, frequencyFieldset)}
  </fieldset> */}

{/* <fieldset>
  <legend>Color: </legend>
  {createRadioButtons(colorLabels, colorFieldset)}
</fieldset> */}