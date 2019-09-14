import React from 'react';
import UserDisplay from '../components/User/UserDisplay';
import AllHabits from '../components/Containers/AllHabits';
import Nav from '../components/Nav/Nav';

export default function Home() {
  return (
    <>
      <UserDisplay/>
      <AllHabits />
      <Nav />
    </>
  );
}
