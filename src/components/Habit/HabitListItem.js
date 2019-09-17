import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function HabitListItem({ habit, attempt }) {
  return (
    <>
      <Link to={`/habitDetail/${habit._id}`}>{habit.title}</Link>
      <progress value={attempt.progress} max={habit.goal}></progress>
      <button>Eat me.</button>
    </>
  );
}

HabitListItem.propTypes = {
  habit: PropTypes.object.isRequired,
  attempt: PropTypes.object.isRequired
};

export default HabitListItem;
