import { Component } from 'react';
import Phonebook from './Phonebook';
import Contacts from './Contacts';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

//Function for the phonebook component to take the initial input value
  handlePhonebookClick = (inputName) => {
    this.setState({
      name: inputName,
    });
  };


  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: "column",
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Phonebook createContact={this.handlePhonebookClick} />
        <Contacts inputName={this.state.name} />
      </div>
    );
  }
}
