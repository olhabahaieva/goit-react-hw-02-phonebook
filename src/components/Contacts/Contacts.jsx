import React, { Component } from 'react';
import css from './Contacts.module.css';
import { nanoid } from 'nanoid';

class Contacts extends Component {
  state = {
    name: '',
    id: nanoid(),
  };
  render() {
    const { inputName } = this.props;

    return (
      <ul className={css.contacts}>
        <li>{inputName}</li>
      </ul>
    );
  }
}

export default Contacts;
