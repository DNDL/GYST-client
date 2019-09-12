import React from 'react';
import PropTypes from 'prop-types';

function HabitDetailItem({ title, why }) {
  return (
    <section>
      <h3>{title}</h3>
      <p>{why}</p>
      <p>DATA VISUALIZATION</p>
      <button>Edit</button>
    </section>
  );
}

HabitDetailItem.propTypes = {
  title: PropTypes.string.isRequired,
  why: PropTypes.string.isRequired
};

export default HabitDetailItem;
