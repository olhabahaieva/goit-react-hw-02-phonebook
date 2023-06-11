import React, { Component } from 'react';
import Phonebook from './Phonebook';
import Contacts from './Contacts';
import Filter from './Filter';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  // Filter set state function
  handleFilterClick = (e) => {
    this.setState({
      filter: e.target.value,
    });
  };

  // Enter contact name and number function
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
    const { contacts, filter } = this.state;

    // Filter the contacts based on the filter state
    const filteredContacts = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

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
        <Filter onChange={this.handleFilterClick} />
        <Contacts contacts={filteredContacts} />
      </div>
    );
  }
}
