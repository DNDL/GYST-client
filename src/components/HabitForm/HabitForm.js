import React, { useState, useEffect } from 'react';
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
    },
    checked: false
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

  const colorLabels = ['red', 'orange', 'green', 'blue', 'purple'];
  const colorFieldset = 'color';

  const createMatrialRadioButtons = (arr, fieldset) => {
    return arr.map(a => (
      <label key={a}>
        {a}
        <RadioGroup aria-label={fieldset} name={fieldset}></RadioGroup>
        <FormControlLabel 
          onChange={() => updateHabit({ ...habit, [fieldset]: `${a}` })}
          value={a}
          control={<Radio />} 
          labelPlacement="top" />
        <RadioGroup/>
      </label>
    ));
  };

  return (
    <form className={styles.HabitForm}>
      <TextField
        id="outlined-dense"
        label="Habit"
        onChange={e => {
          updateHabit({ ...habit, title: e.target.value });
        }}
        value={habit.title}
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
        <legend>{habit.frequency} Goal</legend>  
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


      <fieldset className={styles.checkboxes}>
        <legend>Hold me accountable on</legend>
        <FormGroup aria-label="position" name="days"  row>
          {Object.keys(habit.days).map(day => (
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
        <RadioGroup className={styles.radio} aria-label="gender" name="color" row>
          {createMatrialRadioButtons(colorLabels, colorFieldset)}
        </RadioGroup>
      </fieldset>

      <TextField
        id="outlined-dense"
        label="Declare your Why..."
        onChange={e => {
          updateHabit({ ...habit, why: e.target.value });
        }}
        value={habit.why}
        margin="dense"
        variant="outlined"
      />
      
      {/* //Conditionally rendered buttons */}
      { editing &&
        <Button 
          className={styles.update}
          type="submit"
          variant="contained"
          size="small" 
          onClick={() => {
            handleUpdate(habit);
            history.push('/');
          }}>
          Update Habit
        </Button>
      }
      { !editing &&
        <Button
          className={styles.create}
          type="submit"
          variant="contained"
          size="small"
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
