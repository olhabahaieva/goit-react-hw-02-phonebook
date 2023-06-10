import React, { Component } from 'react';
import css from './Contacts.module.css';

class Contacts extends Component {
  render() {
    return (
      <ul className={css.contacts}>
        <li>{this.props.inputName}</li>
      </ul>
    );
  }
}

export default Contacts;
