import React, { Component } from 'react';
import data from '../data/contactList.json';
import '../styles/contactCard.css';
import ReactDOM from 'react-dom';

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
    const index = this.getIndex(this.props.match.params.name);
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

  componentDidMount=()=>{
    const index = this.getIndex(this.props.match.params.name);
    let name;
    let home;
    let mobile;
    let birthday;
    let person = data[index];
    name = person.name;
    birthday = person.birthday;
    home = person.numbers.home;
    mobile = person.numbers.mobile;
    this.setState({
      name: name,
      home: home,
      mobile: mobile,
      birthday: birthday
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

  editContact(){
    console.log('submit');
  }

  handleChangeName=(event)=>{
    console.log(event.target.value);
    this.setState({
      name:event.target.value
    })
  }

  edit=()=>{
    ReactDOM.render(<div className="container">
    <form>
      <div className="form-group">
        <label>Name:</label>
        <input type="name" className="form-control" id="name" placeholder="Enter name" name="name" defaultValue={this.state.name} onChange={this.handleChangeName} />
      </div>
      <div className="form-group">
        <label>Birthday:</label>
        <input type="birthday" className="form-control" id="birthday" placeholder="Enter birthday" name="birthday" defaultValue={this.state.birthday} onChange={this.handleChangeBirth} />
      </div>
      <div className="form-group">
        <label>Home:</label>
        <input type="home" className="form-control" id="home" placeholder="Enter home number" name="home" defaultValue={this.state.home} onChange={this.handleChangeHome}/>
      </div>
      <div className="form-group">
        <label>Mobile:</label>
        <input type="mobile" className="form-control" id="mobile" placeholder="Enter mobile number" name="mobile" defaultValue={this.state.mobile}  onChange={this.handleChangeMobile}/>
      </div>
      <button type="submit" className="btn btn-success" >Submit</button>
    </form>
  </div>,document.getElementById('edit-form'));
  }

  render() {
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
      <button type="button" className="btn btn-warning" onClick={this.edit}>Edit</button>
      <div id="edit-form"></div>
      </div>
    );
  }
}

export default ContactDetails;
