import { Component } from 'react';
import Phonebook from './Phonebook';
export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  handlePhonebookClick = inputName =>{
    this.setState(prevState =>({
      [inputName]: prevState
    }))
  }

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Phonebook onPhonebookClick={this.handlePhonebookClick}/>
      </div>
    );
  }
}
