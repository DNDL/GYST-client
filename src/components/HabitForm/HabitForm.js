import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Slider from '@material-ui/core/Slider';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
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

  const frequencyLabels = ['daily', 'weekly', 'monthly'];
  const frequencyFieldset = 'frequency';

  const colorLabels = ['red', 'orange', 'green', 'blue', 'purple'];
  const colorFieldset = 'color';

  const createMatrialRadioButtons = (arr, fieldset) => {
    const checkedValue = habit[fieldset];
    return arr.map(buttonValue => (
      <label key={buttonValue}>
        {buttonValue}
        <RadioGroup aria-label={fieldset} name={fieldset}></RadioGroup>
        <FormControlLabel 
          checked={checkedValue === buttonValue}
          onChange={() => updateHabit({ ...habit, [fieldset]: `${buttonValue}` })}
          value={buttonValue}
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
          value={habit['goal']}
          step={1}
          marks
          min={1}
          max={10}
          onChange={(e, val) => updateHabit({ ...habit, goal: val })}
          valueLabelDisplay="auto"
        />
      </fieldset>

      <fieldset>
        <legend>Label color</legend>
        <RadioGroup className={styles.radio} aria-label="color" name="color" row>
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
