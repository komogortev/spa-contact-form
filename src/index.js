import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Routes from './router';

import Home   from './components/Home';
import Ytube   from './components/projects/ytube';
import Twitt   from './components/projects/twitt';

import Menu   from './components/menu';
import Footer from './components/footer';

// import About  from './components/slide_about';
import Form   from './components/slide_form';

require('../assets/scss/app.scss');

//create component that will produce HTML
// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }
//   render(){
//     return (<div>
//         <Home/>
//       </div>);
//   }
// }

class Hello extends Component {
  render() { return <div>HELLO</div>}
}


//place component generated HTML into DOM
ReactDOM.render(
  
    <BrowserRouter>
      <div>
        <Menu />
        <Switch>
          <Route path="/contact" component={Form}/>
          <Route path="/ytube" component={Ytube}/>
          <Route path="/twitt" component={Twitt}/>
          <Route path="/" component={Home}/>      
        </Switch>
        <Footer/>
      </div>
    </BrowserRouter>
  
  , document.querySelector('.root'));
