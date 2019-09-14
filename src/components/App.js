import React from 'react'; 
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AddHabit from './Containers/AddHabit';
import Home from '../Home/Home';
import { withSession } from '../Auth0Provider';

export default function App() {
  return (
    <>
      <Router>
        <Route path="/" component={withSession(Home)} />
        <Route path="/addHabit" component={withSession(AddHabit)} />
      </Router>
    </>
  );
}
