import React, { Component } from 'react';
import {Fragment} from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import {NavLink} from 'react-router-dom';
import data from '../data/contactList.json';
import '../styles/contactCard.css';

class ContactDetails extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      home: '',
      mobile: '',
      birthday: ''
    };
  }

  componentDidUpdate = () => {
    const index = this.getIndex();
    let name;
    let home;
    let mobile;
    let birthday;
    let person = data[index];
    name = person.name;
    birthday = person.birthday;
    home = person.numbers.home;
    mobile = person.numbers.mobile;
    if (this.state.name !== name)
      this.setState({
        name: name,
        home: home,
        mobile: mobile,
        birthday: birthday
      });
  };

  getIndex() {
    let index;
    data.map((person, i) => {
      if (this.props.match.params.name === person.name) {
        index = i;
      }
      return index;
    });
    return index;
  }

  render() {
    //   console.log(this.props.match);
    return (
      <div id="vcard">
        <div id="card-content">
          <div id="profile">
            <span className="avatar">
              <span className="typicons-user icon" />
              <span className="info">
                {this.state.name}
                <br />
                {this.state.birthday}
                <br />
                Home:{this.state.home}
                <br />
                Mobile:{this.state.mobile}
              </span>
            </span>
          </div>
        </div>
        <BrowserRouter>
        <Fragment>
        <NavLink to={`${this.props.match.url}/delete`}><button type="button" className="btn btn-danger">Delete</button></NavLink>
        <NavLink to={`${this.props.match.url}/edit`}><button type="button" className="btn btn-warning">Edit</button></NavLink>
        </Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

export default ContactDetails;
