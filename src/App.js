import React, { Component } from 'react';
import './styles/App.css';
import ContactList from './components/ContactList';

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
