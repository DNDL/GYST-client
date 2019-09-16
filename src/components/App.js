import React from 'react'; 
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from '../Pages/HomePage';
import { withSession } from '../Auth0Provider';
import FormPage from '../Pages/FormPage';
import Habit from './Containers/Habit';

export default function App() {
  return (
    <>
      <Router>
        <Route path="/habitDetail/:id" component={withSession(Habit)}/>
        <Route path="/addHabit" component={withSession(FormPage)} />
        <Route  path="/users/:id" component={withSession(HomePage)} />
        <Route exact path="/" component={withSession(HomePage)} />
      </Router>
    </>
  );
}
