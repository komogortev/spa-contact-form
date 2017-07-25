import React from 'react';
import ReactDom from 'react-dom';

const Footer = () => {
  return (
    <footer>
      powered by <a href="https://nodejs.org/" target="_blank" rel="nofollow"><i className="icon-default icon-nodejs"></i></a>
      <a href="https://www.w3.org/TR/html5/"><i className="icon-default icon-html" target="_blank" rel="nofollow"></i></a>
      <a href="https://www.w3.org/standards/techs/css#w3c_all"><i className="icon-default icon-css" target="_blank" rel="nofollow"></i></a>
      <a href="https://www.javascript.com/"><i className="icon-default icon-js" target="_blank" rel="nofollow"></i></a>
    </footer>
  );
}

export default Footer;