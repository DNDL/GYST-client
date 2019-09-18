import React from 'react';
import Nav from '../components/Nav/Nav';
import Habit from '../components/Containers/Habit';

export default function HabitDetailPage(props) {
  return (
    <>
      <Habit props={props}/>
      <Nav />
    </>
  );
}
