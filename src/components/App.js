import React from 'react'; 
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from '../Pages/HomePage';
import { withSession } from '../Auth0Provider';
import FormPage from '../Pages/FormPage';
import Habit from './Containers/Habit';

function App({ loading }) {
  if(loading) {
    return null;
  }
  return ( 
    <>
      <Router>
        <Route path="/habitDetail/:id" component={Habit}/>
        <Route path="/addHabit" component={FormPage} />
        <Route  path="/users/:id" component={HomePage} />
        <Route exact path="/" component={HomePage} />
      </Router>
    </>
  );
}

export default withSession(App);
