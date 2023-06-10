import React, { Component } from 'react';
import css from './Phonebook.module.css';

class Phonebook extends Component {
  onChange = inputName => {
    this.props.onChange(inputName);
  };

  render() {
    return (
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
          <button className={css.button} name="submit" type="submit">
            Add contact
          </button>
        </form>
      </div>
    );
  }
}

export default Phonebook;
