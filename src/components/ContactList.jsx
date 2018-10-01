import React, { Component } from 'react';
import data from '../data/contactList.json';
import { BrowserRouter, Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import ContactDetails from './ContactDetails';
import ReactDOM from 'react-dom';
import '../styles/App.css';


class ContactList extends Component {
  constructor() {
    super();
    this.state = {
      name: [],
      home: '',
      mobile: '',
      birthday: '',
    };
  }

  componentDidMount = () => {
    const personName = [];
    const homeNumber=[];
    const mobileNumber=[];
    const personBirthday=[];
    data.map(person => {
      personName.push(person.name);
      homeNumber.push(person.numbers.home);
      mobileNumber.push(person.numbers.mobile);
      personBirthday.push(person.birthday);
      return null;
    });
    this.setState({
      name: personName,
      home: homeNumber,
      mobile:mobileNumber,
      birthday:personBirthday
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

  addSubmit=(event)=>{
    console.log('submit clicked');
    const formElement=document.getElementById('addForm');
    const values=[];
    for(let i=0;i<formElement.length;i++){
      values.push(formElement[i].value);
    }
    event.preventDefault();
    console.log(values[0]);
    this.setState({
      name:values[0],
      birthday:values[1],
      home:values[2],
      mobile:values[3]
    });
  }

  createContact=()=>{
    ReactDOM.render(<div className="container">
    <form onSubmit={this.handleSubmit} id="addForm">
      <div className="form-group">
        <label>Name:</label>
        <input type="name" className="form-control" id="name" placeholder="Enter name" name="name" />
      </div>
      <div className="form-group">
        <label>Birthday:</label>
        <input type="birthday" className="form-control" id="birthday" placeholder="Enter birthday" name="birthday" />
      </div>
      <div className="form-group">
        <label>Home:</label>
        <input type="home" className="form-control" id="home" placeholder="Enter home number" name="home" />
      </div>
      <div className="form-group">
        <label>Mobile:</label>
        <input type="mobile" className="form-control" id="mobile" placeholder="Enter mobile number" name="mobile" />
      </div>
      <button type="submit" className="btn btn-success" onClick={this.addSubmit}>Submit</button>
    </form>
  </div>,document.getElementById("root"));

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
          <div className="add-contact"></div>
        </div>
      </BrowserRouter>
    );
  }
}

export default ContactList;
