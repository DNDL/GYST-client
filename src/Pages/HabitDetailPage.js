import React from 'react';
import Nav from '../components/Nav/Nav';
import Habit from '../components/Containers/Habit';
import Logo from '../components/Logo/Logo';

export default function HabitDetailPage(props) {
  return (
    <>
      <Logo />
      <Habit props={props}/>
      <Nav />
    </>
  );
}
