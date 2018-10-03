import React, { Component } from 'react';
import '../styles/add.css';

class AddContact extends Component {

    // constructor(props) {
    //     super(props);

    //   }
      addSubmit = event => {
        event.preventDefault();
        console.log('submit clicked');
        const formElement = document.getElementById('addForm');
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
        
        this.props.addContact(add);
      };

    render() { 
        return (
            <div id="add-contact">
            <h3>Add Contact</h3>
            <div className="container">
              <form onSubmit={this.handleSubmit} id="addForm">
                <div className="form-group">
                  <label>Name:</label>
                  <input
                    type="name"
                    className="form-control"
                    id="name"
                    placeholder="Enter name"
                    name="name"
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
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-success"
                  onClick={this.addSubmit}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        );
    }
}
 
export default AddContact;