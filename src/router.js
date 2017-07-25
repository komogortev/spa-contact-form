import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Home from './components/Home';
import Menu   from './components/menu';
import About  from './components/slide_about';
//import Form   from './components/slide_form';
import Footer from './components/footer';


const Routes = () => {
  return (
    <Router history={hashHistory}>
      <Route path="/" component={Home}>
        <IndexRoute component={About} />
        
      </Route>
    </Router>
  );
};

export default Routes;
