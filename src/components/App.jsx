import React, { Component } from 'react';
import Phonebook from './Phonebook';
import Contacts from './Contacts';
import Filter from './Filter';

export class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
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
        <Filter></Filter>
        <Contacts contacts={this.state.contacts} />
      </div>
    );
  }
}
