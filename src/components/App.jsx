import React, { Component } from 'react';
import Phonebook from './Phonebook';
import Contacts from './Contacts';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  handlePhonebookClick = (inputName, inputNumber) => {
    this.setState({
      name: inputName,
      number: inputNumber,
    });
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Phonebook createContact={this.handlePhonebookClick} />
        <Contacts
          inputName={this.state.name}
          inputNumber={this.state.number}
        />
      </div>
    );
  }
}
