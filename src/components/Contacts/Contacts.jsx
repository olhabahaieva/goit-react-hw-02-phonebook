import React, { Component } from 'react';
import css from './Contacts.module.css';
import { nanoid } from 'nanoid'

class Contacts extends Component {
  render() {
    return (
      <ul className={css.contacts}>
        <li key={nanoid()}>{this.props.inputName}</li>
      </ul>
    );
  }
}

export default Contacts;
