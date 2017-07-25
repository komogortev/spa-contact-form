import React, { Component } from 'react';
import ReactDom from 'react-dom';

// Class based component
class Form extends Component {
  
  constructor(props) {
    super(props);  
    
    this.state = {
      name: 'Name',
      email: 'Email (required)',
      message: 'Message (Inquiry? , Freelance     Work? , or Just to Say Hi...)',
    };
  }
  
  //define return and 
  render() {
    return (
      <section className="slide ">
        <div className="content-box">
        
          <form id="contact_me_form" 
            action="/contact" 
            method="post" 
            className="">
            
            <div className="input-group">
              <label className="input-group-addon" id="name-label">Name</label>
              <input id="name" 
                  name="name" type="text" 
                  className="form-control" 
                  value={this.state.name}
                  aria-describedby="basic-addon1"
                  onChange={event => this.setState({ name: event.target.value })} />
              <span className="input-group-addon" id="name_error">Name is Required</span>
            </div>
            
            <div className="input-group">
              <label className="input-group-addon" id="name-label">Email</label>
              <input id="email" 
                name="email" type="email" 
                className="form-control" 
                value={this.state.email}
                aria-describedby="basic-addon2" 
                required="required"
                onChange={event => this.setState({ email: event.target.value })} />
              <span className="input-group-addon" id="email_error"  >Email is Required</span>
            </div>
            
            <div className="input-group">
              <label id="name-label"className="input-group-addon" >Message</label>
              <textarea id="message"
                name="message" 
                className="form-control" 
                value={this.state.message}
                aria-describedby="basic-addon3"
                onChange={event => this.setState({ message: event.target.value })} ></textarea>
              <span className="input-group-addon" id="message_error" >Message is Required</span>
            </div>
            
            <div className="input-group">
              <button type="submit" className="btn btn-primary">Submit</button>
            </div>
            
          </form>
        </div>
      </section>
    );
  }
  
  onInputChange(event) {
    let key = event.target.name;
    let value = event.target.value;
    
    this.setState({key: value});
  }
  
}

export default Form;