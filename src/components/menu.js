import React from 'react';
import ReactDom from 'react-dom';
import { Link } from 'react-router-dom';

//Functional component
const Menu = () => {
  return (
    <div>
      <nav className="js-navbar side-frame dock-right menu">
        <ul className="unstyled">
          <li><a href="../documents/Web_Developer-Igor_Komogortev.pdf" target="_blank" rel="nofollow"><i className="icon-default icon-pdf"></i>resume</a></li>
          <li><a href="https://ca.linkedin.com/in/igor-komogortev-bb853657" target="_blank" rel="nofollow"><i className="icon-default icon-linkedin"></i>linkedin</a></li>
          <li><a href="https://github.com/komogortev" target="_blank" rel="nofollow"><i className="icon-default icon-github"></i>github</a></li>

          <li>
            <Link className="" to="/contact">
              <i className="icon-default icon-contact"></i>contact
            </Link>
          </li>
          <li>
            <Link className="" to="/ytube">Ytube</Link>
          </li>
          <li>
            <Link className="" to="/twitt">Twitt</Link>
          </li>
          
        
        </ul>
      </nav>
      
      <a href="javascript:;" className="js-toggle menu-trigger is-active" data-action="js-navbar">
        <i className="icon-default icon-menu"></i>
        Menu
      </a>  
    </div>
  );
}

export default Menu;