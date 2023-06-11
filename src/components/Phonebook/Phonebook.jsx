import React, { Component } from 'react';
import css from './Phonebook.module.css';
import Section from 'components/Section';
import { nanoid } from 'nanoid';

class Phonebook extends Component {
  state = {
    inputValue: '',
    contacts: [], // Array to store contacts
  };

  onChange = e => {
    this.setState({
      inputValue: e.target.value,
    });
  };

  handleButtonClick = e => {
    e.preventDefault();
    const { inputValue, contacts } = this.state;
    const newContact = {
      id: nanoid(),
      name: inputValue,
    };

    this.setState({
      contacts: [...contacts, newContact], // Add the new contact to the existing contacts array
      inputValue: '', // Reset the input value after creating a contact
    });
  };

  render() {
    const { inputValue, contacts } = this.state;

    return (
      <Section title="Phonebook">
        <div className={css.phonebook}>
          <form className={css.form} action="">
            <label className={css.label} htmlFor="name">
              Name
            </label>
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Za-яА-Я]+(([' -][a-zA-Za-яА-Я ])?[a-zA-Za-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={inputValue}
              onChange={this.onChange}
            />
            <label className={css.label} htmlFor="number">
              Number
            </label>
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />

            <button
              onClick={this.handleButtonClick}
              className={css.button}
              name="submit"
              type="submit"
            >
              Add contact
            </button>
          </form>
        </div>
        <ul>
          {contacts.map(contact => (
            <li key={contact.id}>{contact.name}</li>
          ))}
        </ul>
      </Section>
    );
  }
}

export default Phonebook;
