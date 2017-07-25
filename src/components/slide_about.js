import React from 'react';
import ReactDom from 'react-dom';
import { Link } from 'react-router-dom';

import SlideList from './slide_list';


const About = () => {
  return (
    <section className="slide ">
    
      <div className="content-box content-bio">
        <div className="figure-wrapper">
          <img src="/assets/img/mike.jpg"/>
        </div>
    
        <div className="carousel-wrapper">
          <div className="carousel">
            <SlideList />
            <Link className="btn btn-primary" to="/contact">Send  message</Link>
          </div>
        </div>
        
      </div>
    </section>  
  );
}

export default About;

 