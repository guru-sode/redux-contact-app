import React, { Component } from 'react';
import data from '../data/contactList.json';
import { BrowserRouter, Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import ContactDetails from './ContactDetails';


class ContactList extends Component {
  constructor() {
    super();
    this.state = {
      name: [],
      home: '',
      mobile: '',
      birthday: ''
    };
  }

  componentDidMount = () => {
    const personName = [];
    data.map(person => personName.push(person.name));
    this.setState({
      name: personName
    });
  };

  handleDelete(deleteName){
    const index = this.getIndex(deleteName);
    this.state.name.splice(index,1);
    console.log(this.state.name);
    this.setState({
      name:this.state.name
    });

  }

  getIndex(name) {
    let index;
    data.map((person, i) => {
      if (name === person.name) {
        index = i;
      }
      return index;
    });
    return index;
  }

  renderList() {
    const names = [];
    for (let i = 0; i < this.state.name.length; i++) {
      names.push(
          <li className="list-group-item" key={this.state.name[i]}>
            <NavLink to={`/${this.state.name[i]}`} key={this.state.name[i]}>{this.state.name[i]}</NavLink>
            <i className="fa fa-trash-o" onClick={this.handleDelete.bind(this,this.state.name[i])}  />
          </li>
      );
    }
    return names;
  }

  createContact(){
    console.log('create contact');
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <h1>Contact Manager</h1>
          <div className="contact-container">
            <h3>
              Contacts <i className="fa fa-plus-circle" onClick={this.createContact}/>
            </h3>
            <ul className="list-group">{this.renderList()}</ul>
          </div>
          <div className="conatct-details-container">
            <h3>Contact details</h3>
            <Route path="/:name" component={ContactDetails} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default ContactList;
