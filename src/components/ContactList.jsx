// import React, { Component } from 'react';
// import { BrowserRouter, Route } from 'react-router-dom';
// import { NavLink } from 'react-router-dom';
// import ContactDetails from './ContactDetails';
// import '../styles/App.css';
// import AddContact from './AddContact';


// class ContactList extends Component {
//   constructor() {
//     super();

//     this.state = {
//       name: [],
//       data: []
//     };
//     this.addContact = this.addContact.bind(this);
//   }

//   addContact(data){
//     let name=this.state;
//    name.name.push(data.name);
//    name.data.push(data);
//    console.log(name);
//    this.setState(name);
//   }
//   componentDidMount = () => {
//     const personName = [];
//     data.map(person => personName.push(person.name));
//     this.setState({
//       name: personName,
//       data: data
//     });
//   };

//   handleDelete(deleteName) {
//     const index = this.getIndex(deleteName);
//     this.state.name.splice(index, 1);
//     this.setState({
//       name: this.state.name
//     });
//   }

//   getIndex(name) {
//     let index;
//     data.map((person, i) => {
//       if (name === person.name) {
//         index = i;
//       }
//       return index;
//     });
//     return index;
//   }

//   renderList() {
//     const names = [];
//     for (let i = 0; i < this.state.name.length; i++) {
//       names.push(
//         <li className="list-group-item" key={this.state.name[i]}>
//           <NavLink to={`/${this.state.name[i]}`} key={this.state.name[i]}>
//             {this.state.name[i]}
//           </NavLink>
//           <i
//             className="fa fa-trash-o"
//             onClick={this.handleDelete.bind(this, this.state.name[i])}
//           />
//         </li>
//       );
//     }
//     return names;
//   }

//   render() {
//     return (
//       <BrowserRouter>
//       <div>{console.log(store.dispatch({
//         type:'FETCH_NAMES'
//       }),store.getState())}</div>
//         <div>
//           <h1>Contact Manager</h1>
//           <div className="contact-container">
//             <h3>
//               Contacts{' '}
//               <NavLink to="/contact/add">
//                 <i className="fa fa-plus-circle" />
//               </NavLink>
//             </h3>
//             <ul className="list-group">{this.renderList()}</ul>
//           </div>
//           <Route
//             path="/contact/add"
//             render={props => (
//               <AddContact {...props} dataArray={this.state.data} names={this.state.name} addContact={this.addContact}/>
//             )}
//           />
//           <div className="conatct-details-container">
//             <Route
//               exact
//               path="/:name"
//               component={ContactDetails}
//               dataArray={this.state.data}
//             />
//           </div>
//         </div>
//       </BrowserRouter>
//     );
//   }
// }

// export default ContactList;

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

export class ContactList extends Component {

  constructor(props){
    super(props);
    this.getNames =this.getNames.bind(this); 
    this.displayNames = this.displayNames.bind(this)
  }
  getNames(){
    return this.props.name;
  } 

  displayNames(){
    let temp = this.getNames()
    const names = [];
    for (let i = 0; i < temp.length; i++) {
      names.push(
        <li className="list-group-item" key={temp[i]}>
          <NavLink to={`/${temp[i]}`} key={temp[i]}>
            {temp[i]}
          </NavLink>
          <i
            className="fa fa-trash-o"
            // onClick={this.handleDelete.bind(this, this.state.name[i])}
          />
        </li>
      );
    }
    return names;
  }

  render() {
    return (
      <BrowserRouter>
      <div>
      <h1>Contact Manager</h1>
           <div className="contact-container">
             <h3>
               Contacts{' '}
               <NavLink to="/contact/add">
               <i className="fa fa-plus-circle" />
              </NavLink>
             </h3>
             <ul className="list-group">{this.displayNames()}</ul>
           </div>
      </div>
      </BrowserRouter>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    name : state.name,
    data : state.data,
  }
}

const mapDispatchToProps = (dispatch)=>{
  return{
    FETCH_NAMES : dispatch({type:'FETCH_NAMES'})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
