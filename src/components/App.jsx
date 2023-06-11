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
    const newContact = {
      id: inputName + inputNumber,
      name: inputName,
      number: inputNumber,
    };

    this.setState((prevState) => ({
      contacts: [...prevState.contacts, newContact],
      name: '',
      number: '',
    }));
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
        <Contacts contacts={this.state.contacts} />
      </div>
    );
  }
}
