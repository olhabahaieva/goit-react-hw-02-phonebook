import React, { Component } from 'react';
import css from './Phonebook.module.css';
import Section from 'components/Section';

class Phonebook extends Component {

  state = {
    inputValue: '',
  };

  onChange = (e) => {
    this.setState({
      inputValue: e.target.value,
    });
  };

  //Function for the contacts component to create a new contact based on the button click
  handleButtonClick = (e) => {
    e.preventDefault();
    this.props.createContact(this.state.inputValue);
    this.setState({
      inputValue: '', // Reset the input value after creating a contact
    });
  };  

  render() {
    return (
      <Section title ='Phonebook'>
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
            onChange={this.onChange}
          />
          <button onClick={this.handleButtonClick} className={css.button} name="submit" type="submit">
            Add contact
          </button>
        </form>
      </div>
      </Section>
    );
  }
}

export default Phonebook;
