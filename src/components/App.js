import React from 'react'; 
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from '../Pages/HomePage';
import { withSession } from '../Auth0Provider';
import FormPage from '../Pages/FormPage';
import HabitDetailPage from '../Pages/HabitDetailPage';
import AboutUs from '../AboutUs/AboutUs';

function App({ loading }) {
  if(loading) return null;

  return ( 
    <>
      <Router>
        <Route path="/aboutus" component={AboutUs} />
        <Route path="/habitDetail/:_id" component={HabitDetailPage}/>
        <Route path="/addHabit" component={FormPage} />
        <Route  path="/users/:id" component={HomePage} />
        <Route exact path="/" component={HomePage} />
      </Router>
    </>
  );
}

App.propTypes = {
  loading: PropTypes.bool
};

export default withSession(App);
