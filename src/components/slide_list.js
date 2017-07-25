import React from 'react';
import ReactDom from 'react-dom';

const SlideList = () => {
  return (
    <ul className="unstyled slide-container">
      <li className="is-active">
        <i className="js-action icon-custom icon-experience nav-tab"></i>
        <span>Over 6 years of experience  developing web applications and  e-commerce solutions.
              Extensive knowledge of HTML5 / CSS / JavaScript.
        </span>
      </li>
      <li className="is-active"><i className="js-action icon-custom icon-cmd nav-tab"></i>
        <span>Create web applications, interactive forms, and asynchronous responsive page layouts.
              Experience working in Node / ASP / C# / PHP environments and revision control systems TFS / GitHub.
          </span>
      </li>
      <li className="is-active"><i className="js-action icon-custom icon-browser nav-tab"></i>
        <span>Performance optimization, responsive and semantic code, browser interoperability.
          Experienced user of  Adobe graphic software Photoshop/Illustrator,, Premiere/After Effect, InDesign</span>
      </li>
      <li className="is-active"><i className="js-action icon-custom icon-design nav-tab"></i>
        <span>Design and integrate ecommerce web sites using HTML, CSS, Javascript, jQuery for interactivity,
          integrate the mock-ups with e-commerce platform developed internally and technical supports after
          customers on using the k-eCommerce solution (platform developed by kCentric.NET)</span></li>
      <li className="is-active"><i className="js-action icon-custom icon-eye nav-tab"></i>
        <span>Design sites that are functional, have a clean look, and provide clear and friendly navigation
          and easy accessibility and better User Experience.
          Validate usability on different browsers, and troubleshoot code where required.</span>
      </li>
    </ul>  
  );
}

export default SlideList;

 