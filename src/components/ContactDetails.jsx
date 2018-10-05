import React, { Component } from 'react';
import '../styles/contactCard.css';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

class ContactDetails extends Component {
  constructor(props){
    super(props);
    this.submit=this.submit.bind(this);
  }

  componentDidUpdate = () => {
    this.props.CONTACT_DETAILS(this.props.match.params.name);
  };

  componentDidMount = () => {
    this.props.CONTACT_DETAILS(this.props.match.params.name);
  };

  editContact() {
    console.log('submit');
  }


  submit(e) {
    e.preventDefault();
    const formElement = document.getElementById('editForm');
    const values = [];
    for (let i = 0; i < formElement.length; i++) {
      values.push(formElement[i].value);
    }
    const add = {
      name: values[0],
      numbers: {
        home: values[2],
        mobile: values[3]
      },
      birthday: values[1]
    };
    console.log(this.props.match.params.name)
    this.props.EDIT_CONTACT(add,this.props.match.params.name)
  }

  edit = () => {
    ReactDOM.render(
      <div className="container">
        <form id="editForm">
          <div className="form-group">
            <label>Name:</label>
            <input
              type="name"
              className="form-control"
              id="name"
              placeholder="Enter name"
              name="name"
              defaultValue={this.props.match.params.name}
            />
          </div>
          <div className="form-group">
            <label>Birthday:</label>
            <input
              type="birthday"
              className="form-control"
              id="birthday"
              placeholder="Enter birthday"
              name="birthday"
              defaultValue={this.props.birthday}
            />
          </div>
          <div className="form-group">
            <label>Home:</label>
            <input
              type="home"
              className="form-control"
              id="home"
              placeholder="Enter home number"
              name="home"
              defaultValue={this.props.home}
            />
          </div>
          <div className="form-group">
            <label>Mobile:</label>
            <input
              type="mobile"
              className="form-control"
              id="mobile"
              placeholder="Enter mobile number"
              name="mobile"
              defaultValue={this.props.mobile}
            />
          </div>
          <button type="submit" className="btn btn-success" onClick={this.submit}>
            Submit
          </button>
        </form>
      </div>,
      document.getElementById('edit-form')
    );
  };

  render() {
    return (
      <div id="vcard">
        <div id="card-content">
          <h3>Contact details</h3>
          <div id="profile">
            <span className="avatar">
              <span className="typicons-user icon" />
              <span className="info">
                {this.props.match.params.name}
                <br />
                {this.props.birthday}
                <br />
                Home:
                {this.props.home}
                <br />
                Mobile:
                {this.props.mobile}
              </span>
            </span>
          </div>
        </div>
        <button type="button" className="btn btn-warning" onClick={this.edit}>
          Edit
        </button>
        <div id="edit-form" />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    personName: state.particularName,
    home: state.home,
    mobile:state.mobile,
    birthday:state.birthday
  };
};
 
const mapDispatchToProps = dispatch => {
  return {
    CONTACT_DETAILS: (name) =>dispatch({type:'CONTACT_DETAILS',
    payload:name}),
    EDIT_CONTACT: (add,personName) => dispatch({type:'EDIT_CONTACT',payload:[add,personName]})
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactDetails);
