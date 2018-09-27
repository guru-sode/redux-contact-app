import React, { Component } from 'react';
import data from './data/contactList.json';
import { BrowserRouter, Route } from 'react-router-dom';
import {NavLink} from 'react-router-dom';


class ContactList extends Component {
  constructor() {
    super();
    this.state = {
      name: []
    };
  }

  componentDidMount = () => {
    const personName = [];
    data.map(person => personName.push(person.name));
    this.setState({
      name: personName
    });
  };

  renderList() {
    const names = [];
    for (let i = 0; i < this.state.name.length; i++) {
      names.push(
      <NavLink to={`/${this.state.name[i]}`}>
              <li
          className="list-group-item"
          onClick={this.handleClick.bind(this, this.state.name[i])}
          key={this.state.name[i]}
        >
          {this.state.name[i]}
        </li>
       </NavLink> 
      );
    }
    return names;
  }
  handleClick(key){

  }


  render() {
    return (
        <BrowserRouter>
      <div>
        <h1>Contact Manager</h1>
        <div className="contact-container">
          <h3>
            Contacts <i className="fa fa-plus-circle" />
          </h3>
          <ul className="list-group">{this.renderList()}</ul>
        </div>
        <div className="conatct-details-container">
        <h3>Contact details</h3>
        <Route path='/Gurukiran' render={()=>{
            return <h1>Hello</h1>
        }}></Route>
        </div>
      </div>
      </BrowserRouter>
    );
  }
}

export default ContactList;
