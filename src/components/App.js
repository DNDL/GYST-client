import React from 'react'; 
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AddHabit from './Containers/AddHabit';
import Nav from './Nav/Nav';

export default function App() {
  return (
    <>
      <Router>
        <Route path="/addHabit" component={AddHabit} />
        <Nav />
      </Router>
    </>
  );
}
