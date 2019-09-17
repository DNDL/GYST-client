import React from 'react';
import AddHabit from '../components/Containers/AddHabit';
import Nav from '../components/Nav/Nav';

export default function FormPage(props) {
  const { history } = props;
  console.log(props);
  return (
    <>
      <AddHabit props={history}/>
      <Nav />
    </>
  );
}
