import React, { Component } from 'react';
import css from './Contacts.module.css';

class Contacts extends Component {
  render() {
    const { inputName } = this.props;

    if (inputName === '') {
      return null;
    }

    return (
      <ul className={css.contacts}>
        <li>{inputName}</li>
      </ul>
    );
  }
}

export default Contacts;
