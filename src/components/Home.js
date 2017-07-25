import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Routes from '../router';

import About  from './slide_about';

//create component that will produce HTML
const Home = ({ children }) => {
  return (
    <div className="site-wrapper main-frame">
      <div className="container">
        <About/>
        {children}
      </div>
    </div>
  );
};

export default Home;

 