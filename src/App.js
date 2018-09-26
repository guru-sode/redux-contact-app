import React, { Component } from 'react';
import './App.css';
import ContactList from './ContactList';

class App extends Component {
  render() {
    return (
      <div className="container">
      <ContactList />
      </div>
    );
  }
}

export default App;
